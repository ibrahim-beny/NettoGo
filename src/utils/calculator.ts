export type CalcInput = {
  brutoMaandsalaris: number;   // >0
  leeftijd: number;            // niet gebruikt in MVP; later voor AOW-variant
  urenPerWeek: number;         // 1..60; fulltime = 40
  vakantiegeldAan: boolean;    // 8% over jaarBasis
  pensioenBijdragePct: number; // 0..100 (werknemer); over jaarBasis + 13e
  dertiendeMaandAan: boolean;  // 1x bruto maand (geschaald)
};

export type CalcOutput = {
  nettoPerMaand: number;
  tussenstappen: {
    schaalFactor: number;
    brutoMaandGeschaald: number;
    jaarBasis: number;
    vakantiegeld: number;
    dertiendeMaand: number;
    jaarTotaalBruto: number;
    pensioenAftrek: number;
    belastbaarJaar: number;
    belastingJaar: number;       // vóór heffingskortingen
    heffingskortingen: number;   // algemene + arbeids
    belastingNaKorting: number;
    nettoJaar: number;
  };
};

// ---- 2025 parameters (niet-AOW) ----
// Box-1 tarieven 2025: 35,82% / 37,48% / 49,50% met grenzen 38.441 en 76.817
const BOX1_BANDS_2025 = [
  { upto: 38441, rate: 0.3582 },
  { upto: 76817, rate: 0.3748 },
  { upto: Infinity, rate: 0.495 },
];

// Algemene heffingskorting 2025 (max 3.068; afbouw vanaf 28.406 met 6,337%; bij 76.817 ≈ 0)
export function algemeneHeffingskorting2025(ink: number): number {
  const max = 3068;
  const drempel = 28406;
  const afbouwPct = 0.06337;
  if (ink <= drempel) return max;
  if (ink >= 76817) return 0;
  const k = max - (ink - drempel) * afbouwPct;
  return Math.max(0, Math.min(max, k));
}

// Arbeidskorting 2025 (niet-AOW) – piecewise officiële tabel
export function arbeidskorting2025(arbInk: number): number {
  const a = 12169;
  const b = 26288;
  const c = 43071;
  const d = 129078;

  if (arbInk <= 0) return 0;

  if (arbInk <= a) return 0.08053 * arbInk;

  if (arbInk <= b) return 980 + 0.3003 * (arbInk - a);

  if (arbInk <= c) return 5220 + 0.02258 * (arbInk - b);

  if (arbInk < d) {
    const k = 5599 - 0.06510 * (arbInk - c);
    return Math.max(0, k);
  }
  return 0;
}

// ---------------- helpers ----------------
function berekenBelasting(jaarInk: number): number {
  let resterend = jaarInk;
  let begin = 0;
  let totaal = 0;
  for (const band of BOX1_BANDS_2025) {
    const grens = band.upto;
    const deel = Math.max(0, Math.min(resterend, grens - begin));
    totaal += deel * band.rate;
    resterend -= deel;
    begin = grens;
    if (resterend <= 0) break;
  }
  return totaal;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function assertInputs(i: CalcInput) {
  if (!(i.brutoMaandsalaris > 0)) throw new Error("Voer een geldig bruto maandsalaris (> 0) in.");
  if (!(i.urenPerWeek > 0 && i.urenPerWeek <= 60)) throw new Error("Uren per week moet tussen 1 en 60 liggen.");
  i.pensioenBijdragePct = clamp(i.pensioenBijdragePct, 0, 100);
}

// ---------------- kern ----------------
export function calculateNetMonthly(i: CalcInput): CalcOutput {
  assertInputs(i);
  const FULLTIME = 40;
  const VAK_PCT = 0.08; // 8%

  const schaalFactor = i.urenPerWeek / FULLTIME;
  const brutoMaandGeschaald = i.brutoMaandsalaris * schaalFactor;

  const jaarBasis = brutoMaandGeschaald * 12;
  const vakantiegeld = i.vakantiegeldAan ? jaarBasis * VAK_PCT : 0;
  const dertiendeMaand = i.dertiendeMaandAan ? brutoMaandGeschaald : 0;

  const jaarTotaalBruto = jaarBasis + vakantiegeld + dertiendeMaand;

  // MVP‑aanname: pensioen over jaarBasis + 13e (niet over vakantiegeld)
  const pensioenAftrek = (jaarBasis + dertiendeMaand) * (i.pensioenBijdragePct / 100);

  const belastbaarJaar = Math.max(0, jaarTotaalBruto - pensioenAftrek);

  // Box‑1 belasting vóór kortingen
  const belastingJaar = berekenBelasting(belastbaarJaar);

  // Heffingskortingen — MVP: op basis van belastbaarJaar als benadering van arbeids-/verzamelinkomen
  const alg = algemeneHeffingskorting2025(belastbaarJaar);
  const arb = arbeidskorting2025(belastbaarJaar);
  const heffingskortingen = Math.max(0, alg + arb);

  const belastingNaKorting = Math.max(0, belastingJaar - heffingskortingen);
  const nettoJaar = belastbaarJaar - belastingNaKorting;
  const nettoPerMaand = nettoJaar / 12;

  return {
    nettoPerMaand,
    tussenstappen: {
      schaalFactor,
      brutoMaandGeschaald,
      jaarBasis,
      vakantiegeld,
      dertiendeMaand,
      jaarTotaalBruto,
      pensioenAftrek,
      belastbaarJaar,
      belastingJaar,
      heffingskortingen,
      belastingNaKorting,
      nettoJaar,
    },
  };
}

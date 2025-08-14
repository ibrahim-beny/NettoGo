export type CalcInput = {
  brutoMaandsalaris: number;   // >0
  leeftijd: number | undefined;            // niet gebruikt in MVP; later voor AOW-variant
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

// ---------------- NIEUWE FORMULE IMPLEMENTATIE ---------------- 
export function calculateNetMonthly(i: CalcInput): CalcOutput {
  // Input validatie
  if (!(i.brutoMaandsalaris > 0)) throw new Error("Voer een geldig bruto maandsalaris (> 0) in.");
  if (!(i.urenPerWeek > 0 && i.urenPerWeek <= 60)) throw new Error("Uren per week moet tussen 1 en 60 liggen.");
  const employeePensionPct = Math.max(0, Math.min(100, i.pensioenBijdragePct));
  
  const FULLTIME = 40;
  const VAK_PCT = 0.08; // 8%

  const schaalFactor = i.urenPerWeek / FULLTIME;
  const brutoMaandGeschaald = i.brutoMaandsalaris * schaalFactor;

  // Basis jaarloon (zonder extra's)
  const jaarBasis = brutoMaandGeschaald * 12;
  
  // Pensioen werknemer over BASIS-jaarloon (pre-tax)
  const pensioenAftrek = Math.round(jaarBasis * (employeePensionPct / 100));

  // Belastbare basis (zonder extra's)
  const belastbaarBasis = Math.max(0, jaarBasis - pensioenAftrek);

  // Jaarbelasting (na kortingen) op basis
  const yearTaxAfterCred_Basis = yearTaxAfterCreditsC(
    belastbaarBasis, true, cfg2025
  );

  // Zvw: standaard niet inhouden (werkgeverslast)
  const zvwBasis = 0; // Zvw wordt niet ingehouden volgens nieuwe formule

  // Intern: jaarnetto zonder extra's
  const jaarNettoBasis = jaarBasis - pensioenAftrek - yearTaxAfterCred_Basis - zvwBasis;

  // --- Extra's via delta-methode ---
  let vakantiegeld = 0;
  let dertiendeMaand = 0;
  let extraBelastingVG = 0;
  let extraBelasting13 = 0;

  if (i.vakantiegeldAan) {
    const vgBruto = Math.round(jaarBasis * VAK_PCT);
    const belastbaarMetVG = Math.max(0, (jaarBasis + vgBruto) - pensioenAftrek);
    const yearTaxAfterCred_WithVG = yearTaxAfterCreditsC(
      belastbaarMetVG, true, cfg2025
    );
    extraBelastingVG = Math.max(0, yearTaxAfterCred_WithVG - yearTaxAfterCred_Basis);
    vakantiegeld = vgBruto - extraBelastingVG;
  }

  if (i.dertiendeMaandAan) {
    const dertiendeBruto = brutoMaandGeschaald;
    const belastbaarMet13 = Math.max(0, (jaarBasis + dertiendeBruto) - pensioenAftrek);
    const yearTaxAfterCred_With13 = yearTaxAfterCreditsC(
      belastbaarMet13, true, cfg2025
    );
    extraBelasting13 = Math.max(0, yearTaxAfterCred_With13 - yearTaxAfterCred_Basis);
    dertiendeMaand = dertiendeBruto - extraBelasting13;
  }

  // Totalen JAAR incl. extra's
  const jaarTotaalBruto = jaarBasis + vakantiegeld + dertiendeMaand;
  const jaarNettoInclExtras = jaarNettoBasis + vakantiegeld + dertiendeMaand;

  // Uiteindelijke UI-waarden (netto per maand zonder extra's)
  const nettoPerMaand = Math.max(0, Math.round(jaarNettoBasis / 12));

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
      belastbaarJaar: belastbaarBasis,
      belastingJaar: yearTaxAfterCred_Basis,
      heffingskortingen: 0, // Wordt intern berekend in yearTaxAfterCreditsC
      belastingNaKorting: yearTaxAfterCred_Basis,
      nettoJaar: jaarNettoInclExtras,
    },
  };
}

// ---------------- NIEUWE FORMULE HELPER FUNCTIES ---------------- 
type TaxBracket = { upto: number; rate: number };
type TaxConfig = {
  bracketsNonAOW: TaxBracket[];
  generalCreditNonAOW: (verzamelinkomen: number) => number;
  labourCreditNonAOW: (arbeidsinkomen: number) => number;
  zvw: { employeeRate: number; maxBase: number; withholdFromEmployee: boolean };
};

const cfg2025: TaxConfig = {
  bracketsNonAOW: [
    { upto: 38441, rate: 35.82 },
    { upto: 76817, rate: 37.48 },
    { upto: Infinity, rate: 49.50 }
  ],
  generalCreditNonAOW: (v: number) => {
    if (v <= 28406) return 3068;
    if (v >= 76817) return 0;
    const afbouw = 0.06337 * (v - 28406);
    return Math.max(0, Math.round((3068 - afbouw) * 100) / 100);
  },
  labourCreditNonAOW: (ai: number) => {
    if (ai <= 0) return 0;
    if (ai < 12169) return 0.08053 * ai;
    if (ai < 26288) return 980 + 0.30030 * (ai - 12169);
    if (ai < 43071) return 5220 + 0.02258 * (ai - 26288);
    if (ai < 129078) return Math.max(0, 5599 - 0.06510 * (ai - 43071));
    return 0;
  },
  zvw: { employeeRate: 5.26, maxBase: 75864, withholdFromEmployee: false }
};

function taxByBrackets(yearly: number, brackets: TaxBracket[]) {
  let remaining = yearly, last = 0, tax = 0;
  for (const b of brackets) {
    const span = Math.min(remaining, b.upto - last);
    if (span > 0) {
      tax += span * (b.rate / 100);
      remaining -= span;
      last = b.upto;
    }
    if (remaining <= 0) break;
  }
  return Math.round(tax * 100); // → centen
}

function yearTaxAfterCreditsC(
  taxableYear: number,
  applyCredits: boolean,
  cfg: TaxConfig
) {
  const brackets = cfg.bracketsNonAOW; // Altijd niet-AOW in deze implementatie
  const grossTaxC = taxByBrackets(taxableYear, brackets);

  const gen = applyCredits ? cfg.generalCreditNonAOW(taxableYear) : 0;
  const lab = applyCredits ? cfg.labourCreditNonAOW(taxableYear) : 0;

  const creditsC = Math.min(grossTaxC, Math.round((gen + lab) * 100));
  return Math.max(0, grossTaxC - creditsC) / 100; // Terug naar euro's
}

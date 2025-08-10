export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export function validateSalaryInput(input: {
  brutoMaandsalaris: string;
  leeftijd: string;
  urenPerWeek: string;
  pensioenBijdragePct: string;
}): ValidationResult {
  const errors: ValidationError[] = [];

  // Bruto maandsalaris validatie
  const bruto = parseFloat(input.brutoMaandsalaris);
  if (isNaN(bruto) || bruto <= 0) {
    errors.push({
      field: 'brutoMaandsalaris',
      message: 'Voer een geldig bruto maandsalaris in (groter dan 0)'
    });
  } else if (bruto > 100000) {
    errors.push({
      field: 'brutoMaandsalaris',
      message: 'Bruto maandsalaris lijkt onrealistisch hoog (> €100.000)'
    });
  }

  // Leeftijd validatie
  const leeftijd = parseInt(input.leeftijd);
  if (isNaN(leeftijd) || leeftijd < 16 || leeftijd > 100) {
    errors.push({
      field: 'leeftijd',
      message: 'Voer een geldige leeftijd in (16-100 jaar)'
    });
  }

  // Uren per week validatie
  const uren = parseInt(input.urenPerWeek);
  if (isNaN(uren) || uren < 1 || uren > 60) {
    errors.push({
      field: 'urenPerWeek',
      message: 'Uren per week moet tussen 1 en 60 liggen'
    });
  }

  // Pensioenbijdrage validatie
  const pensioen = parseFloat(input.pensioenBijdragePct);
  if (isNaN(pensioen) || pensioen < 0 || pensioen > 100) {
    errors.push({
      field: 'pensioenBijdragePct',
      message: 'Pensioenbijdrage moet tussen 0% en 100% liggen'
    });
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('nl-NL').format(Math.round(value));
}

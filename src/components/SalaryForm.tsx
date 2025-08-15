import React, { useState, useEffect } from 'react';
import { CalcInput } from '../utils/calculator';
import { validateSalaryInput, ValidationError } from '../utils/validators';

interface SalaryFormProps {
  onCalculate: (input: CalcInput) => void;
}

export const SalaryForm: React.FC<SalaryFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<CalcInput>({
    brutoMaandsalaris: 0,
    leeftijd: undefined,
    urenPerWeek: 40,
    vakantiegeldAan: true,
    pensioenBijdragePct: 0,
    dertiendeMaandAan: false,
  });

  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [touched, setTouched] = useState<Set<string>>(new Set());

  // Real-time berekeningen triggeren wanneer formData verandert
  useEffect(() => {
    // Alleen berekenen als er minimaal een bruto maandsalaris is ingevuld
    if (formData.brutoMaandsalaris > 0) {
      // Kleine vertraging om te voorkomen dat er te veel berekeningen worden uitgevoerd
      const timeoutId = setTimeout(() => {
        // Valideer input voordat we berekenen
        const validation = validateSalaryInput({
          brutoMaandsalaris: formData.brutoMaandsalaris.toString(),
          leeftijd: '25', // Standaard leeftijd voor berekeningen
          urenPerWeek: formData.urenPerWeek.toString(),
          pensioenBijdragePct: formData.pensioenBijdragePct.toString(),
        });

        if (validation.isValid) {
          onCalculate(formData);
        }
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [formData, onCalculate]);

  const handleInputChange = (field: keyof CalcInput, value: string | number | boolean | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Mark field as touched for validation
    setTouched(prev => new Set(prev).add(field));
    
    // Clear error for this field
    setErrors(prev => prev.filter(error => error.field !== field));
    
    // Valideer het veld onmiddellijk
    if (field === 'brutoMaandsalaris' || field === 'urenPerWeek' || field === 'pensioenBijdragePct') {
      const validation = validateSalaryInput({
        brutoMaandsalaris: field === 'brutoMaandsalaris' ? (value || 0).toString() : formData.brutoMaandsalaris.toString(),
        leeftijd: '25', // Standaard leeftijd voor validatie
        urenPerWeek: field === 'urenPerWeek' ? (value || 40).toString() : formData.urenPerWeek.toString(),
        pensioenBijdragePct: field === 'pensioenBijdragePct' ? (value || 0).toString() : formData.pensioenBijdragePct.toString(),
      });

      // Toon alleen fouten voor dit specifieke veld
      const fieldErrors = validation.errors.filter(error => error.field === field);
      if (fieldErrors.length > 0) {
        setErrors(prev => [...prev.filter(error => error.field !== field), ...fieldErrors]);
      }
    }
  };

  const getFieldError = (field: string): string | undefined => {
    return errors.find(error => error.field === field)?.message;
  };

  const isFieldTouched = (field: string): boolean => {
    return touched.has(field);
  };

  return (
    <div className="space-y-8">
      {/* Main Input Fields */}
      <div className="space-y-6">
        {/* Bruto Maandsalaris */}
        <div className="space-y-3">
          <label htmlFor="brutoMaandsalaris" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></div>
            Bruto Maandsalaris
            <div className="relative group">
              <svg className="w-4 h-4 text-slate-400 cursor-help hover:text-slate-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                Je bruto maandsalaris voordat belastingen en premies worden afgehouden
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
              </div>
            </div>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium">
              €
            </span>
            <input
              type="number"
              id="brutoMaandsalaris"
              name="bruto-maandsalaris"
              value={formData.brutoMaandsalaris === 0 ? '' : formData.brutoMaandsalaris}
              onChange={(e) => handleInputChange('brutoMaandsalaris', e.target.value === '' ? 0 : parseFloat(e.target.value))}
              className={`pl-10 pr-4 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 w-full text-lg font-medium ${
                getFieldError('brutoMaandsalaris') && isFieldTouched('brutoMaandsalaris') 
                  ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500 bg-red-50' 
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
              min="0"
              step="100"
              required
              aria-label="Voer je bruto maandsalaris in euro's in voor netto salaris berekening"
              placeholder="Bijv. 3500"
            />
          </div>
          {getFieldError('brutoMaandsalaris') && isFieldTouched('brutoMaandsalaris') && (
            <p className="text-sm text-red-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              {getFieldError('brutoMaandsalaris')}
            </p>
          )}
        </div>
      </div>

      {/* Assumpties Section */}
      <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-200/50">
        <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-3">
          <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c.836 1.372 2.942.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          Assumpties (aanpasbaar)
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Deze waarden worden standaard gebruikt maar kun je aanpassen naar jouw situatie
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Uren per week */}
          <div className="space-y-3">
            <label htmlFor="urenPerWeek" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Uren per week
              <div className="relative group">
                <svg className="w-4 h-4 text-slate-400 cursor-help hover:text-slate-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                  Het aantal uren dat je per week werkt volgens je contract
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                </div>
              </div>
            </label>
            <input
              type="number"
              id="urenPerWeek"
              value={formData.urenPerWeek}
              onChange={(e) => handleInputChange('urenPerWeek', parseInt(e.target.value) || 40)}
              className={`px-4 py-4 border-2 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 w-full text-lg font-medium ${
                getFieldError('urenPerWeek') && isFieldTouched('urenPerWeek') 
                  ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500 bg-red-50' 
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
              min="1"
              max="60"
            />
            {getFieldError('urenPerWeek') && isFieldTouched('urenPerWeek') && (
              <p className="text-sm text-red-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                {getFieldError('urenPerWeek')}
              </p>
            )}
          </div>

          {/* Pensioenbijdrage */}
          <div className="space-y-3">
            <label htmlFor="pensioenBijdragePct" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              Pensioenbijdrage (%)
              <div className="relative group">
                <svg className="w-4 h-4 text-slate-400 cursor-help hover:text-slate-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                  Het percentage van je salaris dat je bijdraagt aan je pensioen (0% als je werkgever dit betaalt)
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                </div>
              </div>
            </label>
            <input
              type="number"
              id="pensioenBijdragePct"
              value={formData.pensioenBijdragePct}
              onChange={(e) => handleInputChange('pensioenBijdragePct', e.target.value === '' ? 0 : parseFloat(e.target.value))}
              className={`px-4 py-4 border-2 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 w-full text-lg font-medium ${
                getFieldError('pensioenBijdragePct') && isFieldTouched('pensioenBijdragePct') 
                  ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500 bg-red-50' 
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
              min="0"
              max="100"
              step="0.1"
            />
            {getFieldError('pensioenBijdragePct') && isFieldTouched('pensioenBijdragePct') && (
              <p className="text-sm text-red-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                {getFieldError('pensioenBijdragePct')}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Checkboxes Section */}
      <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-200/50">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-3">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c.836 1.372 2.942.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          Extra Opties
        </h3>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
            <input
              type="checkbox"
              id="vakantiegeldAan"
              checked={formData.vakantiegeldAan}
              onChange={(e) => handleInputChange('vakantiegeldAan', e.target.checked)}
              className="w-5 h-5 text-blue-600 bg-white border-2 border-slate-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:ring-offset-0 focus:border-blue-500 transition-all duration-200"
            />
            <label htmlFor="vakantiegeldAan" className="ml-3 text-sm font-medium text-slate-700 cursor-pointer">
              Vakantiegeld (8% van je salaris)
            </label>
          </div>

          <div className="flex items-center p-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
            <input
              type="checkbox"
              id="dertiendeMaandAan"
              checked={formData.dertiendeMaandAan}
              onChange={(e) => handleInputChange('dertiendeMaandAan', e.target.checked)}
              className="w-5 h-5 text-blue-600 bg-white border-2 border-slate-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:ring-offset-0 focus:border-blue-500 transition-all duration-200"
            />
            <label htmlFor="dertiendeMaandAan" className="ml-3 text-sm font-medium text-slate-700 cursor-pointer">
              Dertiende maand (extra maand salaris)
            </label>
          </div>
        </div>
      </div>

      {/* Real-time berekening info */}
      <div className="text-center p-4 bg-blue-50/50 rounded-xl border border-blue-200/50">
        <div className="flex items-center justify-center gap-2 text-blue-700">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Berekeningen worden automatisch bijgewerkt terwijl je typt</span>
        </div>
      </div>
    </div>
  );
};

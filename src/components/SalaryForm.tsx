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
  const [isAdvancedOptionsOpen, setIsAdvancedOptionsOpen] = useState(false);

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

      {/* Uitklapbaar Geavanceerde Opties Menu */}
      <div className="bg-slate-50/50 rounded-2xl border border-slate-200/50 overflow-hidden">
        {/* Klikbare header */}
        <button
          type="button"
          onClick={() => setIsAdvancedOptionsOpen(!isAdvancedOptionsOpen)}
          className="w-full p-6 flex items-center justify-between hover:bg-slate-100/50 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
          aria-expanded={isAdvancedOptionsOpen}
          aria-controls="advanced-options-content"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c.836 1.372 2.942.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-slate-800">
                Pas je berekening aan
              </h3>
              <p className="text-sm text-slate-600">
                Momenteel berekend op basis van 40 uur per week en 0% pensioenbijdrage. Pas dit hier aan als jouw situatie anders is.
              </p>
            </div>
          </div>
          <div className={`transform transition-transform duration-200 ${isAdvancedOptionsOpen ? 'rotate-180' : ''}`}>
            <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </button>

        {/* Uitklapbare content */}
        <div 
          id="advanced-options-content"
          className={`transition-all duration-300 ease-in-out ${
            isAdvancedOptionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
          style={{ maxHeight: isAdvancedOptionsOpen ? '1000px' : '0px' }}
        >
          <div className="px-6 pb-6 pt-2 space-y-6">
            {/* Assumpties subsectie */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/30 shadow-sm">
              <h4 className="text-md font-semibold text-slate-800 mb-5 flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                Jouw werkbasis
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Uren per week */}
                <div className="space-y-2">
                  <label htmlFor="urenPerWeek" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Uren per week
                    <div className="relative group">
                      <svg className="w-3.5 h-3.5 text-slate-400 cursor-help hover:text-slate-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                        Het aantal uren dat je per week werkt
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-slate-900"></div>
                      </div>
                    </div>
                  </label>
                  <input
                    type="number"
                    id="urenPerWeek"
                    value={formData.urenPerWeek}
                    onChange={(e) => handleInputChange('urenPerWeek', parseInt(e.target.value) || 40)}
                    className={`px-3 py-3 border-2 rounded-lg focus:ring-3 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 w-full text-md font-medium ${
                      getFieldError('urenPerWeek') && isFieldTouched('urenPerWeek') 
                        ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500 bg-red-50' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                    min="1"
                    max="60"
                  />
                  {getFieldError('urenPerWeek') && isFieldTouched('urenPerWeek') && (
                    <p className="text-xs text-red-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {getFieldError('urenPerWeek')}
                    </p>
                  )}
                </div>

                {/* Pensioenbijdrage */}
                <div className="space-y-2">
                  <label htmlFor="pensioenBijdragePct" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    Pensioenbijdrage (%)
                    <div className="relative group">
                      <svg className="w-3.5 h-3.5 text-slate-400 cursor-help hover:text-slate-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                        Percentage pensioen bijdrage (0% als werkgever betaalt)
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-slate-900"></div>
                      </div>
                    </div>
                  </label>
                  <input
                    type="number"
                    id="pensioenBijdragePct"
                    value={formData.pensioenBijdragePct}
                    onChange={(e) => handleInputChange('pensioenBijdragePct', e.target.value === '' ? 0 : parseFloat(e.target.value))}
                    className={`px-3 py-3 border-2 rounded-lg focus:ring-3 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 w-full text-md font-medium ${
                      getFieldError('pensioenBijdragePct') && isFieldTouched('pensioenBijdragePct') 
                        ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500 bg-red-50' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                    min="0"
                    max="100"
                    step="0.1"
                  />
                  {getFieldError('pensioenBijdragePct') && isFieldTouched('pensioenBijdragePct') && (
                    <p className="text-xs text-red-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {getFieldError('pensioenBijdragePct')}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Extra opties subsectie */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/30 shadow-sm">
              <h4 className="text-md font-semibold text-slate-800 mb-5 flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                Extra Uitkeringen
              </h4>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-slate-50/70 rounded-xl border border-slate-200/60 hover:border-slate-300/60 hover:bg-slate-50 transition-all duration-200">
                  <input
                    type="checkbox"
                    id="vakantiegeldAan"
                    checked={formData.vakantiegeldAan}
                    onChange={(e) => handleInputChange('vakantiegeldAan', e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-white border-2 border-slate-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:ring-offset-0 focus:border-blue-500 transition-all duration-200"
                  />
                  <label htmlFor="vakantiegeldAan" className="ml-4 text-sm font-medium text-slate-700 cursor-pointer">
                    Vakantiegeld (8% van je salaris)
                  </label>
                </div>

                <div className="flex items-center p-4 bg-slate-50/70 rounded-xl border border-slate-200/60 hover:border-slate-300/60 hover:bg-slate-50 transition-all duration-200">
                  <input
                    type="checkbox"
                    id="dertiendeMaandAan"
                    checked={formData.dertiendeMaandAan}
                    onChange={(e) => handleInputChange('dertiendeMaandAan', e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-white border-2 border-slate-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:ring-offset-0 focus:border-blue-500 transition-all duration-200"
                  />
                  <label htmlFor="dertiendeMaandAan" className="ml-4 text-sm font-medium text-slate-700 cursor-pointer">
                    Dertiende maand (extra maand salaris)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

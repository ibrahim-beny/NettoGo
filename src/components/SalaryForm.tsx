import React, { useState, useEffect } from 'react';
import { CalcInput } from '../utils/calculator';
import { validateSalaryInput, ValidationError } from '../utils/validators';

interface SalaryFormProps {
  onCalculate: (input: CalcInput) => void;
  isLoading?: boolean;
}

export const SalaryForm: React.FC<SalaryFormProps> = ({ onCalculate, isLoading = false }) => {
  const [formData, setFormData] = useState<CalcInput>({
    brutoMaandsalaris: 4000,
    leeftijd: 35,
    urenPerWeek: 40,
    vakantiegeldAan: true,
    pensioenBijdragePct: 0,
    dertiendeMaandAan: false,
  });

  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const handleInputChange = (field: keyof CalcInput, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Mark field as touched for validation
    setTouched(prev => new Set(prev).add(field));
    
    // Clear error for this field
    setErrors(prev => prev.filter(error => error.field !== field));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateSalaryInput({
      brutoMaandsalaris: formData.brutoMaandsalaris.toString(),
      leeftijd: formData.leeftijd.toString(),
      urenPerWeek: formData.urenPerWeek.toString(),
      pensioenBijdragePct: formData.pensioenBijdragePct.toString(),
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    onCalculate(formData);
  };

  const getFieldError = (field: string): string | undefined => {
    return errors.find(error => error.field === field)?.message;
  };

  const isFieldTouched = (field: string): boolean => {
    return touched.has(field);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bruto Maandsalaris */}
        <div className="form-group">
          <label htmlFor="brutoMaandsalaris" className="form-label flex items-center gap-2">
            Bruto Maandsalaris
            <div className="relative group">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                Je bruto maandsalaris voordat belastingen en premies worden afgehouden
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              €
            </span>
                         <input
               type="number"
               id="brutoMaandsalaris"
               value={formData.brutoMaandsalaris}
               onChange={(e) => handleInputChange('brutoMaandsalaris', parseFloat(e.target.value) || 0)}
               className={`pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 w-full ${getFieldError('brutoMaandsalaris') && isFieldTouched('brutoMaandsalaris') ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
               placeholder="4000"
               min="0"
               step="100"
               required
             />
          </div>
          {getFieldError('brutoMaandsalaris') && isFieldTouched('brutoMaandsalaris') && (
            <p className="form-error">{getFieldError('brutoMaandsalaris')}</p>
          )}
        </div>

        {/* Leeftijd */}
        <div className="form-group">
          <label htmlFor="leeftijd" className="form-label flex items-center gap-2">
            Leeftijd
            <div className="relative group">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                Je leeftijd op 1 januari van het belastingjaar
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </label>
          <input
            type="number"
            id="leeftijd"
            value={formData.leeftijd}
            onChange={(e) => handleInputChange('leeftijd', parseInt(e.target.value) || 0)}
            className={`input-field ${getFieldError('leeftijd') && isFieldTouched('leeftijd') ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
            placeholder="35"
            min="16"
            max="100"
            required
          />
          {getFieldError('leeftijd') && isFieldTouched('leeftijd') && (
            <p className="form-error">{getFieldError('leeftijd')}</p>
          )}
        </div>

        {/* Uren per week */}
        <div className="form-group">
          <label htmlFor="urenPerWeek" className="form-label flex items-center gap-2">
            Uren per week
            <div className="relative group">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                Het aantal uren dat je per week werkt volgens je contract
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </label>
          <input
            type="number"
            id="urenPerWeek"
            value={formData.urenPerWeek}
            onChange={(e) => handleInputChange('urenPerWeek', parseInt(e.target.value) || 0)}
            className={`input-field ${getFieldError('urenPerWeek') && isFieldTouched('urenPerWeek') ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
            placeholder="40"
            min="1"
            max="60"
            required
          />
          {getFieldError('urenPerWeek') && isFieldTouched('urenPerWeek') && (
            <p className="form-error">{getFieldError('urenPerWeek')}</p>
          )}
        </div>

        {/* Pensioenbijdrage */}
        <div className="form-group">
          <label htmlFor="pensioenBijdragePct" className="form-label flex items-center gap-2">
            Pensioenbijdrage (%)
            <div className="relative group">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                Het percentage van je salaris dat je bijdraagt aan je pensioen (0% als je werkgever dit betaalt)
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </label>
          <input
            type="number"
            id="pensioenBijdragePct"
            value={formData.pensioenBijdragePct}
            onChange={(e) => handleInputChange('pensioenBijdragePct', parseFloat(e.target.value) || 0)}
            className={`input-field ${getFieldError('pensioenBijdragePct') && isFieldTouched('pensioenBijdragePct') ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
            placeholder="0"
            min="0"
            max="100"
            step="0.1"
          />
          {getFieldError('pensioenBijdragePct') && isFieldTouched('pensioenBijdragePct') && (
            <p className="form-error">{getFieldError('pensioenBijdragePct')}</p>
          )}
        </div>
      </div>

      {/* Checkboxes */}
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="vakantiegeldAan"
            checked={formData.vakantiegeldAan}
            onChange={(e) => handleInputChange('vakantiegeldAan', e.target.checked)}
            className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
          />
          <label htmlFor="vakantiegeldAan" className="ml-2 text-sm font-medium text-gray-700">
            Vakantiegeld (8%)
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="dertiendeMaandAan"
            checked={formData.dertiendeMaandAan}
            onChange={(e) => handleInputChange('dertiendeMaandAan', e.target.checked)}
            className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
          />
          <label htmlFor="dertiendeMaandAan" className="ml-2 text-sm font-medium text-gray-700">
            Dertiende maand
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Berekenen...' : 'Bereken Netto Salaris'}
      </button>
    </form>
  );
};

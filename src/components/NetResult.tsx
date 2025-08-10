import React from 'react';
import { CalcOutput } from '../utils/calculator';
import { formatCurrency, formatPercentage } from '../utils/validators';

interface NetResultProps {
  result: CalcOutput | null;
  isLoading?: boolean;
}

export const NetResult: React.FC<NetResultProps> = ({ result, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="card">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  const { nettoPerMaand, tussenstappen } = result;

  return (
    <div className="card bg-gradient-to-br from-primary-50 to-purple-50 border-primary-200">
      {/* Hoofdresultaat */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          🎯 Je Netto Salaris
        </h2>
        <div className="result-highlight">
          {formatCurrency(nettoPerMaand)}
        </div>
        <p className="result-secondary">
          per maand
        </p>
      </div>

      {/* Tussenstappen */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-2">
          Berekening in Detail
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Linker kolom */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Bruto maand (geschaald):</span>
              <span className="font-medium">{formatCurrency(tussenstappen.brutoMaandGeschaald)}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Jaarbasis (12 maanden):</span>
              <span className="font-medium">{formatCurrency(tussenstappen.jaarBasis)}</span>
            </div>
            
            {tussenstappen.vakantiegeld > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Vakantiegeld (8%):</span>
                <span className="font-medium text-success-600">+{formatCurrency(tussenstappen.vakantiegeld)}</span>
              </div>
            )}
            
            {tussenstappen.dertiendeMaand > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Dertiende maand:</span>
                <span className="font-medium text-success-600">+{formatCurrency(tussenstappen.dertiendeMaand)}</span>
              </div>
            )}
            
            <div className="flex justify-between items-center font-semibold text-gray-800 pt-2 border-t border-gray-200">
              <span>Totaal bruto per jaar:</span>
              <span>{formatCurrency(tussenstappen.jaarTotaalBruto)}</span>
            </div>
          </div>

          {/* Rechter kolom */}
          <div className="space-y-3">
            {tussenstappen.pensioenAftrek > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pensioen aftrek:</span>
                <span className="font-medium text-warning-600">-{formatCurrency(tussenstappen.pensioenAftrek)}</span>
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Belastbaar inkomen:</span>
              <span className="font-medium">{formatCurrency(tussenstappen.belastbaarJaar)}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Belasting (vóór korting):</span>
              <span className="font-medium text-error-600">-{formatCurrency(tussenstappen.belastingJaar)}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Heffingskortingen:</span>
              <span className="font-medium text-success-600">+{formatCurrency(tussenstappen.heffingskortingen)}</span>
            </div>
            
            <div className="flex justify-between items-center font-semibold text-gray-800 pt-2 border-t border-gray-200">
              <span>Netto per jaar:</span>
              <span>{formatCurrency(tussenstappen.nettoJaar)}</span>
            </div>
          </div>
        </div>

        {/* Extra informatie */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm text-gray-600">Schaalfactor</div>
              <div className="font-medium">{formatPercentage(tussenstappen.schaalFactor * 100)}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Effectieve belasting</div>
              <div className="font-medium">
                {formatPercentage((tussenstappen.belastingNaKorting / tussenstappen.belastbaarJaar) * 100)}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Netto percentage</div>
              <div className="font-medium">
                {formatPercentage((tussenstappen.nettoJaar / tussenstappen.jaarTotaalBruto) * 100)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

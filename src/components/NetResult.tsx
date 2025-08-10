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
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded-xl w-1/3 mb-6"></div>
          <div className="h-6 bg-slate-200 rounded-lg w-1/2 mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 rounded w-4/6"></div>
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-700 mb-2">
          Vul je gegevens in
        </h3>
        <p className="text-slate-600">
          Start met het invullen van je salarisgegevens om je netto inkomen te berekenen
        </p>
      </div>
    );
  }

  const { nettoPerMaand, tussenstappen } = result;

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8">
      {/* Hoofdresultaat */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Je Netto Salaris
        </h2>
        <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
          {formatCurrency(nettoPerMaand)}
        </div>
        <p className="text-lg text-slate-600 font-medium">
          per maand
        </p>
      </div>

      {/* Tussenstappen */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            Berekening in Detail
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Linker kolom - Inkomsten */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Inkomsten
            </h4>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50/50 rounded-xl border border-slate-200/50">
                <span className="text-sm text-slate-600">Bruto maand (geschaald):</span>
                <span className="font-semibold text-slate-800">{formatCurrency(tussenstappen.brutoMaandGeschaald)}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-slate-50/50 rounded-xl border border-slate-200/50">
                <span className="text-sm text-slate-600">Jaarbasis (12 maanden):</span>
                <span className="font-semibold text-slate-800">{formatCurrency(tussenstappen.jaarBasis)}</span>
              </div>
              
              {tussenstappen.vakantiegeld > 0 && (
                <div className="flex justify-between items-center p-3 bg-green-50/50 rounded-xl border border-green-200/50">
                  <span className="text-sm text-slate-600">Vakantiegeld (8%):</span>
                  <span className="font-semibold text-green-600">+{formatCurrency(tussenstappen.vakantiegeld)}</span>
                </div>
              )}
              
              {tussenstappen.dertiendeMaand > 0 && (
                <div className="flex justify-between items-center p-3 bg-green-50/50 rounded-xl border border-green-200/50">
                  <span className="text-sm text-slate-600">Dertiende maand:</span>
                  <span className="font-semibold text-green-600">+{formatCurrency(tussenstappen.dertiendeMaand)}</span>
                </div>
              )}
              
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl border border-slate-300/50 font-bold text-slate-800">
                <span>Totaal bruto per jaar:</span>
                <span>{formatCurrency(tussenstappen.jaarTotaalBruto)}</span>
              </div>
            </div>
          </div>

          {/* Rechter kolom - Aftrekken */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Aftrekken
            </h4>
            
            <div className="space-y-3">
              {tussenstappen.pensioenAftrek > 0 && (
                <div className="flex justify-between items-center p-3 bg-orange-50/50 rounded-xl border border-orange-200/50">
                  <span className="text-sm text-slate-600">Pensioen aftrek:</span>
                  <span className="font-semibold text-orange-600">-{formatCurrency(tussenstappen.pensioenAftrek)}</span>
                </div>
              )}
              
              <div className="flex justify-between items-center p-3 bg-slate-50/50 rounded-xl border border-slate-200/50">
                <span className="text-sm text-slate-600">Belastbaar inkomen:</span>
                <span className="font-semibold text-slate-800">{formatCurrency(tussenstappen.belastbaarJaar)}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-red-50/50 rounded-xl border border-red-200/50">
                <span className="text-sm text-slate-600">Belasting (vóór korting):</span>
                <span className="font-semibold text-red-600">-{formatCurrency(tussenstappen.belastingJaar)}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-green-50/50 rounded-xl border border-green-200/50">
                <span className="text-sm text-slate-600">Heffingskortingen:</span>
                <span className="font-semibold text-green-600">+{formatCurrency(tussenstappen.heffingskortingen)}</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-100 to-emerald-200 rounded-xl border border-green-300/50 font-bold text-slate-800">
                <span>Netto per jaar:</span>
                <span>{formatCurrency(tussenstappen.nettoJaar)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Extra informatie */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200/50">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 text-center flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Belangrijke Metrics
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {formatPercentage(tussenstappen.schaalFactor * 100)}
              </div>
              <div className="text-sm text-slate-600 font-medium">Schaalfactor</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
              <div className="text-2xl font-bold text-red-600 mb-1">
                {formatPercentage((tussenstappen.belastingNaKorting / tussenstappen.belastbaarJaar) * 100)}
              </div>
              <div className="text-sm text-slate-600 font-medium">Effectieve belasting</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {formatPercentage((tussenstappen.nettoJaar / tussenstappen.jaarTotaalBruto) * 100)}
              </div>
              <div className="text-sm text-slate-600 font-medium">Netto percentage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

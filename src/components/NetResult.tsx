import React from 'react';
import { CalcOutput } from '../utils/calculator';
import { formatCurrency } from '../utils/validators';

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

      {/* Vereenvoudigde resultaten */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            Overzicht
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Netto maandsalaris */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-100 to-emerald-200 rounded-xl border border-green-300/50">
            <span className="text-lg font-semibold text-slate-800">Netto maandsalaris:</span>
            <span className="text-2xl font-bold text-green-600">{formatCurrency(nettoPerMaand)}</span>
          </div>
          
          {/* Bruto jaarsalaris */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl border border-blue-300/50">
            <span className="text-lg font-semibold text-slate-800">Bruto jaarsalaris (incl. extra's):</span>
            <span className="text-2xl font-bold text-blue-600">{formatCurrency(tussenstappen.jaarTotaalBruto)}</span>
          </div>
          
          {/* Netto jaarinkomen */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl border border-purple-300/50">
            <span className="text-lg font-semibold text-slate-800">Netto jaarinkomen (incl. extra's):</span>
            <span className="text-2xl font-bold text-purple-600">{formatCurrency(tussenstappen.nettoJaar)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

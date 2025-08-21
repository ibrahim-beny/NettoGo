import React from 'react';
import { CalcOutput } from '../utils/calculator';
import { formatCurrency } from '../utils/validators';
import { TrendingUp, CheckCircle, Calculator } from 'lucide-react';

interface NetResultProps {
  result: CalcOutput | null;
  isLoading?: boolean;
}

export const NetResult: React.FC<NetResultProps> = ({ result, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
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
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Calculator className="w-10 h-10 text-white" />
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
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
      {/* Hoofdresultaat */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Je Netto Salaris
        </h2>
        <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
          {formatCurrency(nettoPerMaand)}
        </div>
        <p className="text-lg text-slate-600 font-medium">
          per maand
        </p>
      </div>

      {/* Vereenvoudigde resultaten */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            Overzicht
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Netto maandsalaris */}
          <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200">
            <span className="text-lg font-semibold text-slate-800">Netto maandsalaris:</span>
            <span className="text-2xl font-bold text-green-600">{formatCurrency(nettoPerMaand)}</span>
          </div>
          
          {/* Bruto jaarsalaris */}
          <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
            <span className="text-lg font-semibold text-slate-800">Bruto jaarsalaris (incl. extra's):</span>
            <span className="text-2xl font-bold text-blue-600">{formatCurrency(tussenstappen.jaarTotaalBruto)}</span>
          </div>
          
          {/* Netto jaarinkomen */}
          <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-lg font-semibold text-slate-800">Netto jaarinkomen (incl. extra's):</span>
            <span className="text-2xl font-bold text-slate-700">{formatCurrency(tussenstappen.nettoJaar)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

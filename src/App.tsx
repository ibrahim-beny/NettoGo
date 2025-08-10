import { useState, useCallback } from 'react';
import { Layout } from './components/Layout';
import { SalaryForm } from './components/SalaryForm';
import { NetResult } from './components/NetResult';
import { CalcInput, CalcOutput, calculateNetMonthly } from './utils/calculator';

function App() {
  const [result, setResult] = useState<CalcOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = useCallback(async (input: CalcInput) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simuleer een kleine vertraging voor betere UX
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const calculatedResult = calculateNetMonthly(input);
      setResult(calculatedResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er is een fout opgetreden bij het berekenen');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleReset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl mb-6 shadow-2xl shadow-blue-500/25">
              <span className="text-4xl">🚀</span>
            </div>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            NettoGo
          </h1>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            De slimste manier om je netto salaris te berekenen. 
            Gebaseerd op de officiële Nederlandse belastingregels van 2025.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-green-200/50 shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-700">100% Privacy-vriendelijk</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              <span className="text-sm font-medium text-slate-700">Real-time berekeningen</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
              <span className="text-sm font-medium text-slate-700">Nederlandse belastingregels</span>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200/50 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white text-lg">⚠️</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Fout bij berekenen
                </h3>
                <div className="text-red-700">
                  {error}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Calculator Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-20">
          {/* Input Form */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">📝</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">
                Vul je gegevens in
              </h2>
            </div>
            <SalaryForm onCalculate={handleCalculate} isLoading={isLoading} />
            
            {result && (
              <div className="mt-8 pt-8 border-t border-slate-200/50">
                <button
                  onClick={handleReset}
                  className="w-full px-6 py-3 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-700 font-medium rounded-xl border border-slate-300/50 transition-all duration-200 hover:shadow-md active:scale-95 flex items-center justify-center"
                >
                  <span className="mr-2">🔄</span>
                  Opnieuw beginnen
                </button>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="xl:col-span-1">
            <NetResult result={result} isLoading={isLoading} />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Waarom NettoGo?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ontdek de voordelen van onze professionele salaris calculator
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Box 1 Tarieven</h3>
                <p className="text-slate-600 leading-relaxed">
                  Van 35,82% tot 49,50% afhankelijk van je inkomen, altijd up-to-date met de laatste regels.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Heffingskortingen</h3>
                <p className="text-slate-600 leading-relaxed">
                  Algemene + arbeidskorting automatisch toegepast voor maximale belastingvoordelen.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Real-time</h3>
                <p className="text-slate-600 leading-relaxed">
                  Direct resultaat bij het invoeren van gegevens, geen wachttijden of vertragingen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-200/50 p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Klaar om je netto salaris te berekenen?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Start bovenaan de pagina en vul je gegevens in. Binnen seconden heb je een nauwkeurige berekening van je netto inkomen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50 shadow-sm">
              <span className="text-sm font-medium text-slate-700">🚀 Snel & Eenvoudig</span>
            </div>
            <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-200/50 shadow-sm">
              <span className="text-sm font-medium text-slate-700">🔒 100% Veilig</span>
            </div>
            <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200/50 shadow-sm">
              <span className="text-sm font-medium text-slate-700">📱 Responsive</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;

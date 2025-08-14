import { useState, useCallback } from 'react';
import { Layout } from './components/Layout';
import { SalaryForm } from './components/SalaryForm';
import { NetResult } from './components/NetResult';
import { CalcInput, CalcOutput, calculateNetMonthly } from './utils/calculator';
import logoImage from './assets/NettoGo_zondertext.png';

function App() {
  const [result, setResult] = useState<CalcOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = useCallback(async (input: CalcInput) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simuleer een kleine vertraging voor betere UX
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const calculatedResult = calculateNetMonthly(input);
      setResult(calculatedResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er is een fout opgetreden bij het berekenen');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center">
              <img 
                src={logoImage} 
                alt="NettoGo Logo" 
                className="w-56 h-56 object-contain drop-shadow-2xl"
              />
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
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
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
            <SalaryForm onCalculate={handleCalculate} />
          </div>

          {/* Results */}
          <div className="xl:col-span-1">
            <NetResult result={result} isLoading={isLoading} />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-200/50 p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Klaar om je netto salaris te berekenen?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Start bovenaan de pagina en vul je gegevens in. Binnen seconden zie je real-time updates van je netto inkomen terwijl je typt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50 shadow-sm">
              <span className="text-sm font-medium text-slate-700">⚡ Real-time Updates</span>
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

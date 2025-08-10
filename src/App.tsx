import React, { useState, useCallback } from 'react';
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
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full mb-4">
              <span className="text-3xl">🚀</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-4">
            NettoGo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            De slimste manier om je netto salaris te berekenen. 
            Gebaseerd op de officiële Nederlandse belastingregels van 2025.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              100% Privacy-vriendelijk
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Real-time berekeningen
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Nederlandse belastingregels
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-gradient-to-r from-error-50 to-red-50 border border-error-200 rounded-lg shadow-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-error-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⚠️</span>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-error-800">
                  Fout bij berekenen
                </h3>
                <div className="mt-2 text-sm text-error-700">
                  {error}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="card bg-gradient-to-br from-gray-50 to-blue-50 border-blue-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              📝 Vul je gegevens in
            </h2>
            <SalaryForm onCalculate={handleCalculate} isLoading={isLoading} />
            
            {result && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleReset}
                  className="btn-secondary w-full flex items-center justify-center"
                >
                  <span className="mr-2">🔄</span>
                  Opnieuw beginnen
                </button>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="lg:col-span-1">
            <NetResult result={result} isLoading={isLoading} />
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Box 1 Tarieven</h3>
                <p className="text-sm text-blue-700">
                  Van 35,82% tot 49,50% afhankelijk van je inkomen
                </p>
              </div>
            </div>
            
            <div className="card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Heffingskortingen</h3>
                <p className="text-sm text-green-700">
                  Algemene + arbeidskorting voor extra voordeel
                </p>
              </div>
            </div>
            
            <div className="card bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Real-time</h3>
                <p className="text-sm text-purple-700">
                  Direct resultaat bij het invoeren van gegevens
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;

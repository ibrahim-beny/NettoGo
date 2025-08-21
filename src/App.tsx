import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SalaryForm } from './components/SalaryForm';
import { NetResult } from './components/NetResult';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Calculator } from './pages/Calculator';
import { English } from './pages/English';
import { CalcInput, CalcOutput, calculateNetMonthly } from './utils/calculator';
import logoImage from './assets/uitgesneden_logo.png';

function HomePage() {
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
        {/* Hero Section - Compacter voor mobiel */}
        <header className="text-center mb-8 lg:mb-16">
          <div className="mb-4 lg:mb-8">
            <div className="inline-flex items-center justify-center mb-2">
              <img 
                src={logoImage} 
                alt="NettoGo Logo" 
                className="w-32 h-32 lg:w-56 lg:h-56 object-contain drop-shadow-2xl"
                width="224"
                height="224"
                loading="eager"
              />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 lg:mb-6">
            NettoGo
          </h1>
          <p className="text-lg lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-4 lg:mb-8 leading-relaxed px-4">
            De snelste manier om je netto salaris te berekenen. 
            Gebaseerd op de officiële Nederlandse belastingregels van 2025.
          </p>
        </header>

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
        <section className="space-y-10 mb-20" role="main" aria-label="Bruto Netto Calculator">
          {/* Layout: Input form always first on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Input Form - Always first on mobile, left on desktop */}
            <article className="order-1 lg:order-1 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-6 lg:p-8">
              <header className="flex items-center space-x-3 mb-6 lg:mb-8">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-base lg:text-lg" aria-hidden="true">📝</span>
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-800">
                  Vul je gegevens in
                </h2>
              </header>
              <div role="form" aria-label="Salarisgegevens invoeren voor bruto naar netto berekening">
                <SalaryForm onCalculate={handleCalculate} />
              </div>
            </article>

            {/* Results - Always second on mobile, right on desktop */}
            <aside className="order-2 lg:order-2" aria-label="Netto salaris resultaten">
              <div className="sticky top-4">
                <NetResult result={result} isLoading={isLoading} />
              </div>
            </aside>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-200/50 p-12 shadow-xl mb-20">
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
              <span className="text-sm font-medium text-slate-700">📊 Accurate berekening</span>
            </div>
            <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200/50 shadow-sm">
              <span className="text-sm font-medium text-slate-700">💰 100% Gratis</span>
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Veelgestelde vragen over bruto netto berekening
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <details className="group">
              <summary className="flex justify-between items-center w-full p-6 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-800">
                  Hoe bereken ik mijn netto salaris uit mijn bruto salaris?
                </h3>
                <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="p-6 bg-white rounded-xl mt-2">
                <p className="text-slate-700 leading-relaxed">
                  Om je <strong>netto salaris te berekenen</strong> trek je van je bruto salaris de loonheffing af. 
                  Dit omvat inkomstenbelasting, algemene heffingskorting, arbeidskorting en eventuele premies. 
                  NettoGo gebruikt de officiële <strong>Nederlandse belastingtarieven 2025</strong> voor een accurate berekening.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center w-full p-6 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-800">
                  Welke belastingtarieven gelden er in Nederland in 2025?
                </h3>
                <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="p-6 bg-white rounded-xl mt-2">
                <p className="text-slate-700 leading-relaxed">
                  In 2025 hanteert Nederland verschillende <strong>belastingschijven voor Box 1 inkomen</strong>. 
                  Onze calculator gebruikt automatisch de juiste tarieven inclusief algemene heffingskorting en arbeidskorting 
                  voor een <strong>accurate netto salaris berekening</strong>.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center w-full p-6 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-800">
                  Hoe zit het met vakantiegeld en 13e maand in de berekening?
                </h3>
                <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="p-6 bg-white rounded-xl mt-2">
                <p className="text-slate-700 leading-relaxed">
                  Je kunt <strong>vakantiegeld (8%)</strong> en <strong>13e maand</strong> toevoegen aan de berekening. 
                  NettoGo berekent dan je totale netto jaarinkomen inclusief deze extra uitkeringen, 
                  zodat je precies weet wat je jaarlijks netto ontvangt.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center w-full p-6 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-800">
                  Is deze bruto netto calculator geschikt voor ZZP'ers en expats?
                </h3>
                <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="p-6 bg-white rounded-xl mt-2">
                <p className="text-slate-700 leading-relaxed">
                  Deze calculator is primair voor werknemers in loondienst. Voor <strong>ZZP'ers</strong> gelden andere belastingregels. 
                  <strong>Expats met de 30% ruling</strong> hebben speciale regelingen die niet in deze standaard calculator zitten.
                </p>
              </div>
            </details>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/hoe-bereken-je-netto-salaris-2025" element={<BlogPost />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/en" element={<English />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export const Calculator: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Bruto naar Netto Calculator
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Bereken eenvoudig je netto salaris met onze geavanceerde Nederlandse belastingcalculator voor 2025.
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8 lg:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Over Onze Calculator
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              De NettoGo calculator is ontwikkeld om het berekenen van je netto salaris zo eenvoudig mogelijk te maken. 
              We gebruiken de meest recente Nederlandse belastingtarieven van 2025 en houden rekening met alle relevante 
              factoren zoals heffingskortingen, sociale premies en extra uitkeringen.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Hoe Werkt de Calculator?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Vul eenvoudig je bruto maandsalaris, leeftijd en eventuele extra uitkeringen in. Onze calculator 
              berekent automatisch je netto inkomen op basis van de Nederlandse belastingregels. De berekening 
              houdt rekening met loonheffing, algemene heffingskorting, arbeidskorting en sociale premies.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Wat Wordt Meegenomen in de Berekening?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Onze calculator houdt rekening met alle belangrijke factoren: Nederlandse belastingtarieven 2025, 
              algemene heffingskorting, arbeidskorting, sociale premies (AOW, ANW, WIA, ZVW), vakantiegeld (8%), 
              en 13e maand indien van toepassing. Dit zorgt voor een uiterst accurate berekening van je netto inkomen.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Waarom NettoGo?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              NettoGo onderscheidt zich door zijn nauwkeurigheid, gebruiksvriendelijkheid en privacy. Alle berekeningen 
              gebeuren lokaal in je browser zonder dat je gegevens worden opgeslagen. We gebruiken de officiële 
              belastingtarieven en regelgeving, zodat je kunt vertrouwen op de resultaten.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Voor Wie is de Calculator Geschikt?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              De calculator is geschikt voor alle werknemers in loondienst in Nederland. Of je nu fulltime of parttime 
              werkt, jong of oud bent, onze tool geeft je een accurate berekening van je netto inkomen. 
              Voor ZZP'ers en expats met speciale regelingen raden we aan om een belastingadviseur te raadplegen.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Klaar om te beginnen?
              </h3>
              <p className="text-slate-700 mb-4">
                Start direct met het berekenen van je netto salaris.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Calculator
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Real-time Berekeningen</h3>
            <p className="text-slate-700 leading-relaxed">
              Zie direct hoe je netto inkomen verandert terwijl je je gegevens invoert. Geen wachttijden, 
              directe resultaten.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">100% Privacy</h3>
            <p className="text-slate-700 leading-relaxed">
              Alle berekeningen gebeuren lokaal in je browser. Je salarisgegevens worden nooit opgeslagen 
              of verzonden.
            </p>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-slate-50/80 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Meer Informatie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/blog/hoe-bereken-je-netto-salaris-2025" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Uitleg Artikel</h3>
              <p className="text-slate-600">Lees hoe de berekening werkt</p>
            </Link>
            <Link 
              to="/about" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Over NettoGo</h3>
              <p className="text-slate-600">Leer meer over onze tool</p>
            </Link>
            <Link 
              to="/contact" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact</h3>
              <p className="text-slate-600">Vragen over de calculator?</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Contact NettoGo
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Heb je vragen over onze bruto naar netto calculator? Neem gerust contact met ons op.
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8 lg:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Hoe kunnen we je helpen?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              NettoGo staat voor transparantie en betrouwbaarheid in het berekenen van netto salarissen. 
              We begrijpen dat je mogelijk vragen hebt over onze calculator, de gebruikte belastingtarieven, 
              of technische aspecten van de tool.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Veelgestelde Vragen
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Voordat je contact opneemt, bekijk eerst onze veelgestelde vragen op de homepage. 
              Daar vind je antwoorden op de meest voorkomende vragen over bruto naar netto berekeningen, 
              Nederlandse belastingtarieven 2025, en het gebruik van onze calculator.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Technische Ondersteuning
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Ervaar je technische problemen met de calculator? Probeer eerst je browser te verversen 
              of gebruik een andere browser. Onze tool werkt het beste met moderne browsers zoals Chrome, 
              Firefox, Safari en Edge.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Feedback en Suggesties
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              We waarderen je feedback en suggesties voor verbetering. Heb je ideeën voor nieuwe functies 
              of opmerkingen over de gebruiksvriendelijkheid? Laat het ons weten via onderstaande contactgegevens.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Direct aan de slag?
              </h3>
              <p className="text-slate-700 mb-4">
                Probeer onze calculator uit en ontdek hoe eenvoudig het is om je netto inkomen te bepalen.
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

        {/* Contact Information */}
        <div className="bg-slate-50/80 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Contact Informatie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">E-mail</h3>
              <p className="text-slate-600">info@nettogo.nl</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Website</h3>
              <p className="text-slate-600">www.nettogo.nl</p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-white/60 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Meer Informatie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/about" 
              className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Over Ons</h3>
              <p className="text-slate-600">Leer meer over NettoGo</p>
            </Link>
            <Link 
              to="/privacy" 
              className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Privacy</h3>
              <p className="text-slate-600">Hoe we je gegevens beschermen</p>
            </Link>
            <Link 
              to="/terms" 
              className="block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Algemene Voorwaarden</h3>
              <p className="text-slate-600">Gebruiksvoorwaarden van NettoGo</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Algemene Voorwaarden
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Gebruiksvoorwaarden en voorwaarden voor het gebruik van de NettoGo calculator.
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8 lg:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Aanvaarding van Voorwaarden
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Door het gebruik van de NettoGo bruto naar netto calculator ga je akkoord met deze algemene voorwaarden. 
              Als je het niet eens bent met deze voorwaarden, raden we je aan om de calculator niet te gebruiken.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Doel van de Calculator
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              De NettoGo calculator is uitsluitend bedoeld voor informatieve doeleinden. De berekeningen zijn gebaseerd 
              op de Nederlandse belastingwetgeving van 2025, maar kunnen geen vervanging zijn voor professioneel 
              belastingadvies. Voor officiële belastingaangiftes en complexe fiscale situaties raden we aan om 
              een belastingadviseur te raadplegen.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Nauwkeurigheid van Berekeningen
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              We streven naar maximale nauwkeurigheid in onze berekeningen, maar kunnen geen garantie geven dat 
              de resultaten 100% correct zijn voor alle individuele situaties. Belastingregels kunnen complex zijn 
              en er kunnen specifieke omstandigheden zijn die niet in onze calculator zijn opgenomen. 
              Gebruik de resultaten als richtlijn, niet als definitieve uitkomst.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Verantwoordelijkheid
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              NettoGo is niet aansprakelijk voor eventuele fouten in de berekeningen of voor beslissingen 
              die je neemt op basis van de resultaten. Je bent zelf verantwoordelijk voor het correct 
              invullen van je gegevens en het interpreteren van de uitkomsten. We raden aan om altijd 
              meerdere bronnen te raadplegen bij belangrijke financiële beslissingen.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Wijzigingen in Voorwaarden
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              We behouden het recht om deze voorwaarden op elk moment te wijzigen. Belangrijke wijzigingen 
              zullen worden aangekondigd op onze website. Het is je verantwoordelijkheid om regelmatig 
              de voorwaarden te controleren op updates. Door de calculator te blijven gebruiken na wijzigingen, 
              ga je akkoord met de nieuwe voorwaarden.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Vragen over de Voorwaarden?
              </h3>
              <p className="text-slate-700 mb-4">
                Heb je vragen over deze voorwaarden? Neem gerust contact met ons op.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Opnemen
              </Link>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-slate-50/80 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Meer Informatie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/about" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Over Ons</h3>
              <p className="text-slate-600">Leer meer over NettoGo</p>
            </Link>
            <Link 
              to="/privacy" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Privacy Policy</h3>
              <p className="text-slate-600">Hoe we je gegevens beschermen</p>
            </Link>
            <Link 
              to="/" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Calculator</h3>
              <p className="text-slate-600">Start met berekenen</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

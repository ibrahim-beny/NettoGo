import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hoe NettoGo je privacy beschermt en je gegevens veilig houdt.
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8 lg:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Onze Privacy Belofte
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Bij NettoGo geloven we dat privacy een fundamenteel recht is. We hebben onze bruto naar netto calculator 
              zo ontworpen dat je salarisgegevens volledig privé blijven en nooit worden opgeslagen of gedeeld.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Hoe Werkt Onze Calculator?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Alle berekeningen gebeuren lokaal in je browser. Dit betekent dat je salarisinformatie, 
              zoals bruto inkomen, leeftijd en andere persoonlijke gegevens, nooit naar onze servers worden verzonden. 
              De calculator werkt volledig offline en slaat geen data op.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Geen Data Opslag
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              We slaan geen cookies op die je persoonlijke informatie bijhouden. Onze website gebruikt alleen 
              essentiële cookies voor de werking van de calculator. Deze cookies bevatten geen persoonlijke 
              identificatiegegevens en worden automatisch verwijderd wanneer je je browser sluit.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Externe Diensten
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              NettoGo gebruikt geen externe diensten voor het verzamelen of analyseren van gebruikersgegevens. 
              We werken niet samen met advertentieplatforms of tracking services. Je browse-activiteit blijft 
              volledig anoniem en wordt niet gemonitord.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Beveiliging
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Onze website gebruikt HTTPS-encryptie om alle communicatie tussen je browser en onze servers te beveiligen. 
              Dit zorgt ervoor dat eventuele gegevens die worden uitgewisseld (zoals de calculator zelf) 
              versleuteld zijn en niet kunnen worden onderschept door derden.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Je Privacy is Gegarandeerd
              </h3>
              <p className="text-slate-700 mb-4">
                Gebruik onze calculator met vertrouwen, wetende dat je gegevens veilig zijn.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Calculator
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
              to="/terms" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Algemene Voorwaarden</h3>
              <p className="text-slate-600">Gebruiksvoorwaarden van NettoGo</p>
            </Link>
            <Link 
              to="/contact" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact</h3>
              <p className="text-slate-600">Vragen over privacy?</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

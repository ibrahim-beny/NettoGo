import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            NettoGo Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Expert artikelen en tips over bruto naar netto berekeningen, Nederlandse belastingen en salarisoptimalisatie.
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8 lg:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Over Onze Blog
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Welkom bij de NettoGo blog, waar we je helpen om meer inzicht te krijgen in je financiële situatie. 
              Onze artikelen zijn geschreven door experts op het gebied van Nederlandse belastingwetgeving en 
              salarisoptimalisatie. We delen praktische tips, uitleg over belastingregels en inzichten die je 
              helpen om meer uit je inkomen te halen.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Waarom Deze Blog?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              We geloven dat kennis macht is, vooral als het gaat om je persoonlijke financiën. Door het delen 
              van waardevolle informatie hopen we dat je betere beslissingen kunt nemen over je carrière, 
              salarisonderhandelingen en financiële planning. Onze calculator is een krachtig hulpmiddel, 
              maar begrip van de achterliggende principes maakt het nog waardevoller.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Wat Je Hier Vindt
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Van uitleg over Nederlandse belastingtarieven tot tips voor salarisonderhandelingen, van 
              informatie over vakantiegeld tot advies over pensioenopbouw. We behandelen alle aspecten 
              die relevant zijn voor werknemers in Nederland. Onze artikelen zijn geschreven in begrijpelijke 
              taal, zodat complexe onderwerpen toegankelijk worden voor iedereen.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Klaar om te leren?
              </h3>
              <p className="text-slate-700 mb-4">
                Ontdek onze artikelen en verbeter je financiële kennis.
              </p>
              <Link 
                to="/blog/hoe-bereken-je-netto-salaris-2025" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Lees Eerste Artikel
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8 mb-12">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl p-8">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">📊</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  Hoe Bereken Je Je Netto Salaris in 2025?
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Een complete gids over het berekenen van je netto salaris in Nederland. We leggen uit hoe 
                  belastingen, heffingskortingen en andere factoren je netto inkomen beïnvloeden.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Gepubliceerd op 18 augustus 2025</span>
                  <Link 
                    to="/blog/hoe-bereken-je-netto-salaris-2025" 
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Lees Meer →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl p-8">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">💰</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  Vakantiegeld en 13e Maand: Wat Betekent Dit voor Je Netto Inkomen?
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Een diepgaande analyse van hoe extra uitkeringen je netto jaarinkomen beïnvloeden. 
                  We laten zien hoe je deze voordelen kunt optimaliseren.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Binnenkort beschikbaar</span>
                  <span className="inline-flex items-center px-4 py-2 bg-slate-300 text-slate-600 text-sm font-medium rounded-lg">
                    Komt Binnenkort
                  </span>
                </div>
              </div>
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
              to="/" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Calculator</h3>
              <p className="text-slate-600">Start met berekenen</p>
            </Link>
            <Link 
              to="/about" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Over Ons</h3>
              <p className="text-slate-600">Leer meer over NettoGo</p>
            </Link>
            <Link 
              to="/contact" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact</h3>
              <p className="text-slate-600">Vragen over onze artikelen?</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

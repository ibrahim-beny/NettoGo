import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Over NettoGo - Nederlandse Bruto Netto Calculator 2025"
        description="Leer meer over NettoGo, de meest betrouwbare bruto naar netto calculator voor Nederland. Ontwikkeld met precisie en privacy voorop."
        canonical="/about"
        keywords="over nettoGo, Nederlandse calculator, bruto netto, salaris berekening, privacy, belastingen"
      />
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Over NettoGo
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            De meest betrouwbare bruto naar netto calculator voor Nederland, ontwikkeld met precisie en privacy voorop.
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8 lg:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Onze Missie
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              NettoGo is ontstaan uit de behoefte aan een betrouwbare, gebruiksvriendelijke tool voor het berekenen van netto salarissen in Nederland. 
              Wij geloven dat iedereen recht heeft op transparantie over zijn of haar inkomen en de bijbehorende belastingen.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Waarom NettoGo?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Onze calculator onderscheidt zich door het gebruik van de meest recente Nederlandse belastingtarieven en regelgeving. 
              We houden rekening met alle relevante factoren zoals algemene heffingskorting, arbeidskorting, vakantiegeld en 13e maand. 
              Dit zorgt voor uiterst accurate berekeningen die je kunt vertrouwen.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Privacy & Veiligheid
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Bij NettoGo staat je privacy centraal. Alle berekeningen gebeuren lokaal in je browser zonder dat je gegevens worden opgeslagen of verzonden. 
              Je salarisinformatie blijft volledig privé en wordt nooit gedeeld met derden.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Onze Expertise
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Ons team heeft uitgebreide kennis van de Nederlandse belastingwetgeving en blijft op de hoogte van alle wijzigingen. 
              We werken samen met belastingexperts om ervoor te zorgen dat onze calculator altijd up-to-date is met de laatste regelgeving.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Klaar om je netto salaris te berekenen?
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

        {/* Related Links */}
        <div className="bg-slate-50/80 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Meer Informatie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/privacy" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Privacy Policy</h3>
              <p className="text-slate-600">Lees hoe we je gegevens beschermen</p>
            </Link>
            <Link 
              to="/contact" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact</h3>
              <p className="text-slate-600">Neem contact met ons op</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

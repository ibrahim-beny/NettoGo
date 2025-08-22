import { Link } from 'react-router-dom';
import { Home, Calculator, ArrowLeft } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <Layout>
      <SEO 
        title="404 - Pagina niet gevonden | NettoGo"
        description="De pagina die je zoekt bestaat niet. Ga terug naar de NettoGo bruto netto calculator of bekijk onze andere pagina's."
        canonical="/404"
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-6xl font-bold text-white">404</span>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
            Pagina niet gevonden
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            De pagina die je zoekt bestaat niet of is verplaatst. 
            Gebruik de onderstaande links om terug te navigeren.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Home className="w-5 h-5 mr-2" />
              Terug naar Home
            </Link>
            
            <Link
              to="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Salaris Calculator
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Populaire pagina's
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/about"
                className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-pink-300 hover:shadow-md transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400 mr-3" />
                <span className="text-slate-700">Over NettoGo</span>
              </Link>
              
              <Link
                to="/blog"
                className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-pink-300 hover:shadow-md transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400 mr-3" />
                <span className="text-slate-700">Blog</span>
              </Link>
              
              <Link
                to="/contact"
                className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-pink-300 hover:shadow-md transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400 mr-3" />
                <span className="text-slate-700">Contact</span>
              </Link>
              
              <Link
                to="/en"
                className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-pink-300 hover:shadow-md transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400 mr-3" />
                <span className="text-slate-700">English</span>
              </Link>
            </div>
          </div>

          {/* SEO Content */}
          <div className="mt-12 text-center text-slate-500">
            <p className="text-sm">
              NettoGo - De snelste manier om je netto salaris te berekenen
            </p>
            <p className="text-xs mt-2">
              Gebaseerd op de officiële Nederlandse belastingregels van 2025
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

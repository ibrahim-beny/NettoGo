import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';
import logoImage from '../assets/uitgesneden_logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-100 to-pink-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-50 to-orange-50 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative bg-white border-t border-slate-200 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Calculator className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Bruto Netto Calculator 2025
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                NettoGo gebruikt de officiële <strong>Nederlandse belastingtarieven 2025</strong> 
                voor accurate <strong>bruto naar netto salaris berekeningen</strong>. 
                Inclusief loonheffing, vakantiegeld en 13e maand berekening.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Calculator</h3>
              <ul className="text-slate-600 space-y-2">
                <li>
                  <Link to="/" className="hover:text-slate-800 transition-colors">
                    Start Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/calculator" className="hover:text-slate-800 transition-colors">
                    Over Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/blog/hoe-bereken-je-netto-salaris-2025" className="hover:text-slate-800 transition-colors">
                    Hoe Werkt Het?
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Informatie</h3>
              <ul className="text-slate-600 space-y-2">
                <li>
                  <Link to="/about" className="hover:text-slate-800 transition-colors">
                    Over NettoGo
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-slate-800 transition-colors">
                    Blog & Artikelen
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-slate-800 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Rechtelijk</h3>
              <ul className="text-slate-600 space-y-2">
                <li>
                  <Link to="/privacy" className="hover:text-slate-800 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-slate-800 transition-colors">
                    Algemene Voorwaarden
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <img 
                  src={logoImage} 
                  alt="NettoGo Logo" 
                  className="w-10 h-10 object-contain"
                />
                <p className="text-sm text-slate-600 text-center md:text-left">
                  © 2025 NettoGo. Deze tool is bedoeld voor informatieve doeleinden. 
                  Voor officieel advies raadpleeg een belastingadviseur.<br />
                  <span className="text-xs text-slate-500 mt-1 block">
                    Free Dutch salary calculator 2025 | Calculate net salary Netherlands | Gross to net converter
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <Link to="/" className="hover:text-slate-800 transition-colors">NL</Link>
                  <span className="text-slate-300">|</span>
                  <Link to="/en" className="hover:text-slate-800 transition-colors">EN</Link>
                </div>
                <span>🚀 Powered by React + TypeScript</span>
                <span>🎨 Styled with Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

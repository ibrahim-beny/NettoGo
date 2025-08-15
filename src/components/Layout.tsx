import React from 'react';
import logoImage from '../assets/uitgesneden_logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative bg-white/90 backdrop-blur-xl border-t border-blue-200/30 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm" aria-hidden="true">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Bruto Netto Calculator 2025
                </h3>
              </div>
              <p className="text-blue-700 leading-relaxed">
                NettoGo gebruikt de officiële <strong>Nederlandse belastingtarieven 2025</strong> 
                voor accurate <strong>bruto naar netto salaris berekeningen</strong>. 
                Inclusief loonheffing, vakantiegeld en 13e maand berekening.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm" aria-hidden="true">ℹ️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Nederlandse Belastingregels 2025
                </h3>
              </div>
              <ul className="text-blue-700 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" aria-hidden="true"></span>
                  <span>Box 1 belastingtarieven 2025</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" aria-hidden="true"></span>
                  <span>Algemene heffingskorting berekening</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" aria-hidden="true"></span>
                  <span>Arbeidskorting automatisch toegepast</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" aria-hidden="true"></span>
                  <span>Vakantiegeld 8% standaard</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm" aria-hidden="true">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Privacy & Veiligheid
                </h3>
              </div>
              <p className="text-blue-700 leading-relaxed">
                <strong>100% privacy-vriendelijk</strong> - je salarisgegevens worden nooit opgeslagen. 
                Alle <strong>netto salaris berekeningen</strong> gebeuren lokaal in je browser zonder data naar servers.
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-200/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <img 
                  src={logoImage} 
                  alt="NettoGo Logo" 
                  className="w-10 h-10 object-contain"
                />
                <p className="text-sm text-blue-600 text-center md:text-left">
                  © 2025 NettoGo. Deze tool is bedoeld voor informatieve doeleinden. 
                  Voor officieel advies raadpleeg een belastingadviseur.<br />
                  <span className="text-xs text-slate-500 mt-1 block">
                    Free Dutch salary calculator 2025 | Calculate net salary Netherlands | Gross to net converter
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-blue-600">
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

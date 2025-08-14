import React from 'react';

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
                  <span className="text-white text-sm">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Over de Calculator
                </h3>
              </div>
              <p className="text-blue-700 leading-relaxed">
                Deze calculator gebruikt de officiële Nederlandse belastingregels van 2025 
                om je netto salaris te berekenen. Alle berekeningen gebeuren lokaal in je browser.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">ℹ️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Belangrijke Informatie
                </h3>
              </div>
              <ul className="text-blue-700 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <span>Box 1 tarieven 2025</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  <span>Algemene heffingskorting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  <span>Arbeidskorting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                  <span>Vakantiegeld standaard 8%</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">
                  Privacy & Veiligheid
                </h3>
              </div>
              <p className="text-blue-700 leading-relaxed">
                Je gegevens worden nooit opgeslagen of naar een server gestuurd. 
                Alle berekeningen gebeuren 100% lokaal in je browser.
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-200/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <img 
                  src="/NettoGo_logo.png" 
                  alt="NettoGo Logo" 
                  className="w-10 h-10 object-contain"
                />
                <p className="text-sm text-blue-600 text-center md:text-left">
                  © 2025 NettoGo. Deze tool is bedoeld voor informatieve doeleinden. 
                  Voor officieel advies raadpleeg een belastingadviseur.
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

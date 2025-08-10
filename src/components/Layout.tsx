import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  🚀 NettoGo
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-sm text-gray-500">
                Nederlandse belastingregels 2025
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Over de Calculator
              </h3>
              <p className="text-sm text-gray-600">
                Deze calculator gebruikt de officiële Nederlandse belastingregels van 2025 
                om je netto salaris te berekenen. Alle berekeningen gebeuren lokaal in je browser.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Belangrijke Informatie
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Gebaseerd op Box 1 tarieven 2025</li>
                <li>• Inclusief algemene heffingskorting</li>
                <li>• Inclusief arbeidskorting</li>
                <li>• Vakantiegeld standaard 8%</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Privacy & Veiligheid
              </h3>
              <p className="text-sm text-gray-600">
                Je gegevens worden nooit opgeslagen of naar een server gestuurd. 
                Alle berekeningen gebeuren 100% lokaal in je browser.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              © 2025 NettoGo. Deze tool is bedoeld voor informatieve doeleinden. 
              Voor officieel advies raadpleeg een belastingadviseur.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

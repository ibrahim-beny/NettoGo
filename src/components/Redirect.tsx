import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface RedirectProps {
  to: string;
  permanent?: boolean;
  message?: string;
}

export const Redirect: React.FC<RedirectProps> = ({ 
  to, 
  permanent = false, 
  message = 'Je wordt doorverwezen...' 
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Voeg een kleine vertraging toe voor betere UX
    const timer = setTimeout(() => {
      navigate(to, { replace: true });
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate, to]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          {permanent ? 'Permanente doorverwijzing' : 'Doorverwijzing'}
        </h1>
        
        <p className="text-slate-600 mb-6">
          {message}
        </p>
        
        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-sm text-slate-500">
            Je wordt automatisch doorverwezen naar: <br />
            <span className="font-mono text-slate-700">{to}</span>
          </p>
        </div>
        
        {permanent && (
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-blue-700">
              <strong>Let op:</strong> Dit is een permanente doorverwijzing. 
              Update je bookmarks naar de nieuwe URL.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

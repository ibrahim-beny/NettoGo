import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export const BlogPost: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <div className="mb-4">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Terug naar Blog
            </Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Hoe Bereken Je Je Netto Salaris in 2025?
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Een complete gids over het berekenen van je netto salaris in Nederland met de nieuwste belastingtarieven.
          </p>
          <div className="mt-4 text-sm text-slate-500">
            Gepubliceerd op 18 augustus 2025 • Leestijd: 8 minuten
          </div>
        </header>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8 lg:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Inleiding
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Het berekenen van je netto salaris kan een complexe zaak zijn, vooral in Nederland waar verschillende 
              belastingregels en heffingskortingen van toepassing zijn. In dit artikel leggen we stap voor stap uit 
              hoe je je netto inkomen kunt berekenen en welke factoren hierbij een rol spelen.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Wat is het Verschil Tussen Bruto en Netto?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Je bruto salaris is het bedrag dat je werkgever je betaalt voordat er belastingen en premies vanaf gaan. 
              Je netto salaris is wat je daadwerkelijk op je rekening ontvangt. Het verschil wordt bepaald door 
              loonheffing, sociale premies en andere inhoudingen. Dit verschil kan aanzienlijk zijn, soms wel 30-40% 
              van je bruto inkomen.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Nederlandse Belastingtarieven 2025
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Nederland kent een progressief belastingstelsel met verschillende schijven. In 2025 zijn de tarieven 
              als volgt: de eerste schijf (tot €75.518) wordt belast met 36,97%, de tweede schijf (€75.518 tot €109.432) 
              met 40,8%, en de derde schijf (boven €109.432) met 49,5%. Deze tarieven zijn van toepassing op je 
              belastbaar inkomen uit werk en woning.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Heffingskortingen: Je Belastingvoordeel
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Heffingskortingen zijn bedragen die je mag aftrekken van je belastingschuld. De belangrijkste zijn 
              de algemene heffingskorting en de arbeidskorting. De algemene heffingskorting is €3.070 voor 2025 
              en is beschikbaar voor alle belastingplichtigen. De arbeidskorting kan oplopen tot €5.000 en is 
              afhankelijk van je inkomen en leeftijd.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Sociale Premies en Verzekeringen
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Naast belastingen betaal je ook sociale premies. Deze omvatten AOW (ouderdomspensioen), 
              ANW (nabestaandenpensioen), WIA (arbeidsongeschiktheid) en ZVW (zorgverzekering). 
              Deze premies worden automatisch ingehouden door je werkgever en zijn verplicht voor alle werknemers.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Vakantiegeld en 13e Maand
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Vakantiegeld is wettelijk verplicht in Nederland en bedraagt minimaal 8% van je maandsalaris. 
              Dit wordt apart berekend en uitbetaald in mei. Een 13e maand is niet verplicht maar wordt door 
              veel werkgevers aangeboden. Beide worden belast volgens dezelfde regels als je reguliere salaris.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Praktisch Voorbeeld
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Stel je voor dat je €4.000 bruto per maand verdient. Na aftrek van loonheffing (ongeveer €1.200), 
              sociale premies (ongeveer €400) en toepassing van heffingskortingen (ongeveer €300) houd je 
              ongeveer €2.700 netto over. Dit is een vereenvoudigde berekening; de NettoGo calculator 
              houdt rekening met alle details en geeft je een exacte uitkomst.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Tips voor Optimalisatie
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Er zijn verschillende manieren om je netto inkomen te optimaliseren. Denk aan het benutten van 
              alle beschikbare heffingskortingen, het optimaliseren van je pensioenopbouw, en het gebruik van 
              fiscaal voordelige regelingen zoals de 30% ruling voor expats. Regelmatig je salaris berekenen 
              helpt je om inzicht te krijgen in je financiële situatie.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Klaar om je eigen netto salaris te berekenen?
              </h3>
              <p className="text-slate-700 mb-4">
                Gebruik onze calculator om je exacte netto inkomen te bepalen.
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
            Meer Artikelen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/blog" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Alle Artikelen</h3>
              <p className="text-slate-600">Bekijk alle blog posts</p>
            </Link>
            <Link 
              to="/about" 
              className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Over NettoGo</h3>
              <p className="text-slate-600">Leer meer over onze calculator</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

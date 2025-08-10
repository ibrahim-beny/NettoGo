# NettoGo - Netto Salaris Calculator 2025

Een moderne, privacy-vriendelijke webapplicatie om je bruto salaris om te rekenen naar netto, gebaseerd op de Nederlandse belastingregels van 2025.

## 🚀 Features

- **100% Client-side**: Alle berekeningen gebeuren lokaal in je browser
- **Nederlandse belastingregels 2025**: Gebaseerd op officiële tarieven
- **Responsief design**: Werkt perfect op mobiel, tablet en desktop
- **Real-time berekeningen**: Direct resultaat bij het invoeren van gegevens
- **Gedetailleerde breakdown**: Zie alle tussenstappen van de berekening
- **SEO-geoptimaliseerd**: Klaar voor zoekmachines
- **Privacy-vriendelijk**: Geen data wordt opgeslagen of verstuurd

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Hosting**: Vercel (aanbevolen)

## 📋 Requirements

- Node.js 18+ 
- npm of yarn

## 🚀 Installatie & Setup

1. **Clone het project**
   ```bash
   git clone <repository-url>
   cd netto-salary-calculator
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy naar Vercel
```bash
npm run build
vercel --prod
```

## 📁 Projectstructuur

```
src/
├── components/           # React componenten
│   ├── Layout.tsx       # Hoofdlayout met header/footer
│   ├── SalaryForm.tsx   # Invoerformulier
│   └── NetResult.tsx    # Resultaatweergave
├── utils/               # Utility functies
│   ├── calculator.ts    # Belastingberekeningen
│   └── validators.ts    # Input validatie
├── App.tsx              # Hoofdcomponent
├── main.tsx             # Entry point
└── index.css            # Tailwind CSS
```

## 🧮 Berekening

De calculator gebruikt de volgende Nederlandse belastingregels van 2025:

### Box 1 Tarieven
- **€0 - €38.441**: 35,82%
- **€38.441 - €76.817**: 37,48%
- **€76.817+**: 49,50%

### Heffingskortingen
- **Algemene heffingskorting**: Max €3.068, afbouw vanaf €28.406
- **Arbeidskorting**: Piecewise functie met verschillende schijven

### Extra's
- **Vakantiegeld**: 8% van jaarbasis
- **Dertiende maand**: 1x bruto maand (geschaald naar werkuren)
- **Pensioen**: Aftrekbaar percentage (werknemer)

## 🎨 Customization

### Kleuren aanpassen
Bewerk `tailwind.config.js` om de kleurenschema aan te passen:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        // ... meer kleuren
      }
    }
  }
}
```

### Belastingregels bijwerken
Voor nieuwe jaren, update de constanten in `src/utils/calculator.ts`:

```typescript
const BOX1_BANDS_2026 = [
  { upto: 40000, rate: 0.36 },
  // ... nieuwe tarieven
];
```

## 📱 Responsive Design

De applicatie is geoptimaliseerd voor:
- **Mobiel**: 320px+ (primary focus)
- **Tablet**: 768px+
- **Desktop**: 1024px+

## 🔒 Privacy & Security

- **Geen backend**: Alle logica draait client-side
- **Geen data opslag**: Geen cookies, localStorage of database
- **HTTPS only**: Aanbevolen voor productie
- **Geen tracking**: Geen analytics of externe scripts

## 🚀 Performance

- **Lazy loading**: Componenten laden alleen wanneer nodig
- **Optimized builds**: Vite produceert geoptimaliseerde output
- **Minimal dependencies**: Alleen essentiële packages
- **Fast calculations**: Berekeningen binnen 1 seconde

## 🧪 Testing

```bash
# Unit tests (wanneer geïmplementeerd)
npm run test

# Linting
npm run lint
```

## 📈 SEO Features

- **Meta tags**: Titel, beschrijving, keywords
- **Structured data**: JSON-LD schema markup
- **Semantic HTML**: Correcte heading structuur
- **Open Graph**: Social media previews
- **Sitemap ready**: Klaar voor uitbreiding

## 🔮 Toekomstige Uitbreidingen

- [ ] AOW-berekeningen voor 65+
- [ ] Verschillende belastingjaren (2024, 2026)
- [ ] Export naar PDF
- [ ] Salaris vergelijking tool
- [ ] Blog sectie voor belastingtips
- [ ] Progressive Web App (PWA)

## 🤝 Bijdragen

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je wijzigingen (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📄 Licentie

Dit project is gelicenseerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## ⚠️ Disclaimer

Deze calculator is bedoeld voor informatieve doeleinden. Voor officieel belastingadvies raadpleeg een belastingadviseur of accountant. De berekeningen zijn gebaseerd op de beschikbare informatie en kunnen afwijken van de daadwerkelijke belastingaanslag.

## 📞 Support

Voor vragen of problemen:
- Open een GitHub issue
- Controleer de documentatie
- Raadpleeg de Nederlandse Belastingdienst

---

**Gebouwd met ❤️ voor de Nederlandse arbeidsmarkt**

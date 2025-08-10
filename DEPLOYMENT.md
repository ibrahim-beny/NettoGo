# 🚀 NettoGo Deployment Guide

Deze gids helpt je om je NettoGo project te deployen naar verschillende platforms.

## 📋 Vereisten

- Node.js 18+ geïnstalleerd
- Git geïnstalleerd
- GitHub account
- npm of yarn

## 🌐 GitHub Pages Deployment

### 1. Repository Setup
Je repository is al aangemaakt op: https://github.com/ibrahim-beny/NettoGo

### 2. GitHub Pages Activeren
1. Ga naar je repository op GitHub
2. Klik op "Settings" tab
3. Scroll naar "Pages" sectie (links in de sidebar)
4. Onder "Source", selecteer "GitHub Actions"
5. De GitHub Actions workflow wordt automatisch uitgevoerd

### 3. Automatische Deployment
- Elke push naar de `master` branch triggert automatische deployment
- GitHub Actions bouwt je app en deployed naar GitHub Pages
- Je app is beschikbaar op: https://ibrahim-beny.github.io/NettoGo/

### 4. Deployment Status Checken
- Ga naar "Actions" tab in je repository
- Bekijk de "Deploy to GitHub Pages" workflow
- Groene checkmark = succesvol gedeployed

## 🖥️ Lokale Development

### Development Server Starten
```bash
npm install
npm run dev
```

### Production Build Testen
```bash
npm run build
npm run preview
```

### PowerShell Deployment Script
Gebruik het meegeleverde script voor eenvoudige deployment:
```powershell
.\deploy.ps1
```

## 🔧 GitHub Actions Workflow

Het project bevat een automatische deployment workflow in `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ master, main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Node.js
      - Install dependencies
      - Build project
      - Deploy to GitHub Pages
```

## 🚀 Alternatieve Deployment Opties

### Vercel (Aanbevolen voor React apps)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
1. Push naar GitHub
2. Verbind met Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 📱 Custom Domain (Optioneel)

### GitHub Pages Custom Domain
1. Ga naar repository Settings > Pages
2. Voeg je domein toe onder "Custom domain"
3. Voeg CNAME record toe bij je DNS provider
4. Schakel "Enforce HTTPS" in

## 🔍 Troubleshooting

### Build Fails
- Controleer TypeScript errors: `npm run build`
- Fix linting issues: `npm run lint`
- Controleer dependencies: `npm install`

### Deployment Fails
- Bekijk GitHub Actions logs
- Controleer of GitHub Pages is geactiveerd
- Verifieer workflow bestand syntax

### Local Issues
- Verwijder `node_modules` en `package-lock.json`
- Run `npm install` opnieuw
- Controleer Node.js versie: `node --version`

## 📊 Monitoring

### GitHub Pages Status
- Repository Settings > Pages
- Deployment status en URL
- Build logs en errors

### Performance
- Lighthouse scores
- Core Web Vitals
- Bundle size monitoring

## 🔄 Continuous Deployment

### Automatische Updates
- Push naar master = automatische deployment
- Pull requests = preview builds
- Branch protection rules aanbevolen

### Rollback
- Ga naar Actions tab
- Klik op specifieke deployment
- Klik "Re-run jobs" om opnieuw te deployen

## 📚 Nuttige Links

- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)

## 🆘 Support

Voor deployment problemen:
1. Check GitHub Actions logs
2. Controleer deze deployment guide
3. Open een GitHub issue
4. Raadpleeg de officiële documentatie

---

**🎉 Succesvol gedeployed! Je NettoGo app is nu live op GitHub Pages!**

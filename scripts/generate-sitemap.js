import fs from 'fs';
import path from 'path';

const siteUrl = 'https://www.nettogo.nl';

// Definieer alleen bestaande URL's voor NettoGo (om 404 errors te voorkomen)
const urls = [
  {
    loc: '/',
    changefreq: 'daily',
    priority: '1.0'
  }
  // Andere URL's worden alleen toegevoegd als ze echt bestaan
  // Voor nu beginnen we met alleen de homepage die gegarandeerd werkt
];

// Genereer sitemap XML met correcte officiële structuur
function generateSitemap() {
  // ISO-8601 timestamp voor lastmod
  const lastModified = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  urls.forEach(url => {
    sitemap += `
  <url>
    <loc>${siteUrl}${url.loc}</loc>
    <lastmod>${lastModified}</lastmod>`;

    // changefreq en priority zijn optioneel - Google negeert ze grotendeels
    // Voor nu laten we ze weg voor een cleaner sitemap

    // Voeg afbeeldingen toe alleen aan hoofdpagina
    if (url.loc === '/') {
      sitemap += `
    <image:image>
      <image:loc>${siteUrl}/NettoGo_logo.png</image:loc>
      <image:title>NettoGo - Bruto Netto Calculator 2025</image:title>
      <image:caption>Gratis bruto naar netto salaris calculator voor Nederland met belastingtarieven 2025</image:caption>
    </image:image>
    <image:image>
      <image:loc>${siteUrl}/NettoGo_zondertext.png</image:loc>
      <image:title>NettoGo Logo</image:title>
      <image:caption>NettoGo bruto netto calculator logo</image:caption>
    </image:image>
    <image:image>
      <image:loc>${siteUrl}/uitgesneden_logo.png</image:loc>
      <image:title>NettoGo App Logo</image:title>
      <image:caption>NettoGo salarisberekening tool logo</image:caption>
    </image:image>`;
    }

    sitemap += `
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Genereer robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# NettoGo Bruto Netto Calculator
# Optimized for Dutch salary calculations

Sitemap: ${siteUrl}/sitemap.xml

# Disallow error pages
Disallow: /404
Disallow: /500

# Allow all main calculator pages
Allow: /bruto-naar-netto
Allow: /salaris-calculator
Allow: /netto-salaris-berekenen
Allow: /belastingtarieven-2025
Allow: /vakantiegeld-berekenen
Allow: /13e-maand-berekenen
Allow: /loonheffing-berekenen
Allow: /minimumloon-netto-2025

# Allow expat specific pages
Allow: /salary-calculator-netherlands-expat
Allow: /30-percent-ruling-calculator

# Allow ZZP pages
Allow: /zzp-netto-inkomen-berekenen

# Crawl-delay for respectful crawling
Crawl-delay: 1
`;
}

// Schrijf bestanden naar public directory
function writeSitemapFiles() {
  const publicDir = path.join(process.cwd(), 'public');
  
  // Zorg ervoor dat public directory bestaat
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Schrijf sitemap.xml
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  const sitemapContent = generateSitemap();
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('✅ Sitemap generated:', sitemapPath);

  // Schrijf robots.txt
  const robotsPath = path.join(publicDir, 'robots.txt');
  const robotsContent = generateRobotsTxt();
  fs.writeFileSync(robotsPath, robotsContent, 'utf8');
  console.log('✅ Robots.txt generated:', robotsPath);

  console.log(`\n🚀 Sitemap and robots.txt generated successfully!`);
  console.log(`📍 Sitemap URL: ${siteUrl}/sitemap.xml`);
  console.log(`📍 Robots URL: ${siteUrl}/robots.txt`);
  console.log(`📊 Total URLs in sitemap: ${urls.length}`);
}

// Validatie functie
function validateSitemap() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  if (fs.existsSync(sitemapPath)) {
    const content = fs.readFileSync(sitemapPath, 'utf8');
    const urlCount = (content.match(/<url>/g) || []).length;
    const hasXmlDeclaration = content.startsWith('<?xml');
    const hasClosingTag = content.includes('</urlset>');
    
    console.log('\n🔍 Sitemap Validation:');
    console.log(`   ✅ XML Declaration: ${hasXmlDeclaration}`);
    console.log(`   ✅ Closing Tag: ${hasClosingTag}`);
    console.log(`   ✅ URL Count: ${urlCount}`);
    console.log(`   ✅ File Size: ${(content.length / 1024).toFixed(2)} KB`);
    
    if (urlCount !== urls.length) {
      console.log(`   ⚠️  Warning: Expected ${urls.length} URLs, found ${urlCount}`);
    }
  } else {
    console.log('   ❌ Sitemap file not found');
  }
}

// Voer script uit
writeSitemapFiles();
validateSitemap();

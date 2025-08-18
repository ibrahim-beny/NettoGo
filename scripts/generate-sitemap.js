import fs from 'fs';
import path from 'path';

const siteUrl = 'https://www.nettogo.nl';

// Definieer alle belangrijke URL's voor NettoGo
const urls = [
  {
    loc: '/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/bruto-naar-netto',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/salaris-calculator',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/netto-salaris-berekenen',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/belastingtarieven-2025',
    changefreq: 'quarterly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/vakantiegeld-berekenen',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/13e-maand-berekenen',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/loonheffing-berekenen',
    changefreq: 'quarterly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/minimumloon-netto-2025',
    changefreq: 'quarterly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/parttime-salaris-berekenen',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/fulltime-salaris-berekenen',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/salary-calculator-netherlands-expat',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/30-percent-ruling-calculator',
    changefreq: 'quarterly',
    priority: '0.7',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/zzp-netto-inkomen-berekenen',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/cao-salaris-berekenen',
    changefreq: 'quarterly',
    priority: '0.6',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/privacy',
    changefreq: 'yearly',
    priority: '0.3',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/terms',
    changefreq: 'yearly',
    priority: '0.3',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/about',
    changefreq: 'monthly',
    priority: '0.4',
    lastmod: new Date().toISOString()
  },
  {
    loc: '/contact',
    changefreq: 'monthly',
    priority: '0.4',
    lastmod: new Date().toISOString()
  }
];

// Genereer sitemap XML
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  urls.forEach(url => {
    sitemap += `
  <url>
    <loc>${siteUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <xhtml:link rel="alternate" hreflang="nl" href="${siteUrl}${url.loc}" />
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}${url.loc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${url.loc}" />`;

    // Voeg afbeeldingen toe aan hoofdpagina
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

// Voer script uit
writeSitemapFiles();

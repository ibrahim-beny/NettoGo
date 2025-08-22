import fs from 'fs';
import path from 'path';

const siteUrl = 'https://www.nettogo.nl';

// Definieer alle URL's voor NettoGo met uitgebreide SEO informatie
const urls = [
  {
    loc: '/',
    changefreq: 'daily',
    priority: '1.0',
    description: 'NettoGo - Bruto naar Netto Salaris Calculator 2025'
  },
  {
    loc: '/calculator',
    changefreq: 'weekly',
    priority: '0.9',
    description: 'Bruto Netto Calculator - Bereken je netto salaris'
  },
  {
    loc: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    description: 'Over NettoGo - Nederlandse Salaris Calculator'
  },
  {
    loc: '/blog',
    changefreq: 'weekly',
    priority: '0.8',
    description: 'Blog - Tips en informatie over salaris berekening'
  },
  {
    loc: '/blog/hoe-bereken-je-netto-salaris-2025',
    changefreq: 'monthly',
    priority: '0.7',
    description: 'Hoe bereken je je netto salaris in 2025'
  },
  {
    loc: '/contact',
    changefreq: 'monthly',
    priority: '0.6',
    description: 'Contact NettoGo - Vragen over salaris berekening'
  },
  {
    loc: '/privacy',
    changefreq: 'monthly',
    priority: '0.5',
    description: 'Privacy Policy NettoGo'
  },
  {
    loc: '/terms',
    changefreq: 'monthly',
    priority: '0.5',
    description: 'Algemene Voorwaarden NettoGo'
  },
  {
    loc: '/en',
    changefreq: 'monthly',
    priority: '0.7',
    description: 'NettoGo - Gross to Net Salary Calculator 2025'
  }
];

// Genereer sitemap XML met correcte officiële structuur en extra SEO informatie
function generateSitemap() {
  // ISO-8601 timestamp voor lastmod (met timezone)
  const lastModified = new Date().toISOString().replace('Z', '+00:00');
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`;

  urls.forEach(url => {
    sitemap += `
  <url>
    <loc>${siteUrl}${url.loc}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <image:image>
      <image:loc>${siteUrl}/NettoGo_logo.png</image:loc>
      <image:title>${url.description}</image:title>
    </image:image>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Genereer robots.txt met betere crawler instructies
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# NettoGo Bruto Netto Calculator 2025
# Gratis Nederlandse bruto naar netto salarisberekening

Sitemap: ${siteUrl}/sitemap.xml

# Expliciet toestaan van alle belangrijke pagina's
Allow: /about
Allow: /contact
Allow: /privacy
Allow: /terms
Allow: /blog
Allow: /calculator
Allow: /en

# Alleen error pagina's blokkeren
Disallow: /404
Disallow: /500
Disallow: /error

# Crawl-delay voor respectvolle crawling
Crawl-delay: 1

# Extra informatie voor crawlers
# NettoGo is een React SPA - alle routes zijn toegankelijk
# JavaScript is vereist voor volledige functionaliteit
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

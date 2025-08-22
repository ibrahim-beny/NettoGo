import fs from 'fs';
import path from 'path';

const siteUrl = 'https://www.nettogo.nl';

// Definieer alle URL's voor NettoGo
const urls = [
  {
    loc: '/',
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    loc: '/calculator',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: '/about',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/blog',
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    loc: '/blog/hoe-bereken-je-netto-salaris-2025',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: '/contact',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    loc: '/privacy',
    changefreq: 'monthly',
    priority: '0.5'
  },
  {
    loc: '/terms',
    changefreq: 'monthly',
    priority: '0.5'
  },
  {
    loc: '/en',
    changefreq: 'monthly',
    priority: '0.7'
  }
];

// Genereer sitemap XML met correcte officiële structuur
function generateSitemap() {
  // ISO-8601 timestamp voor lastmod (met timezone)
  const lastModified = new Date().toISOString().replace('Z', '+00:00');
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  urls.forEach(url => {
    sitemap += `
  <url>
    <loc>${siteUrl}${url.loc}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
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

# NettoGo Bruto Netto Calculator 2025
# Gratis Nederlandse bruto naar netto salarisberekening

Sitemap: ${siteUrl}/sitemap.xml

# Disallow error pages
Disallow: /404
Disallow: /500

# Allow indexing of all content
Allow: /*

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

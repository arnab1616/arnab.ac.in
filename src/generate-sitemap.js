import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// Create a sitemap object
const sitemap = new SitemapStream({ hostname: 'https://arnabchaulya.vercel.app/' });

// List of routes you want to include in your sitemap
const pages = ['/', '/about', '/portfolio', '/contact', '/blog'];

pages.forEach(page => {
  sitemap.write({ url: page, changefreq: 'daily', priority: 0.7 });
});

sitemap.end();

// Write sitemap.xml to public folder
streamToPromise(sitemap).then(data => {
  createWriteStream('./public/sitemap.xml').write(data);
});

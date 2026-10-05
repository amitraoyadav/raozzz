const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('anemos_raw').filter(f => f.endsWith('.html'));
const allImgs = new Set();

for (const f of files) {
  const html = fs.readFileSync(path.join('anemos_raw', f), 'utf8');
  const matches = [...html.matchAll(/https:\/\/anemosgoa\.com\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/[^"'\s\)]+\.(?:webp|jpg|jpeg|png)/gi)];
  for (const m of matches) {
    const clean = m[0].split('?')[0];
    allImgs.add(clean);
  }
}

console.log('Total unique images found across all pages:', allImgs.size);
fs.writeFileSync('anemos_raw/all_images.json', JSON.stringify([...allImgs], null, 2));

// Also let's inspect the structure of home.html: headings, sections, text
const homeHtml = fs.readFileSync('anemos_raw/home.html', 'utf8');
const h1s = [...homeHtml.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const h2s = [...homeHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const h3s = [...homeHtml.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

console.log('H1s:', h1s);
console.log('H2s:', h2s);
console.log('H3s:', h3s);

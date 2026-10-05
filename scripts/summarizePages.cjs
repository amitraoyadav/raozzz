const fs = require('fs');
const path = require('path');

function getPageDetails(filename) {
  const html = fs.readFileSync(path.join('anemos_raw', filename), 'utf8');
  
  const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1] || '';
  const metaDesc = (html.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || [])[1] || '';
  
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  
  const imgs = [...new Set([...html.matchAll(/https:\/\/anemosgoa\.com\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/[^"'\s\)]+\.(?:webp|jpg|jpeg|png)/gi)].map(m => m[0].split('?')[0]))];
  
  return { filename, title, metaDesc, h1s, h2s: h2s.slice(0, 8), imgCount: imgs.length, sampleImgs: imgs.slice(0, 5) };
}

const summary = fs.readdirSync('anemos_raw')
  .filter(f => f.endsWith('.html'))
  .map(getPageDetails);

fs.writeFileSync('anemos_raw/page_summary.json', JSON.stringify(summary, null, 2));
console.log('Saved page_summary.json with', summary.length, 'pages');

const fs = require('fs');

function inspectRoom(filename) {
  console.log(`\n=================== ${filename} ===================`);
  const html = fs.readFileSync(`anemos_raw/${filename}`, 'utf8');
  
  // Extract Headings
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.replace(/<[^>]+>/g, '').trim();
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  
  console.log('H1:', h1);
  console.log('H2s:', h2s);
  console.log('H3s:', h3s.slice(0, 15));
  
  // Extract paragraphs
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, '').trim())
    .filter(p => p.length > 50);
  
  console.log('\nSample Paragraphs:');
  paragraphs.slice(0, 4).forEach((p, i) => console.log(`[P${i+1}] ${p}\n`));
  
  // Extract images
  const imgs = [...new Set([...html.matchAll(/https:\/\/anemosgoa\.com\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/[^"'\s\)]+\.(?:webp|jpg|jpeg|png)/gi)].map(m => m[0].split('?')[0]))];
  console.log('Images in room:', imgs.length);
  console.log('Sample images:', imgs.slice(0, 8));
}

inspectRoom('deluxe-double-room-with-private-pool.html');
inspectRoom('two-bedroom-premium-suite.html');

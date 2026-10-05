const fs = require('fs');

function inspectPage(filename) {
  console.log(`\n=================== ${filename} ===================`);
  const html = fs.readFileSync(`anemos_raw/${filename}`, 'utf8');
  
  // Extract Headings
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.replace(/<[^>]+>/g, '').trim();
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  
  console.log('H1:', h1);
  console.log('H2s:', h2s);
  console.log('H3s:', h3s.slice(0, 10));
  
  // Extract paragraphs
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, '').trim())
    .filter(p => p.length > 50 && !p.includes('HomeRoomsDeluxe'));
  
  console.log('\nSample Paragraphs:');
  paragraphs.slice(0, 5).forEach((p, i) => console.log(`[P${i+1}] ${p}\n`));
}

inspectPage('events-and-celebration.html');
inspectPage('contact-us.html');
inspectPage('activities-to-do-in-goa.html');
inspectPage('trending-cafes-in-goa.html');

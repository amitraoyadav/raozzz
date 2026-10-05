const fs = require('fs');

const home = fs.readFileSync('anemos_raw/home.html', 'utf8');

const titles = [...home.matchAll(/class="wdt-accordion-toggle-title">([\s\S]*?)<\/div>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const descs = [...home.matchAll(/class="wdt-accordion-toggle-description">([\s\S]*?)<\/div>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

console.log('FAQs count:', titles.length, 'vs', descs.length);
const faqs = titles.map((q, i) => ({ question: q, answer: descs[i] || '' }));
fs.writeFileSync('anemos_raw/extracted_faqs.json', JSON.stringify(faqs, null, 2));

faqs.forEach((f, i) => {
  console.log(`[${i+1}] Q: ${f.question}`);
  console.log(`    A: ${f.answer}\n`);
});

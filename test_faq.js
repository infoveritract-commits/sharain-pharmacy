const fs = require('fs');
const c = fs.readFileSync('index.html', 'utf8');

const faqHtmlStart = c.indexOf('<section id="faq"');
console.log('FAQ HTML START:', faqHtmlStart);

const faqEnd = c.indexOf('</section>', faqHtmlStart);
console.log(c.substring(faqHtmlStart, faqEnd + 10));

const scriptStart = c.indexOf('<script>');
console.log('Script START:', scriptStart);

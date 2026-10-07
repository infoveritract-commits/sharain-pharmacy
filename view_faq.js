const fs = require('fs');
const c = fs.readFileSync('index.html', 'utf8');
const start = c.indexOf('<section id="faq"');
console.log(c.substring(start, c.indexOf('</section>', start) + 10));

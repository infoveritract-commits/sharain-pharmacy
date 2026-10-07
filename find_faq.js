const fs = require('fs');
const c = fs.readFileSync('index.html', 'utf8');

const match = c.match(/faq-list/g);
console.log('Occurrences of faq-list:', match ? match.length : 0);

const start = c.indexOf('faq-list');
console.log(c.substring(start - 50, start + 200));

const lastStart = c.lastIndexOf('faq-list');
console.log(c.substring(lastStart - 50, lastStart + 200));

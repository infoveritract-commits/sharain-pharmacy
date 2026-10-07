const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
console.log('RESULTS HTML:', content.indexOf('id="results"'));
console.log('RESULTS CSS:', content.indexOf('/* BEFORE AND AFTER               */'));

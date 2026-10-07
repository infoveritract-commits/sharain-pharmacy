const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const matches = content.match(/<section[^>]+id="([^"]+)"/g);
console.log(matches.join('\n'));

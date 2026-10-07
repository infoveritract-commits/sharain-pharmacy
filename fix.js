const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Remove the call
content = content.replace('    renderConcerns();\r\n', '');
content = content.replace('    renderConcerns();\n', '');

// Remove the function
const funcStart = content.indexOf('function renderConcerns() {');
if (funcStart !== -1) {
  const funcEnd = content.indexOf('function renderShop() {');
  const funcStr = content.substring(funcStart, funcEnd);
  content = content.replace(funcStr, '');
}

fs.writeFileSync('index.html', content);
console.log('Fixed renderConcerns');

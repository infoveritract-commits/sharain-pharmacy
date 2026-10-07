const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const oldCss = '.faq-answer p{padding:0 0 20px;font-size:14px;line-height:1.7;color:var(--olive)}';
const newCss = oldCss + '\n.faq-item.open .faq-answer{max-height:500px;}';

if (content.includes(oldCss) && !content.includes('.faq-item.open .faq-answer')) {
  content = content.replace(oldCss, newCss);
  fs.writeFileSync('index.html', content);
  console.log('Successfully fixed FAQ CSS toggle.');
} else {
  console.log('CSS already fixed or not found.');
}

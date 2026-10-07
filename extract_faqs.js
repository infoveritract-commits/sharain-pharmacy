const fs = require('fs');
const c = fs.readFileSync('index.html', 'utf8');

const faqsStart = c.indexOf('const FAQS =');
if (faqsStart !== -1) {
    console.log(c.substring(faqsStart, c.indexOf('];', faqsStart) + 2));
} else {
    console.log('FAQS array not found');
}

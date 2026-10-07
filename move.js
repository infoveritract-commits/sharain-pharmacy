const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Extract and remove old dual-marquee
const oldMarqueeStart = content.indexOf('<!-- DUAL 3D MARQUEE -->');
const oldMarqueeEnd = content.indexOf('<!-- WHY SHAHRIN -->');
const marqueeCode = content.substring(oldMarqueeStart, oldMarqueeEnd);
content = content.replace(marqueeCode, '');

// 2. Add title HTML to marqueeCode
const titleHtml = `
  <div class="dual-marquee-title">
    <h2>The Shahrin Standard</h2>
    <p>Premium care, elevated.</p>
  </div>`;
const newMarqueeCode = marqueeCode.replace('<section id="dual-marquee" aria-label="Featured Highlights">', '<section id="dual-marquee" aria-label="Featured Highlights">\n' + titleHtml);

// 3. Insert after intro
const introEnd = '</section>\n\n<!-- SHOP BY CONCERN -->';
content = content.replace(introEnd, '</section>\n\n' + newMarqueeCode + '<!-- SHOP BY CONCERN -->');

// 4. Add CSS
const titleCss = `
.dual-marquee-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  text-align: center;
  pointer-events: none;
  background: rgba(245, 239, 230, 0.85);
  padding: 40px 60px;
  border-radius: 24px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  color: var(--ink);
}
.dual-marquee-title h2 {
  font-family: var(--font-serif);
  font-size: clamp(32px, 4vw, 56px);
  margin-bottom: 8px;
}
.dual-marquee-title p {
  font-size: 14px;
  opacity: 0.8;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
`;
const cssTarget = '/* ============================== */\n/* WHY SHAHRIN                    */';
content = content.replace(cssTarget, titleCss + '\n' + cssTarget);

fs.writeFileSync('index.html', content);
console.log('Success');

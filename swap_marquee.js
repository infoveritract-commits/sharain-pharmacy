const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Remove old HTML
const htmlStart = content.indexOf('<!-- DUAL 3D MARQUEE -->');
if (htmlStart !== -1) {
  const htmlEnd = content.indexOf('<!-- SHOP BY CONCERN -->');
  const oldHtml = content.substring(htmlStart, htmlEnd);
  content = content.replace(oldHtml, '');
}

// 2. Remove old CSS
const cssStart = content.indexOf('/* DUAL 3D MARQUEE                */');
if (cssStart !== -1) {
  const cssEnd = content.indexOf('/* WHY SHAHRIN                    */');
  const actualCssStart = content.lastIndexOf('/* ============================== */', cssStart);
  const oldCss = content.substring(actualCssStart, cssEnd);
  content = content.replace(oldCss, '');
}

// 3. Insert new HTML
const newHtml = `<!-- DUAL TEXT MARQUEE -->
<section id="text-marquee" aria-label="Brand Highlights">
  <div class="marquee-horiz marquee-green">
    <div class="marquee-track track-left">
      <span>100% Natural</span><i class="fa-solid fa-star-of-life"></i>
      <span>Clinically Proven</span><i class="fa-solid fa-star-of-life"></i>
      <span>Cruelty Free</span><i class="fa-solid fa-star-of-life"></i>
      <span>Botanical Extracts</span><i class="fa-solid fa-star-of-life"></i>
      <!-- repeated -->
      <span>100% Natural</span><i class="fa-solid fa-star-of-life"></i>
      <span>Clinically Proven</span><i class="fa-solid fa-star-of-life"></i>
      <span>Cruelty Free</span><i class="fa-solid fa-star-of-life"></i>
      <span>Botanical Extracts</span><i class="fa-solid fa-star-of-life"></i>
    </div>
  </div>
  <div class="marquee-horiz marquee-cream">
    <div class="marquee-track track-right">
      <span>Rooted in Nature</span><i class="fa-solid fa-seedling"></i>
      <span>Refined by Science</span><i class="fa-solid fa-seedling"></i>
      <span>Dermatologist Tested</span><i class="fa-solid fa-seedling"></i>
      <span>Vegan Formulas</span><i class="fa-solid fa-seedling"></i>
      <!-- repeated -->
      <span>Rooted in Nature</span><i class="fa-solid fa-seedling"></i>
      <span>Refined by Science</span><i class="fa-solid fa-seedling"></i>
      <span>Dermatologist Tested</span><i class="fa-solid fa-seedling"></i>
      <span>Vegan Formulas</span><i class="fa-solid fa-seedling"></i>
    </div>
  </div>
</section>

`;
content = content.replace('<!-- SHOP BY CONCERN -->', newHtml + '<!-- SHOP BY CONCERN -->');

// 4. Insert new CSS
const newCss = `/* ============================== */
/* DUAL TEXT MARQUEE              */
/* ============================== */
#text-marquee {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.marquee-horiz {
  width: 100%;
  padding: 32px 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.marquee-green {
  background: var(--olive);
  color: var(--cream);
  border-color: var(--olive);
}
.marquee-cream {
  background: var(--cream);
  color: var(--ink);
  margin-top: -1px;
}
.marquee-track {
  display: flex;
  gap: 60px;
  width: max-content;
  align-items: center;
}
.marquee-track span {
  font-family: var(--font-serif);
  font-size: clamp(48px, 6vw, 96px);
  white-space: nowrap;
  letter-spacing: -0.02em;
}
.marquee-cream .marquee-track span {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--ink);
}
.marquee-track i {
  font-size: clamp(24px, 3vw, 40px);
}
.marquee-green .marquee-track i {
  color: var(--honey);
}
.marquee-cream .marquee-track i {
  color: var(--sage);
}
.track-left {
  animation: scrollLeft 30s linear infinite;
}
.track-right {
  animation: scrollRight 30s linear infinite;
}
.marquee-horiz:hover .track-left, .marquee-horiz:hover .track-right {
  animation-play-state: paused;
}
@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes scrollRight {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

`;
content = content.replace('/* ============================== */\n/* WHY SHAHRIN                    */', newCss + '/* ============================== */\n/* WHY SHAHRIN                    */');

fs.writeFileSync('index.html', content);
console.log('Successfully swapped marquees.');

const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Remove `#dual-marquee` HTML (vertical cards)
const dualMarqueeHtmlStart = content.indexOf('<!-- DUAL 3D MARQUEE -->');
const whyShahrinHtmlStart = content.indexOf('<!-- WHY SHAHRIN -->');

if (dualMarqueeHtmlStart !== -1 && whyShahrinHtmlStart !== -1) {
  const htmlToRemove = content.substring(dualMarqueeHtmlStart, whyShahrinHtmlStart);
  
  const greenSpans = `
      <div class="marquee-item"><i class="fa-solid fa-star-of-life"></i> 100% Natural</div>
      <div class="marquee-item"><i class="fa-solid fa-star-of-life"></i> Clinically Proven</div>
      <div class="marquee-item"><i class="fa-solid fa-star-of-life"></i> Cruelty Free</div>
      <div class="marquee-item"><i class="fa-solid fa-star-of-life"></i> Botanical Extracts</div>
      <div class="marquee-item"><i class="fa-solid fa-star-of-life"></i> Dermatologist Tested</div>
      <div class="marquee-item"><i class="fa-solid fa-star-of-life"></i> Vegan Formulas</div>`;
      
  const creamSpans = `
      <div class="marquee-item"><i class="fa-solid fa-seedling"></i> Acne & Blemishes</div>
      <div class="marquee-item"><i class="fa-solid fa-seedling"></i> Dryness & Dehydration</div>
      <div class="marquee-item"><i class="fa-solid fa-seedling"></i> Anti-Aging & Fine Lines</div>
      <div class="marquee-item"><i class="fa-solid fa-seedling"></i> Sensitivity & Redness</div>
      <div class="marquee-item"><i class="fa-solid fa-seedling"></i> Dark Spots & Pigmentation</div>`;

  const newHtml = `<!-- THIN TEXT MARQUEES -->
<section id="thin-text-marquees" aria-label="Brand Highlights">
  <div class="thin-marquee marquee-green">
    <div class="track-left">
      ${greenSpans.repeat(6)}
    </div>
  </div>
  <div class="thin-marquee marquee-cream">
    <div class="track-right">
      ${creamSpans.repeat(6)}
    </div>
  </div>
</section>

<!-- HORIZONTAL 3D CARDS MARQUEE -->
<section id="horiz-3d-cards" aria-label="Featured Highlights">
  <div class="horiz-cards-track">
    <!-- Group 1 -->
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80" alt="Botanical Extracts" loading="lazy">
      <div class="dual-card-content">
        <h3>Botanical Extracts</h3>
        <p>Cold-pressed to preserve maximum potency.</p>
      </div>
    </div>
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80" alt="Sustainable Sourcing" loading="lazy">
      <div class="dual-card-content">
        <h3>Sustainable Sourcing</h3>
        <p>Ethically harvested from certified organic farms.</p>
      </div>
    </div>
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1615397323282-5d8204680879?auto=format&fit=crop&q=80" alt="Clinical Precision" loading="lazy">
      <div class="dual-card-content">
        <h3>Clinical Precision</h3>
        <p>Formulated by expert pharmacists.</p>
      </div>
    </div>
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1556228720-192a6af4e865?auto=format&fit=crop&q=80" alt="Cellular Repair" loading="lazy">
      <div class="dual-card-content">
        <h3>Cellular Repair</h3>
        <p>Targeted action at the deepest levels.</p>
      </div>
    </div>
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80" alt="Dermatologist Tested" loading="lazy">
      <div class="dual-card-content">
        <h3>Dermatologist Tested</h3>
        <p>Safe for all skin types, including sensitive.</p>
      </div>
    </div>
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1570194065650-d6139b4b0e52?auto=format&fit=crop&q=80" alt="Cruelty Free" loading="lazy">
      <div class="dual-card-content">
        <h3>Cruelty Free</h3>
        <p>Never tested on animals, strictly vegan.</p>
      </div>
    </div>
    <!-- Group 2 (Duplicate for infinite scroll) -->
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80" alt="Botanical Extracts" loading="lazy">
      <div class="dual-card-content">
        <h3>Botanical Extracts</h3>
        <p>Cold-pressed to preserve maximum potency.</p>
      </div>
    </div>
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80" alt="Sustainable Sourcing" loading="lazy">
      <div class="dual-card-content">
        <h3>Sustainable Sourcing</h3>
        <p>Ethically harvested from certified organic farms.</p>
      </div>
    </div>
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1615397323282-5d8204680879?auto=format&fit=crop&q=80" alt="Clinical Precision" loading="lazy">
      <div class="dual-card-content">
        <h3>Clinical Precision</h3>
        <p>Formulated by expert pharmacists.</p>
      </div>
    </div>
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1556228720-192a6af4e865?auto=format&fit=crop&q=80" alt="Cellular Repair" loading="lazy">
      <div class="dual-card-content">
        <h3>Cellular Repair</h3>
        <p>Targeted action at the deepest levels.</p>
      </div>
    </div>
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80" alt="Dermatologist Tested" loading="lazy">
      <div class="dual-card-content">
        <h3>Dermatologist Tested</h3>
        <p>Safe for all skin types, including sensitive.</p>
      </div>
    </div>
    <div class="dual-card">
      <img src="https://images.unsplash.com/photo-1570194065650-d6139b4b0e52?auto=format&fit=crop&q=80" alt="Cruelty Free" loading="lazy">
      <div class="dual-card-content">
        <h3>Cruelty Free</h3>
        <p>Never tested on animals, strictly vegan.</p>
      </div>
    </div>
  </div>
</section>
`;

  content = content.replace(codeToRemove, newHtml);
}


// 2. Remove `#dual-marquee` CSS and insert new ones
const dualMarqueeCssStart = content.indexOf('/* DUAL 3D MARQUEE                */');
const whyShahrinCssStart = content.indexOf('/* WHY SHAHRIN                    */');
const actualCssStart = content.lastIndexOf('/* ============================== */', dualMarqueeCssStart);

if (actualCssStart !== -1 && whyShahrinCssStart > actualCssStart) {
  const cssToRemove = content.substring(actualCssStart, whyShahrinCssStart);
  
  const newCss = `/* ============================== */
/* THIN TEXT MARQUEES             */
/* ============================== */
.thin-marquee {
  width: 100%;
  padding: 32px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  overflow: hidden;
}
.marquee-green {
  background: var(--olive);
}
.marquee-green .marquee-item {
  color: var(--cream);
  opacity: 0.9;
}
.marquee-green .marquee-item i {
  color: var(--honey);
}
.marquee-cream {
  background: var(--cream);
  margin-top: -1px;
}
.marquee-cream .marquee-item {
  color: var(--ink);
  opacity: 0.9;
}
.marquee-cream .marquee-item i {
  color: var(--sage);
}
.track-left {
  display: flex;
  gap: 48px;
  width: max-content;
  animation: scrollLeft 30s linear infinite;
}
.track-right {
  display: flex;
  gap: 48px;
  width: max-content;
  animation: scrollRight 30s linear infinite;
}
.thin-marquee:hover .track-left, .thin-marquee:hover .track-right {
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

/* ============================== */
/* HORIZONTAL 3D CARDS            */
/* ============================== */
#horiz-3d-cards {
  width: 100%;
  overflow: hidden;
  background: var(--cream);
  padding: 80px 0;
  perspective: 1200px;
}
.horiz-cards-track {
  display: flex;
  gap: 40px;
  width: max-content;
  padding: 0 40px;
  animation: horizScrollCards 35s linear infinite;
}
.horiz-cards-track:hover {
  animation-play-state: paused;
}
@keyframes horizScrollCards {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 20px)); }
}
.dual-card {
  width: 350px;
  height: 480px;
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: var(--radius-card);
  padding: 40px;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s var(--ease);
  box-shadow: 0 30px 60px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: var(--cream);
  flex-shrink: 0;
}
.dual-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
  z-index: 0;
}
.dual-card:hover {
  transform: scale(1.05) rotateX(5deg) rotateY(-5deg);
  box-shadow: -20px 40px 80px rgba(0,0,0,0.15);
  z-index: 5;
}
.dual-card img {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease);
  z-index: -1;
}
.dual-card:hover img {
  transform: scale(1.1);
}
.dual-card-content {
  transform: translateZ(50px);
  z-index: 10;
}
.dual-card h3 {
  font-family: var(--font-serif);
  font-size: 28px;
  margin-bottom: 8px;
}
.dual-card p {
  font-size: 14px;
  opacity: 0.9;
}

/* ============================== */
`;

  content = content.replace(cssToRemove, newCss);
}

fs.writeFileSync('index.html', content);
console.log('Done reverting to thin marquees and horiz cards');

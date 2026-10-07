const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Remove the text marquee HTML
const textMarqueeStart = content.indexOf('<!-- DUAL TEXT MARQUEE -->');
const horizCardsEnd = content.indexOf('</section>', content.indexOf('id="horiz-3d-cards"')) + '</section>'.length;

if (textMarqueeStart !== -1 && horizCardsEnd > textMarqueeStart) {
  const codeToRemove = content.substring(textMarqueeStart, horizCardsEnd);
  
  // Re-insert the vertical DUAL 3D MARQUEE
  const verticalMarqueeHtml = `<!-- DUAL 3D MARQUEE -->
<section id="dual-marquee" aria-label="Featured Highlights">
  <div class="dual-marquee-title">
    <h2>The Shahrin Standard</h2>
    <p>Premium care, elevated.</p>
  </div>
  <div class="dual-col dual-left">
    <div class="marquee-vert track-up">
      <!-- Original 4 -->
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
      <!-- Duplicated for infinite scroll (-50% translation) -->
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
    </div>
  </div>
  
  <div class="dual-col dual-right">
    <div class="marquee-vert track-down">
      <div class="dual-card">
        <img src="https://images.unsplash.com/photo-1615397323282-5d8204680879?auto=format&fit=crop&q=80" alt="Dermatologist Tested" loading="lazy">
        <div class="dual-card-content">
          <h3>Dermatologist Tested</h3>
          <p>Safe for all skin types, including sensitive.</p>
        </div>
      </div>
      <div class="dual-card">
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80" alt="Cruelty Free" loading="lazy">
        <div class="dual-card-content">
          <h3>Cruelty Free</h3>
          <p>Never tested on animals, strictly vegan.</p>
        </div>
      </div>
      <div class="dual-card">
        <img src="https://images.unsplash.com/photo-1556228720-192a6af4e865?auto=format&fit=crop&q=80" alt="Daily Glow" loading="lazy">
        <div class="dual-card-content">
          <h3>Daily Glow</h3>
          <p>Restore your natural radiance effortlessly.</p>
        </div>
      </div>
      <div class="dual-card">
        <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80" alt="Advanced Hydration" loading="lazy">
        <div class="dual-card-content">
          <h3>Advanced Hydration</h3>
          <p>Lock in moisture for up to 48 hours.</p>
        </div>
      </div>
      <!-- Duplicate -->
      <div class="dual-card">
        <img src="https://images.unsplash.com/photo-1615397323282-5d8204680879?auto=format&fit=crop&q=80" alt="Dermatologist Tested" loading="lazy">
        <div class="dual-card-content">
          <h3>Dermatologist Tested</h3>
          <p>Safe for all skin types, including sensitive.</p>
        </div>
      </div>
      <div class="dual-card">
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80" alt="Cruelty Free" loading="lazy">
        <div class="dual-card-content">
          <h3>Cruelty Free</h3>
          <p>Never tested on animals, strictly vegan.</p>
        </div>
      </div>
      <div class="dual-card">
        <img src="https://images.unsplash.com/photo-1556228720-192a6af4e865?auto=format&fit=crop&q=80" alt="Daily Glow" loading="lazy">
        <div class="dual-card-content">
          <h3>Daily Glow</h3>
          <p>Restore your natural radiance effortlessly.</p>
        </div>
      </div>
      <div class="dual-card">
        <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80" alt="Advanced Hydration" loading="lazy">
        <div class="dual-card-content">
          <h3>Advanced Hydration</h3>
          <p>Lock in moisture for up to 48 hours.</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;

  content = content.replace(codeToRemove, verticalMarqueeHtml);
}

// 2. Replace CSS
const textMarqueeCssStart = content.indexOf('/* DUAL TEXT MARQUEE              */');
const horizCardsCssEnd = content.indexOf('/* WHY SHAHRIN                    */');
const actualCssStart = content.lastIndexOf('/* ============================== */', textMarqueeCssStart);

if (actualCssStart !== -1 && horizCardsCssEnd > actualCssStart) {
  const cssToRemove = content.substring(actualCssStart, horizCardsCssEnd);
  
  const verticalMarqueeCss = `/* ============================== */
/* DUAL 3D MARQUEE                */
/* ============================== */
#dual-marquee {
  display: flex;
  height: 90vh; 
  overflow: hidden;
  background: var(--cream);
  position: relative;
}
@media(max-width: 768px) {
  #dual-marquee { flex-direction: column; height: 120vh; }
}
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
.dual-col {
  flex: 1;
  position: relative;
  overflow: hidden;
  perspective: 1200px;
}
.dual-col::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}
.dual-left { background: var(--olive); }
.dual-left::after { background: linear-gradient(to bottom, var(--olive) 0%, transparent 15%, transparent 85%, var(--olive) 100%); }
.dual-right { background: var(--cream); }
.dual-right::after { background: linear-gradient(to bottom, var(--cream) 0%, transparent 15%, transparent 85%, var(--cream) 100%); }

.marquee-vert {
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 2vw;
  width: 100%;
}
@media(max-width: 768px) {
  .marquee-vert { gap: 4vw; padding: 4vw; }
}
.track-up { animation: dualScrollUp 30s linear infinite; }
.track-down { animation: dualScrollDown 30s linear infinite; }
.marquee-vert:hover { animation-play-state: paused; }

@keyframes dualScrollUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
@keyframes dualScrollDown {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}

.dual-card {
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-card);
  padding: 40px;
  min-height: 400px;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s var(--ease);
  box-shadow: 0 30px 60px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.dual-left .dual-card {
  color: var(--cream);
  border-color: rgba(245,239,230,0.15);
}
.dual-right .dual-card {
  color: var(--ink);
  background: #ffffff;
  border-color: rgba(0,0,0,0.05);
  box-shadow: 0 30px 60px rgba(0,0,0,0.03);
}
.dual-card:hover {
  transform: scale(1.03) rotateX(4deg) rotateY(-4deg);
  box-shadow: -15px 40px 80px rgba(0,0,0,0.15);
  z-index: 5;
}
.dual-right .dual-card:hover {
  box-shadow: -15px 40px 80px rgba(0,0,0,0.08);
}
.dual-card img {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.6;
  transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
  z-index: -1;
}
.dual-right .dual-card img {
  opacity: 0.8;
}
.dual-card:hover img {
  transform: scale(1.05);
  opacity: 0.8;
}
.dual-right .dual-card:hover img {
  opacity: 1;
}
.dual-card-content {
  transform: translateZ(40px);
}
.dual-card h3 {
  font-family: var(--font-serif);
  font-size: clamp(24px, 2.5vw, 36px);
  margin-bottom: 12px;
  text-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.dual-right .dual-card h3 {
  text-shadow: none;
}
.dual-card p {
  font-size: 14px;
  opacity: 0.8;
  max-width: 80%;
}

/* ============================== */
`;

  content = content.replace(cssToRemove, verticalMarqueeCss);
}

fs.writeFileSync('index.html', content);
console.log('Successfully restored vertical 3D cards.');

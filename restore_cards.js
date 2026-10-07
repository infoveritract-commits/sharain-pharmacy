const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Fix the Text Marquee "not like double" issue
const leftTrackStart = content.indexOf('<div class="marquee-track track-left">') + '<div class="marquee-track track-left">'.length;
const leftTrackEnd = content.indexOf('</div>', leftTrackStart);
const originalLeftSpans = `
      <span>100% Natural</span><i class="fa-solid fa-star-of-life"></i>
      <span>Clinically Proven</span><i class="fa-solid fa-star-of-life"></i>
      <span>Cruelty Free</span><i class="fa-solid fa-star-of-life"></i>
      <span>Botanical Extracts</span><i class="fa-solid fa-star-of-life"></i>
      <span>Dermatologist Tested</span><i class="fa-solid fa-star-of-life"></i>
      <span>Vegan Formulas</span><i class="fa-solid fa-star-of-life"></i>`;
const newLeftTrack = originalLeftSpans.repeat(6);
content = content.substring(0, leftTrackStart) + newLeftTrack + content.substring(leftTrackEnd);

const rightTrackStart = content.indexOf('<div class="marquee-track track-right">') + '<div class="marquee-track track-right">'.length;
const rightTrackEnd = content.indexOf('</div>', rightTrackStart);
const originalRightSpans = `
      <span>Acne & Blemishes</span><i class="fa-solid fa-seedling"></i>
      <span>Dryness & Dehydration</span><i class="fa-solid fa-seedling"></i>
      <span>Anti-Aging & Fine Lines</span><i class="fa-solid fa-seedling"></i>
      <span>Sensitivity & Redness</span><i class="fa-solid fa-seedling"></i>
      <span>Dark Spots & Pigmentation</span><i class="fa-solid fa-seedling"></i>`;
const newRightTrack = originalRightSpans.repeat(6);
content = content.substring(0, rightTrackStart) + newRightTrack + content.substring(rightTrackEnd);

// 2. Add the 3D Cards HTML right under #text-marquee
const textMarqueeEnd = content.indexOf('</section>', content.indexOf('id="text-marquee"')) + '</section>'.length;
const cardsHtml = `

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
</section>`;
content = content.substring(0, textMarqueeEnd) + cardsHtml + content.substring(textMarqueeEnd);

// 3. Add CSS for Horizontal 3D Cards
const cssTarget = '/* ============================== */\n/* WHY SHAHRIN                    */';
const cardsCss = `/* ============================== */
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
  100% { transform: translateX(calc(-50% - 20px)); } /* -50% of the entire track minus half of one gap */
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
`;
content = content.replace(cssTarget, cardsCss + '\n' + cssTarget);

fs.writeFileSync('index.html', content);
console.log('Successfully restored 3D cards horizontally.');

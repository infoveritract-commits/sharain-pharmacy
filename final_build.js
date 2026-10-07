const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Find and remove old Vertical Dual Marquee HTML
const dualMarqueeStart = content.indexOf('<!-- DUAL 3D MARQUEE -->');
const shopStart = content.indexOf('<!-- SHOP -->'); // Since concerns is deleted, shop is the next section
if (dualMarqueeStart !== -1 && shopStart !== -1) {
  const codeToRemove = content.substring(dualMarqueeStart, shopStart);
  
  const newSectionsHtml = `<!-- DUAL TEXT MARQUEE -->
<section id="text-marquee" aria-label="Brand Highlights">
  <div class="marquee-horiz marquee-green">
    <div class="marquee-track track-left">
      <span>100% Natural</span><i class="fa-solid fa-star-of-life"></i>
      <span>Clinically Proven</span><i class="fa-solid fa-star-of-life"></i>
      <span>Cruelty Free</span><i class="fa-solid fa-star-of-life"></i>
      <span>Botanical Extracts</span><i class="fa-solid fa-star-of-life"></i>
      <span>Dermatologist Tested</span><i class="fa-solid fa-star-of-life"></i>
      <span>Vegan Formulas</span><i class="fa-solid fa-star-of-life"></i>
      <span>100% Natural</span><i class="fa-solid fa-star-of-life"></i>
      <span>Clinically Proven</span><i class="fa-solid fa-star-of-life"></i>
      <span>Cruelty Free</span><i class="fa-solid fa-star-of-life"></i>
      <span>Botanical Extracts</span><i class="fa-solid fa-star-of-life"></i>
      <span>Dermatologist Tested</span><i class="fa-solid fa-star-of-life"></i>
      <span>Vegan Formulas</span><i class="fa-solid fa-star-of-life"></i>
      <span>100% Natural</span><i class="fa-solid fa-star-of-life"></i>
      <span>Clinically Proven</span><i class="fa-solid fa-star-of-life"></i>
      <span>Cruelty Free</span><i class="fa-solid fa-star-of-life"></i>
      <span>Botanical Extracts</span><i class="fa-solid fa-star-of-life"></i>
      <span>Dermatologist Tested</span><i class="fa-solid fa-star-of-life"></i>
      <span>Vegan Formulas</span><i class="fa-solid fa-star-of-life"></i>
      <span>100% Natural</span><i class="fa-solid fa-star-of-life"></i>
      <span>Clinically Proven</span><i class="fa-solid fa-star-of-life"></i>
      <span>Cruelty Free</span><i class="fa-solid fa-star-of-life"></i>
      <span>Botanical Extracts</span><i class="fa-solid fa-star-of-life"></i>
      <span>Dermatologist Tested</span><i class="fa-solid fa-star-of-life"></i>
      <span>Vegan Formulas</span><i class="fa-solid fa-star-of-life"></i>
    </div>
  </div>
  <div class="marquee-horiz marquee-cream">
    <div class="marquee-track track-right">
      <span>Rooted in Nature</span><i class="fa-solid fa-seedling"></i>
      <span>Refined by Science</span><i class="fa-solid fa-seedling"></i>
      <span>Acne & Blemishes</span><i class="fa-solid fa-seedling"></i>
      <span>Anti-Aging & Fine Lines</span><i class="fa-solid fa-seedling"></i>
      <span>Hydration</span><i class="fa-solid fa-seedling"></i>
      <span>Rooted in Nature</span><i class="fa-solid fa-seedling"></i>
      <span>Refined by Science</span><i class="fa-solid fa-seedling"></i>
      <span>Acne & Blemishes</span><i class="fa-solid fa-seedling"></i>
      <span>Anti-Aging & Fine Lines</span><i class="fa-solid fa-seedling"></i>
      <span>Hydration</span><i class="fa-solid fa-seedling"></i>
      <span>Rooted in Nature</span><i class="fa-solid fa-seedling"></i>
      <span>Refined by Science</span><i class="fa-solid fa-seedling"></i>
      <span>Acne & Blemishes</span><i class="fa-solid fa-seedling"></i>
      <span>Anti-Aging & Fine Lines</span><i class="fa-solid fa-seedling"></i>
      <span>Hydration</span><i class="fa-solid fa-seedling"></i>
      <span>Rooted in Nature</span><i class="fa-solid fa-seedling"></i>
      <span>Refined by Science</span><i class="fa-solid fa-seedling"></i>
      <span>Acne & Blemishes</span><i class="fa-solid fa-seedling"></i>
      <span>Anti-Aging & Fine Lines</span><i class="fa-solid fa-seedling"></i>
      <span>Hydration</span><i class="fa-solid fa-seedling"></i>
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

  content = content.replace(codeToRemove, newSectionsHtml);
}

// 2. Remove old Vertical Dual Marquee CSS and insert new ones
const dualMarqueeCssStart = content.indexOf('/* DUAL 3D MARQUEE                */');
const whyShahrinCssStart = content.indexOf('/* WHY SHAHRIN                    */');
const actualCssStart = content.lastIndexOf('/* ============================== */', dualMarqueeCssStart);

if (actualCssStart !== -1 && whyShahrinCssStart > actualCssStart) {
  const cssToRemove = content.substring(actualCssStart, whyShahrinCssStart);
  
  const newSectionsCss = `/* ============================== */
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
  padding: 48px 0; 
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
  gap: 80px; 
  width: max-content;
  align-items: center;
}
.marquee-track span {
  font-family: var(--font-serif);
  font-size: clamp(56px, 7vw, 110px); 
  white-space: nowrap;
  letter-spacing: 0.02em; 
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
  animation: scrollLeft 45s linear infinite;
}
.track-right {
  animation: scrollRight 45s linear infinite;
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

  content = content.replace(cssToRemove, newSectionsCss);
}

fs.writeFileSync('index.html', content);
console.log('Successfully applied text marquees + horizontal 3d cards combo.');

const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const targetStr = '</section>\n\n';
const thinMarqueesEnd = content.indexOf(targetStr, content.indexOf('id="thin-text-marquees"')) + targetStr.length;

if (thinMarqueesEnd > targetStr.length) {
  
  // Row 1 products (6 items)
  const row1Html = `
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80" alt="Radiance Serum" loading="lazy">
      <div class="card-3d-content">
        <h3>Radiance Serum</h3>
        <p>₨ 4,500</p>
      </div>
    </div>
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80" alt="Purifying Cleanser" loading="lazy">
      <div class="card-3d-content">
        <h3>Purifying Cleanser</h3>
        <p>₨ 3,200</p>
      </div>
    </div>
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1556228720-192a6af4e865?auto=format&fit=crop&q=80" alt="Hydrating Mist" loading="lazy">
      <div class="card-3d-content">
        <h3>Hydrating Mist</h3>
        <p>₨ 2,800</p>
      </div>
    </div>
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1615397323282-5d8204680879?auto=format&fit=crop&q=80" alt="Renewal Cream" loading="lazy">
      <div class="card-3d-content">
        <h3>Renewal Cream</h3>
        <p>₨ 5,100</p>
      </div>
    </div>
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80" alt="Brightening Tonic" loading="lazy">
      <div class="card-3d-content">
        <h3>Brightening Tonic</h3>
        <p>₨ 3,600</p>
      </div>
    </div>
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1570194065650-d6139b4b0e52?auto=format&fit=crop&q=80" alt="Night Repair Oil" loading="lazy">
      <div class="card-3d-content">
        <h3>Night Repair Oil</h3>
        <p>₨ 6,000</p>
      </div>
    </div>`;

  // Row 2 products (6 items)
  const row2Html = `
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80" alt="Vitamin C Drops" loading="lazy">
      <div class="card-3d-content">
        <h3>Vitamin C Drops</h3>
        <p>₨ 4,200</p>
      </div>
    </div>
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80" alt="Exfoliating Mask" loading="lazy">
      <div class="card-3d-content">
        <h3>Exfoliating Mask</h3>
        <p>₨ 3,900</p>
      </div>
    </div>
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80" alt="Eye Contour Gel" loading="lazy">
      <div class="card-3d-content">
        <h3>Eye Contour Gel</h3>
        <p>₨ 3,400</p>
      </div>
    </div>
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80" alt="Balancing Toner" loading="lazy">
      <div class="card-3d-content">
        <h3>Balancing Toner</h3>
        <p>₨ 2,500</p>
      </div>
    </div>
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80" alt="SPF 50 Shield" loading="lazy">
      <div class="card-3d-content">
        <h3>SPF 50 Shield</h3>
        <p>₨ 4,800</p>
      </div>
    </div>
    <div class="card-3d-prod">
      <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80" alt="Lip Balm" loading="lazy">
      <div class="card-3d-content">
        <h3>Nourishing Lip Balm</h3>
        <p>₨ 1,200</p>
      </div>
    </div>`;

  const newHtml = `<!-- AUTO SCROLLING 3D PRODUCTS -->
<section id="auto-scroll-products" aria-label="Featured Skincare">
  <!-- Row 1 -->
  <div class="prod-marquee-wrapper">
    <div class="prod-track track-scroll-left">
      ${row1Html.repeat(4)}
    </div>
  </div>
  <!-- Row 2 -->
  <div class="prod-marquee-wrapper" style="margin-top: 40px;">
    <div class="prod-track track-scroll-right">
      ${row2Html.repeat(4)}
    </div>
  </div>
</section>

`;

  content = content.substring(0, thinMarqueesEnd) + newHtml + content.substring(thinMarqueesEnd);
}

// 2. Add CSS
const styleEnd = content.indexOf('</style>');
if (styleEnd !== -1) {
  const newCss = `
/* ============================== */
/* AUTO SCROLLING 3D PRODUCTS     */
/* ============================== */
#auto-scroll-products {
  width: 100%;
  overflow: hidden;
  background: var(--cream);
  padding: 80px 0;
  perspective: 1200px;
}
.prod-marquee-wrapper {
  width: 100%;
  overflow: hidden;
}
.prod-track {
  display: flex;
  gap: 40px;
  width: max-content;
  padding: 0 20px;
}
.track-scroll-left {
  animation: prodScrollLeft 45s linear infinite;
}
.track-scroll-right {
  animation: prodScrollRight 45s linear infinite;
}
.prod-track:hover {
  animation-play-state: paused;
}
@keyframes prodScrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-25% - 10px)); } /* 4 duplicates, so moving 1 set is 25% */
}
@keyframes prodScrollRight {
  0% { transform: translateX(calc(-25% - 10px)); }
  100% { transform: translateX(0); }
}

.card-3d-prod {
  width: 320px;
  height: 420px;
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: var(--radius-card);
  padding: 32px;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s var(--ease);
  box-shadow: 0 20px 40px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: var(--cream);
  flex-shrink: 0;
}
.card-3d-prod::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%);
  z-index: 0;
}
.card-3d-prod:hover {
  transform: scale(1.05) rotateX(5deg) rotateY(-5deg);
  box-shadow: -15px 30px 60px rgba(0,0,0,0.15);
  z-index: 5;
}
.card-3d-prod img {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease);
  z-index: -1;
}
.card-3d-prod:hover img {
  transform: scale(1.1);
}
.card-3d-content {
  transform: translateZ(50px);
  z-index: 10;
}
.card-3d-prod h3 {
  font-family: var(--font-serif);
  font-size: 24px;
  margin-bottom: 8px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.card-3d-prod p {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 500;
  color: var(--sand);
}
`;

  content = content.substring(0, styleEnd) + newCss + content.substring(styleEnd);
}

fs.writeFileSync('index.html', content);
console.log('Successfully added 2 rows of 3D product cards.');

const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Replace HTML for Auto Scrolling Products
const autoScrollStart = content.indexOf('<!-- AUTO SCROLLING 3D PRODUCTS -->');
const whyShahrinHtmlStart = content.indexOf('<!-- WHY SHAHRIN -->');

if (autoScrollStart !== -1 && whyShahrinHtmlStart !== -1) {
  const codeToRemove = content.substring(autoScrollStart, whyShahrinHtmlStart);
  
  const row1Html = `
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <div class="card-tag">Bestseller</div>
         <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80" alt="Radiance Serum" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>Radiance Serum</h3>
        <p>₨ 4,500</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80" alt="Purifying Cleanser" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>Purifying Cleanser</h3>
        <p>₨ 3,200</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <div class="card-tag vegan">100% Vegan</div>
         <img src="https://images.unsplash.com/photo-1556228720-192a6af4e865?auto=format&fit=crop&q=80" alt="Hydrating Mist" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>Hydrating Mist</h3>
        <p>₨ 2,800</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <img src="https://images.unsplash.com/photo-1615397323282-5d8204680879?auto=format&fit=crop&q=80" alt="Renewal Cream" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>Renewal Cream</h3>
        <p>₨ 5,100</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <div class="card-tag new">New Arrival</div>
         <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80" alt="Brightening Tonic" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>Brightening Tonic</h3>
        <p>₨ 3,600</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <img src="https://images.unsplash.com/photo-1570194065650-d6139b4b0e52?auto=format&fit=crop&q=80" alt="Night Repair Oil" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>Night Repair Oil</h3>
        <p>₨ 6,000</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>`;

  const row2Html = `
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <div class="card-tag">Award Winner</div>
         <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80" alt="Vitamin C Drops" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>Vitamin C Drops</h3>
        <p>₨ 4,200</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <img src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80" alt="Exfoliating Mask" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>Exfoliating Mask</h3>
        <p>₨ 3,900</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <img src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80" alt="Eye Contour Gel" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>Eye Contour Gel</h3>
        <p>₨ 3,400</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <div class="card-tag vegan">100% Vegan</div>
         <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80" alt="Balancing Toner" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>Balancing Toner</h3>
        <p>₨ 2,500</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <div class="card-tag">Bestseller</div>
         <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80" alt="SPF 50 Shield" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>SPF 50 Shield</h3>
        <p>₨ 4,800</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card-3d-prod polaroid">
      <div class="polaroid-img-wrap">
         <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80" alt="Lip Balm" loading="lazy">
      </div>
      <div class="polaroid-info">
        <h3>Nourishing Lip Balm</h3>
        <p>₨ 1,200</p>
        <div class="polaroid-actions">
           <button class="btn-add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
           <button class="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>`;

  const newHtml = `<!-- AUTO SCROLLING 3D PRODUCTS -->
<section id="auto-scroll-products" aria-label="Featured Skincare">
  <!-- Row 1 -->
  <div class="prod-marquee-wrapper" style="padding-top: 20px;">
    <div class="prod-track track-scroll-left">
      ${row1Html.repeat(4)}
    </div>
  </div>
  <!-- Row 2 -->
  <div class="prod-marquee-wrapper" style="margin-top: 60px;">
    <div class="prod-track track-scroll-right">
      ${row2Html.repeat(4)}
    </div>
  </div>
</section>

`;

  content = content.replace(codeToRemove, newHtml);
}

// 2. Replace CSS for Auto Scrolling Products
const autoScrollCssStart = content.indexOf('/* AUTO SCROLLING 3D PRODUCTS     */');
const styleEnd = content.indexOf('</style>');

if (autoScrollCssStart !== -1) {
  const cssToRemove = content.substring(autoScrollCssStart, styleEnd);
  
  const newCss = `/* AUTO SCROLLING 3D PRODUCTS     */
/* ============================== */
#auto-scroll-products {
  width: 100%;
  overflow: hidden;
  background: var(--cream);
  padding: 80px 0 100px;
  perspective: 1500px;
}
.prod-marquee-wrapper {
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
}
.prod-track {
  display: flex;
  gap: 48px;
  width: max-content;
  padding: 0 24px;
}
.track-scroll-left {
  animation: prodScrollLeft 50s linear infinite;
}
.track-scroll-right {
  animation: prodScrollRight 50s linear infinite;
}
.prod-track:hover {
  animation-play-state: paused;
}
@keyframes prodScrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-25% - 12px)); }
}
@keyframes prodScrollRight {
  0% { transform: translateX(calc(-25% - 12px)); }
  100% { transform: translateX(0); }
}

/* Polaroid 3D Cards */
.card-3d-prod.polaroid {
  width: 320px;
  background: #ffffff;
  padding: 16px 16px 24px 16px;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.06);
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s var(--ease);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  flex-shrink: 0;
  border: 1px solid rgba(0,0,0,0.03);
}
.card-3d-prod.polaroid:hover {
  transform: scale(1.05) rotateX(6deg) rotateY(-6deg);
  box-shadow: -15px 30px 60px rgba(0,0,0,0.12);
  z-index: 10;
}
.polaroid-img-wrap {
  width: 100%;
  aspect-ratio: 4/5;
  background: var(--linen);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  margin-bottom: 24px;
  transform: translateZ(40px);
  transition: transform 0.6s var(--ease);
}
.card-3d-prod.polaroid:hover .polaroid-img-wrap {
  transform: translateZ(60px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
.polaroid-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease);
}
.card-3d-prod.polaroid:hover .polaroid-img-wrap img {
  transform: scale(1.08);
}
.polaroid-info {
  transform: translateZ(20px);
  text-align: center;
  transition: transform 0.6s var(--ease);
}
.card-3d-prod.polaroid:hover .polaroid-info {
  transform: translateZ(30px);
}
.polaroid-info h3 {
  font-family: var(--font-serif);
  font-size: 20px;
  color: var(--ink);
  margin-bottom: 6px;
}
.polaroid-info p {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 500;
  color: var(--sage);
  margin-bottom: 20px;
}
.polaroid-actions {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.btn-add-cart, .btn-buy-now {
  padding: 10px 16px;
  border-radius: var(--radius-pill);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;
}
.btn-add-cart {
  background: var(--linen);
  color: var(--olive);
  border: 1px solid var(--line);
}
.btn-add-cart:hover {
  background: var(--sand);
}
.btn-buy-now {
  background: var(--sage);
  color: var(--cream);
  flex: 1;
  justify-content: center;
}
.btn-buy-now:hover {
  background: var(--moss);
}

/* Unique 3D Tags */
.card-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 12px;
  background: linear-gradient(135deg, var(--honey), #d4a373);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  transform: translateZ(30px);
  z-index: 5;
  border: 1px solid rgba(255,255,255,0.4);
}
.card-tag.vegan {
  background: linear-gradient(135deg, var(--sage), var(--olive));
}
.card-tag.new {
  background: linear-gradient(135deg, #a3b18a, #588157);
}

`;

  content = content.replace(cssToRemove, newCss + '\n');
}

fs.writeFileSync('index.html', content);
console.log('Successfully applied Polaroid style with buttons and tags.');

const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Insert HTML after WHY SHAHRIN
const whyShahrinEnd = content.indexOf('</section>', content.indexOf('<!-- WHY SHAHRIN -->')) + '</section>'.length;

const newHtml = `

<!-- REAL RESULTS: BEFORE/AFTER & REVIEWS -->
<section id="results-new" aria-label="Real Results">
  <div class="results-container">
    
    <!-- LEFT: 3D Auto-scrolling Reviews Wheel -->
    <div class="results-left">
      <div class="section-title">
        <p class="label">Real Results</p>
        <h2>Transformations you can see and feel.</h2>
      </div>
      
      <div class="reviews-wheel-wrapper">
        <div class="reviews-wheel track-up">
          <div class="review-3d-card">
            <div class="stars">★★★★★</div>
            <p>"The radiance serum completely transformed my skin in just two weeks! I've never felt more confident."</p>
            <h4>- Sarah M.</h4>
          </div>
          <div class="review-3d-card">
            <div class="stars">★★★★★</div>
            <p>"Finally a natural product that actually delivers on its promises. I'm obsessed with the texture."</p>
            <h4>- Amna K.</h4>
          </div>
          <div class="review-3d-card">
            <div class="stars">★★★★★</div>
            <p>"I struggled with redness for years. The barrier repair cream changed my life. Period."</p>
            <h4>- Fatima R.</h4>
          </div>
          <div class="review-3d-card">
            <div class="stars">★★★★★</div>
            <p>"It smells divine and it works! My fine lines have noticeably reduced since I started using Shahrin."</p>
            <h4>- Zara L.</h4>
          </div>
          <!-- Duplicates for infinite scroll -->
          <div class="review-3d-card">
            <div class="stars">★★★★★</div>
            <p>"The radiance serum completely transformed my skin in just two weeks! I've never felt more confident."</p>
            <h4>- Sarah M.</h4>
          </div>
          <div class="review-3d-card">
            <div class="stars">★★★★★</div>
            <p>"Finally a natural product that actually delivers on its promises. I'm obsessed with the texture."</p>
            <h4>- Amna K.</h4>
          </div>
          <div class="review-3d-card">
            <div class="stars">★★★★★</div>
            <p>"I struggled with redness for years. The barrier repair cream changed my life. Period."</p>
            <h4>- Fatima R.</h4>
          </div>
          <div class="review-3d-card">
            <div class="stars">★★★★★</div>
            <p>"It smells divine and it works! My fine lines have noticeably reduced since I started using Shahrin."</p>
            <h4>- Zara L.</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- RIGHT: Before & After Slider -->
    <div class="results-right">
       <div class="ba-slider-container">
         <div class="ba-slider" id="new-ba-slider">
            <div class="slider-layer before-layer">
              <div class="ba-tag">BEFORE</div>
            </div>
            <div class="slider-layer after-layer" id="new-ba-after">
              <div class="ba-tag">AFTER</div>
            </div>
            <div class="slider-handle" id="new-ba-handle">
               <div class="handle-line"></div>
               <div class="handle-btn"><i class="fa-solid fa-arrows-left-right"></i></div>
            </div>
         </div>
       </div>
    </div>

  </div>
</section>
`;

content = content.substring(0, whyShahrinEnd) + newHtml + content.substring(whyShahrinEnd);

// 2. Add CSS
const styleEnd = content.indexOf('</style>');
const newCss = `
/* ============================== */
/* NEW BEFORE & AFTER SECTION     */
/* ============================== */
#results-new {
  padding: 120px 0;
  background: var(--linen);
  border-top: 1px solid var(--line);
  overflow: hidden;
}
.results-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
@media(max-width: 1024px) {
  .results-container { grid-template-columns: 1fr; gap: 40px; padding: 0 24px; }
}
.results-left .section-title { margin-bottom: 40px; }
.results-left h2 {
  font-family: var(--font-serif);
  font-size: clamp(36px, 4vw, 56px);
  color: var(--ink);
  margin-top: 8px;
}
.reviews-wheel-wrapper {
  height: 500px;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
  perspective: 1500px;
}
.reviews-wheel {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  width: 100%;
}
.review-3d-card {
  background: var(--cream);
  padding: 32px;
  border-radius: var(--radius-card);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.03);
  transform-style: preserve-3d;
  transition: transform 0.5s var(--ease), box-shadow 0.5s var(--ease);
  cursor: pointer;
  position: relative;
}
.review-3d-card:hover {
  transform: scale(1.03) rotateX(4deg) rotateY(-4deg);
  box-shadow: -10px 20px 40px rgba(0,0,0,0.1);
  z-index: 10;
}
.review-3d-card .stars {
  color: var(--honey);
  font-size: 14px;
  margin-bottom: 16px;
  transform: translateZ(20px);
}
.review-3d-card p {
  font-family: var(--font-serif);
  font-size: 18px;
  line-height: 1.6;
  color: var(--ink);
  margin-bottom: 24px;
  transform: translateZ(30px);
}
.review-3d-card h4 {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--sage);
  transform: translateZ(20px);
}

/* Before After Slider */
.ba-slider-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.1);
  background: var(--sand);
  border: 1px solid rgba(0,0,0,0.05);
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.5s var(--ease);
}
.ba-slider-container:hover {
  transform: perspective(1000px) rotateY(0deg);
}
.ba-slider {
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
  cursor: ew-resize;
  user-select: none;
}
.slider-layer {
  position: absolute;
  inset: 0;
  background-image: url('before after.webp');
  background-size: 200% 100%;
  background-repeat: no-repeat;
}
.before-layer {
  background-position: right center; /* Right half of the image is Before */
  z-index: 1;
}
.after-layer {
  background-position: left center; /* Left half of the image is After */
  z-index: 2;
  clip-path: inset(0 50% 0 0); /* Show only left half by cropping 50% from right */
}
.ba-tag {
  position: absolute;
  top: 24px;
  padding: 6px 16px;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--ink);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.before-layer .ba-tag { right: 24px; }
.after-layer .ba-tag { left: 24px; }

.slider-handle {
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  background: #ffffff;
  z-index: 3;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  pointer-events: none;
}
.handle-btn {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 48px; height: 48px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--sage);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border: 2px solid var(--line);
}
`;
content = content.substring(0, styleEnd) + newCss + content.substring(styleEnd);

// 3. Add JS script right before </body>
const bodyEnd = content.indexOf('</body>');
const newJs = `
<script>
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('new-ba-slider');
  if(!slider) return;
  const afterLayer = document.getElementById('new-ba-after');
  const handle = document.getElementById('new-ba-handle');
  let isDown = false;

  const moveSlider = (e) => {
    if(!isDown) return;
    const rect = slider.getBoundingClientRect();
    let x;
    if(e.type.includes('mouse')) x = e.clientX - rect.left;
    else x = e.touches[0].clientX - rect.left;
    
    // clamp
    x = Math.max(0, Math.min(x, rect.width));
    let percent = (x / rect.width) * 100;
    
    // The afterLayer is the left half. It is revealed up to the handle position.
    // So we crop everything from the right of the handle.
    // clip-path: inset(top right bottom left)
    // We want to crop from the right side by (100 - percent)%.
    afterLayer.style.clipPath = \`inset(0 \${100 - percent}% 0 0)\`;
    handle.style.left = \`\${percent}%\`;
  };

  slider.addEventListener('mousedown', () => isDown = true);
  slider.addEventListener('touchstart', () => isDown = true);
  window.addEventListener('mouseup', () => isDown = false);
  window.addEventListener('touchend', () => isDown = false);
  window.addEventListener('mousemove', moveSlider);
  window.addEventListener('touchmove', moveSlider);
});
</script>
`;
content = content.substring(0, bodyEnd) + newJs + content.substring(bodyEnd);

fs.writeFileSync('index.html', content);
console.log('Successfully added before/after section.');

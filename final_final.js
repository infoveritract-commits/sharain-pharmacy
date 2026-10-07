const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Find HTML bounds
const dualTextHtmlStart = content.indexOf('<!-- DUAL TEXT MARQUEE -->');
const whyShahrinHtmlStart = content.indexOf('<!-- WHY SHAHRIN -->');

if (dualTextHtmlStart !== -1 && whyShahrinHtmlStart !== -1) {
  // Remove the old HTML block (including horiz 3D cards)
  const codeToRemove = content.substring(dualTextHtmlStart, whyShahrinHtmlStart);
  
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
    <div class="marquee-track track-left">
      ${greenSpans.repeat(6)}
    </div>
  </div>
  <div class="thin-marquee marquee-cream">
    <div class="marquee-track track-right">
      ${creamSpans.repeat(6)}
    </div>
  </div>
</section>

`;
  
  content = content.replace(codeToRemove, newHtml);
}

// 2. Insert CSS right before </style> to ensure it is added
const styleEnd = content.indexOf('</style>');
if (styleEnd !== -1) {
  const newCss = `
/* ============================== */
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

`;
  
  content = content.substring(0, styleEnd) + newCss + content.substring(styleEnd);
}

fs.writeFileSync('index.html', content);
console.log('Successfully added thin marquees and removed cards.');

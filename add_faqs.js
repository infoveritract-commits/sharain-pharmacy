const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const emptyFaq = '<div class="faq-list" id="faq-list"></div>';
const replacementHtml = `<div class="faq-list" id="faq-list">
    <div class="faq-item">
      <button onclick="this.parentElement.classList.toggle('open')">
        Are Shahrin products safe for sensitive skin?
        <i class="fa-solid fa-plus"></i>
      </button>
      <div class="faq-answer">
        <p>Absolutely. All of our products are dermatologist-tested and formulated without harsh chemicals, sulfates, or synthetic fragrances, making them perfectly safe and soothing for sensitive skin types.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button onclick="this.parentElement.classList.toggle('open')">
        How long does it take to see results?
        <i class="fa-solid fa-plus"></i>
      </button>
      <div class="faq-answer">
        <p>While some benefits like hydration and glow are immediate, we recommend consistent use for 2 to 4 weeks to see significant improvements in skin texture, tone, and fine lines.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button onclick="this.parentElement.classList.toggle('open')">
        Are your products vegan and cruelty-free?
        <i class="fa-solid fa-plus"></i>
      </button>
      <div class="faq-answer">
        <p>Yes. Shahrin Pharma is proudly 100% cruelty-free and strictly vegan. We never test on animals, and all our botanical extracts are ethically sourced.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button onclick="this.parentElement.classList.toggle('open')">
        Do your products contain synthetic fragrances or parabens?
        <i class="fa-solid fa-plus"></i>
      </button>
      <div class="faq-answer">
        <p>No. We believe in the power of pure, clean ingredients. Our formulas are entirely free of parabens, phthalates, mineral oils, and synthetic fragrances. Any scent you experience comes naturally from botanical extracts and essential oils.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button onclick="this.parentElement.classList.toggle('open')">
        Can I use multiple serums at the same time?
        <i class="fa-solid fa-plus"></i>
      </button>
      <div class="faq-answer">
        <p>Yes, our serums are designed to be layered. We recommend applying them from thinnest to thickest consistency. Wait a few moments between applications to allow each layer to fully absorb into the skin.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button onclick="this.parentElement.classList.toggle('open')">
        What is the shelf life of your products?
        <i class="fa-solid fa-plus"></i>
      </button>
      <div class="faq-answer">
        <p>Because we use natural preservatives, our products typically have a shelf life of 12 months after opening. Please store them in a cool, dry place away from direct sunlight to preserve their maximum potency.</p>
      </div>
    </div>
  </div>`;

if (content.includes(emptyFaq)) {
  content = content.replace(emptyFaq, replacementHtml);
  fs.writeFileSync('index.html', content);
  console.log('Successfully added FAQs.');
} else {
  console.log('Could not find the empty faq-list div.');
}

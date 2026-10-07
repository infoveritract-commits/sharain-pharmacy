const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// The sequence of sections after #results-new currently is:
// <!-- SUSTAINABILITY -->
// <!-- REVIEWS -->
// <!-- JOURNAL -->
// <!-- FAQ -->
// <!-- NEWSLETTER -->
// <!-- FOOTER -->

// I need to replace SUSTAINABILITY, REVIEWS, JOURNAL with GUARANTEES and 2-LINE REVIEWS.
// Wait, I should find exactly where #results-new ends.
const resultsNewEnd = content.indexOf('</section>', content.indexOf('id="results-new"')) + '</section>'.length;
const faqStart = content.indexOf('<!-- FAQ -->');

if (resultsNewEnd !== -1 && faqStart !== -1) {
  const codeToRemove = content.substring(resultsNewEnd, faqStart);
  
  const guaranteesHtml = `

<!-- GUARANTEES -->
<section id="guarantees" aria-label="Our Guarantees">
  <div class="container">
    <div class="section-title" style="text-align: center; margin-bottom: 48px;">
      <h2>Our Promises to You</h2>
    </div>
    <div class="guarantees-grid">
      <div class="guarantee-card">
        <i class="fa-solid fa-truck-fast"></i>
        <h3>Free Delivery</h3>
        <p>Enjoy free nationwide shipping on all orders over ₨ 5,000.</p>
      </div>
      <div class="guarantee-card">
        <i class="fa-solid fa-shield-heart"></i>
        <h3>30-Day Guarantee</h3>
        <p>If you don't love it, return it within 30 days for a full refund.</p>
      </div>
      <div class="guarantee-card">
        <i class="fa-solid fa-leaf"></i>
        <h3>100% Clean</h3>
        <p>No parabens, no sulfates, and absolutely no synthetic fragrances.</p>
      </div>
      <div class="guarantee-card">
        <i class="fa-solid fa-lock"></i>
        <h3>Secure Checkout</h3>
        <p>Your payment information is processed securely with industry standards.</p>
      </div>
    </div>
  </div>
</section>

<!-- TWO LINE REVIEWS -->
<section id="scrolling-reviews" aria-label="Customer Reviews">
  <div class="section-title" style="text-align: center; margin-bottom: 60px;">
    <h2>What Our Community Says</h2>
  </div>
  
  <!-- Row 1 (Left) -->
  <div class="reviews-marquee-wrapper">
    <div class="reviews-track track-scroll-left">
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"The radiance serum completely transformed my skin in just two weeks! I've never felt more confident."</p>
        <div class="reviewer">Sarah M. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"Finally a natural product that actually delivers on its promises. I'm obsessed with the texture."</p>
        <div class="reviewer">Amna K. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"I struggled with redness for years. The barrier repair cream changed my life. Period."</p>
        <div class="reviewer">Fatima R. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"It smells divine and it works! My fine lines have noticeably reduced since I started using Shahrin."</p>
        <div class="reviewer">Zara L. <span>Verified Buyer</span></div>
      </div>
      <!-- Duplicates -->
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"The radiance serum completely transformed my skin in just two weeks! I've never felt more confident."</p>
        <div class="reviewer">Sarah M. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"Finally a natural product that actually delivers on its promises. I'm obsessed with the texture."</p>
        <div class="reviewer">Amna K. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"I struggled with redness for years. The barrier repair cream changed my life. Period."</p>
        <div class="reviewer">Fatima R. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"It smells divine and it works! My fine lines have noticeably reduced since I started using Shahrin."</p>
        <div class="reviewer">Zara L. <span>Verified Buyer</span></div>
      </div>
    </div>
  </div>

  <!-- Row 2 (Right) -->
  <div class="reviews-marquee-wrapper" style="margin-top: 32px;">
    <div class="reviews-track track-scroll-right">
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"Best decision I ever made for my skincare routine. The cleanser is incredibly gentle yet effective."</p>
        <div class="reviewer">Ayesha B. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"I've tried everything for my dry skin. This hydrating mist is the only thing that works all day."</p>
        <div class="reviewer">Hina J. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"Love the ethical sourcing and the glass packaging. Shahrin Pharma truly cares about quality."</p>
        <div class="reviewer">Saba T. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"My skin is glowing! The Vitamin C drops are a staple in my morning routine now."</p>
        <div class="reviewer">Mariam A. <span>Verified Buyer</span></div>
      </div>
      <!-- Duplicates -->
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"Best decision I ever made for my skincare routine. The cleanser is incredibly gentle yet effective."</p>
        <div class="reviewer">Ayesha B. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"I've tried everything for my dry skin. This hydrating mist is the only thing that works all day."</p>
        <div class="reviewer">Hina J. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"Love the ethical sourcing and the glass packaging. Shahrin Pharma truly cares about quality."</p>
        <div class="reviewer">Saba T. <span>Verified Buyer</span></div>
      </div>
      <div class="scrolling-review-card">
        <div class="stars">★★★★★</div>
        <p>"My skin is glowing! The Vitamin C drops are a staple in my morning routine now."</p>
        <div class="reviewer">Mariam A. <span>Verified Buyer</span></div>
      </div>
    </div>
  </div>
</section>

`;

  content = content.replace(codeToRemove, guaranteesHtml);
}

// 3. Update NEWSLETTER to be just a 10% discount section
const newsletterStart = content.indexOf('<!-- NEWSLETTER -->');
const footerStart = content.indexOf('<!-- FOOTER -->');

if (newsletterStart !== -1 && footerStart !== -1) {
  const oldNewsletterHtml = content.substring(newsletterStart, footerStart);
  
  const discountHtml = `<!-- 10% DISCOUNT -->
<section id="discount" aria-label="Exclusive Discount">
  <div class="discount-container">
    <h2>Unlock 10% Off</h2>
    <p>Sign up today and receive 10% off your first purchase of premium Shahrin skincare.</p>
    <div class="newsletter-form">
      <input type="email" placeholder="Enter your email address" aria-label="Email address" id="nl-email">
      <button onclick="document.getElementById('nl-success').style.display='block'">Claim Discount</button>
    </div>
    <div class="newsletter-success" id="nl-success">Thank you! Your 10% code is SHAHRIN10</div>
  </div>
</section>

`;
  
  content = content.replace(oldNewsletterHtml, discountHtml);
}

// 4. Add CSS for Guarantees, Scrolling Reviews, and Discount
const styleEnd = content.indexOf('</style>');
const newCss = `
/* ============================== */
/* GUARANTEES                     */
/* ============================== */
#guarantees {
  padding: 100px 0;
  background: #ffffff;
  border-top: 1px solid var(--line);
}
.guarantees-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 0 48px;
}
@media(max-width: 1024px) {
  .guarantees-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; padding: 0 24px; }
}
@media(max-width: 768px) {
  .guarantees-grid { grid-template-columns: 1fr; }
}
.guarantee-card {
  background: var(--linen);
  padding: 40px 32px;
  border-radius: var(--radius-card);
  text-align: center;
  border: 1px solid rgba(0,0,0,0.03);
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
}
.guarantee-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
}
.guarantee-card i {
  font-size: 32px;
  color: var(--sage);
  margin-bottom: 24px;
}
.guarantee-card h3 {
  font-family: var(--font-serif);
  font-size: 20px;
  color: var(--ink);
  margin-bottom: 12px;
}
.guarantee-card p {
  font-size: 14px;
  color: var(--olive);
  line-height: 1.6;
}

/* ============================== */
/* SCROLLING REVIEWS              */
/* ============================== */
#scrolling-reviews {
  padding: 100px 0;
  background: var(--cream);
  overflow: hidden;
  border-top: 1px solid var(--line);
}
.reviews-marquee-wrapper {
  width: 100%;
  overflow: hidden;
}
.reviews-track {
  display: flex;
  gap: 32px;
  width: max-content;
  padding: 0 16px;
}
.scrolling-review-card {
  width: 420px;
  background: #ffffff;
  padding: 40px;
  border-radius: var(--radius-card);
  border: 1px solid rgba(0,0,0,0.04);
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.scrolling-review-card .stars {
  color: var(--honey);
  font-size: 16px;
  margin-bottom: 16px;
}
.scrolling-review-card p {
  font-family: var(--font-serif);
  font-size: 18px;
  line-height: 1.6;
  color: var(--ink);
  margin-bottom: 24px;
  flex: 1;
}
.scrolling-review-card .reviewer {
  font-size: 14px;
  font-weight: 600;
  color: var(--sage);
  display: flex;
  align-items: center;
  gap: 8px;
}
.scrolling-review-card .reviewer span {
  font-size: 11px;
  font-weight: 500;
  padding: 4px 10px;
  background: var(--sand);
  border-radius: 20px;
  color: var(--olive);
}

/* ============================== */
/* DISCOUNT SECTION               */
/* ============================== */
#discount {
  padding: 100px 48px;
  background: var(--olive);
  color: var(--cream);
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.1);
}
@media(max-width: 768px) { #discount { padding: 72px 24px; } }
.discount-container {
  max-width: 600px;
  margin: 0 auto;
}
.discount-container h2 {
  font-family: var(--font-serif);
  font-size: clamp(32px, 5vw, 48px);
  color: var(--cream);
  margin-bottom: 16px;
}
.discount-container p {
  opacity: 0.8;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 1.6;
}

`;
content = content.substring(0, styleEnd) + newCss + content.substring(styleEnd);

fs.writeFileSync('index.html', content);
console.log('Successfully updated guarantees, 2-line reviews, and discount section.');

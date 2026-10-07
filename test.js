
// ==============================
// 1. DATA (Mock Backend)
// ==============================
const PRODUCTS = [
  { id: 'p1', name: 'Aloe & Shea Barrier Cream', type: 'cream', tags: ['Hydration', 'Sensitive skin'], price: 3500, size: '50ml', rating: 4.8, reviewCount: 124, badges: ['Best seller', 'Organic'], shortBenefit: 'Deep hydration for sensitive skin', description: 'A rich, soothing cream that repairs the skin barrier while locking in moisture.', keyIngredients: ['i1', 'i2'], howToUse: 'Apply a pea-sized amount to clean skin morning and night.', fullIngredients: 'Aqua, Aloe Barbadensis Leaf Juice, Butyrospermum Parkii (Shea) Butter, Glycerin, Cetearyl Alcohol.', image: 'products/p1.png', subscribable: true },
  { id: 'p2', name: 'Rosehip Night Restore Cream', type: 'cream', tags: ['Anti-aging', 'Glow'], price: 4200, size: '50ml', rating: 4.9, reviewCount: 89, badges: ['New', 'Vegan'], shortBenefit: 'Overnight renewal and glow', description: 'Cold-pressed rosehip oil works overnight to smooth fine lines and restore radiance.', keyIngredients: ['i3'], howToUse: 'Massage gently into face and neck before sleep.', fullIngredients: 'Aqua, Rosa Canina (Rosehip) Seed Oil, Cetearyl Olivate, Sorbitan Olivate.', image: 'products/p2.png', subscribable: true },
  { id: 'p3', name: 'Calendula Soothe Cream', type: 'cream', tags: ['Sensitive skin', 'Acne-prone skin'], price: 3200, size: '50ml', rating: 4.7, reviewCount: 56, badges: [], shortBenefit: 'Calms redness and irritation', description: 'Gentle calendula extract helps calm inflamed, angry skin without clogging pores.', keyIngredients: ['i5'], howToUse: 'Apply as needed to irritated areas.', fullIngredients: 'Aqua, Calendula Officinalis Extract, Helianthus Annuus Seed Oil.', image: 'products/p3.png', subscribable: true },
  { id: 'p4', name: 'Turmeric Glow Day Cream', type: 'cream', tags: ['Glow', 'Anti-aging'], price: 3800, size: '50ml', rating: 4.6, reviewCount: 210, badges: ['Best seller'], shortBenefit: 'Brightens and protects', description: 'Antioxidant-rich turmeric brightens the complexion for a natural daytime glow.', keyIngredients: ['i4'], howToUse: 'Apply every morning after serum.', fullIngredients: 'Aqua, Curcuma Longa (Turmeric) Root Extract, Niacinamide, Glycerin.', image: 'products/p4.png', subscribable: true },
  { id: 'p5', name: 'Vitamin C & Rosehip Glow Serum', type: 'serum', tags: ['Glow', 'Anti-aging'], price: 4500, size: '30ml', rating: 4.9, reviewCount: 340, badges: ['Best seller'], shortBenefit: 'Fades dark spots and brightens', description: 'Potent, stable Vitamin C combined with rosehip for maximum brightening power.', keyIngredients: ['i3'], howToUse: 'Apply 3-4 drops to clean, dry skin.', fullIngredients: 'Aqua, Ascorbic Acid, Rosa Canina Seed Oil, Propanediol.', image: 'products/p5.png', subscribable: true },
  { id: 'p6', name: 'Hyaluronic & Aloe Hydration Serum', type: 'serum', tags: ['Hydration'], price: 3900, size: '30ml', rating: 4.8, reviewCount: 156, badges: ['Organic'], shortBenefit: 'Plumps and intensely hydrates', description: 'Plant-derived hyaluronic acid draws moisture deep into the skin.', keyIngredients: ['i1', 'i7'], howToUse: 'Apply to damp skin before creams.', fullIngredients: 'Aqua, Sodium Hyaluronate, Aloe Barbadensis Leaf Juice, Panthenol.', image: 'products/p6.png', subscribable: true },
  { id: 'p7', name: 'Bakuchiol Renewal Serum', type: 'serum', tags: ['Anti-aging', 'Sensitive skin'], price: 4800, size: '30ml', rating: 4.7, reviewCount: 92, badges: ['New', 'Vegan'], shortBenefit: 'Natural retinol alternative', description: 'Smooths fine lines and refines texture without the irritation of traditional retinol.', keyIngredients: ['i8'], howToUse: 'Apply at night under moisturiser.', fullIngredients: 'Aqua, Squalane, Bakuchiol, Glycerin.', image: 'products/p7.png', subscribable: true },
  { id: 'p8', name: 'Niacinamide & Green Tea Clarity Serum', type: 'serum', tags: ['Acne-prone skin'], price: 3600, size: '30ml', rating: 4.6, reviewCount: 112, badges: [], shortBenefit: 'Balances oil and clears pores', description: 'Regulates sebum and soothes breakouts with antioxidant-rich green tea.', keyIngredients: ['i6'], howToUse: 'Apply to T-zone or full face morning and night.', fullIngredients: 'Aqua, Niacinamide, Camellia Sinensis (Green Tea) Extract.', image: 'products/p8.png', subscribable: true },
  { id: 'p9', name: 'Ashwagandha Calm Capsules', type: 'supplement', tags: ['Sleep and calm', 'Energy'], price: 2800, size: '60 caps', rating: 4.9, reviewCount: 420, badges: ['Best seller', 'Vegan'], shortBenefit: 'Reduces stress and cortisol', description: 'An adaptogenic herb that helps the body manage stress and promotes restful sleep.', keyIngredients: ['i9'], howToUse: 'Take 2 capsules daily with water.', fullIngredients: 'Organic Ashwagandha Root Extract (KSM-66), Vegan Capsule.', image: 'products/p9.png', subscribable: true },
  { id: 'p10', name: 'Turmeric & Black Pepper Capsules', type: 'supplement', tags: ['Immunity', 'Digestion'], price: 2500, size: '60 caps', rating: 4.7, reviewCount: 88, badges: ['Organic'], shortBenefit: 'Anti-inflammatory support', description: 'High-potency curcumin combined with black pepper for maximum absorption.', keyIngredients: ['i4'], howToUse: 'Take 1 capsule daily with a meal.', fullIngredients: 'Organic Turmeric Root Powder, Black Pepper Extract.', image: 'products/p10.png', subscribable: true },
  { id: 'p11', name: 'Marine Collagen & Vitamin C Sachets', type: 'supplement', tags: ['Hair and nails', 'Anti-aging'], price: 5500, size: '30 sachets', rating: 4.8, reviewCount: 315, badges: [], shortBenefit: 'Supports skin elasticity', description: 'Sustainably sourced marine collagen for glowing skin, strong hair and nails.', keyIngredients: [], howToUse: 'Mix 1 sachet into water or smoothie daily.', fullIngredients: 'Hydrolyzed Marine Collagen Peptides, Ascorbic Acid.', image: 'products/p11.png', subscribable: true },
  { id: 'p12', name: 'Organic Moringa Energy Capsules', type: 'supplement', tags: ['Energy', 'Immunity'], price: 2200, size: '60 caps', rating: 4.5, reviewCount: 45, badges: ['Vegan'], shortBenefit: 'Nutrient-dense daily boost', description: 'Packed with vitamins and minerals to support natural, sustained energy.', keyIngredients: ['i10'], howToUse: 'Take 2 capsules in the morning.', fullIngredients: 'Organic Moringa Oleifera Leaf Powder, Vegan Capsule.', image: 'products/p12.png', subscribable: true }
];

const INGREDIENTS = [
  { id: 'i1', name: 'Aloe Vera', botanicalKey: 'aloe', origin: 'Mexico', action: 'Intensely hydrates and soothes redness. Rich in vitamins and antioxidants.', products: ['p1', 'p6'], safety: 'Generally safe for all skin types.' },
  { id: 'i2', name: 'Shea Butter', botanicalKey: 'shea', origin: 'Ghana', action: 'Deeply nourishes and locks in moisture by forming a protective barrier.', products: ['p1'], safety: 'Contains tree nut oils (avoid if allergic).' },
  { id: 'i3', name: 'Rosehip Oil', botanicalKey: 'rosehip', origin: 'Chile', action: 'Packed with natural Vitamin A to promote cell turnover and glow.', products: ['p2', 'p5'], safety: 'Safe for daily use.' },
  { id: 'i4', name: 'Turmeric', botanicalKey: 'turmeric', origin: 'India', action: 'A powerful anti-inflammatory that brightens skin and supports immunity.', products: ['p4', 'p10'], safety: 'Can temporarily stain skin if used in high DIY concentrations (our extracts do not).' },
  { id: 'i5', name: 'Calendula', botanicalKey: 'calendula', origin: 'Egypt', action: 'Calms irritated skin and supports healing of minor blemishes.', products: ['p3'], safety: 'Avoid if allergic to ragweed or asteraceae plants.' },
  { id: 'i6', name: 'Green Tea', botanicalKey: 'greentea', origin: 'Japan', action: 'Balances sebum production and provides antioxidant protection.', products: ['p8'], safety: 'Very gentle.' },
  { id: 'i7', name: 'Hyaluronic Acid', botanicalKey: 'hyaluronic', origin: 'Plant-derived', action: 'Acts like a sponge, holding 1000x its weight in water for plump skin.', products: ['p6'], safety: 'Safe for all skin types.' },
  { id: 'i8', name: 'Bakuchiol', botanicalKey: 'bakuchiol', origin: 'India', action: 'A natural, plant-derived alternative to retinol that smooths fine lines without peeling.', products: ['p7'], safety: 'Safe during pregnancy (unlike retinol).' },
  { id: 'i9', name: 'Ashwagandha', botanicalKey: 'ashwagandha', origin: 'India', action: 'An adaptogen that helps the body resist physical and mental stress.', products: ['p9'], safety: 'Consult doctor if pregnant or on thyroid medication.' },
  { id: 'i10', name: 'Moringa', botanicalKey: 'moringa', origin: 'Sri Lanka', action: 'A nutrient powerhouse providing essential vitamins, minerals and amino acids.', products: ['p12'], safety: 'Safe for daily consumption.' }
];

const CONCERNS = ['Glow', 'Hydration', 'Anti-aging', 'Acne-prone skin', 'Sensitive skin', 'Hair and nails', 'Immunity', 'Digestion', 'Sleep and calm', 'Energy'];

const I18N = {
  en: {
    navShop: 'Shop', navConcerns: 'Concerns', navAI: 'AI Care', navResults: 'Results', navStory: 'Our Story', navJournal: 'Journal',
    announce1: 'Free delivery over ₨5,000 · 100% Natural · Pharmacist Approved',
    announce2: 'All ingredients sourced from certified organic farms',
    announce3: 'Subscribe and save 15% on every order',
    heroLabel: 'NATURAL PHARMACY', heroH1: 'Nature, trusted<br>by science.', heroSub: 'Plant-powered creams, serums and supplements.<br>Made clean. Made to work.',
    heroBtn1: 'Shop the collection', heroBtn2: 'Find your routine',
    concernLabel: 'What\'s your focus?', concernH2: 'Shop by concern',
    shopLabel: 'The Collection', shopH2: 'Our products',
    aboutLabel: 'Our Story', aboutH2: 'Rooted in nature.<br>Verified by pharmacists.',
    timelineH3: 'From soil to skin', nlBtn: 'Subscribe'
  },
  ur: {
    navShop: 'خریداری کریں', navConcerns: 'مسائل', navAI: 'اے آئی کیئر', navResults: 'نتائج', navStory: 'ہماری کہانی', navJournal: 'رسالہ',
    announce1: '5,000 روپے سے زائد پر مفت ڈلیوری · 100% قدرتی · فارماسسٹ سے منظور شدہ',
    announce2: 'تمام اجزاء سرٹیفائیڈ آرگینک فارمز سے حاصل کیے گئے ہیں',
    announce3: 'سبسکرائب کریں اور ہر آرڈر پر 15% بچائیں',
    heroLabel: 'نیچرل فارمیسی', heroH1: 'فطرت، سائنس کے<br>اعتماد کے ساتھ۔', heroSub: 'پودوں سے تیار کردہ کریمیں، سیرم اور سپلیمنٹس۔<br>خالص اور موثر۔',
    heroBtn1: 'کلیکشن دیکھیں', heroBtn2: 'اپنا روٹین تلاش کریں',
    concernLabel: 'آپ کی توجہ کس پر ہے؟', concernH2: 'مسائل کے لحاظ سے خریداری کریں',
    shopLabel: 'کلیکشن', shopH2: 'ہماری مصنوعات',
    aboutLabel: 'ہماری کہانی', aboutH2: 'فطرت سے جڑی۔<br>فارماسسٹ سے تصدیق شدہ۔',
    timelineH3: 'مٹی سے جلد تک', nlBtn: 'سبسکرائب کریں'
  }
};

const KNOWLEDGE = [
  { intents: ['dry', 'hydration', 'moisture', 'flaky'], text: 'For dry or dehydrated skin, we need to focus on locking in moisture and repairing the barrier. I recommend starting with hyaluronic acid to draw moisture in, followed by a rich protective cream.', products: ['p6', 'p1'] },
  { intents: ['glow', 'brighten', 'dull'], text: 'To achieve a natural glow and brighten dull skin, Vitamin C and Rosehip are your best friends. They promote cell turnover and fade pigmentation over time.', products: ['p5', 'p2'] },
  { intents: ['aging', 'wrinkles', 'fine lines', 'retinol'], text: 'For targeting fine lines gracefully, we use Bakuchiol — a plant-based retinol alternative that smooths texture without the harsh peeling. Combine it with our Rosehip cream at night.', products: ['p7', 'p2'] },
  { intents: ['acne', 'breakouts', 'oily', 'pores'], text: 'For breakout-prone skin, the goal is balancing oil production without stripping the skin. Niacinamide and Green Tea help regulate sebum, while Calendula soothes active irritation.', products: ['p8', 'p3'] },
  { intents: ['sensitive', 'redness', 'irritated'], text: 'Sensitive skin needs minimal, soothing ingredients. Calendula calms inflammation, and Aloe with Shea Butter helps rebuild a compromised skin barrier gently.', products: ['p3', 'p1'] },
  { intents: ['sleep', 'insomnia', 'rest'], text: 'If you\'re struggling with sleep, managing your body\'s stress response is key. Ashwagandha is an adaptogen proven to help lower cortisol levels and promote deep, restful sleep.', products: ['p9'] },
  { intents: ['energy', 'fatigue', 'tired'], text: 'For sustained energy without the caffeine crash, organic Moringa is fantastic. It\'s packed with essential vitamins and minerals to fuel your day naturally.', products: ['p12'] },
  { intents: ['immunity', 'sick', 'health'], text: 'To support your immune system and reduce inflammation, our high-potency Turmeric & Black Pepper capsules are ideal.', products: ['p10'] },
  { intents: ['hair', 'nails', 'collagen'], text: 'For stronger hair, nails, and skin elasticity, Marine Collagen is highly effective. Ours is sustainably sourced and blended with Vitamin C for optimal absorption.', products: ['p11'] },
  { intents: ['pregnant', 'breastfeeding', 'medication', 'disease', 'condition'], text: 'Since you mentioned a specific medical condition or pregnancy, I must advise you to speak directly with one of our pharmacists or your doctor before starting any new supplements or active skincare.', products: [], safety: true }
];

// ==============================
// 2. STATE & UTILS
// ==============================
let lang = localStorage.getItem('shahrin_lang') || 'en';
let cart = JSON.parse(localStorage.getItem('shahrin_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('shahrin_wishlist')) || [];
let lenis;

const formatMoney = (amount) => '₨' + amount.toLocaleString('en-PK');
const getProduct = (id) => PRODUCTS.find(p => p.id === id);
const getFallbackImg = (name, type) => {
  const icon = type === 'cream' ? '<path d="M20 40h60v20c0 10-10 20-30 20s-30-10-30-20v-20z"/><path d="M15 40h70v-10c0-5-5-10-10-10h-50c-5 0-10 5-10 10v10z"/>' :
               type === 'serum' ? '<path d="M40 20c0 0-20 20-20 40a20 20 0 0 0 40 0c0-20-20-40-20-40z"/><path d="M35 15h10v10h-10z"/><path d="M30 10h20v5h-20z"/>' :
               '<rect x="30" y="20" width="40" height="60" rx="10"/><path d="M35 40h30"/><path d="M35 50h30"/>';
  return `<div class="card-img-fallback"><svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round">${icon}</svg><span>${name}</span></div>`;
};
const toast = (msg) => {
  const t = document.createElement('div'); t.className = 'toast'; t.innerHTML = msg;
  document.getElementById('toast-container').appendChild(t);
  setTimeout(() => t.remove(), 3000);
};

// ==============================
// 3. CORE INIT & ANIMATION
// ==============================
function initLenis() {
  lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0, 0);
}

const heroFrames = [];

function initPreloader() {
  const line = document.getElementById('load-fill');
  const preloader = document.getElementById('preloader');
  preloader.classList.add('active');

  const video = document.createElement('video');
  video.muted = true;
  video.playsInline = true;
  video.src = 'Sharain_pharmacy_product_film_1080p_20261007214658.mp4';
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  
  let fallbackTimer = setTimeout(() => {
    preloader.classList.add('done');
    setupAnimations();
  }, 45000); // Increased to 45s to allow for longer video extraction

  video.addEventListener('loadedmetadata', () => {
    canvas.width = video.videoWidth || 1920;
    canvas.height = video.videoHeight || 1080;
    
    // We can use 24fps or scale it slightly if it's super long.
    // To ensure the whole video is captured without running out of RAM, we'll stick to 20fps which is still very smooth for scroll scrubbing.
    const fps = 20; 
    const totalFrames = Math.floor(video.duration * fps);
    let currentFrame = 0;
    
    const extractNext = () => {
      if (currentFrame >= totalFrames) { 
        clearTimeout(fallbackTimer);
        preloader.classList.add('done');
        setupAnimations();
        return;
      }
      video.currentTime = currentFrame / fps;
    };
    
    video.addEventListener('seeked', () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const img = new Image();
      img.src = canvas.toDataURL('image/jpeg', 0.5); // good compression
      heroFrames.push(img);
      currentFrame++;
      line.style.width = ((currentFrame / totalFrames) * 100) + '%';
      extractNext();
    });
    
    extractNext();
  });
  
  video.addEventListener('error', () => {
    clearTimeout(fallbackTimer);
    preloader.classList.add('done');
    setupAnimations();
  });
}

function setupAnimations() {
  gsap.set('.hero-label, .hero-h1, .hero-sub, .hero-cta', { opacity: 0, y: 40 });
  gsap.to('.scroll-cue', { opacity: 1, duration: 1, delay: 1.5 });

  const canvas = document.getElementById('hero-canvas');
  if(canvas && heroFrames.length > 0) {
    const ctx = canvas.getContext('2d');
    canvas.width = heroFrames[0].width;
    canvas.height = heroFrames[0].height;
    ctx.drawImage(heroFrames[0], 0, 0);

    let frameProxy = { frame: 0 };
    
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: self => {
          const el = document.querySelector('.hero-progress span');
          if(el) el.style.height = (self.progress * 100) + '%';
          
          if(self.progress > 0.05) gsap.to('.scroll-cue', { opacity: 0, duration: 0.3, overwrite: true });
          else gsap.to('.scroll-cue', { opacity: 1, duration: 0.3, overwrite: true });
        }
      }
    });

    heroTl.to(frameProxy, {
      frame: heroFrames.length - 1,
      snap: 'frame',
      ease: 'none',
      duration: 1,
      onUpdate: () => {
        ctx.drawImage(heroFrames[frameProxy.frame], 0, 0);
      }
    }, 0);

    heroTl.to('.hero-label', { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' }, 0.75)
          .to('.hero-h1', { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.77)
          .to('.hero-sub', { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' }, 0.80)
          .to('.hero-cta', { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' }, 0.83);
  }

  // Intro text word-by-word reveal
  const introText = "Shahrin Pharma was born from a simple belief: your skin and body deserve the purest care nature can offer. We don't chase trends. We study traditions and refine them with modern pharmaceutical science. The result is wellness that works.";
  const introEl = document.getElementById('intro-text');
  introEl.innerHTML = introText.split(' ').map(w => `<span class="word">${w}</span>`).join(' ');
  
  gsap.to('.word', {
    scrollTrigger: { trigger: '#intro', start: 'top 70%', end: 'bottom 40%', scrub: 1 },
    color: 'var(--ink)', stagger: 0.1
  });

  // Header hide/show on scroll
  let lastY = 0;
  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: self => {
      const h = document.getElementById('header');
      if(self.direction === 1 && self.scroll() > 200) h.classList.add('hidden');
      else h.classList.remove('hidden');
      if(self.scroll() > 80) h.classList.add('scrolled');
      else h.classList.remove('scrolled');
    }
  });
}

// ==============================
// 4. UI RENDERING
// ==============================
function renderTrustMarquee() {
  const track = document.getElementById('marquee-track');
  const items = ['100% Natural Ingredients', 'Cruelty-Free', 'No Parabens', 'No Synthetic Fragrance', 'Third-Party Tested', 'Pharmacist Approved', 'Sustainably Sourced'];
  const html = items.map(i => `<div class="marquee-item"><i class="fa-solid fa-check"></i> ${i}</div>`).join('');
  track.innerHTML = html + html + html; // triplicate for smooth scroll
}

function renderConcerns() {
  const track = document.getElementById('concern-track');
  track.innerHTML = CONCERNS.map((c, i) => {
    const count = PRODUCTS.filter(p => p.tags.map(t=>t.toLowerCase()).includes(c.toLowerCase())).length;
    // We use a generic fallback visual for concerns
    return `
      <div class="concern-card" onclick="filterShopByConcern('${c}')">
        <div class="concern-img" style="background:var(--sand);display:flex;align-items:center;justify-content:center;color:var(--sage);opacity:0.6">
          <i class="fa-solid fa-leaf" style="font-size:48px"></i>
        </div>
        <div class="concern-info">
          <div class="concern-name">${c}</div>
          <div class="concern-count">${count} products</div>
        </div>
        <div class="concern-arrow"><i class="fa-solid fa-arrow-right"></i></div>
      </div>
    `;
  }).join('');
}

function renderShop() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" onclick="openProductQuickView('${p.id}')">
      <div class="card-badges">
        ${p.badges.map(b => `<span class="badge badge-${b.toLowerCase().replace(' ','')}">${b}</span>`).join('')}
      </div>
      <button class="wishlist-btn ${wishlist.includes(p.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${p.id}')">
        <i class="${wishlist.includes(p.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.name}" class="card-img" onerror="this.outerHTML='${getFallbackImg(p.name, p.type)}'">
      </div>
      <div class="card-body">
        <div class="card-rating">
          <div class="stars">★★★★★</div>
          <span class="review-count">(${p.reviewCount})</span>
        </div>
        <div class="card-name">${p.name}</div>
        <div class="card-benefit">${p.shortBenefit}</div>
        <div class="card-price">${formatMoney(p.price)}</div>
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${p.id}', 1)">Add to cart</button>
      </div>
    </div>
  `).join('');
}

function filterShopByConcern(concern) {
  document.getElementById('shop').scrollIntoView({behavior: 'smooth'});
  // Simple filtering mock
  toast(`Filtering for ${concern} (Mock)`);
}

function toggleWishlist(id) {
  if(wishlist.includes(id)) wishlist = wishlist.filter(x => x !== id);
  else wishlist.push(id);
  localStorage.setItem('shahrin_wishlist', JSON.stringify(wishlist));
  renderShop();
  updateHeaderCounts();
  toast(wishlist.includes(id) ? 'Added to wishlist' : 'Removed from wishlist');
}

// ==============================
// 5. CART LOGIC
// ==============================
function updateHeaderCounts() {
  const cBadge = document.getElementById('cart-count');
  const wBadge = document.getElementById('wishlist-count');
  const cCount = cart.reduce((a, b) => a + b.qty, 0);
  
  if(cCount > 0) { cBadge.style.display = 'flex'; cBadge.textContent = cCount; } else cBadge.style.display = 'none';
  if(wishlist.length > 0) { wBadge.style.display = 'flex'; wBadge.textContent = wishlist.length; } else wBadge.style.display = 'none';
}

function addToCart(id, qty) {
  const item = cart.find(x => x.id === id);
  if(item) item.qty += qty;
  else cart.push({ id, qty });
  localStorage.setItem('shahrin_cart', JSON.stringify(cart));
  updateHeaderCounts();
  renderCart();
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
}

function updateCartQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if(item) {
    item.qty += delta;
    if(item.qty <= 0) cart = cart.filter(x => x.id !== id);
    localStorage.setItem('shahrin_cart', JSON.stringify(cart));
    updateHeaderCounts();
    renderCart();
  }
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');
  if(cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  let total = 0;
  container.innerHTML = cart.map(item => {
    const p = getProduct(item.id);
    total += p.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" onerror="this.outerHTML='<div style=\'width:72px;height:72px;border-radius:12px;background:var(--sand);display:flex;align-items:center;justify-content:center;color:var(--sage)\'>Img</div>'">
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-size">${p.size}</div>
          <div class="cart-item-actions">
            <div class="qty-stepper">
              <button onclick="updateCartQty('${item.id}', -1)">-</button>
              <span>${item.qty}</span>
              <button onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item-price">${formatMoney(p.price * item.qty)}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('cart-subtotal').textContent = formatMoney(total);
  document.getElementById('cart-total').textContent = formatMoney(total + 200); // flat shipping
  
  // Free shipping bar (threshold 5000)
  const rem = 5000 - total;
  if(rem > 0) {
    document.getElementById('shipping-text').innerHTML = `Add ₨<span>${rem.toLocaleString()}</span> more for free delivery`;
    document.getElementById('shipping-fill').style.width = (total / 5000 * 100) + '%';
    document.getElementById('cart-shipping').textContent = '₨200';
  } else {
    document.getElementById('shipping-text').textContent = 'You have unlocked free delivery!';
    document.getElementById('shipping-fill').style.width = '100%';
    document.getElementById('cart-shipping').textContent = 'Free';
    document.getElementById('cart-total').textContent = formatMoney(total);
  }
}

// ==============================
// 6. AI CARE & CHAT
// ==============================
function initChat() {
  document.getElementById('ai-float').addEventListener('click', () => {
    document.getElementById('chat-panel').classList.add('open');
    if(document.getElementById('chat-messages').innerHTML === '') {
      appendChatMessage('assistant', 'Hi, I\'m your Care Assistant. Tell me about your skin or wellness goals and I\'ll build a gentle, natural routine.');
      appendChatChips(['Dry skin', 'Glow', 'Better sleep', 'Build my routine']);
    }
  });
  document.getElementById('chat-close').addEventListener('click', () => {
    document.getElementById('chat-panel').classList.remove('open');
  });

  const input = document.getElementById('chat-input');
  const send = document.getElementById('chat-send');
  
  const handleSend = () => {
    const val = input.value.trim();
    if(!val) return;
    input.value = '';
    appendChatMessage('user', val);
    processChatMatch(val);
  };
  
  send.addEventListener('click', handleSend);
  input.addEventListener('keypress', e => { if(e.key === 'Enter') handleSend(); });
  
  // Tooltip
  setTimeout(() => {
    const t = document.getElementById('ai-tooltip');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 5000);
  }, 8000);
}

function appendChatMessage(sender, text) {
  const container = document.getElementById('chat-messages');
  // Remove existing chips
  const existingChips = container.querySelector('.chat-chips');
  if(existingChips) existingChips.remove();

  const msg = document.createElement('div');
  msg.className = `chat-msg ${sender}`;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;

  if(sender === 'assistant') {
    // Stream text
    let i = 0;
    const words = text.split(' ');
    const iv = setInterval(() => {
      msg.textContent += words[i] + ' ';
      i++;
      container.scrollTop = container.scrollHeight;
      if(i >= words.length) clearInterval(iv);
    }, 40);
  } else {
    msg.textContent = text;
  }
}

function appendChatChips(chips) {
  const container = document.getElementById('chat-messages');
  const wrap = document.createElement('div');
  wrap.className = 'chat-chips';
  chips.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'chat-chip';
    btn.textContent = c;
    btn.onclick = () => {
      appendChatMessage('user', c);
      processChatMatch(c);
    };
    wrap.appendChild(btn);
  });
  setTimeout(() => {
    container.appendChild(wrap);
    container.scrollTop = container.scrollHeight;
  }, 500); // wait for typing
}

function appendChatProducts(productIds) {
  const container = document.getElementById('chat-messages');
  setTimeout(() => {
    productIds.forEach(id => {
      const p = getProduct(id);
      const card = document.createElement('div');
      card.className = 'chat-product-card';
      card.innerHTML = `
        <img src="${p.image}" onerror="this.outerHTML='<div style=\'width:52px;height:52px;border-radius:10px;background:var(--sand);display:flex;align-items:center;justify-content:center;color:var(--sage)\'>Img</div>'">
        <div class="cp-info">
          <div class="cp-name">${p.name}</div>
          <div class="cp-price">${formatMoney(p.price)}</div>
        </div>
        <button class="cp-add" onclick="addToCart('${p.id}', 1)">Add</button>
      `;
      container.appendChild(card);
    });
    container.scrollTop = container.scrollHeight;
  }, 800);
}

function processChatMatch(text) {
  const lower = text.toLowerCase();
  if(lower.includes('build my routine') || lower.includes('routine')) {
    appendChatMessage('assistant', 'I can help with that! Let\'s do a quick consultation.');
    setTimeout(() => openQuiz(), 1500);
    return;
  }

  let match = KNOWLEDGE.find(k => k.intents.some(i => lower.includes(i)));
  
  setTimeout(() => {
    if(match) {
      appendChatMessage('assistant', match.text);
      if(match.products && match.products.length > 0) appendChatProducts(match.products);
      if(match.safety) appendChatChips(['Talk to a pharmacist']);
    } else {
      appendChatMessage('assistant', "I'm not fully sure about that one. Would you like to chat with one of our pharmacists?");
      appendChatChips(['Talk to a pharmacist', 'Ask something else']);
    }
  }, 600); // simulate thinking
}

// ==============================
// 7. QUIZ OVERLAY
// ==============================
function openQuiz() {
  document.getElementById('quiz-overlay').classList.add('open');
  document.getElementById('chat-panel').classList.remove('open');
  renderQuizStep(0);
}

const QUIZ_QUESTIONS = [
  { q: "What is your primary skin type?", options: ["Dry & Flaky", "Oily & Shine-prone", "Combination", "Normal", "Sensitive & Reactive"] },
  { q: "What is your main skin concern?", options: ["Fine lines & Aging", "Dullness & Glow", "Acne & Blemishes", "Redness & Irritation"] },
  { q: "Are you interested in wellness supplements?", options: ["Yes, holistic approach", "Just skincare for now"] }
];
let quizAnswers = [];

function renderQuizStep(step) {
  const body = document.getElementById('quiz-body');
  const bar = document.getElementById('quiz-progress-bar');
  const nav = document.getElementById('quiz-nav');
  
  if(step >= QUIZ_QUESTIONS.length) {
    showQuizResult();
    return;
  }
  
  bar.style.width = ((step+1) / QUIZ_QUESTIONS.length * 100) + '%';
  const q = QUIZ_QUESTIONS[step];
  
  body.innerHTML = `
    <div class="quiz-question">
      <h2>${q.q}</h2>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<div class="quiz-option" onclick="selectQuizOption(${step}, ${i})">${opt}</div>`).join('')}
      </div>
    </div>
  `;
  nav.innerHTML = '';
}

function selectQuizOption(step, optIndex) {
  quizAnswers[step] = optIndex;
  setTimeout(() => renderQuizStep(step + 1), 300);
}

function showQuizResult() {
  const body = document.getElementById('quiz-body');
  document.getElementById('quiz-progress-bar').style.width = '100%';
  
  // Mock logic: dry -> hydration, oily -> clarity
  let pIds = ['p1', 'p5']; // defaults
  if(quizAnswers[0] === 0) pIds = ['p6', 'p1']; // dry
  if(quizAnswers[0] === 1) pIds = ['p8', 'p3']; // oily
  if(quizAnswers[2] === 0) pIds.push('p10'); // supplements
  
  const routineHtml = pIds.map(id => {
    const p = getProduct(id);
    return `
      <div class="routine-item">
        <img src="${p.image}" onerror="this.outerHTML='<div style=\'width:56px;height:56px;border-radius:12px;background:var(--sand);display:flex;align-items:center;justify-content:center;color:var(--sage)\'>Img</div>'">
        <div style="flex:1">
          <div class="ri-name">${p.name}</div>
          <div class="ri-reason">${p.shortBenefit}</div>
          <div class="ri-price">${formatMoney(p.price)}</div>
        </div>
      </div>
    `;
  }).join('');

  body.innerHTML = `
    <div class="quiz-result">
      <div class="match-ring">
        <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="var(--sand)" stroke-width="6"/><circle cx="50" cy="50" r="45" fill="none" stroke="var(--sage)" stroke-width="6" stroke-dasharray="283" stroke-dashoffset="28" style="transition:stroke-dashoffset 1s ease"/></svg>
        <div class="match-score">94%</div>
      </div>
      <h2>Your personalised routine</h2>
      <p style="color:var(--olive);margin-bottom:32px">Based on your answers, this is our pharmacist-recommended natural approach.</p>
      <div class="routine-timeline">${routineHtml}</div>
      <button class="btn btn-sage" onclick="addAllRoutineToCart(['${pIds.join("','")}'])" style="margin-top:24px;width:100%;max-width:480px">Add full routine to cart</button>
    </div>
  `;
}

function addAllRoutineToCart(ids) {
  ids.forEach(id => addToCart(id, 1));
  document.getElementById('quiz-overlay').classList.remove('open');
}

// ==============================
// 8. MISC INIT
// ==============================
function initI18n() {
  const btn = document.getElementById('lang-btn');
  const applyLang = () => {
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    btn.textContent = lang === 'ur' ? 'اردو | EN' : 'EN | اردو';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(I18N[lang] && I18N[lang][key]) el.innerHTML = I18N[lang][key];
    });
  };
  applyLang();
  btn.addEventListener('click', () => {
    lang = lang === 'en' ? 'ur' : 'en';
    localStorage.setItem('shahrin_lang', lang);
    applyLang();
  });
}

function initEventHandlers() {
  document.getElementById('cart-btn').addEventListener('click', () => {
    document.getElementById('cart-overlay').classList.add('open');
    document.getElementById('cart-drawer').classList.add('open');
  });
  document.getElementById('cart-close-btn').addEventListener('click', () => {
    document.getElementById('cart-overlay').classList.remove('open');
    document.getElementById('cart-drawer').classList.remove('open');
  });
  document.getElementById('cart-overlay').addEventListener('click', () => {
    document.getElementById('cart-overlay').classList.remove('open');
    document.getElementById('cart-drawer').classList.remove('open');
  });
  
  document.getElementById('quiz-trigger').addEventListener('click', openQuiz);
  document.getElementById('quiz-close-btn').addEventListener('click', () => {
    document.getElementById('quiz-overlay').classList.remove('open');
  });

  // Newsletter
  document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    setTimeout(() => {
      e.target.style.display = 'none';
      document.getElementById('nl-success').style.display = 'block';
    }, 1500);
  });

  // Back to top
  const btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 500) btt.classList.add('visible');
    else btt.classList.remove('visible');
  });
  btt.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}

function renderAICards() {
  const grid = document.getElementById('ai-grid');
  const cards = [
    { icon: 'fa-robot', title: 'AI Consultant', desc: 'Chat with our pharmacist-trained AI for instant advice.' },
    { icon: 'fa-wand-magic-sparkles', title: 'Routine Quiz', desc: 'Find your perfect products in 2 minutes.' },
    { icon: 'fa-camera-retro', title: 'Skin Scan', desc: 'Upload a selfie for an instant cosmetic estimate.' },
    { icon: 'fa-leaf', title: 'Ingredient Explorer', desc: 'Decode complex labels and learn what goes into our jars.' }
  ];
  grid.innerHTML = cards.map(c => `
    <div class="ai-card" onclick="toast('Opening ${c.title}...')">
      <div class="sparkle"><i class="fa-solid fa-sparkles"></i></div>
      <div class="ai-icon"><i class="fa-solid ${c.icon}"></i></div>
      <h4>${c.title}</h4>
      <p>${c.desc}</p>
    </div>
  `).join('');
}

function renderBeforeAfter() {
  const wrap = document.getElementById('ba-wrapper');
  // Simple static fallback layout for BA section since photos might be missing
  wrap.innerHTML = `
    <div class="ba-slider" id="ba-slider">
      <div style="position:absolute;inset:0;background:#dcd5c9;display:flex;align-items:center;justify-content:center;color:#888;">Before Image Placeholder</div>
      <div class="ba-after" style="position:absolute;inset:0;background:#e5dfd4;display:flex;align-items:center;justify-content:center;color:#888;">After Image Placeholder</div>
      <div class="ba-handle" id="ba-handle"><div class="handle-circle"><i class="fa-solid fa-chevron-left"></i><i class="fa-solid fa-chevron-right"></i></div></div>
      <div class="ba-label before">BEFORE</div><div class="ba-label after">AFTER</div>
    </div>
    <div class="ba-cards">
      <div class="ba-card active"><div class="ba-name">S.K., 30s</div><div class="ba-meta">Rosehip Night Cream • 4 weeks</div><div class="ba-quote">"My skin looks plumper and the dullness is completely gone."</div></div>
      <div class="ba-card"><div class="ba-name">A.M., 20s</div><div class="ba-meta">Calendula Soothe Cream • 2 weeks</div><div class="ba-quote">"The redness reduced significantly without irritating my skin."</div></div>
    </div>
  `;

  // Simple slider logic
  setTimeout(() => {
    const slider = document.getElementById('ba-slider');
    const handle = document.getElementById('ba-handle');
    const after = slider.querySelector('.ba-after');
    let isDown = false;
    
    slider.addEventListener('mousedown', () => isDown = true);
    window.addEventListener('mouseup', () => isDown = false);
    window.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      const rect = slider.getBoundingClientRect();
      let x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      let percent = (x / rect.width) * 100;
      handle.style.left = percent + '%';
      after.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    });
  }, 100);

  const stats = document.getElementById('ba-stats');
  stats.innerHTML = `
    <div class="ba-stat"><div class="stat-num">92%</div><div class="stat-text">Noticed softer skin</div><div class="stat-footnote">*Based on survey of 120 users</div></div>
    <div class="ba-stat"><div class="stat-num">88%</div><div class="stat-text">Saw improved glow</div><div class="stat-footnote">*After 4 weeks of use</div></div>
    <div class="ba-stat"><div class="stat-num">95%</div><div class="stat-text">Would recommend</div><div class="stat-footnote">*To a friend</div></div>
  `;
}

// ==============================
// 9. BOOTSTRAP
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  try {
    initLenis();
  } catch (e) {
    console.error('Lenis error:', e);
  }
  
  try {
    initPreloader();
    initI18n();
    renderTrustMarquee();
    renderConcerns();
    renderShop();
    renderCart();
    updateHeaderCounts();
    initChat();
    initEventHandlers();
    renderAICards();
    renderBeforeAfter();
  } catch (e) {
    console.error('Init error:', e);
  }
});

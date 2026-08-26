/**
 * JENNAH BOUTIQUE — MASTER APPLICATION CONTROLLER
 * Single Page Application (SPA), E-Commerce Cart, Live Search,
 * Category Filters, Wishlist & Multi-Currency Engine
 */

// =========================================================
// 1. DATA STORE — PRODUCT CATALOG
// =========================================================
const PRODUCTS = [
  {
    id: 'kairouan-khaki',
    name: 'Kairouan Dress Khaki',
    price: 54,
    cat: 'dresses',
    subcat: 'printemps',
    img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=900&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=85',
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=85'
    ],
    colors: [
      { name: 'Khaki', hex: '#8B7D5E' },
      { name: 'Anthracite', hex: '#4A4A4A' },
      { name: 'Black', hex: '#1c1c1c' }
    ],
    sizes: ['Taille 1', 'Taille 2', 'Taille 3'],
    soldOut: false,
    sale: null,
    desc: 'Kairouan dress in fluid crepe with delicate waist pleats. Mandarin neckline with smocked cuffs for a sophisticated Parisian modest drape. 100% premium woven polyester. Made in Turkey.',
    details: 'Standard fit. The model is 1m74 tall and is wearing size 2. Machine wash at 30°C gentle cycle.',
    look: {
      name: 'Breath Jersey Hijab Tmar',
      price: 24,
      img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&q=80'
    }
  },
  {
    id: 'epure-taupe-abaya',
    name: 'Épure Signature Abaya Taupe',
    price: 79,
    cat: 'dresses',
    subcat: 'printemps',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=900&q=85'
    ],
    colors: [
      { name: 'Taupe', hex: '#C4B09A' },
      { name: 'Onyx', hex: '#1c1c1c' },
      { name: 'Sage', hex: '#9aad8f' }
    ],
    sizes: ['Taille 1', 'Taille 2', 'Taille 3'],
    soldOut: false,
    sale: null,
    desc: 'Our iconic Épure abaya created in high-density Nida fabric. Characterized by clean vertical lines, discreet hidden side pockets, and an effortlessly flowing silhouette.',
    details: 'Dry clean or hand wash cold. Model is 1m76 and wears Taille 2.',
    look: {
      name: 'Modal Silk Hijab Beige',
      price: 22,
      img: 'https://images.unsplash.com/photo-1601646849487-1e5bdf44a959?w=300&q=80'
    }
  },
  {
    id: 'oversize-tshirt-spring',
    name: 'Le T-Shirt Oversize Blanc',
    price: 36,
    cat: 'top',
    subcat: 'oversize-tshirt',
    img: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=900&q=85',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&q=85'
    ],
    colors: [
      { name: 'White', hex: '#ffffff' },
      { name: 'Sand', hex: '#d9cdbe' },
      { name: 'Noir', hex: '#1c1c1c' }
    ],
    sizes: ['XS/S', 'M/L', 'XL/XXL'],
    soldOut: false,
    sale: null,
    desc: 'Crafted from 100% heavy organic French Terry cotton (240 GSM). Features an elongated modest hem, dropped shoulders, and embroidered tone-on-tone JENNAH emblem on the nape.',
    details: '100% Organic Cotton. Pre-shrunk fabric. Designed in Paris.',
    look: {
      name: 'Netbris Wide Leg Trouser',
      price: 48,
      img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=80'
    }
  },
  {
    id: 'over-modal-dress',
    name: 'Over Modal Maxi Dress Kaki',
    price: 62,
    sale: 49,
    cat: 'dresses',
    subcat: 'sale',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=85',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=900&q=85'
    ],
    colors: [
      { name: 'Kaki', hex: '#8B7D5E' },
      { name: 'Noir', hex: '#1c1c1c' },
      { name: 'Gris', hex: '#777777' }
    ],
    sizes: ['Taille 1', 'Taille 2'],
    soldOut: false,
    desc: 'Luxuriously soft modal jersey fabric that breathes naturally in spring & summer weather. Features a relaxed cut with discreet side slits for optimal ease of movement.',
    details: '95% Modal, 5% Elastane. Model is 1m72 wearing Taille 1.',
    look: {
      name: 'Air Jersey Hijab Taupe',
      price: 19,
      img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&q=80'
    }
  },
  {
    id: 'netbris-trouser-beige',
    name: 'Netbris Flowy Palazzo Beige',
    price: 64,
    cat: 'bottom',
    subcat: 'printemps',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85'
    ],
    colors: [
      { name: 'Beige', hex: '#D4C4B0' },
      { name: 'Noir', hex: '#1c1c1c' }
    ],
    sizes: ['S (36/38)', 'M (40/42)', 'L (44/46)'],
    soldOut: false,
    sale: null,
    desc: 'High-waisted wide leg trousers with tailored front pleats and an elasticated back waistband for supreme elegance and comfort throughout the day.',
    details: '100% Linen-look Crepe. Inseam 105cm.',
    look: {
      name: 'Le T-Shirt Oversize Blanc',
      price: 36,
      img: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=300&q=80'
    }
  },
  {
    id: 'premium-jersey-hijab',
    name: 'Premium Jersey Hijab Sand',
    price: 18,
    cat: 'hijab',
    subcat: 'premium-jersey',
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&q=85',
      'https://images.unsplash.com/photo-1601646849487-1e5bdf44a959?w=900&q=85'
    ],
    colors: [
      { name: 'Sand', hex: '#C4B09A' },
      { name: 'Noir', hex: '#1c1c1c' },
      { name: 'Olive', hex: '#8B7D5E' },
      { name: 'Mocha', hex: '#634b35' }
    ],
    sizes: ['180 x 70 cm'],
    soldOut: false,
    sale: null,
    desc: 'Ultra-stretch, non-slip premium modal jersey with seamless laser-cut edging. Stays effortlessly in place without pins or undercaps.',
    details: 'Fabric: 95% Rayon Jersey, 5% Spandex. Dimension: 180cm x 70cm.',
    look: {
      name: 'Épure Signature Abaya Taupe',
      price: 79,
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80'
    }
  },
  {
    id: 'origin-dress-kaki',
    name: 'Origin Kimono Dress Kaki',
    price: 58,
    cat: 'dresses',
    subcat: 'long-dress',
    img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=85'
    ],
    colors: [
      { name: 'Kaki', hex: '#8B7D5E' },
      { name: 'Gris', hex: '#d0cdc8' }
    ],
    sizes: ['Taille 1', 'Taille 2'],
    soldOut: true,
    sale: null,
    desc: 'Kimono-inspired long dress with structured sleeves, optional waist sash, and an opulent textured linen-cotton weave.',
    details: 'Currently sold out. Sign up to be notified upon re-stock.',
    look: {
      name: 'Premium Jersey Hijab Sand',
      price: 18,
      img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&q=80'
    }
  },
  {
    id: 'set-two-pieces-linen',
    name: 'Ensemble Lin 2 Pièces Écru',
    price: 89,
    cat: 'sets',
    subcat: 'set-two-pieces',
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&q=85'
    ],
    colors: [
      { name: 'Écru', hex: '#f5f5f0' },
      { name: 'Chocolat', hex: '#4a3728' }
    ],
    sizes: ['Taille 1 (36-40)', 'Taille 2 (42-46)'],
    soldOut: false,
    sale: null,
    desc: 'A coordinated two-piece tunic and straight-leg trouser set cut in breathable linen blend. The ultimate modest wardrobe staple for refined summer layering.',
    details: '70% Linen, 30% Cotton. Designed for a comfortable loose drape.',
    look: {
      name: 'JENNAH Canvas Tote Bag',
      price: 25,
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&q=80'
    }
  },
  {
    id: 'prayer-dress-white',
    name: 'Prayer Abaya & Attached Hijab White',
    price: 42,
    cat: 'prayer-set',
    subcat: 'sets',
    img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=900&q=85'
    ],
    colors: [
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Soft Pearl', hex: '#eae7e1' }
    ],
    sizes: ['Unique (One Size)'],
    soldOut: false,
    sale: null,
    desc: 'All-in-one prayer dress with sewn-in integrated hijab, stretch cuffs for easy ablution, and zipper pouch for portable travel convenience.',
    details: '100% Rayon Voile. Fits heights from 1m55 to 1m78.',
    look: {
      name: 'Modal Silk Hijab Beige',
      price: 22,
      img: 'https://images.unsplash.com/photo-1601646849487-1e5bdf44a959?w=300&q=80'
    }
  },
  {
    id: 'burkini-swimwear-noir',
    name: 'Burkini 3 Pièces Riviera Noir',
    price: 75,
    cat: 'burkini',
    subcat: 'printemps',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=85'
    ],
    colors: [
      { name: 'Black', hex: '#1c1c1c' },
      { name: 'Navy', hex: '#162238' }
    ],
    sizes: ['S (36)', 'M (38/40)', 'L (42/44)', 'XL (46)'],
    soldOut: false,
    sale: null,
    desc: 'Quick-dry, UV50+ sun protection modest swimwear consisting of a belted swim tunic, swim leggings with button fasteners, and an ergonomic swim turban.',
    details: '82% Polyamide, 18% Elastane. Chlorine & salt water resistant.',
    look: {
      name: 'JENNAH Canvas Tote Bag',
      price: 25,
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&q=80'
    }
  },
  {
    id: 'jennah-canvas-tote',
    name: 'JENNAH Paris Signature Canvas Tote',
    price: 25,
    cat: 'tote-bag',
    subcat: 'all-clothing',
    img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=900&q=85'
    ],
    colors: [
      { name: 'Natural Ecru', hex: '#e8e2d5' }
    ],
    sizes: ['42 x 38 x 10 cm'],
    soldOut: false,
    sale: null,
    desc: 'Heavyweight organic cotton canvas tote bag featuring the Parisian flagship address screenprint and reinforced handles.',
    details: '100% Fairtrade Organic Cotton 340 GSM.',
    look: {
      name: 'Le T-Shirt Oversize Blanc',
      price: 36,
      img: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=300&q=80'
    }
  },
  {
    id: 'modal-silk-hijab',
    name: 'Modal Silk Hijab Beige',
    price: 22,
    cat: 'hijab',
    subcat: 'modal-hijab',
    img: 'https://images.unsplash.com/photo-1601646849487-1e5bdf44a959?w=800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1601646849487-1e5bdf44a959?w=900&q=85'
    ],
    colors: [
      { name: 'Beige Champagne', hex: '#dfd2c0' },
      { name: 'Rose Poudré', hex: '#d9b8b8' },
      { name: 'Nude', hex: '#cbb69d' }
    ],
    sizes: ['195 x 75 cm'],
    soldOut: false,
    sale: null,
    desc: 'Lustrous modal blended with delicate silk threads for an exceptional sheen and cloud-soft touch against the skin.',
    details: '85% Modal, 15% Mulberry Silk.',
    look: {
      name: 'Épure Signature Abaya Taupe',
      price: 79,
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80'
    }
  }
];

// =========================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// =========================================================
let cart = JSON.parse(localStorage.getItem('jennah_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('jennah_wishlist') || '[]');
let currentCurrency = localStorage.getItem('jennah_currency') || 'EUR';
let currentLanguage = localStorage.getItem('jennah_lang') || 'en';
let currentProductId = PRODUCTS[0].id;
let currentSort = 'featured';
let activeCategoryFilter = 'all';

const CURRENCY_RATES = {
  EUR: { symbol: '€', rate: 1, suffix: ' EUR' },
  USD: { symbol: '$', rate: 1.08, suffix: ' USD' },
  GBP: { symbol: '£', rate: 0.85, suffix: ' GBP' },
  BDT: { symbol: '৳', rate: 129.5, suffix: ' BDT' }
};

function formatPrice(amountEUR) {
  const conf = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.EUR;
  const converted = Math.round(amountEUR * conf.rate);
  return `${conf.symbol}${converted},00${conf.suffix}`;
}

function saveCart() {
  localStorage.setItem('jennah_cart', JSON.stringify(cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem('jennah_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

// =========================================================
// 3. SPA ROUTER
// =========================================================
const catTitles = {
  'all-clothing': 'All Clothing',
  'printemps': 'Spring / Summer 2026 Collection',
  'hijab': 'Hijab Collection',
  'dresses': 'Dresses & Abayas',
  'top': 'Tops & Shirts',
  'bottom': 'Trousers & Skirts',
  'sets': 'Co-ord Sets',
  'oversize-tshirt': 'Oversize T-Shirt Collection',
  'long-dress': 'Long Dress Collection',
  'sale': 'Special Offers & Archives',
  'ramadan': 'Ramadan & Eid Capsule 2026',
  'premium-jersey': 'Premium Jersey Hijabs',
  'breath-jersey': 'Breath Jersey Hijabs',
  'air-jersey': 'Air Jersey Hijabs',
  'modal-hijab': 'Modal Silk Hijabs',
  'bamboo-hijab': 'Organic Bamboo Hijabs',
  'sparkle-hijab': 'Sparkle & Festive Hijabs',
  'sport-hijab': 'Sport Performance Hijabs',
  'tote-bag': 'Tote Bags & Accessories',
  'set-two-pieces': 'Two-Piece Modest Sets',
  'burkini': 'Modest Swimwear (Burkini)',
  'prayer-set': 'Prayer Outfits'
};

function navigate(view, extra) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('view-' + view);
  
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    let path = '/en';
    if (view === 'category') {
      path = '/en/collections/' + (extra || 'all-clothing');
    } else if (view === 'product') {
      path = '/en/products/' + (extra || 'kairouan-khaki');
    } else if (view !== 'home') {
      path = '/en/pages/' + view;
    }
    
    history.pushState({ view, extra }, '', path);
    
    if (view === 'category') {
      renderCategory(extra);
    }
    if (view === 'product') {
      renderProduct(extra);
    }
    if (view === 'wishlist') {
      renderWishlistPage();
    }
  }
  closeMob();
}

window.addEventListener('popstate', e => {
  if (e.state) {
    navigate(e.state.view, e.state.extra);
  } else {
    navigate('home');
  }
});

// Intercept SPA link clicks
document.addEventListener('click', e => {
  const link = e.target.closest('.spa');
  if (link) {
    e.preventDefault();
    const view = link.dataset.view || 'home';
    const extra = link.dataset.cat || link.dataset.product || null;
    navigate(view, extra);
  }
});

// =========================================================
// 4. CATEGORY & PRODUCT RENDERING
// =========================================================
function renderCategory(cat) {
  const title = catTitles[cat] || (cat ? cat.replace('-', ' ') : 'All Clothing');
  document.getElementById('cat-title').textContent = title;
  
  // Highlight active filter pill
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === (activeCategoryFilter || 'all')) {
      btn.classList.add('active');
    }
  });

  const grid = document.getElementById('products-grid');
  let prods = [...PRODUCTS];

  // Category filtering
  if (cat && cat !== 'all-clothing') {
    prods = prods.filter(p => 
      p.cat === cat || 
      p.subcat === cat || 
      (cat === 'sale' && p.sale) ||
      (cat === 'printemps' && p.subcat === 'printemps')
    );
  }

  // Secondary filter pills
  if (activeCategoryFilter && activeCategoryFilter !== 'all') {
    prods = prods.filter(p => p.cat === activeCategoryFilter || p.subcat === activeCategoryFilter);
  }

  // Sorting
  if (currentSort === 'price-low') {
    prods.sort((a, b) => (a.sale || a.price) - (b.sale || b.price));
  } else if (currentSort === 'price-high') {
    prods.sort((a, b) => (b.sale || b.price) - (a.sale || a.price));
  } else if (currentSort === 'name') {
    prods.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (prods.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:5rem 2rem; color:var(--text-muted);">
        <p style="font-size:1.1rem; margin-bottom:1rem;">No items found in this category.</p>
        <button class="hero-btn" onclick="filterCategory('all')">View All Collections</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = prods.map(p => {
    const isWish = wishlist.includes(p.id);
    const priceDisplay = p.sale 
      ? `<span class="original-price">${formatPrice(p.price)}</span> <span class="sale-price">${formatPrice(p.sale)}</span>`
      : formatPrice(p.price);

    return `
      <div class="product-card">
        <div class="product-card-img-wrap" onclick="navigate('product','${p.id}')">
          ${p.soldOut ? '<div class="sold-out-badge">SOLD OUT</div>' : ''}
          ${p.sale ? '<div class="sale-badge">SALE</div>' : ''}
          <img src="${p.img}" alt="${p.name}" loading="lazy">
        </div>
        <button class="wishlist-btn ${isWish ? 'active' : ''}" onclick="toggleWishlist('${p.id}', event)" title="Add to Wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
        <div class="product-info" onclick="navigate('product','${p.id}')">
          <div class="product-name">${p.name}</div>
          <div class="product-price">${priceDisplay}</div>
          <div class="product-colors">
            ${p.colors.map(c => `<div class="color-dot-sm" style="background:${c.hex};" title="${c.name}"></div>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterCategory(filterType) {
  activeCategoryFilter = filterType;
  renderCategory(history.state?.extra || 'all-clothing');
}

function handleSort(sortValue) {
  currentSort = sortValue;
  renderCategory(history.state?.extra || 'all-clothing');
}

// =========================================================
// 5. PRODUCT DETAIL PAGE
// =========================================================
let selectedColor = '';
let selectedSize = '';

function renderProduct(id) {
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  currentProductId = p.id;
  selectedColor = p.colors[0]?.name || 'Standard';
  selectedSize = p.sizes[0] || 'Standard';

  document.getElementById('prod-name').textContent = p.name;
  
  const priceEl = document.getElementById('prod-price');
  if (p.sale) {
    priceEl.innerHTML = `<span class="original-price" style="text-decoration:line-through; color:var(--text-muted); font-size:0.95em;">${formatPrice(p.price)}</span> <span style="color:var(--accent-sale);">${formatPrice(p.sale)}</span>`;
  } else {
    priceEl.textContent = formatPrice(p.price);
  }

  document.getElementById('prod-color-name').textContent = selectedColor;

  // Gallery
  const gallery = document.getElementById('product-gallery');
  const allImages = p.gallery && p.gallery.length ? p.gallery : [p.img];
  gallery.innerHTML = allImages.map((imgUrl, idx) => `
    <img src="${imgUrl}" alt="${p.name} view ${idx + 1}" class="${allImages.length === 1 ? 'full-width' : ''}" loading="lazy">
  `).join('');

  // Sizes
  const sizeWrap = document.getElementById('prod-size-options');
  if (sizeWrap) {
    sizeWrap.innerHTML = p.sizes.map((sz, idx) => `
      <button class="size-btn ${idx === 0 ? 'active' : ''} ${p.soldOut ? 'sold-out' : ''}" onclick="selectSize(this, '${sz}')">${sz}</button>
    `).join('');
  }

  // Swatches
  const swatchWrap = document.getElementById('prod-color-swatches');
  if (swatchWrap) {
    swatchWrap.innerHTML = p.colors.map((c, idx) => `
      <div class="swatch ${idx === 0 ? 'active' : ''}" style="background:${c.hex};" title="${c.name}" onclick="selectColor(this, '${c.name}')"></div>
    `).join('');
  }

  // Description
  const descEl = document.getElementById('prod-desc-content');
  if (descEl) {
    descEl.innerHTML = `<p>${p.desc}</p><p style="margin-top:0.8rem; font-size:11.5px; color:var(--text-muted);">${p.details}</p>`;
  }

  // Cross sell "Buy the Complete Look"
  const lookWrap = document.getElementById('prod-complete-look-wrap');
  if (lookWrap) {
    if (p.look) {
      lookWrap.style.display = 'block';
      lookWrap.innerHTML = `
        <h3>Buy the complete look</h3>
        <p>The mannequin's styled accessory</p>
        <div class="look-product">
          <div class="look-img"><img src="${p.look.img}" alt="${p.look.name}"></div>
          <div class="look-info">
            <div class="look-name">${p.look.name}</div>
            <div class="look-price">${formatPrice(p.look.price)}</div>
            <button class="look-add" onclick="quickAddLook('${p.look.name}', ${p.look.price}, '${p.look.img}')">+ Quick Add</button>
          </div>
        </div>
      `;
    } else {
      lookWrap.style.display = 'none';
    }
  }
}

function selectColor(el, name) {
  document.querySelectorAll('#prod-color-swatches .swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  selectedColor = name;
  document.getElementById('prod-color-name').textContent = name;
}

function selectSize(btn, sz) {
  document.querySelectorAll('#prod-size-options .size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedSize = sz;
}

function toggleAcc(btn) {
  const item = btn.closest('.acc-item');
  item.classList.toggle('open');
}

// =========================================================
// 6. CART MANAGEMENT
// =========================================================
function toggleCart() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  overlay.classList.toggle('open');
  drawer.classList.toggle('open');
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

function addToCart() {
  const p = PRODUCTS.find(x => x.id === currentProductId) || PRODUCTS[0];
  if (p.soldOut) {
    showToast('This item is currently sold out.');
    return;
  }

  const existingIdx = cart.findIndex(item => 
    item.id === p.id && item.size === selectedSize && item.color === selectedColor
  );

  if (existingIdx > -1) {
    cart[existingIdx].qty += 1;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.sale || p.price,
      img: p.img,
      size: selectedSize,
      color: selectedColor,
      qty: 1
    });
  }

  saveCart();
  toggleCart();
  showToast(`Added ${p.name} to your cart`);
}

function quickAddLook(name, price, img) {
  cart.push({
    id: 'look-' + Date.now(),
    name: name,
    price: price,
    img: img,
    size: 'Standard',
    color: 'Original',
    qty: 1
  });
  saveCart();
  toggleCart();
  showToast(`Added ${name} to your cart`);
}

function updateCartQuantity(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function removeFromCart(index) {
  if (!cart[index]) return;
  const name = cart[index].name;
  cart.splice(index, 1);
  saveCart();
  showToast(`Removed ${name} from cart`);
}

function updateCartUI() {
  const cartBody = document.getElementById('cart-body');
  const badgeCounts = document.querySelectorAll('.cart-count-badge');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const fillBar = document.getElementById('shipping-fill-bar');
  const shippingMsg = document.getElementById('shipping-msg');

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  badgeCounts.forEach(b => {
    b.textContent = totalItems;
    b.style.display = totalItems > 0 ? 'flex' : 'none';
  });

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <p style="font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:1px;">Your cart is empty</p>
        <p style="font-size:12px; margin-top:0.4rem; color:var(--text-muted);">Explore our latest Parisian modest wear creations.</p>
        <button class="cart-empty-btn" onclick="toggleCart(); navigate('category', 'all-clothing');">Start Shopping</button>
      </div>
    `;
    subtotalEl.textContent = formatPrice(0);
    if (fillBar) fillBar.style.width = '0%';
    if (shippingMsg) shippingMsg.textContent = 'Free Mondial Relay delivery on orders over €100';
    return;
  }

  let totalEUR = 0;
  cartBody.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.price * item.qty;
    totalEUR += itemTotal;

    return `
      <div class="cart-item">
        <div class="cart-img"><img src="${item.img}" alt="${item.name}"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">${item.size} / ${item.color}</div>
          <div class="cart-item-price">${formatPrice(itemTotal)}</div>
          <div class="cart-qty-row">
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" onclick="updateCartQuantity(${idx}, -1)">−</button>
              <span class="cart-qty-val">${item.qty}</span>
              <button class="cart-qty-btn" onclick="updateCartQuantity(${idx}, 1)">+</button>
            </div>
            <span class="cart-item-remove" onclick="removeFromCart(${idx})">Remove</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  subtotalEl.textContent = formatPrice(totalEUR);

  // Free shipping progress bar (target 100 EUR)
  if (fillBar && shippingMsg) {
    const progress = Math.min(100, Math.round((totalEUR / 100) * 100));
    fillBar.style.width = progress + '%';
    if (totalEUR >= 100) {
      shippingMsg.innerHTML = `<strong>Congratulations!</strong> You unlocked <strong>Free Delivery</strong> 🎉`;
    } else {
      const remaining = 100 - totalEUR;
      shippingMsg.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more to get <strong>Free Delivery</strong>!`;
    }
  }
}

function handleCheckout() {
  if (cart.length === 0) {
    showToast('Your cart is empty');
    return;
  }
  
  const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  const confirmCheckout = confirm(
    `Order Summary (${cart.length} items):\nTotal: ${formatPrice(total)}\n\nProceed to secure payment gateway?`
  );
  
  if (confirmCheckout) {
    cart = [];
    saveCart();
    toggleCart();
    showToast('✨ Merci! Order confirmed successfully! Tracking info sent.');
  }
}

// =========================================================
// 7. WISHLIST SYSTEM
// =========================================================
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(productId);
    showToast('Added to wishlist ❤️');
  }
  saveWishlist();
  
  // Update view if currently on category or product or wishlist page
  const currentView = history.state?.view || 'home';
  if (currentView === 'category') renderCategory(history.state?.extra);
  if (currentView === 'wishlist') renderWishlistPage();
}

function updateWishlistUI() {
  const badges = document.querySelectorAll('.wishlist-count-badge');
  badges.forEach(b => {
    b.textContent = wishlist.length;
    b.style.display = wishlist.length > 0 ? 'flex' : 'none';
  });
}

function renderWishlistPage() {
  const grid = document.getElementById('wishlist-grid');
  const emptyState = document.getElementById('wishlist-empty-state');
  
  const savedProds = PRODUCTS.filter(p => wishlist.includes(p.id));
  
  if (savedProds.length === 0) {
    if (grid) grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (grid) {
    grid.innerHTML = savedProds.map(p => `
      <div class="product-card">
        <div class="product-card-img-wrap" onclick="navigate('product','${p.id}')">
          <img src="${p.img}" alt="${p.name}">
        </div>
        <button class="wishlist-btn active" onclick="toggleWishlist('${p.id}', event)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
        <div class="product-info" onclick="navigate('product','${p.id}')">
          <div class="product-name">${p.name}</div>
          <div class="product-price">${formatPrice(p.sale || p.price)}</div>
        </div>
      </div>
    `).join('');
  }
}

// =========================================================
// 8. LIVE SEARCH
// =========================================================
function openSearch() {
  const overlay = document.getElementById('search-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  const input = document.getElementById('search-input');
  setTimeout(() => input.focus(), 100);
  handleSearchInput('');
}

function closeSearch() {
  const overlay = document.getElementById('search-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function handleSearchInput(query) {
  const q = (query || document.getElementById('search-input').value || '').trim().toLowerCase();
  const resultsGrid = document.getElementById('search-results-grid');
  const countMsg = document.getElementById('search-count-msg');

  let matches = PRODUCTS;
  if (q.length > 0) {
    matches = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q) ||
      p.subcat.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }

  if (countMsg) {
    countMsg.textContent = q.length > 0 ? `${matches.length} result(s) for "${q}"` : 'Popular Recommendations';
  }

  if (matches.length === 0) {
    resultsGrid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:4rem 2rem; color:var(--text-muted);">
        <p style="font-size:1.1rem; margin-bottom:0.5rem;">No products matching "${q}"</p>
        <p style="font-size:12px;">Try searching for "Abaya", "Hijab", "Dress", or "Khaki".</p>
      </div>
    `;
    return;
  }

  resultsGrid.innerHTML = matches.map(p => `
    <div class="product-card" onclick="closeSearch(); navigate('product','${p.id}');">
      <div class="product-card-img-wrap">
        <img src="${p.img}" alt="${p.name}">
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">${formatPrice(p.sale || p.price)}</div>
      </div>
    </div>
  `).join('');
}

function setSearchQuery(text) {
  const input = document.getElementById('search-input');
  input.value = text;
  handleSearchInput(text);
}

// =========================================================
// 9. MOBILE DRAWER & UTILITIES
// =========================================================
function openMob() {
  document.getElementById('mob-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMob() {
  document.getElementById('mob-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function toggleMobSub(id) {
  const sub = document.getElementById(id);
  if (sub) sub.classList.toggle('open');
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function handleNewsletter(event) {
  event.preventDefault();
  const input = event.target.querySelector('input[type="email"]');
  if (input && input.value) {
    showToast(`✨ Bienvenue! ${input.value} is now subscribed.`);
    input.value = '';
  }
}

function handleCurrencyChange(select) {
  const val = select.value;
  if (val.includes('EUR')) currentCurrency = 'EUR';
  else if (val.includes('USD')) currentCurrency = 'USD';
  else if (val.includes('GBP')) currentCurrency = 'GBP';
  else if (val.includes('BDT')) currentCurrency = 'BDT';
  
  localStorage.setItem('jennah_currency', currentCurrency);
  
  // Re-render views with new currency
  const view = history.state?.view || 'home';
  if (view === 'category') renderCategory(history.state?.extra);
  if (view === 'product') renderProduct(currentProductId);
  if (view === 'wishlist') renderWishlistPage();
  updateCartUI();
  showToast(`Currency updated to ${currentCurrency}`);
}

// =========================================================
// 10. INITIALIZATION
// =========================================================
window.addEventListener('DOMContentLoaded', () => {
  // Update badges & storage state
  updateCartUI();
  updateWishlistUI();

  // Handle header scroll
  const hdr = document.getElementById('hdr');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      hdr.classList.add('scrolled');
    } else {
      hdr.classList.remove('scrolled');
    }
  });

  // Global key bindings
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSearch();
      if (document.getElementById('cart-drawer').classList.contains('open')) {
        toggleCart();
      }
    }
  });

  // Initial Route Check
  const path = window.location.pathname;
  if (path.includes('/collections/')) {
    const cat = path.split('/collections/')[1] || 'all-clothing';
    navigate('category', cat);
  } else if (path.includes('/products/')) {
    const prodId = path.split('/products/')[1] || 'kairouan-khaki';
    navigate('product', prodId);
  } else if (path.includes('/pages/brand')) {
    navigate('brand');
  } else if (path.includes('/pages/stores')) {
    navigate('stores');
  } else if (path.includes('/pages/faq')) {
    navigate('faq');
  } else if (path.includes('/pages/wishlist')) {
    navigate('wishlist');
  } else {
    navigate('home');
  }
});

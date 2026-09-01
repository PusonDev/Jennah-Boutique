/**
 * JENNAH BOUTIQUE — MASTER APPLICATION CONTROLLER
 * SPA Router, E-Commerce Cart Engine, Multi-Step Checkout, Live Search,
 * Category Filters, Size Guide Modal, VIP Appointments & Supabase Hooks.
 */

// =========================================================
// 1. DATA & STATE MANAGEMENT
// =========================================================
const PRODUCTS = window.JENNAH_PRODUCTS || PRODUCTS_DATA;

let cart = JSON.parse(localStorage.getItem('jennah_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('jennah_wishlist') || '[]');
let currentCurrency = localStorage.getItem('jennah_currency') || 'EUR';
let currentProductId = PRODUCTS[0]?.id || 'kairouan-khaki';
let currentSort = 'featured';
let activeCategoryFilter = 'all';
let appliedDiscount = 0; // percentage
let activeProdQty = 1;

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
// 2. SPA ROUTING ENGINE
// =========================================================
const catTitles = {
  'all-clothing': 'All Clothing & Modest Wardrobe',
  'printemps': 'Spring / Summer 2026 Modest Drop',
  'hijab': 'The Hijab Bar',
  'dresses': 'Abayas & Long Modest Dresses',
  'top': 'Oversized Organic Tops & Tunics',
  'bottom': 'Modest Palazzos & Trousers',
  'sets': 'Coordinated Modest Sets',
  'set-two-pieces': 'Two-Piece Linen & Crepe Sets',
  'oversize-tshirt': 'Oversize Organic French Cotton',
  'sale': 'Special Offers & Archives',
  'premium-jersey': 'Premium Stretch Jersey Hijabs',
  'modal-hijab': 'Modal Silk Hijabs (Soie de Modal)',
  'burkini': 'Burkini & Modest UV Swimwear',
  'prayer-set': 'All-in-One Prayer Dresses & Outfits'
};

function navigate(view, extra) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('view-' + view);
  
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Hash update for clean URL sharing & direct bookmarks
    let hash = `#${view}`;
    if (view === 'category') {
      hash = `#category/${extra || 'all-clothing'}`;
    } else if (view === 'product') {
      hash = `#product/${extra || currentProductId}`;
    }
    
    if (window.location.hash !== hash) {
      history.pushState({ view, extra }, '', hash);
    }
    
    if (view === 'home') {
      renderHomeFeatured();
    } else if (view === 'category') {
      renderCategory(extra);
    } else if (view === 'product') {
      renderProduct(extra);
    } else if (view === 'wishlist') {
      renderWishlistPage();
    }
  }
  closeMob();
}

window.addEventListener('popstate', e => {
  handleHashRoute();
});

function handleHashRoute() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const parts = hash.split('/');
  const view = parts[0] || 'home';
  const extra = parts[1] || null;
  navigate(view, extra);
}

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
// 3. HOME & CATEGORY RENDERING
// =========================================================
function renderHomeFeatured() {
  const grid = document.getElementById('home-featured-grid');
  if (!grid) return;
  
  const featured = PRODUCTS.slice(0, 4);
  grid.innerHTML = featured.map(p => createProductCardHtml(p)).join('');
}

function renderCategory(cat) {
  const selectedCat = cat || 'all-clothing';
  const title = catTitles[selectedCat] || selectedCat.replace('-', ' ').toUpperCase();
  
  const titleEl = document.getElementById('cat-title');
  const breadcrumbEl = document.getElementById('cat-breadcrumb-curr');
  if (titleEl) titleEl.textContent = title;
  if (breadcrumbEl) breadcrumbEl.textContent = title;
  
  // Highlight active filter pill
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === (activeCategoryFilter || 'all')) {
      btn.classList.add('active');
    }
  });

  const grid = document.getElementById('products-grid');
  if (!grid) return;
  
  let prods = [...PRODUCTS];

  // Category filtering
  if (selectedCat && selectedCat !== 'all-clothing') {
    prods = prods.filter(p => 
      p.cat === selectedCat || 
      p.subcat === selectedCat || 
      (selectedCat === 'sale' && p.sale) ||
      (selectedCat === 'printemps' && p.subcat === 'printemps')
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
        <p style="font-size:1.1rem; margin-bottom:1rem;">No modest pieces found matching this filter.</p>
        <button class="hero-btn" onclick="filterCategory('all')">View All Collections</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = prods.map(p => createProductCardHtml(p)).join('');
}

function createProductCardHtml(p) {
  const isWish = wishlist.includes(p.id);
  const priceDisplay = p.sale 
    ? `<span class="original-price">${formatPrice(p.price)}</span> <span class="sale-price">${formatPrice(p.sale)}</span>`
    : formatPrice(p.price);

  return `
    <div class="product-card">
      <div class="product-card-img-wrap" onclick="navigate('product','${p.id}')">
        ${p.badge ? `<div class="sale-badge" style="${p.badge === 'BESTSELLER' ? 'background:#b39b6b;' : ''}">${p.badge}</div>` : ''}
        <img src="${p.img}" alt="${p.name}" loading="lazy" id="prod-card-img-${p.id}">
      </div>
      <button class="wishlist-btn ${isWish ? 'active' : ''}" onclick="toggleWishlist('${p.id}', event)" title="Save to Wishlist">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
      </button>
      <div class="product-info" onclick="navigate('product','${p.id}')">
        <div class="product-name">${p.name}</div>
        <div class="product-price">${priceDisplay}</div>
        <div class="product-colors">
          ${p.colors.map(c => `
            <div class="color-dot-sm" style="background:${c.hex};" title="${c.name}" onclick="switchCardPreview('${p.id}', '${c.img}', event)"></div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function switchCardPreview(prodId, imgUrl, event) {
  if (event) event.stopPropagation();
  const img = document.getElementById(`prod-card-img-${prodId}`);
  if (img && imgUrl) {
    img.src = imgUrl;
  }
}

function filterCategory(filterType) {
  activeCategoryFilter = filterType;
  const hash = window.location.hash.replace('#', '') || 'category/all-clothing';
  const parts = hash.split('/');
  const cat = parts[1] || 'all-clothing';
  renderCategory(cat);
}

function handleSort(sortValue) {
  currentSort = sortValue;
  const hash = window.location.hash.replace('#', '') || 'category/all-clothing';
  const parts = hash.split('/');
  const cat = parts[1] || 'all-clothing';
  renderCategory(cat);
}

// =========================================================
// 4. PRODUCT DETAIL PAGE (PDP)
// =========================================================
let selectedColor = '';
let selectedSize = '';

function renderProduct(id) {
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  currentProductId = p.id;
  selectedColor = p.colors[0]?.name || 'Standard';
  selectedSize = p.sizes[0] || 'Standard';
  activeProdQty = 1;

  const qtyEl = document.getElementById('prod-qty-val');
  if (qtyEl) qtyEl.textContent = activeProdQty;

  const nameEl = document.getElementById('prod-name');
  const breadcrumbName = document.getElementById('prod-breadcrumb-name');
  if (nameEl) nameEl.textContent = p.name;
  if (breadcrumbName) breadcrumbName.textContent = p.name;
  
  // Price
  const priceEl = document.getElementById('prod-price');
  if (priceEl) {
    if (p.sale) {
      priceEl.innerHTML = `<span class="original-price" style="text-decoration:line-through; color:var(--text-muted); font-size:0.95em; margin-right:8px;">${formatPrice(p.price)}</span> <span style="color:var(--accent-sale); font-weight:700;">${formatPrice(p.sale)}</span>`;
    } else {
      priceEl.textContent = formatPrice(p.price);
    }
  }

  // Reviews
  const ratingWrap = document.getElementById('prod-rating-stars');
  if (ratingWrap) {
    ratingWrap.innerHTML = `★★★★★ <span id="prod-review-count">(${p.reviewCount || 48} reviews)</span>`;
  }

  // Badges
  const badgeWrap = document.getElementById('prod-badge-wrap');
  if (badgeWrap) {
    badgeWrap.innerHTML = p.badge ? `<span class="prod-badge-pill">${p.badge}</span>` : '';
  }

  document.getElementById('prod-color-name').textContent = selectedColor;

  // Gallery
  const gallery = document.getElementById('product-gallery');
  const allImages = p.gallery && p.gallery.length ? p.gallery : [p.img];
  gallery.innerHTML = allImages.map((imgUrl, idx) => `
    <img src="${imgUrl}" alt="${p.name} modest view ${idx + 1}" class="${allImages.length === 1 ? 'full-width' : ''}" loading="lazy">
  `).join('');

  // Sizes
  const sizeWrap = document.getElementById('prod-size-options');
  if (sizeWrap) {
    sizeWrap.innerHTML = p.sizes.map((sz, idx) => `
      <button class="size-btn ${idx === 0 ? 'active' : ''}" onclick="selectSize(this, '${sz}')">${sz}</button>
    `).join('');
  }

  // Swatches
  const swatchWrap = document.getElementById('prod-color-swatches');
  if (swatchWrap) {
    swatchWrap.innerHTML = p.colors.map((c, idx) => `
      <div class="swatch ${idx === 0 ? 'active' : ''}" style="background:${c.hex};" title="${c.name}" onclick="selectColor(this, '${c.name}', '${c.img || p.img}')"></div>
    `).join('');
  }

  // Descriptions & Origin
  const descEl = document.getElementById('prod-desc-content');
  if (descEl) {
    descEl.innerHTML = `
      <p style="margin-bottom:0.8rem;">${p.desc}</p>
      <p style="font-size:12px; color:var(--text-muted);"><strong>Material:</strong> ${p.material || '100% Premium Fabric'}</p>
      <p style="font-size:12px; color:var(--text-muted); margin-top:4px;"><strong>Atelier Origin:</strong> ${p.origin || 'Ethically handcrafted in Turkey'}</p>
    `;
  }

  // Cross sell "Buy the Complete Look"
  const lookWrap = document.getElementById('prod-complete-look-wrap');
  if (lookWrap) {
    if (p.look) {
      lookWrap.style.display = 'block';
      lookWrap.innerHTML = `
        <h3>Complete Your Modest Silhouette</h3>
        <p>Mannequin styled with matching hijab &amp; accessory</p>
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

function selectColor(el, name, imgUrl) {
  document.querySelectorAll('#prod-color-swatches .swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  selectedColor = name;
  document.getElementById('prod-color-name').textContent = name;
  
  if (imgUrl) {
    const galleryFirstImg = document.querySelector('#product-gallery img');
    if (galleryFirstImg) galleryFirstImg.src = imgUrl;
  }
}

function selectSize(btn, sz) {
  document.querySelectorAll('#prod-size-options .size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedSize = sz;
}

function adjustProdQty(delta) {
  activeProdQty = Math.max(1, activeProdQty + delta);
  const qtyEl = document.getElementById('prod-qty-val');
  if (qtyEl) qtyEl.textContent = activeProdQty;
}

function toggleAcc(btn) {
  const item = btn.closest('.acc-item');
  item.classList.toggle('open');
}

// =========================================================
// 5. SHOPPING BAG & PROMO CODES
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
    cart[existingIdx].qty += activeProdQty;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.sale || p.price,
      img: p.img,
      size: selectedSize,
      color: selectedColor,
      qty: activeProdQty
    });
  }

  saveCart();
  toggleCart();
  showToast(`Added ${p.name} (${activeProdQty}) to your shopping bag`);
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
  showToast(`Added ${name} to your bag`);
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
  showToast(`Removed ${name} from bag`);
}

function applyPromoCode() {
  const code = (document.getElementById('promo-input').value || '').trim().toUpperCase();
  if (code === 'PARIS10' || code === 'WELCOME10') {
    appliedDiscount = 0.10; // 10%
    showToast('✨ Promo code PARIS10 applied: 10% discount!');
  } else if (code === 'JENNAH15') {
    appliedDiscount = 0.15; // 15%
    showToast('✨ Promo code JENNAH15 applied: 15% discount!');
  } else {
    appliedDiscount = 0;
    showToast('Invalid promo code. Try PARIS10');
  }
  updateCartUI();
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
        <p style="font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:1px;">Your shopping bag is empty</p>
        <p style="font-size:12px; margin-top:0.4rem; color:var(--text-muted);">Explore our latest Parisian modest wear creations.</p>
        <button class="cart-empty-btn" onclick="toggleCart(); navigate('category', 'all-clothing');">Discover Collections</button>
      </div>
    `;
    subtotalEl.textContent = formatPrice(0);
    if (fillBar) fillBar.style.width = '0%';
    if (shippingMsg) shippingMsg.textContent = 'Free Mondial Relay delivery on orders over €100';
    return;
  }

  let rawTotalEUR = 0;
  cartBody.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.price * item.qty;
    rawTotalEUR += itemTotal;

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

  const finalTotalEUR = appliedDiscount > 0 ? rawTotalEUR * (1 - appliedDiscount) : rawTotalEUR;
  subtotalEl.innerHTML = appliedDiscount > 0
    ? `<span style="text-decoration:line-through; font-size:0.9em; color:var(--text-muted);">${formatPrice(rawTotalEUR)}</span> <span style="color:var(--accent-sale); font-weight:700;">${formatPrice(finalTotalEUR)}</span>`
    : formatPrice(finalTotalEUR);

  // Free shipping progress bar (target 100 EUR)
  if (fillBar && shippingMsg) {
    const progress = Math.min(100, Math.round((rawTotalEUR / 100) * 100));
    fillBar.style.width = progress + '%';
    if (rawTotalEUR >= 100) {
      shippingMsg.innerHTML = `<strong>Félicitations!</strong> You unlocked <strong>Free Mondial Relay Delivery</strong> 🎉`;
    } else {
      const remaining = 100 - rawTotalEUR;
      shippingMsg.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more for <strong>Free Delivery</strong>!`;
    }
  }
}

// =========================================================
// 6. MULTI-STEP CHECKOUT & ORDER CONFIRMATION
// =========================================================
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }
  toggleCart(); // Close cart drawer
  document.getElementById('checkout-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  goToCheckoutStep(1);
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function goToCheckoutStep(stepNumber) {
  document.getElementById('checkout-step-1').style.display = stepNumber === 1 ? 'block' : 'none';
  document.getElementById('checkout-step-2').style.display = stepNumber === 2 ? 'block' : 'none';
  document.getElementById('checkout-step-3').style.display = stepNumber === 3 ? 'block' : 'none';

  document.getElementById('step-1-nav').className = 'step-badge ' + (stepNumber >= 1 ? 'active' : '');
  document.getElementById('step-2-nav').className = 'step-badge ' + (stepNumber >= 2 ? 'active' : '');
  document.getElementById('step-3-nav').className = 'step-badge ' + (stepNumber >= 3 ? 'active' : '');

  if (stepNumber === 2) {
    renderCheckoutSummary();
  }
}

function renderCheckoutSummary() {
  const summaryBox = document.getElementById('checkout-order-summary');
  const rawTotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  const discountAmt = rawTotal * appliedDiscount;
  const shipping = rawTotal >= 100 ? 0 : 4.90;
  const grandTotal = rawTotal - discountAmt + shipping;

  summaryBox.innerHTML = `
    <h4 style="font-size:12px; text-transform:uppercase; letter-spacing:1px; margin-bottom:0.8rem;">Order Summary (${cart.length} items)</h4>
    <div style="font-size:12.5px; line-height:1.8; color:var(--text-main);">
      <div style="display:flex; justify-content:space-between;">
        <span>Subtotal:</span>
        <span>${formatPrice(rawTotal)}</span>
      </div>
      ${appliedDiscount > 0 ? `
      <div style="display:flex; justify-content:space-between; color:var(--accent-sale);">
        <span>Promo Discount:</span>
        <span>-${formatPrice(discountAmt)}</span>
      </div>` : ''}
      <div style="display:flex; justify-content:space-between;">
        <span>Mondial Relay Delivery:</span>
        <span>${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
      </div>
      <div style="display:flex; justify-content:space-between; font-weight:700; font-size:14px; border-top:1px solid var(--border); padding-top:6px; margin-top:6px;">
        <span>Total Due:</span>
        <span>${formatPrice(grandTotal)}</span>
      </div>
    </div>
  `;
}

async function processCheckout(event) {
  event.preventDefault();
  const payBtn = document.getElementById('pay-now-btn');
  payBtn.disabled = true;
  payBtn.textContent = 'Processing Payment...';

  const orderPayload = {
    customer_name: `${document.getElementById('chk-fname').value} ${document.getElementById('chk-lname').value}`,
    email: document.getElementById('chk-email').value,
    address: `${document.getElementById('chk-address').value}, ${document.getElementById('chk-city').value} ${document.getElementById('chk-zip').value}, ${document.getElementById('chk-country').value}`,
    items: cart,
    currency: currentCurrency,
    total: cart.reduce((acc, i) => acc + (i.price * i.qty), 0)
  };

  // Submit through Supabase client adapter
  let createdOrder = null;
  if (window.jennahSupabase) {
    createdOrder = await window.jennahSupabase.createOrder(orderPayload);
  }

  const orderId = createdOrder?.order_id || ('JB-' + Math.floor(100000 + Math.random() * 900000));

  setTimeout(() => {
    cart = [];
    saveCart();
    appliedDiscount = 0;
    payBtn.disabled = false;
    payBtn.textContent = 'Pay & Confirm Order';

    const confirmMsg = document.getElementById('order-confirm-msg');
    if (confirmMsg) {
      confirmMsg.innerHTML = `Order <strong>#${orderId}</strong> placed successfully. A confirmation receipt has been sent to <strong>${orderPayload.email}</strong>.`;
    }

    goToCheckoutStep(3);
    showToast('✨ Merci! Order confirmed successfully.');
  }, 1200);
}

// =========================================================
// 7. MODALS: SIZE GUIDE, VIP APPOINTMENTS & AUTH
// =========================================================
function openSizeGuideModal() {
  document.getElementById('sizeguide-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSizeGuideModal() {
  document.getElementById('sizeguide-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function openAppointmentModal(location) {
  const modal = document.getElementById('appointment-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (location) {
    document.getElementById('apt-location').value = location;
  }
}

function closeAppointmentModal() {
  document.getElementById('appointment-modal').classList.remove('open');
  document.body.style.overflow = '';
}

async function handleAppointmentSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const booking = {
    name: form.querySelector('input[type="text"]').value,
    email: form.querySelector('input[type="email"]').value,
    phone: form.querySelector('input[type="tel"]').value,
    location: form.querySelector('select').value,
    date: form.querySelector('input[type="date"]').value
  };

  if (window.jennahSupabase) {
    await window.jennahSupabase.bookStylingAppointment(booking);
  }

  closeAppointmentModal();
  showToast(`✨ VIP Session reserved for ${booking.name} at Boutique ${booking.location}`);
  form.reset();
}

function openAuthModal() {
  document.getElementById('auth-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  document.getElementById('tab-login').className = 'auth-tab ' + (tab === 'login' ? 'active' : '');
  document.getElementById('tab-register').className = 'auth-tab ' + (tab === 'register' ? 'active' : '');
  document.getElementById('login-form').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('auth-modal-title').textContent = tab === 'login' ? 'Client Concierge Sign In' : 'Create JENNAH Account';
}

async function handleAuthLogin(event) {
  event.preventDefault();
  const email = document.getElementById('auth-login-email').value;
  const pass = document.getElementById('auth-login-pass').value;

  try {
    if (window.jennahSupabase) {
      await window.jennahSupabase.signIn(email, pass);
    }
    closeAuthModal();
    showToast(`✨ Bienvenue, ${email.split('@')[0]}!`);
  } catch (err) {
    showToast('Login failed: ' + err.message);
  }
}

async function handleAuthRegister(event) {
  event.preventDefault();
  const name = document.getElementById('auth-reg-name').value;
  const email = document.getElementById('auth-reg-email').value;
  const pass = document.getElementById('auth-reg-pass').value;

  try {
    if (window.jennahSupabase) {
      await window.jennahSupabase.signUp(email, pass, name);
    }
    closeAuthModal();
    showToast(`✨ Account created for ${name}! Welcome to Maison JENNAH.`);
  } catch (err) {
    showToast('Registration failed: ' + err.message);
  }
}

// =========================================================
// 8. WISHLIST MANAGEMENT
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
    grid.innerHTML = savedProds.map(p => createProductCardHtml(p)).join('');
  }
}

// =========================================================
// 9. LIVE SEARCH OVERLAY
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
      p.frenchName.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q) ||
      p.subcat.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }

  if (countMsg) {
    countMsg.textContent = q.length > 0 ? `${matches.length} modest piece(s) found for "${q}"` : 'Popular Recommendations';
  }

  if (matches.length === 0) {
    resultsGrid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:4rem 2rem; color:var(--text-muted);">
        <p style="font-size:1.1rem; margin-bottom:0.5rem;">No modest pieces matching "${q}"</p>
        <p style="font-size:12px;">Try searching for "Abaya", "Medina Silk", "Hijab", or "Linen".</p>
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
// 10. UTILITIES, TOASTS & INITIALIZATION
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

function handleContactSubmit(event) {
  event.preventDefault();
  showToast('✨ Merci! Your concierge inquiry has been sent to our Paris atelier.');
  event.target.reset();
}

function handleCurrencyChange(select) {
  const val = select.value;
  if (val.includes('EUR')) currentCurrency = 'EUR';
  else if (val.includes('USD')) currentCurrency = 'USD';
  else if (val.includes('GBP')) currentCurrency = 'GBP';
  else if (val.includes('BDT')) currentCurrency = 'BDT';
  
  localStorage.setItem('jennah_currency', currentCurrency);
  
  const hash = window.location.hash.replace('#', '') || 'home';
  handleHashRoute();
  updateCartUI();
  showToast(`Currency updated to ${currentCurrency}`);
}

// Announcement Bar Rotation
const announcements = [
  'Free delivery with Mondial Relay on orders <a href="#faq" class="spa" data-view="faq">over €100*</a>',
  'New Spring 2026 Modest Capsule &bull; Discover Medina Silk Abayas',
  'Paris Boutiques in Aubervilliers &amp; Noisy-le-Sec Open Tuesday - Saturday'
];
let annIdx = 0;
setInterval(() => {
  annIdx = (annIdx + 1) % announcements.length;
  const annEl = document.getElementById('ann-text');
  if (annEl) {
    annEl.style.opacity = '0';
    setTimeout(() => {
      annEl.innerHTML = announcements[annIdx];
      annEl.style.opacity = '1';
    }, 250);
  }
}, 5000);

// Global Key Listeners & DOM Init
window.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  updateWishlistUI();

  const hdr = document.getElementById('hdr');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      hdr.classList.add('scrolled');
    } else {
      hdr.classList.remove('scrolled');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSearch();
      closeCheckoutModal();
      closeSizeGuideModal();
      closeAppointmentModal();
      closeAuthModal();
      if (document.getElementById('cart-drawer').classList.contains('open')) {
        toggleCart();
      }
    }
  });

  // Handle route based on initial hash or path
  handleHashRoute();
});

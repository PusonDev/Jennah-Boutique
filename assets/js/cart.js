/**
 * Cart Drawer Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inject the cart HTML directly using JS rather than fetch to save an HTTP request for such a small module, 
    // or we could fetch it. Since we already have the container <div id="cart-drawer-container"></div>
    const cartContainer = document.getElementById('cart-drawer-container');
    
    cartContainer.innerHTML = `
        <div class="cart-overlay" id="cart-overlay"></div>
        <div class="cart-drawer" id="cart-drawer">
            <div class="cart-header">
                <h3>Shopping Cart (2)</h3>
                <button class="close-cart" id="close-cart-btn"><i class='bx bx-x'></i></button>
            </div>
            
            <div class="cart-items">
                <!-- Dummy Item 1 -->
                <div class="cart-item">
                    <img src="https://images.unsplash.com/photo-1589717539074-cecb5b85a1de?w=150&q=80" alt="Abaya" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-title">Luxury Black Nida Abaya</div>
                        <div class="cart-item-meta">Size: M | Color: Midnight</div>
                        <div class="cart-item-price">€ 85.00</div>
                        <div class="cart-qty-controls">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                
                <!-- Dummy Item 2 -->
                <div class="cart-item">
                    <img src="https://images.unsplash.com/photo-1601646849487-1e5bdf44a959?w=150&q=80" alt="Hijab" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-title">Premium Chiffon Hijab</div>
                        <div class="cart-item-meta">Color: Sand</div>
                        <div class="cart-item-price">€ 15.00</div>
                        <div class="cart-qty-controls">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="cart-footer">
                <div class="cart-total">
                    <span>Subtotal</span>
                    <span>€ 100.00</span>
                </div>
                <p style="font-size: 0.75rem; color: var(--light-text); text-align: center; margin-bottom: 1rem;">
                    Tax included. Shipping calculated at checkout.
                </p>
                <button class="btn-primary" style="width: 100%;">Checkout</button>
            </div>
        </div>
        
        <style>
            /* Cart Drawer CSS */
            .cart-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 10000;
                opacity: 0;
                visibility: hidden;
                transition: var(--transition-normal);
            }
            .cart-overlay.active {
                opacity: 1; visibility: visible;
            }
            
            .cart-drawer {
                position: fixed;
                top: 0; right: 0;
                width: 400px; max-width: 100%;
                height: 100vh;
                background: var(--white);
                z-index: 10001;
                transform: translateX(100%);
                transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                display: flex;
                flex-direction: column;
                box-shadow: -5px 0 15px rgba(0,0,0,0.05);
            }
            .cart-drawer.active {
                transform: translateX(0);
            }
            
            .cart-header {
                display: flex; justify-content: space-between; align-items: center;
                padding: 1.5rem;
                border-bottom: 1px solid var(--border-color);
            }
            .cart-header h3 { margin: 0; font-family: var(--font-body); font-size: 1.2rem; text-transform: uppercase;}
            .close-cart { font-size: 1.5rem; color: var(--primary-color); }
            
            .cart-items {
                flex: 1; overflow-y: auto; padding: 1.5rem;
            }
            
            .cart-item {
                display: flex; gap: 1rem; margin-bottom: 1.5rem;
            }
            .cart-item-img {
                width: 80px; height: 100px; object-fit: cover;
                background: #f5f5f5;
            }
            .cart-item-details { flex: 1; }
            .cart-item-title { font-weight: 500; font-size: 0.9rem; margin-bottom: 0.25rem; }
            .cart-item-meta { font-size: 0.75rem; color: var(--light-text); margin-bottom: 0.5rem; }
            .cart-item-price { font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem; }
            
            .cart-qty-controls {
                display: inline-flex; align-items: center;
                border: 1px solid var(--border-color);
            }
            .cart-qty-controls button {
                padding: 0.25rem 0.75rem; font-size: 1rem; color: var(--light-text);
            }
            .cart-qty-controls span { padding: 0 0.5rem; font-size: 0.85rem; }
            
            .cart-footer {
                padding: 1.5rem;
                border-top: 1px solid var(--border-color);
                background: var(--secondary-color);
            }
            .cart-total {
                display: flex; justify-content: space-between;
                font-weight: 600; font-size: 1.2rem;
                margin-bottom: 1rem; text-transform: uppercase;
            }
        </style>
    `;

    // Event listener attached to document because the button is injected dynamically
    document.addEventListener('click', (e) => {
        const openBtn = e.target.closest('#open-cart-btn');
        const closeBtn = e.target.closest('#close-cart-btn');
        const overlay = e.target.closest('#cart-overlay');
        
        const cartDrawer = document.getElementById('cart-drawer');
        const cartOverlay = document.getElementById('cart-overlay');
        
        if (openBtn && cartDrawer) {
            cartDrawer.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // prevent background scrolling
        }
        
        if ((closeBtn || overlay) && cartDrawer) {
            cartDrawer.classList.remove('active');
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

});

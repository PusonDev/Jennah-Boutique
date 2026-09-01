/**
 * Cart Drawer Logic & Helper
 */
document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-drawer-container');
    if (!cartContainer) return;
    
    cartContainer.innerHTML = `
        <div class="cart-overlay" id="cart-overlay"></div>
        <div class="cart-drawer" id="cart-drawer">
            <div class="cart-header">
                <h3>Shopping Bag</h3>
                <button class="close-cart" id="close-cart-btn"><i class='bx bx-x'></i></button>
            </div>
            
            <div class="cart-items">
                <div class="cart-item">
                    <img src="assets/images/abaya_kairouan_olive.jpg" alt="Abaya" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-title">Kairouan Pleated Crepe Abaya</div>
                        <div class="cart-item-meta">Size: Taille 2 | Color: Khaki Olive</div>
                        <div class="cart-item-price">€ 54.00</div>
                    </div>
                </div>
                <div class="cart-item">
                    <img src="assets/images/hijab_jersey_sand.jpg" alt="Hijab" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-title">Premium Jersey Hijab</div>
                        <div class="cart-item-meta">Color: Sand</div>
                        <div class="cart-item-price">€ 18.00</div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

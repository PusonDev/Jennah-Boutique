/**
 * Main Application Logic
 * Initializes layouts, sliders, and interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    // 1. Load Header Component
    await loadComponent('components/header.html', 'header-container');
    
    // 2. Load Footer Component
    await loadComponent('components/footer.html', 'footer-container');

    // 3. Initialize Global Elements (Header scroll, announcements)
    initGlobalScripts();
}

async function loadComponent(filepath, containerId) {
    try {
        const response = await fetch(filepath);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(containerId).innerHTML = html;
        } else {
            console.warn(`Failed to load component: ${filepath}`);
        }
    } catch (e) {
        console.error(`Component load failed (CORS?): ${filepath}`, e);
    }
}

function initGlobalScripts() {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Announcement Bar Slider
    const slides = document.querySelectorAll('.announcement-slide');
    if (slides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000);
    }
}

// Listener for when the router loads a new page
document.addEventListener('pageLoaded', (e) => {
    const page = e.detail.page;
    
    if (page === 'home') {
        initHomeScripts();
    } else if (page.startsWith('product')) {
        initProductScripts();
    }
});

function initHomeScripts() {
    // Hero Slider Logic
    const heroSlides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (heroSlides.length > 0) {
        let currentHero = 0;
        
        function showHeroSlide(index) {
            heroSlides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            
            heroSlides[index].classList.add('active');
            if(dots[index]) dots[index].classList.add('active');
            currentHero = index;
        }

        // Auto transition
        let heroInterval = setInterval(() => {
            let nextIndex = (currentHero + 1) % heroSlides.length;
            showHeroSlide(nextIndex);
        }, 5000); // 5 sec per slide

        // Manual dot clicking
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                clearInterval(heroInterval);
                showHeroSlide(idx);
                // restart interval
                heroInterval = setInterval(() => {
                    let nextIndex = (currentHero + 1) % heroSlides.length;
                    showHeroSlide(nextIndex);
                }, 5000);
            });
        });
    }
}

function initProductScripts() {
    // Size and Color selector interactions, gallery switching, accordion.
    // To be implemented within the product component logic.
    console.log("Product scripts initialized.");
}

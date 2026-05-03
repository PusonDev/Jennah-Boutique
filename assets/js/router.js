/**
 * SPA Router
 * Dynamically loads HTML fragments based on navigation/URL.
 */
class Router {
    constructor() {
        this.appContent = document.getElementById('app-content');
        this.cache = {}; // Cache loaded pages for speed
        this.init();
    }

    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                this.loadPage(e.state.page, false);
            } else {
                this.loadPage('home', false);
            }
        });

        // Intercept all clicks on links within the document
        document.body.addEventListener('click', (e) => {
            const link = e.target.closest('[data-link]');
            if (link) {
                e.preventDefault();
                const page = link.getAttribute('data-link');
                this.loadPage(page, true);
            }
        });

        // Initial Load
        const path = window.location.hash.replace('#', '') || 'home';
        this.loadPage(path, true);
    }

    async loadPage(page, pushState = true) {
        try {
            // Show loader
            this.appContent.innerHTML = `<div style="height: 60vh; display: flex; justify-content: center; align-items: center;"><div class="loader"></div></div>`;
            this.appContent.classList.remove('fade-in');

            let htmlValue;
            
            if (this.cache[page]) {
                htmlValue = this.cache[page];
            } else {
                // Determine file to load based on simple mapping
                // e.g. "category/abaya" -> load "pages/category.html" with context?
                let fileToLoad = `pages/${page}.html`;
                
                if (page.startsWith('category')) {
                    fileToLoad = 'pages/category.html';
                } else if (page.startsWith('product')) {
                    fileToLoad = 'pages/product.html';
                }

                try {
                    const response = await fetch(fileToLoad);
                    if (!response.ok) throw new Error('Page not found locally or CORS issue');
                    htmlValue = await response.text();
                    this.cache[page] = htmlValue;
                } catch(fetchErr) {
                    console.error("Fetch failed", fetchErr);
                    // Fallback for CORS issues when running from file://
                    htmlValue = this.getOfflineFallback(page, fileToLoad);
                }
            }

            // Inject Content
            this.appContent.innerHTML = htmlValue;
            
            // Trigger animation and update URL state
            setTimeout(() => {
                this.appContent.classList.add('fade-in');
            }, 50);

            if (pushState) {
                window.history.pushState({ page }, '', `#${page}`);
            }

            // Scroll to top upon navigation
            window.scrollTo(0, 0);

            // Emit event so app.js can re-initialize page-specific scripts (like sliders)
            document.dispatchEvent(new CustomEvent('pageLoaded', { detail: { page } }));

        } catch (err) {
            console.error('Routing Error:', err);
            this.appContent.innerHTML = `<div class="container section-padding text-center">
                <h2>Page could not be loaded</h2>
                <p>Ensure you are running a local server to avoid CORS issues.</p>
                <a href="#" data-link="home" class="btn-primary" style="margin-top: 2rem;">Return Home</a>
            </div>`;
        }
    }

    getOfflineFallback(page, fileToLoad) {
        // If the user runs without a web server (file:// directly), fetch will fail.
        // Returning a placeholder that explains the issue clearly.
        return `
        <div class="container section-padding text-center">
            <h2>Local File Access Error (CORS)</h2>
            <p style="margin: 1rem 0; color: var(--light-text);">
                You are opening this direct HTML file (file:///) without a web server, so JavaScript cannot load the ${fileToLoad} fragment. 
            </p>
            <p><strong>To fix for testing:</strong></p>
            <ul style="margin: 1rem auto; text-align: left; max-width: 400px; line-height: 1.8;">
                <li>• Use VS Code "Live Server" extension</li>
                <li>• Or run Python in this folder: <code>python -m http.server</code></li>
                <li>• Or deploy to Netlify, where it will work perfectly.</li>
            </ul>
        </div>`;
    }
}

// Global instance
window.appRouter = new Router();

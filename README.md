# JENNAH Boutique — Modest Fashion E-Commerce Website

![JENNAH Boutique](https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=1200&q=80)

A **pixel-perfect, high-performance Single Page Application (SPA)** replicating the [JENNAH Boutique](https://jennah-boutique.com/) website — a premium modest fashion brand based in Paris, France.

> 🛍️ **Live Demo**: [View on GitHub Pages](https://PusonDev.github.io/Jennah-Boutique)

---

## 🌟 Features

- ✅ **Full SPA Architecture** — Zero page reloads, smooth client-side navigation
- ✅ **Mega Menu Navigation** — Hover-triggered mega menus for PRINTEMPS, HIJAB, ALL CLOTHING, SALE & EXPLORE
- ✅ **Product Catalog** — Dynamic product grid with category filtering
- ✅ **Product Detail Page** — Gallery, size selectors, color swatches, accordion details
- ✅ **Sliding Cart Drawer** — Smooth animated cart panel with overlay
- ✅ **Search Overlay** — Full-screen search with keyboard shortcut (ESC)
- ✅ **Mobile Responsive** — Mobile-first hamburger menu & full responsive layout
- ✅ **Brand Story Page** — About the brand, history, and values
- ✅ **Store Locator** — Physical store details with hours
- ✅ **FAQ Page** — Accordion-style frequently asked questions
- ✅ **Newsletter Signup** — Email subscription in footer
- ✅ **SEO Optimised** — Proper meta tags, semantic HTML, robots.txt, sitemap.xml
- ✅ **Browser History API** — URL updates on navigation (pushState)

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure & SPA shell |
| **CSS3** | Custom design system, animations, responsive grid |
| **Vanilla JavaScript** | SPA router, cart logic, product rendering |
| **Google Fonts** | Montserrat typeface |
| **Unsplash API** | Product & editorial imagery |

**No frameworks. No build tools. No dependencies.** Pure HTML/CSS/JS — runs instantly in any browser.

---

## 📁 Project Structure

```
Jennah-Boutique/
├── index.html              # Main SPA shell (all pages embedded)
├── assets/
│   ├── css/
│   │   ├── main.css        # Core design system & component styles
│   │   └── responsive.css  # Responsive breakpoints
│   └── js/
│       ├── app.js          # App initialization & global interactions
│       ├── router.js       # SPA client-side router
│       └── cart.js         # Cart drawer logic
├── components/
│   ├── header.html         # Reusable header component
│   └── footer.html         # Reusable footer component
├── pages/
│   ├── home.html           # Home page content
│   ├── category.html       # Category/collection page
│   ├── product.html        # Product detail page
│   ├── brand.html          # Brand story page
│   └── stores.html         # Store locator page
├── robots.txt              # SEO robots configuration
├── sitemap.xml             # XML sitemap for search engines
└── README.md
```

---

## 🚀 Getting Started

### Run Locally

This is a pure static website. Simply open it in a browser:

**Option 1 — VS Code Live Server (Recommended)**
1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → **Open with Live Server**

**Option 2 — Python HTTP Server**
```bash
cd "Jennah-Boutique"
python -m http.server 8000
# Then open http://localhost:8000
```

**Option 3 — Node.js**
```bash
npx serve .
```

> ⚠️ Do NOT open `index.html` directly via `file://` — use a local server to avoid CORS issues with component loading.

---

## 📱 Pages & Routes

| Route | Page |
|---|---|
| `/en` | Home |
| `/en/collections/all-clothing` | All Clothing |
| `/en/collections/hijab` | Hijab Collection |
| `/en/collections/printemps` | Spring Collection |
| `/en/collections/sale` | Sale |
| `/en/pages/brand` | Brand Story |
| `/en/pages/stores` | Our Stores |
| `/en/pages/faq` | FAQ |

---

## 🎨 Design System

### Color Palette
```css
--black:      #1c1c1c   /* Primary text & CTA */
--white:      #ffffff   /* Backgrounds */
--light:      #f7f7f7   /* Secondary backgrounds */
--border:     #e8e8e8   /* Borders & dividers */
--text-muted: #888888   /* Secondary text */
```

### Typography
- **Font**: Montserrat (Google Fonts)
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

---

## 🌍 Brand Info

**JENNAH** is a real modest fashion brand founded in 2014 by Myriam Atallah in Paris, France. Their collections blend Tunisian, Algerian, and Parisian aesthetics into timeless modest fashion pieces.

- 📍 **Store 1**: 86, Rue des Cités, 93300 Aubervilliers
- 📍 **Store 2**: Noisy-le-Sec (opened 2024)
- 🌐 **Official site**: [jennah-boutique.com](https://jennah-boutique.com)

---

## 👨‍💻 Developer

Built with ❤️ by **Baba Puson** as part of a portfolio project demonstrating pixel-perfect frontend replication skills.

- 🔗 GitHub: [@PusonDev](https://github.com/PusonDev)

---

## 📄 License

This project is for **educational and portfolio purposes only**. All brand assets, content, and imagery belong to JENNAH Boutique. This is not an official product.

---

*© 2026 — All Rights Reserved to Baba Puson*

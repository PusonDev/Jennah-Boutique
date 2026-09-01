/**
 * JENNAH BOUTIQUE — MASTER PRODUCT CATALOG (HALAL & MODEST)
 * 100% Halal, modest Islamic fashion imagery (full coverage abayas, proper hijabs, elegant modest suits).
 * Zero non-halal / revealing content.
 */

const PRODUCTS_DATA = [
  {
    id: 'kairouan-khaki',
    name: 'Kairouan Pleated Crepe Abaya Olive',
    frenchName: 'Abaya Kairouan Crêpe Plissée Kaki Olive',
    price: 64,
    sale: 54,
    rating: 4.9,
    reviewCount: 48,
    cat: 'dresses',
    subcat: 'printemps',
    badge: 'BESTSELLER',
    isNew: false,
    soldOut: false,
    img: 'assets/images/abaya_kairouan_olive.jpg',
    gallery: [
      'assets/images/abaya_kairouan_olive.jpg',
      'assets/images/hero_modest_paris.jpg'
    ],
    colors: [
      { name: 'Khaki Olive', hex: '#6e6955', img: 'assets/images/abaya_kairouan_olive.jpg' },
      { name: 'Taupe Sable', hex: '#b3a28f', img: 'assets/images/abaya_epure_medina.jpg' },
      { name: 'Perle Crème', hex: '#f0ece1', img: 'assets/images/abaya_dubai_pearl.jpg' }
    ],
    sizes: ['Taille 1 (1m55-1m65)', 'Taille 2 (1m65-1m74)', 'Taille 3 (1m75+)'],
    material: '100% Premium Woven Crepe (Non-Transparent)',
    origin: 'Handcrafted in Bursa Atelier, Turkey',
    desc: 'The Kairouan abaya combines fluid luxury crepe with delicate vertical pleating down the front panels. Featuring a discrete mandarin collar, hidden snap buttons, and smocked stretch cuffs tailored for graceful modest draping and easy ablution.',
    details: 'Full floor-length modest drape with zero transparency. Machine wash on 30°C delicate cycle in a wash pouch. Steam lightly.',
    look: {
      name: 'Modal Silk Hijab Champagne Nude',
      price: 22,
      img: 'assets/images/hijab_modal_silk.jpg'
    }
  },
  {
    id: 'epure-taupe-abaya',
    name: 'Épure Signature Medina Silk Abaya Taupe',
    frenchName: 'Abaya Signature Épure Soie de Médine Taupe',
    price: 89,
    sale: null,
    rating: 5.0,
    reviewCount: 62,
    cat: 'dresses',
    subcat: 'printemps',
    badge: 'ICONIC',
    isNew: true,
    soldOut: false,
    img: 'assets/images/abaya_epure_medina.jpg',
    gallery: [
      'assets/images/abaya_epure_medina.jpg',
      'assets/images/hero_modest_paris.jpg'
    ],
    colors: [
      { name: 'Taupe Sable', hex: '#b3a28f', img: 'assets/images/abaya_epure_medina.jpg' },
      { name: 'Khaki Olive', hex: '#6e6955', img: 'assets/images/abaya_kairouan_olive.jpg' },
      { name: 'Perle Crème', hex: '#f0ece1', img: 'assets/images/abaya_dubai_pearl.jpg' }
    ],
    sizes: ['Taille 1 (1m55-1m65)', 'Taille 2 (1m65-1m74)', 'Taille 3 (1m75+)'],
    material: '100% Authentic Medina Silk (Soie de Médine)',
    origin: 'Crafted in Istanbul, Turkey',
    desc: 'Our iconic Épure abaya represents the pinnacle of Parisian modest minimalism. Cut from dense, non-transparent Medina Silk known for its pearlescent luster and cloud-like drape, this timeless piece transitions effortlessly from everyday elegance to celebratory gatherings.',
    details: 'Includes removable matching sash belt and deep side pockets. Hand wash cold or dry clean for optimal silk longevity.',
    look: {
      name: 'Premium Jersey Hijab Sand & Mocha',
      price: 18,
      img: 'assets/images/hijab_jersey_sand.jpg'
    }
  },
  {
    id: 'dubai-silk-kimono',
    name: 'Dubai Pearl Nida Open Abaya & Belt',
    frenchName: 'Abaya Dubaï Nida Perlé avec Ceinture Assortie',
    price: 95,
    sale: 79,
    rating: 4.9,
    reviewCount: 41,
    cat: 'dresses',
    subcat: 'printemps',
    badge: 'CEREMONY',
    isNew: true,
    soldOut: false,
    img: 'assets/images/abaya_dubai_pearl.jpg',
    gallery: [
      'assets/images/abaya_dubai_pearl.jpg',
      'assets/images/hero_modest_paris.jpg'
    ],
    colors: [
      { name: 'Perle Crème', hex: '#f0ece1', img: 'assets/images/abaya_dubai_pearl.jpg' },
      { name: 'Taupe Sable', hex: '#b3a28f', img: 'assets/images/abaya_epure_medina.jpg' },
      { name: 'Khaki Olive', hex: '#6e6955', img: 'assets/images/abaya_kairouan_olive.jpg' }
    ],
    sizes: ['Taille 1 (1m55-1m65)', 'Taille 2 (1m65-1m74)', 'Taille 3 (1m75+)'],
    material: '100% Pure Korean Nida Fabric (High-Density)',
    origin: 'Crafted in Dubai Atelier Workshops',
    desc: 'Crafted from authentic high-density Korean Nida fabric, renowned for its matte pearl texture, cooling thermal properties, and fluid modest movement. Finished with delicate hand-stitched cuffs and matching inner dress compatibility.',
    details: 'Includes removable matching sash belt. Hand wash cold.',
    look: {
      name: 'Modal Silk Hijab Champagne Nude',
      price: 22,
      img: 'assets/images/hijab_modal_silk.jpg'
    }
  },
  {
    id: 'origin-dress-kaki',
    name: 'Origin Kimono Open Abaya Sage',
    frenchName: 'Kimono Abaya Origin Lin Sauge Cordon Ceinturé',
    price: 78,
    sale: 65,
    rating: 4.9,
    reviewCount: 28,
    cat: 'dresses',
    subcat: 'printemps',
    badge: 'POPULAR',
    isNew: false,
    soldOut: false,
    img: 'assets/images/dress_kimono_origin.jpg',
    gallery: [
      'assets/images/dress_kimono_origin.jpg',
      'assets/images/abaya_kairouan_olive.jpg'
    ],
    colors: [
      { name: 'Sauge Céladon', hex: '#879780', img: 'assets/images/dress_kimono_origin.jpg' },
      { name: 'Taupe Sable', hex: '#b3a28f', img: 'assets/images/abaya_epure_medina.jpg' }
    ],
    sizes: ['Taille 1 (1m55-1m65)', 'Taille 2 (1m65-1m74)', 'Taille 3 (1m75+)'],
    material: 'Rich Textured Linen-Cotton Weave',
    origin: 'Crafted in Istanbul Atelier',
    desc: 'Kimono-inspired floor-length modest abaya with structured kimono bell sleeves, optional waist sash cord, and opulent natural slub texture. Wear open over modest coordinates or tied at the waist.',
    details: 'Includes removable fabric cord belt. Dry clean or gentle cold wash.',
    look: {
      name: 'Premium Jersey Hijab Sand & Mocha',
      price: 18,
      img: 'assets/images/hijab_jersey_sand.jpg'
    }
  },
  {
    id: 'set-two-pieces-linen',
    name: 'Ensemble Lin 2 Pièces Écru Modest',
    frenchName: 'Ensemble Deux Pièces en Lin Écru Tunique & Pantalon',
    price: 98,
    sale: 89,
    rating: 5.0,
    reviewCount: 45,
    cat: 'sets',
    subcat: 'set-two-pieces',
    badge: 'ELEGANCE',
    isNew: true,
    soldOut: false,
    img: 'assets/images/ensemble_linen_ecru.jpg',
    gallery: [
      'assets/images/ensemble_linen_ecru.jpg',
      'assets/images/tshirt_oversize_paris.jpg'
    ],
    colors: [
      { name: 'Écru Naturel', hex: '#ede7db', img: 'assets/images/ensemble_linen_ecru.jpg' },
      { name: 'Taupe Sable', hex: '#b3a28f', img: 'assets/images/abaya_epure_medina.jpg' }
    ],
    sizes: ['Taille 1 (36-40)', 'Taille 2 (42-46)', 'Taille 3 (46-50)'],
    material: '70% French Linen, 30% Organic Cotton',
    origin: 'Made in Portugal',
    desc: 'A coordinated two-piece set featuring a modest tunic with side splits and straight-cut palazzo trousers. Tailored from premium European breathable linen, ensuring optimal airflow on warm days.',
    details: 'Elastic waistband for maximum comfort. Hand wash cold or 30°C wool program.',
    look: {
      name: 'Premium Jersey Hijab Sand & Mocha',
      price: 18,
      img: 'assets/images/hijab_jersey_sand.jpg'
    }
  },
  {
    id: 'oversize-tshirt-spring',
    name: 'Le T-Shirt Oversize French Organic Cotton',
    frenchName: 'Le T-Shirt Oversize Coton Biologique Blanc',
    price: 42,
    sale: 36,
    rating: 4.8,
    reviewCount: 39,
    cat: 'top',
    subcat: 'oversize-tshirt',
    badge: 'NEW DROP',
    isNew: true,
    soldOut: false,
    img: 'assets/images/tshirt_oversize_paris.jpg',
    gallery: [
      'assets/images/tshirt_oversize_paris.jpg',
      'assets/images/ensemble_linen_ecru.jpg'
    ],
    colors: [
      { name: 'Blanc Pur', hex: '#fdfdfd', img: 'assets/images/tshirt_oversize_paris.jpg' },
      { name: 'Écru Naturel', hex: '#ede7db', img: 'assets/images/ensemble_linen_ecru.jpg' }
    ],
    sizes: ['XS/S (Oversized)', 'M/L (Oversized)', 'XL/XXL (Oversized)'],
    material: '100% Heavyweight Organic French Terry Cotton (240 GSM)',
    origin: 'Designed in Paris, Knitted in Guimarães, Portugal',
    desc: 'Engineered specifically for modest layering with an elongated curved back hem, dropped boxy shoulders, and high ribbed crewneck. Embroidered tone-on-tone JENNAH emblem on the nape.',
    details: 'Pre-shrunk organic yarn. Machine wash at 30°C with similar colors.',
    look: {
      name: 'Ensemble Lin 2 Pièces Écru Modest',
      price: 89,
      img: 'assets/images/ensemble_linen_ecru.jpg'
    }
  },
  {
    id: 'premium-jersey-hijab',
    name: 'Premium Jersey Hijab Sand & Earth Tones',
    frenchName: 'Hijab Premium Jersey Douceur Teintes Terre',
    price: 18,
    sale: null,
    rating: 5.0,
    reviewCount: 112,
    cat: 'hijab',
    subcat: 'premium-jersey',
    badge: 'FAVORITE',
    isNew: false,
    soldOut: false,
    img: 'assets/images/hijab_jersey_sand.jpg',
    gallery: [
      'assets/images/hijab_jersey_sand.jpg',
      'assets/images/hijab_modal_silk.jpg'
    ],
    colors: [
      { name: 'Sable Nude', hex: '#c5b49e', img: 'assets/images/hijab_jersey_sand.jpg' },
      { name: 'Moka Chaud', hex: '#775742', img: 'assets/images/hijab_jersey_sand.jpg' },
      { name: 'Gris Taupe', hex: '#877c73', img: 'assets/images/hijab_jersey_sand.jpg' },
      { name: 'Crème Vanille', hex: '#f7f2e9', img: 'assets/images/hijab_jersey_sand.jpg' }
    ],
    sizes: ['185 x 75 cm (Maxi Modest Size)'],
    material: '95% Micro-Modal Rayon Jersey, 5% Lycra',
    origin: 'Made in Istanbul, Turkey',
    desc: 'Our bestselling stretch jersey hijab. Formulated with ultra-soft modal threads and laser-cut edges for a flawless non-slip drape without need for safety pins or tight underscarves.',
    details: 'Dimension: 185cm x 75cm for generous modest coverage. Hand wash or gentle cycle 30°C.',
    look: {
      name: 'Épure Signature Medina Silk Abaya Taupe',
      price: 89,
      img: 'assets/images/abaya_epure_medina.jpg'
    }
  },
  {
    id: 'modal-silk-hijab',
    name: 'Modal Silk Hijab Champagne Nude',
    frenchName: 'Hijab Soie de Modal Douceur Champagne',
    price: 22,
    sale: null,
    rating: 5.0,
    reviewCount: 94,
    cat: 'hijab',
    subcat: 'modal-hijab',
    badge: 'LUXURY',
    isNew: true,
    soldOut: false,
    img: 'assets/images/hijab_modal_silk.jpg',
    gallery: [
      'assets/images/hijab_modal_silk.jpg',
      'assets/images/hijab_jersey_sand.jpg'
    ],
    colors: [
      { name: 'Champagne Gold', hex: '#decbb6', img: 'assets/images/hijab_modal_silk.jpg' },
      { name: 'Rose Poudré', hex: '#d9b6b6', img: 'assets/images/hijab_modal_silk.jpg' },
      { name: 'Bronze Satin', hex: '#9d7c54', img: 'assets/images/hijab_modal_silk.jpg' }
    ],
    sizes: ['195 x 75 cm (Maxi Modest Size)'],
    material: '85% Austrian Micro-Modal, 15% Mulberry Silk',
    origin: 'Crafted in Istanbul, Turkey',
    desc: 'Lustrous modal interwoven with pure mulberry silk threads for a subtle satin sheen, breathable softness, and effortless modest drape that stays securely in place all day.',
    details: 'Dimension: 195cm x 75cm. Delicate hand wash recommended.',
    look: {
      name: 'Dubai Pearl Nida Open Abaya & Belt',
      price: 79,
      img: 'assets/images/abaya_dubai_pearl.jpg'
    }
  },
  {
    id: 'prayer-dress-white',
    name: 'All-in-One Prayer Abaya & Integrated Hijab',
    frenchName: 'Robe de Prière Intégrée avec Hijab Blanc Nacré',
    price: 45,
    sale: 39,
    rating: 5.0,
    reviewCount: 88,
    cat: 'prayer-set',
    subcat: 'sets',
    badge: 'ESSENTIAL',
    isNew: false,
    soldOut: false,
    img: 'assets/images/prayer_abaya_white.jpg',
    gallery: [
      'assets/images/prayer_abaya_white.jpg',
      'assets/images/abaya_dubai_pearl.jpg'
    ],
    colors: [
      { name: 'Blanc Pur', hex: '#fbfbfb', img: 'assets/images/prayer_abaya_white.jpg' }
    ],
    sizes: ['Taille Unique (Fits 1m55 to 1m78)'],
    material: '100% Cloud-Soft Rayon Voile',
    origin: 'Ethically produced in Medina Workshops',
    desc: 'Designed for sacred moments and effortless travel. This all-in-one prayer outfit features an attached full-coverage headscarf, stretch ablution cuffs, and a matching zipped travel pouch.',
    details: 'Non-see-through, breathable voile. Includes travel pouch. Machine wash 30°C.',
    look: {
      name: 'Modal Silk Hijab Champagne Nude',
      price: 22,
      img: 'assets/images/hijab_modal_silk.jpg'
    }
  },
  {
    id: 'burkini-swimwear-noir',
    name: 'Burkini Riviera 3-Piece Modest Swimwear',
    frenchName: 'Burkini Modeste 3 Pièces Riviera Noir',
    price: 85,
    sale: 75,
    rating: 4.9,
    reviewCount: 34,
    cat: 'burkini',
    subcat: 'printemps',
    badge: 'UV50+ SHIELD',
    isNew: true,
    soldOut: false,
    img: 'assets/images/burkini_riviera_noir.jpg',
    gallery: [
      'assets/images/burkini_riviera_noir.jpg'
    ],
    colors: [
      { name: 'Noir Riviera', hex: '#1c1c1c', img: 'assets/images/burkini_riviera_noir.jpg' }
    ],
    sizes: ['S (36)', 'M (38/40)', 'L (42/44)', 'XL (46/48)'],
    material: '82% Quick-Dry Polyamide, 18% Elastane UV50+',
    origin: 'Made in Turkey',
    desc: 'High-performance loose-cut modest swimwear certified UPF 50+ UV sun protection. Includes a loose long-sleeved zipped swim tunic, relaxed pants, and a full-coverage modest hijab hood.',
    details: 'Chlorine and saltwater resistant. Quick-drying hydro-repellent finish. Rinse in fresh water after use.',
    look: {
      name: 'Modal Silk Hijab Champagne Nude',
      price: 22,
      img: 'assets/images/hijab_modal_silk.jpg'
    }
  }
];

// Global lookup helpers
window.JENNAH_PRODUCTS = PRODUCTS_DATA;

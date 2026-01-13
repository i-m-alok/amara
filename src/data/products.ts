export type Category = 'bouquets' | 'mini-bouquets' | 'candles' | 'gift-sets';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: string;
  image: string;
  description: string;
  features?: string[];
  featured: boolean;
}

export const products: Product[] = [
  // Bouquets
  {
    id: 1,
    name: "Rose Elegance Bouquet",
    category: "bouquets",
    price: "₹1,299",
    image: "https://i.ibb.co/fdH9y9h0/Whats-App-Image-2026-01-11-at-9-53-17-AM.jpg",
    description: "A stunning arrangement of premium artificial roses in soft pink and cream tones, perfect for any special occasion.",
    features: [
      "Premium artificial roses",
      "Handcrafted with care",
      "Long-lasting beauty",
      "Elegant wrapping included"
    ],
    featured: true
  },
  {
    id: 2,
    name: "Daisy Dream Arrangement",
    category: "bouquets",
    price: "₹999",
    image: "https://i.ibb.co/nMFSFzB0/Whats-App-Image-2026-01-11-at-9-53-19-AM.jpg",
    description: "Fresh and cheerful daisy arrangement that brings joy to any space with its vibrant colors.",
    features: [
      "Bright daisy blooms",
      "Natural-looking stems",
      "Weather-resistant",
      "Easy to maintain"
    ],
    featured: false
  },
  {
    id: 3,
    name: "Basket Flower Collection",
    category: "bouquets",
    price: "₹1,599",
    image: "https://i.ibb.co/FLyHcG9c/Whats-App-Image-2026-01-11-at-9-53-28-AM.jpg",
    description: "An exquisite basket filled with mixed flowers creating a delightful centerpiece for your home.",
    features: [
      "Mixed flower varieties",
      "Beautiful wicker basket",
      "Perfect for gifting",
      "Handcrafted arrangement"
    ],
    featured: true
  },
  
  // Mini Bouquets
  {
    id: 4,
    name: "Mini Pink Delight",
    category: "mini-bouquets",
    price: "₹499",
    image: "https://i.ibb.co/8nfMHGkS/Whats-App-Image-2026-01-11-at-9-53-17-AM-1.jpg",
    description: "Adorable mini bouquet perfect for desks, bedside tables, or as a sweet gesture of appreciation.",
    features: [
      "Compact size",
      "Perfect for small spaces",
      "Elegant pink tones",
      "Ready to display"
    ],
    featured: false
  },
  {
    id: 5,
    name: "Mini Mug Bouquet",
    category: "mini-bouquets",
    price: "₹599",
    image: "https://i.ibb.co/F4h3D65N/Whats-App-Image-2026-01-11-at-9-53-18-AM.jpg",
    description: "Charming flowers arranged in a decorative mug, combining functionality with beauty.",
    features: [
      "Includes ceramic mug",
      "Dual-purpose gift",
      "Compact design",
      "Various color options"
    ],
    featured: true
  },
  {
    id: 6,
    name: "Wrapped Mini Bouquet",
    category: "mini-bouquets",
    price: "₹449",
    image: "https://i.ibb.co/zTtQcMG6/Whats-App-Image-2026-01-11-at-9-53-19-AM-1.jpg",
    description: "Elegantly wrapped mini bouquet, perfect for expressing thoughtfulness in a simple way.",
    features: [
      "Beautiful gift wrapping",
      "Budget-friendly",
      "Perfect for any occasion",
      "Lightweight and portable"
    ],
    featured: false
  },
  {
    id: 7,
    name: "Mini Blooms Basket",
    category: "mini-bouquets",
    price: "₹549",
    image: "https://i.ibb.co/k6JH2P6t/Whats-App-Image-2026-01-11-at-9-53-20-AM-1.jpg",
    description: "Delicate mini flowers in a charming small basket, ideal for adding a touch of nature to any corner.",
    features: [
      "Miniature basket included",
      "Perfect desk accessory",
      "Low maintenance",
      "Adorable design"
    ],
    featured: true
  },
  {
    id: 8,
    name: "Petite Garden Mix",
    category: "mini-bouquets",
    price: "₹475",
    image: "https://i.ibb.co/9mYKgS1Q/Whats-App-Image-2026-01-11-at-9-53-20-AM.jpg",
    description: "A delightful mix of mini flowers creating a garden-fresh aesthetic in compact form.",
    features: [
      "Mixed flower varieties",
      "Space-saving design",
      "Vibrant colors",
      "Easy placement"
    ],
    featured: false
  },
  {
    id: 9,
    name: "Mini Sunshine Bunch",
    category: "mini-bouquets",
    price: "₹425",
    image: "https://i.ibb.co/ympX6s48/Whats-App-Image-2026-01-11-at-9-53-21-AM-1.jpg",
    description: "Bright and cheerful mini bouquet that brings sunshine to your day.",
    features: [
      "Cheerful yellow tones",
      "Mood-lifting colors",
      "Perfect gift size",
      "Instant charm"
    ],
    featured: false
  },
  {
    id: 10,
    name: "Sweet Mini Roses",
    category: "mini-bouquets",
    price: "₹495",
    image: "https://i.ibb.co/sv70FrVY/Whats-App-Image-2026-01-11-at-9-53-21-AM-2.jpg",
    description: "Adorable mini roses arranged to perfection, ideal for expressing love in a subtle way.",
    features: [
      "Miniature roses",
      "Romantic gesture",
      "Delicate appearance",
      "Gift-ready"
    ],
    featured: true
  },
  {
    id: 11,
    name: "Pocket Bouquet",
    category: "mini-bouquets",
    price: "₹399",
    image: "https://i.ibb.co/XZN2s2y8/Whats-App-Image-2026-01-11-at-9-53-21-AM.jpg",
    description: "Ultra-compact bouquet that fits anywhere, perfect for tight spaces.",
    features: [
      "Ultra-compact",
      "Budget-friendly",
      "Versatile placement",
      "Cute and charming"
    ],
    featured: false
  },
  {
    id: 12,
    name: "Mini Pastel Dreams",
    category: "mini-bouquets",
    price: "₹525",
    image: "https://i.ibb.co/v62xGYVf/Whats-App-Image-2026-01-11-at-9-53-22-AM.jpg",
    description: "Soft pastel flowers in a mini arrangement that adds elegance to any setting.",
    features: [
      "Pastel color palette",
      "Calming aesthetic",
      "Perfect for gifting",
      "Handpicked blooms"
    ],
    featured: false
  },
  {
    id: 13,
    name: "Tiny Treasures Bouquet",
    category: "mini-bouquets",
    price: "₹450",
    image: "https://i.ibb.co/dskW31Xr/Whats-App-Image-2026-01-11-at-9-53-23-AM-1.jpg",
    description: "A collection of tiny treasures bundled together to create a precious mini bouquet.",
    features: [
      "Unique flower selection",
      "Artistic arrangement",
      "Conversation starter",
      "Memorable gift"
    ],
    featured: false
  },
  {
    id: 14,
    name: "Mini Elegance Wrap",
    category: "mini-bouquets",
    price: "₹475",
    image: "https://i.ibb.co/PvNk8Skt/Whats-App-Image-2026-01-11-at-9-53-23-AM.jpg",
    description: "Elegantly wrapped mini flowers that make a sophisticated statement.",
    features: [
      "Premium wrapping",
      "Sophisticated look",
      "Perfect presentation",
      "Gift-ready"
    ],
    featured: true
  },
  {
    id: 15,
    name: "Blossom Bites",
    category: "mini-bouquets",
    price: "₹425",
    image: "https://i.ibb.co/S4mRWWHY/Whats-App-Image-2026-01-11-at-9-53-25-AM.jpg",
    description: "Bite-sized beauty in floral form, perfect for spreading joy in small doses.",
    features: [
      "Adorable sizing",
      "Multiple uses",
      "Affordable beauty",
      "Easy gifting"
    ],
    featured: false
  },
  {
    id: 16,
    name: "Mini Meadow Mix",
    category: "mini-bouquets",
    price: "₹495",
    image: "https://i.ibb.co/hRSkb8bt/Whats-App-Image-2026-01-11-at-9-53-27-AM-1.jpg",
    description: "A meadow-inspired mini bouquet bringing wildflower charm indoors.",
    features: [
      "Wildflower style",
      "Natural aesthetic",
      "Rustic charm",
      "Bohemian vibe"
    ],
    featured: false
  },
  {
    id: 17,
    name: "Dainty Delight",
    category: "mini-bouquets",
    price: "₹450",
    image: "https://i.ibb.co/fz4CkXtF/Whats-App-Image-2026-01-11-at-9-53-27-AM-2.jpg",
    description: "Dainty flowers arranged with care for those who appreciate subtle beauty.",
    features: [
      "Delicate arrangement",
      "Subtle beauty",
      "Refined taste",
      "Gentle colors"
    ],
    featured: false
  },
  {
    id: 18,
    name: "Mini Wonder",
    category: "mini-bouquets",
    price: "₹475",
    image: "https://i.ibb.co/Cp4gbc7b/Whats-App-Image-2026-01-11-at-9-53-27-AM.jpg",
    description: "A wonderful surprise in miniature form, bursting with color and life.",
    features: [
      "Colorful blooms",
      "Eye-catching",
      "Joyful presentation",
      "Instant smile"
    ],
    featured: true
  },
  {
    id: 19,
    name: "Petite Perfection",
    category: "mini-bouquets",
    price: "₹525",
    image: "https://i.ibb.co/5WFkYg1Q/Whats-App-Image-2026-01-11-at-9-53-28-AM-1.jpg",
    description: "Perfectly crafted mini bouquet showcasing attention to every detail.",
    features: [
      "Meticulous crafting",
      "Premium quality",
      "Perfect proportions",
      "Designer touch"
    ],
    featured: false
  },
  {
    id: 20,
    name: "Mini Spring Joy",
    category: "mini-bouquets",
    price: "₹450",
    image: "https://i.ibb.co/LDFCqBCX/Whats-App-Image-2026-01-11-at-9-53-28-AM-2.jpg",
    description: "Capturing the essence of spring in a mini bouquet full of fresh energy.",
    features: [
      "Spring-inspired",
      "Fresh appearance",
      "Uplifting colors",
      "Seasonal charm"
    ],
    featured: false
  },
  
  // Candles
  {
    id: 21,
    name: "Floral Serenity Candle",
    category: "candles",
    price: "₹799",
    image: "https://i.ibb.co/RTFQfJwC/Whats-App-Image-2026-01-11-at-9-53-29-AM-1.jpg",
    description: "Luxurious scented candle adorned with dried flowers, creating a peaceful ambiance in any room.",
    features: [
      "Natural soy wax",
      "Dried flower decoration",
      "Long burning time",
      "Calming fragrance"
    ],
    featured: true
  },
  {
    id: 22,
    name: "Lavender Dreams",
    category: "candles",
    price: "₹749",
    image: "https://i.ibb.co/h1W7S5yX/Whats-App-Image-2026-01-11-at-9-53-29-AM.jpg",
    description: "Soothing lavender-scented candle for relaxation and peaceful evenings.",
    features: [
      "Lavender fragrance",
      "Stress-relief properties",
      "Premium wax blend",
      "Elegant container"
    ],
    featured: false
  },
  {
    id: 23,
    name: "Vanilla Bliss Candle",
    category: "candles",
    price: "₹699",
    image: "https://i.ibb.co/wrSXbRLg/Whats-App-Image-2026-01-11-at-9-53-30-AM.jpg",
    description: "Warm vanilla-scented candle that fills your space with cozy, sweet aromas.",
    features: [
      "Pure vanilla scent",
      "Warm ambiance",
      "Clean burning",
      "Long-lasting"
    ],
    featured: true
  },
  {
    id: 24,
    name: "Rose Petal Glow",
    category: "candles",
    price: "₹849",
    image: "https://i.ibb.co/1txhb3FV/Whats-App-Image-2026-01-11-at-9-54-44-AM.jpg",
    description: "Romantic rose-scented candle with delicate petal decorations.",
    features: [
      "Rose fragrance",
      "Petal embellishments",
      "Romantic atmosphere",
      "Premium quality"
    ],
    featured: false
  },
  {
    id: 25,
    name: "Ocean Breeze Candle",
    category: "candles",
    price: "₹725",
    image: "https://i.ibb.co/TDQ2YfFS/Whats-App-Image-2026-01-11-at-9-54-46-AM-1.jpg",
    description: "Fresh ocean-inspired scent that brings coastal vibes to your home.",
    features: [
      "Ocean breeze scent",
      "Refreshing aroma",
      "Clean burn",
      "Coastal aesthetic"
    ],
    featured: false
  },
  {
    id: 26,
    name: "Citrus Sunrise",
    category: "candles",
    price: "₹675",
    image: "https://i.ibb.co/k2WC3LCW/Whats-App-Image-2026-01-11-at-9-54-46-AM-2.jpg",
    description: "Energizing citrus-scented candle perfect for morning rituals.",
    features: [
      "Citrus blend fragrance",
      "Energizing aroma",
      "Bright atmosphere",
      "Mood-lifting"
    ],
    featured: true
  },
  {
    id: 27,
    name: "Eucalyptus Spa Candle",
    category: "candles",
    price: "₹799",
    image: "https://i.ibb.co/r8bYrFs/Whats-App-Image-2026-01-11-at-9-54-46-AM.jpg",
    description: "Spa-like eucalyptus candle for a rejuvenating home experience.",
    features: [
      "Eucalyptus oil",
      "Spa-quality scent",
      "Therapeutic benefits",
      "Luxury feel"
    ],
    featured: false
  },
  {
    id: 28,
    name: "Cinnamon Spice Candle",
    category: "candles",
    price: "₹725",
    image: "https://i.ibb.co/tpz9pDFp/Whats-App-Image-2026-01-11-at-9-54-47-AM-1.jpg",
    description: "Warm and spicy cinnamon candle perfect for cozy winter evenings.",
    features: [
      "Cinnamon fragrance",
      "Warm and cozy",
      "Perfect for fall/winter",
      "Comforting scent"
    ],
    featured: false
  },
  {
    id: 29,
    name: "Jasmine Night Candle",
    category: "candles",
    price: "₹775",
    image: "https://i.ibb.co/spqBfPkp/Whats-App-Image-2026-01-11-at-9-54-47-AM.jpg",
    description: "Enchanting jasmine-scented candle for peaceful evening hours.",
    features: [
      "Jasmine fragrance",
      "Evening ambiance",
      "Exotic aroma",
      "Calming effect"
    ],
    featured: true
  },
  {
    id: 30,
    name: "Sandalwood Zen",
    category: "candles",
    price: "₹825",
    image: "https://i.ibb.co/939x9G8d/Whats-App-Image-2026-01-11-at-9-54-48-AM-1.jpg",
    description: "Grounding sandalwood candle for meditation and mindfulness.",
    features: [
      "Sandalwood essence",
      "Meditative quality",
      "Grounding scent",
      "Premium ingredients"
    ],
    featured: false
  },
  {
    id: 31,
    name: "Coconut Paradise",
    category: "candles",
    price: "₹699",
    image: "https://i.ibb.co/BVPcPd70/Whats-App-Image-2026-01-11-at-9-54-48-AM.jpg",
    description: "Tropical coconut-scented candle that transports you to paradise.",
    features: [
      "Coconut fragrance",
      "Tropical vibes",
      "Vacation mood",
      "Sweet aroma"
    ],
    featured: false
  },
  
  // Gift Sets
  {
    id: 32,
    name: "Candle & Flowers Gift Set",
    category: "gift-sets",
    price: "₹1,799",
    image: "https://i.ibb.co/RTFQfJwC/Whats-App-Image-2026-01-11-at-9-53-29-AM-1.jpg",
    description: "Thoughtfully curated gift set combining our finest candles with a beautiful flower arrangement.",
    features: [
      "Premium candle included",
      "Flower arrangement",
      "Elegant gift box",
      "Perfect for special occasions"
    ],
    featured: true
  },
  {
    id: 33,
    name: "Mini Bouquet Collection",
    category: "gift-sets",
    price: "₹1,299",
    image: "https://i.ibb.co/8nfMHGkS/Whats-App-Image-2026-01-11-at-9-53-17-AM-1.jpg",
    description: "A delightful set of three mini bouquets, perfect for decorating multiple spaces.",
    features: [
      "3 mini bouquets",
      "Variety of colors",
      "Beautiful packaging",
      "Great value"
    ],
    featured: false
  },
  {
    id: 34,
    name: "Luxury Candle Collection",
    category: "gift-sets",
    price: "₹2,199",
    image: "https://i.ibb.co/h1W7S5yX/Whats-App-Image-2026-01-11-at-9-53-29-AM.jpg",
    description: "Premium collection of handcrafted candles in various scents, beautifully packaged for gifting.",
    features: [
      "5 unique scents",
      "Premium wax blend",
      "Luxury gift box",
      "Extended burn time"
    ],
    featured: true
  }
];

export const categories = [
  {
    id: 'all',
    name: 'All Products',
    description: 'Browse our complete collection'
  },
  {
    id: 'bouquets',
    name: 'Bouquets',
    description: 'Elegant artificial flower arrangements',
    image: 'https://i.ibb.co/fdH9y9h0/Whats-App-Image-2026-01-11-at-9-53-17-AM.jpg'
  },
  {
    id: 'mini-bouquets',
    name: 'Mini Bouquets',
    description: 'Perfect for small spaces',
    image: 'https://i.ibb.co/8nfMHGkS/Whats-App-Image-2026-01-11-at-9-53-17-AM-1.jpg'
  },
  {
    id: 'candles',
    name: 'Candles',
    description: 'Luxurious scented candles',
    image: 'https://i.ibb.co/RTFQfJwC/Whats-App-Image-2026-01-11-at-9-53-29-AM-1.jpg'
  },
  {
    id: 'gift-sets',
    name: 'Gift Sets',
    description: 'Curated gifting collections',
    image: 'https://i.ibb.co/RTFQfJwC/Whats-App-Image-2026-01-11-at-9-53-29-AM-1.jpg'
  }
];

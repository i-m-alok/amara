# Gift Boutique Catalogue Website - Project Prompt

## Project Overview
Create a single-page catalogue website for a premium gift boutique specializing in handcrafted bouquets, candles, and gift items. The website should serve as an elegant digital brochure with a focus on visual presentation and brand aesthetics.

Reference: https://amara-gifts.lovable.app/

---

## Core Requirements

### ⚠️ Important Constraints
- **NOT an e-commerce site** - No shopping cart, checkout, payments, or user accounts
- **Single-page design** - All content on one page with smooth scrolling sections
- **Catalogue-only** - Pure digital brochure for product showcase
- **Contact-based ordering** - Users contact via WhatsApp/Email/Instagram to place orders

---

## Technical Stack

### Frontend Framework
- **React 18** with **Vite** for fast development and building
- **Single-page application** with smooth scroll navigation between sections
- **Tailwind CSS** for styling with custom theme
- Modern, clean, maintainable codebase

### Deployment
- Must be ready for **Netlify deployment**
- Include `netlify.toml` with proper configuration
- Optimized build (no routing needed for single-page)

---

## Design Requirements

### Visual Style
- **Aesthetic**: Elegant, minimal, premium, sophisticated
- **Color Palette**: 
  - Soft lavender and rose tones (primary accents)
  - Warm terracotta and brown (text and highlights)
  - Light cream and beige backgrounds
  - Sage green accents (optional)
  
- **Gradients**: Multi-color soft gradients for hero sections and CTAs
  - Hero: `linear-gradient(135deg, hsl(270 60% 95%) 0%, hsl(340 40% 95%) 50%, hsl(40 30% 96%) 100%)`
  - Accent: `linear-gradient(135deg, hsl(270 50% 65%) 0%, hsl(340 50% 75%) 100%)`

- **Typography**:
  - Headings: "Cormorant Garamond", serif
  - Body: "Quicksand", sans-serif
  - Emphasis on readability and elegance

- **UI Elements**:
  - Soft shadows and glows
  - Smooth hover effects and transitions
  - Rounded corners for cards and buttons
  - Image-first layout with high-quality product photos

### Responsive Design
- Fully responsive for mobile, tablet, and desktop
- Mobile-first approach
- Touch-friendly navigation
- Optimized images with lazy loading

---

## Section Structure

All sections are part of a single scrollable page with smooth navigation.

### 1. Hero Section (Main Section)
**Layout:**
- Brand logo: `amara-logo.png` (centered, large and prominent)
- Subtext: "Handcrafted with Love" (below logo, elegant script or light font)
- Main Heading: "Exquisite Gifts for Every Occasion" (large, serif font - Cormorant Garamond)
- Description: "Discover our curated collection of artificial bouquets, decorative candles, and unique gift items crafted to bring joy and elegance to your special moments."
- Primary CTA: "View Products" (scrolls to catalogue section)
- Secondary CTA: "Get in Touch" (scrolls to contact section)
- Full viewport height
- **Background**: Use hero gradient `linear-gradient(135deg, hsl(270 60% 95%) 0%, hsl(340 40% 95%) 50%, hsl(40 30% 96%) 100%)`
- All content centered vertically and horizontally
- Elegant spacing between elements

### 2. Featured Categories Section
**Layout:**
- Section heading: "Browse by Category"
- 4 category cards with images and descriptions:
  - Bouquets: "Elegant artificial flower arrangements"
  - Mini Bouquets: "Perfect for small spaces"
  - Candles: "Luxurious scented candles"
  - Gift Sets: "Curated gifting collections"
- Click to filter products in the catalogue section below

### 3. Catalogue Section
**Layout:**
- Section heading: "Our Products"
- Category filter buttons (All, Bouquets, Mini Bouquets, Candles, Gift Sets)
- Product count display
- Smooth filtering animations

**Product Grid:**
- 3-4 columns on desktop, 1-2 on mobile
- Each product card:
  - High-quality image (lazy loaded)
  - Product name
  - Display price
  - "Featured" badge if applicable
  - Hover effects with scale and shadow
  - Click to expand product details in modal/overlay

**Product Detail Modal:**
- Overlay/modal design that opens on product click
- Large product image
- Product category tag
- Product name (large, serif)
- Display price
- Detailed description
- Product features list with checkmarks
- "Order via WhatsApp" primary button
- "Contact Us" secondary button
- Close button to return to catalogue

**Empty State:**
- Icon and message when no products match filter

### 4. About Section
**Layout:**
- Section heading: "About Amara Gifts"

**Our Story:**
- Two-column layout with text and image grid
- Brand narrative focusing on:
  - Belief in meaningful gifting
  - Premium quality and craftsmanship
  - Attention to detail
  - Emotional connection

**Our Values:**
- 3-column grid with icons
- Values: Quality Craftsmanship, Thoughtful Gifting, Personalized Service
- Each with icon, heading, and description

### 5. Contact Section
**Layout:**
- Section heading: "Get in Touch"
- Intro text: "Ready to place an order? We'd love to hear from you!"

**Contact Methods (Cards):**
- 3-column grid on desktop, stacked on mobile
- **WhatsApp Card**: Green gradient icon, phone number, "Quick responses for instant communication"
- **Email Card**: Brand color gradient icon, email address, "Detailed inquiries welcome"
- **Instagram Card**: Pink/purple gradient icon, handle, "Follow us for updates and inspiration"
- Each card is clickable and links to respective platform

**How to Place an Order:**
- 4-step process with numbered icons
- Steps: Browse → Contact → Customize → Receive
- Clear, simple instructions in a horizontal layout

**CTA:**
- Large gradient button: "Order via WhatsApp"
- Visually prominent at the bottom of the section

---

## Component Structure

### Global Components

**Header:**
- Sticky navigation bar (transparent on hero, solid on scroll)
- Logo: `amara-logo.png` (brand image, links to top)
- Navigation links with smooth scroll: Home, Products, About, Contact
- Active section indicator based on scroll position
- Mobile hamburger menu
- Smooth scroll behavior with offset for sticky header

**Footer:**
- Brand logo: `amara-logo.png` and tagline
- Quick links (navigation)
- Contact information (email, WhatsApp, Instagram)
- Social media icons with links
- Copyright notice
- Brand color scheme

**ProductCard:**
- Reusable card component
- Image with aspect ratio preservation
- Product name and price
- Featured badge (conditional)
- Hover effects with scale and shadow
- Click to open product detail modal

**ProductModal:**
- Full-screen or large centered modal overlay
- Product detail view with image, description, features
- Close button and backdrop click to dismiss
- Order CTAs (WhatsApp, Email)
- Prevents body scroll when open

---

## Data Structure

### Product Object Schema
```json
{
  "id": 1,
  "name": "Product Name",
  "category": "bouquets" | "mini-bouquets" | "candles" | "gift-sets",
  "price": "₹1,299",
  "image": "https://...",
  "description": "Detailed product description...",
  "featured": true | false
}
```

### Static Product Data
- JSON file with 12-15 sample products
- 3-4 products per category
- High-quality Unsplash images
- Realistic pricing in Indian Rupees
- Mix of featured and regular products

---

## Color Variables (CSS Custom Properties)

```css
:root {
  /* Brand Colors */
  --color-bg: #F6F0F3;           /* Light pink/beige */
  --color-brown: #4F4235;        /* Dark brown */
  --color-terracotta: #905C43;   /* Terracotta */
  --color-tan: #AA895F;          /* Tan */
  --color-mauve: #AD92A1;        /* Mauve */
  --color-sage: #A9AEA5;         /* Sage green */
  
  /* Gradients */
  --gradient-hero: linear-gradient(135deg, hsl(270 60% 95%) 0%, hsl(340 40% 95%) 50%, hsl(40 30% 96%) 100%);
  --gradient-card: linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(270 30% 98%) 100%);
  --gradient-accent: linear-gradient(135deg, hsl(270 50% 65%) 0%, hsl(340 50% 75%) 100%);
  
  /* Shadows */
  --shadow-soft: 0 4px 20px -4px hsl(270 50% 65% / .15);
  --shadow-card: 0 8px 30px -8px hsl(270 30% 50% / .12);
  --shadow-glow: 0 0 40px hsl(270 50% 65% / .2);
}
```

---

## Key Features

### User Experience
- ✅ Smooth scroll navigation between sections
- ✅ Instant category filtering with animations
- ✅ Image lazy loading
- ✅ Hover interactions
- ✅ Mobile-optimized touch targets
- ✅ Active section highlighting in navigation
- ✅ Accessible navigation with keyboard support
- ✅ Fast loading times
- ✅ Modal-based product details (no page reload)

### No E-commerce Features
- ❌ No shopping cart
- ❌ No checkout flow
- ❌ No payment integration
- ❌ No user accounts/login
- ❌ No order management
- ❌ No inventory tracking

### Contact Integration
- ✅ WhatsApp click-to-chat links
- ✅ Email mailto links
- ✅ Instagram profile links
- ✅ Clear "Contact us to order" messaging

---

## Brand Personality

### Tone & Voice
- Elegant and refined
- Warm and welcoming
- Premium but approachable
- Focus on emotion and gifting experience

### Copy Guidelines
- Use emotive language about gifting
- Emphasize handcrafted quality
- Highlight thoughtfulness and elegance
- Keep descriptions concise but impactful

### Example Copy
- Hero Subtext: "Handcrafted with Love"
- Hero Heading: "Exquisite Gifts for Every Occasion"
- Hero Description: "Discover our curated collection of artificial bouquets, decorative candles, and unique gift items crafted to bring joy and elegance to your special moments."
- CTA: "Let's create something beautiful together"

---

## Technical Specifications

### File Structure
```
/public
    favicon.ico
    placeholder.svg
    robots.txt
/src
    /assets
        /products
            basket-arrangement.jpg
            candle-collection.jpg
            candle-floral.jpg
            candle-seashell.jpg
            candle-strawberry.jpg
            flower-daisy.jpg
            flower-pink.jpg
            flower-rose.jpg
            lip-balm.jpg
            mini-bouquet.jpg
            mini-wrapped.jpg
            mug-bouquet.jpg
        amara-logo.png

    /components
        /ui
            badge.tsx
            button.tsx
            card.tsx
            dialog.tsx
        AboutSection.tsx
        CatalogueSection.tsx
        ContactSection.tsx
        FeaturedCategories.tsx
        Footer.tsx
        Header.tsx
        HeroSection.tsx
        ProductCard.tsx
        ProductModal.tsx
    /data
        products.ts
    /hooks
        useActiveSection.ts
        useSmoothScroll.ts
    /lib
        utils.ts
    App.css
    App.tsx
    index.css
    main.tsx
    vite-env.d.ts
.gitignore
bun.lock
components.json
eslint.config.js
index.html
package.json
postcss.config.js
README.md
tailwind.config.ts
tsconfig.app.json
tsconfig.app.tsbuildinfo
tsconfig.json
tsconfig.node.json
tsconfig.node.tsbuildinfo
vite.config.ts
```

### Build Configuration

**package.json scripts:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 90
- Mobile-optimized images
- Minimal bundle size

---

## SEO & Meta

### Meta Tags
- Title: "Brand Name | Handcrafted Bouquets, Candles & Gifts"
- Description: "Exquisite handcrafted bouquets, candles & gifts for every occasion"
- Open Graph tags for social sharing
- Favicon

### Font Imports
- Google Fonts: 
  - "Cormorant Garamond" (weights: 400, 500, 600, 700) - for headings
  - "Quicksand" (weights: 300, 400, 500, 600, 700) - for body text
- Import in `index.html` or via CSS `@import`

### Accessibility
- Semantic HTML
- Alt text for all images
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast

---

## Contact Information (Placeholders)

- **WhatsApp**: +91 98765 43210
- **Email**: hello@brandname.gifts
- **Instagram**: @brandname.gifts

*(Update with actual brand information)*

---

## Deployment Instructions

### For Netlify:

1. **Via Drag & Drop:**
   - Run `npm run build`
   - Drag `dist` folder to netlify.com/drop

2. **Via CLI:**
   ```bash
   npm install -g netlify-cli
   npm run build
   netlify deploy --prod
   ```

3. **Via Git:**
   - Push to GitHub
   - Connect repository to Netlify
   - Build settings: `npm run build`, publish: `dist`
   - Auto-deploy on push

---

## Success Criteria

✅ Website loads quickly on all devices
✅ Smooth scroll navigation between sections works perfectly
✅ Active section highlighting in navigation
✅ Product filtering is instant with smooth animations
✅ Product modal opens and closes smoothly
✅ Images load properly with lazy loading
✅ Contact links work (WhatsApp, email, Instagram)
✅ Mobile experience is excellent with touch-friendly interactions
✅ Design matches reference aesthetic
✅ Builds successfully for Netlify
✅ No e-commerce functionality present
✅ Single-page design with all content accessible via scroll
✅ Brand feels premium and elegant

---

## Optional Enhancements

- Product image galleries/carousels
- Testimonials section
- Blog/inspiration section
- Newsletter signup form
- Search functionality
- Product comparison
- Wishlist (local storage only)
- Image zoom on hover
- Video backgrounds in hero
- Animations on scroll

---

## Notes

- Focus on visual storytelling
- Images are the hero - prioritize high-quality photography
- Every interaction should feel premium
- Keep it simple and elegant
- Mobile experience is crucial
- Fast loading is a priority
- Contact should be easy and prominent

---

**Version**: 1.0
**Last Updated**: January 2026
**Framework**: React + Vite + Tailwind CSS
**Deployment**: Netlify

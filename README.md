# Amara Gifts - Gift Boutique Catalogue

A beautiful, single-page catalogue website for a premium gift boutique specializing in handcrafted bouquets, candles, and gift items.

## Features

- ✨ Single-page design with smooth scroll navigation
- 🎨 Elegant, premium aesthetic with soft gradients
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖼️ Image-first product showcase
- 🔍 Category filtering with smooth animations
- 💬 Contact integration (WhatsApp, Email, Instagram)
- ⚡ Fast loading with lazy-loaded images
- ♿ Accessible navigation with keyboard support
- 🚀 Optimized for Netlify deployment

## Tech Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 16+ or npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amara
```

2. Install dependencies:
```bash
npm install
```

3. Copy the logo to the public folder:
```bash
cp amara-logo.png public/
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
amara/
├── public/
│   ├── amara-logo.png
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── dialog.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CatalogueSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FeaturedCategories.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductModal.tsx
│   ├── data/
│   │   └── products.ts
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   └── useSmoothScroll.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Deployment

### Deploy to Netlify

#### Method 1: Drag & Drop
1. Run `npm run build`
2. Drag the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

#### Method 2: CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

#### Method 3: Git Integration
1. Push your code to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy automatically on push

## Customization

### Update Contact Information

Edit contact details in:
- `src/components/ContactSection.tsx`
- `src/components/Footer.tsx`
- `src/components/ProductModal.tsx`

Replace placeholder values:
- WhatsApp: `+91 98765 43210`
- Email: `hello@amaragifts.com`
- Instagram: `@amaragifts`

### Add/Edit Products

Edit the product data in `src/data/products.ts`:

```typescript
{
  id: 1,
  name: "Product Name",
  category: "bouquets" | "mini-bouquets" | "candles" | "gift-sets",
  price: "₹1,299",
  image: "https://...",
  description: "Product description...",
  features: ["Feature 1", "Feature 2"],
  featured: true | false
}
```

### Update Branding

Replace `public/amara-logo.png` with your logo and update:
- `index.html` - Site title and meta tags
- Brand colors in `tailwind.config.ts`
- CSS variables in `src/index.css`

## Performance

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 90
- Mobile-optimized images
- Lazy loading for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

All rights reserved © 2024 Amara Gifts

## Support

For issues or questions, please contact the development team.

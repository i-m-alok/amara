import { Button } from "./ui/button"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { GradientHeading } from "./GradientHeading"

export const HeroSection = () => {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: 'linear-gradient(135deg, hsl(270 60% 95%) 0%, hsl(340 40% 95%) 50%, hsl(40 30% 96%) 100%)'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/amara-logo.png" 
              alt="Amara Gifts" 
              className="h-32 md:h-40 w-auto drop-shadow-lg"
            />
          </div>

          {/* Subtext */}
          <p
            className="flex items-center justify-center gap-2"
            style={{
              color: 'rgb(115, 103, 126)',
              fontFamily: 'Quicksand, sans-serif',
              fontSize: '18px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" style={{ color: 'rgb(166, 121, 210)' }}>
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            Handcrafted with Love
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" style={{ color: 'rgb(166, 121, 210)' }}>
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
          </p>

          {/* Main Heading */}
          <div className="mb-4">
            <GradientHeading 
              part1="Exquisite Gifts for"
              part2="Every Occasion"
              splitLines={true}
            />
          </div>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-brand-brown/80 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of artificial bouquets, decorative candles, and unique gift items crafted to bring joy and elegance to your special moments.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              onClick={() => scrollToSection('products')}
              className="w-full sm:w-auto shadow-lg hover:shadow-xl"
            >
              View Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-mauve rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-brand-mauve rounded-full" />
        </div>
      </div>
    </section>
  )
}

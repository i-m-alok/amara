import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { useActiveSection } from "@/hooks/useActiveSection"
import { cn } from "@/lib/utils"

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()
  const activeSection = useActiveSection(['hero', 'products', 'about', 'contact'])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img 
              src="/amara-logo.png" 
              alt="Amara Gifts" 
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "font-body font-medium transition-colors relative",
                  "hover:text-brand-mauve",
                  activeSection === link.id
                    ? "text-brand-mauve"
                    : "text-brand-brown"
                )}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-brown hover:text-brand-mauve transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-bg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "font-body font-medium py-2 text-left transition-colors",
                  activeSection === link.id
                    ? "text-brand-mauve"
                    : "text-brand-brown"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

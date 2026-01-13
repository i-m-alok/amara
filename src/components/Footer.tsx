import { Instagram, Mail, MessageCircle } from "lucide-react"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"

const quickLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const Footer = () => {
  const { scrollToSection } = useSmoothScroll()

  return (
    <footer className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 border-t border-brand-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img 
              src="/amara-logo.png" 
              alt="Amara Gifts" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-brand-brown/80 font-body text-sm italic">
              Handcrafted with Love
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-brand-brown mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-body text-brand-brown/80 hover:text-brand-mauve transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-brand-brown mb-4">
              Connect With Us
            </h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-brown/80 hover:text-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-body text-sm">+91 98765 43210</span>
              </a>
              <a
                href="mailto:hello@amaragifts.com"
                className="flex items-center gap-2 text-brand-brown/80 hover:text-brand-mauve transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-body text-sm">hello@amaragifts.com</span>
              </a>
              <a
                href="https://instagram.com/amaragifts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-brown/80 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-body text-sm">@amaragifts</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-bg pt-6 text-center">
          <p className="text-brand-brown/60 font-body text-sm">
            © {new Date().getFullYear()} Amara Gifts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

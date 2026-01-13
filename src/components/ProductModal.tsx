import { Dialog, DialogContent, DialogClose } from "./ui/dialog"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Product } from "@/data/products"
import { MessageCircle, Mail, Check } from "lucide-react"

interface ProductModalProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const ProductModal = ({ product, open, onOpenChange }: ProductModalProps) => {
  if (!product) return null

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I'm interested in ${product.name} (${product.price})`)
    window.open(`https://wa.me/918217088119?text=${message}`, '_blank')
  }

  const handleEmailClick = () => {
    const subject = encodeURIComponent(`Inquiry about ${product.name}`)
    const body = encodeURIComponent(`Hi,\n\nI'm interested in ${product.name} (${product.price}).\n\nPlease provide more details.\n\nThank you!`)
    window.location.href = `mailto:amaragiftboutique@gmail.com?subject=${subject}&body=${body}`
  }

  const getCategoryName = (category: string) => {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogClose onClick={() => onOpenChange(false)} />
        
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{getCategoryName(product.category)}</Badge>
                {product.featured && <Badge>Featured</Badge>}
              </div>
              
              <h2 className="font-heading text-3xl font-bold text-brand-brown mb-2">
                {product.name}
              </h2>
              
              <p className="text-2xl font-semibold text-brand-terracotta mb-4">
                {product.price}
              </p>
              
              <p className="text-brand-brown/80 mb-6 leading-relaxed">
                {product.description}
              </p>

              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-brand-brown mb-3">Features:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-brand-brown/80">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-3 pt-4 border-t border-brand-bg">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full gap-2"
                size="lg"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </Button>
              
              <Button
                onClick={handleEmailClick}
                variant="outline"
                className="w-full gap-2"
                size="lg"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </Button>

              <Button
                onClick={() => onOpenChange(false)}
                variant="ghost"
                className="w-full gap-2 md:hidden"
                size="lg"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

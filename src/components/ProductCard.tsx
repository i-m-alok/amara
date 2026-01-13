import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Product } from "@/data/products"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  onClick: () => void
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Card
      className={cn(
        "group cursor-pointer overflow-hidden transition-all duration-300",
        "hover:-translate-y-2 border-0"
      )}
      onClick={onClick}
      style={{
        boxShadow: 'var(--shadow-soft)',
        background: 'var(--gradient-card)'
      }}
    >
      <div className="relative aspect-square overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ imageRendering: 'crisp-edges' }}
        />
        {product.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-gradient-to-r from-[hsl(var(--lavender))] to-[hsl(var(--rose))] border-0 text-white">
              Featured
            </Badge>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading font-semibold text-xl mb-2" style={{ color: 'hsl(var(--foreground))' }}>
          {product.name}
        </h3>
        <p className="text-lg font-semibold" style={{ color: 'hsl(var(--lavender))' }}>
          {product.price}
        </p>
      </div>
    </Card>
  )
}

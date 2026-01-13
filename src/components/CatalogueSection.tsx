import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { ProductCard } from "./ProductCard"
import { ProductModal } from "./ProductModal"
import { products, Product, categories } from "@/data/products"
import { GradientHeading } from "./GradientHeading"
import { Package } from "lucide-react"
import { cn } from "@/lib/utils"

interface CatalogueSectionProps {
  initialCategory?: string
}

export const CatalogueSection = ({ initialCategory = 'all' }: CatalogueSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(10)

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)
  
  const displayedProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProducts.length

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(10)
  }, [selectedCategory])

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12)
  }

  return (
    <>
      <section id="products" className="py-20 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4">
          <GradientHeading 
            part1="Browse Our"
            part2="Catalogue"
            subtitle="Each piece is thoughtfully designed and handcrafted to bring warmth and elegance to your space."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "transition-all duration-300",
                  selectedCategory === category.id && "shadow-lg scale-105"
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Product Count */}
          <div className="text-center mb-8">
            <p className="font-body text-brand-brown/60">
              Showing {displayedProducts.length} of {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => handleProductClick(product)}
                  />
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center mt-12">
                  <Button
                    onClick={handleLoadMore}
                    size="lg"
                    className="px-8"
                  >
                    Load More Products
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-brand-brown/30 mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-brand-brown/60 mb-2">
                No products found
              </h3>
              <p className="font-body text-brand-brown/50">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  )
}

import { Card } from "./ui/card"
import { categories } from "@/data/products"
import { GradientHeading } from "./GradientHeading"

interface FeaturedCategoriesProps {
  onCategoryClick: (categoryId: string) => void
}

export const FeaturedCategories = ({ onCategoryClick }: FeaturedCategoriesProps) => {
  const displayCategories = categories.filter(cat => cat.id !== 'all')

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <GradientHeading 
          part1="Browse Our"
          part2="Catalogue"
          subtitle="Each piece is thoughtfully designed and handcrafted to bring warmth and elegance to your space."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((category) => (
            <Card
              key={category.id}
              className="cursor-pointer group overflow-hidden transition-all duration-300 hover:-translate-y-2 border-0"
              onClick={() => onCategoryClick(category.id)}
              style={{
                boxShadow: 'var(--shadow-card)',
                background: 'var(--gradient-card)'
              }}
            >
              <div className="relative aspect-square overflow-hidden bg-white">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-2xl font-semibold mb-2 drop-shadow-lg">
                    {category.name}
                  </h3>
                  <p className="font-body text-sm opacity-95 drop-shadow-md">
                    {category.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

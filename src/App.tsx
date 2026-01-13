import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { FeaturedCategories } from './components/FeaturedCategories'
import { CatalogueSection } from './components/CatalogueSection'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const { scrollToSection } = useSmoothScroll()

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    scrollToSection('products')
  }

  return (
    <div className="min-h-screen bg-brand-bg font-body">
      <Header />
      <main>
        <HeroSection />
        {/* <FeaturedCategories onCategoryClick={handleCategoryClick} /> */}
        <CatalogueSection initialCategory={selectedCategory} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

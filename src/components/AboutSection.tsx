import { Card, CardContent } from "./ui/card"
import { Heart, Sparkles, Users } from "lucide-react"
import { GradientHeading } from "./GradientHeading"

export const AboutSection = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Quality Craftsmanship",
      description: "Every piece is handcrafted with meticulous attention to detail, ensuring premium quality that lasts."
    },
    {
      icon: Heart,
      title: "Thoughtful Gifting",
      description: "We believe in the power of meaningful gifts that create lasting memories and emotional connections."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Your satisfaction is our priority. We work closely with you to create the perfect gift for any occasion."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <GradientHeading 
            part1="About"
            part2="Amara Gifts"
            subtitle="Where craftsmanship meets heartfelt gifting"
          />
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-4">
            <h3 className="font-heading text-3xl font-semibold text-brand-brown">
              Our Story
            </h3>
            <p className="font-body text-brand-brown/80 leading-relaxed">
              At Amara Gifts, we believe that gifting is an art form—a way to express love, appreciation, 
              and thoughtfulness. Every bouquet, candle, and gift item in our collection is carefully 
              handcrafted to bring joy and elegance to life's special moments.
            </p>
            <p className="font-body text-brand-brown/80 leading-relaxed">
              Our passion lies in creating timeless pieces that capture emotions and create lasting memories. 
              From elegant artificial bouquets to luxurious scented candles, each product reflects our 
              commitment to quality, beauty, and the art of meaningful gifting.
            </p>
            <p className="font-body text-brand-brown/80 leading-relaxed">
              We take pride in our attention to detail and dedication to customer satisfaction. 
              Whether you're celebrating a milestone, expressing gratitude, or simply brightening 
              someone's day, we're here to help you find the perfect gift.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://i.ibb.co/HTvL0x9C/Whats-App-Image-2026-01-13-at-8-00-25-PM-2.jpg" 
                alt="Beautiful bouquet" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden mt-8">
              <img 
                src="https://i.ibb.co/JRv3KrPG/Whats-App-Image-2026-01-13-at-8-00-25-PM.jpg" 
                alt="Elegant candle" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden -mt-8">
              <img 
                src="https://i.ibb.co/spdXt50H/Whats-App-Image-2026-01-13-at-8-09-57-PM.jpg" 
                alt="Gift set" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://i.ibb.co/yncgwLWC/Screenshot-2026-01-13-at-8-21-50-PM.png" 
                alt="Mini bouquet" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div>
          <h3 className="font-heading text-3xl font-semibold text-brand-brown text-center mb-12">
            Our Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center transition-all duration-300 hover:-translate-y-1 border-0"
                style={{
                  boxShadow: 'var(--shadow-soft)',
                  background: 'var(--gradient-card)'
                }}
              >
                <CardContent className="pt-8 pb-6">
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                    style={{
                      background: 'var(--gradient-accent)',
                      boxShadow: 'var(--shadow-glow)'
                    }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-heading text-xl font-semibold mb-3" style={{ color: 'hsl(var(--foreground))' }}>
                    {value.title}
                  </h4>
                  <p className="font-body" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

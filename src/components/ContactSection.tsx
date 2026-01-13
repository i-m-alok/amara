import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MessageCircle, Mail, Instagram } from "lucide-react"
import { GradientHeading } from "./GradientHeading"

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      value: "+91 82170 88119",
      description: "Quick responses for instant communication",
      link: "https://wa.me/918217088119",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: Mail,
      name: "Email",
      value: "amaragiftboutique@gmail.com",
      description: "Detailed inquiries welcome",
      link: "mailto:amaragiftboutique@gmail.com",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: Instagram,
      name: "Instagram",
      value: "@amara_giftboutique",
      description: "Follow us for updates and inspiration",
      link: "https://instagram.com/amara_giftboutique",
      gradient: "from-pink-400 to-rose-500"
    }
  ]

  const orderSteps = [
    {
      number: "1",
      title: "Browse",
      description: "Explore our collection"
    },
    {
      number: "2",
      title: "Contact",
      description: "Reach out via your preferred method"
    },
    {
      number: "3",
      title: "Customize",
      description: "We'll help personalize your order"
    },
    {
      number: "4",
      title: "Receive",
      description: "Get your beautiful gift delivered"
    }
  ]

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918217088119?text=Hi!%20I%27d%20like%20to%20place%20an%20order', '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <GradientHeading  
            part1="We'd Love to"
            part2="Hear From You"
            subtitle="Ready to place an order? We'd love to hear from you!"
          />
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-2 border-0"
              onClick={() => window.open(method.link, method.name === 'Email' ? '_self' : '_blank')}
              style={{
                boxShadow: 'var(--shadow-soft)',
                background: 'var(--gradient-card)'
              }}
            >
              <CardContent className="text-center py-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${method.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2" style={{ color: 'hsl(var(--foreground))' }}>
                  {method.name}
                </h3>
                <p className="font-body font-medium mb-2" style={{ color: 'hsl(var(--lavender))' }}>
                  {method.value}
                </p>
                <p className="font-body text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Place an Order */}
        <div 
          className="rounded-3xl p-8 md:p-12 mb-12 border-0"
          style={{
            boxShadow: 'var(--shadow-card)',
            background: 'var(--gradient-card)'
          }}
        >
          <h3 className="font-heading text-3xl font-semibold text-center mb-12" style={{ color: 'hsl(var(--foreground))' }}>
            How to Place an Order
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {orderSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full text-white font-heading text-2xl font-bold mb-4"
                  style={{
                    background: 'var(--gradient-accent)',
                    boxShadow: 'var(--shadow-glow)'
                  }}
                >
                  {step.number}
                </div>
                <h4 className="font-heading text-lg font-semibold mb-2" style={{ color: 'hsl(var(--foreground))' }}>
                  {step.title}
                </h4>
                <p className="font-body text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="text-lg px-12 py-6 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Order via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

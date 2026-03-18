"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight, Flame } from "lucide-react"

const offers = [
  {
    title: "Maldives Paradise",
    subtitle: "All-Inclusive Resort Package",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
    validTill: "Limited Time",
    tag: "Hot Deal",
    highlights: ["Beach Villa Stay", "Water Sports", "Spa Access"],
  },
  {
    title: "Dubai Extravaganza",
    subtitle: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
    validTill: "Book by Apr 30",
    tag: "Best Seller",
    highlights: ["Desert Safari", "Burj Khalifa", "City Tour"],
  },
  {
    title: "Kerala Backwaters",
    subtitle: "Houseboat + Resort Experience",
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&q=80",
    validTill: "Summer Special",
    tag: "New",
    highlights: ["Houseboat Cruise", "Ayurvedic Spa", "Tea Plantation"],
  },
]

export function SpecialOffers() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-secondary rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              <Flame className="h-4 w-4" />
              Limited Time Offers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Special <span className="text-secondary">Deals</span> for You
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 gap-2">
            View All Offers
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full">
                    {offer.tag}
                  </span>
                </div>

                {/* Valid Till */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{offer.validTill}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{offer.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {offer.highlights.map((highlight) => (
                    <span key={highlight} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white gap-1 rounded-full">
                  Enquire Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

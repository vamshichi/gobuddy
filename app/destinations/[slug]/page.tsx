"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Star, Users, Calendar, Camera, Utensils, Hotel, Plane, ArrowRight, ChevronLeft } from "lucide-react"
import { destinationsData } from "@/app/data/destinations"


// Default destination data for unlisted destinations
export const defaultDestination = {
  name: "Destination",
  tagline: "Explore with GoBuddy",
  description: "Discover amazing experiences with our curated travel packages. Contact us for customized itineraries.",
  heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80",
    "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80",
  ],
  rating: 4.7,
  duration: "Customizable",
  bestTime: "Year Round",
  highlights: ["Local Experiences", "Guided Tours", "Cultural Immersion", "Adventure Activities", "Scenic Beauty", "Local Cuisine"],
  itinerary: [],
  inclusions: ["Accommodation", "Transfers", "Sightseeing", "Tour Guide"],
  packages: [],
}

export default function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const slug = resolvedParams.slug
  const destination = destinationsData[slug] || { ...defaultDestination, name: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px]">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black/80 from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16 ">
            {/* <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ChevronLeft className="h-5 w-5" />
              Back to Home
            </Link> */}
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-full mb-4">
                {destination.tagline}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{destination.name}</h1>
              <p className="text-lg text-white/90 mb-6">{destination.description}</p>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-semibold">{destination.rating}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 text-white" />
                  <span className="text-white">{destination.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Calendar className="h-5 w-5 text-white" />
                  <span className="text-white">{destination.bestTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="text-white">
              <p className="text-2xl font-bold">Ready to explore {destination.name}?</p>
              <span className="text-sm text-white/80">Get a customized quote for your trip</span>
            </div>
            <div className="flex gap-4">
              <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 rounded-full">
                Enquire Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              </Link>
              {/* <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary rounded-full">
                Call Us
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Top Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destination.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                <Camera className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destination.images.map((image, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src={image}
                  alt={`${destination.name} ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      {destination.itinerary.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Sample Itinerary</h2>
            <div className="space-y-4">
              {destination.itinerary.map((day) => (
                <div key={day.day} className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-xl flex flex-col items-center justify-center text-white">
                    <span className="text-xs">Day</span>
                    <span className="text-2xl font-bold">{day.day}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{day.title}</h3>
                    <p className="text-muted-foreground">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packages */}
      {destination.packages.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Our Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {destination.packages.map((pkg, index) => (
                <div key={pkg.name} className={`bg-card rounded-2xl p-6 border-2 transition-all hover:shadow-xl ${index === 1 ? "border-primary shadow-lg scale-105" : "border-border"}`}>
                  {index === 1 && (
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{pkg.duration}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                  <Button className={`w-full rounded-full ${index === 1 ? "bg-primary hover:bg-primary/90 text-white" : "bg-secondary hover:bg-secondary/90 text-white"}`}>
                    Enquire Now
                  </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inclusions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">What&apos;s Included</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {destination.inclusions.map((item) => {
              const icons: Record<string, typeof Hotel> = {
                "Accommodation": Hotel,
                "Breakfast": Utensils,
                "All Meals": Utensils,
                "All Meals on Houseboat": Utensils,
                "Airport Transfers": Plane,
                "Transfers": Plane,
                "Sightseeing": Camera,
                "Tour Guide": Users,
                "Boat Safari": Camera,
                "City Tour": MapPin,
                "Desert Safari": MapPin,
                "Snorkeling": Camera,
                "Sunset Cruise": Camera,
                "4-star Hotel": Hotel,
                "Daily Breakfast": Utensils,
                "Water Villa": Hotel,
                "Seaplane Transfers": Plane,
              }
              const Icon = icons[item] || Camera
              return (
                <div key={item} className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect trip. Contact us for customized packages and best deals!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 rounded-full">
              Get Free Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary rounded-full">
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}

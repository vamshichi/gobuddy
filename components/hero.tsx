"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Calendar, Users, ChevronRight, Play } from "lucide-react"

const heroSlides = [
  {
    title: "Discover Paradise",
    subtitle: "Maldives",
    description: "Crystal clear waters and pristine beaches await your arrival",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80",
  },
  {
    title: "Explore the Magic",
    subtitle: "Dubai",
    description: "Where modern luxury meets traditional Arabian charm",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
  },
  {
    title: "Experience Serenity",
    subtitle: "Kerala",
    description: "God's own country with breathtaking backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80",
  },
  {
    title: "Adventure Awaits",
    subtitle: "Switzerland",
    description: "Majestic Alps and stunning landscapes",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=80",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[8000ms]"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1)" : "scale(1.05)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated Text */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary/90 text-white text-sm font-semibold rounded-full animate-pulse">
              Your Trusted Travel Companion
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            <span className="block">{heroSlides[currentSlide].title}</span>
            <span className="block text-secondary mt-2">
              {heroSlides[currentSlide].subtitle}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            {heroSlides[currentSlide].description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white gap-2 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Explore Packages
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground gap-2 text-lg px-8 py-6 rounded-full"
            >
              <Play className="h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-secondary"
                    : "w-2 bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Search Box */}
        {/* <div
          className={`mt-12 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground block">Destination</label>
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full bg-transparent text-foreground font-medium focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <Calendar className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground block">Travel Date</label>
                  <input
                    type="text"
                    placeholder="Select date"
                    className="w-full bg-transparent text-foreground font-medium focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <Users className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground block">Travelers</label>
                  <input
                    type="text"
                    placeholder="2 Adults"
                    className="w-full bg-transparent text-foreground font-medium focus:outline-none"
                  />
                </div>
              </div>

              <Button className="h-full bg-primary hover:bg-primary/90 text-white gap-2 rounded-xl text-lg font-semibold">
                <Search className="h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-bounce" />
        </div>
      </div> */}
    </section>
  )
}

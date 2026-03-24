"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Star, Clock, ChevronLeft, ChevronRight } from "lucide-react"

const domesticDestinations = [
  {
    name: "Goa",
    slug: "goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    rating: 4.8,
    duration: "3-5 Days",
    tag: "Beach Paradise",
  },
  {
    name: "Kerala",
    slug: "kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    rating: 4.9,
    duration: "4-6 Days",
    tag: "Backwaters",
  },
  {
    name: "Himachal Pradesh",
    slug: "himachal",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
    rating: 4.7,
    duration: "5-7 Days",
    tag: "Mountains",
  },
  {
    name: "Rajasthan",
    slug: "rajasthan",
    image: "/destinactions/Rajasthan/Rajasthan2.jpg",
    rating: 4.8,
    duration: "5-7 Days",
    tag: "Heritage",
  },
  {
    name: "Andaman",
    slug: "andaman",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    rating: 4.9,
    duration: "5-7 Days",
    tag: "Island Escape",
  },
  {
    name: "Kashmir",
    slug: "kashmir",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1200&q=80",
    rating: 4.9,
    duration: "5-7 Days",
    tag: "Paradise",
  },
]

const internationalDestinations = [
  {
    name: "Dubai",
    slug: "dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    rating: 4.9,
    duration: "4-6 Days",
    tag: "Luxury",
  },
  {
    name: "Singapore",
    slug: "singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    rating: 4.8,
    duration: "4-5 Days",
    tag: "Modern",
  },
  {
    name: "Thailand",
    slug: "thailand",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
    rating: 4.7,
    duration: "5-7 Days",
    tag: "Adventure",
  },
  {
    name: "Maldives",
    slug: "maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    rating: 5.0,
    duration: "4-6 Days",
    tag: "Romantic",
  },
  {
    name: "Bali",
    slug: "bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    rating: 4.8,
    duration: "5-7 Days",
    tag: "Tropical",
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    rating: 4.9,
    duration: "6-8 Days",
    tag: "Scenic",
  },
]

const honeymoonDestinations = [
  // India
  {
    name: "Goa",
    slug: "goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    rating: 4.8,
    duration: "3-5 Days",
    tag: "Honeymoon",
  },
  {
    name: "Kerala",
    slug: "kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    rating: 4.9,
    duration: "4-6 Days",
    tag: "Honeymoon",
  },
  {
    name: "Manali",
    slug: "manali",
    image: "/destinactions/Manali/Manali3.jpg",
    rating: 4.8,
    duration: "4-6 Days",
    tag: "Honeymoon",
  },
  {
    name: "Andaman",
    slug: "andaman_nicobar",
    image: "/destinactions/Andaman/Andaman2.jpg",
    rating: 4.8,
    duration: "5-7 Days",
    tag: "Honeymoon",
  },
  {
    name: "Munnar",
    slug: "kerala",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80",
    rating: 4.8,
    duration: "3-4 Days",
    tag: "Honeymoon",
  },
  {
    name: "Kashmir",
    slug: "kashmir",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    rating: 4.9,
    duration: "5-7 Days",
    tag: "Honeymoon",
  },

  // International
  {
    name: "Maldives",
    slug: "maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    rating: 5.0,
    duration: "4-6 Days",
    tag: "Honeymoon",
  },
  {
    name: "Bali",
    slug: "bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    rating: 4.8,
    duration: "5-7 Days",
    tag: "Honeymoon",
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    rating: 4.9,
    duration: "6-8 Days",
    tag: "Honeymoon",
  },
  {
    name: "Paris",
    slug: "paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    rating: 4.9,
    duration: "5-7 Days",
    tag: "Honeymoon",
  },
  {
    name: "Italy",
    slug: "italy",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
    rating: 4.9,
    duration: "6-8 Days",
    tag: "Honeymoon",
  },
  {
    name: "Thailand",
    slug: "thailand",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
    rating: 4.8,
    duration: "5-7 Days",
    tag: "Honeymoon",
  },
  {
    name: "Dubai",
    slug: "dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    rating: 4.9,
    duration: "4-6 Days",
    tag: "Honeymoon",
  },
  {
    name: "Sri Lanka",
    slug: "sri-lanka",
    image: "/destinactions/lanka/sri2.jpg",
    rating: 4.7,
    duration: "6-8 Days",
    tag: "Honeymoon",
  },
  {
    name: "Singapore",
    slug: "singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    rating: 4.8,
    duration: "4-5 Days",
    tag: "Honeymoon",
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    rating: 4.7,
    duration: "5-7 Days",
    tag: "Honeymoon",
  },
  {
    name: "South Africa",
    slug: "south-africa",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    rating: 4.8,
    duration: "8-10 Days",
    tag: "Honeymoon",
  },
  {
    name: "Australia",
    slug: "australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
    rating: 4.8,
    duration: "8-12 Days",
    tag: "Honeymoon",
  },
  {
    name: "Spain",
    slug: "spain",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
    rating: 4.8,
    duration: "7-10 Days",
    tag: "Honeymoon",
  },
  {
    name: "Europe",
    slug: "europe",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    rating: 4.9,
    duration: "10-15 Days",
    tag: "Honeymoon",
  },
]

const pilgrimageDestinations = [
  {
    name: "Tirupati",
    slug: "tirupati",
    image: "/destinactions/tirupati/tirupati.jpg",
    rating: 4.9,
    duration: "1-2 Days",
    tag: "Pilgrimage",
  },
  {
    name: "Sabarimala",
    slug: "sabarimala",
    image: "/destinactions/Sabarimala/Sabarimala.jpg",
    rating: 4.8,
    duration: "2-3 Days",
    tag: "Pilgrimage",
  },
  {
    name: "Rameswaram",
    slug: "rameswaram",
    image: "/destinactions/Rameswaram/Rameswaram.jpg",
    rating: 4.8,
    duration: "2-3 Days",
    tag: "Pilgrimage",
  },
  {
    name: "Kedarnath",
    slug: "kedarnath",
    image: "/destinactions/Kedarnath/Kedarnath2.jpg",
    rating: 4.9,
    duration: "4-6 Days",
    tag: "Pilgrimage",
  },
  {
    name: "Badrinath",
    slug: "badrinath",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=800&q=80",
    rating: 4.9,
    duration: "3-5 Days",
    tag: "Pilgrimage",
  },
  {
    name: "Varanasi",
    slug: "varanasi",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800&q=80",
    rating: 4.8,
    duration: "2-4 Days",
    tag: "Pilgrimage",
  },
  {
    name: "Haridwar",
    slug: "haridwar",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    rating: 4.7,
    duration: "2-3 Days",
    tag: "Pilgrimage",
  },
  {
    name: "Amarnath",
    slug: "amarnath",
    image: "/destinactions/Amarnath/Amarnath.jpg",
    rating: 4.9,
    duration: "4-6 Days",
    tag: "Pilgrimage",
  },
  {
    name: "Madurai",
    slug: "madurai",
    image: "/destinactions/Madurai/Madurai.jpg",
    rating: 4.8,
    duration: "2-3 Days",
    tag: "Pilgrimage",
  },
  
]


function DestinationCard({ destination, index }: { destination: { name: string; slug: string; image: string; rating: number; duration: string; tag: string }; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-500 hover:shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full">
            {destination.tag}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-semibold">{destination.rating}</span>
        </div>

        {/* Destination Name */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 text-white mb-1">
            <MapPin className="h-4 w-4" />
            <h3 className="text-xl font-bold">{destination.name}</h3>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Clock className="h-3 w-3" />
            <span>{destination.duration}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-end">
          <Link href={`/destinations/${destination.slug}`}>
            <Button
              variant="outline"
              size="sm"
              className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
            >
              Explore
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function DestinationSlider({ destinations, title, subtitle }: { destinations: typeof domesticDestinations; title: string; subtitle: string }) {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 320
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="mb-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{title}</h2>
        </div>
        <div className="hidden md:flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {destinations.map((destination, index) => (
          <div key={destination.name} className="flex-shrink-0 w-[280px] md:w-[300px] snap-start">
            <DestinationCard destination={destination} index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Destinations() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <DestinationSlider
          destinations={domesticDestinations}
          title="Domestic Escapes"
          subtitle="Explore India"
        />
        <DestinationSlider
          destinations={internationalDestinations}
          title="International Wonders"
          subtitle="Discover the World"
        />
        <DestinationSlider
          destinations={honeymoonDestinations}
          title="Honeymoon Destinations"
          subtitle="Romantic Getaways"
        />
        <DestinationSlider
          destinations={pilgrimageDestinations}
          title="Pilgrimage Destinations"
          subtitle="Sacred Journeys"
        />

        <div className="text-center mt-8">
          <Link href="/destinations">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 rounded-full px-8">
              View All Destinations
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

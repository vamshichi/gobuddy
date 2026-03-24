"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Clock, ArrowRight, Search } from "lucide-react"

const allDestinations = [
  // Domestic
  { name: "Goa", slug: "goa", type: "domestic", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80", rating: 4.8, duration: "3-5 Days", tag: "Beach Paradise" },
  { name: "Kerala", slug: "kerala", type: "domestic", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80", rating: 4.9, duration: "4-6 Days", tag: "Backwaters" },
  { name: "Himachal Pradesh", slug: "himachal", type: "domestic", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80", rating: 4.7, duration: "5-7 Days", tag: "Mountains" },
  { name: "Rajasthan", slug: "rajasthan", type: "domestic", image: "/destinactions/Rajasthan/Rajasthan1.jpg", rating: 4.8, duration: "5-7 Days", tag: "Heritage" },
  { name: "Andaman & Nicobar", slug: "andaman", type: "domestic", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", rating: 4.9, duration: "5-7 Days", tag: "Island" },
  { name: "Jammu and Kashmir", slug: "kashmir", type: "domestic", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80", rating: 4.9, duration: "5-7 Days", tag: "Paradise" },
  { name: "Coorg", slug: "coorg", type: "domestic", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", rating: 4.6, duration: "3-4 Days", tag: "Hill Station" },
  { name: "Hyderabad", slug: "hyderabad", type: "domestic", image: "/destinactions/Hyderabad/Hyderabad1.jpg", rating: 4.5, duration: "2-3 Days", tag: "Heritage" },
  { name: "Bangalore", slug: "bangalore", type: "domestic", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80", rating: 4.4, duration: "2-3 Days", tag: "Tech City" },
  // International
  { name: "Dubai", slug: "dubai", type: "international", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", rating: 4.9, duration: "4-6 Days", tag: "Luxury" },
  { name: "Singapore", slug: "singapore", type: "international", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80", rating: 4.8, duration: "4-5 Days", tag: "Modern" },
  // { name: "Thailand", slug: "thailand", type: "international", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80", rating: 4.7, duration: "5-7 Days", tag: "Adventure" },
  // { name: "Maldives", slug: "maldives", type: "international", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80", rating: 5.0, duration: "4-6 Days", tag: "Romantic" },
  // { name: "Bali", slug: "bali", type: "international", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", rating: 4.8, duration: "5-7 Days", tag: "Tropical" },
  // { name: "Switzerland", slug: "switzerland", type: "international", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80", rating: 4.9, duration: "6-8 Days", tag: "Scenic" },
  // { name: "Paris", slug: "paris", type: "international", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", rating: 4.8, duration: "5-7 Days", tag: "Romance" },
  { name: "Australia", slug: "australia", type: "international", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80", rating: 4.7, duration: "8-10 Days", tag: "Adventure" },
  { name: "Malaysia", slug: "malaysia", type: "international", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80", rating: 4.6, duration: "5-6 Days", tag: "Diverse" },
  { name: "Vietnam", slug: "vietnam", type: "international", image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80", rating: 4.7, duration: "6-8 Days", tag: "Cultural" },

  // Honeymoon
  { name: "Maldives", slug: "maldives", type: "honeymoon", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80", rating: 5.0, duration: "4-6 Days", tag: "Honeymoon" },
  { name: "Bali", slug: "bali", type: "honeymoon", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", rating: 4.8, duration: "5-7 Days", tag: "Honeymoon" },
  { name: "Switzerland", slug: "switzerland", type: "honeymoon", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80", rating: 4.9, duration: "6-8 Days", tag: "Honeymoon" },
  { name: "Paris", slug: "paris", type: "honeymoon", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", rating: 4.8, duration: "5-7 Days", tag: "Honeymoon" },
  { name: "Thailand", slug: "thailand", type: "honeymoon", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80", rating: 4.7, duration: "5-7 Days", tag: "Honeymoon" },

  // Pilgrimage
  { name: "Tirupati", slug: "tirupati", type: "pilgrimage", image: "/destinactions/tirupati/tirupati2.jpg", rating: 4.9, duration: "1-2 Days", tag: "Pilgrimage" },
  { name: "Rameswaram", slug: "rameswaram", type: "pilgrimage", image: "/destinactions/Rameswaram/Rameswaram2.jpg", rating: 4.8, duration: "2-3 Days", tag: "Pilgrimage" },
  { name: "Kedarnath", slug: "kedarnath", type: "pilgrimage", image: "/destinactions/Kedarnath/Kedarnath3.jpg", rating: 4.9, duration: "4-6 Days", tag: "Pilgrimage" },
  { name: "Badrinath", slug: "badrinath", type: "pilgrimage", image: "/destinactions/Badrinath/Badrinath2.jpg", rating: 4.9, duration: "3-5 Days", tag: "Pilgrimage" },
  // { name: "Vaishno Devi", slug: "vaishno-devi", type: "pilgrimage", image: "/destinactions/VaishnoDevi/vaishno.jpg", rating: 4.9, duration: "2-3 Days", tag: "Pilgrimage" },
  { name: "Varanasi", slug: "varanasi", type: "pilgrimage", image: "/destinactions/varanasi/varanasi2.jpg", rating: 4.8, duration: "2-3 Days", tag: "Pilgrimage" },
]

export default function DestinationsPage() {
  const [filter, setFilter] = useState<
    "all" | "domestic" | "international" | "honeymoon" | "pilgrimage">("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesFilter = filter === "all" || dest.type === filter
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6">
              Explore the World
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Destinations</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover amazing places across India and around the world with our curated travel packages
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 bg-muted rounded-xl p-1">
              {[
                { key: "all", label: "All" },
                { key: "domestic", label: "Domestic" },
                { key: "international", label: "International" },
                { key: "honeymoon", label: "Honeymoon" },
                { key: "pilgrimage", label: "Pilgrimage" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as typeof filter)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${filter === tab.key
                    ? "bg-primary text-white shadow"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder-destination.jpg"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full">
                      {dest.tag}
                    </span>
                    <span className={`px-3 py-1 text-white text-xs font-semibold rounded-full ${dest.type === "domestic" ? "bg-green-500" : "bg-blue-500"}`}>
                      {dest.type === "domestic" ? "India" : "International"}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-semibold">{dest.rating}</span>
                  </div>

                  {/* Destination Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white mb-1">
                      <MapPin className="h-4 w-4" />
                      <h3 className="text-xl font-bold">{dest.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Clock className="h-3 w-3" />
                      <span>{dest.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
                    >
                      Explore
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No destinations found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can&apos;t Find Your Dream Destination?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let us know where you want to go! We&apos;ll create a customized package just for you.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 rounded-full">
            Request Custom Package
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}

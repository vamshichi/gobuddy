"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "GoBuddy made our Maldives honeymoon absolutely magical! Every detail was perfectly planned. The team was responsive and helpful throughout. Highly recommended!",
    trip: "Maldives Honeymoon",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "Our family trip to Kerala was seamless thanks to GoBuddy. The houseboat experience and backwater tours were incredible. Great value for money!",
    trip: "Kerala Family Tour",
  },
  {
    name: "Anita Patel",
    location: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "Dubai trip was beyond expectations! From visa assistance to airport transfers, everything was handled professionally. Will definitely book again!",
    trip: "Dubai Adventure",
  },
  {
    name: "Vikram Singh",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    text: "The corporate retreat to Goa organized by GoBuddy was fantastic. Great hotels, team activities, and smooth coordination. Our team loved it!",
    trip: "Goa Corporate Retreat",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 5,
    text: "Switzerland trip was a dream come true! The itinerary was perfectly balanced with adventure and relaxation. GoBuddy exceeded all expectations!",
    trip: "Switzerland Tour",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground">
            Real stories from real travelers who explored the world with GoBuddy Holidays
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-secondary rounded-full flex items-center justify-center z-10 shadow-lg">
            <Quote className="h-8 w-8 text-white" />
          </div>

          {/* Testimonial Card */}
          <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 pt-16 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 absolute inset-0 translate-x-full"
                  }`}
                >
                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-8 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    {/* <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/20 mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div> */}
                    <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {testimonial.trip}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 bg-primary"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-card hover:bg-muted shadow"
              }`}
            >
              <div className="flex items-center gap-3">
                {/* <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div className="text-left">
                  <p className={`font-semibold text-sm truncate ${index === currentIndex ? "text-white" : "text-foreground"}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-xs truncate ${index === currentIndex ? "text-white/80" : "text-muted-foreground"}`}>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

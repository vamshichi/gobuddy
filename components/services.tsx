"use client"

import { useRef, useEffect, useState } from "react"
import { Plane, Hotel, Users, Globe, Map, Headphones, Shield, Clock } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Best deals on domestic and international flights with 24/7 booking support",
    color: "bg-blue-500",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Handpicked hotels from budget-friendly to luxury resorts worldwide",
    color: "bg-secondary",
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Exciting group packages for families, friends, and corporate teams",
    color: "bg-green-500",
  },
  {
    icon: Globe,
    title: "International Packages",
    description: "Curated travel experiences to exotic destinations across the globe",
    color: "bg-primary",
  },
  {
    icon: Map,
    title: "Customized Holidays",
    description: "Personalized itineraries tailored to your preferences and budget",
    color: "bg-pink-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your travel needs and queries",
    color: "bg-cyan-500",
  },
]

const features = [
  { icon: Shield, label: "100% Safe Payments", value: "Secure" },
  { icon: Clock, label: "Instant Confirmation", value: "Quick" },
  { icon: Users, label: "Happy Customers", value: "10K+" },
  { icon: Globe, label: "Destinations", value: "500+" },
]

export function Services() {
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
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground">
            From planning to execution, we provide comprehensive travel solutions 
            to make your journey seamless and memorable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Stats/Features Bar */}
        <div className={`bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.label}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold mb-1">{feature.value}</p>
                <p className="text-sm text-white/80">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

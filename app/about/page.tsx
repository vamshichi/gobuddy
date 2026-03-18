"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import { Check, Users, Globe, Award, Heart, Target, Zap, Shield, ArrowRight, Play } from "lucide-react"

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50K+", label: "Happy Travelers" },
  { value: "500+", label: "Destinations" },
  { value: "24/7", label: "Support" },
]

const values = [
  { icon: Heart, title: "Customer First", description: "Your satisfaction and happiness are at the core of everything we do." },
  { icon: Award, title: "Quality Service", description: "We deliver premium travel experiences at competitive prices." },
  { icon: Zap, title: "Innovation", description: "Embracing technology to make travel planning smarter and easier." },
  { icon: Shield, title: "Trust & Safety", description: "Your safety and security are our top priorities." },
]

const team = [
  { name: "Rahul Verma", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { name: "Priya Sharma", role: "Operations Head", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
  { name: "Amit Patel", role: "Travel Expert", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
  { name: "Sneha Reddy", role: "Customer Relations", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

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
              About GoBuddy Holidays
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Trusted <span className="text-primary">Travel</span> Companion
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that travel is not just about reaching a destination—it&apos;s about creating 
              experiences, building connections, and discovering new possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={sectionRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                  alt="Our Journey"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Globe className="h-7 w-7 text-secondary" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">500+</p>
                      <p className="text-sm text-muted-foreground">Destinations Covered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                From Passion to <span className="text-primary">Purpose</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                GoBuddy Holidays was born from a simple belief: everyone deserves to experience the joy of travel. 
                What started as a small team of travel enthusiasts has grown into a trusted travel partner for 
                thousands of happy travelers across India.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We combine customer-first service with smart technology to offer personalized travel solutions 
                for individuals, families, and businesses. Our commitment to quality, affordability, and 
                exceptional service sets us apart in the travel industry.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-muted/50 rounded-xl">
                    <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 rounded-full">
                <Play className="h-4 w-4" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To make travel accessible, enjoyable, and memorable for everyone. We strive to provide 
                personalized travel solutions that exceed expectations and create lasting memories.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build a smart travel ecosystem that not only helps people explore the world but also 
                connects opportunities, services, and experiences through innovation and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Believe</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="group text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Meet the Experts</h2>
            <p className="text-muted-foreground mt-4">
              A passionate team dedicated to making your travel dreams come true
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-border group-hover:ring-primary/50 transition-all">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-secondary text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you create unforgettable travel experiences. Contact us today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 rounded-full">
              Plan Your Trip
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}

"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, ArrowRight, Award, Heart, Zap, Target } from "lucide-react"

const reasons = [
  "Friendly, customer-focused approach",
  "Affordable and flexible travel packages",
  "Easy booking and support",
  "Personalized travel recommendations",
  "Growing AI-powered travel planning",
]

const values = [
  { icon: Heart, label: "Customer First", description: "Your satisfaction is our priority" },
  { icon: Award, label: "Quality Service", description: "Premium experiences at best prices" },
  { icon: Zap, label: "Innovation", description: "AI-powered travel solutions" },
  { icon: Target, label: "Reliability", description: "Trusted by thousands of travelers" },
]

export function AboutSection() {
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
    <section ref={sectionRef} className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                  alt="Travel Experience"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -bottom-6 -right-6 md:right-6 bg-white rounded-xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">10+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -top-6 -left-6 md:left-6 bg-white rounded-xl shadow-xl p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">50K+</p>
                    <p className="text-sm text-muted-foreground">Happy Travelers</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full" />
            </div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About GoBuddy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Your Trusted Travel <span className="text-primary">Companion</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              GoBuddy Holidays is dedicated to making every journey simple, enjoyable, and memorable. 
              We believe that travel is not just about reaching a destination—it&apos;s about creating 
              experiences, building connections, and discovering new possibilities.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We combine customer-first service with smart technology to offer personalized travel 
              solutions for individuals, families, and businesses. Whether you&apos;re planning a relaxing 
              vacation, an adventurous getaway, or a business trip, our goal is to make your travel 
              seamless from start to finish.
            </p>

            {/* Reasons List */}
            <div className="space-y-3 mb-8">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{reason}</span>
                </div>
              ))}
            </div>
            <Link href="/about">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2 rounded-full">
              Learn More About Us
              <ArrowRight className="h-5 w-5" />
            </Button>
            </Link>
          </div>
        </div>

        {/* Values Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {values.map((value, index) => (
            <div
              key={value.label}
              className="text-center p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{value.label}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

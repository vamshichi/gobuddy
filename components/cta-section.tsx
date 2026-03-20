"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
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
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main CTA Card */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            {/* Sparkle Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full mb-4 sm:mb-6 animate-pulse">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
              Let GoBuddy Holidays craft your perfect travel experience.
              Contact us today and turn your dream vacation into reality!
            </p>

            <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 items-center">
              <Link href="/contact" className="w-full xs:w-auto">
                <Button
                  size="lg"
                  className="w-full xs:w-auto bg-white text-primary hover:bg-white/90 gap-2 rounded-full px-6 sm:px-8 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm sm:text-base"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-white/90">
              <a
                href="tel:+919902800885"
                className="flex items-center justify-center gap-2 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 9902800885</span>
              </a>
              <a
                href="mailto:support@gobuddyholidays.com"
                className="flex items-center justify-center gap-2 hover:text-white transition-colors text-sm sm:text-base break-all xs:break-normal"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>support@gobuddyholidays.com</span>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div
            className={`mt-6 sm:mt-8 md:mt-12 bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-border transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Get exclusive travel deals, insider tips, and destination inspiration delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col xs:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base min-w-0"
                />
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowUp } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Destinations", href: "/destinations" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
]

const domesticLinks = [
  { name: "Goa", href: "/destinations/goa" },
  { name: "Kerala", href: "/destinations/kerala" },
  { name: "Himachal Pradesh", href: "/destinations/himachal-pradesh" },
  { name: "Rajasthan", href: "/destinations/rajasthan" },
  { name: "Kashmir", href: "/destinations/jammu-and-kashmir" },
  { name: "Andaman", href: "/destinations/andaman-nicobar" },
]

const internationalLinks = [
  { name: "Dubai", href: "/destinations/dubai" },
  { name: "Singapore", href: "/destinations/singapore" },
  { name: "Thailand", href: "/destinations/thailand" },
  { name: "Maldives", href: "/destinations/maldives" },
  { name: "Bali", href: "/destinations/bali" },
  { name: "Switzerland", href: "/destinations/switzerland" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background relative">
      {/* Top Curve */}
      {/* <div className="absolute -top-px left-0 right-0 h-16 bg-background">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            className="text-foreground"
          />
        </svg>
      </div> */}

      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/gb1-logo.png"
                alt="GoBuddy Holidays"
                width={180}
                height={60}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/80 mb-6 leading-relaxed">
              Your trusted travel companion, dedicated to making every journey simple, enjoyable, and memorable.
            </p>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-background/80 hover:text-secondary transition-colors">
                <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+91 9902800885</span>
              </a>
              <a href="mailto:support@gobuddyholidays.com" className="flex items-center gap-3 text-background/80 hover:text-secondary transition-colors">
                <div className="w-10 h-10  flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span>support@gobuddyholidays.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/80">
                <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>35 Peddu street, Kondithope, George Town, Chennai -600001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary -mb-2" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/80 hover:text-secondary hover:translate-x-2 transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domestic Destinations */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6 relative">
              Domestic
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary -mb-2" />
            </h4>
            <ul className="space-y-3">
              {domesticLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/80 hover:text-secondary hover:translate-x-2 transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* International Destinations */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6 relative">
              International
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-secondary -mb-2" />
            </h4>
            <ul className="space-y-3">
              {internationalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/80 hover:text-secondary hover:translate-x-2 transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/80 hover:bg-secondary hover:text-white transition-all hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-background/60 text-sm text-center">
              © {new Date().getFullYear()} GoBuddy Holidays. All rights reserved.
            </p>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-secondary/80 transition-all hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

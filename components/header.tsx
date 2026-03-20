"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const domesticDestinations = [
  "Goa", "Kerala", "Himachal Pradesh", "Coorg", "Andaman & Nicobar",
  "Rajasthan", "Hyderabad", "Bangalore", "Jammu and Kashmir"
]

const internationalDestinations = [
  "Dubai", "Singapore", "Thailand", "Bali", "Maldives",
  "Paris", "Switzerland", "Australia", "Malaysia", "Vietnam"
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/gb-logo.png"
              alt="GoBuddy Holidays"
              width={180}
              height={60}
              className="h-12 w-auto md:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                Domestic <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="grid grid-cols-2 gap-1 w-80 p-2">
                {domesticDestinations.map((dest) => (
                  <DropdownMenuItem key={dest} asChild>
                    <Link href={`/destinations/${dest.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}>
                      {dest}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                International <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="grid grid-cols-2 gap-1 w-80 p-2">
                {internationalDestinations.map((dest) => (
                  <DropdownMenuItem key={dest} asChild>
                    <Link href={`/destinations/${dest.toLowerCase().replace(/ /g, "-")}`}>
                      {dest}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2 bg-white/10 border-white/30 text-foreground hover:bg-primary hover:text-white">
              <Phone className="h-4 w-4" />
              <span>+91 9902800885</span>
            </Button>
            <Link href='/contact'>
            <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white gap-2">
              <MapPin className="h-4 w-4" />
              Plan Your Trip
            </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t animate-in slide-in-from-top-2">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" className="font-medium text-foreground py-2">
                Home
              </Link>
              
              <div className="border-b pb-2">
                <p className="font-semibold text-primary mb-2">Domestic Destinations</p>
                <div className="grid grid-cols-2 gap-2">
                  {domesticDestinations.map((dest) => (
                    <Link
                      key={dest}
                      href={`/destinations/${dest.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {dest}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-b pb-2">
                <p className="font-semibold text-primary mb-2">International Destinations</p>
                <div className="grid grid-cols-2 gap-2">
                  {internationalDestinations.map((dest) => (
                    <Link
                      key={dest}
                      href={`/destinations/${dest.toLowerCase().replace(/ /g, "-")}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {dest}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about" className="font-medium text-foreground py-2">
                About Us
              </Link>
              <Link href="/contact" className="font-medium text-foreground py-2">
                Contact
              </Link>

              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  +91 9902800885
                </Button>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white gap-2">
                  <MapPin className="h-4 w-4" />
                  Plan Your Trip
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

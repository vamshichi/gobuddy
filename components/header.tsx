"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, MapPin, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const pilgrimageDestinations = [
  "Tirupati", "Sabarimala", "Rameswaram", "Kedarnath", "Badrinath",
  "Varanasi", "Haridwar", "Amarnath", "Madurai",
]

const honeymoonIndia = [
  "Goa", "Kerala", "Manali", "Andaman", "Himachal",
  "Munnar", "Kashmir"
]

const honeymoonInternational = [
  "Maldives", "Bali", "Switzerland",
  "Paris", "Italy", "Thailand", "Dubai", "Sri Lanka",
  "Singapore", "Malaysia", "South Africa",
  "Australia", "Spain", "Europe"
]

const domesticDestinations = [
  "Goa", "Kerala", "Himachal", "Coorg", "Andaman",
  "Rajasthan", "Hyderabad", "Bangalore", "Kashmir"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
        : "bg-black/40 py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/gb-logo.png"
              alt="GoBuddy Holidays"
              width={200}
              height={80}
              className="h-16 w-auto md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"
                }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"
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
                className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"
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

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"
                  }`}
              >
                Honeymoon <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="grid grid-cols-2 gap-6 w-[520px] p-6">

                {/* India */}
                <div>
                  <p className="font-semibold mb-2">India</p>
                  <ul className="space-y-1 text-sm">
                    {honeymoonIndia.map((dest) => (
                      <li key={dest}>
                        <Link
                          href={`/destinations/${dest.toLowerCase().replace(/ /g, "-")}`}
                          className="hover:text-primary"
                        >
                          • {dest}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* International */}
                <div>
                  <p className="font-semibold mb-2">International</p>
                  <ul className="space-y-1 text-sm">
                    {honeymoonInternational.map((dest) => (
                      <li key={dest}>
                        <Link
                          href={`/destinations/${dest.toLowerCase().replace(/ /g, "-")}`}
                          className="hover:text-primary"
                        >
                          • {dest}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>



                {/* Button */}
                {/* <div className="col-span-2 pt-3">
                  <Link href="/honeymoon">
                    <Button className="bg-black text-white hover:bg-black/80 w-full">
                      View All Honeymoon Packages
                    </Button>
                  </Link>
                </div> */}

              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"
                  }`}
              >
                Pilgrimage <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="grid grid-cols-2 gap-1 w-80 p-2">
                {pilgrimageDestinations.map((dest) => (
                  <DropdownMenuItem key={dest} asChild>
                    <Link
                      href={`/destinations/${dest
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {dest}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className={`font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"
                }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://www.google.com/maps?q=35+Peddu+Street+Kondithope+George+Town+Chennai+600001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="gap-2 bg-white/10 border-secondary/30 text-secondary hover:bg-primary hover:text-white">
                <MapPin className="h-4 w-4" />
              </Button>
            </Link>
            <Link href='/contact'>
              <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white gap-2">
                <Plane className="h-4 w-4" />
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t animate-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
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

              <div className="border-b pb-2">
                <p className="font-semibold text-primary mb-2">Honeymoon Destinations</p>

                <p className="text-xs font-medium text-muted-foreground mb-1">India</p>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {honeymoonIndia.map((dest) => (
                    <Link
                      key={dest}
                      href={`/destinations/${dest.toLowerCase().replace(/ /g, "-")}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {dest}
                    </Link>
                  ))}
                </div>

                <div className="border-b pb-2">
                  <p className="font-semibold text-primary mb-2">Pilgrimage Destinations</p>
                  <div className="grid grid-cols-2 gap-2">
                    {pilgrimageDestinations.map((dest) => (
                      <Link
                        key={dest}
                        href={`/destinations/${dest
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {dest}
                      </Link>
                    ))}
                  </div>
                </div>

                <p className="text-xs font-medium text-muted-foreground mb-1">International</p>
                <div className="grid grid-cols-2 gap-2">
                  {honeymoonInternational.map((dest) => (
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
                <Link
                  href="https://www.google.com/maps?q=35+Peddu+Street+Kondithope+George+Town+Chennai+600001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white gap-2">
                    <MapPin className="h-4 w-4" />
                    Plan Your Trip
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

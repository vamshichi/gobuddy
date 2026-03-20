import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { Services } from "@/components/services"
import { SpecialOffers } from "@/components/special-offers"
import { AboutSection } from "@/components/about-section"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { EnquirePopup } from "@/components/enquire-popup"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Destinations />
      <Services />
      {/* <SpecialOffers /> */}
      <AboutSection />
      <Testimonials />
      <CTASection />
      <Footer />
      <FloatingButtons />
      <EnquirePopup />
    </main>
  )
}

import type { Metadata, Viewport } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gobuddy-holidays.vercel.app'),
  title: 'GoBuddy Holidays | Your Trusted Travel Companion',
  description: 'GoBuddy Holidays offers customized holiday packages, flight and hotel bookings, group tours and corporate travel. Explore domestic and international destinations with us.',
  keywords: 'travel, holidays, vacation, tours, flights, hotels, GoBuddy, travel packages, domestic travel, international travel',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
  openGraph: {
    title: 'GoBuddy Holidays | Your Trusted Travel Companion',
    description: 'Make every journey simple, enjoyable, and memorable with GoBuddy Holidays.',
    images: ['/images/logo.jpeg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${poppins.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

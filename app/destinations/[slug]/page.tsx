"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Star, Users, Calendar, Camera, Utensils, Hotel, Plane, ArrowRight, ChevronLeft } from "lucide-react"

const destinationsData: Record<string, {
  name: string
  tagline: string
  description: string
  heroImage: string
  images: string[]
  rating: number
  duration: string
  bestTime: string
  highlights: string[]
  itinerary: { day: number; title: string; description: string }[]
  inclusions: string[]
  packages: { name: string; duration: string; features: string[] }[]
}> = {
  goa: {
    name: "Goa",
    tagline: "Beach Paradise of India",
    description:
      "Experience the perfect blend of sun, sand, and culture in India's favorite beach destination. From pristine beaches to Portuguese heritage, Goa offers an unforgettable vacation.",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1587922546307-776227941871?w=800&q=80",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800&q=80",
      // "https://images.unsplash.com/photo-1580581096469-8afb39cd0d56?w=800&q=80",
    ],
    rating: 4.8,
    duration: "3-5 Days",
    bestTime: "November - February",
    highlights: ["Baga Beach", "Fort Aguada", "Old Goa Churches", "Dudhsagar Falls", "Night Markets", "Water Sports"],
    itinerary: [
      { day: 1, title: "Arrival & North Goa", description: "Airport pickup, check-in, explore Calangute & Baga beaches, evening at Tito's Lane." },
      { day: 2, title: "Heritage Tour", description: "Visit Old Goa churches, Fort Aguada, Reis Magos Fort, sunset at Candolim beach." },
      { day: 3, title: "South Goa & Departure", description: "Explore Palolem beach, visit spice plantations, optional water sports, departure." },
    ],
    inclusions: ["Accommodation", "Breakfast", "Airport Transfers", "Sightseeing", "Tour Guide"],
    packages: [
      { name: "Budget Explorer", duration: "3 Days / 2 Nights", features: ["3-star hotel", "Breakfast", "Shared transfers"] },
      { name: "Premium Escape", duration: "4 Days / 3 Nights", features: ["4-star resort", "All meals", "Private cab", "Water sports"] },
      { name: "Luxury Retreat", duration: "5 Days / 4 Nights", features: ["5-star beach resort", "All inclusive", "Private villa", "Spa session"] },
    ],
  },

  // kerala: {
  //   name: "Kerala",
  //   tagline: "God's Own Country",
  //   description:
  //     "Discover the enchanting backwaters, lush hill stations, and rich cultural heritage of Kerala. A land of serene beauty and warm hospitality.",
  //   heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80",
  //   images: [
  //     "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&q=80",
  //     "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80",
  //     "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80",
  //   ],
  //   rating: 4.9,
  //   duration: "4-6 Days",
  //   bestTime: "September - March",
  //   highlights: ["Alleppey Backwaters", "Munnar Tea Gardens", "Kochi Fort", "Periyar Wildlife", "Kovalam Beach", "Kathakali Show"],
  //   itinerary: [
  //     { day: 1, title: "Kochi Arrival", description: "Arrive at Cochin airport, explore Fort Kochi, Chinese fishing nets, evening Kathakali show." },
  //     { day: 2, title: "Munnar Hills", description: "Drive to Munnar, visit tea plantations, Eravikulam National Park, local sightseeing." },
  //     { day: 3, title: "Thekkady Wildlife", description: "Travel to Thekkady, Periyar boat safari, spice garden visit, tribal performance." },
  //     { day: 4, title: "Alleppey Houseboat", description: "Board luxury houseboat, cruise through backwaters, overnight stay on boat." },
  //     { day: 5, title: "Kovalam & Departure", description: "Disembark, drive to Kovalam beach, leisure time, departure from Trivandrum." },
  //   ],
  //   inclusions: ["Accommodation", "All Meals on Houseboat", "Transfers", "Sightseeing", "Boat Safari"],
  //   packages: [
  //     { name: "Backwater Bliss", duration: "4 Days / 3 Nights", features: ["Houseboat stay", "Kochi tour", "Transfers included"] },
  //     { name: "Complete Kerala", duration: "5 Days / 4 Nights", features: ["Hill station + Backwaters", "All meals", "Private transfers"] },
  //     { name: "Royal Kerala", duration: "7 Days / 6 Nights", features: ["Premium resorts", "Ayurveda spa", "Complete tour", "Flight tickets"] },
  //   ],
  // },

  himachal_pradesh: {
    name: "Himachal Pradesh",
    tagline: "The Land of Gods",
    description:
      "Nestled in the mighty Himalayas, Himachal Pradesh offers breathtaking mountain landscapes, adventure sports, ancient temples, and serene hill stations. A paradise for nature lovers and thrill seekers.",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1597502552080-7be6a0e9b6bb?w=800&q=80",
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80",
      "https://images.unsplash.com/photo-1585016495481-91613f766e87?w=800&q=80",
    ],
    rating: 4.8,
    duration: "5-7 Days",
    bestTime: "March - June, October - November",
    highlights: ["Rohtang Pass", "Manali Valley", "Shimla Ridge", "Spiti Valley", "Dalhousie", "Paragliding in Bir"],
    itinerary: [
      { day: 1, title: "Arrival in Shimla", description: "Reach Shimla, walk along the Ridge, visit Christ Church, Mall Road shopping." },
      { day: 2, title: "Kufri & Naldehra", description: "Excursion to Kufri for snow activities, visit Naldehra golf course and Wildflower Hall." },
      { day: 3, title: "Drive to Manali", description: "Scenic drive via Kullu Valley, Kullu Dussehra grounds, evening arrive in Manali." },
      { day: 4, title: "Rohtang & Solang", description: "Morning trip to Rohtang Pass (snow), afternoon Solang Valley for adventure sports." },
      { day: 5, title: "Manali Sightseeing", description: "Hadimba Temple, Vashisht hot springs, Old Manali market, Tibetan monastery." },
      { day: 6, title: "Departure", description: "Leisure morning, check-out, drive back to base city." },
    ],
    inclusions: ["Accommodation", "Breakfast & Dinner", "All Transfers", "Sightseeing", "Adventure Activities"],
    packages: [
      { name: "Shimla-Manali Getaway", duration: "5 Days / 4 Nights", features: ["3-star hotels", "Breakfast", "Shared transfers"] },
      { name: "Adventure Package", duration: "6 Days / 5 Nights", features: ["4-star hotels", "All meals", "Paragliding", "River rafting"] },
      { name: "Himalayan Explorer", duration: "8 Days / 7 Nights", features: ["Premium resorts", "All inclusive", "Spiti extension", "Private cab"] },
    ],
  },

  // coorg: {
  //   name: "Coorg",
  //   tagline: "Scotland of India",
  //   description:
  //     "Coorg, the coffee capital of India, enchants visitors with its misty mountains, sprawling coffee and spice estates, dense forests, and the warm Kodava hospitality. A refreshing escape into nature.",
  //   heroImage: "https://images.unsplash.com/photo-1576677849151-5b0c46e0afd7?w=1920&q=80",
  //   images: [
  //     "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=800&q=80",
  //     "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
  //     "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&q=80",
  //   ],
  //   rating: 4.7,
  //   duration: "3-4 Days",
  //   bestTime: "October - March",
  //   highlights: ["Abbey Falls", "Raja's Seat", "Dubare Elephant Camp", "Coffee Plantations", "Talacauvery", "Namdroling Monastery"],
  //   itinerary: [
  //     { day: 1, title: "Arrival in Madikeri", description: "Arrive Coorg, check-in at plantation stay, visit Raja's Seat for sunset, local cuisine dinner." },
  //     { day: 2, title: "Plantation & Wildlife", description: "Morning coffee plantation walk, Dubare Elephant Camp, river rafting on Cauvery, Abbey Falls." },
  //     { day: 3, title: "Temples & Culture", description: "Talacauvery source of Cauvery, Bhagamandala temple, Namdroling Golden Temple, local market." },
  //     { day: 4, title: "Leisure & Departure", description: "Morning nature walk, buy fresh coffee & spices, depart with sweet memories." },
  //   ],
  //   inclusions: ["Plantation Stay", "All Meals", "Sightseeing Transfers", "Elephant Safari", "Coffee Tour"],
  //   packages: [
  //     { name: "Coffee Trail", duration: "3 Days / 2 Nights", features: ["Plantation stay", "Breakfast & dinner", "Transfers included"] },
  //     { name: "Nature Escape", duration: "4 Days / 3 Nights", features: ["Luxury resort", "All meals", "Elephant camp", "River rafting"] },
  //     { name: "Coorg Complete", duration: "5 Days / 4 Nights", features: ["Premium villa", "All inclusive", "Spa", "All sightseeing"] },
  //   ],
  // },

  andaman_nicobar: {
    name: "Andaman & Nicobar",
    tagline: "The Emerald Islands",
    description:
      "Discover the pristine paradise of Andaman & Nicobar Islands with turquoise waters, coral reefs, white sand beaches, and lush tropical forests. India's best-kept secret for beach and diving enthusiasts.",
    heroImage: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    ],
    rating: 4.8,
    duration: "5-7 Days",
    bestTime: "November - May",
    highlights: ["Radhanagar Beach", "Cellular Jail", "Havelock Island", "Scuba Diving", "Neil Island", "Sea Walk"],
    itinerary: [
      { day: 1, title: "Port Blair Arrival", description: "Arrive Port Blair, visit Cellular Jail, evening light & sound show, Ross Island." },
      { day: 2, title: "Havelock Island", description: "Ferry to Havelock, check in resort, Radhanagar Beach (Asia's best), sunset." },
      { day: 3, title: "Water Adventures", description: "Scuba diving or snorkeling at Elephant Beach, glass bottom boat ride, kayaking." },
      { day: 4, title: "Neil Island", description: "Day trip to Neil Island, Natural Bridge, Bharatpur Beach, snorkeling." },
      { day: 5, title: "Baratang & Return", description: "Limestone caves, mud volcanoes, Baratang Island, return to Port Blair, departure." },
    ],
    inclusions: ["Accommodation", "Breakfast", "Ferry Tickets", "Scuba Diving", "Sightseeing"],
    packages: [
      { name: "Island Hopper", duration: "5 Days / 4 Nights", features: ["Beach resorts", "Breakfast", "Ferry transfers", "Snorkeling"] },
      { name: "Diver's Paradise", duration: "6 Days / 5 Nights", features: ["4-star resort", "All meals", "Scuba sessions", "Water sports"] },
      { name: "Andaman Complete", duration: "7 Days / 6 Nights", features: ["Premium beachfront", "All inclusive", "Private charters", "All activities"] },
    ],
  },

  rajasthan: {
    name: "Rajasthan",
    tagline: "The Land of Kings",
    description:
      "Step into a world of royal splendor in Rajasthan — a land of magnificent forts, ornate palaces, vibrant culture, golden deserts, and timeless traditions. The crown jewel of Indian tourism.",
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800&q=80",
    ],
    rating: 4.9,
    duration: "6-8 Days",
    bestTime: "October - March",
    highlights: ["Amber Fort", "Mehrangarh Fort", "Taj Lake Palace", "Thar Desert Safari", "Pushkar Lake", "Hawa Mahal"],
    itinerary: [
      { day: 1, title: "Jaipur - Pink City", description: "Arrive Jaipur, visit Hawa Mahal, City Palace, Jantar Mantar, bazaar shopping." },
      { day: 2, title: "Amber & Nahargarh", description: "Elephant ride at Amber Fort, Nahargarh Fort, step-well Panna Meena Ka Kund." },
      { day: 3, title: "Jodhpur - Blue City", description: "Drive to Jodhpur, Mehrangarh Fort, Jaswant Thada, Ghanta Ghar market." },
      { day: 4, title: "Jaisalmer - Golden City", description: "Travel to Jaisalmer, Sonar Qila (golden fort), Patwon Ki Haveli." },
      { day: 5, title: "Desert Safari", description: "Camel safari in Sam sand dunes, folk music under stars, overnight desert camp." },
      { day: 6, title: "Udaipur - Lake City", description: "Fly to Udaipur, City Palace, boat ride on Lake Pichola, Jagdish Temple." },
      { day: 7, title: "Departure", description: "Visit Saheliyon ki Bari, Bagore ki Haveli, departure from Udaipur." },
    ],
    inclusions: ["Heritage Hotels", "Breakfast & Dinner", "All Transfers", "Elephant Ride", "Desert Camp", "Camel Safari"],
    packages: [
      { name: "Royal Circuit", duration: "6 Days / 5 Nights", features: ["Heritage hotels", "Breakfast", "Private cab", "Camel safari"] },
      { name: "Rajputana Grand", duration: "8 Days / 7 Nights", features: ["Luxury palaces", "All meals", "Desert camp", "Cultural shows"] },
      { name: "Maharaja Experience", duration: "10 Days / 9 Nights", features: ["Palace hotels", "All inclusive", "Private guide", "Vintage car"] },
    ],
  },

  hyderabad: {
    name: "Hyderabad",
    tagline: "City of Nizams & Pearls",
    description:
      "Hyderabad blends a glorious Nizami heritage with modern tech-city energy. From the iconic Charminar to world-famous biryani, the City of Pearls is a feast for all the senses.",
    heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=800&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
      "https://images.unsplash.com/photo-1600100397608-4e3b9b4a7e3f?w=800&q=80",
    ],
    rating: 4.6,
    duration: "3-4 Days",
    bestTime: "October - February",
    highlights: ["Charminar", "Golconda Fort", "Ramoji Film City", "Hussain Sagar", "Salar Jung Museum", "Laad Bazaar Pearls"],
    itinerary: [
      { day: 1, title: "Old City Heritage", description: "Arrive Hyderabad, Charminar, Chowmahalla Palace, Laad Bazaar for pearls & bangles, Irani chai." },
      { day: 2, title: "Golconda & Museums", description: "Golconda Fort sound & light show, Salar Jung Museum, Birla Mandir, Hussain Sagar." },
      { day: 3, title: "Ramoji & HITEC City", description: "Full day Ramoji Film City, evening explore HITEC City & Jubilee Hills restaurants." },
      { day: 4, title: "Shopping & Departure", description: "Begum Bazaar for shopping, authentic Hyderabadi biryani lunch, departure." },
    ],
    inclusions: ["Accommodation", "Breakfast", "Local Transfers", "Sightseeing", "Ramoji Tickets"],
    packages: [
      { name: "City Explorer", duration: "3 Days / 2 Nights", features: ["3-star hotel", "Breakfast", "Shared cab", "City tour"] },
      { name: "Nizam's Trail", duration: "4 Days / 3 Nights", features: ["4-star hotel", "All meals", "Private transfers", "Ramoji tickets"] },
      { name: "Royal Hyderabad", duration: "5 Days / 4 Nights", features: ["Luxury hotel", "All inclusive", "Private guide", "Pearl shopping tour"] },
    ],
  },

  bangalore: {
    name: "Bangalore",
    tagline: "Garden City of India",
    description:
      "India's Silicon Valley is more than just tech — Bangalore dazzles with lush gardens, a vibrant pub culture, colonial architecture, thriving street food, and easy access to stunning day-trip destinations.",
    heroImage: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80",
    ],
    rating: 4.5,
    duration: "3-4 Days",
    bestTime: "September - February",
    highlights: ["Lalbagh Gardens", "Mysore Day Trip", "Cubbon Park", "ISKCON Temple", "Nandi Hills", "Koramangala Food Trail"],
    itinerary: [
      { day: 1, title: "City Landmarks", description: "Arrive Bangalore, Lalbagh Botanical Garden, Vidhana Soudha, Cubbon Park, MG Road evening." },
      { day: 2, title: "Mysore Day Trip", description: "Day trip to Mysore — Mysore Palace, Chamundi Hills, Brindavan Gardens light show." },
      { day: 3, title: "Temples & Hills", description: "ISKCON temple morning, Nandi Hills sunrise drive (optional early start), Bull Temple." },
      { day: 4, title: "Food & Departure", description: "VV Puram food street breakfast, Commercial Street shopping, departure." },
    ],
    inclusions: ["Accommodation", "Breakfast", "Local Transfers", "Mysore Day Trip", "Sightseeing"],
    packages: [
      { name: "City Escape", duration: "3 Days / 2 Nights", features: ["3-star hotel", "Breakfast", "Cab transfers", "City tour"] },
      { name: "Karnataka Explorer", duration: "4 Days / 3 Nights", features: ["4-star hotel", "All meals", "Mysore trip", "Private cab"] },
      { name: "Garden City Special", duration: "5 Days / 4 Nights", features: ["Luxury hotel", "All inclusive", "Coorg extension", "All sightseeing"] },
    ],
  },

  jammu_kashmir: {
    name: "Jammu and Kashmir",
    tagline: "Paradise on Earth",
    description:
      "Jammu & Kashmir — aptly called Paradise on Earth — mesmerizes with snow-draped mountains, pristine Dal Lake, blooming tulip gardens, ancient Mughal architecture, and the warmth of Kashmiri culture.",
    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=800&q=80",
    ],
    rating: 4.9,
    duration: "6-8 Days",
    bestTime: "April - October",
    highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valley", "Sonamarg Glacier", "Tulip Garden", "Mughal Gardens"],
    itinerary: [
      { day: 1, title: "Srinagar Arrival", description: "Arrive Srinagar, houseboat check-in on Dal Lake, shikara ride, Hazratbal mosque." },
      { day: 2, title: "Mughal Gardens", description: "Visit Shalimar Bagh, Nishat Bagh, Chashme Shahi, evening floating vegetable market." },
      { day: 3, title: "Gulmarg Adventure", description: "Drive to Gulmarg, Gondola ride to Apharwat Peak, snow activities, meadow walks." },
      { day: 4, title: "Pahalgam Valley", description: "Travel to Pahalgam, Betaab Valley, Chandanwari, Aru Valley, river side walks." },
      { day: 5, title: "Sonamarg Day Trip", description: "Scenic drive to Sonamarg, glacier trek, Thajiwas Glacier, return to Srinagar." },
      { day: 6, title: "Jammu & Departure", description: "Drive to Jammu, Vaishno Devi (optional), Ranbireshwar temple, departure." },
    ],
    inclusions: ["Houseboat + Hotel Stays", "All Meals", "Shikara Ride", "Gondola Tickets", "All Transfers", "Sightseeing"],
    packages: [
      { name: "Kashmir Dream", duration: "6 Days / 5 Nights", features: ["Houseboat + hotel", "All meals", "Gondola ride", "Shikara ride"] },
      { name: "Valley of Heaven", duration: "7 Days / 6 Nights", features: ["Premium houseboat", "All inclusive", "All valleys", "Pony rides"] },
      { name: "Kashmir Royal", duration: "9 Days / 8 Nights", features: ["Luxury houseboats", "All inclusive", "Helicopter option", "Complete tour"] },
    ],
  },

  dubai: {
    name: "Dubai",
    tagline: "City of Dreams",
    description:
      "Experience the epitome of luxury in Dubai — from towering skyscrapers to golden deserts, this city offers unparalleled experiences that blend futuristic vision with ancient Arabian heritage.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80",
    ],
    rating: 4.9,
    duration: "4-6 Days",
    bestTime: "November - March",
    highlights: ["Burj Khalifa", "Dubai Mall", "Desert Safari", "Palm Jumeirah", "Dubai Marina", "Gold & Spice Souks"],
    itinerary: [
      { day: 1, title: "Arrival & City Tour", description: "Airport pickup, half-day city tour, Dubai Mall visit, Burj Khalifa at sunset." },
      { day: 2, title: "Desert Safari", description: "Free morning, afternoon desert safari with BBQ dinner, belly dancing, camel ride." },
      { day: 3, title: "Abu Dhabi Day Trip", description: "Full day Abu Dhabi tour, Sheikh Zayed Mosque, Heritage Village, Corniche." },
      { day: 4, title: "Leisure & Departure", description: "Shopping at Gold Souk, Dubai Marina walk, evening departure." },
    ],
    inclusions: ["4-star Hotel", "Daily Breakfast", "Airport Transfers", "City Tour", "Desert Safari"],
    packages: [
      { name: "Dubai Express", duration: "4 Days / 3 Nights", features: ["4-star hotel", "City tour", "Desert safari", "Visa included"] },
      { name: "Dubai Deluxe", duration: "5 Days / 4 Nights", features: ["5-star hotel", "Abu Dhabi tour", "Dhow cruise", "All transfers"] },
      { name: "Dubai Ultimate", duration: "6 Days / 5 Nights", features: ["Luxury resort", "All attractions", "Private guide", "Premium experiences"] },
    ],
  },

  singapore: {
    name: "Singapore",
    tagline: "The Lion City",
    description:
      "Singapore is a dazzling city-state where futuristic architecture, multicultural cuisine, lush gardens, and world-class attractions come together in perfect harmony. A global icon of modernity and diversity.",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800&q=80",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80",
      // "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    ],
    rating: 4.8,
    duration: "4-5 Days",
    bestTime: "February - April",
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Universal Studios", "Chinatown", "Orchard Road"],
    itinerary: [
      { day: 1, title: "Arrival & Marina Bay", description: "Arrive Singapore, check-in, Marina Bay Sands Skypark, Gardens by the Bay, Spectra show." },
      { day: 2, title: "Sentosa Island", description: "Universal Studios Singapore, S.E.A. Aquarium, Palawan Beach, cable car ride." },
      { day: 3, title: "Cultural Districts", description: "Chinatown temple, Little India, Arab Street, Haji Lane, Clarke Quay evening." },
      { day: 4, title: "City Icons", description: "Orchard Road shopping, Singapore Zoo or River Wonders, Night Safari, departure eve." },
    ],
    inclusions: ["4-star Hotel", "Breakfast", "Airport Transfers", "Universal Studios", "City Tour"],
    packages: [
      { name: "Singapore Starter", duration: "4 Days / 3 Nights", features: ["4-star hotel", "Breakfast", "Universal Studios", "Airport transfer"] },
      { name: "Island Explorer", duration: "5 Days / 4 Nights", features: ["5-star hotel", "All meals", "Sentosa + Zoo", "Cable car"] },
      { name: "Singapore Supreme", duration: "6 Days / 5 Nights", features: ["Luxury hotel", "All inclusive", "All attractions", "Private guide"] },
    ],
  },

  thailand: {
    name: "Thailand",
    tagline: "The Land of Smiles",
    description:
      "Thailand captivates with its ornate temples, turquoise island waters, vibrant street food markets, lively nightlife, and the legendary Thai warmth. An Asia bucket-list destination like no other.",
    heroImage: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
      "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80",
    ],
    rating: 4.8,
    duration: "5-7 Days",
    bestTime: "November - March",
    highlights: ["Grand Palace Bangkok", "Phi Phi Islands", "Chiang Mai Temples", "Floating Markets", "Muay Thai Show", "Phuket Nightlife"],
    itinerary: [
      { day: 1, title: "Bangkok Arrival", description: "Arrive Bangkok, Wat Pho, Grand Palace, Chao Phraya river cruise, Khaosan Road." },
      { day: 2, title: "Bangkok Markets", description: "Damnoen Saduak floating market, Wat Arun, Jim Thompson House, night market." },
      { day: 3, title: "Chiang Mai", description: "Fly to Chiang Mai, Doi Suthep temple, old city temples, night bazaar." },
      { day: 4, title: "Elephant & Zipline", description: "Ethical elephant sanctuary, zip-lining, Thai cooking class, night market." },
      { day: 5, title: "Phuket & Islands", description: "Fly to Phuket, Phi Phi Islands tour, snorkeling, sunset beach, Bangla Road." },
      { day: 6, title: "Leisure & Departure", description: "Beach morning, Thai massage, shopping, departure from Phuket." },
    ],
    inclusions: ["Hotels", "Breakfast", "Domestic Flights", "Island Tour", "Elephant Sanctuary", "All Transfers"],
    packages: [
      { name: "Thailand Highlights", duration: "5 Days / 4 Nights", features: ["3-star hotels", "Breakfast", "Bangkok + Phuket", "Island tour"] },
      { name: "Thai Explorer", duration: "7 Days / 6 Nights", features: ["4-star hotels", "All meals", "3 cities", "Elephant sanctuary"] },
      { name: "Royal Thailand", duration: "9 Days / 8 Nights", features: ["Luxury resorts", "All inclusive", "Private transfers", "Complete tour"] },
    ],
  },

  bali: {
    name: "Bali",
    tagline: "Island of the Gods",
    description:
      "Bali enchants with its emerald rice terraces, sacred temples perched on cliffs, world-class surf, vibrant arts scene, and a deeply spiritual Hindu culture that infuses every sunset and sunrise.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
      // "https://images.unsplash.com/photo-1544644181-1484b3fdfc32?w=800&q=80",
    ],
    rating: 4.9,
    duration: "5-7 Days",
    bestTime: "April - October",
    highlights: ["Tanah Lot Temple", "Tegallalang Rice Terraces", "Ubud Monkey Forest", "Seminyak Beach", "Mount Batur", "Kecak Dance"],
    itinerary: [
      { day: 1, title: "Arrival in Bali", description: "Arrive Ngurah Rai, hotel check-in, Seminyak Beach sunset, rooftop dinner." },
      { day: 2, title: "Ubud Cultural Day", description: "Tegallalang rice terraces, Ubud Monkey Forest, art market, Kecak fire dance at Uluwatu." },
      { day: 3, title: "Temples & Tanah Lot", description: "Tanah Lot sea temple, Beratan Lake Temple, Jatiluwih UNESCO rice fields." },
      { day: 4, title: "Mount Batur Sunrise", description: "Pre-dawn volcano trek, sunrise at the summit, hot springs, afternoon leisure." },
      { day: 5, title: "Water Sports & Nusa Penida", description: "Snorkeling or scuba at Nusa Penida, Kelingking Beach viewpoint, crystal bay." },
      { day: 6, title: "Spa & Departure", description: "Traditional Balinese spa, souvenirs at Sukawati, departure." },
    ],
    inclusions: ["Villa / Resort Stay", "Breakfast", "All Transfers", "Temple Tours", "Volcano Trek", "Dance Show"],
    packages: [
      { name: "Bali Bliss", duration: "5 Days / 4 Nights", features: ["3-star villa", "Breakfast", "Ubud + Seminyak", "Temple tour"] },
      { name: "Island Romance", duration: "6 Days / 5 Nights", features: ["Private pool villa", "All meals", "Volcano trek", "Spa session"] },
      { name: "Bali Royal", duration: "8 Days / 7 Nights", features: ["Luxury resort", "All inclusive", "Nusa Penida", "Private guide"] },
    ],
  },

  maldives: {
    name: "Maldives",
    tagline: "Paradise on Earth",
    description:
      "Escape to the pristine islands of Maldives where crystal-clear waters meet powder-white beaches. The ultimate romantic getaway with overwater villas and extraordinary marine life.",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80",
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80",
    ],
    rating: 5.0,
    duration: "4-6 Days",
    bestTime: "November - April",
    highlights: ["Water Villas", "Snorkeling", "Diving", "Sunset Cruises", "Spa Treatments", "Marine Life"],
    itinerary: [
      { day: 1, title: "Arrival in Paradise", description: "Seaplane/speedboat transfer to resort, welcome drink, villa orientation, beach time." },
      { day: 2, title: "Water Activities", description: "Snorkeling excursion, water sports, sunset dolphin cruise, romantic dinner on beach." },
      { day: 3, title: "Island Exploration", description: "Visit local island, fishing trip, spa treatment, stargazing on beach." },
      { day: 4, title: "Leisure & Departure", description: "Sunrise yoga, leisure morning, checkout, transfer to airport." },
    ],
    inclusions: ["Water Villa", "All Meals", "Seaplane Transfers", "Snorkeling", "Sunset Cruise"],
    packages: [
      { name: "Island Escape", duration: "4 Days / 3 Nights", features: ["Beach villa", "Half board", "Speedboat transfer"] },
      { name: "Honeymoon Special", duration: "5 Days / 4 Nights", features: ["Water villa", "All inclusive", "Couple spa", "Romantic dinner"] },
      { name: "Luxury Indulgence", duration: "6 Days / 5 Nights", features: ["Private pool villa", "Butler service", "Seaplane", "All experiences"] },
    ],
  },

  paris: {
    name: "Paris",
    tagline: "The City of Light",
    description:
      "Paris — the eternal City of Light — seduces with the Eiffel Tower's glow, world-class museums, haute cuisine, romantic Seine cruises, and an effortless elegance that has inspired artists and lovers for centuries.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=800&q=80",
      // "https://images.unsplash.com/photo-1431274172761-fcdab704f-07?w=800&q=80",
    ],
    rating: 4.9,
    duration: "5-7 Days",
    bestTime: "April - June, September - October",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre Dame", "Versailles Palace", "Montmartre", "Seine River Cruise"],
    itinerary: [
      { day: 1, title: "Arrival in Paris", description: "Arrive CDG airport, hotel check-in, evening Seine cruise, Eiffel Tower light show." },
      { day: 2, title: "Museums & Monuments", description: "Louvre Museum (Mona Lisa), Tuileries Garden, Place de la Concorde, Champs-Élysées." },
      { day: 3, title: "Versailles Day Trip", description: "Full day Palace of Versailles, Hall of Mirrors, royal gardens, Marie Antoinette's estate." },
      { day: 4, title: "Montmartre & Sacré-Cœur", description: "Montmartre village, Sacré-Cœur, artist quarter, Moulin Rouge neighborhood, patisseries." },
      { day: 5, title: "Notre Dame & Île de la Cité", description: "Notre Dame Cathedral, Sainte-Chapelle, Latin Quarter, Saint-Germain boutiques." },
      { day: 6, title: "Shopping & Departure", description: "Galeries Lafayette, Marais district, last café au lait & croissant, departure." },
    ],
    inclusions: ["Boutique Hotel", "Breakfast", "Airport Transfers", "Versailles Tickets", "Seine Cruise", "Museum Pass"],
    packages: [
      { name: "Paris Romance", duration: "5 Days / 4 Nights", features: ["4-star hotel", "Breakfast", "Eiffel tickets", "Seine cruise"] },
      { name: "City of Light", duration: "6 Days / 5 Nights", features: ["5-star hotel", "All meals", "Versailles", "Museum pass"] },
      { name: "Grand Paris", duration: "8 Days / 7 Nights", features: ["Luxury hotel", "All inclusive", "Private guide", "All attractions"] },
    ],
  },

  switzerland: {
    name: "Switzerland",
    tagline: "The Roof of Europe",
    description:
      "Switzerland is a land straight out of a fairy tale — snow-capped Alps, pristine lakes, charming medieval towns, precision craftsmanship, and some of the most dramatic train journeys on earth.",
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
      // "https://images.unsplash.com/photo-1531401628-2d2d5e1d8b73?w=800&q=80",
    ],
    rating: 4.9,
    duration: "6-8 Days",
    bestTime: "June - September, December - February",
    highlights: ["Jungfraujoch", "Interlaken", "Lucerne Chapel Bridge", "Matterhorn Zermatt", "Rhine Falls", "Swiss Chocolate Tour"],
    itinerary: [
      { day: 1, title: "Zurich Arrival", description: "Arrive Zurich, old town stroll, Lake Zurich, Swiss chocolate & watch shopping." },
      { day: 2, title: "Lucerne", description: "Day trip to Lucerne, Chapel Bridge, Lion Monument, boat on Lake Lucerne, Mount Pilatus." },
      { day: 3, title: "Interlaken", description: "Travel to Interlaken, adventure sports capital, Harder Kulm panorama, leisure." },
      { day: 4, title: "Jungfraujoch", description: "Top of Europe by train, Jungfraujoch at 3,454m, snow park, ice palace." },
      { day: 5, title: "Zermatt & Matterhorn", description: "Train to Zermatt, Matterhorn views from Gornergrat, car-free village walk." },
      { day: 6, title: "Geneva & Departure", description: "Jet d'Eau fountain, UN Palace, Red Cross Museum, departure from Geneva." },
    ],
    inclusions: ["4-star Hotels", "Breakfast", "Swiss Travel Pass", "Jungfraujoch Tickets", "All Transfers"],
    packages: [
      { name: "Swiss Highlights", duration: "6 Days / 5 Nights", features: ["4-star hotels", "Breakfast", "Swiss Pass", "Jungfraujoch"] },
      { name: "Alpine Splendor", duration: "8 Days / 7 Nights", features: ["5-star hotels", "All meals", "Zermatt", "Helicopter tour"] },
      { name: "Switzerland Grand", duration: "10 Days / 9 Nights", features: ["Luxury chalets", "All inclusive", "Private guide", "Complete tour"] },
    ],
  },

  australia: {
    name: "Australia",
    tagline: "The Land Down Under",
    description:
      "Australia is an adventure of epic proportions — from the Great Barrier Reef's coral gardens and Sydney's iconic harbour to the ancient red outback, unique wildlife, and cosmopolitan cities that dazzle.",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
      "https://images.unsplash.com/photo-1546268060-2592ff93ee24?w=800&q=80",
      "https://images.unsplash.com/photo-1485872299829-c673f5194813?w=800&q=80",
    ],
    rating: 4.8,
    duration: "8-12 Days",
    bestTime: "September - November, March - May",
    highlights: ["Sydney Opera House", "Great Barrier Reef", "Uluru", "Melbourne Laneways", "Daintree Rainforest", "Gold Coast"],
    itinerary: [
      { day: 1, title: "Sydney Arrival", description: "Arrive Sydney, Sydney Harbour Bridge, Opera House, Circular Quay, Darling Harbour." },
      { day: 2, title: "Blue Mountains", description: "Day trip to Blue Mountains, Three Sisters, Scenic World railway, Leura village." },
      { day: 3, title: "Melbourne", description: "Fly to Melbourne, Federation Square, laneways & street art, Queen Victoria Market." },
      { day: 4, title: "Great Ocean Road", description: "Drive Great Ocean Road, Twelve Apostles, Loch Ard Gorge, koala spotting." },
      { day: 5, title: "Cairns & Reef", description: "Fly to Cairns, Great Barrier Reef snorkel/dive, Coral Sea adventure." },
      { day: 6, title: "Daintree & Uluru", description: "Daintree Rainforest tour, fly to Uluru, sunset at the Rock, Aboriginal culture." },
      { day: 7, title: "Gold Coast & Departure", description: "Theme parks at Gold Coast, Surfers Paradise beach, departure from Brisbane." },
    ],
    inclusions: ["Hotels", "Breakfast", "Domestic Flights", "Reef Tour", "Great Ocean Road", "All Transfers"],
    packages: [
      { name: "Australia Sampler", duration: "8 Days / 7 Nights", features: ["4-star hotels", "Breakfast", "Sydney + Melbourne", "Reef day trip"] },
      { name: "East Coast Explorer", duration: "10 Days / 9 Nights", features: ["4-5 star hotels", "All meals", "Great Barrier Reef", "Great Ocean Road"] },
      { name: "Complete Australia", duration: "14 Days / 13 Nights", features: ["Luxury hotels", "All inclusive", "Uluru", "Private guide"] },
    ],
  },

  malaysia: {
    name: "Malaysia",
    tagline: "Truly Asia",
    description:
      "Malaysia is Asia in miniature — soaring twin towers, ancient rainforests, colonial hill stations, vibrant Chinatowns, pristine island beaches, and a multicultural street food scene unlike anything else on earth.",
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800&q=80",
    ],
    rating: 4.7,
    duration: "5-7 Days",
    bestTime: "November - March",
    highlights: ["Petronas Twin Towers", "Batu Caves", "Langkawi Island", "Penang Street Art", "Cameron Highlands", "KL Food Trail"],
    itinerary: [
      { day: 1, title: "Kuala Lumpur Arrival", description: "Arrive KL, Petronas Towers skybridge, KLCC Park, Bukit Bintang for street food." },
      { day: 2, title: "City Highlights", description: "Batu Caves temple, Chinatown Petaling Street, Central Market, KL Tower." },
      { day: 3, title: "Cameron Highlands", description: "Day trip to Cameron Highlands, tea plantations, strawberry farms, mossy forest walk." },
      { day: 4, title: "Penang", description: "Fly to Penang, Georgetown heritage walk, street art, Clan Jetties, hawker food heaven." },
      { day: 5, title: "Langkawi Island", description: "Ferry to Langkawi, cable car, Eagle Square, island hopping, duty-free shopping." },
      { day: 6, title: "Return & Departure", description: "Fly back to KL, last shopping at Pavilion mall, departure." },
    ],
    inclusions: ["Hotels", "Breakfast", "Domestic Flights", "City Tour", "Cameron Highlands", "All Transfers"],
    packages: [
      { name: "Malaysia Starter", duration: "5 Days / 4 Nights", features: ["4-star hotel", "Breakfast", "KL + Batu Caves", "City tour"] },
      { name: "Truly Malaysia", duration: "7 Days / 6 Nights", features: ["4-5 star hotels", "All meals", "Penang + Langkawi", "Island hopping"] },
      { name: "Malaysia Complete", duration: "9 Days / 8 Nights", features: ["Luxury hotels", "All inclusive", "3 destinations", "Private guide"] },
    ],
  },

  vietnam: {
    name: "Vietnam",
    tagline: "A Timeless Journey",
    description:
      "Vietnam is a country of staggering natural beauty and cultural complexity — emerald bays dotted with limestone karsts, ancient lantern-lit towns, imperial citadels, terraced rice paddies, and a street food culture that will haunt your dreams.",
    heroImage: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
    ],
    rating: 4.8,
    duration: "7-10 Days",
    bestTime: "February - April, August - October",
    highlights: ["Ha Long Bay", "Hoi An Old Town", "Hue Imperial City", "Sapa Rice Terraces", "Ho Chi Minh City", "Mekong Delta"],
    itinerary: [
      { day: 1, title: "Hanoi Arrival", description: "Arrive Hanoi, Hoan Kiem Lake, Old Quarter, Temple of Literature, street food tour." },
      { day: 2, title: "Ha Long Bay Cruise", description: "Board luxury cruise, sail Ha Long Bay, kayak in caves, cooking class on deck." },
      { day: 3, title: "Ha Long & Hue", description: "Morning on bay, disembark, fly to Hue, Imperial Citadel, royal tombs." },
      { day: 4, title: "Hoi An", description: "Drive to Hoi An, Ancient Town lanterns, tailors, Japanese bridge, bike tour." },
      { day: 5, title: "My Son & Da Nang", description: "My Son Cham ruins, Marble Mountains, Golden Bridge on Ba Na Hills." },
      { day: 6, title: "Ho Chi Minh City", description: "Fly to HCMC, War Remnants Museum, Reunification Palace, Ben Thanh market." },
      { day: 7, title: "Mekong Delta & Departure", description: "Mekong river boat trip, floating markets, fruit farms, departure." },
    ],
    inclusions: ["Hotels", "Breakfast", "Ha Long Bay Cruise", "Domestic Flights", "City Tours", "All Transfers"],
    packages: [
      { name: "Vietnam Express", duration: "7 Days / 6 Nights", features: ["3-star hotels", "Breakfast", "Ha Long cruise", "3 cities"] },
      { name: "Classic Vietnam", duration: "9 Days / 8 Nights", features: ["4-star hotels", "All meals", "Luxury cruise", "Mekong delta"] },
      { name: "Vietnam Royal", duration: "12 Days / 11 Nights", features: ["5-star hotels", "All inclusive", "Private guide", "Complete tour"] },
    ],
  },

  spain: {
  name: "Spain",
  tagline: "Passion. Culture. Life.",
  description:
    "Spain is a feast for the senses — golden-hour tapas bars in Seville, Gaudí's surreal Barcelona skyline, snow-dusted Sierra Nevada peaks, flamenco echoing through Granada's Albaicín, and endless sun-drenched coastlines where wine flows as freely as conversation.",
  heroImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
    // "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
    "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=800&q=80",
  ],
  rating: 4.8,
  duration: "7-10 Days",
  bestTime: "April - June, September - October",
  highlights: [
    "Sagrada Família",
    "Alhambra Palace",
    "Madrid's Prado Museum",
    "Seville's Plaza de España",
    "San Sebastián Pintxos",
    "Flamenco in Granada",
  ],
  itinerary: [
    { day: 1, title: "Madrid Arrival", description: "Land in Madrid, Plaza Mayor, Puerta del Sol, rooftop dinner with views of the Gran Vía." },
    { day: 2, title: "Madrid Masterpieces", description: "Prado Museum, Retiro Park, Reina Sofía (Guernica), tapas in La Latina neighbourhood." },
    { day: 3, title: "Toledo Day Trip", description: "UNESCO-listed Toledo — El Greco's city, medieval cathedral, Jewish quarter, Alcázar fortress." },
    { day: 4, title: "Granada", description: "Train to Granada, Alhambra Palace & Generalife gardens, Albaicín sunset, live flamenco show." },
    { day: 5, title: "Seville", description: "Bus to Seville, Real Alcázar, Giralda tower, Plaza de España, evening tapas crawl." },
    { day: 6, title: "Barcelona Arrival", description: "Fly to Barcelona, La Rambla, Gothic Quarter, Barceloneta beach, dinner at the port." },
    { day: 7, title: "Gaudí & Modernisme", description: "Sagrada Família, Park Güell, Casa Batlló, Passeig de Gràcia shopping, El Born cocktail bars." },
    { day: 8, title: "Departure", description: "Morning market at La Boqueria, last vermouth at a bodega, fly home." },
  ],
  inclusions: ["4-5 Star Hotels", "Breakfast Daily", "High-Speed Rail Passes", "Alhambra Entry", "City Tours", "Airport Transfers"],
  packages: [
    { name: "España Starter", duration: "7 Days / 6 Nights", features: ["4-star hotels", "Breakfast", "Madrid + Barcelona", "Prado & Sagrada Família"] },
    { name: "Classic Spain", duration: "9 Days / 8 Nights", features: ["4-5 star hotels", "Breakfast + Dinners", "Madrid + Granada + Seville + Barcelona", "Flamenco show"] },
    { name: "Luxury Iberia", duration: "12 Days / 11 Nights", features: ["5-star Paradores", "All inclusive", "5 cities + San Sebastián", "Private guide", "Wine experiences"] },
  ],
},

europe: {
  name: "Europe",
  tagline: "A Continent of Wonders",
  description:
    "Europe is the world's greatest open-air museum — cobblestone Paris at dawn, the Northern Lights over Norway's fjords, the canals of Venice at golden hour, Prague's fairy-tale spires, and the Amalfi cliffs tumbling into turquoise sea. Every corner rewrites your idea of beauty.",
  heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    // "https://images.unsplash.com/photo-1558383409-ab7ef8db3330?w=800&q=80",
    "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
  ],
  rating: 4.9,
  duration: "12-15 Days",
  bestTime: "May - September",
  highlights: [
    "Eiffel Tower, Paris",
    "Colosseum, Rome",
    "Swiss Alps",
    "Amsterdam Canals",
    "Prague Old Town",
    "Santorini Caldera",
  ],
  itinerary: [
    { day: 1, title: "Paris – City of Light", description: "Arrive Paris, Eiffel Tower, Seine cruise, Montmartre at sunset, bistro dinner." },
    { day: 2, title: "Paris Highlights", description: "Louvre Museum, Champs-Élysées, Arc de Triomphe, Le Marais, evening at Sacré-Cœur." },
    { day: 3, title: "Amsterdam", description: "Eurostar to Amsterdam, canal boat, Anne Frank House, Rijksmuseum, Jordaan neighbourhood." },
    { day: 4, title: "Swiss Alps", description: "Fly to Zurich, train to Interlaken, Jungfraujoch 'Top of Europe', mountain fondue dinner." },
    { day: 5, title: "Prague", description: "Fly to Prague, Charles Bridge, Old Town Square & Astronomical Clock, Prague Castle at dusk." },
    { day: 6, title: "Vienna", description: "Train to Vienna, Schönbrunn Palace, Ringstrasse, Wiener Schnitzel, Mozart concert." },
    { day: 7, title: "Rome", description: "Fly to Rome, Colosseum, Roman Forum, Trevi Fountain, Vatican Museums, Sistine Chapel." },
    { day: 8, title: "Amalfi Coast", description: "Train to Naples, drive to Amalfi Coast, Positano cliffside views, limoncello tasting, sunset dinner." },
    { day: 9, title: "Departure", description: "Return to Rome or Naples, final espresso, fly home." },
  ],
  inclusions: ["4-5 Star Hotels", "Daily Breakfast", "Rail & Air Passes", "Key Museum Entries", "Guided Tours", "All Transfers"],
  packages: [
    { name: "Europe Sampler", duration: "10 Days / 9 Nights", features: ["4-star hotels", "Breakfast", "Paris + Rome + Amsterdam", "City highlights"] },
    { name: "Grand Europa", duration: "14 Days / 13 Nights", features: ["4-5 star hotels", "Breakfast + Select Dinners", "6 countries", "Rail passes", "Guided tours"] },
    { name: "Ultimate Europe", duration: "18 Days / 17 Nights", features: ["Luxury hotels", "All inclusive", "8 countries", "Private guide", "Swiss Alps + Greece"] },
  ],
},

italy: {
  name: "Italy",
  tagline: "La Dolce Vita",
  description:
    "Italy is where art, history and food converge into something almost unreasonably beautiful — Vatican frescoes, Venetian canals, Tuscan vine-draped hillsides, the drama of the Amalfi Coast, and a culinary culture so rich it has its own philosophy of living well.",
  heroImage: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80",
    // "https://images.unsplash.com/photo-1541370976299-4d24be63de42?w=800&q=80",
    "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80",
  ],
  rating: 4.9,
  duration: "8-10 Days",
  bestTime: "April - June, September - October",
  highlights: [
    "Colosseum & Roman Forum",
    "Vatican & Sistine Chapel",
    "Venice Grand Canal",
    "Florence Uffizi Gallery",
    "Cinque Terre Coastline",
    "Amalfi Drive",
  ],
  itinerary: [
    { day: 1, title: "Rome Arrival", description: "Land in Rome, check in near the historic centre, Trevi Fountain, Piazza Navona, first gelato." },
    { day: 2, title: "Ancient Rome", description: "Colosseum, Palatine Hill, Roman Forum, Capitoline Museums, aperitivo in Trastevere." },
    { day: 3, title: "Vatican Day", description: "Vatican Museums, Sistine Chapel, St Peter's Basilica & dome climb, lunch in Prati." },
    { day: 4, title: "Florence", description: "High-speed train to Florence, Duomo climb, Uffizi Gallery, Ponte Vecchio, Oltrarno dinner." },
    { day: 5, title: "Tuscany", description: "Day trip to Siena, Chianti vineyards wine tasting, San Gimignano towers, truffle pasta lunch." },
    { day: 6, title: "Venice", description: "Train to Venice, Grand Canal vaporetto, St Mark's Basilica, Doge's Palace, Rialto market." },
    { day: 7, title: "Cinque Terre", description: "Train to Cinque Terre, hike between Monterosso and Vernazza, fresh seafood, pesto pasta." },
    { day: 8, title: "Amalfi Coast", description: "Drive to Positano, Amalfi town, Ravello gardens, limoncello, sunset over the Tyrrhenian Sea." },
    { day: 9, title: "Return & Departure", description: "Return to Naples or Rome, final espresso and cornetto, fly home." },
  ],
  inclusions: ["4-5 Star Hotels", "Daily Breakfast", "High-Speed Rail", "Museum Entries", "Wine Tasting", "All Transfers"],
  packages: [
    { name: "Italy Essentials", duration: "7 Days / 6 Nights", features: ["4-star hotels", "Breakfast", "Rome + Florence + Venice", "Colosseum + Vatican"] },
    { name: "Bella Italia", duration: "10 Days / 9 Nights", features: ["4-5 star hotels", "Breakfast + 3 Dinners", "5 destinations + Cinque Terre", "Wine & food tour"] },
    { name: "Luxe Italia", duration: "13 Days / 12 Nights", features: ["5-star boutique hotels", "All inclusive", "6 regions", "Private guide", "Truffle & cooking class"] },
  ],
},

"sri-lanka": {
  name: "Sri Lanka",
  tagline: "The Pearl of the Indian Ocean",
  description:
    "Sri Lanka packs an extraordinary world into one teardrop island — ancient rock fortresses rising from the jungle, emerald tea plantations cascading across misty hills, leopards in Yala, blue whales off Mirissa, and beaches so pristine they look painted. A destination that never stops surprising.",
  heroImage: "https://images.unsplash.com/photo-1580181921170-8d1025fe2e55?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=800&q=80",
    "https://images.unsplash.com/photo-1546975490-a79e7b39de84?w=800&q=80",
    "https://images.unsplash.com/photo-1607940580562-29d69c7e3b6b?w=800&q=80",
  ],
  rating: 4.7,
  duration: "8-12 Days",
  bestTime: "December - March (West), May - September (East)",
  highlights: [
    "Sigiriya Lion Rock",
    "Yala Safari",
    "Ella Tea Country",
    "Galle Fort",
    "Nine Arch Bridge",
    "Mirissa Whale Watching",
  ],
  itinerary: [
    { day: 1, title: "Colombo Arrival", description: "Land in Colombo, Pettah market, Independence Square, rooftop dinner in the Fort district." },
    { day: 2, title: "Cultural Triangle", description: "Drive to Sigiriya, climb the iconic Lion Rock fortress, Dambulla Cave Temple frescoes." },
    { day: 3, title: "Ancient Kingdoms", description: "Polonnaruwa ancient ruins, Anuradhapura sacred bodhi tree, elephant sightings en route." },
    { day: 4, title: "Kandy", description: "Drive to Kandy, Temple of the Tooth Relic, Royal Botanical Gardens, Kandy cultural dance show." },
    { day: 5, title: "Tea Country – Ella", description: "Scenic train through misty tea estates to Ella, Nine Arch Bridge, Little Adam's Peak hike." },
    { day: 6, title: "Yala Safari", description: "Drive to Yala National Park, morning & evening jeep safari — leopards, elephants, crocodiles." },
    { day: 7, title: "Galle & the South", description: "Explore Galle Fort's Dutch colonial streets, surf at Weligama, sea turtle nesting beach." },
    { day: 8, title: "Mirissa Beach", description: "Whale watching boat at sunrise, Mirissa beach afternoon, fresh seafood dinner at sunset." },
    { day: 9, title: "Colombo & Departure", description: "Return to Colombo, last spice and gem shopping, fly home." },
  ],
  inclusions: ["Boutique Hotels & Eco Lodges", "Breakfast Daily", "Safari Jeep", "Scenic Train Tickets", "Whale Watching", "All Transfers"],
  packages: [
    { name: "Sri Lanka Intro", duration: "8 Days / 7 Nights", features: ["3-4 star hotels", "Breakfast", "Sigiriya + Kandy + Ella", "Cultural Triangle"] },
    { name: "Pearl of Asia", duration: "11 Days / 10 Nights", features: ["4-star boutique hotels", "Breakfast + Dinners", "North to South", "Yala Safari + Mirissa"] },
    { name: "Island Complete", duration: "14 Days / 13 Nights", features: ["Luxury eco lodges", "All inclusive", "Full island circuit", "Private guide", "Whale watching"] },
  ],
},

"south-africa": {
  name: "South Africa",
  tagline: "A World in One Country",
  description:
    "South Africa is the planet in miniature — Big Five safaris in the Kruger, penguins on Cape Town's beaches, wine estates in the Stellenbosch valleys, the dramatic Garden Route cliffs, and the thundering grandeur of the Drakensberg. Nowhere else rewards adventurers so generously.",
  heroImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    "https://images.unsplash.com/photo-1534236732376-a5c31671eb9d?w=800&q=80",
    "https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=800&q=80",
  ],
  rating: 4.8,
  duration: "10-14 Days",
  bestTime: "May - September (Safari), October - April (Cape Town)",
  highlights: [
    "Kruger National Park",
    "Table Mountain",
    "Boulders Beach Penguins",
    "Cape Winelands",
    "Garden Route",
    "Robben Island",
  ],
  itinerary: [
    { day: 1, title: "Johannesburg Arrival", description: "Land in Jo'burg, Apartheid Museum, Soweto township tour, dinner in Maboneng Precinct." },
    { day: 2, title: "Kruger Safari – Day 1", description: "Fly to Kruger Mpumalanga, check into safari lodge, afternoon game drive — lion, elephant, buffalo." },
    { day: 3, title: "Kruger Safari – Day 2", description: "Dawn game drive (best for leopard), guided bush walk, Big Five check, sundowner drinks." },
    { day: 4, title: "Panorama Route", description: "Blyde River Canyon (3rd largest in the world), God's Window viewpoint, Bourke's Luck Potholes." },
    { day: 5, title: "Cape Town", description: "Fly to Cape Town, Waterfront, Bo-Kaap colourful streets, sunset cable car up Table Mountain." },
    { day: 6, title: "Cape Peninsula", description: "Cape of Good Hope, Boulders Beach African penguins, Chapman's Peak coastal drive, Kalk Bay." },
    { day: 7, title: "Cape Winelands", description: "Stellenbosch & Franschhoek wine estates, gourmet lunch, mountain vineyard tasting, cellar tour." },
    { day: 8, title: "Garden Route", description: "Drive the Garden Route — Knysna Lagoon, Tsitsikamma forest, bungee at Bloukrans Bridge." },
    { day: 9, title: "Robben Island & Farewell", description: "Ferry to Robben Island, Nelson Mandela's cell, farewell braai dinner in Cape Town." },
    { day: 10, title: "Departure", description: "Morning at the V&A Waterfront, craft shopping, fly home." },
  ],
  inclusions: ["4-5 Star Hotels & Safari Lodge", "All Meals on Safari", "Game Drives", "Domestic Flights", "Guided Tours", "All Transfers"],
  packages: [
    { name: "South Africa Intro", duration: "10 Days / 9 Nights", features: ["4-star hotels", "Breakfast", "Kruger + Cape Town", "Game drives"] },
    { name: "Rainbow Nation", duration: "13 Days / 12 Nights", features: ["4-5 star + safari lodge", "Breakfast + Safari meals", "Kruger + Panorama + Cape Town + Garden Route", "Big Five safari"] },
    { name: "Ultimate Africa", duration: "16 Days / 15 Nights", features: ["Luxury lodges & hotels", "All inclusive", "Full country circuit", "Private safari guide", "Whale watching + winelands"] },
  ],
},

shimla: {
  name: "Shimla",
  tagline: "Queen of Hills",
  description:
    "Shimla is a colonial-era hill station frozen in elegant time — Victorian Gothic architecture lining the famous Mall Road, toy train rides through cedar forests, snow-dusted ridges in winter, and the unhurried charm of a Himalayan town that once served as the summer capital of British India.",
  heroImage: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=800&q=80",
    // "https://images.unsplash.com/photo-1580289565-19a87c66a21c?w=800&q=80",
    // "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1920&q=80"
  ],
  rating: 4.6,
  duration: "4-6 Days",
  bestTime: "October - June",
  highlights: ["Mall Road", "Jakhu Temple", "Toy Train (Kalka–Shimla)", "Kufri Snow Point", "Christ Church", "Chadwick Falls"],
  itinerary: [
    { day: 1, title: "Shimla Arrival", description: "Arrive Shimla, stroll Mall Road, Scandal Point, Ridge Maidan, sunset at Christ Church." },
    { day: 2, title: "Jakhu & Old Town", description: "Jakhu Temple trek, Hanuman statue, Lakkar Bazaar for wooden crafts, Viceregal Lodge tour." },
    { day: 3, title: "Kufri Day Trip", description: "Kufri snow point, yak rides, Himalayan Nature Park, apple orchards, back for evening at Mall Road." },
    { day: 4, title: "Toy Train & Departure", description: "Heritage Kalka–Shimla toy train ride through 103 tunnels and 864 bridges, depart for plains." },
  ],
  inclusions: ["Hotel Stay", "Breakfast", "Toy Train Ticket", "Kufri Day Trip", "City Tour", "Transfers"],
  packages: [
    { name: "Shimla Weekend", duration: "3 Days / 2 Nights", features: ["3-star hotel", "Breakfast", "Mall Road + Jakhu", "City tour"] },
    { name: "Shimla Classic", duration: "5 Days / 4 Nights", features: ["4-star hotel", "Breakfast + Dinners", "Kufri + Toy Train", "All sightseeing"] },
    { name: "Shimla Luxury", duration: "7 Days / 6 Nights", features: ["Heritage hotel", "All inclusive", "Chail + Narkanda", "Private guide"] },
  ],
},

manali: {
  name: "Manali",
  tagline: "Valley of the Gods",
  description:
    "Manali is adventure and serenity poured into one Himalayan valley — roaring Beas River, snow-capped Rohtang Pass, ancient Hadimba Temple hidden in deodar forests, the buzz of Kasol backpacker cafes, and winter ski slopes that draw thrill-seekers from across India.",
  heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
  images: [
    "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?w=1200&q=80",
    "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
  ],
  rating: 4.7,
  duration: "5-7 Days",
  bestTime: "October - June (Snow), July - September (Adventure)",
  highlights: ["Rohtang Pass", "Hadimba Temple", "Solang Valley", "Old Manali", "Beas River Rafting", "Spiti Valley Gateway"],
  itinerary: [
    { day: 1, title: "Manali Arrival", description: "Arrive Manali, settle in, Manu Temple, Old Manali lanes, Beas riverside café evening." },
    { day: 2, title: "Hadimba & Solang", description: "Hadimba Devi Temple in deodar grove, Solang Valley for snow activities, paragliding or zorbing." },
    { day: 3, title: "Rohtang Pass", description: "Early morning drive to Rohtang Pass (3,978m), snow play, panoramic Himalayan views, Atal Tunnel." },
    { day: 4, title: "Kullu & Rafting", description: "Beas River white-water rafting in Kullu, Naggar Castle, Roerich Art Gallery, local market." },
    { day: 5, title: "Manikaran Hot Springs", description: "Parvati Valley drive, Manikaran Sahib Gurudwara, natural hot springs, Kasol hippie café crawl." },
    { day: 6, title: "Departure", description: "Morning at leisure, local shopping for Kullu shawls and dry fruits, depart for Chandigarh/Delhi." },
  ],
  inclusions: ["Hotel / Cottage Stay", "Breakfast", "Rohtang Permit", "Rafting", "Solang Snow Activities", "Transfers"],
  packages: [
    { name: "Manali Escape", duration: "4 Days / 3 Nights", features: ["3-star hotel", "Breakfast", "Rohtang + Solang", "City sightseeing"] },
    { name: "Adventure Manali", duration: "6 Days / 5 Nights", features: ["4-star resort", "Breakfast + Dinners", "Rafting + Paragliding + Rohtang", "Parvati Valley"] },
    { name: "Manali Grand", duration: "8 Days / 7 Nights", features: ["Luxury mountain resort", "All inclusive", "Spiti Day Trip + Skiing", "Private guide"] },
  ],
},

andaman: {
  name: "Andaman Islands",
  tagline: "Where the Sea Glows at Night",
  description:
    "The Andaman Islands are India's best-kept island secret — world-class snorkelling over coral reefs, bioluminescent beaches that shimmer after dark, the haunting Cellular Jail of Port Blair, and Robinson Crusoe isolation on Havelock and Neil Islands where time moves at the pace of the tide.",
  heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
  images: [
    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
  ],
  rating: 4.8,
  duration: "6-8 Days",
  bestTime: "October - May",
  highlights: ["Radhanagar Beach", "Cellular Jail", "Scuba Diving at Elephant Beach", "Bioluminescent Beach", "Ross Island", "Neil Island"],
  itinerary: [
    { day: 1, title: "Port Blair Arrival", description: "Fly into Port Blair, Corbyn's Cove beach, evening Cellular Jail Light & Sound Show." },
    { day: 2, title: "Port Blair Sights", description: "Cellular Jail heritage tour, Ross Island ruins, North Bay coral snorkelling, seafood dinner." },
    { day: 3, title: "Havelock Island", description: "Ferry to Havelock, check in, Radhanagar Beach (Asia's best beach) sunset, bioluminescent walk." },
    { day: 4, title: "Scuba & Snorkelling", description: "Elephant Beach scuba diving or snorkelling, coral gardens, tropical fish, beach picnic lunch." },
    { day: 5, title: "Neil Island", description: "Ferry to Neil Island, Natural Bridge, Bharatpur & Laxmanpur beaches, sunset cycling." },
    { day: 6, title: "Return & Departure", description: "Ferry back to Port Blair, last beach walk, souvenir shopping, fly home." },
  ],
  inclusions: ["Beach Resorts", "Breakfast + Dinners", "Ferry Tickets", "Scuba Diving", "Cellular Jail Entry", "Transfers"],
  packages: [
    { name: "Andaman Intro", duration: "5 Days / 4 Nights", features: ["3-star resort", "Breakfast", "Port Blair + Havelock", "Snorkelling"] },
    { name: "Island Hopper", duration: "7 Days / 6 Nights", features: ["4-star beach resort", "Breakfast + Dinners", "3 islands", "Scuba + Glass boat"] },
    { name: "Andaman Luxury", duration: "9 Days / 8 Nights", features: ["5-star water villa", "All inclusive", "4 islands + Sea Walk", "Private guide"] },
  ],
},

himachal: {
  name: "Himachal Pradesh",
  tagline: "Dev Bhoomi — Land of the Gods",
  description:
    "Himachal Pradesh is India's ultimate mountain state — from the snow-leopard country of Spiti Valley to the apple-scented Kinnaur hillsides, the trekking Mecca of Dharamsala, and the otherworldly moonscapes of Lahaul. Every valley reveals a different Himalayan world.",
  heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=800&q=80",
    // "https://images.unsplash.com/photo-1609766857896-7f65b41d638c?w=800&q=80",
    // "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
  ],
  rating: 4.8,
  duration: "8-12 Days",
  bestTime: "March - June, September - November",
  highlights: ["Spiti Valley", "Dharamsala & McLeod Ganj", "Kinnaur Kailash", "Triund Trek", "Kasol & Parvati Valley", "Dalhousie"],
  itinerary: [
    { day: 1, title: "Shimla Base", description: "Fly/drive to Shimla, Mall Road, Jakhu Temple, colonial architecture walk." },
    { day: 2, title: "Kinnaur Valley", description: "Drive along Sutlej river, Rampur, Sarahan Bhimakali Temple, apple orchards of Kinnaur." },
    { day: 3, title: "Spiti Entry", description: "Nako Lake, Dhankar Monastery perched on a cliff, Tabo Cave Monastery (1000+ years old)." },
    { day: 4, title: "Spiti Valley", description: "Kaza town, Key Monastery, Kibber village (world's highest motorable village), yak encounters." },
    { day: 5, title: "Chandratal Lake", description: "Moon Lake at 4,300m, camping under a sky full of Milky Way, one of India's most surreal nights." },
    { day: 6, title: "Manali via Rohtang", description: "Cross Rohtang Pass, Atal Tunnel, arrive Manali, Old Manali cafés and deodar forest walk." },
    { day: 7, title: "Dharamsala", description: "Drive to McLeod Ganj, Dalai Lama's Temple, Tibetan monasteries, Triund trek afternoon." },
    { day: 8, title: "Dalhousie & Khajjiar", description: "Khajjiar 'Mini Switzerland', Dainkund Peak, Dalhousie colonial churches, Panchpula waterfall." },
    { day: 9, title: "Departure", description: "Return to Pathankot or Chandigarh, fly home." },
  ],
  inclusions: ["Mountain Hotels & Camps", "Breakfast Daily", "Spiti Permits", "All Sightseeing", "Trekking Guide", "Transfers"],
  packages: [
    { name: "Himachal Highlights", duration: "7 Days / 6 Nights", features: ["3-4 star hotels", "Breakfast", "Shimla + Manali + Dharamsala", "Key sights"] },
    { name: "Spiti Explorer", duration: "10 Days / 9 Nights", features: ["Mountain lodges", "Breakfast + Dinners", "Spiti Valley circuit", "Chandratal camping"] },
    { name: "Complete Himachal", duration: "14 Days / 13 Nights", features: ["Boutique & luxury stays", "All inclusive", "6 regions", "Private guide + Porter"] },
  ],
},

munnar: {
  name: "Munnar",
  tagline: "Green Paradise of Kerala",
  description:
    "Munnar is Kerala's emerald crown — endless carpets of tea estates rolling over the Western Ghats, morning mist that blankets the valleys like silk, rare Neelakurinji flowers that bloom once in twelve years, and air so cool and clean it feels like the world's most therapeutic deep breath.",
  heroImage: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=800&q=80",
    // "https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?w=800&q=80",
  ],
  rating: 4.7,
  duration: "4-6 Days",
  bestTime: "September - March",
  highlights: ["Eravikulam National Park", "Tea Museum", "Top Station", "Mattupetty Dam", "Attukad Waterfalls", "Rajamala Nilgiri Tahr"],
  itinerary: [
    { day: 1, title: "Munnar Arrival", description: "Drive from Kochi, tea estate views en route, Attukad Waterfalls, Munnar town market." },
    { day: 2, title: "Tea Trails", description: "KDHP Tea Museum, tea factory tour, Mattupetty Dam & shola forests, Echo Point, cheese factory." },
    { day: 3, title: "Eravikulam & Top Station", description: "Eravikulam National Park (Nilgiri Tahr), Top Station panoramic views over Tamil Nadu plains." },
    { day: 4, title: "Plantation Stay", description: "Spice garden walk, cardamom and pepper picking, homestay cooking class, bonfire evening." },
    { day: 5, title: "Departure", description: "Morning tea tasting, buy fresh estate tea, drive to Kochi for onward journey." },
  ],
  inclusions: ["Tea Estate Resort", "Breakfast + Dinner", "Tea Factory Tour", "Eravikulam Entry", "Plantation Walk", "Transfers"],
  packages: [
    { name: "Munnar Getaway", duration: "3 Days / 2 Nights", features: ["3-star resort", "Breakfast", "Tea museum + Mattupetty", "City tour"] },
    { name: "Munnar Classic", duration: "5 Days / 4 Nights", features: ["Tea estate resort", "Breakfast + Dinners", "Full sightseeing + Eravikulam", "Spice garden"] },
    { name: "Munnar Luxury", duration: "7 Days / 6 Nights", features: ["Luxury plantation bungalow", "All inclusive", "Private treks + Bird watching", "Ayurveda spa"] },
  ],
},

kodaikanal: {
  name: "Kodaikanal",
  tagline: "The Princess of Hill Stations",
  description:
    "Kodaikanal is Tamil Nadu's mist-wrapped jewel perched at 2,100m — the star-shaped Kodai Lake for pedalo mornings, eucalyptus and pine forests hiding secret waterfalls, the dramatic Dolphin's Nose cliff, and a cool serenity that makes the plains feel like another planet.",
  heroImage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1582553690747-c6e48de1498e?w=800&q=80",
    "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&q=80",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
  ],
  rating: 4.5,
  duration: "3-5 Days",
  bestTime: "April - June, September - November",
  highlights: ["Kodai Lake", "Coaker's Walk", "Dolphin's Nose", "Silver Cascade Falls", "Pillar Rocks", "Bryant Park"],
  itinerary: [
    { day: 1, title: "Kodaikanal Arrival", description: "Drive up from Madurai or Coimbatore, Kodai Lake boat ride, Coaker's Walk sunset views." },
    { day: 2, title: "Peaks & Viewpoints", description: "Pillar Rocks, Green Valley View (Suicide Point), Bear Shola Falls, Fairy Falls forest walk." },
    { day: 3, title: "Dolphin's Nose & Caves", description: "Dolphin's Nose cliff walk, Liril Falls, Kodai Caves, Silver Cascade waterfall on descent road." },
    { day: 4, title: "Bryant Park & Departure", description: "Bryant Park botanical garden, homemade chocolate shopping, eucalyptus oil, depart for plains." },
  ],
  inclusions: ["Hill Station Hotel", "Breakfast", "All Viewpoints", "Boat Ride", "Guided Walk", "Transfers"],
  packages: [
    { name: "Kodai Weekend", duration: "3 Days / 2 Nights", features: ["3-star hotel", "Breakfast", "Lake + Coaker's Walk + Pillar Rocks"] },
    { name: "Kodai Explorer", duration: "5 Days / 4 Nights", features: ["4-star resort", "Breakfast + Dinners", "Full sightseeing circuit", "Forest trek"] },
    { name: "Kodai Luxury", duration: "6 Days / 5 Nights", features: ["Boutique resort", "All inclusive", "Private nature guide", "Cycle tour + Spa"] },
  ],
},

coorg: {
  name: "Coorg",
  tagline: "Scotland of India",
  description:
    "Coorg is Karnataka's wild, rain-drenched coffee country — mist-covered estates where arabica beans ripen under silver oaks, the sacred Talacauvery river source, thrilling River Tern white-water rafting, centuries-old Kodava warrior culture, and a cuisine as bold and aromatic as the land itself.",
  heroImage: "/locations/coorg/coorg1.jfif",
  images: [
    "https://images.unsplash.com/photo-1625813366060-9e62b5ef4a8c?w=800&q=80",
    "https://images.unsplash.com/photo-1579531403017-b7f14a2b857a?w=800&q=80",
    "https://images.unsplash.com/photo-1585136917228-1d3c4b4f7e2e?w=800&q=80",
  ],
  rating: 4.7,
  duration: "4-6 Days",
  bestTime: "October - March",
  highlights: ["Abbey Falls", "Talacauvery", "Dubare Elephant Camp", "Nagarhole Safari", "Raja's Seat", "Coffee Plantation Stay"],
  itinerary: [
    { day: 1, title: "Coorg Arrival", description: "Drive from Mysore or Bangalore, check into coffee estate, Raja's Seat sunset viewpoint, Kodava dinner." },
    { day: 2, title: "Plantation & Waterfalls", description: "Guided coffee estate walk, harvest and roasting demo, Abbey Falls trek, Iruppu Falls." },
    { day: 3, title: "Dubare & Rafting", description: "Dubare Elephant Camp — bathe elephants in Cauvery, white-water rafting at Barapole River." },
    { day: 4, title: "Talacauvery & Brahmagiri", description: "Talacauvery temple (Cauvery source), Brahmagiri Wildlife Sanctuary trek, Bhagamandala confluence." },
    { day: 5, title: "Nagarhole Safari & Departure", description: "Early morning jeep safari in Nagarhole National Park, tigers, leopards and wild elephants, depart." },
  ],
  inclusions: ["Coffee Estate Resort", "Breakfast + Dinner", "Elephant Camp", "Rafting", "Safari", "Transfers"],
  packages: [
    { name: "Coorg Escape", duration: "3 Days / 2 Nights", features: ["Plantation stay", "Breakfast", "Abbey Falls + Raja's Seat + Estate tour"] },
    { name: "Coorg Classic", duration: "5 Days / 4 Nights", features: ["Coffee resort", "Breakfast + Dinners", "Elephant + Rafting + Talacauvery", "All sightseeing"] },
    { name: "Coorg Wild", duration: "7 Days / 6 Nights", features: ["Luxury forest lodge", "All inclusive", "Nagarhole safari + Coorg circuit", "Private nature guide"] },
  ],
},

kerala: {
  name: "Kerala",
  tagline: "God's Own Country",
  description:
    "Kerala is India distilled into its most beautiful, graceful form — houseboats drifting through the mirror-calm Alleppey backwaters, Kathakali dancers in vivid costume, Ayurveda treatments that restore the body, Wayanad's misty forest treks, and golden beaches where the Arabian Sea meets swaying coconut palms.",
  heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80",
    "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80",
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
  ],
  rating: 4.9,
  duration: "7-10 Days",
  bestTime: "September - March",
  highlights: ["Alleppey Backwaters Houseboat", "Munnar Tea Estates", "Periyar Tiger Reserve", "Kovalam Beach", "Kochi Fort", "Kathakali Show"],
  itinerary: [
    { day: 1, title: "Kochi Arrival", description: "Fort Kochi spice market, Chinese fishing nets, Mattancherry Palace, St Francis Church, sunset cruise." },
    { day: 2, title: "Kochi & Kathakali", description: "Jew Town antiques, Kerala Folklore Museum, evening Kathakali and Kalaripayattu performance." },
    { day: 3, title: "Munnar", description: "Drive to Munnar through spice gardens, Attukad Waterfalls, tea estate check-in, plantation walk." },
    { day: 4, title: "Munnar Highlands", description: "Eravikulam National Park Nilgiri Tahr, Top Station, Mattupetty Dam, tea factory tour." },
    { day: 5, title: "Periyar", description: "Drive to Thekkady, Periyar boat safari for elephants and tigers, spice market, bamboo rafting." },
    { day: 6, title: "Alleppey Houseboat", description: "Board a houseboat on the Vembanad Lake backwaters, village life on the banks, fresh Kerala meals." },
    { day: 7, title: "Kovalam Beach", description: "Drive to Kovalam, Lighthouse Beach sunset, Ayurveda massage, seafood by the sea." },
    { day: 8, title: "Trivandrum & Departure", description: "Padmanabhaswamy Temple, Napier Museum, local Kerala sadhya lunch, fly home." },
  ],
  inclusions: ["Heritage Hotels & Houseboat", "All Meals on Houseboat", "Breakfast Daily", "Periyar Safari", "Kathakali Show", "Transfers"],
  packages: [
    { name: "Kerala Intro", duration: "6 Days / 5 Nights", features: ["3-4 star hotels", "Breakfast", "Kochi + Munnar + Alleppey", "Houseboat night"] },
    { name: "God's Own Country", duration: "9 Days / 8 Nights", features: ["4-5 star + houseboat", "Breakfast + Select Dinners", "5 destinations", "Kathakali + Periyar"] },
    { name: "Luxury Kerala", duration: "12 Days / 11 Nights", features: ["Luxury heritage resorts", "All inclusive", "Full Kerala circuit", "Ayurveda retreat", "Private guide"] },
  ],
},

ooty: {
  name: "Ooty",
  tagline: "Queen of Nilgiris",
  description:
    "Ooty is a timeless Nilgiri escape — the romantic Nilgiri Mountain Railway toy train cutting through dense shola forests, the rose-scented Botanical Garden, the mirror-smooth Ooty Lake for morning rowing, eucalyptus-perfumed air, and an old-world charm that has charmed every generation of visitor since 1818.",
  heroImage: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1200&auto=format&fit=crop",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Government_Botanical_garden_%2Cooty.jpg",
    "https://images.unsplash.com/photo-1580181921170-8d1025fe2e55?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582553690747-c6e48de1498e?w=800&q=80",
  ],
  rating: 4.5,
  duration: "3-5 Days",
  bestTime: "April - June, September - November",
  highlights: ["Nilgiri Mountain Railway", "Botanical Garden", "Doddabetta Peak", "Ooty Lake", "Pykara Falls", "Mudumalai Safari"],
  itinerary: [
    { day: 1, title: "Ooty Arrival", description: "Arrive via Mettupalayam on toy train, Botanical Garden roses, Ooty Lake boat ride, bison sighting at dusk." },
    { day: 2, title: "Peaks & Falls", description: "Doddabetta Peak (Nilgiris highest at 2,637m), Pykara Falls & Lake, Emerald Lake shola walk." },
    { day: 3, title: "Tea & Villages", description: "Toda tribal village visit, tea estate tour, Lamb's Rock & Dolphin's Nose viewpoints near Coonoor." },
    { day: 4, title: "Mudumalai & Departure", description: "Mudumalai National Park safari — elephants, spotted deer, gaur, sambar, depart from Ooty." },
  ],
  inclusions: ["Colonial Bungalow Hotel", "Breakfast", "Toy Train Ticket", "Botanical Garden", "Safari Entry", "Transfers"],
  packages: [
    { name: "Ooty Weekend", duration: "3 Days / 2 Nights", features: ["3-star hotel", "Breakfast", "Lake + Garden + Doddabetta", "City tour"] },
    { name: "Nilgiri Explorer", duration: "5 Days / 4 Nights", features: ["4-star resort", "Breakfast + Dinners", "Toy Train + Coonoor + Pykara", "Full sightseeing"] },
    { name: "Ooty Luxury", duration: "7 Days / 6 Nights", features: ["Heritage colonial bungalow", "All inclusive", "Mudumalai safari + Kotagiri", "Private nature guide"] },
  ],
},

kashmir: {
  name: "Kashmir",
  tagline: "Paradise on Earth",
  description:
    "Kashmir is the most breathtaking place on the subcontinent — a Shikara drifting past lotus gardens on Dal Lake at dawn, the saffron fields of Pampore, tulip carpets in spring at the Asia's largest tulip garden, powder-snow skiing at Gulmarg, and the crystalline alpine meadows of Sonamarg that no photograph fully captures.",
  heroImage: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1200&q=80",
  images: [
    "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80",
    "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
  ],
  rating: 4.9,
  duration: "6-8 Days",
  bestTime: "April - June (Spring/Tulips), December - February (Snow)",
  highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Betaab Valley", "Sonamarg Glacier", "Mughal Gardens", "Asia's Largest Tulip Garden"],
  itinerary: [
    { day: 1, title: "Srinagar Arrival", description: "Fly to Srinagar, check into a Dal Lake houseboat, Shikara ride at golden hour, floating market." },
    { day: 2, title: "Srinagar Mughal Gardens", description: "Nishat Bagh, Shalimar Bagh, Chashme Shahi, Shankaracharya Temple, old city carpet weavers." },
    { day: 3, title: "Gulmarg", description: "Day trip to Gulmarg, Gondola ride to Apharwat Peak (3,980m), snow activities, meadow horse ride." },
    { day: 4, title: "Pahalgam", description: "Drive to Pahalgam, Betaab Valley (DDLJ), Aru Valley, Baisaran 'Mini Switzerland', trout fishing." },
    { day: 5, title: "Sonamarg", description: "Sonamarg 'Golden Meadow', Thajiwas Glacier trek, Sindh River, Baltal base camp views." },
    { day: 6, title: "Dal Lake & Departure", description: "Early morning floating vegetable market Shikara, saffron and pashmina shopping, fly home." },
  ],
  inclusions: ["Heritage Houseboat + Hotel", "All Meals on Houseboat", "Breakfast", "Gulmarg Gondola", "Shikara Rides", "Transfers"],
  packages: [
    { name: "Kashmir Intro", duration: "5 Days / 4 Nights", features: ["Houseboat + hotel", "Breakfast", "Srinagar + Gulmarg + Pahalgam", "Shikara ride"] },
    { name: "Paradise Kashmir", duration: "7 Days / 6 Nights", features: ["Deluxe houseboat", "Breakfast + Dinners", "4 valleys + Mughal gardens", "Gondola ride"] },
    { name: "Royal Kashmir", duration: "9 Days / 8 Nights", features: ["Luxury houseboat + 5-star", "All inclusive", "Full circuit + Sonamarg", "Pashmina factory visit", "Private guide"] },
  ],
},

darjeeling: {
  name: "Darjeeling",
  tagline: "Queen of the Himalayas",
  description:
    "Darjeeling is a hill station like no other — the world's most prized tea grown on estates that cling to the clouds, the Darjeeling Himalayan Railway toy train puffing through mist, Kanchenjunga rising pink at dawn from Tiger Hill, Tibetan monasteries, and a cosmopolitan colonial-era charm that blends perfectly with Bengali warmth.",
  heroImage: "https://images.unsplash.com/photo-1544015759-237f87e3e8c6?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&q=80",
    
  ],
  rating: 4.7,
  duration: "4-6 Days",
  bestTime: "March - May, September - November",
  highlights: ["Tiger Hill Sunrise", "Darjeeling Toy Train", "Happy Valley Tea Estate", "Batasia Loop", "Padmaja Naidu Zoo", "Ghoom Monastery"],
  itinerary: [
    { day: 1, title: "Darjeeling Arrival", description: "Arrive from NJP or Bagdogra, toy train from Ghoom, Mall Road, Chowrasta square, momos dinner." },
    { day: 2, title: "Tiger Hill Sunrise", description: "Pre-dawn drive to Tiger Hill — Kanchenjunga and Everest at sunrise, Batasia Loop toy train loop, Ghoom Monastery." },
    { day: 3, title: "Tea & Culture", description: "Happy Valley Tea Estate factory visit, tea tasting, Himalayan Mountaineering Institute, Padmaja Zoo (red panda)." },
    { day: 4, title: "Mirik & Peace Pagoda", description: "Mirik Lake, Japanese Peace Pagoda, rock garden, orange orchards, Japanese Buddhist temple." },
    { day: 5, title: "Departure", description: "Last tea tasting session, buy first flush Darjeeling, drive down to Bagdogra, fly home." },
  ],
  inclusions: ["Heritage Bungalow Hotel", "Breakfast + Evening Tea", "Toy Train Ride", "Tiger Hill Drive", "Tea Estate Tour", "Transfers"],
  packages: [
    { name: "Darjeeling Weekend", duration: "3 Days / 2 Nights", features: ["3-star hotel", "Breakfast", "Tiger Hill + Tea Estate + Toy Train"] },
    { name: "Darjeeling Classic", duration: "5 Days / 4 Nights", features: ["Heritage hotel", "Breakfast + Dinners", "Full circuit + Mirik + Zoo", "Tea tasting"] },
    { name: "Darjeeling Luxury", duration: "7 Days / 6 Nights", features: ["Colonial luxury bungalow", "All inclusive", "Sikkim day trip + Pelling", "Private tea master session"] },
  ],
},

}

// Default destination data for unlisted destinations
const defaultDestination = {
  name: "Destination",
  tagline: "Explore with GoBuddy",
  description: "Discover amazing experiences with our curated travel packages. Contact us for customized itineraries.",
  heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80",
  images: [
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80",
    "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80",
  ],
  rating: 4.7,
  duration: "Customizable",
  bestTime: "Year Round",
  highlights: ["Local Experiences", "Guided Tours", "Cultural Immersion", "Adventure Activities", "Scenic Beauty", "Local Cuisine"],
  itinerary: [],
  inclusions: ["Accommodation", "Transfers", "Sightseeing", "Tour Guide"],
  packages: [],
}

export default function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const slug = resolvedParams.slug
  const destination = destinationsData[slug] || { ...defaultDestination, name: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px]">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16 ">
            {/* <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ChevronLeft className="h-5 w-5" />
              Back to Home
            </Link> */}
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-full mb-4">
                {destination.tagline}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{destination.name}</h1>
              <p className="text-lg text-white/90 mb-6">{destination.description}</p>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-semibold">{destination.rating}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 text-white" />
                  <span className="text-white">{destination.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Calendar className="h-5 w-5 text-white" />
                  <span className="text-white">{destination.bestTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="text-white">
              <p className="text-2xl font-bold">Ready to explore {destination.name}?</p>
              <span className="text-sm text-white/80">Get a customized quote for your trip</span>
            </div>
            <div className="flex gap-4">
              <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 rounded-full">
                Enquire Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              </Link>
              {/* <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary rounded-full">
                Call Us
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Top Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destination.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all">
                <Camera className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destination.images.map((image, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src={image}
                  alt={`${destination.name} ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      {destination.itinerary.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Sample Itinerary</h2>
            <div className="space-y-4">
              {destination.itinerary.map((day) => (
                <div key={day.day} className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-xl flex flex-col items-center justify-center text-white">
                    <span className="text-xs">Day</span>
                    <span className="text-2xl font-bold">{day.day}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{day.title}</h3>
                    <p className="text-muted-foreground">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packages */}
      {destination.packages.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Our Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {destination.packages.map((pkg, index) => (
                <div key={pkg.name} className={`bg-card rounded-2xl p-6 border-2 transition-all hover:shadow-xl ${index === 1 ? "border-primary shadow-lg scale-105" : "border-border"}`}>
                  {index === 1 && (
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{pkg.duration}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                  <Button className={`w-full rounded-full ${index === 1 ? "bg-primary hover:bg-primary/90 text-white" : "bg-secondary hover:bg-secondary/90 text-white"}`}>
                    Enquire Now
                  </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inclusions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">What&apos;s Included</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {destination.inclusions.map((item) => {
              const icons: Record<string, typeof Hotel> = {
                "Accommodation": Hotel,
                "Breakfast": Utensils,
                "All Meals": Utensils,
                "All Meals on Houseboat": Utensils,
                "Airport Transfers": Plane,
                "Transfers": Plane,
                "Sightseeing": Camera,
                "Tour Guide": Users,
                "Boat Safari": Camera,
                "City Tour": MapPin,
                "Desert Safari": MapPin,
                "Snorkeling": Camera,
                "Sunset Cruise": Camera,
                "4-star Hotel": Hotel,
                "Daily Breakfast": Utensils,
                "Water Villa": Hotel,
                "Seaplane Transfers": Plane,
              }
              const Icon = icons[item] || Camera
              return (
                <div key={item} className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect trip. Contact us for customized packages and best deals!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 rounded-full">
              Get Free Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary rounded-full">
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}

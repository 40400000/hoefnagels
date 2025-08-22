"use client"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"

interface Car {
  href: string
  image: string
  title: string
  subtitle?: string
  price: number
  priceNote?: string
  year: string
  kilometers: number
  power: string
  brand: string
  logo: string
  description?: string[]
  options?: string[]
  highlights?: string[]
}

interface CarPageClientProps {
  car: Car
  additionalImages: string[]
}

export function CarPageClient({ car: carProp, additionalImages }: CarPageClientProps) {
  const car = {
    ...carProp,
    brand: "Ferrari",
    year: "2023",
    title: "Ferrari SF90 Spider",
    subtitle: "4.0 V8 Cavalcade, Tailor Made, Assetto Fiorano Wing",
    price: 599500,
    priceNote: "BTW Auto",
    kilometers: 6000,
    power: "986 pk (1,000 CV)",
    highlights: [
      "Tailor Made vehicle",
      "Assetto Fiorano wing",
      "Carbon fibre package",
      "Premium Hi-Fi system",
      "20” dark forged wheels",
    ],
    description: [
      "Dit is meer dan alleen een SF90 Spider - het is een rijdende viering van Ferrari's erfgoed en vakmanschap, ontworpen voor de 10e verjaardag van de Cavalcade en afgewerkt door Ferrari's Tailor Made atelier. Gespoten in glanzend Blu Capri FYM.0502 is deze SF90 Spider een unieke ode aan design, passie en precisie, waarbij elke draad en penseelstreek een verhaal vertelt.",
      "De Blu Capri 4-laags lak, uniek voor dit model, wordt geaccentueerd door een historisch tweekleurig Nero dak (BIC2) en een handgetekende livery in Acquamarina Blu die over de motorkap, deuren en spoiler loopt. Een opvallende Bianco King cirkel op elke deur met het getal 70 herinnert aan Ferrari's raceverleden, terwijl de Italiaanse en Nederlandse vlagmotieven bij de dorpels wijzen op de wereldwijde passie die Ferrari oproept.",
      "Het interieur is een Tailor Made symfonie van Argento Alcantara en Blue South Beach Ultrasuede, waarbij elk oppervlak spreekt tot de ziel van vakmanschap: Speciale editie racestoelen in Argento 4978 Alcantara, met galletone perforaties en contrasterende Blu South Beach centrale accenten. Ton-sur-ton maatwerk stikwerk in zilver, blauw en zwart, elk passend bij het respectieve paneel met artistieke precisie. Cavallino hoofdsteunen geborduurd met speciaal garen. Aluminium F1 paddles afgewerkt in Blu Capri voor een tastbare verbinding tussen bestuurder en machine.",
      "Deze Ferrari SF90 Spider Cavalcade isn’t just a hypercar. It’s history on wheels, created to celebrate Ferrari’s most exclusive clients, hand-built by the artisans at the Tailor Made studio in Maranello. 1 of 1. Commissioned for an elite event. Immortalized in Blu Capri, laced with Acquamarina, and sealed with legacy."
    ],
    options: [
        "APPLE CARPLAY",
        "ADAPTIVE FRONTLIGHT SYSTEM",
        "INTERNAL PAINTED ALLUMINIUM ELEMENTS (EXTRA-RANGE)",
        "PAINTED ALLUMINIUM F1 PADDLES",
        "TWO-TONE BODYWORK (NERO)",
        "HISTORIC LIVERY WITH 2 CIRCLES",
        "YELLOW BRAKE CALLIPERS",
        "BLU CAPRI CAVALCADE (ARGENTINA)",
        "CARBON FIBRE SIDE AIR SPLITTER",
        "CARBON FIBRE REAR BOOT TRIM",
        "REAR DIFFUSOR CARBON FIBRE",
        "CARBON FIBRE UNDERDOOR COVER",
        "CARBON FIBRE DRIVER ZONE+LEDS",
        "CARBON FIBRE INSTRUMENT COVER",
        "CENTRE SECTION OF DOOR IN CARBON",
        "EXTERIOR SILL KICK IN CARBON",
        "CARBON FIBRE UPPER CENTRE CONSOLE TRIM",
        "COLOURED INNER DETAILS",
        "CARBON FIBRE DASHBOARD INSERTS",
        "DEDICATION PLATE IN SILVER",
        "SUSPENSION LIFTER",
        "CAVALLINO STITCHED ON HEADREST (EXTRA-RANGE)",
        "EMPH IN SPECIAL THREAD (EXTRA-RANGE)",
        "EXHAUST PIPE IN BLACK",
        "CARBON FIBRE FRONT SPOILER",
        "ADDITIONAL COLOURED MATS WITH LOGO",
        "‘SCUDERIA FERRARI’ SHIELDS",
        "ELECTROCHROMIC REARVIEW MIRROR",
        "REAR PARKING CAMERA",
        "FRONT AND REAR PARKING SENSors",
        "SPECIAL 4-LAYER COLOURS (EXTRA-RANGE)",
        "20” DARK FORGED WHEELS",
        "MATT PAINTED WHEELS (NERO)",
        "CARBON FIBRE RACING SEATS (LARGE)",
        "PREMIUM HI-FI SYSTEM",
        "SPECIAL EQUIPMENT",
        "STC1 IN SPECIAL THREAD (EXTRA-RANGE)",
        "COLOURED STANDARD STITCHING (EXTRA-RANGE)",
        "TAILOR MADE",
        "WHEEL STUD BOLTS IN TITANIUM",
        "TM CAVALCADE COLLECTION",
      ]
  }
  // Create all images array starting with main car image
  const allImages = [car.image, ...additionalImages, ...Array.from({ length: Math.max(0, 53 - additionalImages.length) }, () => null)]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentSliderStart, setCurrentSliderStart] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  const imagesPerSlide = 6 // Show 6 thumbnails at a time in vertical carousel
  const visibleThumbnails = allImages.slice(currentSliderStart, currentSliderStart + imagesPerSlide)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-[80vh] border-b border-white/17 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover object-middle"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/75"></div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-6 py-16 flex items-end justify-start min-h-full">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mt-10 mb-2">

              <div>
                <p className="text-white/80 uppercase tracking-[0.15em] text-sm font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                  {car.brand} • {car.year}
                </p>
              </div>
            </div>
            
            <h1 
              className="text-white text-4xl md:text-5xl font-medium uppercase tracking-wide mb-2"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
              }}
            >
              {car.title}
            </h1>
            <p className="text-white/80 text-lg mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              {car.subtitle}
            </p>
            
            <div className="h-[2px] w-32 bg-[#A37F66] mb-6"></div>
            
            <div>
              <p 
                className="text-3xl font-medium"
                style={{ 
                  fontFamily: "var(--font-sans)", 
                  color: "#A37F66", 
                  letterSpacing: "0.15em" 
                }}
              >
                {new Intl.NumberFormat("nl-NL", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 0,
                }).format(car.price)}
              </p>
              {car.priceNote && (
                <p className="text-white/70 text-sm mt-1" style={{ fontFamily: "var(--font-sans)" }}>
                  {car.priceNote}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content - Full Width Image Gallery */}
      <motion.section 
        className="bg-white text-[#31180E] pt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Images Gallery - Full Width */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Desktop Layout: Side Images, Main Image, Vertical Carousel */}
            <div className="hidden lg:flex gap-6 mb-8 max-w-7xl mx-auto">
              {/* RANDOM VOOR NU, UPDATEN */}
              {/* Left Side Images - Two squares, same height as main image */}
              <div className="w-64 h-[533px] flex flex-col justify-between">
                <div className="aspect-square overflow-hidden border border-gray-200">
                  {allImages[1] ? (
                    <Image
                      src={allImages[1]}
                      alt={`${car.title} - Detail view`}
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Detail</span>
                    </div>
                  )}
                </div>
                <div className="aspect-square overflow-hidden border border-gray-200">
                  {allImages[2] ? (
                    <Image
                      src={allImages[2]}
                      alt={`${car.title} - Detail view`}
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Detail</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Large Image */}
              <div className="w-[800px] h-[533px] overflow-hidden cursor-pointer" onClick={() => setIsDialogOpen(true)}>
                {allImages[currentImageIndex] ? (
                  <Image
                    src={allImages[currentImageIndex]}
                    alt={car.title}
                    width={800}
                    height={533}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">Afbeelding {currentImageIndex + 1}</span>
                  </div>
                )}
              </div>
              
              {/* Vertical Thumbnail Carousel - Full height */}
              <div className="w-28 h-[533px] flex flex-col">
                {/* Navigation Controls */}
                <div className="flex flex-col items-center gap-2 mb-2">
                  <p className="text-gray-500 text-xs uppercase tracking-[0.14em] text-center" style={{ fontFamily: "var(--font-sans)" }}>
                    {currentImageIndex + 1}/{allImages.length}
                  </p>
                  <button
                    onClick={() => setCurrentSliderStart(Math.max(0, currentSliderStart - 1))}
                    disabled={currentSliderStart === 0}
                    className="p-1 disabled:opacity-30 hover:bg-gray-100 transition-colors border border-gray-300"
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                {/* Vertical Thumbnail Carousel */}
                <div className="flex-1 flex flex-col gap-1 overflow-hidden">
                  {visibleThumbnails.map((image, i) => {
                    const actualIndex = currentSliderStart + i
                    const isActive = actualIndex === currentImageIndex
                    return (
                      <motion.button
                        key={actualIndex}
                        onClick={() => setCurrentImageIndex(actualIndex)}
                        className={`aspect-square overflow-hidden cursor-pointer transition-all duration-200 border-2 ${
                          isActive ? 'border-[#A37F66]' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {image ? (
                          <Image
                            src={image}
                            alt={`${car.title} - Thumbnail ${actualIndex + 1}`}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400 text-xs">{actualIndex + 1}</span>
                          </div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>

                {/* Bottom Navigation */}
                <div className="flex flex-col items-center mt-2">
                  <button
                    onClick={() => setCurrentSliderStart(Math.min(allImages.length - imagesPerSlide, currentSliderStart + 1))}
                    disabled={currentSliderStart + imagesPerSlide >= allImages.length}
                    className="p-1 disabled:opacity-30 hover:bg-white/5 transition-colors border border-white/20"
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Layout: Main Image with Horizontal Carousel Below */}
            <div className="lg:hidden mb-8 max-w-4xl mx-auto px-4">
              {/* Main Image */}
              <div className="w-full aspect-[3/2] overflow-hidden cursor-pointer mb-6" onClick={() => setIsDialogOpen(true)}>
                {allImages[currentImageIndex] ? (
                  <Image
                    src={allImages[currentImageIndex]}
                    alt={car.title}
                    width={800}
                    height={533}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">Afbeelding {currentImageIndex + 1}</span>
                  </div>
                )}
              </div>

              {/* Horizontal Thumbnail Carousel */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-sans)" }}>
                    {currentImageIndex + 1} van {allImages.length} foto's
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentSliderStart(Math.max(0, currentSliderStart - 1))}
                      disabled={currentSliderStart === 0}
                      className="p-2 disabled:opacity-30 hover:bg-gray-100 transition-colors border border-gray-300"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrentSliderStart(Math.min(allImages.length - 4, currentSliderStart + 1))}
                      disabled={currentSliderStart + 4 >= allImages.length}
                      className="p-2 disabled:opacity-30 hover:bg-gray-100 transition-colors border border-gray-300"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Horizontal Thumbnail Grid */}
                <div className="grid grid-cols-4 gap-3">
                  {allImages.slice(currentSliderStart, currentSliderStart + 4).map((image, i) => {
                    const actualIndex = currentSliderStart + i
                    const isActive = actualIndex === currentImageIndex
                    return (
                      <motion.button
                        key={actualIndex}
                        onClick={() => setCurrentImageIndex(actualIndex)}
                        className={`aspect-square overflow-hidden cursor-pointer transition-all duration-200 border-2 ${
                          isActive ? 'border-[#A37F66]' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {image ? (
                          <Image
                            src={image}
                            alt={`${car.title} - Thumbnail ${actualIndex + 1}`}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400 text-xs">{actualIndex + 1}</span>
                          </div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Premium Car Information Section */}
      <motion.section 
        className="bg-white text-[#31180E]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-6xl px-6 pt-0 pb-8">

          {/* Main CTAs */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-[#A37F66] text-white py-4 px-8 font-medium uppercase tracking-[0.15em] hover:bg-[#31180E] transition-all duration-300 text-center"
              style={{ fontFamily: "var(--font-spartan)" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              OFFERTE AANVRAGEN
            </motion.button>

            <motion.button 
              className="bg-transparent border-2 border-[#A37F66] text-[#A37F66] py-4 px-8 font-medium uppercase tracking-[0.15em] hover:bg-[#A37F66] hover:text-white transition-all duration-300 text-center"
              style={{ fontFamily: "var(--font-spartan)" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              TESTRIT PLANNEN
            </motion.button>

            <motion.button 
              className="bg-transparent border border-gray-300 text-[#31180E] py-4 px-8 font-medium uppercase tracking-[0.15em] hover:bg-gray-100 transition-all duration-300 text-center"
              style={{ fontFamily: "var(--font-spartan)" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Laat u terug bellen
            </motion.button>
          </motion.div>

          {/* Car Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-[#31180E] font-medium mb-4 uppercase tracking-[0.15em]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "normal",
                }}
              >
                <span className="block text-[28px] leading-[32px]">SPECIFICATIES</span>
              </h3>
              <div className="h-[2px] w-24 bg-[#A37F66] mb-8"></div>

              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium" style={{ fontFamily: "var(--font-sans)" }}>Bouwjaar</span>
                  <span className="text-[#31180E] font-medium" style={{ fontFamily: "var(--font-sans)" }}>{car.year}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium" style={{ fontFamily: "var(--font-sans)" }}>Kilometerstand</span>
                  <span className="text-[#31180E] font-medium" style={{ fontFamily: "var(--font-sans)" }}>{car.kilometers.toLocaleString()} km</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium" style={{ fontFamily: "var(--font-sans)" }}>Vermogen</span>
                  <span className="text-[#31180E] font-medium" style={{ fontFamily: "var(--font-sans)" }}>{car.power}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium" style={{ fontFamily: "var(--font-sans)" }}>Merk</span>
                  <span className="text-[#31180E] font-medium" style={{ fontFamily: "var(--font-sans)" }}>{car.brand}</span>
                </div>
              </div>
            </motion.div>

            {/* Features & Options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-[#31180E] font-medium mb-4 uppercase tracking-[0.15em]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "normal",
                }}
              >
                <span className="block text-[28px] leading-[32px]">HIGHLIGHTS</span>
              </h3>
              <div className="h-[2px] w-24 bg-[#A37F66] mb-8"></div>

              <div className="grid grid-cols-1 gap-4">
                {car.highlights?.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3 py-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + (i * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "#A37F66" }}>
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#31180E] font-medium" style={{ fontFamily: "var(--font-sans)" }}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Description Section */}
      <motion.section
        className="bg-white text-[#31180E] py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-[#31180E] font-medium mb-4 uppercase tracking-[0.15em]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
              }}
            >
              <span className="block text-[28px] leading-[32px]">Over deze auto</span>
            </h2>
            <div className="h-[2px] w-24 bg-[#A37F66] mb-8"></div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4" style={{ fontFamily: "var(--font-sans)" }}>
              {car.description?.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="bg-[#A37F66] text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <motion.h2
              className="text-white font-medium mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="block text-[40px] leading-[44px]">INTERESSE IN DEZE AUTO?</span>
            </motion.h2>
            
            <motion.p 
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-sans)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Neem direct contact op met Roel Hoefnagels voor persoonlijk advies 
              en een vrijblijvende afspraak in onze showroom in Heeze.
            </motion.p>

            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a 
                href="tel:+31631991992" 
                className="flex items-center gap-3 text-white hover:text-white/80 transition-colors text-xl font-medium"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +31 (0)6-31991992
              </a>
              
              <span className="text-white/40 text-2xl">•</span>
              
              <a 
                href="mailto:info@hoefnagels.nu" 
                className="flex items-center gap-3 text-white hover:text-white/80 transition-colors text-xl font-medium"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                info@hoefnagels.nu
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Detailed Specifications */}
      <motion.section 
        className="bg-white text-[#31180E]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-[#31180E] font-medium mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
              }}
            >
              <span className="block text-[40px] leading-[44px]">VOLLEDIGE SPECIFICATIES</span>
            </h2>
            <div className="h-[2px] w-24 bg-[#A37F66] mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {car.options?.map((spec, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-3 py-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + (i * 0.02) }}
                viewport={{ once: true }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0" style={{ color: "#A37F66" }}>
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#31180E]" style={{ fontFamily: "var(--font-sans)" }}>{spec}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
      
      {/* Full Screen Image Dialog */}
      {isDialogOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsDialogOpen(false)}
        >
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#A37F66] transition-colors z-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {allImages[currentImageIndex] && (
              <Image
                src={allImages[currentImageIndex]}
                alt={car.title}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                quality={100}
              />
            )}
          </div>
          
          {/* Navigation arrows in dialog */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrentImageIndex((prev) => prev > 0 ? prev - 1 : allImages.length - 1)
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[#A37F66] transition-colors p-2"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrentImageIndex((prev) => prev < allImages.length - 1 ? prev + 1 : 0)
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-[#A37F66] transition-colors p-2"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {currentImageIndex + 1} / {allImages.length}
          </div>
        </motion.div>
      )}
    </div>
  )
}
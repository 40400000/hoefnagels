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
  price: number
  year: string
  kilometers: number
  power: string
  brand: string
  logo: string
}

interface CarPageClientProps {
  car: Car
  additionalImages: string[]
}

export function CarPageClient({ car, additionalImages }: CarPageClientProps) {
  // Create all images array starting with main car image
  const allImages = [car.image, ...additionalImages, ...Array.from({ length: Math.max(0, 53 - additionalImages.length) }, () => null)]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentSliderStart, setCurrentSliderStart] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  const imagesPerSlide = 6 // Show 6 thumbnails at a time in vertical carousel
  const visibleThumbnails = allImages.slice(currentSliderStart, currentSliderStart + imagesPerSlide)

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-[50vh] border-b border-white/17 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover object-bottom"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/85"></div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 flex items-end justify-start min-h-full">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mt-4 mb-2">

              <div>
                <p className="text-white/80 uppercase tracking-[0.15em] text-sm font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                  {car.brand} • {car.year}
                </p>
              </div>
            </div>
            
            <h1 
              className="text-white text-4xl md:text-5xl font-medium uppercase tracking-wide mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
              }}
            >
              {car.title}
            </h1>
            
            <div className="h-[2px] w-32 bg-[rgb(255,184,0)] mb-6"></div>
            
            <p 
              className="text-3xl font-medium"
              style={{ 
                fontFamily: "var(--font-sans)", 
                color: "rgb(255,184,0)", 
                letterSpacing: "0.15em" 
              }}
            >
              {new Intl.NumberFormat("nl-NL", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(car.price)}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content - Full Width Image Gallery */}
      <motion.section 
        className="bg-black text-white py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Images Gallery - Full Width */}
          <motion.div 
            className="mb-16"
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
                <div className="aspect-square overflow-hidden border border-white/10">
                  {allImages[1] ? (
                    <Image
                      src={allImages[1]}
                      alt={`${car.title} - Detail view`}
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-black/20 flex items-center justify-center">
                      <span className="text-white/30 text-xs">Detail</span>
                    </div>
                  )}
                </div>
                <div className="aspect-square overflow-hidden border border-white/10">
                  {allImages[2] ? (
                    <Image
                      src={allImages[2]}
                      alt={`${car.title} - Detail view`}
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-black/20 flex items-center justify-center">
                      <span className="text-white/30 text-xs">Detail</span>
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
                  <div className="w-full h-full bg-black/20 border border-white/10 flex items-center justify-center">
                    <span className="text-white/40 text-lg">Afbeelding {currentImageIndex + 1}</span>
                  </div>
                )}
              </div>
              
              {/* Vertical Thumbnail Carousel - Full height */}
              <div className="w-28 h-[533px] flex flex-col">
                {/* Navigation Controls */}
                <div className="flex flex-col items-center gap-2 mb-2">
                  <p className="text-white/60 text-xs uppercase tracking-[0.14em] text-center" style={{ fontFamily: "var(--font-sans)" }}>
                    {currentImageIndex + 1}/{allImages.length}
                  </p>
                  <button
                    onClick={() => setCurrentSliderStart(Math.max(0, currentSliderStart - 1))}
                    disabled={currentSliderStart === 0}
                    className="p-1 disabled:opacity-30 hover:bg-white/5 transition-colors border border-white/20"
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
                          isActive ? 'border-[rgb(255,184,0)]' : 'border-white/10 hover:border-white/30'
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
                          <div className="w-full h-full bg-black/20 flex items-center justify-center">
                            <span className="text-white/30 text-xs">{actualIndex + 1}</span>
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
                  <div className="w-full h-full bg-black/20 border border-white/10 flex items-center justify-center">
                    <span className="text-white/40 text-lg">Afbeelding {currentImageIndex + 1}</span>
                  </div>
                )}
              </div>

              {/* Horizontal Thumbnail Carousel */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-white/60 text-sm uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-sans)" }}>
                    {currentImageIndex + 1} van {allImages.length} foto's
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentSliderStart(Math.max(0, currentSliderStart - 1))}
                      disabled={currentSliderStart === 0}
                      className="p-2 disabled:opacity-30 hover:bg-white/5 transition-colors border border-white/20"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrentSliderStart(Math.min(allImages.length - 4, currentSliderStart + 1))}
                      disabled={currentSliderStart + 4 >= allImages.length}
                      className="p-2 disabled:opacity-30 hover:bg-white/5 transition-colors border border-white/20"
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
                          isActive ? 'border-[rgb(255,184,0)]' : 'border-white/10 hover:border-white/30'
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
                          <div className="w-full h-full bg-black/20 flex items-center justify-center">
                            <span className="text-white/30 text-xs">{actualIndex + 1}</span>
                          </div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Car Details - Three Column Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_250px] gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Specifications */}
            <div className="space-y-8">
              <div>
                <h2 
                  className="text-white font-medium mb-6 uppercase tracking-[0.15em] text-2xl"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  SPECIFICATIES
                </h2>
                <div className="h-[2px] w-16 bg-[rgb(255,184,0)] mb-8"></div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-white/60 uppercase tracking-[0.14em] text-sm font-medium mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                      BOUWJAAR
                    </p>
                    <p className="text-white font-medium text-lg">{car.year}</p>
                  </div>
                  <div>
                    <p className="text-white/60 uppercase tracking-[0.14em] text-sm font-medium mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                      KILOMETERSTAND
                    </p>
                    <p className="text-white font-medium text-lg">{car.kilometers.toLocaleString()} km</p>
                  </div>
                  <div>
                    <p className="text-white/60 uppercase tracking-[0.14em] text-sm font-medium mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                      VERMOGEN
                    </p>
                    <p className="text-white font-medium text-lg">{car.power}</p>
                  </div>
                  <div>
                    <p className="text-white/60 uppercase tracking-[0.14em] text-sm font-medium mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                      MERK
                    </p>
                    <p className="text-white font-medium text-lg">{car.brand}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h2 
                  className="text-white font-medium mb-6 uppercase tracking-[0.15em] text-2xl"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  OPTIES & UITRUSTING
                </h2>
                <div className="h-[2px] w-16 bg-[rgb(255,184,0)] mb-8"></div>
                
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Keramische remmen",
                    "Lift systeem", 
                    "Paint to Sample (PTS)",
                    "PPF binnen & buiten",
                    "Clubsport pakket",
                    "Carbon details"
                  ].map((feature, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(255,184,0)" }}>
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-white font-medium" style={{ fontFamily: "var(--font-sans)" }}>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact CTAs */}
            <div className="space-y-4">
              <button 
                className="w-full bg-[rgb(255,184,0)] text-black py-3 px-4 font-medium uppercase tracking-[0.1em] hover:bg-[rgb(255,184,0)]/80 transition-colors text-sm" 
                style={{ fontFamily: "var(--font-spartan)" }}
              >
                FINANCIERING AANVRAGEN
              </button>

              <a 
                href="tel:+31599727012" 
                className="w-full block bg-transparent border border-[rgb(255,184,0)] text-[rgb(255,184,0)] py-3 px-4 font-medium tracking-[0.1em] hover:bg-[rgb(255,184,0)] hover:text-black transition-all text-center text-sm"
                style={{ fontFamily: "var(--font-spartan)" }}
              >
                0599 72 70 12
              </a>

              <button 
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-4 font-medium uppercase tracking-[0.1em] hover:bg-green-600 transition-colors text-sm"
                style={{ fontFamily: "var(--font-spartan)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"
                    fill="currentColor"
                  />
                </svg>
                WHATSAPP
              </button>
            </div>
          </motion.div>

          {/* Detailed Specifications */}
          <motion.div 
            className="mt-16 p-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-white font-medium mb-6 uppercase tracking-[0.15em] text-2xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              VOLLEDIGE SPECIFICATIES
            </h2>
            <div className="h-[2px] w-16 bg-[rgb(255,184,0)] mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              {[
                "PTS Rubystar",
                "Full PPF binnen en buiten", 
                "PCCB Keramische remmen",
                "Carbon vloermatten",
                "Sportuitlaatsysteem, eindpijp zwart",
                "MIRRORLINK (CARPLAY/GAL)",
                "Aluminiumpakket, matzwart (Blackline)",
                "Carbon dak",
                "Carbon interieurdelen", 
                "Dorpellijsten carbon",
                "Clubsportpakket",
                "Cruise control",
                "PTV Plus (geregeld sperdifferentieel)",
                "Achterasbesturing",
                "Hemelbekleding Alcantara",
                "Ledkoplamp PDLS+ zwart",
                "Stuurbekrachtiging snelh.afhankelijk (Servotronic)",
                "PDLS + incl. matrix-straal",
                "Bose Premium geluidssysteem",
                "Armleuning midden met Porsche logo",
                "Led-achterlicht met speciale styling",
                "Porsche opschrift zwart mat",
                "Stoelbekleding van alcantara",
                "Liftfunctie vooras",
                "Sport-Chrono-pakket Plus"
              ].map((spec, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0" style={{ color: "rgb(255,184,0)" }}>
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white/80" style={{ fontFamily: "var(--font-sans)" }}>{spec}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* Warranty Packages */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-white font-medium mb-6 uppercase tracking-[0.15em] text-2xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              GARANTIEPAKKETTEN
            </h2>
            <div className="h-[2px] w-16 bg-[rgb(255,184,0)] mb-12"></div>
            
            <div className="space-y-8">
              {/* Instapgarantie */}
              <motion.div 
                className="flex items-center justify-between py-4 border-b border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 
                    className="text-white font-medium mb-2 uppercase tracking-[0.1em] text-lg"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    INSTAPGARANTIE
                  </h3>
                  <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                    Auto's van 10 - 15 jaar oud en tot 200.000 km. Inclusief onderhoudsbeurt.
                  </p>
                </div>
                <div className="text-[rgb(255,184,0)] text-2xl font-bold" style={{ fontFamily: "var(--font-sans)" }}>
                  €399,-
                </div>
              </motion.div>

              {/* Excellent Garantie */}
              <motion.div 
                className="flex items-center justify-between py-4 border-b border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 
                    className="text-white font-medium mb-2 uppercase tracking-[0.1em] text-lg"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    EXCELLENT GARANTIE
                  </h3>
                  <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                    Auto's tot 10 jaar oud en tot 200.000 km. Inclusief onderhoudsbeurt.
                  </p>
                </div>
                <div className="text-[rgb(255,184,0)] text-2xl font-bold" style={{ fontFamily: "var(--font-sans)" }}>
                  €499,-
                </div>
              </motion.div>

              {/* Exclusive Garantie */}
              <motion.div 
                className="flex items-center justify-between py-4 border-b-2 border-[rgb(255,184,0)]/30 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 
                      className="text-white font-medium uppercase tracking-[0.1em] text-lg"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      EXCLUSIVE GARANTIE
                    </h3>
                    <span className="bg-[rgb(255,184,0)] text-black text-xs font-bold px-2 py-1 uppercase tracking-wide">
                      VOOR DEZE AUTO
                    </span>
                  </div>
                  <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                    Speciaal voor onze exclusives. Auto's tot 10 jaar oud en tot 200.000 km. Inclusief onderhoudsbeurt.
                  </p>
                </div>
                <div className="text-[rgb(255,184,0)] text-2xl font-bold" style={{ fontFamily: "var(--font-sans)" }}>
                  €1.499,-
                </div>
              </motion.div>
            </div>

            <p className="text-white/50 text-xs mt-8" style={{ fontFamily: "var(--font-sans)" }}>
              Onze advertenties worden met grote zorgvuldigheid op het internet geplaatst. 
              Mocht er onverhoopt toch een fout in staan, dan kan hieraan geen rechten worden ontleend.
            </p>
          </motion.div>

          {/* Contact CTA - Full Width */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 text-sm mb-6" style={{ fontFamily: "var(--font-sans)" }}>
              Voor meer vragen of informatie kunt u ons altijd bellen, mailen of smsen.
            </p>
            <motion.button
              className="inline-block group text-black uppercase tracking-[0.15em] font-medium px-16 py-5 bg-[rgb(255,184,0)] hover:bg-[rgb(255,184,0)]/80 transition-all duration-300"
              style={{ fontFamily: 'var(--font-spartan)' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="block">INTERESSE? NEEM CONTACT OP</span>
            </motion.button>
          </motion.div>
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
            className="absolute top-6 right-6 text-white hover:text-[rgb(255,184,0)] transition-colors z-10"
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
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[rgb(255,184,0)] transition-colors p-2"
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
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-[rgb(255,184,0)] transition-colors p-2"
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
"use client"
import Navbar from "@/components/navbar";
import { CarCarousel } from "@/components/car-carousel";
import Footer from "@/components/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <div className="min-h-screen bg-black">
      <div className="relative w-full h-screen border-b border-white/17 overflow-hidden">
        <Navbar />
        <video
          className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-center transform-gpu scale-120 origin-center will-change-transform"
          autoPlay
          muted
          loop
          playsInline
        >
          <source 
            src="https://glrob7hsjras0ozc.public.blob.vercel-storage.com/RTO_HERO.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Uniform dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        
        {/* Hero content */}
        <motion.div 
          className="relative z-20 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 flex items-end justify-start min-h-screen"
          style={{ y: heroY }}
        >
          <div className="mb-20">
            <h1 
              className="text-white text-4xl md:text-5xl font-medium uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
              }}
            >
              WAAR PASSIE<br />
              EN EXCLUSIVITEIT <br />
              SAMEN KOMEN
            </h1>
            <div className="mt-4 h-[1px] w-32 bg-[rgb(255,184,0)]"></div>
            
            <div className="mt-6 flex items-center space-x-3">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(255,184,0)" }}
              >
                <path 
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <a 
                href="tel:+31123456789" 
                className="text-white font-medium tracking-wide hover:text-amber-400 transition-colors duration-200 text-lg"
              >
                +31 123 456 789
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Why choose RTO Exclusive - Now second section with black background */}
      <motion.section 
        className="bg-black text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mx-auto max-w-6xl px-0 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[500px]">
            <motion.div 
              className="relative w-full h-72 md:h-auto md:min-h-[500px] overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/aanbod/IMG_8098-2048x1365.jpg"
                alt="RTO Exclusive showroom"
                fill
                sizes="(width >= 768px) 50vw, 100vw"
                className="object-cover object-center scale-110"
                priority={false}
              />
            </motion.div>

            <motion.div 
              className="px-6 md:px-12 py-10 md:py-16 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-white font-medium mb-4 uppercase tracking-[0.15em]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "normal",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="block text-[34px] leading-[36px]">WAAROM KIEST U VOOR</span>
                <span className="block text-[34px] leading-[36px]">RTO EXCLUSIVE?</span>
              </motion.h3>
              <motion.div 
                className="h-[2px] w-24 bg-[rgb(255,184,0)] mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              />

              <ul className="flex flex-col gap-6">
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(255,184,0)" }} className="flex-shrink-0 mt-1">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-white font-medium tracking-[0.14em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>EEN PERSOONLIJKE EN ONGEDWONGEN SFEER</p>
                      <p className="text-[#5c5c5c] mt-1" style={{ fontFamily: "var(--font-sans)" }}>Bij ons heerst er een persoonlijke en ongedwongen sfeer waarbij wij voor iedereen de tijd nemen.</p>
                    </div>
                  </div>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(255,184,0)" }} className="flex-shrink-0 mt-1">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-white font-medium tracking-[0.14em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>BEOORDELING VAN KLANTEN</p>
                      <p className="text-[#5c5c5c] mt-1" style={{ fontFamily: "var(--font-sans)" }}>Wij scoren een gemiddelde van 4.7/5 sterren volgens Google reviews.</p>
                    </div>
                  </div>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(255,184,0)" }} className="flex-shrink-0 mt-1">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-white font-medium tracking-[0.14em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>PROFESSIONEEL EN ERVAREN</p>
                      <p className="text-[#5c5c5c] mt-1" style={{ fontFamily: "var(--font-sans)" }}>Bij ons komt vakmanschap en expertise samen voor de beste ervaring op de weg.</p>
                    </div>
                  </div>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(255,184,0)" }} className="flex-shrink-0 mt-1">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-white font-medium tracking-[0.14em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>KWALITEIT EN TEVREDENHEID</p>
                      <p className="text-[#5c5c5c] mt-1" style={{ fontFamily: "var(--font-sans)" }}>Ontdek de perfecte combinatie van kwaliteit en klanttevredenheid.</p>
                    </div>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <section className="bg-black text-white">
        <div className="pt-12 pb-24">
          <div className="mx-auto max-w-6xl px-6 mb-8">
            <h3
              className="text-white font-medium md:text-center"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
              }}
            >
              <span className="block text-[40px] leading-[40px]">ONZE COLLECTIE</span>
            </h3>
          </div>

          <CarCarousel />

          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mt-12">
              <Link
                href="/collectie"
                className="inline-block group text-white uppercase tracking-[0.15em] font-medium"
                style={{ fontFamily: 'var(--font-spartan)' }}
              >
                <span className="block">GEHELE AANBOD BEKIJKEN</span>
                <span className="block mt-2 h-[2px] w-full bg-[rgb(255,184,0)] group-hover:bg-white transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form section */}
      <motion.section 
        className="bg-black text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mx-auto max-w-6xl px-4 py-30">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left: Contact title and description - Takes 2 columns */}
            <div className="lg:col-span-2 flex flex-col -mt-24 lg:-mt-32">
              <h2
                className="text-white font-medium mb-8"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "normal",
                }}
              >
                <span className="block text-[50px] leading-[50px]">CONTACT</span>
                <span className="block text-[50px] leading-[50px]">OPNEMEN</span>
              </h2>
              
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "rgb(92,92,92)",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Heeft u vragen over onze exclusieve collectie of bent u op zoek naar een specifieke auto? Neem contact met ons op en onze experts helpen u graag verder.
              </p>
            </div>

            {/* Right: Contact form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="firstName" 
                      className="block text-white font-medium tracking-[0.14em] uppercase mb-2"
                      style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
                    >
                      VOORNAAM *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full bg-transparent border border-white/20 focus:border-[rgb(255,184,0)] px-4 py-3 text-white transition-colors duration-200 focus:outline-none"
                      style={{ fontFamily: "var(--font-sans)" }}
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="lastName" 
                      className="block text-white font-medium tracking-[0.14em] uppercase mb-2"
                      style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
                    >
                      ACHTERNAAM *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full bg-transparent border border-white/20 focus:border-[rgb(255,184,0)] px-4 py-3 text-white transition-colors duration-200 focus:outline-none"
                      style={{ fontFamily: "var(--font-sans)" }}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-white font-medium tracking-[0.14em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
                  >
                    E-MAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border border-white/20 focus:border-[rgb(255,184,0)] px-4 py-3 text-white transition-colors duration-200 focus:outline-none"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-white font-medium tracking-[0.14em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
                  >
                    TELEFOON
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-transparent border border-white/20 focus:border-[rgb(255,184,0)] px-4 py-3 text-white transition-colors duration-200 focus:outline-none"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-white font-medium tracking-[0.14em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
                  >
                    BERICHT *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border border-white/20 focus:border-[rgb(255,184,0)] px-4 py-3 text-white transition-colors duration-200 focus:outline-none resize-none"
                    style={{ fontFamily: "var(--font-sans)" }}
                    placeholder="Vertel ons waar u naar op zoek bent..."
                  />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="inline-block group text-white uppercase tracking-[0.15em] font-medium px-8 py-4 border border-[rgb(255,184,0)] hover:bg-[rgb(255,184,0)] hover:text-black transition-all duration-300"
                    style={{ fontFamily: 'var(--font-spartan)' }}
                  >
                    <span className="block">VERSTUUR BERICHT</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}

"use client"
import Navbar from "@/components/navbar";
import { CarCarousel } from "@/components/car-carousel";
import Footer from "@/components/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-screen border-b border-gray-200 overflow-hidden">
        <Navbar />
        <iframe
          className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-center transform-gpu scale-150 origin-center will-change-transform"
          src="https://www.youtube.com/embed/l-2uVzmgzP0?rel=0&autoplay=1&mute=1&showinfo=0&enablejsapi=1&loop=1&iv_load_policy=3&playlist=l-2uVzmgzP0"
          title="Hoefnagels Hero Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        
        {/* Uniform dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/40"></div>
        
        {/* Hero content */}
        <motion.div 
          className="relative z-20 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 flex items-end justify-start min-h-screen"
          style={{ y: heroY }}
        >
          <div className="mb-20">
            <h1 
              className="text-white text-4xl md:text-6xl font-medium tracking-wide mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
              }}
            >
              HOEFNAGELS
            </h1>
            <blockquote className="text-white text-xl md:text-2xl font-light italic mb-4">
              "Exclusiviteit is bij mij altijd inclusief"
            </blockquote>
            <p className="text-white/90 text-lg font-medium">Roel Hoefnagels</p>
            <div className="mt-4 h-[1px] w-32 bg-[#A37F66]"></div>
            
            <div className="mt-8">
              <Link
                href="/collectie"
                className="inline-block group text-white uppercase tracking-[0.15em] font-medium px-8 py-4 border border-[#A37F66] hover:bg-[#A37F66] hover:text-white transition-all duration-300"
                style={{ fontFamily: 'var(--font-spartan)' }}
              >
                <span className="block">NAAR COLLECTIE</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Why choose RTO Exclusive - Now second section with black background */}
      <motion.section 
        className="bg-white text-[#31180E]"
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
                src="/HOEFNAGELS2.png"
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
                className="text-[#31180E] font-medium mb-4 uppercase tracking-[0.15em]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "normal",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="block text-[34px] leading-[36px]">WELKOM BIJ</span>
                <span className="block text-[34px] leading-[36px]">HOEFNAGELS</span>
              </motion.h3>
              <motion.div 
                className="h-[2px] w-24 bg-[#A37F66] mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              />

              <motion.p 
                className="text-[#31180E] text-lg leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-sans)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Hoefnagels is hét aanspreekpunt voor iedere liefhebber en verzamelaar met het exclusieve autohart op de juiste plaats. 
                Letterlijk, want elk uniek object staat rechtstreeks in verbinding met de eigenaar zelf: Roel Hoefnagels.
              </motion.p>
              
              <motion.p 
                className="text-gray-600 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-sans)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Hij weet klanten naadloos te integreren met het beste wat er te vinden is op het gebied van luxe wagens en snelle exoten. 
                Treed binnen in onze nieuwe showroom in Heeze (nabij Eindhoven) en laat u verrassen door de gemoedelijkheid van exclusiviteit.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="bg-[#A37F66] text-white py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>24/7</div>
              <p className="text-white/90 font-medium uppercase tracking-wider text-sm">KENNIS & ERVARING</p>
              <p className="text-white/80 text-sm mt-2">Wij hebben de expertise om voor u de ideale auto te vinden</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>9,4</div>
              <p className="text-white/90 font-medium uppercase tracking-wider text-sm">KLANTBEOORDELING</p>
              <p className="text-white/80 text-sm mt-2">Klanten waarderen ons gemiddeld met een 9,4</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>100%</div>
              <p className="text-white/90 font-medium uppercase tracking-wider text-sm">TEVREDENHEIDSGARANTIE</p>
              <p className="text-white/80 text-sm mt-2">Wij garanderen een 100% euforisch resultaat</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>1/1</div>
              <p className="text-white/90 font-medium uppercase tracking-wider text-sm">EXCLUSIVITEIT</p>
              <p className="text-white/80 text-sm mt-2">Altijd uiterst unieke exemplaren op voorraad</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <section className="bg-white text-[#31180E]">
        <div className="pt-12 pb-24">
          <div className="mx-auto max-w-6xl px-6 mb-8">
            <h3
              className="text-[#31180E] font-medium md:text-center"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
              }}
            >
              <span className="block text-[40px] leading-[40px]">ACTUEEL AANBOD</span>
            </h3>
          </div>

          <CarCarousel />

          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mt-12">
              <Link
                href="/collectie"
                className="inline-block group text-[#31180E] uppercase tracking-[0.15em] font-medium"
                style={{ fontFamily: 'var(--font-spartan)' }}
              >
                <span className="block">GEHELE AANBOD BEKIJKEN</span>
                <span className="block mt-2 h-[2px] w-full bg-[#A37F66] group-hover:bg-[#31180E] transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form section */}
      <ContactSection />
      <Footer />
    </div>
  );
}

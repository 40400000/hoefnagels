"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ContactSection } from "@/components/contact-section";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="bg-white text-[#31180E] pt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-0 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[500px]">
            <motion.div 
              className="relative w-full h-72 md:h-auto md:min-h-[500px] overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src="/hoefnagelsauto.jpg"
                alt="Hoefnagels showroom"
                fill
                sizes="(width >= 768px) 50vw, 100vw"
                className="object-cover object-right scale-110"
                priority={true}
              />
            </motion.div>

            <motion.div 
              className="px-6 md:px-12 py-10 md:py-16 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <motion.h1
                className="text-[#31180E] font-medium mb-4 uppercase tracking-[0.15em]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "normal",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <span className="block text-[34px] leading-[36px]">CONTACT MET</span>
                <span className="block text-[34px] leading-[36px]">HOEFNAGELS</span>
              </motion.h1>
              <motion.div 
                className="h-[2px] w-24 bg-[#A37F66] mb-8"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              />

              <motion.p 
                className="text-[#31180E] text-lg leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-sans)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
              >
                Bij Hoefnagels staat de klant centraal. Mocht u verhinderd zijn tijdens onze 
                reguliere openingstijden, neem dan gerust contact met ons op voor een afspraak 
                in de avonduren of op zondag.
              </motion.p>
              
              <motion.p 
                className="text-gray-600 text-base leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-sans)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
              >
                Ook voor overige vragen staan wij uiteraard voor u klaar. We zijn gevestigd in 
                Heeze, op een steenworp afstand van Eindhoven.
              </motion.p>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
              >
                <div className="flex items-center space-x-3">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "#A37F66" }}
                  >
                    <path 
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <polyline 
                      points="22,6 12,13 2,6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a 
                    href="mailto:info@hoefnagels.nu" 
                    className="text-[#31180E] font-medium tracking-wide hover:text-[#A37F66] transition-colors duration-200 text-lg"
                  >
                    info@hoefnagels.nu
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "#A37F66" }}
                  >
                    <path 
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="space-y-1">
                    <a 
                      href="tel:+31631991992" 
                      className="block text-[#31180E] font-medium tracking-wide hover:text-[#A37F66] transition-colors duration-200 text-lg"
                    >
                      Roel Hoefnagels: +31 (0)6-31991992
                    </a>
                    <a 
                      href="tel:+31631991990" 
                      className="block text-[#31180E] font-medium tracking-wide hover:text-[#A37F66] transition-colors duration-200 text-lg"
                    >
                      Camiel Billet: +31 (0) 6 31991990
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "#A37F66" }}
                    className="mt-1"
                  >
                    <path 
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <circle 
                      cx="12" 
                      cy="10" 
                      r="3" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-[#31180E] font-medium tracking-wide">
                    <p className="text-lg mb-2">Showroom Heeze</p>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Hoefnagels Punt B.V.<br />
                      Geldropseweg 22<br />
                      5591 EC Heeze Nederland
                    </p>
                    <p className="text-gray-600 text-sm mt-2 italic">
                      Op een steenworp afstand van Eindhoven
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}
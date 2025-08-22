"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <motion.section
      className="bg-white text-[#31180E]"
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
              className="text-[#31180E] font-medium mb-8"
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
                color: "#666666",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Heeft u vragen over onze exclusieve collectie of bent u op zoek
              naar een specifieke auto? Neem contact op met Roel Hoefnagels voor
              een persoonlijke, no-nonsense benadering.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
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
                <a
                  href="tel:+31631991992"
                  className="text-[#31180E] font-medium hover:text-[#A37F66] transition-colors"
                >
                  Roel: +31 (0)6-31991992
                </a>
              </div>

              <div className="flex items-center gap-3">
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
                  className="text-[#31180E] font-medium hover:text-[#A37F66] transition-colors"
                >
                  info@hoefnagels.nu
                </a>
              </div>
              <div className="flex items-start gap-3">
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
                <div>
                  <p className="text-[#31180E] font-medium">Geldropseweg 22</p>
                  <p className="text-gray-600">5591 EC Heeze, Nederland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[#31180E] font-medium tracking-[0.14em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
                  >
                    VOORNAAM *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full bg-transparent border border-gray-300 focus:border-[#A37F66] px-4 py-3 text-[#31180E] transition-colors duration-200 focus:outline-none"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[#31180E] font-medium tracking-[0.14em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
                  >
                    ACHTERNAAM *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full bg-transparent border border-gray-300 focus:border-[#A37F66] px-4 py-3 text-[#31180E] transition-colors duration-200 focus:outline-none"
                    style={{ fontFamily: "var(--font-sans)" }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#31180E] font-medium tracking-[0.14em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
                >
                  E-MAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border border-gray-300 focus:border-[#A37F66] px-4 py-3 text-[#31180E] transition-colors duration-200 focus:outline-none"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#31180E] font-medium tracking-[0.14em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
                >
                  TELEFOON
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-transparent border border-gray-300 focus:border-[#A37F66] px-4 py-3 text-[#31180E] transition-colors duration-200 focus:outline-none"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#31180E] font-medium tracking-[0.14em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
                >
                  BERICHT *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border border-gray-300 focus:border-[#A37F66] px-4 py-3 text-[#31180E] transition-colors duration-200 focus:outline-none resize-none"
                  style={{ fontFamily: "var(--font-sans)" }}
                  placeholder="Vertel ons welke exclusieve auto u zoekt..."
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="inline-block group text-[#31180E] uppercase tracking-[0.15em] font-medium px-8 py-4 border border-[#A37F66] hover:bg-[#A37F66] hover:text-white transition-all duration-300"
                  style={{ fontFamily: "var(--font-spartan)" }}
                >
                  <span className="block">VERSTUUR BERICHT</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

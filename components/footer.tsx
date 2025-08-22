export default function Footer() {
  return (
    <footer className="bg-gray-50 text-[#31180E] border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Company Description */}
        <div className="mb-12 text-center">
          <h2
            className="text-[#31180E] font-medium mb-4 text-2xl"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "normal",
            }}
          >
            Hoefnagels Punt B.V.
          </h2>
          <p
            className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-sans)",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            Wij vinden de juiste exclusieve auto bij de juiste persoon, met een persoonlijke, no-nonsense benadering, 
            jarenlange ervaring, een gigantisch netwerk én met liefde voor het vak en de auto's.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3
              className="text-[#31180E] font-medium mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
                fontSize: "20px",
                lineHeight: "24px",
              }}
            >
              Contact
            </h3>
            <div className="space-y-3">
              <div>
                <p
                  className="font-medium mb-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 500,
                    color: "#31180E",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  E-mail
                </p>
                <a
                  href="mailto:info@hoefnagels.nu"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    color: "#666666",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                  className="hover:text-[#31180E] transition-colors duration-300 block"
                >
                  info@hoefnagels.nu
                </a>
              </div>
              <div>
                <p
                  className="font-medium mb-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 500,
                    color: "#31180E",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Roel Hoefnagels
                </p>
                <a
                  href="tel:+31631991992"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    color: "#666666",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                  className="hover:text-[#31180E] transition-colors duration-300 block"
                >
                  +31 (0)6-31991992
                </a>
              </div>
              <div>
                <p
                  className="font-medium mb-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 500,
                    color: "#31180E",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Camiel Billet
                </p>
                <a
                  href="tel:+31631991990"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    color: "#666666",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                  className="hover:text-[#31180E] transition-colors duration-300 block"
                >
                  +31 (0) 6 31991990
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3
              className="text-[#31180E] font-medium mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
                fontSize: "20px",
                lineHeight: "24px",
              }}
            >
              Openingstijden
            </h3>
            <div className="space-y-1">
              {[
                { day: "Maandag", hours: "op afspraak" },
                { day: "Dinsdag", hours: "op afspraak" },
                { day: "Woensdag", hours: "op afspraak" },
                { day: "Donderdag", hours: "op afspraak" },
                { day: "Vrijdag", hours: "op afspraak" },
                { day: "Zaterdag", hours: "op afspraak" },
              ].map((item) => (
                <div key={item.day} className="flex justify-between">
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "#666666",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    {item.day}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "#31180E",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <h3
              className="text-[#31180E] font-medium mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
                fontSize: "20px",
                lineHeight: "24px",
              }}
            >
              Adres
            </h3>
            <div className="space-y-1">
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontStyle: "normal",
                  fontWeight: 500,
                  color: "#31180E",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Hoefnagels Punt B.V.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "#666666",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Geldropseweg 22
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "#666666",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                5591 EC Heeze Nederland
              </p>
              <a
                href="#"
                className="inline-block mt-2 text-[#31180E] hover:text-[#31180E]/80 transition-colors duration-300 font-medium"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                }}
              >
                Route →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with divider */}
        <div className="mt-10 pt-6 border-t border-white/20">
          <div className="text-center">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontStyle: "normal",
                fontWeight: 400,
                color: "#666666",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              © {new Date().getFullYear()} Hoefnagels Punt B.V. - Alle rechten voorbehouden - De snelste auto's voor de scherpste prijs!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
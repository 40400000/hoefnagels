export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/17">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3
              className="text-white font-medium mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "normal",
                fontSize: "20px",
                lineHeight: "24px",
              }}
            >
              Contact
            </h3>
            <div className="space-y-2">
              <div>
                <p
                  className="font-medium mb-0"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 500,
                    color: "rgb(255,255,255)",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Telefoonnummer
                </p>
                <a
                  href="tel:0599727012"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    color: "rgb(92,92,92)",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                  className="hover:text-white transition-colors duration-300 block"
                >
                  0599 727012
                </a>
              </div>
              <div>
                <p
                  className="font-medium mb-0"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 500,
                    color: "rgb(255,255,255)",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/31625370090"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    color: "rgb(92,92,92)",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                  className="hover:text-white transition-colors duration-300 block"
                >
                  06 25370090
                </a>
              </div>
              <div>
                <p
                  className="font-medium mb-0"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 500,
                    color: "rgb(255,255,255)",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:info@rtoexclusive.nl"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    color: "rgb(92,92,92)",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                  className="hover:text-white transition-colors duration-300 block"
                >
                  info@rtoexclusive.nl
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3
              className="text-white font-medium mb-4"
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
                { day: "Maandag", hours: "08.00-18.00" },
                { day: "Dinsdag", hours: "08.00-18.00" },
                { day: "Woensdag", hours: "08.00-18.00" },
                { day: "Donderdag", hours: "08.00-18.00" },
                { day: "Vrijdag", hours: "08.00-18.00" },
                { day: "Zaterdag", hours: "09.00-16.00" },
                { day: "Zondag", hours: "Gesloten" },
              ].map((item) => (
                <div key={item.day} className="flex justify-between">
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "rgb(92,92,92)",
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
                      color: item.hours === "Gesloten" ? "rgb(92,92,92)" : "rgb(255,255,255)",
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
              className="text-white font-medium mb-4"
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
                  fontWeight: 400,
                  color: "rgb(92,92,92)",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Koperslager 1
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "rgb(92,92,92)",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                9502 DA Stadskanaal
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section with divider */}
        <div className="mt-10 pt-6 border-t border-white/17">
          <div className="text-center">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontStyle: "normal",
                fontWeight: 400,
                color: "rgb(92,92,92)",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              © {new Date().getFullYear()} RTO Exclusive. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
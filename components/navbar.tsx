"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isCollectiePage = pathname === '/collectie';
  const isAutoPage = pathname === '/auto';
  const useLightText = isHomePage || isAutoPage;

  return (
    <nav className="absolute top-0 left-0 right-0 z-30">
      <div className={`mx-auto ${isCollectiePage ? 'max-w-9xl' : 'max-w-7xl'} px-6  py-4`}>
        <div className={`border-b pb-4 ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <span
                className={`text-2xl md:text-3xl font-bold tracking-wider ${useLightText ? 'text-white' : 'text-[#A37F66]'}`}
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                HOEFNAGELS
              </span>
            </Link>
          </div>
          
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/collectie" 
                className={`relative transition-colors duration-200 uppercase tracking-[0.1em] font-medium text-lg ${
                  useLightText 
                    ? 'text-white hover:text-amber-400' 
                    : 'text-[#31180E] hover:text-[#A37F66]'
                } ${
                  pathname === '/collectie' ? (useLightText ? 'text-amber-400' : 'text-[#A37F66]') : ''
                }`}
                style={{ fontFamily: 'var(--font-spartan)' }}
              >
                COLLECTIE
                {pathname === '/collectie' && (
                  <span className={`absolute -bottom-2 left-0 right-0 h-[1px] ${isHomePage ? 'bg-amber-400' : 'bg-[#A37F66]'}`} />
                )}
              </Link>
              <Link 
                href="/over-ons" 
                className={`relative transition-colors duration-200 uppercase tracking-[0.1em] font-medium text-lg ${
                  useLightText 
                    ? 'text-white hover:text-amber-400' 
                    : 'text-[#31180E] hover:text-[#A37F66]'
                } ${
                  pathname === '/over-ons' ? (useLightText ? 'text-amber-400' : 'text-[#A37F66]') : ''
                }`}
                style={{ fontFamily: 'var(--font-spartan)' }}
              >
                OVER ONS
                {pathname === '/over-ons' && (
                  <span className={`absolute -bottom-2 left-0 right-0 h-[1px] ${isHomePage ? 'bg-amber-400' : 'bg-[#A37F66]'}`} />
                )}
              </Link>
              <Link 
                href="/contact" 
                className={`relative transition-colors duration-200 uppercase tracking-[0.1em] font-medium text-lg ${
                  useLightText 
                    ? 'text-white hover:text-amber-400' 
                    : 'text-[#31180E] hover:text-[#A37F66]'
                } ${
                  pathname === '/contact' ? (useLightText ? 'text-amber-400' : 'text-[#A37F66]') : ''
                }`}
                style={{ fontFamily: 'var(--font-spartan)' }}
              >
                CONTACT
                {pathname === '/contact' && (
                  <span className={`absolute -bottom-2 left-0 right-0 h-[1px] ${isHomePage ? 'bg-amber-400' : 'bg-[#A37F66]'}`} />
                )}
              </Link>
              
              <div className="flex items-center space-x-1 ml-4">
                <a 
                  href="#" 
                  className={`transition-colors duration-200 uppercase tracking-[0.1em] font-normal text-lg ${
                    useLightText 
                      ? 'text-white hover:text-amber-400' 
                      : 'text-[#31180E] hover:text-[#A37F66]'
                  }`}
                  style={{ fontFamily: 'var(--font-spartan)' }}
                >
                  NL
                </a>
                <span className={`text-lg ${useLightText ? 'text-white/40' : 'text-[#31180E]/40'}`}>/</span>
                <a 
                  href="#" 
                  className={`transition-colors duration-200 uppercase tracking-[0.1em] font-normal text-lg ${
                    useLightText 
                      ? 'text-white/80 hover:text-amber-400' 
                      : 'text-[#31180E]/80 hover:text-[#A37F66]'
                  }`}
                  style={{ fontFamily: 'var(--font-spartan)' }}
                >
                  DE
                </a>
                <span className={`text-lg ${useLightText ? 'text-white/40' : 'text-[#31180E]/40'}`}>/</span>
                <a 
                  href="#" 
                  className={`transition-colors duration-200 uppercase tracking-[0.1em] font-normal text-lg ${
                    useLightText 
                      ? 'text-white/80 hover:text-amber-400' 
                      : 'text-[#31180E]/80 hover:text-[#A37F66]'
                  }`}
                  style={{ fontFamily: 'var(--font-spartan)' }}
                >
                  EN
                </a>
              </div>
            </div>
            
            {/* Hamburger menu button */}
            <button
              className={`ml-6 p-2 rounded-full transition-all duration-200 flex items-center justify-center border-2 ${
                useLightText
                  ? 'border-white text-white hover:border-[#A37F66] hover:text-[#A37F66]'
                  : 'border-[#A37F66] text-[#31180E] hover:border-[#31180E] hover:text-[#31180E]'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              style={{ width: 44, height: 44 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <g>
                    <path d="M4 8h16" />
                    <path d="M4 16h16" />
                  </g>
                )}
              </svg>
            </button>
          </div>
        </div>
        </div>
      </div>
      
      {/* Full-screen menu overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-700 ease-out ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Close Button */}
        <button
          className={`absolute top-8 right-8 text-white hover:text-[#A37F66] transition-all duration-300 z-50 transform ${
            isMenuOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
          style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Design - Centered */}
        <div 
          className={`md:hidden flex flex-col items-center justify-center min-h-screen space-y-8 transform transition-all duration-700 ease-out ${
            isMenuOpen 
              ? 'translate-y-0 scale-100' 
              : 'translate-y-8 scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-8">
            <Link 
              href="/collectie" 
              className={`block text-white hover:text-amber-400 transition-all duration-500 uppercase tracking-[0.15em] font-medium text-4xl transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              } ${pathname === '/collectie' ? 'text-amber-400' : ''}`}
              style={{ 
                fontFamily: 'var(--font-spartan)',
                transitionDelay: isMenuOpen ? '200ms' : '0ms'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              COLLECTIE
            </Link>
            <Link 
              href="/over-ons" 
              className={`block text-white hover:text-amber-400 transition-all duration-500 uppercase tracking-[0.15em] font-medium text-4xl transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              } ${pathname === '/over-ons' ? 'text-amber-400' : ''}`}
              style={{ 
                fontFamily: 'var(--font-spartan)',
                transitionDelay: isMenuOpen ? '400ms' : '0ms'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              OVER ONS
            </Link>
            <Link 
              href="/contact" 
              className={`block text-white hover:text-amber-400 transition-all duration-500 uppercase tracking-[0.15em] font-medium text-4xl transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              } ${pathname === '/contact' ? 'text-amber-400' : ''}`}
              style={{ 
                fontFamily: 'var(--font-spartan)',
                transitionDelay: isMenuOpen ? '600ms' : '0ms'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
          
          <div className={`flex items-center space-x-3 mt-12 transform transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} 
          style={{ transitionDelay: isMenuOpen ? '800ms' : '0ms' }}
          >
            <a 
              href="#" 
              className="text-white hover:text-amber-400 transition-colors duration-200 uppercase tracking-[0.1em] font-normal text-2xl"
              style={{ fontFamily: 'var(--font-spartan)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              NL
            </a>
            <span className="text-white/40 text-2xl">/</span>
            <a 
              href="#" 
              className="text-white hover:text-amber-400 transition-colors duration-200 uppercase tracking-[0.1em] font-normal text-2xl"
              style={{ fontFamily: 'var(--font-spartan)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              DE
            </a>
            <span className="text-white/40 text-2xl">/</span>
            <a 
              href="#" 
              className="text-white hover:text-amber-400 transition-colors duration-200 uppercase tracking-[0.1em] font-normal text-2xl"
              style={{ fontFamily: 'var(--font-spartan)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              EN
            </a>
          </div>
        </div>

        {/* Desktop Design - Split Layout */}
        <div 
          className={`hidden md:flex items-center justify-center min-h-screen px-16 transform transition-all duration-700 ease-out ${
            isMenuOpen 
              ? 'translate-y-0 scale-100' 
              : 'translate-y-8 scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${isCollectiePage ? 'max-w-7xl' : 'max-w-7xl'} w-full flex`}>
            {/* Left Side - Navigation */}
            <div className="flex-1 flex flex-col justify-center space-y-12">
              <div className="space-y-8">
                <Link 
                  href="/collectie" 
                  className={`block text-white hover:text-amber-400 transition-all duration-500 uppercase tracking-[0.15em] font-medium text-6xl transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  } ${pathname === '/collectie' ? 'text-amber-400' : ''}`}
                  style={{ 
                    fontFamily: 'var(--font-spartan)',
                    transitionDelay: isMenuOpen ? '200ms' : '0ms'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  COLLECTIE
                </Link>
                <Link 
                  href="/over-ons" 
                  className={`block text-white hover:text-amber-400 transition-all duration-500 uppercase tracking-[0.15em] font-medium text-6xl transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  } ${pathname === '/over-ons' ? 'text-amber-400' : ''}`}
                  style={{ 
                    fontFamily: 'var(--font-spartan)',
                    transitionDelay: isMenuOpen ? '400ms' : '0ms'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  OVER ONS
                </Link>
                <Link 
                  href="/contact" 
                  className={`block text-white hover:text-amber-400 transition-all duration-500 uppercase tracking-[0.15em] font-medium text-6xl transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  } ${pathname === '/contact' ? 'text-amber-400' : ''}`}
                  style={{ 
                    fontFamily: 'var(--font-spartan)',
                    transitionDelay: isMenuOpen ? '600ms' : '0ms'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </div>
              
              <div className={`flex items-center space-x-3 transform transition-all duration-500 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`} 
              style={{ transitionDelay: isMenuOpen ? '800ms' : '0ms' }}
              >
                <a 
                  href="#" 
                  className="text-white hover:text-amber-400 transition-colors duration-200 uppercase tracking-[0.1em] font-normal text-2xl"
                  style={{ fontFamily: 'var(--font-spartan)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  NL
                </a>
                <span className="text-white/40 text-2xl">/</span>
                <a 
                  href="#" 
                  className="text-white hover:text-amber-400 transition-colors duration-200 uppercase tracking-[0.1em] font-normal text-2xl"
                  style={{ fontFamily: 'var(--font-spartan)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  DE
                </a>
                <span className="text-white/40 text-2xl">/</span>
                <a 
                  href="#" 
                  className="text-white hover:text-amber-400 transition-colors duration-200 uppercase tracking-[0.1em] font-normal text-2xl"
                  style={{ fontFamily: 'var(--font-spartan)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EN
                </a>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className={`flex-1 flex flex-col justify-center space-y-8 pl-16 transform transition-all duration-500 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`} 
            style={{ transitionDelay: isMenuOpen ? '600ms' : '0ms' }}
            >
              {/* Address */}
              <div className="space-y-2">
                <h3 
                  className="text-[rgb(255,184,0)] text-sm uppercase tracking-[0.15em] font-medium"
                  style={{ fontFamily: 'var(--font-spartan)' }}
                >
                  Adres
                </h3>
                <p 
                  className="text-white text-xl leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Hoefnagels Punt B.V.<br />
                  Geldropseweg 22<br />
                  5591 EC Heeze Nederland
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <h3 
                  className="text-[rgb(255,184,0)] text-sm uppercase tracking-[0.15em] font-medium"
                  style={{ fontFamily: 'var(--font-spartan)' }}
                >
                  Contact
                </h3>
                <div className="space-y-1">
                  <p 
                    className="text-white/80 text-lg"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Telefoon
                  </p>
                  <a 
                    href="tel:+31631991992" 
                    className="text-white text-xl hover:text-[#A37F66] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    +31 (0)6-31991992
                  </a>
                </div>
                <div className="space-y-1">
                  <p 
                    className="text-white/80 text-lg"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    WhatsApp
                  </p>
                  <a 
                    href="tel:+31631991990" 
                    className="text-white text-xl hover:text-[#A37F66] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    +31 (0)6 31991990
                  </a>
                </div>
                <div className="space-y-1">
                  <p 
                    className="text-white/80 text-lg"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Email
                  </p>
                  <a 
                    href="mailto:info@hoefnagels.nu" 
                    className="text-white text-xl hover:text-[#A37F66] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    info@hoefnagels.nu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

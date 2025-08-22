"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Full-screen Hero with video background */}

      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="text-[#A37F66] uppercase tracking-[0.15em] mb-4" style={{ fontFamily: 'var(--font-spartan)' }}>
          Pagina nog niet gemaakt
        </p>
      </div>

      <Footer />
    </div>
  );
}
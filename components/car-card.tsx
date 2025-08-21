import { CalendarIcon } from "./icons/calendar";
import { GaugeIcon } from "./icons/gauge";
import { HorseIcon } from "./icons/horse";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  href: string
  image: string
  title: string
  price: number
  year: string
  kilometers: number
  power: string
  brand: string
  logo: string
  isCollectiePage?: boolean
}

export function CarCard({
  href,
  image,
  title,
  price,
  year,
  kilometers,
  power,
  isCollectiePage = false,
}: CarCardProps) {
  return (
    <Link
      href="/auto"
      className="block bg-black overflow-hidden group shine-effect"
    >
      <div className="relative aspect-[3/2] overflow-hidden card-image-wrapper">
        {/* Image/content layer with subtle zoom on hover */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover card-image absolute inset-0 transition-transform duration-500 ease-out"
        />
      </div>
      <div className="px-4 py-3">
        <h3
          className="text-white uppercase"
          style={{ fontFamily: "var(--font-spartan)", fontSize: "18px", lineHeight: "20px" }}
        >
          {title}
        </h3>
        {isCollectiePage ? (
          <div className="mt-2 flex items-center justify-between">
            <p
              style={{ fontFamily: "var(--font-sans)", color: "rgb(255,184,0)", letterSpacing: "0.15em", fontSize: "18px" }}
            >
              {new Intl.NumberFormat("nl-NL", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(price)}
            </p>
            <div className="flex items-center text-sm divide-x divide-[#5c5c5c]" style={{ color: "#5c5c5c" }}>
              <div className="flex items-center gap-2 pr-4">
                <CalendarIcon className="w-4 h-4" style={{ color: "#5c5c5c" }} />
                <span>{year}</span>
              </div>
              <div className="flex items-center gap-2 px-4">
                <GaugeIcon className="w-4 h-4" style={{ color: "#5c5c5c" }} />
                <span>{new Intl.NumberFormat("nl-NL").format(kilometers)} km</span>
              </div>
              <div className="flex items-center gap-2 pl-4">
                <HorseIcon className="w-4 h-4" style={{ color: "#5c5c5c" }} />
                <span>{power}</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p
              className="mt-2"
              style={{ fontFamily: "var(--font-sans)", color: "rgb(255,184,0)", letterSpacing: "0.15em", fontSize: "18px" }}
            >
              {new Intl.NumberFormat("nl-NL", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(price)}
            </p>
            <div className="flex items-center text-sm mt-2 divide-x divide-[#5c5c5c]" style={{ color: "#5c5c5c" }}>
              <div className="flex items-center gap-2 pr-4">
                <CalendarIcon className="w-4 h-4" style={{ color: "#5c5c5c" }} />
                <span>{year}</span>
              </div>
              <div className="flex items-center gap-2 px-4">
                <GaugeIcon className="w-4 h-4" style={{ color: "#5c5c5c" }} />
                <span>{new Intl.NumberFormat("nl-NL").format(kilometers)} km</span>
              </div>
              <div className="flex items-center gap-2 pl-4">
                <HorseIcon className="w-4 h-4" style={{ color: "#5c5c5c" }} />
                <span>{power}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

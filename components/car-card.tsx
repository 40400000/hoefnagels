import { CalendarIcon } from "./icons/calendar";
import { EngineIcon } from "./icons/engine";
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
  engine: string
  power: string
  brand: string
  logo: string
  isCollectiePage?: boolean
  isNew?: boolean
}

export function CarCard({
  href,
  image,
  title,
  price,
  year,
  engine,
  power,
  isCollectiePage = false,
  isNew = false,
}: CarCardProps) {
  return (
    <Link
      href="/auto"
      className="block bg-white overflow-hidden group shine-effect"
    >
      <div className="relative aspect-[3/2] overflow-hidden card-image-wrapper">
        {isNew && (
          <div className="absolute left-3 top-3 z-10 bg-[#A37F66] text-white text-sm px-3 py-1 tracking-wide">
            Nieuw binnen
          </div>
        )}
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
          className="text-[#31180E] uppercase"
          style={{ fontFamily: "var(--font-spartan)", fontSize: "18px", lineHeight: "20px" }}
        >
          {title}
        </h3>
        {isCollectiePage ? (
          <div className="mt-2 flex items-center justify-between">
            <p
              style={{ fontFamily: "var(--font-sans)", color: "#A37F66", letterSpacing: "0.15em", fontSize: "18px" }}
            >
              {new Intl.NumberFormat("nl-NL", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(price)}
            </p>
            <div className="flex items-center text-sm divide-x divide-gray-400" style={{ color: "#666666" }}>
              <div className="flex items-center gap-2 pr-4">
                <CalendarIcon className="w-4 h-4" style={{ color: "#666666" }} />
                <span>{year}</span>
              </div>
              <div className="flex items-center gap-2 px-4">
                <EngineIcon className="w-4 h-4" style={{ color: "#666666" }} />
                <span>{engine}</span>
              </div>
              <div className="flex items-center gap-2 pl-4">
                <HorseIcon className="w-4 h-4" style={{ color: "#666666" }} />
                <span>{power}</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p
              className="mt-2"
              style={{ fontFamily: "var(--font-sans)", color: "#A37F66", letterSpacing: "0.15em", fontSize: "18px" }}
            >
              {new Intl.NumberFormat("nl-NL", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(price)}
            </p>
            <div className="flex items-center text-sm mt-2 divide-x divide-gray-400" style={{ color: "#666666" }}>
              <div className="flex items-center gap-2 pr-4">
                <CalendarIcon className="w-4 h-4" style={{ color: "#666666" }} />
                <span>{year}</span>
              </div>
              <div className="flex items-center gap-2 px-4">
                <EngineIcon className="w-4 h-4" style={{ color: "#666666" }} />
                <span>{engine}</span>
              </div>
              <div className="flex items-center gap-2 pl-4">
                <HorseIcon className="w-4 h-4" style={{ color: "#666666" }} />
                <span>{power}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

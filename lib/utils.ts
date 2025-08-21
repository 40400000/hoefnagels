import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const cars = [
  {
    href: "#",
    image: "/aanbod/1.jpeg",
    title:
      "Porsche 911 4.0 GT3 Clubsport / Keramisch / Lift / PTS / PPF binnen & buiten",
    price: 269000,
    year: "2023",
    kilometers: 1000,
    power: "500pk",
    brand: "Porsche",
    logo: "/autologos/porsche.svg",
  },
  {
    href: "#",
    image: "/aanbod/2.jpeg",
    title: "BMW 3-serie Touring M3 xDrive Competition / Carbon / Laser / H&K",
    price: 128000,
    year: "2024",
    kilometers: 10000,
    power: "350pk",
    brand: "BMW",
    logo: "/autologos/bmw-jzamriwbbnxqxo2grv6n.webp",
  },
  {
    href: "#",
    image: "/aanbod/3.jpeg",
    title: "BMW X7 M50i High Executive / Individual / Skylounge",
    price: 105000,
    year: "2022",
    kilometers: 10000,
    power: "300pk",
    brand: "BMW",
    logo: "/autologos/bmw-jzamriwbbnxqxo2grv6n.webp",
  },
  {
    href: "#",
    image: "/aanbod/4.jpeg",
    title:
      "Land Rover Defender 110 3.0 / P400 / 110 X-Dynamic / HSE Heritage",
    price: 109000,
    year: "2022",
    kilometers: 10000,
    power: "400pk",
    brand: "Land Rover",
    logo: "/autologos/landrover.svg",
  },
]

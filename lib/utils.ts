import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const cars = [
  {
    href: "#",
    image: "/aanbod/1.jpg",
    title:
      "Ferrari SF90 Spider 4.0 V8 Cavalcade / Tailor Made / Assetto Fiorano Wing",
    price: 599500,
    year: "2023",
engine: "4.0 V8",
    kilometers: 6000,
    power: "986pk",
    brand: "Ferrari",
    logo: "/autologos/ferrari.svg",
    isNew: true,
  },
  {
    href: "#",
    image: "/aanbod/hoefnagels2.jpg",
    title: "Ferrari 599 6.0 GTO / Nero Daytona / Low Mileage / Alcantara",
    price: 975000,
    year: "2011",
    engine: "6.0 V12",
    kilometers: 7200,
    power: "670pk",
    brand: "Ferrari",
    logo: "/autologos/ferrari.svg",
  },
  {
    href: "#",
    image: "/aanbod/3.jpg",
    title: "Ferrari 12Cilindri 6.5 V12 / Directly Available / Full Carbon / ATELIER",
    price: 775000,
    year: "2025",
    engine: "6.5 V12",
    kilometers: 6600,
    power: "830pk",
    brand: "Ferrari",
    logo: "/autologos/ferrari.svg",
  },
  {
    href: "#",
    image: "/aanbod/hn3.jpg",
    title: "Ferrari F8 Spider 3.9 V8 F1 2007 / Full Carbon / Lift / Carplay",
    price: 399000,
    year: "2021",
    engine: "3.9 V8",
    kilometers: 12400,
    power: "720pk",
    brand: "Ferrari",
    logo: "/autologos/ferrari.svg",
  },
  {
    href: "#",
    image: "/aanbod/hn4.jpg",
    title: "Ferrari Purosangue 6.5 V12 / Nero Purosangue / Cuoio interior / Full Carbon / Pano",
    price: 689000,
    year: "2023",
    engine: "6.5 V12",
    kilometers: 11000,
    power: "725pk",
    brand: "Ferrari",
    logo: "/autologos/ferrari.svg",
  },
  {
    href: "#",
    image: "/aanbod/hn5.jpg",
    title: "Ferrari 488 Pista Spider / Atelier / Full Carbon / Lift / Stripe Nart",
    price: 695000,
    year: "2019",
    engine: "3.9 V8",
    kilometers: 1900,
    power: "720pk",
    brand: "Ferrari",
    logo: "/autologos/ferrari.svg",
  },
]


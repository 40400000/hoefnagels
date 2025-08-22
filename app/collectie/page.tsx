"use client"

import { useState, useMemo } from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CarCard } from "@/components/car-card"
import { cars } from "@/lib/utils"
import { BrandFilter } from "@/components/brand-filter"
import { RangeFilter } from "@/components/range-filter"

export default function CollectiePage() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const { minPrice, maxPrice, minKm, maxKm } = useMemo(() => {
    if (cars.length === 0) {
      return { minPrice: 0, maxPrice: 100000, minKm: 0, maxKm: 200000 }
    }
    const prices = cars.map((car) => car.price)
    const kms = cars.map((car) => car.kilometers)
    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
      minKm: Math.min(...kms),
      maxKm: Math.max(...kms),
    }
  }, [])

  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPrice,
    maxPrice,
  ])
  const [kmRange, setKmRange] = useState<[number, number]>([minKm, maxKm])

  const brands = Array.from(new Set(cars.map((car) => car.brand))).map(
    (brand) => {
      return {
        name: brand,
        logo: cars.find((car) => car.brand === brand)!.logo,
      }
    }
  )

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    )
  }

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(car.brand)
      const priceMatch =
        car.price >= priceRange[0] && car.price <= priceRange[1]
      const kmMatch =
        car.kilometers >= kmRange[0] && car.kilometers <= kmRange[1]
      return brandMatch && priceMatch && kmMatch
    })
  }, [selectedBrands, priceRange, kmRange])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative pt-8 md:pt-8">
        <div className="max-w-8xl mx-auto px-4 py-12 pt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 px-4 ">
            <div>
              <h1
                className="text-[#31180E] text-3xl md:text-4xl font-medium uppercase tracking-wide"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                COLLECTIE
              </h1>
              <div className="mt-4 h-[2px] w-16 bg-[#A37F66]"></div>
            </div>
            <div className="flex items-center gap-6">
              <RangeFilter
                label="Prijs"
                min={minPrice}
                max={maxPrice}
                step={1000}
                value={priceRange}
                onChange={setPriceRange}
                formatLabel={(value) =>
                  new Intl.NumberFormat("nl-NL", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 0,
                  }).format(value)
                }
              />
              <RangeFilter
                label="Kilometers"
                min={minKm}
                max={maxKm}
                step={500}
                value={kmRange}
                onChange={setKmRange}
                formatLabel={(value) =>
                  `${new Intl.NumberFormat("nl-NL").format(value)} km`
                }
              />
              <BrandFilter
                brands={brands}
                selectedBrands={selectedBrands}
                onBrandChange={handleBrandChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car, index) => (
              <CarCard key={index} {...car} href="/auto" isCollectiePage={true} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
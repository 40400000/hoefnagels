"use client"

import * as React from "react"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface Brand {
  name: string
  logo: string
}

interface BrandFilterProps {
  brands: Brand[]
  selectedBrands: string[]
  onBrandChange: (brand: string) => void
  className?: string
}

export function BrandFilter({
  brands,
  selectedBrands,
  onBrandChange,
  className,
}: BrandFilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 p-0 text-sm font-medium text-white bg-transparent hover:bg-transparent h-auto"
        >
          <span className="border-b border-white/50 pb-1">Merk</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px] bg-black border-white/20 text-white rounded-none">
        {brands.map((brand) => (
          <DropdownMenuCheckboxItem
            key={brand.name}
            checked={selectedBrands.includes(brand.name)}
            onSelect={(e) => {
              e.preventDefault()
              onBrandChange(brand.name)
            }}
            className="cursor-pointer"
          >
            <div className="flex items-center w-full">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={20}
                height={20}
                className="mr-2 brightness-0 invert"
              />
              <span>{brand.name}</span>
            </div>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

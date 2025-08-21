import { cars } from "@/lib/utils"
import fs from 'fs'
import path from 'path'
import { CarPageClient } from './car-page-client'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Auto Details - Premium Voertuig",
  description: "Bekijk gedetailleerde informatie over dit exclusieve voertuig inclusief specificaties, foto's en contactmogelijkheden.",
  keywords: ["auto details", "premium voertuig", "auto specificaties", "luxe auto kopen"],
}

// Server-side function to get images from the single-auto-page folder
function getCarImages() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'single-auto-page')
    if (!fs.existsSync(imagesDirectory)) {
      return []
    }
    
    const filenames = fs.readdirSync(imagesDirectory)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp']
    
    const imageFiles = filenames
      .filter(name => imageExtensions.some(ext => name.toLowerCase().endsWith(ext)))
      .slice(0, 4) // Take only first 4 images
      .map(name => `/single-auto-page/${name}`)
    
    return imageFiles
  } catch (error) {
    console.error('Error reading images directory:', error)
    return []
  }
}

export default function AutoPage() {
  const car = cars[0] // First car (Porsche 911 GT3)
  const additionalImages = getCarImages()

  return <CarPageClient car={car} additionalImages={additionalImages} />
}
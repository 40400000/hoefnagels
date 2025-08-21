import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Collectie - Premium Auto's",
  description: "Bekijk onze complete collectie exclusieve en luxe auto's. Filter op merk, prijs en kilometerstand om uw perfecte voertuig te vinden.",
  keywords: ["auto collectie", "luxe auto's", "premium voertuigen", "auto kopen", "exclusieve auto's"],
}

export default function CollectieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
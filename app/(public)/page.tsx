import HeroSection from "@/components/heroSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home | Imperial Media Solutions", // Display Title
}

export default function Page() {
  return (
    <main>
      <HeroSection />
    </main>
  )
}

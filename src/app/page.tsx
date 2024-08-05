import AboutSectionOne from "@/components/About/AboutSectionOne"
import AboutSectionTwo from "@/components/About/AboutSectionTwo"
import Blog from "@/components/Blog"
import Brands from "@/components/Brands"
import ScrollUp from "@/components/Common/ScrollUp"
import Contact from "@/components/Contact"
import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import Video from "@/components/Video"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Loam Depot | Wholesale Loam, Sand, River Rock, Field Stone & Crushed Concrete - NH",
  description:
    "Loam Depot, family-owned and operated for 6 years, offers high-quality loam, sand, river rock, field stone, and crushed concrete at wholesale prices. With locations in Newton and Sanbornville, New Hampshire, we provide fast delivery and price matching. Contact us today for all your landscaping and construction material needs.",
  // other metadata
}

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Pricing />
      {/*<Features />*/}
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/*<Blog />*/}
      <Contact />
    </>
  )
}

"use client"
import { useState } from "react"
import SectionTitle from "../Common/SectionTitle"
import PricingBox from "./PricingBox"
import { useMaterials } from "@/hooks/useMaterials" // Custom hook for fetching materials

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true) // State to toggle between pickup and delivery pricing
  const { materials, loading, error } = useMaterials() // Use the hook to fetch materials

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Material Pricing"
          paragraph="Explore our competitive pricing for a wide range of high-quality materials, including loam, sand, river rock, field stone, and crushed concrete. We offer wholesale volumes at wholesale prices, ensuring you get the best value for your projects."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            {/* Toggle between Pickup and Delivery */}
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "dark:text-white text-dark"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Pickup
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "dark:text-white text-dark"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Delivery
            </span>
          </div>
        </div>

        {/* Material Pricing Boxes */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <PricingBox
              key={material._id.toString()}
              packageName={material.name}
              image={material.imageUrl}
              subtitle={material.description.split(".")[0] + "."} // Truncate to the first sentence
              typesAndPrices={material.typesAndPrices} // Pass typesAndPrices to PricingBox
              isActive={material.isActive}
              urlEnd={material.urlEnd}
              isMonthly={isMonthly} // Pass toggle state
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

import Breadcrumb from "@/components/Common/Breadcrumb"
import Pricing from "@/components/Pricing"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Loam Depot",
  description:
    "Pricing for all of our landscaping materials, including loam, mulch, and stone.",
  // other metadata
}

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="General Pricing"
        description="Pricing for all of our landscaping materials, including loam, mulch, and stone."
      />

      <Pricing />
    </>
  )
}

export default PricingPage

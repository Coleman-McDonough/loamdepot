import AboutSectionOne from "@/components/About/AboutSectionOne"
import AboutSectionTwo from "@/components/About/AboutSectionTwo"
import Breadcrumb from "@/components/Common/Breadcrumb"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Loam Depot | Loam Depot",
  description:
    "Trusted Family Business, Delivering Quality Landscaping Materials in New Hampshire for Over a Decade",
  // other metadata
}

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Loam Depot"
        description="Trusted Family Business, Delivering Quality Landscaping Materials in New Hampshire for Over a Decade"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  )
}

export default AboutPage

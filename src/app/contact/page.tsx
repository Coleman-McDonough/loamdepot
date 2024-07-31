import Breadcrumb from "@/components/Common/Breadcrumb"
import Contact from "@/components/Contact"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Loam Depot | Loam Depot",
  description: "Contact Loam Depot for All Your Landscaping Material Needs",
  // other metadata
}

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Loam Depot"
        description="If you have any questions or need assistance, please don't hesitate to reach out to us. You can start an order or ask a question using the form below."
      />

      <Contact />
    </>
  )
}

export default ContactPage

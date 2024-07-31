"use client"
import { useState } from "react"
import SectionTitle from "../Common/SectionTitle"
import OfferList from "./OfferList"
import PricingBox from "./PricingBox"

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)

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
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
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
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Delivery
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Screened Loam"
            image="/images/products/loam.jpg"
            price={isMonthly ? "16" : "520"}
            duration={isMonthly ? "yard" : "20yd"}
            subtitle="Our premium loam, rich in nutrients and offering excellent drainage, is perfect for creating lush gardens, lawns, and landscaping projects with healthy, thriving plants."
          >
            <OfferList
              text="Balanced mix of sand, silt, and clay"
              status="active"
            />
            <OfferList
              text="Fine and crumbly texture, easy to work with"
              status="active"
            />
            <OfferList
              text="High in organic matter and essential nutrients"
              status="active"
            />
          </PricingBox>
          <PricingBox
            packageName="River Rock"
            image="/images/products/river_rock.png"
            price={isMonthly ? "30" : "1,000"}
            duration={isMonthly ? "yard" : "20yd"}
            subtitle="Our river rock is a versatile and durable material that adds a natural touch to your landscape design. Use it for decorative purposes, drainage solutions, and more."
          >
            <OfferList
              text="Smooth, rounded stones in various sizes"
              status="active"
            />
            <OfferList
              text="Natural earth tones complement any design"
              status="active"
            />
            <OfferList
              text="Low maintenance and long-lasting"
              status="active"
            />
          </PricingBox>
          <PricingBox
            packageName="Crushed Concrete"
            image="/images/products/crushed_concrete.jpg"
            price={isMonthly ? "12" : "400"}
            duration={isMonthly ? "yard" : "20yd"}
            subtitle="Our crushed concrete is an eco-friendly alternative to natural stone, perfect for driveways, walkways, and other landscaping projects."
          >
            <OfferList text="Recycled concrete material" status="active" />
            <OfferList text="Versatile and cost-effective" status="active" />
            <OfferList text="Durable and long-lasting" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Field Stone"
            image="/images/products/field_stone.jpg"
            price={isMonthly ? "20" : "600"}
            duration={isMonthly ? "yard" : "20yd"}
            subtitle="Field stone adds a natural, rustic charm to any landscape design. These stones come in various shapes and sizes, perfect for decorative walls, garden edging, and water features."
          >
            <OfferList text="Various sizes available" status="active" />
            <OfferList text="Natural earth tones" status="active" />
            <OfferList
              text="Natural, irregular shapes and textures"
              status="active"
            />
          </PricingBox>
          <PricingBox
            packageName="Sand"
            image="/images/products/sand.png"
            price={isMonthly ? "20" : "600"}
            duration={isMonthly ? "yard" : "20yd"}
            subtitle="Our high-quality sand is perfect for a wide range of applications, from construction projects to landscaping and gardening. It provides excellent drainage and stability."
          >
            <OfferList text="Clean, fine-grained sand" status="active" />
            <OfferList text="Versatile and easy to work with" status="active" />
            <OfferList
              text="Ideal for mixing with other materials"
              status="active"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4caf50" />
              <stop offset="1" stopColor="#4caf50" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4caf50" />
              <stop offset="1" stopColor="#4caf50" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default Pricing

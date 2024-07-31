import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Loam - Loam Depot",
  description: "Premium loam for your garden and landscaping needs.",
}

const LoamPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Premium Loam
                  </h2>
                  <div className="text-lg font-semibold text-gray-700">
                    $16 per yard pick up <br /> $520 per 20 yards local delivery
                  </div>
                </div>
                <div className="mb-10 flex items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-80 md:w-1/2">
                    <Image
                      src="/images/products/loam.JPG"
                      alt="Premium Loam"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Our premium loam is a rich, nutrient-dense soil perfect for
                    enhancing plant growth. It provides excellent drainage and
                    fertility, making it ideal for gardens, lawns, and
                    landscaping projects. Use our loam to create a lush, vibrant
                    outdoor space with healthy, thriving plants.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Specifications
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Balanced mix of sand, silt, and clay
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Fine and crumbly texture, easy to work with
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      High in organic matter and essential nutrients
                    </li>
                  </ul>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Pricing
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    - $16 per yard picked up <br />- $520 per 20 yard triaxle
                    load for deliveries within a 20 mile radius
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoamPage

import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Crushed Concrete - Loam Depot",
  description:
    "Eco-friendly crushed concrete for your construction and landscaping needs.",
}

const CrushedConcretePage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Crushed Concrete
                  </h2>
                  <div className="text-lg font-semibold text-gray-700">
                    $7.50 per yard picked up <br /> $390 per 20 yards local
                    delivery
                  </div>
                </div>
                <div className="mb-10 flex items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-80 md:w-1/2">
                    <Image
                      src="/images/products/crushed_concrete.jpg"
                      alt="Crushed Concrete"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Crushed concrete is a sustainable and cost-effective
                    alternative to traditional gravel. Made from recycled
                    concrete, it is durable and perfect for creating solid
                    surfaces for driveways, patios, and paths. Choose crushed
                    concrete for an eco-friendly and reliable option for your
                    construction and landscaping needs.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Specifications
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Sizes: Various sizes available
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Composition: 100% recycled concrete
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Durability: Strong and long-lasting
                    </li>
                  </ul>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Pricing
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    - $7.50 per yard picked up <br />- $390 per 20 yard triaxle
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

export default CrushedConcretePage

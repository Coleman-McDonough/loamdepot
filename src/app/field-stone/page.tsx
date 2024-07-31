import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Field Stone - Loam Depot",
  description:
    "Natural field stone for your decorative and functional landscaping needs.",
}

const FieldStonePage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Field Stone
                  </h2>
                  <div className="text-lg font-semibold text-gray-700">
                    $20 per yard picked up <br /> $600 per 20 yards local
                    delivery
                  </div>
                </div>
                <div className="mb-10 flex items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-80 md:w-1/2">
                    <Image
                      src="/images/products/field_stone.jpg"
                      alt="Field Stone"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Field stone adds a natural, rustic charm to any landscape
                    design. These hand-picked stones come in various shapes and
                    sizes, making them perfect for decorative walls, garden
                    edging, and water features. Enhance your outdoor space with
                    the unique and timeless beauty of field stone.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Specifications
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Sizes: Various sizes available
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Colors: Natural earth tones
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Texture: Natural, irregular shapes and textures
                    </li>
                  </ul>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Pricing
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    - $20 per yard picked up <br />- $600 per 20 yard triaxle
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

export default FieldStonePage

import Image from "next/image"
import { Metadata } from "next"
import { fetchMaterialByUrlEnd } from "@/app/lib/helpers"
import { notFound } from "next/navigation"

interface MaterialPageProps {
  params: {
    urlEnd: string
  }
}

// Dynamically generate metadata for each page
export async function generateMetadata({
  params,
}: MaterialPageProps): Promise<Metadata> {
  // Fetch material data directly in the server-side function with no cache
  const material = await fetchMaterialByUrlEnd(params.urlEnd, {
    cache: "no-store",
  })

  if (!material) {
    return {
      title: "Material not found",
      description: "The material you are looking for does not exist.",
    }
  }

  return {
    title: `${material.name} - Loam Depot`,
    description: material.description,
  }
}

export default async function MaterialPage({ params }: MaterialPageProps) {
  const { urlEnd } = params

  // Fetch material by urlEnd from the database with no cache
  const material = await fetchMaterialByUrlEnd(urlEnd, { cache: "no-store" })

  // Handle 404 if material is not found
  if (!material) {
    notFound()
  }

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="dark:text-white text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                    {material.name}
                  </h2>
                  <div className="text-lg font-semibold text-gray-700">
                    ${material.pickupPrice} per yard pick up <br /> $
                    {material.deliveryPrice} per 20 yards local delivery
                  </div>
                </div>
                <div className="dark:border-white dark:border-opacity-10 mb-10 flex items-center justify-between border-b border-body-color border-opacity-10 pb-4">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-80 md:w-1/2">
                    <Image
                      src={
                        material.imageUrl || "/images/products/placeholder.jpg"
                      }
                      alt={material.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {material.description}
                  </p>

                  <h3 className="font-xl dark:text-white mb-10 font-bold leading-tight text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Pricing
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    - ${material.pickupPrice} per yard picked up <br />- $
                    {material.deliveryPrice} per 20-yard triaxle load for
                    deliveries within a 20-mile radius
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

// This ensures the page is always dynamically rendered on each request
export const revalidate = 0

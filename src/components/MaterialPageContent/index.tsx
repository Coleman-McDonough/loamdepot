"use client"

import { useState } from "react"
import Image from "next/image"
import AlbumSlideshow from "@/components/AlbumSlideshow"
import { isAllNumbersWithCommas } from "@/app/lib/helpers"
import { MaterialsEntry } from "@/app/models/EntrySchemas"

interface MaterialPageContentProps {
  material: MaterialsEntry
}

export default function MaterialPageContent({
  material,
}: MaterialPageContentProps) {
  const [modalAlbum, setModalAlbum] = useState<string | null>(null)

  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="dark:text-white text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                  {material.name}
                </h2>
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
                    onClick={() => setModalAlbum(material.urlEnd)}
                  />
                </div>
              </div>
              <div>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {material.description}
                </p>

                <h3 className="font-xl dark:text-white mb-3 font-bold leading-tight text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Pricing
                </h3>
                <ul className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {material.typesAndPrices.map((typePrice, index) => (
                    <li key={index} className="mb-4">
                      <strong
                        className={`${typePrice.type === "" ? "hidden" : ""}`}
                      >
                        {typePrice.type}:
                      </strong>{" "}
                      {isAllNumbersWithCommas(typePrice.pickupPrice)
                        ? `$${typePrice.pickupPrice} per yard picked up`
                        : `${typePrice.pickupPrice}`}
                      {" / "}
                      {isAllNumbersWithCommas(typePrice.deliveryPrice)
                        ? `$${typePrice.deliveryPrice} per 20 yards local delivery`
                        : `${typePrice.deliveryPrice}`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {modalAlbum && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
            <AlbumSlideshow
              album={modalAlbum}
              onClose={() => setModalAlbum(null)}
            />
          </div>
        )}
      </div>
    </section>
  )
}

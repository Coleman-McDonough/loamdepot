import { Brand } from "@/types/brand"
import Image from "next/image"
import brandsData from "./brandsData"

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <p className="m-2 text-center text-xl">
              Trusted By Our Affiliates:
            </p>
            <div className="bg-green-light flex flex-wrap items-center justify-center rounded-sm p-8 dark:bg-gray-dark">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand

  return (
    <div className="p-4">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative block h-64 w-64 transition-transform hover:scale-105"
      >
        <Image
          src={imageLight}
          alt={name}
          className="hidden object-cover dark:block"
          layout="fill"
        />
        <Image
          src={image}
          alt={name}
          className="block object-cover dark:hidden"
          layout="fill"
        />
      </a>
    </div>
  )
}

import Link from "next/link"

const PricingBox = (props: {
  image: string
  packageName: string
  subtitle: string
  typesAndPrices: { type: string; pickupPrice: string; deliveryPrice: string }[]
  isActive: boolean
  urlEnd: string
  isMonthly: boolean
}) => {
  const {
    image,
    packageName,
    subtitle,
    typesAndPrices,
    isActive,
    urlEnd,
    isMonthly,
  } = props

  return (
    <div className={`${isActive ? "block" : "hidden"} w-full`}>
      <div className="dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-sm bg-white px-8 py-5 shadow-three hover:shadow-one">
        <h4 className="dark:text-white mb-2 text-xl font-bold text-dark">
          {packageName}
        </h4>
        <div className="relative mb-2 h-[200px] w-full overflow-hidden rounded-lg">
          <Link href={`/${urlEnd}`}>
            <img
              src={image || "/images/products/field_stone.jpg"}
              alt="Image"
              className="object-cover"
            />
          </Link>
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>
        <ul className="mb-7">
          {typesAndPrices.map((typePrice, index) => (
            <li key={index} className="text-base text-body-color">
              <strong>
                {typePrice.type}
                {`${typePrice.type === "" ? "" : ":"}`}
              </strong>{" "}
              {isMonthly
                ? `$${typePrice.pickupPrice} per yard pickup`
                : `$${typePrice.deliveryPrice} per 20 yards delivery`}
            </li>
          ))}
        </ul>
        <div className="dark:border-white dark:border-opacity-10 border-b border-body-color border-opacity-10 pb-8">
          <a href="tel:9783757001">
            <button className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
              Call Now!
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PricingBox

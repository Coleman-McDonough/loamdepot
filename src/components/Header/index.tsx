"use client"
import { Key, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMaterials } from "@/hooks/useMaterials"
import ThemeToggler from "./ThemeToggler"

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen)
  }

  // Sticky Navbar
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar)
  })

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1)
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1)
    } else {
      setOpenIndex(index)
    }
  }

  // Fetch dynamic materials for the submenu
  const { materials, loading } = useMaterials()
  const pathname = usePathname()

  // Static menu items
  const staticMenu = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              } `}
            >
              <img
                src="/images/logo/ld_logo_light.png"
                alt="logo"
                className="w-full"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`dark:bg-white relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`dark:bg-white relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`dark:bg-white relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {staticMenu.map((menuItem) => (
                    <li key={menuItem.id} className="group relative">
                      <Link
                        href={menuItem.path}
                        className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                          pathname === menuItem.path
                            ? "dark:text-white text-primary"
                            : "dark:text-white/70 dark:hover:text-white text-dark hover:text-primary"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  ))}

                  {/* Dynamic Submenu */}
                  <li className="group relative">
                    <p
                      onClick={() => handleSubmenu(4)}
                      className="dark:text-white/70 dark:group-hover:text-white flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                    >
                      Materials
                      <span className="pl-3">
                        <svg width="25" height="24" viewBox="0 0 25 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </p>
                    <div
                      className={`submenu dark:bg-dark relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                        openIndex === 4 ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        href="/general-pricing"
                        className="dark:text-white/70 dark:hover:text-white block rounded py-2.5 text-sm text-dark hover:text-primary lg:px-3"
                      >
                        General Pricing
                      </Link>
                      {loading ? (
                        <p className="dark:text-white/70 text-sm text-dark">
                          Loading products...
                        </p>
                      ) : (
                        materials.map((material) => (
                          <Link
                            href={`/${material.urlEnd}`}
                            key={material._id as Key}
                            className="dark:text-white/70 dark:hover:text-white block rounded py-2.5 text-sm text-dark hover:text-primary lg:px-3"
                          >
                            {material.name}
                          </Link>
                        ))
                      )}
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              {/*<ThemeToggler />*/}
              <Link
                href="tel:978-375-7001"
                className="ease-in-up hidden rounded-sm bg-primary px-4 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-6 lg:px-3 xl:px-6"
              >
                (978)-375-7001
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

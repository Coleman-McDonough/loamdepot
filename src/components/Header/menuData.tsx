import { Menu } from "@/types/menu"
import { fetchMaterials } from "../../app/lib/helpers"
import { useEffect, useState } from "react"

const useMenuData = (): Menu[] => {
  const [menu, setMenu] = useState<Menu[]>([])

  useEffect(() => {
    const getMenuData = async () => {
      try {
        const materials = await fetchMaterials()
        const dynamicSubmenu = materials.map((material) => ({
          id: material._id as unknown as number,
          title: material.name,
          path: `/${material.urlEnd}`,
          newTab: false,
        }))

        setMenu([
          {
            id: 1,
            title: "Home",
            path: "/",
            newTab: false,
          },
          {
            id: 2,
            title: "About",
            path: "/about",
            newTab: false,
          },
          {
            id: 3,
            title: "Contact",
            path: "/contact",
            newTab: false,
          },
          {
            id: 4,
            title: "Products",
            newTab: false,
            submenu: [
              {
                id: 46,
                title: "General Pricing",
                path: "/general-pricing",
                newTab: false,
              },
              ...dynamicSubmenu,
            ],
          },
        ])
      } catch (error) {
        console.error("Error fetching materials:", error)
      }
    }

    getMenuData()
  }, [])

  return menu
}

export default useMenuData

import { Menu } from "@/types/menu"

const menuData: Menu[] = [
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
      {
        id: 41,
        title: "Loam",
        path: "/loam",
        newTab: false,
      },
      {
        id: 42,
        title: "Sand",
        path: "/sand",
        newTab: false,
      },
      {
        id: 43,
        title: "River Rock",
        path: "/river-rock",
        newTab: false,
      },
      {
        id: 44,
        title: "Field Stone",
        path: "/field-stone",
        newTab: false,
      },
      {
        id: 45,
        title: "Crushed Concrete",
        path: "/crushed-concrete",
        newTab: false,
      },
    ],
  },
]
export default menuData

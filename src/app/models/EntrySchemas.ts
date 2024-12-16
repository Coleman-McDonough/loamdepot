import { ObjectId } from "mongodb"

export interface TypesAndPrices {
  type: string
  deliveryPrice: string
  pickupPrice: string
}

export interface MaterialsEntry {
  _id?: string | ObjectId
  name: string
  description: string
  imageUrl: string
  typesAndPrices: TypesAndPrices[] // Array of types and prices
  listingWebsites: string
  urlEnd: string
  isActive: boolean
}

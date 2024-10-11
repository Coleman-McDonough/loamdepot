// models/ToyLockerUnit.ts

import { ObjectId } from "mongodb"

export interface MaterialsEntry {
  _id?: string | ObjectId
  name: string
  description: string
  imageUrl: string
  deliveryPrice: string
  pickupPrice: string
  listingWebsites: string
  urlEnd: string // Add URL field for material page
  isActive: boolean

  // Define other fields as necessary
}

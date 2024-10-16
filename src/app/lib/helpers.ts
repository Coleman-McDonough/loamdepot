import { MaterialsEntry } from "../models/EntrySchemas"

// Fetch all materials
export async function fetchMaterials(): Promise<MaterialsEntry[]> {
  const response = await fetch("/api/materials")
  if (!response.ok) {
    throw new Error("Failed to fetch materials data")
  }
  return response.json()
}

// Fetch a single material by `urlEnd`
export async function fetchMaterialByUrlEnd(
  urlEnd: string,
  options: RequestInit = {}, // Add an optional `options` argument with a default
): Promise<MaterialsEntry | null> {
  // Use environment variable for the base URL
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000" // Default to localhost for local dev
  const response = await fetch(
    `${baseUrl}/api/materials?urlEnd=${urlEnd}`,
    options,
  ) // Use options here

  if (!response.ok) {
    return null // Return null if material not found
  }

  return response.json()
}

export function isAllNumbersWithCommas(str: string): boolean {
  const regex = /^[0-9]+(,[0-9]+)*$/
  return regex.test(str)
}

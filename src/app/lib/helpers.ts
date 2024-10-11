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
): Promise<MaterialsEntry | null> {
  // Construct the full URL using an environment variable for the base URL
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  const response = await fetch(`${baseUrl}/api/materials?urlEnd=${urlEnd}`)

  if (!response.ok) {
    return null // Return null if material not found
  }
  return response.json()
}

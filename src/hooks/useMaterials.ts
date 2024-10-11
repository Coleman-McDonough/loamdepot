import { useState, useEffect } from "react"
import { fetchMaterials, fetchMaterialByUrlEnd } from "@/app/lib/helpers"
import { MaterialsEntry } from "@/app/models/EntrySchemas"

// Hook to fetch all materials
export function useMaterials() {
  const [materials, setMaterials] = useState<MaterialsEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadMaterials = async () => {
      try {
        const data = await fetchMaterials()
        setMaterials(data)
      } catch (err) {
        setError("Failed to load materials.")
      } finally {
        setLoading(false)
      }
    }

    loadMaterials()
  }, [])

  return { materials, loading, error }
}

// Hook to fetch a single material by `urlEnd`
export function useMaterialByUrlEnd(urlEnd: string) {
  const [material, setMaterial] = useState<MaterialsEntry | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadMaterial = async () => {
      try {
        const data = await fetchMaterialByUrlEnd(urlEnd)
        if (data) {
          setMaterial(data)
        } else {
          setError("Material not found.")
        }
      } catch (err) {
        setError("Failed to load material.")
      } finally {
        setLoading(false)
      }
    }

    loadMaterial()
  }, [urlEnd])

  return { material, loading, error }
}

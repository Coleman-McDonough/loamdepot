import { Metadata } from "next"
import { fetchMaterialByUrlEnd } from "@/app/lib/helpers"
import MaterialPageContent from "@/components/MaterialPageContent"
import { notFound } from "next/navigation"

interface MaterialPageProps {
  params: {
    urlEnd: string
  }
}

export async function generateMetadata({
  params,
}: MaterialPageProps): Promise<Metadata> {
  const material = await fetchMaterialByUrlEnd(params.urlEnd, {
    cache: "no-store",
  })

  if (!material) {
    return {
      title: "Material not found",
      description: "The material you are looking for does not exist.",
    }
  }

  return {
    title: `${material.name} - Loam Depot`,
    description: material.description,
  }
}

export default async function MaterialPage({ params }: MaterialPageProps) {
  const material = await fetchMaterialByUrlEnd(params.urlEnd, {
    cache: "no-store",
  })

  if (!material) {
    notFound()
  }

  return <MaterialPageContent material={material} />
}

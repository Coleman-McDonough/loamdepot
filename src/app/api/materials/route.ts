import { NextRequest, NextResponse } from "next/server"
import { connectToMongodbMaterials } from "../../lib/mongodb" // Assuming a separate connection for materials, similar to properties
import { MaterialsEntry } from "@/app/models/EntrySchemas"
import { ObjectId } from "mongodb"

// Define allowed origins
const allowedOrigins = ["http://localhost:3000"]

// Function to get CORS headers based on request origin
function getCorsHeaders(request: NextRequest) {
  const origin = request.headers.get("origin")
  const corsHeaders: Record<string, string> = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  }

  if (allowedOrigins.includes(origin || "")) {
    corsHeaders["Access-Control-Allow-Origin"] = origin || ""
  }

  return corsHeaders
}

// Handle OPTIONS method for CORS preflight
export async function OPTIONS(request: NextRequest): Promise<NextResponse> {
  const corsHeaders = getCorsHeaders(request)
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  })
}

// Adjust the API response to include `typesAndPrices`.
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("_id")
    const urlEnd = searchParams.get("urlEnd")

    const { db } = await connectToMongodbMaterials()

    if (id) {
      const objectId = new ObjectId(id)
      const material = await db
        .collection<MaterialsEntry>("materials")
        .findOne({ _id: objectId })

      if (material) {
        return NextResponse.json(material)
      } else {
        return NextResponse.json(
          { message: "Material not found" },
          { status: 404 },
        )
      }
    } else if (urlEnd) {
      const material = await db
        .collection<MaterialsEntry>("materials")
        .findOne({ urlEnd })

      if (material) {
        return NextResponse.json(material)
      } else {
        return NextResponse.json(
          { message: "Material not found" },
          { status: 404 },
        )
      }
    } else {
      const materials = await db
        .collection<MaterialsEntry>("materials")
        .find({})
        .toArray()
      return NextResponse.json(materials)
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return NextResponse.json(
      { message: "Failed to fetch data" },
      { status: 500 },
    )
  }
}

import Image from "next/image"
import { Feature } from "@/types/feature"

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        src="/images/products/loam.jpg"
        alt="Loam"
        width={80}
        height={41}
        layout="intrinsic"
      />
    ),
    title: "Loam",
    paragraph:
      "Our premium loam is a rich, nutrient-dense soil perfect for enhancing plant growth. It provides excellent drainage and fertility, making it ideal for gardens, lawns, and landscaping projects. Use our loam to create a lush, vibrant outdoor space with healthy, thriving plants.",
  },
  {
    id: 2,
    icon: (
      <Image
        src="/images/products/crushed_concrete.jpg"
        alt="Crushed Concrete"
        width={80}
        height={40}
        layout="intrinsic"
      />
    ),
    title: "Crushed Concrete",
    paragraph:
      "Crushed concrete is a sustainable and cost-effective alternative to traditional gravel. Made from recycled concrete, it is durable and perfect for creating solid surfaces for driveways, patios, and paths. Choose crushed concrete for an eco-friendly and reliable option for your construction and landscaping needs.",
  },
  {
    id: 3,
    icon: (
      <Image
        src="/images/products/field_stone.jpg"
        alt="Field Stone"
        width={80}
        height={42}
        layout="intrinsic"
      />
    ),
    title: "Field Stone",
    paragraph:
      "Field stone adds a natural, rustic charm to any landscape design. These hand-picked stones come in various shapes and sizes, making them perfect for decorative walls, garden edging, and water features. Enhance your outdoor space with the unique and timeless beauty of field stone.",
  },
  {
    id: 4,
    icon: (
      <Image
        src="/images/products/sand.png"
        alt="Sand"
        width={80}
        height={40}
        layout="intrinsic"
      />
    ),
    title: "Sand",
    paragraph:
      "Our high-quality sand is versatile and clean, making it suitable for a wide range of applications. It is ideal for playgrounds, construction projects, and landscaping, providing stability and smooth surfaces. Whether you're mixing concrete or creating a play area, our sand ensures excellent performance and results.",
  },
  {
    id: 5,
    icon: (
      <Image
        src="/images/products/river_rock.png"
        alt="River Rock"
        width={80}
        height={45}
        layout="intrinsic"
      />
    ),
    title: "River Rock",
    paragraph:
      "River rock features smooth, rounded stones that add a decorative touch to any landscape. Available in natural colors, these rocks are perfect for garden beds, pathways, and water features. Enhance your outdoor space with the aesthetic and functional appeal of river rock.",
  },
]
export default featuresData

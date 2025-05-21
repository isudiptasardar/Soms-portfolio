import fs from "fs"
import path from "path"

export type GalleryImage = {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const galleryDir = path.join(process.cwd(), "public/images/gallery")

    // Check if directory exists
    if (!fs.existsSync(galleryDir)) {
      console.warn("Gallery directory does not exist:", galleryDir)
      return []
    }

    // Read all files in the directory
    const files = fs.readdirSync(galleryDir)

    // Filter for image files
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"].includes(ext)
    })

    // Create image objects
    const images: GalleryImage[] = imageFiles.map((file, index) => {
      const id = path.parse(file).name
      return {
        id,
        src: `/images/gallery/${file}`,
        alt: `Gallery Image - ${id}`,
        width: 800, // Default width
        height: 800, // Default height
      }
    })

    return images
  } catch (error) {
    console.error("Error reading gallery images:", error)
    return []
  }
}

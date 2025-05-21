import path from "path"
import { getFilesFromDirectory, filePathToUrlPath } from "./file-utils"

export type GalleryImage = {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const galleryDir = path.join(process.cwd(), "public", "images", "gallery")

    // Get all files from the gallery directory
    const filePaths = getFilesFromDirectory(galleryDir)

    // Filter for image files
    const imageFilePaths = filePaths.filter((filePath) => {
      const ext = path.extname(filePath).toLowerCase()
      return [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"].includes(ext)
    })

    // Create image objects
    const images: GalleryImage[] = imageFilePaths.map((filePath) => {
      const fileName = path.basename(filePath)
      const id = path.parse(fileName).name

      // Convert server-side file path to client-side URL path
      const src = filePathToUrlPath(filePath)

      return {
        id,
        src,
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

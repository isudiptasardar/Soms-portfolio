import { getGalleryImages as getMockGalleryImages } from "./mock-file-system"

export type GalleryImage = {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    // Use our mock file system instead of the real file system
    return getMockGalleryImages()
  } catch (error) {
    console.error("Error reading gallery images:", error)
    return []
  }
}

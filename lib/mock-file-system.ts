// This file provides mock file system operations to avoid direct file system access
// which can cause EISDIR errors in certain environments

export type FileInfo = {
  name: string
  path: string
  type: "file" | "directory"
  size?: number
  mimeType?: string
}

// Mock file system data
const mockFileSystem: Record<string, FileInfo[]> = {
  "/images": [
    {
      name: "gallery",
      path: "/images/gallery",
      type: "directory",
    },
    {
      name: "somenath-profile.png",
      path: "/images/somenath-profile.png",
      type: "file",
      size: 1024 * 100, // 100KB mock size
      mimeType: "image/png",
    },
  ],
  "/images/gallery": [
    {
      name: "rna-structure.jpg",
      path: "/images/gallery/rna-structure.jpg",
      type: "file",
      size: 1024 * 200, // 200KB mock size
      mimeType: "image/jpeg",
    },
    {
      name: "molecular-docking.jpg",
      path: "/images/gallery/molecular-docking.jpg",
      type: "file",
      size: 1024 * 150, // 150KB mock size
      mimeType: "image/jpeg",
    },
    {
      name: "mirna-target.jpg",
      path: "/images/gallery/mirna-target.jpg",
      type: "file",
      size: 1024 * 180, // 180KB mock size
      mimeType: "image/jpeg",
    },
    {
      name: "protein-rna.jpg",
      path: "/images/gallery/protein-rna.jpg",
      type: "file",
      size: 1024 * 190, // 190KB mock size
      mimeType: "image/jpeg",
    },
    {
      name: "gene-expression.jpg",
      path: "/images/gallery/gene-expression.jpg",
      type: "file",
      size: 1024 * 170, // 170KB mock size
      mimeType: "image/jpeg",
    },
  ],
}

/**
 * Safely checks if a path exists in the mock file system
 */
export function existsSync(path: string): boolean {
  // Normalize path to remove public prefix if present
  const normalizedPath = path.replace(/^\/public/, "")

  // Check if the path is a directory in our mock file system
  if (mockFileSystem[normalizedPath]) {
    return true
  }

  // Check if the path is a file in any of our mock directories
  for (const dirPath in mockFileSystem) {
    const files = mockFileSystem[dirPath]
    if (files.some((file) => file.path === normalizedPath)) {
      return true
    }
  }

  return false
}

/**
 * Safely gets mock file stats
 */
export function statSync(path: string): { isFile: () => boolean; isDirectory: () => boolean } {
  // Normalize path to remove public prefix if present
  const normalizedPath = path.replace(/^\/public/, "")

  // Check if the path is a directory in our mock file system
  if (mockFileSystem[normalizedPath]) {
    return {
      isFile: () => false,
      isDirectory: () => true,
    }
  }

  // Check if the path is a file in any of our mock directories
  for (const dirPath in mockFileSystem) {
    const files = mockFileSystem[dirPath]
    const file = files.find((file) => file.path === normalizedPath)
    if (file) {
      return {
        isFile: () => file.type === "file",
        isDirectory: () => file.type === "directory",
      }
    }
  }

  // Default to not found
  return {
    isFile: () => false,
    isDirectory: () => false,
  }
}

/**
 * Safely gets all files from a mock directory
 */
export function readdirSync(dirPath: string): string[] {
  // Normalize path to remove public prefix if present
  const normalizedPath = dirPath.replace(/^\/public/, "")

  // Check if the directory exists in our mock file system
  if (!mockFileSystem[normalizedPath]) {
    return []
  }

  // Return the file names in the directory
  return mockFileSystem[normalizedPath].map((file) => file.name)
}

/**
 * Gets all gallery images from the mock file system
 */
export function getGalleryImages(): { id: string; src: string; alt: string; width: number; height: number }[] {
  const galleryDir = "/images/gallery"

  if (!mockFileSystem[galleryDir]) {
    return []
  }

  return mockFileSystem[galleryDir]
    .filter((file) => file.type === "file")
    .map((file) => {
      const id = file.name.replace(/\.[^/.]+$/, "") // Remove file extension
      return {
        id,
        src: file.path,
        alt: `Gallery Image - ${id}`,
        width: 800,
        height: 800,
      }
    })
}

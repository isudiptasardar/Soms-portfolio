import fs from "fs"
import path from "path"

/**
 * Safely checks if a path exists and is a file (not a directory)
 */
export function isFile(filePath: string): boolean {
  try {
    return fs.existsSync(filePath) && fs.statSync(filePath).isFile()
  } catch (error) {
    console.error(`Error checking if path is a file: ${filePath}`, error)
    return false
  }
}

/**
 * Safely gets all files from a directory (not including subdirectories)
 */
export function getFilesFromDirectory(dirPath: string): string[] {
  try {
    if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
      console.warn(`Directory does not exist or is not a directory: ${dirPath}`)
      return []
    }

    return fs
      .readdirSync(dirPath)
      .map((file) => path.join(dirPath, file))
      .filter((filePath) => fs.statSync(filePath).isFile())
  } catch (error) {
    console.error(`Error getting files from directory: ${dirPath}`, error)
    return []
  }
}

/**
 * Converts a server-side file path to a client-side URL path
 * Removes the "public" prefix from the path
 */
export function filePathToUrlPath(filePath: string): string {
  const publicDir = path.join(process.cwd(), "public")

  // Check if the path starts with the public directory
  if (filePath.startsWith(publicDir)) {
    // Remove the public directory prefix and normalize slashes
    return filePath.slice(publicDir.length).replace(/\\/g, "/")
  }

  // If it doesn't start with public, assume it's already a URL path
  return filePath
}

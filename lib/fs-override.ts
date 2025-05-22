// This file overrides Node.js fs module functions to prevent EISDIR errors
import * as mockFs from "./mock-file-system"

// Override fs module functions
const fs = {
  existsSync: (path: string) => mockFs.existsSync(path),
  statSync: (path: string) => mockFs.statSync(path),
  readdirSync: (path: string) => mockFs.readdirSync(path),
  // Add other fs functions as needed
}

export default fs

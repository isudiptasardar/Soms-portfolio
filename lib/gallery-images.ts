import fs from "fs"

export type GalleryImage = {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

// Safe function to check if a file exists
function fileExists(filePath: string): boolean {
  try {
    return fs.existsSync(filePath) && fs.statSync(filePath).isFile()
  } catch (error) {
    return false
  }
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    // Use a hardcoded list of gallery images instead of reading from the file system
    const galleryImages: GalleryImage[] = [
      {
        id: "rna-structure",
        src: "/images/gallery/rna-structure.jpg",
        alt: "RNA Structure Visualization - 3D molecular model",
        width: 800,
        height: 800,
      },
      {
        id: "molecular-docking",
        src: "/images/gallery/molecular-docking.jpg",
        alt: "Molecular Docking Analysis - Protein-ligand interaction",
        width: 800,
        height: 800,
      },
      {
        id: "mirna-target",
        src: "/images/gallery/mirna-target.jpg",
        alt: "miRNA Target Prediction - Computational analysis visualization",
        width: 800,
        height: 800,
      },
      {
        id: "protein-rna",
        src: "/images/gallery/protein-rna.jpg",
        alt: "Protein-RNA Interaction - Molecular binding visualization",
        width: 800,
        height: 800,
      },
      {
        id: "gene-expression",
        src: "/images/gallery/gene-expression.jpg",
        alt: "Gene Expression Analysis - Heatmap visualization",
        width: 800,
        height: 800,
      },
      {
        id: "drug-rna",
        src: "/images/gallery/drug-rna.jpg",
        alt: "Drug-RNA Complex - Molecular structure visualization",
        width: 800,
        height: 800,
      },
      {
        id: "computational-workflow",
        src: "/images/gallery/computational-workflow.jpg",
        alt: "Computational Workflow - Bioinformatics pipeline diagram",
        width: 800,
        height: 800,
      },
    ]

    return galleryImages
  } catch (error) {
    console.error("Error with gallery images:", error)
    return []
  }
}

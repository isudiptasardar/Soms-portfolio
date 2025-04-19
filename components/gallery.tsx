"use client"
import { useState } from "react"
import Image from "next/image"
import { X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "https://picsum.photos/seed/gallery1/800/800",
      alt: "RNA Structure Visualization - 3D molecular model",
      caption: "RNA Structure Visualization",
    },
    {
      id: 2,
      src: "https://picsum.photos/seed/gallery2/800/800",
      alt: "Molecular Docking Analysis - Protein-ligand interaction",
      caption: "Molecular Docking Analysis",
    },
    {
      id: 3,
      src: "https://picsum.photos/seed/gallery3/800/800",
      alt: "miRNA Target Prediction - Computational analysis visualization",
      caption: "miRNA Target Prediction",
    },
    {
      id: 4,
      src: "https://picsum.photos/seed/gallery4/800/800",
      alt: "Protein-RNA Interaction - Molecular binding visualization",
      caption: "Protein-RNA Interaction",
    },
    {
      id: 5,
      src: "https://picsum.photos/seed/gallery5/800/800",
      alt: "Gene Expression Analysis - Heatmap visualization",
      caption: "Gene Expression Analysis",
    },
    {
      id: 6,
      src: "https://picsum.photos/seed/gallery6/800/800",
      alt: "Drug-RNA Complex - Molecular structure visualization",
      caption: "Drug-RNA Complex",
    },
    {
      id: 7,
      src: "https://picsum.photos/seed/gallery7/800/800",
      alt: "Computational Workflow - Bioinformatics pipeline diagram",
      caption: "Computational Workflow",
    },
  ]

  const openLightbox = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const currentImage = selectedImage !== null ? galleryImages.find((img) => img.id === selectedImage) : null

  return (
    <section id="gallery" className="py-20 bg-zinc-50 dark:bg-zinc-800" aria-label="Research visualization gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-square w-full overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-lg font-medium text-white">{image.caption}</h3>
              </div>
            </div>
          ))}

          {/* View More Card */}
          <Link
            href="/gallery"
            className="aspect-square bg-white dark:bg-zinc-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-center border-2 border-dashed border-zinc-200 dark:border-zinc-600 p-6"
            aria-label="View more gallery images"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">View More Images</h3>
              <Button variant="outline" className="group">
                See Full Gallery
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && currentImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              width={1200}
              height={900}
              className="max-h-[80vh] w-auto object-contain"
              priority
            />
            <div className="bg-black/70 p-4 text-white">
              <h3 id="lightbox-title" className="text-xl font-medium">
                {currentImage.caption}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

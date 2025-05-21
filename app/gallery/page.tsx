import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import OptimizedImage from "@/components/ui/optimized-image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { getGalleryImages } from "@/lib/gallery-images"

export const metadata: Metadata = {
  title: "Gallery | Somenath Dutta",
  description: "A collection of images showcasing Somenath Dutta's work in bioinformatics and computational biology",
}

export default async function GalleryPage() {
  const galleryImages = await getGalleryImages()

  // If no images are found, use placeholder images
  const images =
    galleryImages.length > 0
      ? galleryImages
      : Array.from({ length: 16 }).map((_, index) => ({
          id: `placeholder-${index}`,
          src: `https://picsum.photos/seed/gallery${index + 1}/800/800`,
          alt: `Gallery Image ${index + 1}`,
          width: 800,
          height: 800,
        }))

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              href="/#gallery"
              className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-12">Gallery</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={index < 4} // Only prioritize the first 4 images
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-medium text-white">Research Visualization {index + 1}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

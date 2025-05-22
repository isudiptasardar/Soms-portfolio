"use client"

import Image from "next/image"
import { useState } from "react"

interface PublicationImageProps {
  publicationId: string | number
  title: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export default function PublicationImage({
  publicationId,
  title,
  className = "",
  width = 600,
  height = 400,
  priority = false,
}: PublicationImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Dynamically generate the image URL using the publication ID
  const imageUrl =
    typeof publicationId === "string" && publicationId.startsWith("10.")
      ? `https://api.microlink.io/?url=https://doi.org/${publicationId}&screenshot=true&meta=false&embed=screenshot.url`
      : "/placeholder.svg"

  // Fallback image
  const fallbackUrl = "/placeholder.svg"

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-700 animate-pulse">
          <span className="sr-only">Loading publication image...</span>
        </div>
      )}

      {hasError ? (
        // Show fallback image if there's an error
        <Image
          src={fallbackUrl || "/placeholder.svg"}
          alt={`Publication: ${title}`}
          width={width}
          height={height}
          className="h-full w-full object-cover"
        />
      ) : (
        // Show the actual image
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Publication: ${title}`}
          width={width}
          height={height}
          className={`h-full w-full object-cover transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
            console.warn(`Failed to load image for publication: ${title}`)
          }}
          priority={priority}
          unoptimized
        />
      )}
    </div>
  )
}

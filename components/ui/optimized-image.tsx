"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import PlaceholderImage from "./placeholder-image"

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export default function OptimizedImage({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: OptimizedImageProps) {
  const [error, setError] = useState(false)

  const handleError = () => {
    console.warn(`Failed to load image: ${src}`)
    setError(true)
  }

  // If there's an error loading the image, show a placeholder
  if (error) {
    return <PlaceholderImage alt={alt} {...props} />
  }

  // Otherwise, render the image with error handling
  return <Image src={src || "/placeholder.svg"} alt={alt} {...props} onError={handleError} />
}

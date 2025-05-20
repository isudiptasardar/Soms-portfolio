"use client"

import Image, { type ImageProps } from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

type OptimizedImageProps = Omit<ImageProps, "onLoadingComplete"> & {
  fallback?: string
  lowQuality?: boolean
  lazyBoundary?: string
}

export default function OptimizedImage({
  src,
  alt,
  className,
  fallback = "/placeholder.svg",
  lowQuality = false,
  lazyBoundary = "200px",
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Reset states when src changes
    setIsLoading(true)
    setError(false)
  }, [src])

  // Handle image loading
  const handleLoad = () => {
    setIsLoading(false)
  }

  // Handle image error
  const handleError = () => {
    setError(true)
    setIsLoading(false)
  }

  // Determine the source to use
  const sourceToUse = error ? fallback : src

  if (!mounted) {
    return (
      <div className={cn("relative overflow-hidden bg-zinc-100 dark:bg-zinc-800", className)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="sr-only">Loading image...</span>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 animate-pulse">
          <span className="sr-only">Loading image...</span>
        </div>
      )}
      <Image
        src={sourceToUse || "/placeholder.svg"}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          lowQuality ? "filter blur-[1px]" : "",
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        lazyBoundary={lazyBoundary}
        priority={priority}
        {...props}
      />
    </div>
  )
}

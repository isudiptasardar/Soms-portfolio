"use client"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { encode } from "qss"
import React from "react"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"

import { cn } from "@/lib/utils"

type LinkPreviewProps = {
  children: React.ReactNode
  url?: string
  href?: string
  className?: string
  width?: number
  height?: number
  quality?: number
  layout?: string
} & ({ isStatic: true; imageSrc: string } | { isStatic?: false; imageSrc?: never })

export const LinkPreview = ({
  children,
  url,
  href,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  // Use url or href, with url taking precedence
  const linkUrl = url || href || ""

  let src
  if (!isStatic) {
    const params = encode({
      url: linkUrl,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    })
    src = `https://api.microlink.io/?${params}`
  } else {
    src = imageSrc
  }

  const [isOpen, setOpen] = React.useState(false)
  const [isMounted, setIsMounted] = React.useState(false)
  const [previewError, setPreviewError] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const springConfig = { stiffness: 100, damping: 15 }
  const x = useMotionValue(0)

  const translateX = useSpring(x, springConfig)

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect()
    const eventOffsetX = event.clientX - targetRect.left
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2 // Reduce the effect to make it subtle
    x.set(offsetFromCenter)
  }

  // Handle image error
  const handleImageError = () => {
    setPreviewError(true)
  }

  // If no URL is provided, just render the children without preview
  if (!linkUrl) {
    return <span className={className}>{children}</span>
  }

  return (
    <>
      {isMounted && !previewError ? (
        <div className="hidden">
          <img
            src={src || "/placeholder.svg"}
            width={width}
            height={height}
            alt="hidden image"
            onError={handleImageError}
          />
        </div>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open)
        }}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("text-black dark:text-white", className)}
          href={linkUrl}
          as="a"
        >
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && !previewError && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                }}
              >
                <a
                  href={linkUrl}
                  className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                  style={{ fontSize: 0 }}
                >
                  <img
                    src={isStatic ? imageSrc : src}
                    width={width}
                    height={height}
                    className="rounded-lg"
                    alt="preview image"
                    onError={handleImageError}
                  />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  )
}

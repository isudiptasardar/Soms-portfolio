"use client"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import React from "react"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

type OutreachPreviewProps = {
  children: React.ReactNode
  url: string
  className?: string
  title: string
  description: string
}

export const OutreachPreview = ({ children, url, className, title, description }: OutreachPreviewProps) => {
  const [isOpen, setOpen] = React.useState(false)
  const springConfig = { stiffness: 100, damping: 15 }
  const x = useMotionValue(0)
  const translateX = useSpring(x, springConfig)

  const handleMouseMove = (event: React.MouseEvent) => {
    const targetRect = event.currentTarget.getBoundingClientRect()
    const eventOffsetX = event.clientX - targetRect.left
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2
    x.set(offsetFromCenter)
  }

  return (
    <HoverCardPrimitive.Root
      openDelay={50}
      closeDelay={100}
      onOpenChange={(open) => {
        setOpen(open)
      }}
    >
      <HoverCardPrimitive.Trigger
        onMouseMove={handleMouseMove}
        className={cn("text-blue-600 dark:text-blue-400 hover:underline font-bold", className)}
        href={url}
      >
        {children}
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Content
        className="[transform-origin:var(--radix-hover-card-content-transform-origin)] z-50"
        side="top"
        align="center"
        sideOffset={10}
      >
        <AnimatePresence>
          {isOpen && (
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
              className="shadow-xl rounded-xl max-w-sm"
              style={{
                x: translateX,
              }}
            >
              <div className="p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg">
                {/* Using div instead of h3 */}
                <div className="font-semibold text-lg mb-2">{title}</div>
                {/* Changed p to div with the same styling */}
                <div className="text-sm text-zinc-600 dark:text-zinc-300">{description}</div>
                <div className="mt-3 text-xs text-blue-600 dark:text-blue-400">Click to learn more</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  )
}

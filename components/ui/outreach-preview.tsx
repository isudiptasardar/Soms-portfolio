"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface OutreachPreviewProps {
  url: string
  title: string
  description: string
  children: React.ReactNode
  className?: string
}

export function OutreachPreview({ url, title, description, children, className }: OutreachPreviewProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Link href={url} className={cn("cursor-pointer", className)}>
        {children}
      </Link>
      {isHovered && (
        <div className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-4 text-sm border border-zinc-200 dark:border-zinc-700">
          <div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{title}</div>
          <div className="text-zinc-600 dark:text-zinc-400">{description}</div>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white dark:bg-zinc-800 border-t border-l border-zinc-200 dark:border-zinc-700"></div>
        </div>
      )}
    </span>
  )
}

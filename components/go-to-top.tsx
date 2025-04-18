"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    // Initial check in case page is loaded scrolled down
    toggleVisibility()

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 md:p-4 rounded-full shadow-md",
        "transition-all duration-300 ease-in-out",
        "bg-zinc-800/80 dark:bg-zinc-700/80 backdrop-blur-sm",
        "hover:bg-zinc-700 dark:hover:bg-zinc-600",
        "hover:shadow-lg hover:scale-110",
        "group",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp
        className={cn(
          "h-5 w-5 md:h-6 md:w-6 text-white",
          "transition-all duration-300",
          "group-hover:animate-bounce-short",
        )}
      />
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-600 to-zinc-800 dark:from-zinc-500 dark:to-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 group-hover:animate-pulse-slow"></span>
    </button>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [outreachMenuOpen, setOutreachMenuOpen] = useState(false)
  const pathname = usePathname()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Education", href: "/#education" },
    { name: "Publications", href: "/#publications" },
    { name: "Scientific Outreach", href: "/#scientific-outreach" },
    { name: "Awards", href: "/#awards" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ]

  const outreachItems = [
    { name: "Expert Webinars", href: "/outreach/expert-webinars" },
    { name: "Conference Presentations", href: "/outreach/conference-presentations" },
    { name: "Scientific Organizations", href: "/outreach/scientific-organizations" },
    { name: "Volunteer Work", href: "/outreach/volunteer-work" },
    { name: "Research Projects", href: "/outreach/research-projects" },
    { name: "Dutta in News", href: "/outreach/dutta-in-news" },
  ]

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleOutreachMenu = () => {
    setOutreachMenuOpen(!outreachMenuOpen)
  }

  // Close mobile menu when navigating to a new section
  useEffect(() => {
    setMobileMenuOpen(false)
    setOutreachMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-medium hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
          Somenath Dutta
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
              scroll={item.href.includes("#")}
            >
              {item.name}
            </Link>
          ))}

          {/* Outreach Dropdown */}
          <div className="relative">
            <button
              onClick={toggleOutreachMenu}
              className="flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
              aria-expanded={outreachMenuOpen}
              aria-haspopup="true"
            >
              Outreach
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${outreachMenuOpen ? "rotate-180" : ""}`} />
            </button>

            {outreachMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg py-2 z-50">
                {outreachItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800 transition-colors"
                    onClick={() => setOutreachMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="mr-2"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium py-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  scroll={item.href.includes("#")}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Outreach Menu */}
              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
                <button
                  onClick={toggleOutreachMenu}
                  className="flex items-center justify-between w-full text-sm font-medium py-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
                  aria-expanded={outreachMenuOpen}
                >
                  Outreach
                  <ChevronDown className={`h-4 w-4 transition-transform ${outreachMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {outreachMenuOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {outreachItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm py-2 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setOutreachMenuOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

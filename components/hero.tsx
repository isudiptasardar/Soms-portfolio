"use client"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Suspense, lazy, memo } from "react"
import { motion } from "framer-motion"

// Lazy load the BackgroundBeams component
const LazyBackgroundBeams = lazy(() =>
  import("@/components/ui/background-beams").then((mod) => ({
    default: mod.BackgroundBeams,
  })),
)

// Memoize the hero content to prevent unnecessary re-renders
const HeroContent = memo(function HeroContent() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="block">Somenath Dutta</span>
        <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2 text-zinc-600 dark:text-zinc-400">
          Bioinformatician & Computational Biology Researcher
        </span>
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Specializing in Computer-Aided Drug Design, Vaccine Design, miRNA therapeutics, and RNA Biology with strong
        research experience across leading global institutions and labs.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button asChild size="lg">
          <a href="/Somenath_Dutta_CV.pdf" target="_blank" rel="noopener noreferrer">
            Curriculum Vitae
          </a>
        </Button>
      </motion.div>

      <motion.a
        href="#about"
        className="mt-20 inline-flex items-center justify-center relative z-10"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <ArrowDown className="h-6 w-6 text-zinc-600 dark:text-zinc-400 animate-bounce" />
      </motion.a>
    </div>
  )
})

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-20 relative overflow-hidden"
      aria-label="Hero section introducing Somenath Dutta"
    >
      <HeroContent />

      {/* Lazy load the background beams */}
      <Suspense
        fallback={
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900"></div>
        }
      >
        <LazyBackgroundBeams className="opacity-40" />
      </Suspense>
    </section>
  )
}

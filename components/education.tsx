"use client"

import { MapPin, Award, Briefcase, Calendar, GraduationCap } from "lucide-react"
import { TracingBeam } from "@/components/ui/tracing-beam"
import educationData from "@/data/education.json"
import { memo, useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

// Memoize the Education component to prevent unnecessary re-renders
const Education = memo(function Education() {
  const { academics } = educationData
  const [mounted, setMounted] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const EducationContent = () => (
    <div className="max-w-4xl mx-auto">
      {academics.map((item) => (
        <div key={item.id} className="mb-16 last:mb-0">
          <div className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg p-1 w-fit mb-4">
            <span className="px-3 py-1 text-sm font-medium flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {item.year}
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
          <h4 className="text-xl text-zinc-700 dark:text-zinc-300 mb-3">{item.program}</h4>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-zinc-600 dark:text-zinc-400">
              <GraduationCap className="h-4 w-4 mr-1" />
              <span>{item.institution}</span>
            </div>
            <div className="flex items-center text-zinc-600 dark:text-zinc-400">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{item.location}</span>
            </div>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none mb-6">
            <p>{item.description}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <Award className="h-5 w-5 mr-2 text-emerald-500" />
              Key Achievements
            </h4>
            <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 pl-2">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="pl-2">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-blue-500" />
              Skills Acquired
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-200 dark:bg-zinc-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Education</h2>

        {isMobile ? (
          <EducationContent />
        ) : (
          <TracingBeam className="px-0 md:px-6">
            <EducationContent />
          </TracingBeam>
        )}
      </div>
    </section>
  )
})

export default Education

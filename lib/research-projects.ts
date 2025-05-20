import projectsData from "@/data/research-projects.json"
import { cache } from "react"

export type Project = {
  year: number
  title: string
  status?: string
  supervisor?: string
  supervisors?: string[]
  institution: string
  note?: string
}

// Cache the projects data to avoid redundant processing
export const getAllProjects = cache((): Project[] => {
  return projectsData.ScientificProjects
})

export const getProjectsByYear = cache((): Record<number, Project[]> => {
  return getAllProjects().reduce(
    (acc, project) => {
      const year = project.year
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(project)
      return acc
    },
    {} as Record<number, Project[]>,
  )
})

export const getProjectYears = cache((): number[] => {
  return [...new Set(getAllProjects().map((project) => project.year))].sort((a, b) => b - a)
})

export const getProjectInstitutions = cache((): string[] => {
  return [...new Set(getAllProjects().map((project) => project.institution))]
})

export const getProjectSupervisors = cache((): string[] => {
  const supervisors = new Set<string>()

  getAllProjects().forEach((project) => {
    if (project.supervisor) {
      supervisors.add(project.supervisor)
    }
    if (project.supervisors) {
      project.supervisors.forEach((supervisor) => {
        supervisors.add(supervisor)
      })
    }
  })

  return Array.from(supervisors)
})

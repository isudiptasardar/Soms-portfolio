import Image from "next/image"

export default function Exposures() {
  const projects = [
    {
      id: 1,
      title: "Urban Solitude",
      category: "Documentary",
      image: "/placeholder.svg?height=600&width=800",
      year: "2023",
    },
    {
      id: 2,
      title: "Natural Patterns",
      category: "Fine Art",
      image: "/placeholder.svg?height=600&width=800",
      year: "2022",
    },
    {
      id: 3,
      title: "Faces of Resilience",
      category: "Portrait",
      image: "/placeholder.svg?height=600&width=800",
      year: "2022",
    },
    {
      id: 4,
      title: "Coastal Memories",
      category: "Travel",
      image: "/placeholder.svg?height=600&width=800",
      year: "2021",
    },
    {
      id: 5,
      title: "Architectural Geometry",
      category: "Commercial",
      image: "/placeholder.svg?height=600&width=800",
      year: "2021",
    },
    {
      id: 6,
      title: "Cultural Heritage",
      category: "Documentary",
      image: "/placeholder.svg?height=600&width=800",
      year: "2020",
    },
  ]

  return (
    <section id="exposures" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Exposures</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-white dark:bg-zinc-700 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-zinc-600 dark:text-zinc-300">{project.category}</span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

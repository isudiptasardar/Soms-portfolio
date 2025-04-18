import { Trophy } from "lucide-react"

export default function Awards() {
  const awards = [
  {
    id: 1,
    title: "Travel grant for the 1st Asia & Pacific Bioinformatics Joint Conference 2024 at Okinawa-Japan",
    organization: "APBioNET",
    year: "2024"
  },
  {
    id: 2,
    title: "Max Planck Travel and Accommodation Grant for the 2024 Horizons Symposium",
    organization: "Max Planck Society",
    year: "2024"
  },
  {
    id: 3,
    title: "Travel and Accommodation funded for Single-Cell Omics Workshop at Mahidol University, Thailand",
    organization: "Chan Zuckerberg Initiative and Human Cell Atlas",
    year: "2024"
  },
  {
    id: 4,
    title: "Mini-Fellowship Program on Molecular Imaging",
    organization: "School of Medicine, Stanford University",
    year: "2024"
  },
  {
    id: 5,
    title: "First Prize in Quiz Competition at the 2nd Asian Student Council Symposium",
    organization: "International Society for Computational Biology (ISCB)",
    year: "2023"
  },
  {
    id: 6,
    title: "Registration Fees waiver & Travel Fellowship for CompBio-2023 at NUS",
    organization: "NSF (USA) and NRF (Korea)",
    year: "2023"
  },
  {
    id: 7,
    title: "Merit-cum-Means Scholarship (Top Performer)",
    organization: "Department of Bioinformatics, Pondicherry Central University",
    year: "2022"
  },
  {
    id: 8,
    title: "Merit Scholarship for securing Highest SGPA in 2nd Semester of M.Sc.",
    organization: "Department of Bioinformatics, Pondicherry Central University",
    year: "2021"
  },
  {
    id: 9,
    title: "3rd Position among 291 Campus Ambassadors",
    organization: "E-CELL IIT Hyderabad",
    year: "2021"
  },
  {
    id: 10,
    title: "Merit-cum-Means Scholarship (Top Performer)",
    organization: "Department of Bioinformatics, Pondicherry Central University",
    year: "2020"
  },
  {
    id: 11,
    title: "2nd Position (Silver Medal) in Science Model Competition (UG)",
    organization: "West Bengal State Council of Science & Technology",
    year: "2019"
  },
  {
    id: 12,
    title: "Best Poster Presentation Award at National Seminar on Health and Ecology",
    organization: "West Bengal, India",
    year: "2017"
  }
];


  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Awards & Recognition</h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div key={award.id} className="flex flex-col items-start p-6 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-700 rounded-full mb-4">
                  <Trophy className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{award.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-2">{award.organization}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {/* Responsive image container with dynamic sizing and optimization */}
            <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] overflow-hidden rounded-full border-4 border-zinc-200 dark:border-zinc-700 shadow-md">
              <Image
                src="/images/somenath-profile.png"
                alt="Somenath Dutta - Bioinformatician and Computational Biology Researcher"
                fill
                sizes="(max-width: 640px) 200px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                className="object-cover object-center"
                priority
                quality={90}
                fetchPriority="high"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6 text-justify">
            <p className="text-lg leading-relaxed">
              &nbsp; Somenath Dutta was born in 1998 in Puncha Village, Purulia district, West Bengal, India. He
              completed his schooling at{" "}
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                {" "}
                Laulara Radha Charan Academy{" "}
              </span>{" "}
              in 2017 and later he earned his bachelors in Biotechnology from{" "}
              <a
                href="https://www.panskurabanamalicollege.ac.in/"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer font-bold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Panskura Banamali College website"
              >
                {" "}
                Panskura Banamali College (Autonomous){" "}
              </a>{" "}
              affiliated to{" "}
              <a
                href="http://www.vidyasagar.ac.in/"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer font-bold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vidyasagar University website"
              >
                {" "}
                Vidyasagar University{" "}
              </a>
              , West Bengal.
            </p>
            <p className="text-lg leading-relaxed">
              &nbsp; In 2022, Mr. Dutta completed his Master's degree in Bioinformatics from the{" "}
              <a
                href="http://www.bicpu.edu.in/"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer font-bold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Department of Bioinformatics, Pondicherry Central University website"
              >
                {" "}
                Department of Bioinformatics, Pondicherry Central University{" "}
              </a>{" "}
              with Distinction. After completing his master's he worked as a young research fellow at{" "}
              <a
                href="http://www.iiit.ac.in/"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer font-bold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit IIIT Hyderabad website"
              >
                IIIT, Hyderabad{" "}
              </a>
              , and also joined the{" "}
              <a
                href="https://www.iaamonline.org/"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer font-bold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Institute of Advanced Materials, Sweden website"
              >
                {" "}
                Institute of Advanced Materials, Sweden{" "}
              </a>{" "}
              for his pre-PhD courseworks. During his academic career, Somenath was involved in various research-based
              projects and presented his works at numerous national and international conferences. In 2023, he worked as
              a visiting scholar at{" "}
              <a
                href="https://www.soka.ac.jp/en/glycan"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer font-bold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Soka University website"
              >
                {" "}
                Soka University{" "}
              </a>
              , Japan. He is also a recipient of the prestigious 2024 Max-Planck Student Grant Award. He focused on Drug
              and Vaccine designing with RNA-based therapeutics and demonstrated tremendous willpower to achieve
              remarkable success in this field.
            </p>
            <p className="text-lg leading-relaxed">
              &nbsp; Currently Mr. Dutta is working as Doctoral Fellow at the Department of{" "}
              <a
                href="https://chemeng.pusan.ac.kr"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer font-bold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Chemical and Biomolecular Engineering department website"
              >
                {" "}
                Chemical and Biomolecular Engineering{" "}
              </a>{" "}
              at{" "}
              <a
                href="https://pusan.ac.kr"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer font-bold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Pusan National University website"
              >
                {" "}
                Pusan National University{" "}
              </a>{" "}
              in South Korea, where he is broadening his research on computational medicines.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "CADD",
                  "miRNA Therapeutics",
                  "RNA Biology",
                  "Molecular Modeling",
                  "Bioinformatics",
                  "Machine Learning",
                ].map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-zinc-200 dark:bg-zinc-700 rounded-full text-sm"
                    aria-label={`Research interest: ${specialty}`}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

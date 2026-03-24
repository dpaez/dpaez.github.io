import { Section } from "local-components/section"
import { ProjectCard } from "./ProjectCard"
import { getAllProjects, getFeaturedProjects } from "@/data/projects"

export function ProjectsGrid() {
  const featuredProjects = getFeaturedProjects()
  const allProjects = getAllProjects()

  return (
    <div className="space-y-12">
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <Section title="Featured Projects">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
      )}

      {/* All Projects */}
      <Section title="All Projects">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </div>
  )
}

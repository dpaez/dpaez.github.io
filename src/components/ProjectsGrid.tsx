import { Section } from "local-components/section"
import { ProjectCard } from "./ProjectCard"
import { getAllProjects, getFeaturedProjects } from "@/data/projects"

export function ProjectsGrid() {
  const featuredProjects = getFeaturedProjects()
  const previousProjects = getAllProjects().filter((project) => !project.featured)

  return (
    <div className="space-y-12">
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <Section title="Featured Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects
              .sort((a, b) => new Date(b.startYear || "").getTime() - new Date(a.startYear || "").getTime())
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </Section>
      )}
      {previousProjects.length > 0 && (
        <Section title="Previous Projects" background="alternate">
          <div className="grid gap-6 md:grid-cols-2">
            {previousProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}

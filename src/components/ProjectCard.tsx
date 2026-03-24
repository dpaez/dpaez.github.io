import { Card } from "local-components/card"
import { Badge } from "local-components/badge"
import { Button } from "local-components/button"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

const Footer = ({ project }: ProjectCardProps) => {
  return (
    <>
      {project.link && (
        <Button variant="ghost" size="sm" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLinkIcon className="h-4 w-4" />
            Visit
          </a>
        </Button>
      )}
      {project.repoUrl && (
        <Button variant="ghost" size="sm" asChild>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
        </Button>
      )}
      {project.demoUrl && (
        <Button variant="ghost" size="sm" asChild>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLinkIcon className="h-4 w-4" />
            Demo
          </a>
        </Button>
      )}
    </>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projectYearSplit = project.year?.split("-")
  const projectYearStart = projectYearSplit?.[0] || "Project"
  const projectYearEnd = projectYearSplit?.[1] || projectYearStart
  const meta = { label: projectYearStart, value: projectYearEnd }

  return (
    <Card
      title={project.title}
      description={project.longDescription}
      meta={meta}
      badge={
        <Badge variant="secondary" className="text-xs">
          {project.tags[0]}
        </Badge>
      }
      footer={project.link || project.repoUrl || project.demoUrl ? <Footer project={project} /> : undefined}
    >
      <Badge variant="outline" className="text-xs">
        {project.role}
      </Badge>
    </Card>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

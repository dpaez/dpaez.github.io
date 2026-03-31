import { Section } from "local-components/section"
import { Card } from "local-components/card"
import { Badge } from "local-components/badge"
import { Button } from "local-components/button"
import { talksData } from "@/data/talks"
import type { Talk } from "@/data/talks"

export function TalksSection() {
  return (
    <Section id="talks" title="Presentations" className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {talksData.map((talk) => (
          <TalkCard key={talk.id} talk={talk} />
        ))}
      </div>
    </Section>
  )
}

function TalkCard({ talk }: { talk: Talk }) {
  return (
    <Card
      title={talk.title}
      description={talk.description}
      meta={{ label: talk.event, value: talk.year.toString() }}
      badge={<Badge variant="secondary">{talk.type}</Badge>}
      className="overflow-hidden"
      image={{ src: talk.image ?? "", alt: `${talk.title} at ${talk.event}` }}
      footer={
        talk.link && (
          <Button variant="ghost" size="sm" asChild>
            <a className="no-underline" href={talk.link} target="_blank" rel="noopener noreferrer">
              View materials →
            </a>
          </Button>
        )
      }
    >
      <div className="space-y-3">
        {talk.people && <p className="text-sm text-muted-foreground capitalize">with {talk.people.join(", ")}</p>}

        <div className="flex flex-wrap gap-1">
          {talk.topics.map((topic) => (
            <Badge key={topic} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}

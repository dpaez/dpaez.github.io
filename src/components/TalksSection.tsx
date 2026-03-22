import { Card } from 'local-components/card'
import { talksData } from '@/data/talks'
import type { Talk } from '@/data/talks'

export function TalksSection() {
  return (
    <div className="space-y-8">
      <Card title="Talks & Workshops" className="prose dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">
          I enjoy preparing content for talks and workshops. Sharing
          experiences and structuring ideas is always a rewarding experience.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {talksData.map((talk) => (
            <TalkCard key={talk.id} talk={talk} />
          ))}
        </div>
      </Card>
    </div>
  )
}

function TalkCard({ talk }: { talk: Talk }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      {talk.image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={talk.image}
            alt={`${talk.title} at ${talk.event}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {talk.event} {talk.year}
            </span>
            <h3 className="font-semibold mt-1">{talk.title}</h3>
          </div>
          <span className="text-xs px-2 py-1 bg-muted rounded-full">
            {talk.type}
          </span>
        </div>

        {talk.people && (
          <p className="text-sm text-muted-foreground">
            with {talk.people.join(', ')}
          </p>
        )}

        <div className="flex flex-wrap gap-1">
          {talk.topics.map((topic) => (
            <span
              key={topic}
              className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded"
            >
              {topic}
            </span>
          ))}
        </div>

        {talk.link && (
          <a
            href={talk.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-primary hover:underline"
          >
            View materials →
          </a>
        )}
      </div>
    </div>
  )
}

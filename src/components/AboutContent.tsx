import { Card } from 'local-components/card'
import { aboutData } from '@/data/about'
import { experienceData } from '@/data/experience'
import { linksData } from '@/data/links'
import { areasOfInterestData } from '@/data/areas-of-interest'

export function AboutContent() {
  return (
    <div className="space-y-8">
      {/* Bio Card */}
      <Card title="About" className="prose dark:prose-invert max-w-none">
        <div className="space-y-4">
          <p>
            Hi, I'm <strong>{aboutData.name}</strong> also known as{' '}
            <code>{aboutData.handle}</code> ({aboutData.pronouns}).{' '}
            {aboutData.birthYear}. Natural from Tierra del Fuego, Patagonia,
            Argentina. Based on {aboutData.location}.
          </p>
          <p>{aboutData.education}</p>
          <p>{aboutData.currentFocus}</p>
          <blockquote className="border-l-4 border-primary pl-4 italic">
            {aboutData.quote}
          </blockquote>
        </div>
      </Card>

      {/* Experience Section */}
      <Card title="Experience" className="space-y-6">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="border-b border-border pb-4 last:border-0"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{exp.company}</h3>
                <p className="text-muted-foreground">
                  {exp.role} • {exp.period}
                </p>
              </div>
              <span className="text-xs px-2 py-1 bg-muted rounded-full">
                {exp.type}
              </span>
            </div>
            <p className="text-muted-foreground mb-2">{exp.description}</p>
            {exp.highlights && (
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Card>

      {/* Areas of Interest */}
      <Card title="Areas of Interest">
        <p className="text-muted-foreground mb-4">
          Areas of focus drawn from past roles and ongoing interest:
          full‑stack engineering, tailored JavaScript solutions, distributed
          systems, P2P‑powered products and agents development cycles and harness
          engineering.
        </p>
        <div className="flex flex-wrap gap-2">
          {areasOfInterestData.map((area) => (
            <span
              key={area.id}
              className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
            >
              {area.name}
            </span>
          ))}
        </div>
      </Card>

      {/* Contact & Links */}
      <Card title="Contact & Links">
        <p className="text-muted-foreground mb-4">
          You can reach me at{' '}
          <code className="bg-muted px-1 py-0.5 rounded">
            diego at geutstudio dot com
          </code>
        </p>
        <div className="flex flex-wrap gap-4">
          {linksData.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Card>
    </div>
  )
}

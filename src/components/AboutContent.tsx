import { Section } from "local-components/section"
import { Card } from "local-components/card"
import { Blockquote } from "local-components/typography/blockquote"
import { Badge } from "local-components/badge"
import { Button } from "local-components/button"
import { aboutData } from "@/data/about"
import { experienceData } from "@/data/experience"
import { linksData } from "@/data/links"
import { areasOfInterestData } from "@/data/areas-of-interest"

export function AboutContent() {
  return (
    <>
      <Section title="About">
        <div className="flex flex-col gap-8">
          {/* Bio Card */}
          <Card title="About" className="prose dark:prose-invert max-w-none">
            <div className="space-y-4">
              <p>
                Hi, I'm <strong>{aboutData.name}</strong> also known as <code>{aboutData.handle}</code> (
                {aboutData.pronouns}). {aboutData.birthYear}. Natural from Tierra del Fuego, Patagonia, Argentina. Based
                on {aboutData.location}.
              </p>
              <p>{aboutData.education}</p>
              <p>{aboutData.currentFocus}</p>
              <Blockquote>{aboutData.quote}</Blockquote>
            </div>
          </Card>
          {/* Contact & Links */}
          <Card variant="ghost" title="Contact & Links">
            <p className="text-muted-foreground mb-4">
              You can reach me at <code className="bg-muted px-1 py-0.5 rounded">diego at geutstudio dot com</code>
            </p>
            <div className="flex flex-wrap gap-2">
              {linksData.map((link) => (
                <Button key={link.id} variant="ghost" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </Section>
      <Section title="Experience">
        {/* Experience Section */}
        <div className="flex flex-col gap-4">
          {experienceData.map((exp) => (
            <Card
              key={exp.id}
              variant="outline"
              className="space-y-6"
              title={exp.company}
              badge={<Badge variant="secondary">{exp.type}</Badge>}
            >
              <div key={exp.id} className="border-b border-border pb-4 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-muted-foreground">
                      {exp.role} • {exp.period}
                    </p>
                  </div>
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
            </Card>
          ))}
        </div>
      </Section>
      {/* Areas of Interest */}
      <Section title="Areas of Interest" className="space-y-8">
        <Card variant="outline">
          <p className="text-muted-foreground mb-4">
            Areas of focus drawn from past roles and ongoing interest: full‑stack engineering, tailored JavaScript
            solutions, distributed systems, P2P‑powered products and agents development cycles and harness engineering.
          </p>
          <div className="flex flex-wrap gap-2">
            {areasOfInterestData.map((area) => (
              <Badge key={area.id} variant="outline">
                {area.name}
              </Badge>
            ))}
          </div>
        </Card>
      </Section>
    </>
  )
}

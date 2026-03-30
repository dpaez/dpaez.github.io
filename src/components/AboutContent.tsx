import { Section } from "local-components/section"
import { Card } from "local-components/card"
import { Blockquote } from "local-components/typography/blockquote"
import { Badge } from "local-components/badge"
import { Button } from "local-components/button"
import { aboutData } from "@/data/about"
import { experienceData } from "@/data/experience"
import { linksData } from "@/data/links"
import { areasOfInterestData } from "@/data/areas-of-interest"
import { Heading } from "local-components/typography/heading"
import { Text } from "local-components/typography/text"
import { Code } from "local-components/typography/code"

export function AboutContent() {
  return (
    <>
      <Section id="bio">
        <div className="flex flex-col gap-8">
          {/* Bio Card */}
          <Card
            title={
              <Heading as="h4" className="tracking-wide">
                BIO
              </Heading>
            }
            className=" max-w-none"
            description={<Text color="muted">{aboutData.bio}</Text>}
            image={{ src: aboutData.image, alt: "Diego Paez Profile Picture" }}
            style={{ objectPosition: "top" }}
          >
            <div className="space-y-4">
              <Text>{aboutData.education}</Text>
              <Text>{aboutData.currentFocus}</Text>
            </div>
          </Card>
          <Blockquote>{aboutData.quote}</Blockquote>
        </div>
      </Section>
      <Section id="connect" title="Connect" background="alternate">
        {/* Contact & Links */}
        <Card variant="elevated" title={<Heading as="h4">Got a project → Drop me a line</Heading>}>
          <Text className="text-lg mb-4">
            Reach me at <Code>diego at geutstudio dot com</Code>
          </Text>
          <div className="flex flex-wrap gap-2">
            {linksData.map((link) => (
              <Button key={link.id} variant="outline" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </Card>
      </Section>
      <Section id="experience" title="Experience">
        {/* Experience Section */}
        <div className="flex flex-col gap-4">
          {experienceData.map((exp) => (
            <Card
              key={exp.id}
              variant="bordered"
              className="space-y-6"
              title={<Heading as="h4">{exp.company}</Heading>}
              badge={<Badge variant="secondary">{exp.role}</Badge>}
            >
              <div key={exp.id} className="border-b border-border pb-4 last:border-0">
                <div className="flex flex-col items-start mb-2">
                  <Heading as="h5" className="text-muted-foreground font-mono">
                    {exp.period}
                  </Heading>
                </div>
                <Text className="text-muted-foreground mb-2">{exp.description}</Text>
                {exp.highlights && (
                  <ul
                    role="list"
                    className="list-(--list-bullet) marker:text-primary-300 font-mono font-thin text-primary-400 list-inside text-sm space-y-1"
                  >
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
        <Card
          description="Areas of focus drawn from past roles and ongoing interest: full‑stack engineering, tailored JavaScript
            solutions, distributed systems, P2P‑powered products and agents development cycles and harness engineering."
        >
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

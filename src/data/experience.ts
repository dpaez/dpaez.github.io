export interface Experience {
  id: string
  company: string
  role: string
  type: "co-founder" | "fulltime" | "contract" | "academic"
  period: string
  description: string
  highlights?: string[]
}

export const experienceData: Experience[] = [
  {
    id: "geut-current",
    company: "GEUT",
    role: "Co-founder",
    type: "co-founder",
    period: "2018 - Present",
    description: "Boutique software consultancy and a lab for P2P experiments.",
    highlights: [
      "Co-founded GEUT in 2018 as a boutique software consultancy and P2P lab",
      "Launched Sher in 2020: a fan-to-fan live-audio platform with P2P delivery",
      "Went through two accelerators: Emprelatam & Latitud",
      "Returned to consultancy in 2022, working with Alliants in staff-augmentation model through end of 2024",
      "Now exploring AI landscape and open to new collaborations",
    ],
  },
  {
    id: "alliants",
    company: "Alliants",
    role: "Staff Augmentation / Full-Stack Engineer",
    type: "contract",
    period: "2022 - 2025",
    description:
      "Worked inside an established product team, moving fast across the stack—from developer tooling and bundling to shipping meaningful frontend performance wins.",
    highlights: [
      "Staff-augmentation",
      "Worked across the full stack from developer tooling to fullstack development and performance optimizations",
      "Shipped meaningful performance improvements",
    ],
  },
  {
    id: "sher",
    company: "Sher",
    role: "Co-founder & Technical Lead",
    type: "co-founder",
    period: "2020 - 2022",
    description:
      'Fan-to-fan live-audio platform that paired P2P delivery with streaming. Creators got a lightweight "remote studio" right in the browser—no downloads, just start streaming in a few clicks.',
    highlights: [
      "Built P2P-powered streaming platform with high-quality audio",
      "Navigated marketplace chicken-and-egg problem in LatAm",
      "Challenged by payment infrastructure limitations (no Stripe-class tooling)",
      "Self-funded, learned painful but useful lessons about runway and product-market fit",
    ],
  },
  {
    id: "despegar",
    company: "Despegar",
    role: "Fullstack Engineer",
    type: "fulltime",
    period: "2015-2018",
    description:
      'Worked as Fullstack Engineer on projects including a "components as a service" system that was rendered and consumed by different teams across the company.',
    highlights: [
      "Built components as a service architecture",
      "Cross-team integration and consumption patterns",
      "Large-scale fullstack development",
    ],
  },
  {
    id: "lifia",
    company: "LIFIA",
    role: "Researcher / Developer",
    type: "academic",
    period: "2013-2015",
    description: "Worked at LIFIA research lab.",
  },
  {
    id: "unlp",
    company: "UNLP - Informática",
    role: "Assistant Professor",
    type: "academic",
    period: "2012-2013",
    description: 'Assistant Professor at alma mater teaching "User Centered Design" and "Mobile Devices\' Interfaces".',
    highlights: [
      "Delivered lectures on User Centered Design",
      "Prepared practical exercises for Mobile Devices Interfaces",
      "Fantastic teaching experience",
    ],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Freelance Developer",
    type: "contract",
    period: "2010-2012",
    description: "Freelance developer.",
    highlights: ["Developed websites for small businesses and individuals"],
  },
]

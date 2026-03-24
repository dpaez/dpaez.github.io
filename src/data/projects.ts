export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
  link?: string
  image?: string
  featured: boolean
  year?: string
  role?: string
}

export const projectsData: Project[] = [
  {
    id: "sher",
    title: "Sher",
    description: "Fan-to-fan live-audio platform with P2P delivery",
    longDescription:
      'A fan-to-fan live-audio platform that paired P2P delivery with streaming. Creators got a lightweight "remote studio" right in the browser—no downloads, just start streaming in a few clicks. Listeners helped spread the show with no streaming servers in the middle.',
    tags: ["P2P", "WebRTC", "Live Audio", "Streaming", "JavaScript", "Node.js"],
    link: "https://sher.geutstudio.com",
    featured: true,
    year: "2020-2022",
    role: "Co-founder & Technical Lead",
  },
  {
    id: "geut",
    title: "GEUT Studio",
    description: "Boutique software consultancy and P2P lab",
    longDescription:
      "A boutique software consultancy and a lab for P2P experiments. Founded in 2018, we help teams build distributed systems and explore the P2P landscape.",
    tags: ["P2P", "Distributed Systems", "Consultancy", "JavaScript", "Node.js"],
    link: "https://geutstudio.com",
    featured: true,
    year: "2018-Present",
    role: "Co-founder",
  },
  {
    id: "despegar-components",
    title: "Despegar Components",
    description: "Components-as-a-service architecture",
    longDescription:
      "Built a components-as-a-service system at Despegar that was rendered and consumed by different teams across the company. Enabled consistent UI patterns and faster development across multiple product teams.",
    tags: ["React", "Components", "Architecture", "Fullstack", "JavaScript"],
    featured: true,
    year: "2015-2018",
    role: "Fullstack Engineer",
  },
  {
    id: "dat-workshop",
    title: "Dat Workshop",
    description: "Workshop materials for P2P data sharing with Dat protocol",
    longDescription:
      "Workshop materials and examples for building applications with the Dat protocol. Covers P2P data sharing, decentralized architectures, and building chat applications.",
    tags: ["Dat", "P2P", "Workshop", "JavaScript", "Node.js"],
    repoUrl: "https://github.com/geut/dat-workshop",
    featured: false,
    year: "2018",
    role: "Workshop Creator",
  },
  {
    id: "building-up-on-dat",
    title: "Building Up on Dat",
    description: "Talk materials about the Dat ecosystem and decentralization",
    longDescription:
      "Talk materials and examples from NodeConf Colombia 2019. Exploring the Dat ecosystem, decentralization patterns, and P2P application development.",
    tags: ["Dat", "P2P", "Decentralization", "Talk", "JavaScript"],
    repoUrl: "https://github.com/geut/building-up-on-dat",
    featured: false,
    year: "2019",
    role: "Speaker",
  },
  {
    id: "harness-engineering",
    title: "Harness Engineering",
    description: "Exploring AI landscape and new collaborations",
    longDescription:
      "Currently focusing on exploring the AI landscape and open to new collaborations—whether augmenting teams or taking on full features or greenfield projects end to end.",
    tags: ["AI", "Consultancy", "Fullstack", "JavaScript", "TypeScript"],
    featured: false,
    year: "2026",
    role: "Consultant",
  },
]

export const getFeaturedProjects = (): Project[] => projectsData.filter((p) => p.featured)

export const getAllProjects = (): Project[] => projectsData

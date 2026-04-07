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
  startYear: string
  endYear?: string
  role?: string
}

export const projectsData: Project[] = [
  {
    id: "sher",
    title: "Sher",
    description: "Fan-to-fan live-audio platform with P2P delivery",
    longDescription:
      'A fan-to-fan live-audio platform that paired P2P delivery with streaming. Creators got a lightweight "remote studio" right in the browser—no downloads, just start streaming in a few clicks. Listeners helped spread the show with no streaming servers in the middle. Self-funded project.',
    tags: ["P2P", "WebRTC", "Hypercore", "Live Audio", "Streaming", "JavaScript"],
    link: "https://sher.fm",
    featured: true,
    startYear: "2020",
    endYear: "2022",
    role: "Co-founder",
  },
  {
    id: "geut",
    title: "Geut Studio",
    description: "Boutique software consultancy",
    longDescription:
      "A boutique software consultancy and a lab for P2P experiments. Founded in 2018, we help teams build distributed systems and explore the P2P landscape.",
    tags: ["Consultancy", "P2P", "Distributed Systems", "JavaScript", "Node.js"],
    link: "https://geutstudio.com",
    featured: true,
    startYear: "2018",
    endYear: "Present",
    role: "Co-founder",
  },
  {
    id: "dat-workshop",
    title: "Dat Workshop",
    description: "Workshop materials for P2P data sharing with Dat protocol",
    longDescription:
      "Workshop materials and examples for building applications with the Dat protocol. Covers P2P data sharing, decentralized architectures, and building chat applications.",
    tags: ["P2P", "Dat", "Workshop", "JavaScript", "Node.js"],
    repoUrl: "https://github.com/geut/dat-workshop",
    featured: false,
    startYear: "2018",
    endYear: "2018",
    role: "Workshop Creator",
  },
  {
    id: "building-up-on-dat",
    title: "Building Up on Dat",
    description: "Talk materials about the Dat ecosystem and decentralization",
    longDescription:
      "Talk materials and examples from NodeConf Colombia 2019. Exploring the Dat ecosystem, getting familiar with The Dat protocol and learn how to make a P2P webapp and a Node.js app.",
    tags: ["P2P", "Dat", "Demos", "Talk", "JavaScript"],
    repoUrl: "https://github.com/geut/building-up-on-dat",
    featured: false,
    startYear: "2019",
    endYear: "2019",
    role: "Speaker",
  },
  {
    id: "local-components",
    title: "Local Components Library",
    description: "UI components library for portfolio pages and projects. Made by agents.",
    longDescription:
      "UI components library for portfolio pages and projects. Made by agents following Product Requirements Documents(PRD), Technical Design Documents (TDDs) and Tasks Lists.",
    tags: ["Agents Workflow", "TypeScript", "React", "Components", "UI"],
    repoUrl: "https://github.com/geut/local-components",
    featured: true,
    startYear: "2026",
    endYear: "Present",
    role: "Personal Project",
  },
]

export const getFeaturedProjects = (): Project[] => projectsData.filter((p) => p.featured)

export const getAllProjects = (): Project[] => projectsData

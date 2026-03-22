export interface Talk {
  id: string
  title: string
  event: string
  year: number
  type: "talk" | "workshop"
  topics: string[]
  link?: string
  image?: string
  people?: string[]
}

export const talksData: Talk[] = [
  {
    id: "nodeconf-colombia-2019",
    title: "Building Up on Dat",
    event: "NodeConf Colombia",
    year: 2019,
    type: "talk",
    topics: ["dat", "descentralization", "p2p", "ecosystem"],
    link: "https://github.com/geut/building-up-on-dat",
    image: "/assets/talks/dk_nodeconfco.jpg",
  },
  {
    id: "nodeconf-argentina-2018",
    title: "dat-workshop",
    event: "NodeConf Argentina",
    year: 2018,
    type: "workshop",
    topics: ["dat", "p2p", "chat app"],
    link: "https://github.com/geut/dat-workshop",
    image: "/assets/talks/dat_workshop.jpeg",
    people: ["Martin Acosta", "Diego Paez"],
  },
  {
    id: "nodeconf-argentina-2016",
    title: "Micro (hapi) ness",
    event: "NodeConf Argentina",
    year: 2016,
    type: "talk",
    topics: ["microservices", "nodejs", "p2p", "hapijs"],
    image: "/assets/talks/deka_nodeconf_2.jpg",
  },
  {
    id: "node-interactive-na-2016",
    title: "Multimodal Interactions & JS: the what, the why and the how",
    event: "Node Interactive North America",
    year: 2016,
    type: "talk",
    image: "/assets/talks/dk_node_interactive_2016.png",
    topics: ["HCI", "UX", "IoT", "JavaScript"],
  },
]

export interface Talk {
  id: string
  title: string
  description: string
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
    description:
      "Talk held in NodeConf Colombia 2019. A good intro to the Dat ecosystem (these days known as Holepunch). The talk walked through the main modules anc concepts for building decentralized apps. Examples included.",
    event: "NodeConf Colombia",
    year: 2019,
    type: "talk",
    topics: ["Dat", "P2P", "Ecosystem"],
    link: "https://github.com/geut/building-up-on-dat",
    image: "/assets/talks/dk_nodeconfco.jpg",
  },
  {
    id: "nodeconf-argentina-2018",
    title: "dat-workshop",
    description:
      "Workshop held in NodeConf Argentina 2018. A hands-on workshop on building a decentralized chat application using the Dat protocol.",
    event: "NodeConf Argentina",
    year: 2018,
    type: "workshop",
    topics: ["Dat", "P2P", "Chat App"],
    link: "https://github.com/geut/dat-workshop",
    image: "/assets/talks/dat_workshop.jpeg",
    people: ["Martin Acosta", "Diego Paez"],
  },
  {
    id: "nodeconf-argentina-2016",
    title: "Micro (hapi) ness",
    description:
      "Talk held in NodeConf Argentina 2016. A talk looking to connect the idea of microservices with P2P networks. Think about decentralized resilient register services",
    event: "NodeConf Argentina",
    year: 2016,
    type: "talk",
    topics: ["Microservices", "Node.js", "P2P", "Hapi.js"],
    image: "/assets/talks/deka_nodeconf_2.jpg",
  },
  {
    id: "node-interactive-na-2016",
    title: "Multimodal Interactions & JS: the what, the why and the how",
    description:
      "A presentation given at Node Interactive North America 2016. The talk was about my thesis main work: Multimodal Interactions and Web Applications. The idea is to enhance the communication channels between user and web apps. Eg: Haptic feedback, voice controls and many more.",
    event: "Node Interactive North America",
    year: 2016,
    type: "talk",
    image: "/assets/talks/dk_node_interactive_2016.png",
    topics: ["HCI", "UX", "JavaScript", "Research"],
  },
]

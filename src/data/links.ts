export interface Link {
  id: string
  label: string
  url: string
  type: "social" | "professional" | "project"
}

export const linksData: Link[] = [
  {
    id: "twitter",
    label: "Follow me on X",
    url: "https://x.com/carax",
    type: "social",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/dpaez",
    type: "social",
  },
  {
    id: "geut",
    label: "Geut Studio",
    url: "https://geutstudio.com",
    type: "professional",
  },
]

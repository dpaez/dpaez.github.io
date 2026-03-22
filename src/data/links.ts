export interface Link {
  id: string
  label: string
  url: string
  type: 'social' | 'professional' | 'project'
}

export const linksData: Link[] = [
  {
    id: 'twitter',
    label: 'Twitter',
    url: 'https://twitter.com/carax',
    type: 'social',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/dpaez',
    type: 'social',
  },
  {
    id: 'geut',
    label: 'GEUT',
    url: 'https://geutstudio.com',
    type: 'professional',
  },
  {
    id: 'sher',
    label: 'SHER',
    url: 'https://sher.geutstudio.com',
    type: 'project',
  },
]

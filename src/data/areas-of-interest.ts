export interface AreaOfInterest {
  id: string
  name: string
  category: 'core' | 'frontend' | 'backend' | 'other'
}

export const areasOfInterestData: AreaOfInterest[] = [
  { id: 'js', name: 'JS', category: 'core' },
  { id: 'nodejs', name: 'Node.JS', category: 'backend' },
  { id: 'distributed-systems', name: 'Distributed Systems', category: 'core' },
  { id: 'harness-engineering', name: 'Harness Engineering', category: 'core' },
  { id: 'p2p', name: 'P2P', category: 'core' },
  { id: 'hci', name: 'HCI', category: 'other' },
  { id: 'react', name: 'React', category: 'frontend' },
  { id: 'vue', name: 'Vue', category: 'frontend' },
  { id: 'fullstack', name: 'Fullstack', category: 'core' },
]

export const interestCategories = ['core', 'frontend', 'backend', 'other'] as const

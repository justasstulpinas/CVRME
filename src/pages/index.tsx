import { Tabs } from '@/components/primitives/Tabs'

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <Tabs
        defaultTab="active"
        tabs={[
          { key: 'active', label: 'Active' },
          { key: 'completed', label: 'Completed' },
          { key: 'cancelled', label: 'Cancelled' },
        ]}
      >
        {(tab) => {
          if (tab === 'active') return <div>Active gigs</div>
          if (tab === 'completed') return <div>Completed gigs</div>
          if (tab === 'cancelled') return <div>Cancelled gigs</div>
          return null
        }}
      </Tabs>
    </div>
  )
}

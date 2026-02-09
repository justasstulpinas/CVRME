import { AppShell } from '@/components/layout/AppShell'
import { Tabs } from '@/components/primitives/Tabs'

export default function Home() {
  return (
    <AppShell>
      <Tabs
        defaultTab="active"
        tabs={[
          { key: 'active', label: 'Active' },
          { key: 'completed', label: 'Completed' },
        ]}
      >
        {(tab) => (
          <div>
            {tab === 'active' && <div>Active gigs</div>}
            {tab === 'completed' && <div>Completed gigs</div>}
          </div>
        )}
      </Tabs>
    </AppShell>
  )
}

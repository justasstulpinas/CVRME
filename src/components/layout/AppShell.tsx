import { ReactNode } from 'react'
import { IconButton } from '@/components/primitives/IconButton'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-14 flex items-center justify-between px-4 border-b border-outline">
        <div className="flex items-center gap-2">
          <IconButton icon="home" ariaLabel="Home" />
          <IconButton icon="work" ariaLabel="Gigs" />
        </div>

        <div className="flex items-center gap-2">
          <IconButton icon="notifications" ariaLabel="Notifications" />
          <IconButton icon="person" ariaLabel="Profile" />
        </div>
      </header>

      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  )
}

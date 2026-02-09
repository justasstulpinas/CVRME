import { useRouter } from 'next/router'
import { ReactNode } from 'react'

export interface TabConfig {
  key: string
  label: string
  icon?: string
}

interface TabsProps {
  tabs: TabConfig[]
  children: (activeKey: string) => ReactNode
  queryKey?: string
  defaultTab: string
}

export function Tabs({
  tabs,
  children,
  defaultTab,
  queryKey = 'tab',
}: TabsProps) {
  const router = useRouter()
  const active =
    typeof router.query[queryKey] === 'string'
      ? router.query[queryKey]
      : defaultTab

  function setTab(key: string) {
    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, [queryKey]: key },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 border-b border-outline">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setTab(tab.key)}
            className={[
              'px-3 py-2 text-caption transition',
              'border-b-2',
              active === tab.key
                ? 'border-primary text-primary'
                : 'border-transparent text-onSurface/70 hover:text-onSurface',
            ].join(' ')}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{children(active)}</div>
    </div>
  )
}

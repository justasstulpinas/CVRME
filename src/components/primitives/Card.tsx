import { ReactNode } from 'react'

interface CardProps {
  header?: ReactNode
  footer?: ReactNode
  children: ReactNode
  elevation?: 'none' | 'sm' | 'md'
}

const elevationMap = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
}

export function Card({
  header,
  footer,
  children,
  elevation = 'sm',
}: CardProps) {
  return (
    <div
      className={[
        'rounded-lg',
        'bg-surface text-onSurface',
        'border border-outline',
        elevationMap[elevation],
      ].join(' ')}
    >
      {header && (
        <div className="px-4 py-3 border-b border-outline text-body">
          {header}
        </div>
      )}

      <div className="px-4 py-4 text-body">
        {children}
      </div>

      {footer && (
        <div className="px-4 py-3 border-t border-outline">
          {footer}
        </div>
      )}
    </div>
  )
}

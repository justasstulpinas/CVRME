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
        'border border-black/10',
        'bg-white',
        elevationMap[elevation],
      ].join(' ')}
    >
      {header && (
        <div className="px-4 py-3 border-b border-black/10 text-body">
          {header}
        </div>
      )}

      <div className="px-4 py-4 text-body">
        {children}
      </div>

      {footer && (
        <div className="px-4 py-3 border-t border-black/10">
          {footer}
        </div>
      )}
    </div>
  )
}

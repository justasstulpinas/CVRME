import { Icon } from './Icon'

interface IconButtonProps {
  icon: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  ariaLabel: string
}

export function IconButton({
  icon,
  onClick,
  size = 'md',
  disabled,
  ariaLabel,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center',
        'rounded-full',
        'min-h-12 min-w-12',
        'transition duration-base ease-standard',
        'hover:bg-[var(--overlay-hover)]',
        'active:bg-[var(--overlay-pressed)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline',
        'disabled:opacity-40 disabled:pointer-events-none',
        'cursor-pointer',
      ].join(' ')}
    >
      <Icon name={icon} size={size} />
    </button>
  )
}

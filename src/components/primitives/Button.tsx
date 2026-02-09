import clsx from 'clsx'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'text'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center rounded-md transition duration-base ease-standard focus:outline-none'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-black text-white hover:opacity-90 disabled:opacity-40',
  secondary:
    'bg-transparent border border-black text-black hover:bg-black/5 disabled:opacity-40',
  text:
    'bg-transparent text-black hover:underline disabled:opacity-40',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-caption',
  md: 'px-4 py-2 text-button',
  lg: 'px-6 py-3 text-body',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading,
  disabled,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(base, variants[variant], sizes[size])}
    >
      {loading ? '...' : children}
    </button>
  )
}


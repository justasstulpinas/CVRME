// src/components/primitives/Button.tsx

import { ReactNode } from 'react'
import { Icon } from './Icon'

type ButtonVariant = 'primary' | 'secondary' | 'text'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
  iconLeft?: string
  iconRight?: string
}

const base =
  'inline-flex gap-2 items-center justify-center ' +
  'rounded-md min-h-12 leading-none ' +
  'transition duration-base ease-standard ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-surface ' +
  'active:bg-[var(--overlay-pressed)]'


const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-onPrimary hover:bg-primary/90 disabled:opacity-40',

  secondary:
    'bg-surface text-onSurface border border-outline ' +
    'hover:bg-[var(--overlay-hover)] ' +
    'disabled:opacity-40',

  text:
    'bg-transparent text-onSurface ' +
    'hover:bg-[var(--overlay-hover)] ' +
    'disabled:opacity-40',
}


const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-caption',
  md: 'px-4 py-2.5 text-button',
  lg: 'px-6 py-3 text-body',
}


export function Button({
  variant = 'primary',
  size = 'md',
  loading,
  disabled,
  onClick,
  children,
  iconLeft,
  iconRight,
}: ButtonProps) {
  const className = [
    base,
    variants[variant],
    sizes[size],
  ].join(' ')

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
    >
      {iconLeft && !loading && <Icon name={iconLeft} size="sm" />}
      {loading ? '…' : children}
      {iconRight && !loading && <Icon name={iconRight} size="sm" />}
    </button>
  )
}

// src/components/primitives/Icon.tsx

interface IconProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

const sizeMap = {
  sm: 'text-[18px]',
  md: 'text-[24px]',
  lg: 'text-[32px]',
}

export function Icon({
  name,
  size = 'md',
  color,
}: IconProps) {
  return (
    <span
      className={[
        'material-symbols-outlined',
        'leading-none',
        sizeMap[size],
      ].join(' ')}
      style={{
        color,
        fontVariationSettings:
          "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}

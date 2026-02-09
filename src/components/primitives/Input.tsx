interface InputProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  error?: string
  helperText?: string
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  helperText,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-caption text-onSurface">
          {label}
        </label>
      )}

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        className={[
          'h-12 px-4 rounded-md',
          'bg-surface text-onSurface',
          'border border-outline',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2 focus-visible:ring-offset-surface',,
          'disabled:opacity-40 disabled:cursor-not-allowed',
          error ? 'border-primary' : '',
        ].join(' ')}
      />

      {(error || helperText) && (
        <div className="text-caption text-onSurface">
          {error ?? helperText}
        </div>
      )}
    </div>
  )
}

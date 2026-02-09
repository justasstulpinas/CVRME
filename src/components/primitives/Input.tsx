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
        <label className="text-caption">
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
          'border border-black/20',
          'text-body',
          'focus:outline-none focus:ring-0',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          error ? 'border-black' : '',
        ].join(' ')}
      />

      {(error || helperText) && (
        <div className="text-caption">
          {error ?? helperText}
        </div>
      )}
    </div>
  )
}

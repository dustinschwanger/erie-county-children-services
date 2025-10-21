import { SelectHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helpText?: string
  options: readonly SelectOption[] | SelectOption[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      error,
      helpText,
      required,
      disabled,
      options,
      placeholder,
      ...props
    },
    ref
  ) => {
    const selectId = props.id || props.name

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className={cn('label-base', required && 'label-required')}
          >
            {label}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'input-base appearance-none pr-10 cursor-pointer',
              error && 'input-error',
              className
            )}
            aria-required={required}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${selectId}-error`
                : helpText
                ? `${selectId}-help`
                : undefined
            }
            disabled={disabled}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom dropdown arrow */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {error && (
          <p id={`${selectId}-error`} className="error-message" role="alert">
            {error}
          </p>
        )}

        {helpText && !error && (
          <p id={`${selectId}-help`} className="text-sm text-gray-500 mt-1">
            {helpText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select

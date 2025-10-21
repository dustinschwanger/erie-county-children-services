import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helpText?: string
  icon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      error,
      helpText,
      required,
      disabled,
      icon,
      ...props
    },
    ref
  ) => {
    const inputId = props.id || props.name

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn('label-base', required && 'label-required')}
          >
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={type}
            className={cn(
              'input-base',
              error && 'input-error',
              icon && 'pl-10',
              className
            )}
            aria-required={required}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined
            }
            disabled={disabled}
            {...props}
          />
        </div>

        {error && (
          <p id={`${inputId}-error`} className="error-message" role="alert">
            {error}
          </p>
        )}

        {helpText && !error && (
          <p id={`${inputId}-help`} className="text-sm text-gray-500 mt-1">
            {helpText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input

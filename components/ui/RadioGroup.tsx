import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface RadioOption {
  value: string
  label: string
}

export interface RadioGroupProps {
  label?: string
  name: string
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  error?: string
  required?: boolean
  className?: string
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ label, name, options, value, onChange, error, required, className }, ref) => {
    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label className={cn('label-base', required && 'label-required')}>
            {label}
          </label>
        )}
        <div className="flex flex-wrap gap-4 mt-2">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                ref={ref}
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange?.(e.target.value)}
                className="w-4 h-4 text-primary-blue border-gray-300 focus:ring-2 focus:ring-primary-blue/20 cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                {option.label}
              </span>
            </label>
          ))}
        </div>
        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup

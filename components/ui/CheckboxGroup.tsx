import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CheckboxOption {
  value: string
  label: string
}

export interface CheckboxGroupProps {
  label?: string
  name: string
  options: CheckboxOption[]
  value?: string[]
  onChange?: (values: string[]) => void
  error?: string
  required?: boolean
  className?: string
}

const CheckboxGroup = forwardRef<HTMLInputElement, CheckboxGroupProps>(
  ({ label, name, options, value = [], onChange, error, required, className }, ref) => {
    const handleChange = (optionValue: string, checked: boolean) => {
      if (checked) {
        onChange?.([...value, optionValue])
      } else {
        onChange?.(value.filter((v) => v !== optionValue))
      }
    }

    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label className={cn('label-base', required && 'label-required')}>
            {label}
          </label>
        )}
        <div className="flex flex-col gap-3 mt-2">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                ref={ref}
                type="checkbox"
                name={name}
                value={option.value}
                checked={value.includes(option.value)}
                onChange={(e) => handleChange(option.value, e.target.checked)}
                className="w-4 h-4 text-primary-blue border-gray-300 rounded focus:ring-2 focus:ring-primary-blue/20 cursor-pointer"
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

CheckboxGroup.displayName = 'CheckboxGroup'

export default CheckboxGroup

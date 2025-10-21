import { TextareaHTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helpText?: string
  showCharCount?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helpText,
      required,
      disabled,
      maxLength,
      showCharCount = false,
      value,
      ...props
    },
    ref
  ) => {
    const [charCount, setCharCount] = useState(
      value ? String(value).length : 0
    )
    const textareaId = props.id || props.name

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className={cn('label-base', required && 'label-required')}
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={cn('input-base resize-y', error && 'input-error', className)}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helpText
              ? `${textareaId}-help`
              : undefined
          }
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          onChange={(e) => {
            setCharCount(e.target.value.length)
            props.onChange?.(e)
          }}
          {...props}
        />

        <div className="flex items-center justify-between mt-1">
          <div className="flex-1">
            {error && (
              <p
                id={`${textareaId}-error`}
                className="error-message"
                role="alert"
              >
                {error}
              </p>
            )}

            {helpText && !error && (
              <p id={`${textareaId}-help`} className="text-sm text-gray-500">
                {helpText}
              </p>
            )}
          </div>

          {showCharCount && maxLength && (
            <p className="text-sm text-gray-500">
              {charCount}/{maxLength}
            </p>
          )}
        </div>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea

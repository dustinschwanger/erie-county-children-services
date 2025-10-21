import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  clickable?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      padding = 'md',
      clickable = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-xl bg-white transition-all'

    const variants = {
      default: 'shadow-md',
      elevated: 'shadow-lg hover:shadow-xl',
      outlined: 'border-2 border-gray-200',
    }

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          clickable && 'cursor-pointer hover:scale-[1.02]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card

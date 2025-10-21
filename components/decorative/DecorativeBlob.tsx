interface DecorativeBlobProps {
  color: 'blue' | 'purple' | 'orange' | 'green'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animate?: boolean
}

export default function DecorativeBlob({
  color,
  size = 'md',
  className = '',
  animate = true,
}: DecorativeBlobProps) {
  const colors = {
    blue: 'bg-primary-blue/10',
    purple: 'bg-accent-purple/10',
    orange: 'bg-accent-orange/10',
    green: 'bg-primary-green/10',
  }

  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-96 h-96',
  }

  return (
    <div
      className={`${colors[color]} ${sizes[size]} ${
        animate ? 'blob' : ''
      } ${className}`}
      aria-hidden="true"
    />
  )
}

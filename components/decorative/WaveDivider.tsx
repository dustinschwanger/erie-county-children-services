interface WaveDividerProps {
  color?: 'white' | 'gray' | 'blue' | 'warm' | 'dark'
  flip?: boolean
  className?: string
}

export default function WaveDivider({
  color = 'white',
  flip = false,
  className = '',
}: WaveDividerProps) {
  const colors = {
    white: '#ffffff',
    gray: '#f9fafb',
    blue: '#2563eb',
    warm: '#fef3c7',
    dark: '#111827', // gray-900 for footer
  }

  const fillColor = colors[color]

  return (
    <div
      className={`relative w-full ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 lg:h-20"
      >
        <path
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          fill={fillColor}
        />
      </svg>
    </div>
  )
}

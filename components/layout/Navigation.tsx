'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'How to Help', href: '/how-to-help' },
  { label: 'Report Abuse', href: '/report-abuse' },
  { label: 'Resources', href: '/resources' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

interface NavigationProps {
  className?: string
}

export default function Navigation({ className }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={cn('flex items-center gap-2', className)} aria-label="Main navigation">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'relative px-5 py-2.5 rounded-lg font-semibold text-base transition-all duration-200 group',
              isActive
                ? 'bg-gradient-to-r from-primary-blue to-primary-blue-light text-white shadow-md'
                : 'text-gray-700 hover:text-primary-blue hover:bg-blue-50'
            )}
          >
            {item.label}
            {/* Underline effect on hover */}
            {!isActive && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-blue transition-all duration-200 group-hover:w-3/4"></span>
            )}
          </Link>
        )
      })}
    </nav>
  )
}

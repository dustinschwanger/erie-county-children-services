'use client'

import { useEffect } from 'react'
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

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed top-[120px] left-0 right-0 bottom-0 bg-white z-50 lg:hidden overflow-y-auto">
        <nav className="container-custom py-6" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg font-medium transition-colors',
                      isActive
                        ? 'bg-primary-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile Quick Actions */}
          <div className="mt-8 space-y-3">
            <Link
              href="/report-abuse"
              className="block w-full px-4 py-3 text-center bg-accent-orange text-white rounded-lg font-semibold hover:bg-accent-orange-dark transition-colors"
            >
              Report Abuse or Neglect
            </Link>
            <Link
              href="/foster-adoption"
              className="block w-full px-4 py-3 text-center bg-accent-purple text-white rounded-lg font-semibold hover:bg-accent-purple-dark transition-colors"
            >
              Become a Foster Parent
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

import Link from 'next/link'
import { EMERGENCY_BANNER } from '@/lib/constants'
import { formatPhoneForLink } from '@/lib/utils'

export default function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-accent-orange to-accent-orange-light text-white">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-2 py-2 text-sm sm:text-base font-semibold">
          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{EMERGENCY_BANNER.text}</span>
          <Link
            href={`tel:${formatPhoneForLink(EMERGENCY_BANNER.phoneLink)}`}
            className="underline hover:no-underline font-bold"
          >
            {EMERGENCY_BANNER.phone}
          </Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { CONTACT, MISSION_STATEMENT } from '@/lib/constants'
import { formatPhoneNumber, formatPhoneForLink } from '@/lib/utils'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold font-display text-lg mb-4">
              Erie County Children Services
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              {MISSION_STATEMENT}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/report-abuse" className="hover:text-white transition-colors">
                  Report Abuse/Neglect
                </Link>
              </li>
              <li>
                <Link href="/foster-adoption" className="hover:text-white transition-colors">
                  Become a Foster Parent
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p className="font-semibold text-white">
                24/7 Hotline:{' '}
                <Link
                  href={`tel:${formatPhoneForLink(CONTACT.EMERGENCY_HOTLINE)}`}
                  className="hover:text-accent-orange transition-colors"
                >
                  {CONTACT.EMERGENCY_HOTLINE_DISPLAY}
                </Link>
              </p>
              <p>
                Main Office:{' '}
                <Link
                  href={`tel:${formatPhoneForLink(CONTACT.MAIN_PHONE)}`}
                  className="hover:text-white transition-colors"
                >
                  {formatPhoneNumber(CONTACT.MAIN_PHONE)}
                </Link>
              </p>
              <p>
                {CONTACT.ADDRESS.street}
                <br />
                {CONTACT.ADDRESS.city}, {CONTACT.ADDRESS.state} {CONTACT.ADDRESS.zip}
              </p>
              <p className="pt-2">{CONTACT.OFFICE_HOURS.weekdays}</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {currentYear} Erie County Children Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

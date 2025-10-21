/**
 * Site-wide constants for Erie County Children Services
 */

// Contact Information
export const CONTACT = {
  EMERGENCY_HOTLINE: '419-626-5437',
  EMERGENCY_HOTLINE_DISPLAY: '419-626-KIDS',
  MAIN_PHONE: '419-626-6781',
  ADDRESS: {
    street: '221 W Perkins St',
    city: 'Sandusky',
    state: 'OH',
    zip: '44870',
  },
  EMAIL: 'info@eriecountychildrenservices.org', // Update with actual email
  OFFICE_HOURS: {
    weekdays: 'Monday - Friday: 8:00 AM - 4:30 PM',
    weekend: 'Closed Saturday & Sunday',
    holidays: 'Closed on major holidays',
  },
} as const

// Navigation Items
export const NAV_ITEMS = [
  { label: 'How to Help', href: '/how-to-help' },
  {
    label: 'Abuse & Neglect',
    href: '/report-abuse',
    megaMenu: [
      { label: 'Report Child Abuse', href: '/report-abuse/child' },
      { label: 'Report Elder Abuse', href: '/report-abuse/elder' },
      { label: 'What Happens Next', href: '/report-abuse/process' },
      { label: 'Mandated Reporter Resources', href: '/resources/mandated-reporters' },
    ]
  },
  { href: '/resources' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
] as const

// Social Media Links (update with actual links if available)
export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/eriecountychildrenservices',
  twitter: 'https://twitter.com/eriecountycs',
  // Add others as needed
} as const

// Site URLs
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

// Emergency Banner
export const EMERGENCY_BANNER = {
  text: '24/7 Abuse & Neglect Hotline:',
  phone: CONTACT.EMERGENCY_HOTLINE_DISPLAY,
  phoneLink: CONTACT.EMERGENCY_HOTLINE,
} as const

// Mission Statement
export const MISSION_STATEMENT =
  'To serve as a first responder to reported allegations of child abuse & neglect, to investigate such reports in a timely manner and to provide appropriate protective services to children who are found to be abused and neglected in accordance with legal mandates.'

// Service Units
export const SERVICES = [
  {
    id: 'intake-investigation',
    title: 'Intake & Investigation',
    icon: 'shield',
    description: '24/7 hotline for reporting abuse and neglect, with prompt investigation and assessment.',
    href: '/services#intake',
  },
  {
    id: 'family-support',
    title: 'Family Support Services',
    icon: 'users',
    description: 'In-home services, parenting education, and resources to strengthen families.',
    href: '/services#family-support',
  },
  {
    id: 'foster-adoption',
    title: 'Foster Care & Adoption',
    icon: 'home',
    description: 'Recruitment, training, and support for foster and adoptive families.',
    href: '/foster-adoption',
  },
  {
    id: 'ongoing-services',
    title: 'Ongoing Case Management',
    icon: 'clipboard',
    description: 'Continued support and services for families working toward reunification.',
    href: '/services#ongoing',
  },
] as const

// Quick Links by Audience
export const QUICK_LINKS = {
  families: [
    { label: 'Child Care Information', href: '/resources/child-care' },
    { label: 'Financial Assistance', href: '/resources/financial-assistance' },
    { label: 'Parenting Resources', href: '/resources/parenting' },
    { label: 'Community Support', href: '/resources/community' },
  ],
  fosterParents: [
    { label: 'Foster Parent Requirements', href: '/foster-adoption/requirements' },
    { label: 'Training & Support', href: '/foster-adoption/training' },
    { label: 'Forms & Documents', href: '/resources/foster-forms' },
    { label: 'Foster Parent Portal', href: '/resources/portal' },
  ],
  mandatedReporters: [
    { label: 'Reporting Guidelines', href: '/resources/reporting-guidelines' },
    { label: 'Training Materials', href: '/resources/training' },
    { label: 'Legal Requirements', href: '/resources/legal' },
    { label: 'Quick Reference Guide', href: '/resources/quick-reference' },
  ],
  communityPartners: [
    { label: 'Community Resource Guide', href: '/resources/community-guide' },
    { label: 'Request a Speaker', href: '/contact/speaker' },
    { label: 'Collaboration Opportunities', href: '/about/partnerships' },
    { label: 'Resource Directory', href: '/resources/directory' },
  ],
} as const

// Form Subjects for Contact Form
export const CONTACT_SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'services', label: 'Question About Services' },
  { value: 'foster', label: 'Foster/Adoption Information' },
  { value: 'resources', label: 'Resources Question' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'other', label: 'Other' },
] as const

// Abuse Types for Reporting Forms
export const ABUSE_TYPES = {
  child: [
    { value: 'physical', label: 'Physical Abuse' },
    { value: 'neglect', label: 'Neglect' },
    { value: 'sexual', label: 'Sexual Abuse' },
    { value: 'emotional', label: 'Emotional Abuse' },
  ],
  elder: [
    { value: 'physical', label: 'Physical Abuse' },
    { value: 'neglect', label: 'Neglect' },
    { value: 'self-neglect', label: 'Self-Neglect' },
    { value: 'exploitation', label: 'Financial Exploitation' },
    { value: 'emotional', label: 'Emotional Abuse' },
  ],
} as const

import { z } from 'zod'

// Contact Form Schema
export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Child Abuse Report Form Schema
export const childAbuseReportSchema = z.object({
  // Reporter Contact Information (Optional)
  reporterFullName: z.string().optional(),
  reporterEmail: z.string().email('Invalid email address').optional().or(z.literal('')),
  reporterPhone: z.string().optional(),
  reporterAddress: z.string().optional(),
  reporterCity: z.string().optional(),
  reporterState: z.string().optional(),

  // Information on the family
  victimName: z.string().min(1, 'Victim name is required'),
  victimDOB: z.string().optional(),
  familyAddress: z.string().min(1, 'Family address is required'),
  familyPhone: z.string().optional(),
  isBioParentFamily: z.enum(['yes', 'no', '']).optional(),

  // Members of family
  familyMember1: z.string().optional(),
  familyMember2: z.string().optional(),
  familyMember3: z.string().optional(),
  familyMember4: z.string().optional(),

  // Additional information
  moreChildrenInfo: z.string().optional(),
  previousReport: z.enum(['yes', 'no', '']).optional(),
  relationshipToFamily: z.string().optional(),

  // Concern details
  hasPersonalKnowledge: z.enum(['yes', 'no', '']).optional(),
  reportingSubstanceAbuse: z.enum(['yes', 'no', '']).optional(),

  // Narratives (Required)
  narrative: z.string().min(50, 'Please provide a detailed description (minimum 50 characters)'),
  injuriesDetails: z.string().optional(),
})

export type ChildAbuseReportData = z.infer<typeof childAbuseReportSchema>

// Elder Abuse Report Form Schema
export const elderAbuseReportSchema = z.object({
  // Concern type (Required)
  concernType: z.enum(['physical', 'neglect', 'self-neglect', 'exploitation'], {
    errorMap: () => ({ message: 'Please select a concern type' }),
  }),

  // Information on alleged victim
  victimFullName: z.string().min(1, 'Victim name is required'),
  victimDOB: z.string().optional(),
  victimAge: z.string().optional(),
  victimAddress: z.string().min(1, 'Address is required'),
  victimPhone: z.string().optional(),
  victimCounty: z.string().optional(),
  victimGender: z.string().optional(),

  // Concern details (Required)
  concernDetails: z.string().min(50, 'Please provide detailed information (minimum 50 characters)'),

  // Additional information
  neglectDetails: z.string().optional(),
  substanceAbuseInfo: z.string().optional(),

  // Alleged perpetrator
  perpetratorName: z.string().optional(),
  perpetratorAddress: z.string().optional(),
  perpetratorRelationship: z.array(z.string()).optional(),

  // Victim has
  victimHas: z.array(z.string()).optional(),
  poaHolder: z.string().optional(),
  othersInHome: z.string().optional(),
  communityServices: z.string().optional(),

  // Reporter Information (Optional but encouraged)
  reporterName: z.string().optional(),
  reporterAddress: z.string().optional(),
  reporterPhone: z.string().optional(),
  reportedBefore: z.enum(['yes', 'no', '']).optional(),
})

export type ElderAbuseReportData = z.infer<typeof elderAbuseReportSchema>

// Foster Care Interest Form Schema
export const fosterInterestFormSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  address: z.string().optional(),
  interestedIn: z.enum(['foster', 'adopt', 'both'], {
    errorMap: () => ({ message: 'Please select your interest' }),
  }),
  livingSituation: z.string().optional(),
  hasChildren: z.enum(['yes', 'no']).optional(),
  numberOfChildren: z.string().optional(),
  message: z.string().optional(),
  preferredContact: z.enum(['email', 'phone']).optional(),
  bestTimeToContact: z.string().optional(),
})

export type FosterInterestFormData = z.infer<typeof fosterInterestFormSchema>

// Speaker Request Form Schema
export const speakerRequestFormSchema = z.object({
  organizationName: z.string().min(2, 'Organization name is required'),
  contactName: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  eventDate: z.string().min(1, 'Event date is required'),
  eventType: z.string().min(1, 'Event type is required'),
  expectedAttendance: z.string().optional(),
  topicOfInterest: z.string().min(1, 'Topic is required'),
  additionalDetails: z.string().optional(),
})

export type SpeakerRequestFormData = z.infer<typeof speakerRequestFormSchema>

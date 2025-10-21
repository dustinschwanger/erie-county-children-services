'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import RadioGroup from '@/components/ui/RadioGroup'
import Alert from '@/components/ui/Alert'
import { fosterInterestFormSchema, FosterInterestFormData } from '@/lib/validations'

export default function FosterInterestFormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FosterInterestFormData>({
    resolver: zodResolver(fosterInterestFormSchema),
  })

  const interestedIn = watch('interestedIn')
  const hasChildren = watch('hasChildren')
  const preferredContact = watch('preferredContact')

  const onSubmit = async (data: FosterInterestFormData) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'foster-interest',
          data,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit form')
      }

      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred. Please try again or call us at 419-627-4484.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success Screen
  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-primary-green/5 to-white py-12">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center">
              <div className="w-20 h-20 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary-green" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Thank You for Your Interest!
              </h1>

              <p className="text-lg text-gray-700 mb-8">
                We&apos;ve received your information and a member of our foster care team will contact you soon
                to discuss the next steps.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
                <ul className="space-y-3 text-left">
                  {[
                    'Our foster care specialist will review your information',
                    'You will receive a call or email within 2-3 business days',
                    'We will answer your questions and discuss requirements',
                    'If ready to proceed, we will schedule an orientation session',
                    'You will begin the training and home study process',
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Alert type="info" className="mb-6">
                <p className="font-semibold mb-1">Questions in the meantime?</p>
                <p>
                  Call our foster care specialist at{' '}
                  <a href="tel:419-627-4484" className="font-bold hover:underline">
                    419-627-4484
                  </a>
                </p>
              </Alert>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/foster-adoption">
                  <Button variant="outline" icon={<ArrowLeft className="w-5 h-5" />}>
                    Back to Foster & Adoption
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="primary">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
    )
  }

  // Form Screen
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-green/5 to-white py-12">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/foster-adoption">
              <Button variant="ghost" icon={<ArrowLeft className="w-5 h-5" />} className="mb-6">
                Back to Foster & Adoption
              </Button>
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-primary-green flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Express Your Interest</h1>
                <p className="text-gray-600 mt-1">Let us know you&apos;re interested in fostering or adoption</p>
              </div>
            </div>

            <Alert type="info">
              <p>
                <strong>Need immediate assistance?</strong> Call our foster care specialist at{' '}
                <a href="tel:419-627-4484" className="font-bold hover:underline">
                  419-627-4484
                </a>
              </p>
            </Alert>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form - 2 columns */}
            <div className="lg:col-span-2">
              <Card>
                {submitError && (
                  <Alert type="error" dismissible onDismiss={() => setSubmitError('')} className="mb-6">
                    {submitError}
                  </Alert>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Contact Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        {...register('fullName')}
                        error={errors.fullName?.message}
                        required
                        placeholder="John Doe"
                      />

                      <Input
                        label="Email Address"
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                        required
                        placeholder="john@example.com"
                      />

                      <Input
                        label="Phone Number"
                        type="tel"
                        {...register('phone')}
                        error={errors.phone?.message}
                        required
                        placeholder="(419) 555-0123"
                      />

                      <Input
                        label="Address (Optional)"
                        {...register('address')}
                        error={errors.address?.message}
                        placeholder="123 Main St, Sandusky, OH"
                      />
                    </div>
                  </div>

                  {/* Interest Type */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Interest</h2>

                    <RadioGroup
                      label="I am interested in"
                      name="interestedIn"
                      options={[
                        { value: 'foster', label: 'Foster Care' },
                        { value: 'adopt', label: 'Adoption' },
                        { value: 'both', label: 'Both Foster Care and Adoption' },
                      ]}
                      value={interestedIn}
                      onChange={(value) => setValue('interestedIn', value as 'foster' | 'adopt' | 'both')}
                      error={errors.interestedIn?.message}
                      required
                    />
                  </div>

                  {/* Living Situation */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Your Home</h2>

                    <div className="space-y-6">
                      <Select
                        label="Current Living Situation"
                        {...register('livingSituation')}
                        error={errors.livingSituation?.message}
                        placeholder="Select your living situation"
                        options={[
                          { value: 'own-house', label: 'Own a House' },
                          { value: 'rent-house', label: 'Rent a House' },
                          { value: 'own-apartment', label: 'Own an Apartment/Condo' },
                          { value: 'rent-apartment', label: 'Rent an Apartment' },
                          { value: 'other', label: 'Other' },
                        ]}
                      />

                      <RadioGroup
                        label="Do you currently have children in your home?"
                        name="hasChildren"
                        options={[
                          { value: 'yes', label: 'Yes' },
                          { value: 'no', label: 'No' },
                        ]}
                        value={hasChildren}
                        onChange={(value) => setValue('hasChildren', value as 'yes' | 'no')}
                        error={errors.hasChildren?.message}
                      />

                      {hasChildren === 'yes' && (
                        <Input
                          label="How many children?"
                          type="number"
                          {...register('numberOfChildren')}
                          error={errors.numberOfChildren?.message}
                          placeholder="e.g., 2"
                        />
                      )}
                    </div>
                  </div>

                  {/* Contact Preferences */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Preferences</h2>

                    <div className="space-y-6">
                      <RadioGroup
                        label="Preferred Contact Method"
                        name="preferredContact"
                        options={[
                          { value: 'email', label: 'Email' },
                          { value: 'phone', label: 'Phone Call' },
                        ]}
                        value={preferredContact}
                        onChange={(value) => setValue('preferredContact', value as 'email' | 'phone')}
                        error={errors.preferredContact?.message}
                      />

                      <Input
                        label="Best Time to Contact"
                        {...register('bestTimeToContact')}
                        error={errors.bestTimeToContact?.message}
                        placeholder="e.g., Weekday mornings, evenings after 6pm"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Information</h2>

                    <Textarea
                      label="Questions or Comments (Optional)"
                      {...register('message')}
                      error={errors.message?.message}
                      placeholder="Tell us about your interests, questions, or any additional information you'd like to share..."
                      rows={5}
                      maxLength={1000}
                      showCharCount
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-6 border-t border-gray-200">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Heart className="w-5 h-5" />}
                      className="flex-1"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit My Interest'}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="bg-primary-green text-white sticky top-24">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-5 h-5" />
                      <span className="font-semibold">Call Us</span>
                    </div>
                    <a href="tel:419-627-4484" className="text-green-100 hover:text-white hover:underline block">
                      419-627-4484
                    </a>
                    <p className="text-sm text-green-100 mt-1">Monday - Friday, 8:00 AM - 5:00 PM</p>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-5 h-5" />
                      <span className="font-semibold">Email Us</span>
                    </div>
                    <a
                      href="mailto:info@eriecountychildren.org"
                      className="text-green-100 hover:text-white hover:underline block text-sm break-all"
                    >
                      info@eriecountychildren.org
                    </a>
                  </div>
                </div>
              </Card>

              {/* Info Card */}
              <Card className="bg-gradient-to-br from-blue-50 to-green-50">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What to Expect</h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  {[
                    'We will contact you within 2-3 business days',
                    'Initial conversation about your interests and questions',
                    'Overview of the foster/adoption process',
                    'Information about training requirements',
                    'Next steps and timeline discussion',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

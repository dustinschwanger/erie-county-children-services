'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { childAbuseReportSchema, type ChildAbuseReportData } from '@/lib/validations'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import RadioGroup from '@/components/ui/RadioGroup'
import Alert from '@/components/ui/Alert'

export default function ChildAbuseReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ChildAbuseReportData>({
    resolver: zodResolver(childAbuseReportSchema),
  })

  const onSubmit = async (data: ChildAbuseReportData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'child-abuse-report', data }),
      })

      if (!response.ok) throw new Error('Submission failed')

      setSubmitStatus('success')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom max-w-3xl">
          <Card padding="lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold font-display text-gray-900 mb-4">
                Thank You for Your Report
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Your report has been received and will be reviewed by our team. We take all reports seriously
                and will investigate according to Ohio law.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
                <h2 className="font-bold text-gray-900 mb-2">What Happens Next</h2>
                <ul className="text-left text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Our intake team will review your report within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    An investigation will be initiated if warranted
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    The family will receive appropriate services and support
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Your report will remain confidential to the extent allowed by law
                  </li>
                </ul>
              </div>
              <Link href="/">
                <Button variant="primary" size="lg">
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card padding="lg">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                  Report Child Abuse and Neglect – Erie County, Ohio
                </h1>
                <p className="text-gray-600">
                  We have a 24-hour hotline at <strong className="text-accent-orange">419-626-KIDS</strong> (419-626-5437),
                  you can contact the Erie County Sheriff's Department at <strong>419-625-7951</strong>, or you can fill out
                  the form on this page to submit. This information is protected by law, however it must not be kept from
                  us for any reason.
                </p>
              </div>

              {submitStatus === 'error' && (
                <Alert
                  type="error"
                  message="Something went wrong. Please try again or call 419-626-KIDS."
                  dismissible
                  onDismiss={() => setSubmitStatus('idle')}
                  className="mb-6"
                />
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Reporter Contact Information */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Reporter Contact Information</h2>
                  <p className="text-sm text-gray-600 mb-4">This information is optional</p>
                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      type="text"
                      {...register('reporterFullName')}
                      error={errors.reporterFullName?.message}
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      {...register('reporterEmail')}
                      error={errors.reporterEmail?.message}
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      {...register('reporterPhone')}
                      error={errors.reporterPhone?.message}
                    />
                    <Input
                      label="Address"
                      type="text"
                      {...register('reporterAddress')}
                      error={errors.reporterAddress?.message}
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="City"
                        type="text"
                        {...register('reporterCity')}
                        error={errors.reporterCity?.message}
                      />
                      <Input
                        label="State"
                        type="text"
                        {...register('reporterState')}
                        error={errors.reporterState?.message}
                      />
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* Information on the family */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Information on the family you are concerned about
                  </h2>
                  <div className="space-y-4">
                    <Input
                      label="Name of victim (child/adolescent you concerned about)"
                      type="text"
                      required
                      {...register('victimName')}
                      error={errors.victimName?.message}
                    />
                    <Input
                      label="Date of Birth"
                      type="text"
                      placeholder="MM/DD/YYYY"
                      {...register('victimDOB')}
                      error={errors.victimDOB?.message}
                    />
                    <Input
                      label="Address of family"
                      type="text"
                      required
                      {...register('familyAddress')}
                      error={errors.familyAddress?.message}
                    />
                    <Input
                      label="Phone number for the family"
                      type="tel"
                      {...register('familyPhone')}
                      error={errors.familyPhone?.message}
                    />
                    <RadioGroup
                      label="Is this a bio parent family?"
                      name="isBioParentFamily"
                      options={[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' },
                      ]}
                      value={watch('isBioParentFamily')}
                      onChange={(value) => setValue('isBioParentFamily', value as any)}
                      error={errors.isBioParentFamily?.message}
                    />
                  </div>
                </div>

                {/* Family Members */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Name/age of all members of other</h3>
                  <div className="space-y-3">
                    <Input
                      label="Name/age child 1"
                      type="text"
                      {...register('familyMember1')}
                      error={errors.familyMember1?.message}
                    />
                    <Input
                      label="Name/age child 2"
                      type="text"
                      {...register('familyMember2')}
                      error={errors.familyMember2?.message}
                    />
                    <Input
                      label="Name/age child 3"
                      type="text"
                      {...register('familyMember3')}
                      error={errors.familyMember3?.message}
                    />
                    <Input
                      label="Name/age child 4"
                      type="text"
                      {...register('familyMember4')}
                      error={errors.familyMember4?.message}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    If more than four children, please provide that information in the narrative section
                  </p>
                </div>

                <hr className="border-gray-200" />

                {/* Additional Questions */}
                <div className="space-y-6">
                  <RadioGroup
                    label="Have you ever made a report to us in the past?"
                    name="previousReport"
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                    ]}
                    value={watch('previousReport')}
                    onChange={(value) => setValue('previousReport', value as any)}
                    error={errors.previousReport?.message}
                  />

                  <Input
                    label="What is your relationship to this family?"
                    type="text"
                    {...register('relationshipToFamily')}
                    error={errors.relationshipToFamily?.message}
                  />

                  <RadioGroup
                    label="Do you have personal knowledge of the things you are reporting?"
                    name="hasPersonalKnowledge"
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                    ]}
                    value={watch('hasPersonalKnowledge')}
                    onChange={(value) => setValue('hasPersonalKnowledge', value as any)}
                    error={errors.hasPersonalKnowledge?.message}
                  />

                  <RadioGroup
                    label="Are you reporting substance abuse?"
                    name="reportingSubstanceAbuse"
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                    ]}
                    value={watch('reportingSubstanceAbuse')}
                    onChange={(value) => setValue('reportingSubstanceAbuse', value as any)}
                    error={errors.reportingSubstanceAbuse?.message}
                  />
                </div>

                <hr className="border-gray-200" />

                {/* Narrative */}
                <div>
                  <Textarea
                    label="Please provide as much information as you can in the space below"
                    required
                    rows={8}
                    maxLength={5000}
                    showCharCount
                    helpText="If you include a much information as you can with regard to the subject of the incident and the location, please enter that information in as much detail as you can, such the address on the event on that date, what events or injuries that resulted from that, who was involved in the event, and what time, if it's known."
                    {...register('narrative')}
                    error={errors.narrative?.message}
                  />
                </div>

                <div>
                  <Textarea
                    label="If there are injuries received and location on the person, please answer the following questions as much as possible and let us know when it occurred. If unknown, please answer the questions when you can."
                    rows={8}
                    maxLength={5000}
                    showCharCount
                    {...register('injuriesDetails')}
                    error={errors.injuriesDetails?.message}
                  />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    variant="danger"
                    size="lg"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Report...' : 'Submit Report'}
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card padding="lg" className="bg-primary-blue text-white">
                <h3 className="text-xl font-bold mb-4">How do I report child abuse and neglect?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You can call 419-626-KIDS (419-626-5437)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Fill out this online form and we will get back to you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You can contact the Erie County Sheriff's Department</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>You can reach out to any member of law enforcement or community service or hospital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>All of us are required to report child abuse and neglect immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Any other information which would help locate or identify the victim</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm italic">
                    "Report all Child abuse & neglect or need of protective services to the 24 hour number at the top of the
                    page as well as call the Ohio State abuse and neglect hotline at 855-OH-CHILD (855-642-4453).
                    However you may report it to any of the other agencies at the bottom of the page."
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

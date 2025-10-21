'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { elderAbuseReportSchema, type ElderAbuseReportData } from '@/lib/validations'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import RadioGroup from '@/components/ui/RadioGroup'
import CheckboxGroup from '@/components/ui/CheckboxGroup'
import Alert from '@/components/ui/Alert'

export default function ElderAbuseReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ElderAbuseReportData>({
    resolver: zodResolver(elderAbuseReportSchema),
  })

  const onSubmit = async (data: ElderAbuseReportData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'elder-abuse-report', data }),
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
                Your report has been received and will be reviewed by our team. We take all reports of elder abuse seriously.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
                <h2 className="font-bold text-gray-900 mb-2">What Happens Next</h2>
                <ul className="text-left text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Our team will review your report promptly
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    An investigation will be conducted if appropriate
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Appropriate services and support will be provided
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Your information remains confidential
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
                  Report Elder Abuse and Neglect
                </h1>
                <p className="text-gray-600">
                  If you believe that an adult age 60 or older has suffered abuse, neglect or exploitation, you may file
                  a report with Erie County Department of Job & Family Services at <strong className="text-accent-orange">419-626-6781</strong> or{' '}
                  <strong className="text-accent-orange">419-627-6180</strong>.
                </p>
              </div>

              {submitStatus === 'error' && (
                <Alert
                  type="error"
                  message="Something went wrong. Please try again or call 419-626-6781."
                  dismissible
                  onDismiss={() => setSubmitStatus('idle')}
                  className="mb-6"
                />
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Concern Type */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Information on alleged victim:</h2>
                  <RadioGroup
                    label="Concern of"
                    name="concernType"
                    required
                    options={[
                      { value: 'physical', label: 'Physical abuse' },
                      { value: 'neglect', label: 'Neglect by others' },
                      { value: 'self-neglect', label: 'Self-neglect' },
                      { value: 'exploitation', label: 'Exploitation' },
                    ]}
                    value={watch('concernType')}
                    onChange={(value) => setValue('concernType', value as any)}
                    error={errors.concernType?.message}
                  />
                </div>

                {/* Victim Information */}
                <div className="space-y-4">
                  <Input
                    label="Full Name"
                    type="text"
                    required
                    {...register('victimFullName')}
                    error={errors.victimFullName?.message}
                  />
                  <Input
                    label="Date of Birth"
                    type="text"
                    placeholder="MM/DD/YYYY"
                    {...register('victimDOB')}
                    error={errors.victimDOB?.message}
                  />
                  <Input
                    label="Approximate Age"
                    type="text"
                    {...register('victimAge')}
                    error={errors.victimAge?.message}
                  />
                  <Input
                    label="Address"
                    type="text"
                    required
                    {...register('victimAddress')}
                    error={errors.victimAddress?.message}
                  />
                  <Input
                    label="Phone"
                    type="tel"
                    {...register('victimPhone')}
                    error={errors.victimPhone?.message}
                  />
                  <Input
                    label="County of residence"
                    type="text"
                    {...register('victimCounty')}
                    error={errors.victimCounty?.message}
                  />
                  <Input
                    label="Gender"
                    type="text"
                    {...register('victimGender')}
                    error={errors.victimGender?.message}
                  />
                </div>

                <hr className="border-gray-200" />

                {/* Concern Details */}
                <div>
                  <Textarea
                    label="What is the concern – please be specific"
                    required
                    rows={6}
                    maxLength={5000}
                    showCharCount
                    {...register('concernDetails')}
                    error={errors.concernDetails?.message}
                  />
                </div>

                <div>
                  <Textarea
                    label="If you are concerned about neglect or self-neglect, please provide additional details on injuries received and location on the person"
                    rows={6}
                    maxLength={5000}
                    showCharCount
                    {...register('neglectDetails')}
                    error={errors.neglectDetails?.message}
                  />
                </div>

                <div>
                  <Textarea
                    label="Are you aware of any substance abuse concerns for the adult you are reporting on:"
                    rows={4}
                    maxLength={2000}
                    showCharCount
                    {...register('substanceAbuseInfo')}
                    error={errors.substanceAbuseInfo?.message}
                  />
                </div>

                <hr className="border-gray-200" />

                {/* Alleged Perpetrator */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Who is the alleged perpetrator (who do you think is responsible for causing your concern for the adult):
                  </h2>
                  <div className="space-y-4">
                    <Input
                      label="Name"
                      type="text"
                      {...register('perpetratorName')}
                      error={errors.perpetratorName?.message}
                    />
                    <Input
                      label="Address"
                      type="text"
                      {...register('perpetratorAddress')}
                      error={errors.perpetratorAddress?.message}
                    />
                    <CheckboxGroup
                      label="Is the alleged perpetrator:"
                      name="perpetratorRelationship"
                      options={[
                        { value: 'related', label: 'Related to the victim' },
                        { value: 'caregiver', label: 'A caregiver for the victim' },
                        { value: 'unknown-victim', label: 'Unknown to the victim' },
                        { value: 'unknown', label: 'Unknown' },
                      ]}
                      value={watch('perpetratorRelationship') || []}
                      onChange={(values) => setValue('perpetratorRelationship', values)}
                      error={errors.perpetratorRelationship?.message}
                    />
                    <CheckboxGroup
                      label="Does the victim have any of the following (check all that apply):"
                      name="victimHas"
                      options={[
                        { value: 'guardian', label: 'A Guardian' },
                        { value: 'poa', label: 'POA' },
                      ]}
                      value={watch('victimHas') || []}
                      onChange={(values) => setValue('victimHas', values)}
                      error={errors.victimHas?.message}
                    />
                    <Input
                      label="If so, who holds the POA?"
                      type="text"
                      {...register('poaHolder')}
                      error={errors.poaHolder?.message}
                    />
                    <Input
                      label="List all others in the home: Name and relationship"
                      type="text"
                      {...register('othersInHome')}
                      error={errors.othersInHome?.message}
                    />
                    <Input
                      label="Are there any community services providers in the home:"
                      type="text"
                      {...register('communityServices')}
                      error={errors.communityServices?.message}
                    />
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* Reporter Information */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Reporter Information:</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Please understand your information is strictly confidential. By completing the information about yourself,
                    we would be able to contact you to verify with any clarifying questions that may come up in order to determine
                    the appropriate course of action
                  </p>
                  <div className="space-y-4">
                    <Input
                      label="Name"
                      type="text"
                      {...register('reporterName')}
                      error={errors.reporterName?.message}
                    />
                    <Input
                      label="Contact Address"
                      type="text"
                      {...register('reporterAddress')}
                      error={errors.reporterAddress?.message}
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      {...register('reporterPhone')}
                      error={errors.reporterPhone?.message}
                    />
                    <RadioGroup
                      label="Have you reported on this individual before?"
                      name="reportedBefore"
                      options={[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' },
                      ]}
                      value={watch('reportedBefore')}
                      onChange={(value) => setValue('reportedBefore', value as any)}
                      error={errors.reportedBefore?.message}
                    />
                  </div>
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
              <Card padding="lg" className="bg-accent-purple text-white">
                <h3 className="text-xl font-bold mb-4">What types of things are considered abuse?</h3>
                <div className="space-y-4 text-sm">
                  <p className="font-semibold">The most common types of elder abuse reported in Ohio are:</p>
                  <p>
                    Neglect, self-neglect, exploitation, and emotional. Physical and sexual abuse also are causes:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        <strong>Neglect</strong> is the failure of an individual to provide for him or her the goods or
                        services necessary for his or her own safety and/or well-being.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        <strong>Exploitation</strong> is the unlawful and/or improper act of a caretaker using an adult or
                        her/his resources for monetary or personal gain, profit or other advantage.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        <strong>Emotional abuse</strong> is inflicting mental or emotional anguish or causing the intentional
                        use of physical force that results in injury, pain or mental anguish and/or that requires medical
                        attention and/or that includes sexual activity or contact.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>
                        <strong>Sexual abuse</strong> includes rape or other unwanted, nonconsensual sexual contact.
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

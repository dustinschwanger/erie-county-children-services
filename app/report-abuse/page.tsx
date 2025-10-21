import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export const metadata = {
  title: 'Report Abuse or Neglect | Erie County Children Services',
  description: 'Report suspected child or elder abuse or neglect. All reports are confidential. 24/7 hotline: 419-626-KIDS.',
}

export default function ReportAbusePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-mesh py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="error" size="md" className="mb-6">
              Confidential & Available 24/7
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6">
              Report Abuse or Neglect
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your report can save a life. All reports are confidential and taken seriously.
              If this is an emergency, call <span className="font-bold text-accent-orange">911</span> immediately.
            </p>

            <div className="inline-flex items-center gap-4 bg-accent-orange/10 border-2 border-accent-orange/30 rounded-xl px-6 py-4 mb-12">
              <svg className="w-8 h-8 text-accent-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-left">
                <div className="text-sm text-gray-600 font-medium">24/7 Hotline</div>
                <Link href="tel:4196265437" className="text-2xl font-bold text-accent-orange hover:text-accent-orange-dark transition-colors">
                  419-626-KIDS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Report Type */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              What Type of Abuse Are You Reporting?
            </h2>
            <p className="text-lg text-gray-600">
              Select the appropriate form below
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Child Abuse Card */}
            <Link href="/report-abuse/child" className="group">
              <Card
                variant="elevated"
                padding="lg"
                className="h-full card-3d bg-gradient-to-br from-blue-50/50 to-white border-2 border-primary-blue/20 hover:border-primary-blue/40"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Report Child Abuse or Neglect
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    If you suspect a child is being abused, neglected, or is in danger,
                    please report it immediately. You can help protect a child's safety.
                  </p>

                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-lg group-hover:gap-4 transition-all">
                      File Child Abuse Report
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Elder Abuse Card */}
            <Link href="/report-abuse/elder" className="group">
              <Card
                variant="elevated"
                padding="lg"
                className="h-full card-3d bg-gradient-to-br from-purple-50/50 to-white border-2 border-accent-purple/20 hover:border-accent-purple/40"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Report Elder Abuse or Neglect
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    If you believe an adult age 60 or older is being abused, neglected,
                    or exploited, please file a report. Help protect vulnerable seniors.
                  </p>

                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-accent-purple font-semibold text-lg group-hover:gap-4 transition-all">
                      File Elder Abuse Report
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
              What Happens After You Report
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Your Report is Received',
                  description: 'Our 24/7 hotline receives your report. All information is kept confidential to the extent allowed by law.',
                },
                {
                  step: '2',
                  title: 'We Assess the Situation',
                  description: 'Trained professionals review the report and determine the appropriate level of response based on the severity and immediacy of the concern.',
                },
                {
                  step: '3',
                  title: 'Investigation Begins',
                  description: 'If warranted, an investigation is initiated within the timeframe required by Ohio law, typically within 24 hours for high-priority cases.',
                },
                {
                  step: '4',
                  title: 'Services and Support',
                  description: 'Families receive appropriate services and support. Our goal is to keep children safe while strengthening families whenever possible.',
                },
                {
                  step: '5',
                  title: 'Follow-Up and Monitoring',
                  description: 'We continue to monitor the situation and provide ongoing case management to ensure the safety and wellbeing of those involved.',
                },
              ].map((item) => (
                <Card key={item.step} padding="lg" className="card-3d">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Report */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
              When Should You Report?
            </h2>

            <Card padding="lg" className="mb-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>When in doubt, report.</strong> It's better to report a concern that turns out to be nothing
                  than to stay silent when someone needs help.
                </p>
                <p className="text-gray-600">
                  You should report if you suspect or have witnessed any of the following:
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card padding="lg">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Signs of Abuse</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Unexplained injuries or bruises
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fearfulness around certain people
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sudden behavioral changes
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Inappropriate sexual knowledge
                  </li>
                </ul>
              </Card>

              <Card padding="lg">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Signs of Neglect</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Poor hygiene or inappropriate clothing
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Lack of medical or dental care
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Unsupervised for long periods
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Living in unsafe conditions
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-primary-blue to-accent-purple text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Ready to Make a Report?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Choose the appropriate form above, or call our 24/7 hotline if you prefer to report by phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/report-abuse/child">
              <Button variant="secondary" size="lg" className="!bg-white !text-primary-blue hover:!bg-gray-100">
                Report Child Abuse
              </Button>
            </Link>
            <Link href="/report-abuse/elder">
              <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                Report Elder Abuse
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

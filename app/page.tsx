'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import DecorativeBlob from '@/components/decorative/DecorativeBlob'
import WaveDivider from '@/components/decorative/WaveDivider'
import { SERVICES } from '@/lib/constants'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section - Full Width Image */}
      <section className="relative overflow-hidden min-h-[500px] lg:min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/AdobeStock_109126301.jpeg"
            alt="Children and families being supported by Erie County Children Services"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent"></div>
        </div>

        <div className="container-custom py-12 md:py-16 lg:py-20 relative z-10 flex items-center min-h-[500px] lg:min-h-[600px]">
          {/* Content */}
          <div className="max-w-2xl w-full">
              <Badge variant="info" size="md" className="mb-4">
                24/7 Support Available
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 leading-tight">
                Protecting{' '}
                <span className="relative inline-block pb-3">
                  Children
                  <svg
                    className="absolute bottom-0 left-0 w-full"
                    height="12"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 10C50 5 100 3 150 5C200 7 250 9 299 5"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                <span className="text-primary-green-light">
                  Supporting Families
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-100 mb-6 leading-relaxed">
                We provide protective services and support to keep children safe
                and families strong. We're here for you, every hour of every day.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <div>
                  <Button
                    variant="danger"
                    size="lg"
                    className="shine-hover group"
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    Report Abuse or Neglect
                  </Button>
                </div>
                <div>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="shine-hover group"
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Become a Foster Parent
                  </Button>
                </div>
              </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="white" />
        </div>
      </section>

      {/* Critical Actions - Bento Box Layout */}
      <section className="section-spacing bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              How Can We{' '}
              <span className="bg-gradient-to-r from-primary-blue to-accent-purple bg-clip-text text-transparent">
                Help You?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the option that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Report Abuse Card - Large & Prominent */}
            <div
              className="group md:col-span-2 lg:col-span-1"
            >
              <Card
                variant="elevated"
                padding="lg"
                className="relative overflow-hidden card-3d bg-gradient-to-br from-accent-orange/5 to-accent-orange/10 border-2 border-accent-orange/20 hover:border-accent-orange/40 h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-accent-orange"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Report Abuse or Neglect
                      </h3>
                      <p className="text-gray-600 text-lg">
                        If you suspect a child or elder is being abused or neglected,
                        report it immediately. All reports are confidential and can
                        save a life.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-accent-orange/20">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      24/7 Available
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Confidential
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-accent-orange font-semibold text-lg group-hover:gap-4 transition-all">
                      Make a Report
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Foster Parent Card */}
            <div className="group">
              <Card
                variant="elevated"
                padding="lg"
                className="relative overflow-hidden card-3d bg-gradient-to-br from-accent-purple/5 to-accent-purple/10 border-2 border-accent-purple/20 hover:border-accent-purple/40 h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-accent-purple"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Become a Foster Parent
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Open your heart and home to a child in need. Make a
                        life-changing difference through foster care or adoption.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-accent-purple/20">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Free Training
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Full Support
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-accent-purple font-semibold text-lg group-hover:gap-4 transition-all">
                      Learn More
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Modern Grid */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <DecorativeBlob
          color="green"
          size="xl"
          className="absolute -top-32 -left-32 opacity-20"
        />
        <DecorativeBlob
          color="blue"
          size="lg"
          className="absolute -bottom-20 -right-20 opacity-20"
        />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a full range of services to protect children and strengthen
              families throughout Erie County
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500'
              ]
              return (
                <div key={service.id} className="group">
                  <Card
                    variant="elevated"
                    className={`h-full card-3d bg-white overflow-hidden stagger-${(index % 4) + 1}`}
                  >
                    <div className={`h-2 bg-gradient-to-r ${gradients[index % 4]} group-hover:h-3 transition-all`}></div>
                    <div className="p-6 flex flex-col h-full">
                      <div className="relative mb-4">
                        <span className="absolute -left-2 -top-2 text-7xl font-black text-gray-100 select-none">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="relative text-2xl font-bold text-gray-900 pt-6 group-hover:text-primary-blue transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 flex-1 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary-blue font-semibold group-hover:translate-x-2 transition-transform">
                        <span>Learn more</span>
                        <span className="ml-2">→</span>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="white" />
        </div>
      </section>

      {/* Quick Resources - Tab-Style Layout */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Find{' '}
              <span className="bg-gradient-to-r from-accent-purple to-accent-orange bg-clip-text text-transparent">
                What You Need
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick access to resources tailored for your role
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* For Families */}
            <Card className="card-3d bg-gradient-to-br from-green-50 to-emerald-50 border-t-4 border-primary-green overflow-hidden group hover:shadow-xl transition-all">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary-green transition-colors">
                  For Families
                </h3>
                <ul className="space-y-4">
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Child Care Information
                    </div>
                  </li>
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Financial Assistance
                    </div>
                  </li>
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Parenting Resources
                    </div>
                  </li>
                </ul>
              </div>
            </Card>

            {/* For Foster Parents */}
            <Card className="card-3d bg-gradient-to-br from-purple-50 to-pink-50 border-t-4 border-accent-purple overflow-hidden group hover:shadow-xl transition-all">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-accent-purple transition-colors">
                  Foster Parents
                </h3>
                <ul className="space-y-4">
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Training & Support
                    </div>
                  </li>
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Forms & Documents
                    </div>
                  </li>
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Foster Parent Portal
                    </div>
                  </li>
                </ul>
              </div>
            </Card>

            {/* For Mandated Reporters */}
            <Card className="card-3d bg-gradient-to-br from-blue-50 to-cyan-50 border-t-4 border-primary-blue overflow-hidden group hover:shadow-xl transition-all">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary-blue transition-colors">
                  Reporters
                </h3>
                <ul className="space-y-4">
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Reporting Guidelines
                    </div>
                  </li>
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Training Materials
                    </div>
                  </li>
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Legal Requirements
                    </div>
                  </li>
                </ul>
              </div>
            </Card>

            {/* For Community */}
            <Card className="card-3d bg-gradient-to-br from-orange-50 to-amber-50 border-t-4 border-accent-orange overflow-hidden group hover:shadow-xl transition-all">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-accent-orange transition-colors">
                  Community
                </h3>
                <ul className="space-y-4">
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Resource Guide
                    </div>
                  </li>
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Request a Speaker
                    </div>
                  </li>
                  <li>
                    <div className="block p-3 -mx-3 rounded-lg hover:bg-white/80 transition-all text-gray-800 font-medium">
                      Resource Directory
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient with 3D effect */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-accent-purple to-primary-blue-dark"></div>

        {/* Animated blobs */}
        <div className="absolute inset-0 opacity-20">
          <DecorativeBlob color="orange" size="xl" className="absolute top-0 left-0" />
          <DecorativeBlob color="green" size="lg" className="absolute bottom-0 right-0" />
        </div>

        <div className="container-custom py-20 md:py-28 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              Available 24/7
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
              Need Help Right Away?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Our hotline is always available. If you suspect abuse or neglect, or need
              immediate assistance, call us now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="!bg-white !text-primary-blue hover:!bg-gray-100 hover:scale-105 transition-transform shadow-2xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 419-626-KIDS
                </Button>
              </div>
              <div>
                <Button
                  variant="outline"
                  size="lg"
                  className="!border-white !text-white hover:!bg-white/10"
                >
                  Other Contact Options
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="dark" />
        </div>
      </section>
    </main>
  )
}

import { NextRequest, NextResponse } from 'next/server'
import { sendFormEmail } from '@/lib/email'
import { childAbuseReportSchema, elderAbuseReportSchema, fosterInterestFormSchema } from '@/lib/validations'
import { ZodError } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formType, data } = body

    if (!formType || !data) {
      return NextResponse.json(
        { error: 'Missing required fields: formType and data' },
        { status: 400 }
      )
    }

    // Validate the data based on form type
    let validatedData
    try {
      switch (formType) {
        case 'child-abuse-report':
          validatedData = childAbuseReportSchema.parse(data)
          break
        case 'elder-abuse-report':
          validatedData = elderAbuseReportSchema.parse(data)
          break
        case 'foster-interest':
          validatedData = fosterInterestFormSchema.parse(data)
          break
        default:
          return NextResponse.json(
            { error: `Unknown form type: ${formType}` },
            { status: 400 }
          )
      }
    } catch (error) {
      if (error instanceof ZodError) {
        return NextResponse.json(
          { error: 'Validation failed', details: error.errors },
          { status: 400 }
        )
      }
      throw error
    }

    // Send email
    try {
      const result = await sendFormEmail(formType, validatedData)

      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully',
        messageId: result.messageId,
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)

      // Even if email fails, we should log this and not fail the user's submission
      // In production, you might want to save to a database as a backup
      return NextResponse.json(
        {
          error: 'Failed to send email notification',
          details: emailError instanceof Error ? emailError.message : 'Unknown error',
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      {
        error: 'An unexpected error occurred',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

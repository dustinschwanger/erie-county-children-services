import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

// Email template for child abuse reports
function formatChildAbuseReport(data: any): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
    .section { margin: 20px 0; padding: 15px; background: #f9fafb; border-left: 4px solid #1e40af; }
    .section-title { font-size: 18px; font-weight: bold; color: #1e40af; margin-bottom: 10px; }
    .field { margin: 10px 0; }
    .label { font-weight: bold; color: #555; }
    .value { margin-left: 10px; }
    .alert { background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Child Abuse Report</h1>
    <p>Erie County Children Services</p>
  </div>

  <div class="alert">
    <strong>⚠️ URGENT:</strong> This is a child abuse report submission that requires immediate attention.
  </div>

  ${data.reporterFullName || data.reporterEmail || data.reporterPhone ? `
  <div class="section">
    <div class="section-title">Reporter Contact Information</div>
    ${data.reporterFullName ? `<div class="field"><span class="label">Name:</span><span class="value">${data.reporterFullName}</span></div>` : ''}
    ${data.reporterEmail ? `<div class="field"><span class="label">Email:</span><span class="value">${data.reporterEmail}</span></div>` : ''}
    ${data.reporterPhone ? `<div class="field"><span class="label">Phone:</span><span class="value">${data.reporterPhone}</span></div>` : ''}
  </div>
  ` : ''}

  <div class="section">
    <div class="section-title">Family Information</div>
    ${data.victimName ? `<div class="field"><span class="label">Victim Name:</span><span class="value">${data.victimName}</span></div>` : ''}
    ${data.familyAddress ? `<div class="field"><span class="label">Family Address:</span><span class="value">${data.familyAddress}</span></div>` : ''}
    ${data.victimDOB ? `<div class="field"><span class="label">Victim Date of Birth:</span><span class="value">${data.victimDOB}</span></div>` : ''}
    ${data.phone ? `<div class="field"><span class="label">Phone:</span><span class="value">${data.phone}</span></div>` : ''}
  </div>

  ${data.child1Name || data.child2Name || data.child3Name || data.child4Name ? `
  <div class="section">
    <div class="section-title">Other Children in Family</div>
    ${data.child1Name ? `<div class="field"><span class="label">Child 1:</span><span class="value">${data.child1Name}${data.child1Age ? ` (Age: ${data.child1Age})` : ''}</span></div>` : ''}
    ${data.child2Name ? `<div class="field"><span class="label">Child 2:</span><span class="value">${data.child2Name}${data.child2Age ? ` (Age: ${data.child2Age})` : ''}</span></div>` : ''}
    ${data.child3Name ? `<div class="field"><span class="label">Child 3:</span><span class="value">${data.child3Name}${data.child3Age ? ` (Age: ${data.child3Age})` : ''}</span></div>` : ''}
    ${data.child4Name ? `<div class="field"><span class="label">Child 4:</span><span class="value">${data.child4Name}${data.child4Age ? ` (Age: ${data.child4Age})` : ''}</span></div>` : ''}
  </div>
  ` : ''}

  ${data.previousReport !== undefined ? `
  <div class="section">
    <div class="section-title">Previous Reports</div>
    <div class="field"><span class="label">Previous Report Filed:</span><span class="value">${data.previousReport}</span></div>
    ${data.previousReportDate ? `<div class="field"><span class="label">Date of Previous Report:</span><span class="value">${data.previousReportDate}</span></div>` : ''}
  </div>
  ` : ''}

  ${data.relationship ? `
  <div class="section">
    <div class="section-title">Relationship to Family</div>
    <div class="field"><span class="label">Relationship:</span><span class="value">${data.relationship}</span></div>
  </div>
  ` : ''}

  ${data.personalKnowledge !== undefined ? `
  <div class="section">
    <div class="section-title">Personal Knowledge</div>
    <div class="field"><span class="label">Witnessed or Received Information Personally:</span><span class="value">${data.personalKnowledge}</span></div>
  </div>
  ` : ''}

  ${data.substanceAbuse && data.substanceAbuse.length > 0 ? `
  <div class="section">
    <div class="section-title">Substance Abuse Concerns</div>
    <div class="field"><span class="value">${data.substanceAbuse.join(', ')}</span></div>
  </div>
  ` : ''}

  <div class="section">
    <div class="section-title">Incident Narrative</div>
    <div class="field">
      <div class="label">Detailed Description:</div>
      <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${data.narrative}</div>
    </div>
  </div>

  ${data.injuries ? `
  <div class="section">
    <div class="section-title">Injuries Details</div>
    <div class="field">
      <div class="value" style="white-space: pre-wrap;">${data.injuries}</div>
    </div>
  </div>
  ` : ''}

  <div class="section" style="background: #fef3c7; border-left-color: #f59e0b;">
    <div class="section-title">Submission Details</div>
    <div class="field"><span class="label">Submitted:</span><span class="value">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</span></div>
    <div class="field"><span class="label">Form Type:</span><span class="value">Child Abuse Report</span></div>
  </div>
</body>
</html>
  `.trim()
}

// Email template for elder abuse reports
function formatElderAbuseReport(data: any): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #7c3aed; color: white; padding: 20px; text-align: center; }
    .section { margin: 20px 0; padding: 15px; background: #f9fafb; border-left: 4px solid #7c3aed; }
    .section-title { font-size: 18px; font-weight: bold; color: #7c3aed; margin-bottom: 10px; }
    .field { margin: 10px 0; }
    .label { font-weight: bold; color: #555; }
    .value { margin-left: 10px; }
    .alert { background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Elder Abuse Report</h1>
    <p>Erie County Children Services</p>
  </div>

  <div class="alert">
    <strong>⚠️ URGENT:</strong> This is an elder abuse report submission that requires immediate attention.
  </div>

  ${data.concernType ? `
  <div class="section">
    <div class="section-title">Type of Concern</div>
    <div class="field"><span class="label">Concern Type:</span><span class="value">${data.concernType}</span></div>
  </div>
  ` : ''}

  <div class="section">
    <div class="section-title">Victim Information</div>
    ${data.victimName ? `<div class="field"><span class="label">Name:</span><span class="value">${data.victimName}</span></div>` : ''}
    ${data.victimDOB ? `<div class="field"><span class="label">Date of Birth:</span><span class="value">${data.victimDOB}</span></div>` : ''}
    ${data.victimAge ? `<div class="field"><span class="label">Age:</span><span class="value">${data.victimAge}</span></div>` : ''}
    ${data.victimAddress ? `<div class="field"><span class="label">Address:</span><span class="value">${data.victimAddress}</span></div>` : ''}
    ${data.victimPhone ? `<div class="field"><span class="label">Phone:</span><span class="value">${data.victimPhone}</span></div>` : ''}
    ${data.victimCounty ? `<div class="field"><span class="label">County:</span><span class="value">${data.victimCounty}</span></div>` : ''}
    ${data.victimGender ? `<div class="field"><span class="label">Gender:</span><span class="value">${data.victimGender}</span></div>` : ''}
  </div>

  <div class="section">
    <div class="section-title">Concern Details</div>
    <div class="field">
      <div class="value" style="white-space: pre-wrap;">${data.concernDetails}</div>
    </div>
  </div>

  ${data.neglectDetails ? `
  <div class="section">
    <div class="section-title">Neglect Details</div>
    <div class="field">
      <div class="value" style="white-space: pre-wrap;">${data.neglectDetails}</div>
    </div>
  </div>
  ` : ''}

  ${data.substanceAbuse ? `
  <div class="section">
    <div class="section-title">Substance Abuse Information</div>
    <div class="field">
      <div class="value" style="white-space: pre-wrap;">${data.substanceAbuse}</div>
    </div>
  </div>
  ` : ''}

  ${data.perpetratorName || data.perpetratorAddress ? `
  <div class="section">
    <div class="section-title">Perpetrator Information</div>
    ${data.perpetratorName ? `<div class="field"><span class="label">Name:</span><span class="value">${data.perpetratorName}</span></div>` : ''}
    ${data.perpetratorAddress ? `<div class="field"><span class="label">Address:</span><span class="value">${data.perpetratorAddress}</span></div>` : ''}
    ${data.perpetratorRelationship && data.perpetratorRelationship.length > 0 ? `<div class="field"><span class="label">Relationship:</span><span class="value">${data.perpetratorRelationship.join(', ')}</span></div>` : ''}
  </div>
  ` : ''}

  ${data.victimHas && data.victimHas.length > 0 ? `
  <div class="section">
    <div class="section-title">Victim Has</div>
    <div class="field"><span class="value">${data.victimHas.join(', ')}</span></div>
  </div>
  ` : ''}

  ${data.poaHolder ? `
  <div class="section">
    <div class="section-title">Power of Attorney Holder</div>
    <div class="field"><span class="value">${data.poaHolder}</span></div>
  </div>
  ` : ''}

  ${data.othersInHome ? `
  <div class="section">
    <div class="section-title">Others in the Home</div>
    <div class="field"><span class="value" style="white-space: pre-wrap;">${data.othersInHome}</span></div>
  </div>
  ` : ''}

  ${data.communityServices ? `
  <div class="section">
    <div class="section-title">Community Services</div>
    <div class="field"><span class="value" style="white-space: pre-wrap;">${data.communityServices}</span></div>
  </div>
  ` : ''}

  ${data.reporterName || data.reporterPhone || data.reporterAddress || data.reporterEmail ? `
  <div class="section">
    <div class="section-title">Reporter Information</div>
    ${data.reporterName ? `<div class="field"><span class="label">Name:</span><span class="value">${data.reporterName}</span></div>` : ''}
    ${data.reporterPhone ? `<div class="field"><span class="label">Phone:</span><span class="value">${data.reporterPhone}</span></div>` : ''}
    ${data.reporterAddress ? `<div class="field"><span class="label">Address:</span><span class="value">${data.reporterAddress}</span></div>` : ''}
    ${data.reporterEmail ? `<div class="field"><span class="label">Email:</span><span class="value">${data.reporterEmail}</span></div>` : ''}
  </div>
  ` : ''}

  <div class="section" style="background: #fef3c7; border-left-color: #f59e0b;">
    <div class="section-title">Submission Details</div>
    <div class="field"><span class="label">Submitted:</span><span class="value">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</span></div>
    <div class="field"><span class="label">Form Type:</span><span class="value">Elder Abuse Report</span></div>
  </div>
</body>
</html>
  `.trim()
}

// Email template for foster interest form
function formatFosterInterestForm(data: any): string {
  const interestedInLabels: Record<string, string> = {
    foster: 'Foster Care',
    adopt: 'Adoption',
    both: 'Both Foster Care and Adoption',
  }

  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #059669; color: white; padding: 20px; text-align: center; }
    .section { margin: 20px 0; padding: 15px; background: #f9fafb; border-left: 4px solid #059669; }
    .section-title { font-size: 18px; font-weight: bold; color: #059669; margin-bottom: 10px; }
    .field { margin: 10px 0; }
    .label { font-weight: bold; color: #555; }
    .value { margin-left: 10px; }
    .highlight { background: #d1fae5; border: 1px solid #059669; padding: 15px; margin: 20px 0; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Foster/Adoption Interest Form</h1>
    <p>Erie County Children Services</p>
  </div>

  <div class="highlight">
    <strong>📋 New Interest:</strong> A prospective foster/adoptive parent has expressed interest.
  </div>

  <div class="section">
    <div class="section-title">Contact Information</div>
    ${data.fullName ? `<div class="field"><span class="label">Name:</span><span class="value">${data.fullName}</span></div>` : ''}
    ${data.email ? `<div class="field"><span class="label">Email:</span><span class="value">${data.email}</span></div>` : ''}
    ${data.phone ? `<div class="field"><span class="label">Phone:</span><span class="value">${data.phone}</span></div>` : ''}
    ${data.address ? `<div class="field"><span class="label">Address:</span><span class="value">${data.address}</span></div>` : ''}
  </div>

  <div class="section">
    <div class="section-title">Interest Details</div>
    ${data.interestedIn ? `<div class="field"><span class="label">Interested In:</span><span class="value">${interestedInLabels[data.interestedIn] || data.interestedIn}</span></div>` : ''}
    ${data.livingSituation ? `<div class="field"><span class="label">Living Situation:</span><span class="value">${data.livingSituation}</span></div>` : ''}
    ${data.hasChildren ? `<div class="field"><span class="label">Has Children in Home:</span><span class="value">${data.hasChildren.toUpperCase()}</span></div>` : ''}
    ${data.numberOfChildren ? `<div class="field"><span class="label">Number of Children:</span><span class="value">${data.numberOfChildren}</span></div>` : ''}
  </div>

  ${data.preferredContact || data.bestTimeToContact ? `
  <div class="section">
    <div class="section-title">Contact Preferences</div>
    ${data.preferredContact ? `<div class="field"><span class="label">Preferred Contact Method:</span><span class="value">${data.preferredContact === 'email' ? 'Email' : 'Phone Call'}</span></div>` : ''}
    ${data.bestTimeToContact ? `<div class="field"><span class="label">Best Time to Contact:</span><span class="value">${data.bestTimeToContact}</span></div>` : ''}
  </div>
  ` : ''}

  ${data.message ? `
  <div class="section">
    <div class="section-title">Additional Comments</div>
    <div class="field">
      <div class="value" style="white-space: pre-wrap;">${data.message}</div>
    </div>
  </div>
  ` : ''}

  <div class="section" style="background: #d1fae5; border-left-color: #059669;">
    <div class="section-title">Submission Details</div>
    <div class="field"><span class="label">Submitted:</span><span class="value">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</span></div>
    <div class="field"><span class="label">Form Type:</span><span class="value">Foster/Adoption Interest Form</span></div>
  </div>
</body>
</html>
  `.trim()
}

// Send email function
export async function sendFormEmail(formType: string, data: any) {
  try {
    let subject = ''
    let html = ''

    switch (formType) {
      case 'child-abuse-report':
        subject = '🚨 URGENT: Child Abuse Report Submission'
        html = formatChildAbuseReport(data)
        break
      case 'elder-abuse-report':
        subject = '🚨 URGENT: Elder Abuse Report Submission'
        html = formatElderAbuseReport(data)
        break
      case 'foster-interest':
        subject = '💚 New Foster/Adoption Interest Form'
        html = formatFosterInterestForm(data)
        break
      default:
        throw new Error(`Unknown form type: ${formType}`)
    }

    const info = await transporter.sendMail({
      from: `"Erie County Children Services" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'dustinschwanger@gmail.com',
      subject,
      html,
    })

    console.log('Email sent successfully:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

// Verify email configuration
export async function verifyEmailConfig() {
  try {
    await transporter.verify()
    console.log('Email configuration is valid')
    return true
  } catch (error) {
    console.error('Email configuration error:', error)
    return false
  }
}

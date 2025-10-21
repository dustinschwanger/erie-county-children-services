# Erie County Children Services Website Redesign
## Comprehensive Implementation Plan

---

## Executive Summary

This document outlines the complete redesign and rebuild of the Erie County Children Services website. The project prioritizes accessibility, clarity, and ease of use for families in crisis, mandated reporters, prospective foster parents, and community partners.

**Current Site Analysis:**
- Dated mid-2000s design with cluttered information hierarchy
- Good warmth and approachability through imagery
- Strong mission-driven content but poor organization
- Multiple critical CTAs but inconsistent prominence
- No mobile optimization or modern web standards
- Comprehensive content that needs restructuring

**Goal:** Create a modern, accessible, mobile-first website that makes critical services immediately accessible while maintaining warmth and approachability.

---

## 1. Information Architecture

### Primary Navigation Structure

```
Home
├── Report Abuse & Neglect (CRITICAL)
│   ├── Report Child Abuse/Neglect
│   ├── Report Elder Abuse/Neglect
│   ├── What Happens After I Report
│   └── Mandated Reporter Resources
│
├── Foster & Adoption
│   ├── Become a Foster Parent
│   ├── Become an Adoptive Parent
│   ├── Foster Parent Requirements
│   ├── Adoption Process
│   ├── Foster Parent Resources
│   └── Request Information
│
├── Services
│   ├── Overview
│   ├── Family Support Services
│   ├── Child Protective Services
│   ├── Ongoing Case Management
│   ├── Kinship Care
│   ├── Specialized Services
│   └── Quality Improvement
│
├── Resources
│   ├── For Families
│   ├── For Foster/Adoptive Parents
│   ├── For Mandated Reporters
│   ├── For Seniors & Caregivers
│   ├── Community Resources
│   └── Forms & Documents
│
├── About
│   ├── Our Mission
│   ├── What We Do
│   ├── Staff Directory
│   ├── News & Events
│   └── Request a Speaker
│
└── Contact
    ├── Contact Form
    ├── Office Location & Hours
    ├── Staff Directory
    └── Emergency Hotline
```

### Content Priority Hierarchy

**Level 1 - Critical (Homepage Hero):**
- Emergency hotline: 419-626-KIDS (419-626-5437)
- Report Abuse/Neglect CTA
- Become a Foster Parent CTA

**Level 2 - Important (Homepage Prominent):**
- Service overview
- Current families/case management portal
- Quick resources
- News/alerts

**Level 3 - Supporting (Easily Accessible):**
- Detailed service information
- Staff directory
- Community resources
- About/Mission

### User Journey Mapping

**Journey 1: Person Witnessing Abuse (Most Urgent)**
1. Land on homepage → See prominent "Report Abuse" button
2. Choose child or elder abuse reporting
3. View clear instructions on what to report
4. Option to call 419-626-KIDS or submit online form
5. Confirmation with next steps

**Journey 2: Prospective Foster Parent**
1. Land on homepage → See "Become a Foster Parent" CTA
2. Learn about requirements and process
3. View FAQ and resources
4. Submit interest form
5. Receive information about next steps

**Journey 3: Family Needing Services**
1. Land on homepage → Navigate to Services
2. Browse service types to find relevant help
3. Learn about specific service
4. Contact or request services
5. Access ongoing resources

**Journey 4: Current Foster Parent**
1. Land on homepage → Quick link to resources
2. Access forms, training materials
3. Contact case worker
4. Use chat for quick questions

---

## 2. Design System

### Color Palette

**Primary Colors (Evolved from Current Site):**
```css
/* Trust & Stability - Blue */
--primary-blue: #2563eb;        /* Modern, accessible blue */
--primary-blue-light: #3b82f6;
--primary-blue-dark: #1e40af;

/* Growth & Hope - Green */
--primary-green: #059669;       /* Fresh, hopeful green */
--primary-green-light: #10b981;
--primary-green-dark: #047857;

/* Urgency & Action - Orange */
--accent-orange: #ea580c;       /* Clear, not alarming */
--accent-orange-light: #f97316;
--accent-orange-dark: #c2410c;

/* Warmth & Support - Tan/Beige */
--neutral-warm: #fef3c7;        /* Soft, welcoming background */
--neutral-warm-mid: #fde68a;

/* Care & Compassion - Purple */
--accent-purple: #7c3aed;       /* Caring, professional */
--accent-purple-light: #8b5cf6;
--accent-purple-dark: #6d28d9;

/* Neutrals */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;

/* Semantic Colors */
--success: #059669;
--warning: #f59e0b;
--error: #dc2626;
--info: #2563eb;
```

**Color Usage Strategy:**
- **Blue**: Primary brand color, navigation, links, primary buttons
- **Green**: Success states, positive CTAs, growth-oriented content
- **Orange**: Report abuse buttons, urgent actions, important alerts
- **Purple**: Foster/adoption CTAs, special programs
- **Tan/Warm**: Hero sections, warm backgrounds, welcoming spaces
- **Grays**: Text hierarchy, borders, subtle UI elements

### Typography

```css
/* Font Families */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-display: 'Lexend', 'Inter', sans-serif;

/* Font Sizes (Tailwind-aligned) */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

**Typography Scale Usage:**
- **H1**: text-4xl (mobile) / text-5xl (desktop), font-bold, Lexend
- **H2**: text-3xl (mobile) / text-4xl (desktop), font-bold, Lexend
- **H3**: text-2xl (mobile) / text-3xl (desktop), font-semibold, Lexend
- **H4**: text-xl / text-2xl, font-semibold, Inter
- **Body Large**: text-lg, font-normal, Inter
- **Body**: text-base, font-normal, Inter
- **Body Small**: text-sm, font-normal, Inter
- **Caption**: text-xs, font-medium, Inter

### Spacing System

Using Tailwind's default spacing scale (4px base unit):
```
0: 0px
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
5: 1.25rem (20px)
6: 1.5rem (24px)
8: 2rem (32px)
10: 2.5rem (40px)
12: 3rem (48px)
16: 4rem (64px)
20: 5rem (80px)
24: 6rem (96px)
32: 8rem (128px)
```

**Spacing Usage:**
- Component padding: 4-6 (16-24px)
- Section spacing: 12-16 (48-64px mobile), 16-24 (64-96px desktop)
- Card spacing: 6-8 (24-32px)
- Button padding: px-6 py-3 (24px x 12px)

### Breakpoints

```css
/* Mobile first approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### Border Radius

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* Fully rounded */
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

### Animation & Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 3. Technical Architecture

### Project Structure

```
erie-county-children-services/
├── app/
│   ├── (main)/                 # Main site routes
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── report-abuse/
│   │   │   ├── page.tsx
│   │   │   ├── child/
│   │   │   │   └── page.tsx
│   │   │   └── elder/
│   │   │       └── page.tsx
│   │   ├── foster-adoption/
│   │   │   ├── page.tsx
│   │   │   ├── become-foster-parent/
│   │   │   ├── become-adoptive-parent/
│   │   │   └── resources/
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [service]/
│   │   │       └── page.tsx
│   │   ├── resources/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   ├── staff/
│   │   │   └── news/
│   │   └── contact/
│   │       └── page.tsx
│   ├── api/
│   │   ├── forms/
│   │   │   └── submit/
│   │   │       └── route.ts
│   │   ├── chat/
│   │   │   ├── route.ts       # RAG chat endpoint
│   │   │   └── stream/
│   │   │       └── route.ts
│   │   └── send-email/
│   │       └── route.ts
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   ├── Alert.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx
│   │   └── Accordion.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── ChildAbuseReportForm.tsx
│   │   ├── ElderAbuseReportForm.tsx
│   │   ├── FosterInterestForm.tsx
│   │   └── SpeakerRequestForm.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── HeroWithCTA.tsx
│   │   ├── CTASection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ResourceCard.tsx
│   │   ├── StaffCard.tsx
│   │   ├── NewsCard.tsx
│   │   └── QuickLinks.tsx
│   └── chat/
│       ├── ChatWidget.tsx
│       ├── ChatButton.tsx
│       ├── ChatWindow.tsx
│       └── MessageList.tsx
│
├── lib/
│   ├── utils.ts               # Utility functions
│   ├── validations.ts         # Form validation schemas
│   ├── email.ts               # Email sending logic
│   ├── rag/
│   │   ├── client.ts          # RAG client setup
│   │   ├── embeddings.ts      # OpenAI embeddings
│   │   ├── vectorStore.ts     # Pinecone integration
│   │   └── chat.ts            # Chat logic
│   └── constants.ts           # Site-wide constants
│
├── types/
│   ├── forms.ts
│   ├── content.ts
│   └── chat.ts
│
├── public/
│   ├── images/
│   │   ├── heroes/
│   │   ├── services/
│   │   └── resources/
│   ├── pdfs/
│   └── fonts/
│
├── data/
│   ├── services.ts            # Service content
│   ├── resources.ts           # Resource content
│   ├── staff.ts               # Staff directory
│   └── navigation.ts          # Nav structure
│
├── hooks/
│   ├── useForm.ts
│   ├── useChat.ts
│   └── useMediaQuery.ts
│
└── config/
    ├── site.ts                # Site configuration
    └── rag.ts                 # RAG configuration
```

### Technology Stack

**Core Framework:**
- Next.js 14.2+ (App Router)
- React 18+
- TypeScript 5+

**Styling:**
- Tailwind CSS 3.4+
- CSS Modules (where needed for specificity)

**Form Handling:**
- React Hook Form
- Zod (validation)

**Email:**
- Nodemailer or Resend
- React Email (email templates)

**RAG/Chat System:**
- OpenAI GPT-4 (chat completions)
- OpenAI text-embedding-ada-002 (embeddings)
- Pinecone (vector database)
- Supabase (conversation history, metadata)

**Deployment:**
- Railway (hosting)
- Railway Postgres (if needed for chat history)
- Vercel Analytics (optional)

**Development:**
- ESLint + Prettier
- TypeScript strict mode
- Git hooks (Husky)

### Data Flow Architecture

```
User Interaction
    ↓
Next.js App Router Page
    ↓
React Component
    ↓
Form Submission / API Call
    ↓
API Route (/app/api/*)
    ↓
[Forms] → Validation (Zod) → Email Service → Send to dustinschwanger@gmail.com
    ↓
[Chat] → RAG Pipeline:
    1. User message → OpenAI Embeddings
    2. Query Pinecone for relevant context
    3. Retrieve top K documents
    4. Send to GPT-4 with context
    5. Stream response back to client
    6. Store conversation in Supabase
```

### State Management

**Approach:** Minimal state management using React hooks and server components

- **Server Components**: Default for all pages (data fetching, static content)
- **Client Components**: Only where needed (forms, chat, interactive UI)
- **URL State**: For filters, pagination, search
- **Local State**: React useState for component-level state
- **Form State**: React Hook Form for complex forms
- **Chat State**: Custom useChat hook managing conversation history

### API Routes Structure

```typescript
// Form submission endpoint
POST /api/forms/submit
Body: { formType, data }
Response: { success, message }

// Chat endpoints
POST /api/chat
Body: { message, conversationId }
Response: { response, conversationId }

POST /api/chat/stream
Body: { message, conversationId }
Response: ReadableStream (SSE)

// Email endpoint (internal)
POST /api/send-email
Body: { to, subject, html, formData }
Response: { success, messageId }
```

---

## 4. Page-by-Page Specifications

### Homepage (`/`)

**Purpose:** Quick access to critical services, establish trust, guide users to their journey

**Layout:**
```
[Emergency Banner] - Always visible, sticky
[Header/Navigation]
[Hero Section] - Large, warm image, primary CTAs
[Critical Actions] - Report Abuse, Become Foster Parent
[Services Overview] - 3-4 key services with icons
[Quick Resources] - For different audiences
[News & Events] - Latest 3 items
[Chat Widget] - Floating bottom-right
[Footer]
```

**Components:**
- `EmergencyBanner` - 419-626-KIDS hotline, always visible
- `HeroWithCTA` - Main hero with 2 primary action buttons
- `CTACard` - Large, prominent action cards
- `ServicePreview` - Service overview cards
- `QuickLinksSection` - Audience-based quick links
- `NewsCarousel` - Latest news items
- `ChatWidget` - Floating chat button

**Content Sections:**
1. **Emergency Banner**
   - Text: "24/7 Abuse & Neglect Hotline: 419-626-KIDS (419-626-5437)"
   - Background: Orange gradient
   - Always visible, sticky to top

2. **Hero Section**
   - Headline: "Protecting Children, Supporting Families"
   - Subheadline: "Erie County Children Services provides protective services and support to keep children safe and families strong"
   - Image: Warm, hopeful image of children (similar to balloons but modern)
   - Primary CTA: "Report Abuse or Neglect"
   - Secondary CTA: "Become a Foster Parent"

3. **Critical Actions (2 large cards)**
   - **Report Abuse & Neglect**
     - Icon: Shield with heart
     - Description: "If you suspect a child or elder is being abused or neglected, report it immediately. All reports are confidential."
     - CTA: "Make a Report"
     - Color: Orange accent

   - **Become a Foster Parent**
     - Icon: Home with heart
     - Description: "Open your heart and home to a child in need. Learn how you can make a life-changing difference."
     - CTA: "Learn More"
     - Color: Purple accent

4. **Services Overview**
   - Section Title: "How We Help Families"
   - 4 cards:
     - Child Protective Services
     - Family Support Programs
     - Foster Care & Adoption
     - Kinship Care Support
   - Each card has icon, title, brief description, "Learn More" link

5. **Quick Resources (Audience-based)**
   - Section Title: "Find What You Need"
   - Tabs or cards for:
     - For Families
     - For Foster Parents
     - For Mandated Reporters
     - For Community Partners
   - Each shows 4-5 most relevant links

6. **News & Events**
   - Section Title: "News & Announcements"
   - 3 most recent items with image, date, title, excerpt
   - "View All News" link

**Accessibility Considerations:**
- Skip to main content link
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels for all interactive elements
- Focus visible states
- Keyboard navigation support
- Color contrast ratio 4.5:1 minimum

---

### Report Abuse & Neglect Landing (`/report-abuse`)

**Purpose:** Provide clear pathways to report abuse, remove barriers, give confidence

**Layout:**
```
[Emergency Banner]
[Header]
[Hero - Serious but supportive tone]
[Choice Section] - Child or Elder abuse
[What Happens Next] - Process explanation
[When to Report] - Clear guidance
[Resources for Reporters]
[Footer]
```

**Components:**
- `HeroSupportive` - Empathetic hero section
- `ReportTypeCard` - Large cards for child/elder selection
- `ProcessTimeline` - Visual timeline of what happens
- `GuidanceAccordion` - When/how to report guidance
- `ResourceList` - Helpful resources

**Content:**
1. **Hero**
   - Headline: "Report Abuse or Neglect"
   - Subheadline: "Your report can save a life. All reports are confidential and taken seriously."
   - Background: Subtle, supportive imagery
   - Emergency callout: "Emergency? Call 911 immediately"

2. **Choose Report Type (2 prominent cards)**
   - Report Child Abuse/Neglect → `/report-abuse/child`
   - Report Elder Abuse/Neglect → `/report-abuse/elder`
   - Each card: Large icon, title, brief description, "Continue" button

3. **What Happens After You Report**
   - Timeline/Steps visualization:
     1. Your report is received (24/7 hotline)
     2. We assess the situation
     3. Investigation begins if needed
     4. Family receives support and services
     5. Follow-up and case management
   - Reassurance about confidentiality

4. **When Should You Report?**
   - Accordion with scenarios:
     - Signs of physical abuse
     - Signs of neglect
     - Signs of sexual abuse
     - Signs of emotional abuse
   - "When in doubt, report" messaging

5. **Resources for Mandated Reporters**
   - Links to training materials
   - Legal requirements
   - Reporting guidelines PDF
   - Contact for questions

---

### Report Child Abuse Form (`/report-abuse/child`)

**Purpose:** Collect detailed information to investigate abuse while being sensitive to reporter

**Layout:**
```
[Emergency Banner]
[Header]
[Split Layout]
  [Left: Form] | [Right: Sticky Sidebar with guidance]
[Footer]
```

**Form Sections:**
1. **Reporter Information** (Optional/Confidential)
   - Name
   - Phone
   - Email
   - Address
   - Relationship to child

2. **Child Information** (Required)
   - Name
   - Date of birth / Approximate age
   - Address
   - School
   - Physical description (if name unknown)

3. **Family Information**
   - Parent/Guardian names
   - Address
   - Phone numbers
   - Other household members
   - Child's relationship to family members

4. **Concern Description** (Required)
   - What are you reporting? (Checkboxes: Physical abuse, Neglect, Sexual abuse, Emotional abuse)
   - Detailed description (Large textarea)
   - When did this occur?
   - Are there injuries? Describe
   - Is the child in immediate danger?
   - Has this been reported before?
   - Are there substance abuse concerns?

5. **Additional Information**
   - Other agencies involved?
   - Other children at risk?
   - Additional comments

**Sidebar Content:**
- "How to Report" checklist
- "What happens next" summary
- "Need help?" contact info
- Encouragement/support messaging

**Validation:**
- Child information or detailed description required
- Phone number validation
- Email validation
- Character limits with counters

**Submission:**
- Confirmation page with:
  - Thank you message
  - Reference number
  - What happens next
  - Resources for follow-up
- Email sent to dustinschwanger@gmail.com with all form data

---

### Report Elder Abuse Form (`/report-abuse/elder`)

**Purpose:** Collect information about elder abuse or neglect

**Layout:** Similar to child abuse form

**Form Sections:**
1. **Reporter Information** (Optional/Confidential)
2. **Elder Information** (Required)
   - Name
   - Date of birth / Approximate age
   - Address
   - Living situation (alone, with family, facility)
3. **Concern Information**
   - Type of abuse (Physical, Neglect, Self-neglect, Exploitation, Emotional)
   - Detailed description
   - When did this occur?
   - Does the person have POA or guardian?
   - Are there substance abuse concerns?
4. **Alleged Perpetrator Information**
   - Name
   - Address
   - Relationship to victim
5. **Additional Information**

---

### Foster & Adoption Landing (`/foster-adoption`)

**Purpose:** Inspire and inform prospective foster/adoptive parents, remove barriers to inquiry

**Layout:**
```
[Header]
[Hero - Inspiring, warm]
[Two Pathways] - Foster vs Adopt
[Requirements Overview]
[Process Overview]
[FAQs]
[Success Stories/Testimonials]
[CTA - Request Information]
[Resources for Current Foster Parents]
[Footer]
```

**Components:**
- `HeroInspiring` - Emotional, warm hero
- `PathwayCard` - Foster vs Adopt comparison
- `RequirementsChecklist` - Visual checklist
- `ProcessSteps` - Step-by-step journey
- `TestimonialCarousel` - Foster parent stories
- `CTAForm` - Interest form

**Content:**
1. **Hero**
   - Headline: "Open Your Heart, Change a Life"
   - Subheadline: "Become a foster or adoptive parent and make a lasting difference in a child's life"
   - Large, warm image: Foster family
   - CTA: "Get Started Today"

2. **Choose Your Path**
   - Two cards side-by-side:
     - **Foster Care**: Temporary care, support families
     - **Adoption**: Permanent home, forever family
   - Each links to dedicated page

3. **Do I Qualify?**
   - Friendly checklist:
     - ✓ Be at least 21 years old
     - ✓ Have adequate space in your home
     - ✓ Pass background checks
     - ✓ Complete training
     - ✓ Have stable income (can be single or married)
     - ✓ Rent or own your home
   - Emphasis: "You don't need to be perfect, just committed"

4. **The Process** (5 steps)
   1. Submit interest form
   2. Attend information session
   3. Complete application and home study
   4. Receive training (free)
   5. Get matched and welcomed to the team

5. **Frequently Asked Questions**
   - Accordion with 10-12 common questions
   - Topics: costs, time commitment, support, biological children, etc.

6. **Hear from Foster Parents**
   - 3 testimonial cards with photos, quotes, names

7. **Ready to Take the Next Step?**
   - Large CTA section
   - Interest form (embedded or modal):
     - Name, Email, Phone
     - Interested in: Foster / Adopt / Both
     - Message/Questions
     - Preferred contact method
   - "We'll contact you within 2 business days"

8. **Resources for Current Foster Parents**
   - Collapsible section with links to:
     - Forms and documents
     - Training portal
     - Support groups
     - Emergency contacts
     - Monthly newsletters

---

### Services Overview (`/services`)

**Purpose:** Comprehensive overview of all agency services

**Layout:**
```
[Header]
[Hero]
[Services Grid] - All service units
[Mission Statement]
[Contact CTA]
[Footer]
```

**Services Listed:**
1. **Intake & Investigation Unit**
   - 24/7 abuse and neglect hotline
   - Initial assessments
   - Investigation services
   - Link to detail page

2. **Family Support Unit**
   - In-home services
   - Parenting education
   - Family counseling
   - Concrete supports (housing, utilities, etc.)

3. **Ongoing Services Unit**
   - Case management
   - Service coordination
   - Progress monitoring
   - Family support

4. **Specialized Services**
   - Intensive in-home treatment
   - Trauma-focused therapy
   - Reunification services
   - Independent living skills

5. **Foster Care & Adoption**
   - Foster parent recruitment
   - Home studies
   - Placement services
   - Post-adoption support

6. **Kinship Care Program**
   - Support for relatives raising children
   - Financial assistance
   - Navigation services
   - Legal support

7. **Quality Improvement**
   - Case review
   - Policy development
   - Training and development
   - SACWIS (data system) support

**Each Service Card:**
- Icon
- Title
- 2-3 sentence description
- "Learn More" link (if dedicated page exists)
- Contact information

---

### Resources Page (`/resources`)

**Purpose:** Organize and provide access to all downloadable resources, forms, links

**Layout:**
```
[Header]
[Hero]
[Audience Tabs/Filters]
[Resource Categories] - Accordion or cards
[Search Functionality]
[Footer]
```

**Resource Categories:**

1. **For Families**
   - Child care information
   - Financial assistance programs
   - Parenting resources
   - Community support services
   - Mental health resources

2. **For Foster/Adoptive Parents**
   - Required forms (ECODJFS forms)
   - Training materials and STRKS log-in
   - Foster/Adopt manuals
   - Monthly resource guides
   - Support group information

3. **For Mandated Reporters**
   - Reporting guidelines (PDF)
   - Training materials
   - Legal requirements
   - Ohio law references
   - Quick reference cards

4. **For Seniors & Caregivers**
   - Elder abuse information
   - Caregiver support resources
   - Community services
   - Legal resources

5. **Community Resources**
   - Help Me Grow - Erie County
   - Erie County Health Department
   - Serving Our Seniors
   - Ohio Benefits
   - Ohio Benefits Portal (child care)
   - Community Resource Guide (PDF)

6. **Forms & Documents**
   - Contact forms
   - Speaker request form
   - Foster care inquiry
   - Adoption inquiry
   - Resource documents (PDFs)

**Features:**
- Search/filter functionality
- Category tags
- Download icons for PDFs
- External link indicators
- "Most Popular" section
- Recently updated resources

---

### About Page (`/about`)

**Purpose:** Build trust through transparency about mission, values, and people

**Layout:**
```
[Header]
[Hero]
[Mission Statement]
[Our Values]
[What We Do]
[By the Numbers] - Impact statistics
[Leadership Team]
[Link to Staff Directory]
[Link to News & Events]
[Footer]
```

**Content:**
1. **Mission Statement**
   - Large, prominent display of current mission
   - "To serve as a first responder to reported allegations of child abuse & neglect, to investigate such reports in a timely manner and to provide appropriate protective services to children who are found to be abused and neglected in accordance with legal mandates."

2. **Our Values**
   - Child-centered
   - Family-focused
   - Community partnership
   - Cultural sensitivity
   - Accountability

3. **What We Do**
   - Overview of core functions
   - Service statistics
   - Service area map

4. **Impact By The Numbers**
   - Children served annually
   - Foster families active
   - Families receiving support
   - Successful reunifications
   - (Use placeholder numbers or real if available)

5. **Leadership & Staff**
   - Director profile
   - Link to full staff directory

---

### Staff Directory (`/about/staff` or `/contact/staff`)

**Purpose:** Provide transparency and direct contact to staff

**Layout:**
```
[Header]
[Hero]
[Department Filter/Tabs]
[Staff Grid/List]
[Footer]
```

**Departments:**
- Leadership
- Intake/Investigation
- Ongoing Services
- Programs
- Quality Improvement
- Foster Care/Adoption

**Staff Card:**
- Name
- Title
- Email (clickable)
- Phone (clickable)
- Photo (if available, otherwise initials)

**Features:**
- Search by name
- Filter by department
- Alphabetical sorting
- Mobile-friendly layout

---

### Contact Page (`/contact`)

**Purpose:** Multiple ways to reach the agency

**Layout:**
```
[Header]
[Hero]
[Split Layout]
  [Left: Contact Form] | [Right: Contact Information]
[Staff Directory Link]
[Office Hours & Location]
[Map]
[Footer]
```

**Components:**
1. **Contact Form**
   - Name (required)
   - Email (required)
   - Phone
   - Subject/Reason (dropdown)
   - Message (required)
   - Submit button

2. **Contact Information Card**
   - **Report Abuse or Neglect (24/7)**
     - 419-626-KIDS (419-626-5437)
     - Prominent, large text

   - **Main Office**
     - Erie County Children Services
     - 221 W Perkins St
     - Sandusky, OH 44870
     - Phone: 419-626-6781
     - Fax: [if available]

   - **Office Hours**
     - Monday - Friday: 8:00 AM - 4:30 PM
     - Closed holidays

   - **After Hours**
     - Emergency: Call 419-626-KIDS

3. **Staff Directory**
   - Link to full staff directory
   - "Contact a specific staff member"

4. **Request a Speaker**
   - Link to speaker request form
   - "Invite us to speak at your organization or school"

5. **Map**
   - Embedded Google Map of office location
   - Parking information
   - Accessibility information

---

## 5. Component Library

### Layout Components

#### Header
```typescript
// components/layout/Header.tsx
interface HeaderProps {
  transparent?: boolean;
}

Features:
- Logo (left)
- Main navigation (center/right)
- Emergency hotline (top bar or prominent in nav)
- Mobile hamburger menu
- Sticky/fixed positioning
- Search icon (optional)
```

#### Footer
```typescript
// components/layout/Footer.tsx

Sections:
- Quick links (columns)
  - Services
  - Resources
  - About
  - Contact
- Contact information
- Emergency hotline (repeated)
- Social media icons
- Accessibility statement
- Privacy policy
- Copyright
```

#### Navigation
```typescript
// components/layout/Navigation.tsx

Features:
- Responsive mega menu for "Services" and "Resources"
- Hover/focus states
- Active page indicator
- Keyboard navigation
- Mobile-friendly
```

---

### UI Components

#### Button
```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

Variants:
- primary: Blue background, white text (main actions)
- secondary: Green background, white text (positive actions)
- outline: Border with transparent bg
- ghost: No border, hover bg
- danger: Orange/red background (urgent actions)

States:
- Default
- Hover
- Focus (keyboard)
- Active/Pressed
- Disabled
- Loading (spinner)
```

#### Card
```typescript
// components/ui/Card.tsx
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  clickable?: boolean;
  children: React.ReactNode;
}

Features:
- Flexible container
- Optional shadow elevation
- Hover effects if clickable
- Responsive padding
```

#### Input
```typescript
// components/ui/Input.tsx
interface InputProps {
  type: 'text' | 'email' | 'tel' | 'number' | 'password';
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
}

Features:
- Floating labels or top labels
- Error states with messages
- Help text
- Required indicator (*)
- Accessible (aria-labels, aria-invalid, aria-describedby)
- Icon support (left/right)
```

#### Select
```typescript
// components/ui/Select.tsx
interface SelectProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  placeholder?: string;
}

Features:
- Custom styling
- Keyboard navigation
- Accessible (aria-labels)
- Mobile-friendly
```

#### Textarea
```typescript
// components/ui/Textarea.tsx
interface TextareaProps {
  label: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  showCharCount?: boolean;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

Features:
- Auto-resize option
- Character counter
- Error states
- Accessible
```

#### Alert
```typescript
// components/ui/Alert.tsx
interface AlertProps {
  type: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

Features:
- Color-coded by type
- Icon for each type
- Optional dismiss button
- Accessible (role="alert")
```

#### Badge
```typescript
// components/ui/Badge.tsx
interface BadgeProps {
  variant: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

Usage: Status indicators, tags, labels
```

#### Modal
```typescript
// components/ui/Modal.tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  footer?: React.ReactNode;
}

Features:
- Overlay with backdrop
- Click outside to close
- ESC key to close
- Focus trap
- Accessible (aria-modal, aria-labelledby)
- Smooth animations
```

#### Accordion
```typescript
// components/ui/Accordion.tsx
interface AccordionProps {
  items: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

Features:
- Expand/collapse animations
- Single or multiple open items
- Keyboard navigation
- Accessible (aria-expanded, role="region")
```

---

### Section Components

#### Hero
```typescript
// components/sections/Hero.tsx
interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  overlay?: boolean;
  height?: 'sm' | 'md' | 'lg' | 'full';
  children?: React.ReactNode; // For CTAs
}

Variants:
- HeroWithCTA (homepage)
- HeroSimple (internal pages)
- HeroWithForm (contact, reports)
```

#### CTA Section
```typescript
// components/sections/CTASection.tsx
interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  background?: 'default' | 'gradient' | 'image';
}

Usage: Conversion-focused sections throughout site
```

#### Service Card
```typescript
// components/sections/ServiceCard.tsx
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

Usage: Services overview, homepage service preview
```

#### Resource Card
```typescript
// components/sections/ResourceCard.tsx
interface ResourceCardProps {
  title: string;
  description: string;
  type: 'pdf' | 'link' | 'form';
  url: string;
  category?: string;
  tags?: string[];
}

Features:
- Download indicator for PDFs
- External link indicator
- Category badge
```

#### Staff Card
```typescript
// components/sections/StaffCard.tsx
interface StaffCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  photo?: string;
  department: string;
}

Features:
- Clickable email (mailto:)
- Clickable phone (tel:)
- Placeholder for missing photos (initials)
```

#### News Card
```typescript
// components/sections/NewsCard.tsx
interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  link: string;
}

Usage: News section, homepage news preview
```

---

### Form Components

#### Contact Form
```typescript
// components/forms/ContactForm.tsx

Fields:
- Full Name (required)
- Email (required, validated)
- Phone (optional, validated)
- Subject (dropdown)
- Message (required)

Submission: POST /api/forms/submit
Email: dustinschwanger@gmail.com
```

#### Child Abuse Report Form
```typescript
// components/forms/ChildAbuseReportForm.tsx

Multi-step form or single long form with sections
Fields: (as detailed in page specs above)

Features:
- Validation at each step
- Save progress (localStorage)
- Character counters
- Conditional fields
- Confirmation page after submit
```

#### Elder Abuse Report Form
```typescript
// components/forms/ElderAbuseReportForm.tsx

Similar structure to child abuse form
```

#### Foster Interest Form
```typescript
// components/forms/FosterInterestForm.tsx

Fields:
- Name (required)
- Email (required)
- Phone (required)
- Address (optional)
- Interested in: Foster / Adopt / Both
- Current living situation (dropdown)
- Do you have children? (yes/no, how many)
- Message/Questions (optional)
- Preferred contact method (email/phone)
- Best time to contact

Submission: Email with interest details
```

#### Speaker Request Form
```typescript
// components/forms/SpeakerRequestForm.tsx

Fields:
- Organization name
- Contact name
- Email
- Phone
- Event date
- Event type (school, community group, professional training, etc.)
- Expected attendance
- Topic of interest (dropdown)
- Additional details
```

---

### Chat Components

#### Chat Widget
```typescript
// components/chat/ChatWidget.tsx

Full chat system including:
- ChatButton: Floating button (bottom-right)
- ChatWindow: Slide-up modal window
- MessageList: Conversation display
- MessageInput: User input field

Features:
- Minimized state (just button)
- Expanded state (full chat window)
- Typing indicators
- Markdown support in responses
- Conversation history
- Context-aware responses using RAG
```

---

## 6. RAG Integration Plan

### Overview

Adapt the existing OMJEC RAG implementation for children services content. The system will provide:
- Context-aware answers to user questions
- 24/7 availability
- Reduced load on staff for common questions
- Accessibility from every page

### Architecture

```
User Question
    ↓
ChatWidget Component (Client)
    ↓
POST /api/chat (Server)
    ↓
1. Generate Embedding (OpenAI)
    ↓
2. Query Pinecone (Vector Search)
    ↓
3. Retrieve Top K Documents
    ↓
4. Build Context Prompt
    ↓
5. Send to GPT-4 (OpenAI)
    ↓
6. Stream Response Back
    ↓
7. Store Conversation (Supabase)
    ↓
User Sees Response
```

### Content to Vectorize

**Priority Content:**
1. All service descriptions
2. Foster care FAQs
3. Reporting guidelines
4. Contact information
5. Forms and requirements
6. Common questions and answers
7. Policy documents (summarized)
8. Resource descriptions

**Content Format:**
```typescript
interface Document {
  id: string;
  content: string;
  metadata: {
    type: 'service' | 'faq' | 'policy' | 'resource';
    title: string;
    url?: string;
    category: string;
    lastUpdated: string;
  };
}
```

### Embeddings Strategy

**Using OpenAI's text-embedding-ada-002:**
- Chunk documents into 500-1000 token segments
- Generate embeddings for each chunk
- Store in Pinecone with metadata
- Namespace: 'erie-county-children-services'

**Chunking Strategy:**
- Semantic chunking (by section/topic)
- Preserve context in metadata
- Overlap chunks by 50 tokens to maintain continuity

### Pinecone Setup

```typescript
// lib/rag/vectorStore.ts

import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

const index = pinecone.index('erie-county-children-services');

// Upsert documents
export async function upsertDocuments(documents: Document[]) {
  // Generate embeddings
  // Upsert to Pinecone
}

// Query
export async function queryDocuments(query: string, topK = 5) {
  // Generate query embedding
  // Search Pinecone
  // Return top K results with scores
}
```

### Chat Flow Implementation

```typescript
// app/api/chat/route.ts

import { OpenAI } from 'openai';
import { queryDocuments } from '@/lib/rag/vectorStore';

export async function POST(req: Request) {
  const { message, conversationId } = await req.json();

  // 1. Query vector store for relevant context
  const relevantDocs = await queryDocuments(message);

  // 2. Build context from retrieved documents
  const context = relevantDocs
    .map(doc => doc.content)
    .join('\n\n');

  // 3. Build prompt
  const systemPrompt = `You are a helpful assistant for Erie County Children Services.
  Use the following context to answer the user's question. If you cannot answer based
  on the context, say so and direct them to call 419-626-KIDS or visit the Contact page.

  Context:
  ${context}`;

  // 4. Get conversation history from Supabase
  const history = await getConversationHistory(conversationId);

  // 5. Call OpenAI
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: message },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  const response = completion.choices[0].message.content;

  // 6. Store conversation in Supabase
  await storeMessage(conversationId, message, response);

  return Response.json({ response, conversationId });
}
```

### Streaming Implementation

```typescript
// app/api/chat/stream/route.ts

export async function POST(req: Request) {
  // Similar setup to above

  const stream = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [...],
    stream: true,
  });

  // Create ReadableStream
  const encoder = new TextEncoder();
  const readableStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || '';
        controller.enqueue(encoder.encode(text));
      }
      controller.close();
    },
  });

  return new Response(readableStream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
```

### Supabase Schema

```sql
-- Conversations table
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  user_id TEXT, -- Optional, if we track users
  session_id TEXT -- Browser session
);

-- Messages table
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES conversations(id),
  role TEXT NOT NULL, -- 'user' or 'assistant'
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_messages_conversation ON messages(conversation_id);
```

### Chat Widget UI

```typescript
// components/chat/ChatWidget.tsx
'use client';

import { useState } from 'react';
import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <ChatWindow onClose={() => setIsOpen(false)} />
      ) : (
        <ChatButton onClick={() => setIsOpen(true)} />
      )}
    </div>
  );
}
```

```typescript
// components/chat/ChatWindow.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@/hooks/useChat';

export function ChatWindow({ onClose }: { onClose: () => void }) {
  const { messages, sendMessage, isLoading } = useChat();
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    await sendMessage(input);
    setInput('');
  };

  return (
    <div className="w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col">
      {/* Header */}
      <div className="bg-primary-blue text-white p-4 rounded-t-lg flex items-center justify-between">
        <h3 className="font-semibold">Chat with Us</h3>
        <button onClick={onClose} aria-label="Close chat">×</button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
        {isLoading && <TypingIndicator />}
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a question..."
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-blue-dark"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
```

### Custom Hook

```typescript
// hooks/useChat.ts
'use client';

import { useState, useCallback } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    setIsLoading(true);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content, conversationId }),
      });

      const data = await response.json();

      // Add assistant response
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);

      // Store conversation ID
      if (data.conversationId) {
        setConversationId(data.conversationId);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or call 419-626-KIDS.'
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [conversationId]);

  return { messages, sendMessage, isLoading };
}
```

### System Prompts

```typescript
// lib/rag/prompts.ts

export const SYSTEM_PROMPT = `You are a helpful, empathetic assistant for Erie County Children Services.

Your role:
- Answer questions about services, foster care, reporting abuse, and resources
- Be warm, professional, and supportive
- Prioritize child safety and family wellbeing
- Direct urgent matters to the 24/7 hotline: 419-626-KIDS (419-626-5437)

Guidelines:
- Use the provided context to answer questions accurately
- If you don't know something, admit it and provide contact information
- Never give legal advice or diagnose situations
- Encourage reporting suspected abuse - emphasize "when in doubt, report"
- Be sensitive to trauma and crisis situations
- Keep responses concise (2-3 paragraphs max)

For emergencies or suspected abuse: Always direct to 419-626-KIDS immediately.`;

export const buildContextPrompt = (context: string, question: string) => `
Context from our knowledge base:
${context}

User question: ${question}

Please provide a helpful response based on the context above. If the context doesn't
contain relevant information, politely let the user know and direct them to:
- Call: 419-626-KIDS (24/7 hotline)
- Visit: /contact page
- Email: [contact email]
`;
```

### Adaptation from OMJEC

**Key differences to adapt:**
1. **Content domain**: Jobs/employment → Children services
2. **Tone**: Professional/informative → Empathetic/supportive
3. **Urgency**: Job search → Life safety (abuse reporting)
4. **Audience**: Job seekers → Multiple (families, foster parents, reporters)

**What to reuse:**
- Vector store setup
- OpenAI integration
- Supabase schema
- Chat UI components
- Streaming implementation
- Error handling

**What to customize:**
- System prompts (empathy, safety-focus)
- Content chunks (services, not jobs)
- Response templates
- Quick actions (report abuse vs. apply)
- Conversation topics (tracking, analytics)

---

## 7. Form Strategy

### Overview

All forms will:
1. Use React Hook Form for state management
2. Validate with Zod schemas
3. Show real-time validation feedback
4. Be fully accessible (WCAG AA)
5. Submit to API route → send email to dustinschwanger@gmail.com
6. Display confirmation page/modal after successful submission
7. Handle errors gracefully

### Form List

1. **Contact Form** - General inquiries
2. **Child Abuse Report Form** - Detailed child abuse reporting
3. **Elder Abuse Report Form** - Detailed elder abuse reporting
4. **Foster Care Interest Form** - Initial inquiry
5. **Speaker Request Form** - Request speaker for event

### Validation Strategy

Using Zod for schema validation:

```typescript
// lib/validations.ts

import { z } from 'zod';

// Contact Form
export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Child Abuse Report Form
export const childAbuseReportSchema = z.object({
  // Reporter info (optional)
  reporterName: z.string().optional(),
  reporterPhone: z.string().optional(),
  reporterEmail: z.string().email().optional().or(z.literal('')),
  reporterAddress: z.string().optional(),
  reporterRelationship: z.string().optional(),

  // Child info (required)
  childName: z.string().min(2, 'Child name is required'),
  childDOB: z.string().optional(),
  childAge: z.string().optional(),
  childAddress: z.string().min(5, 'Child address is required'),
  childSchool: z.string().optional(),

  // Family info
  parentNames: z.string().optional(),
  familyAddress: z.string().optional(),
  familyPhone: z.string().optional(),
  householdMembers: z.string().optional(),

  // Concern details (required)
  abuseType: z.array(z.string()).min(1, 'Select at least one type of abuse'),
  description: z.string().min(50, 'Please provide a detailed description (minimum 50 characters)'),
  whenOccurred: z.string().optional(),
  injuries: z.string().optional(),
  immediateDanger: z.enum(['yes', 'no', 'unknown']),
  reportedBefore: z.enum(['yes', 'no', 'unknown']),
  substanceAbuse: z.enum(['yes', 'no', 'unknown']),

  // Additional info
  otherAgencies: z.string().optional(),
  otherChildrenAtRisk: z.string().optional(),
  additionalComments: z.string().optional(),
});

export type ChildAbuseReportData = z.infer<typeof childAbuseReportSchema>;

// Similar schemas for other forms...
```

### Form Component Pattern

```typescript
// components/forms/ContactForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Alert } from '@/components/ui/Alert';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact', data }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus === 'success' && (
        <Alert
          type="success"
          message="Thank you! We'll get back to you within 2 business days."
          dismissible
          onDismiss={() => setSubmitStatus('idle')}
        />
      )}

      {submitStatus === 'error' && (
        <Alert
          type="error"
          message="Something went wrong. Please try again or call 419-626-6781."
          dismissible
          onDismiss={() => setSubmitStatus('idle')}
        />
      )}

      <Input
        label="Full Name"
        type="text"
        required
        error={errors.fullName?.message}
        {...register('fullName')}
      />

      <Input
        label="Email Address"
        type="email"
        required
        error={errors.email?.message}
        {...register('email')}
      />

      <Input
        label="Phone Number"
        type="tel"
        error={errors.phone?.message}
        {...register('phone')}
      />

      <Select
        label="Subject"
        required
        error={errors.subject?.message}
        options={[
          { value: 'general', label: 'General Inquiry' },
          { value: 'services', label: 'Question About Services' },
          { value: 'foster', label: 'Foster/Adoption Information' },
          { value: 'resources', label: 'Resources Question' },
          { value: 'feedback', label: 'Feedback' },
          { value: 'other', label: 'Other' },
        ]}
        {...register('subject')}
      />

      <Textarea
        label="Message"
        required
        rows={6}
        error={errors.message?.message}
        {...register('message')}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        Send Message
      </Button>
    </form>
  );
}
```

### API Route for Form Submission

```typescript
// app/api/forms/submit/route.ts

import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import {
  contactFormSchema,
  childAbuseReportSchema,
  // ... other schemas
} from '@/lib/validations';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, data } = body;

    // Validate based on form type
    let validatedData;
    switch (formType) {
      case 'contact':
        validatedData = contactFormSchema.parse(data);
        break;
      case 'child-abuse-report':
        validatedData = childAbuseReportSchema.parse(data);
        break;
      // ... other form types
      default:
        return NextResponse.json(
          { error: 'Invalid form type' },
          { status: 400 }
        );
    }

    // Send email
    await sendEmail({
      to: 'dustinschwanger@gmail.com',
      subject: `[ECCS] ${formType} - ${new Date().toLocaleDateString()}`,
      data: validatedData,
      formType,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
```

### Email Sending Implementation

```typescript
// lib/email.ts

import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { ContactFormEmail } from '@/emails/ContactFormEmail';
import { ChildAbuseReportEmail } from '@/emails/ChildAbuseReportEmail';

// Create transporter (configure based on email service)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface SendEmailParams {
  to: string;
  subject: string;
  data: any;
  formType: string;
}

export async function sendEmail({ to, subject, data, formType }: SendEmailParams) {
  let emailHtml;

  // Render appropriate email template
  switch (formType) {
    case 'contact':
      emailHtml = render(<ContactFormEmail data={data} />);
      break;
    case 'child-abuse-report':
      emailHtml = render(<ChildAbuseReportEmail data={data} />);
      break;
    // ... other templates
    default:
      emailHtml = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  }

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'noreply@eriecountychildrenservices.org',
    to,
    subject,
    html: emailHtml,
  });
}
```

### Email Templates (React Email)

```typescript
// emails/ContactFormEmail.tsx

import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Section,
} from '@react-email/components';

interface ContactFormEmailProps {
  data: {
    fullName: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  };
}

export function ContactFormEmail({ data }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'sans-serif', backgroundColor: '#f5f5f5' }}>
        <Container style={{ backgroundColor: 'white', padding: '20px', margin: '20px auto' }}>
          <Heading>New Contact Form Submission</Heading>

          <Section>
            <Text><strong>Name:</strong> {data.fullName}</Text>
            <Text><strong>Email:</strong> {data.email}</Text>
            {data.phone && <Text><strong>Phone:</strong> {data.phone}</Text>}
            <Text><strong>Subject:</strong> {data.subject}</Text>
          </Section>

          <Hr />

          <Section>
            <Text><strong>Message:</strong></Text>
            <Text style={{ whiteSpace: 'pre-wrap' }}>{data.message}</Text>
          </Section>

          <Hr />

          <Text style={{ color: '#666', fontSize: '12px' }}>
            Submitted: {new Date().toLocaleString()}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
```

### Form Accessibility Checklist

For each form:
- ✓ Proper label associations (htmlFor/id)
- ✓ Required fields marked (aria-required)
- ✓ Error messages linked (aria-describedby)
- ✓ Invalid fields marked (aria-invalid)
- ✓ Keyboard navigation (tab order, enter to submit)
- ✓ Focus management (first error on submit)
- ✓ Clear instructions
- ✓ Success/error announcements (aria-live)
- ✓ Visible focus indicators
- ✓ Sufficient color contrast
- ✓ Mobile-friendly (large touch targets)

---

## 8. Accessibility Strategy

### Goals
- WCAG 2.1 Level AA compliance minimum
- ARIA best practices
- Keyboard navigation
- Screen reader friendly
- Color contrast compliance
- Mobile accessibility

### Color Contrast

**Requirements:**
- Normal text: 4.5:1 contrast ratio
- Large text (18pt+): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

**Audit Strategy:**
- Use WebAIM contrast checker during design
- Test all color combinations
- Ensure sufficient contrast for:
  - Text on backgrounds
  - Links in body text
  - Form labels and inputs
  - Button text
  - Error messages
  - Disabled states

### Semantic HTML

```html
<!-- Use proper HTML5 semantic elements -->
<header>
<nav>
<main>
  <article>
  <section>
  <aside>
<footer>

<!-- Proper heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection</h3>

<!-- Lists for navigation and content groups -->
<ul>, <ol>, <li>

<!-- Forms with proper structure -->
<form>
  <fieldset>
    <legend>
    <label>
    <input>
```

### ARIA Labels & Roles

```typescript
// Navigation
<nav aria-label="Main navigation">
<nav aria-label="Footer navigation">

// Landmarks
<main id="main-content">
<aside aria-label="Sidebar">

// Buttons
<button aria-label="Open menu">
<button aria-expanded={isOpen} aria-controls="menu">

// Forms
<input aria-required="true" aria-invalid={hasError} aria-describedby="error-msg">
<span id="error-msg" role="alert">{errorMessage}</span>

// Modals
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">

// Live regions
<div aria-live="polite" aria-atomic="true">
```

### Keyboard Navigation

**Requirements:**
- All interactive elements accessible via Tab
- Logical tab order (DOM order)
- Visible focus indicators
- Enter/Space to activate buttons
- Escape to close modals/menus
- Arrow keys for menus/carousels

**Focus Management:**
```typescript
// Skip to main content
<a href="#main-content" className="skip-link">
  Skip to main content
</a>

// Focus trap in modals
import { useFocusTrap } from '@/hooks/useFocusTrap';

function Modal() {
  const ref = useFocusTrap();
  return <div ref={ref}>...</div>;
}

// Manage focus on route changes
useEffect(() => {
  document.getElementById('main-content')?.focus();
}, [pathname]);
```

### Screen Reader Considerations

1. **Descriptive Links**
   - Avoid "click here" or "read more"
   - Use descriptive text: "Learn about foster care requirements"

2. **Alt Text for Images**
   - Decorative images: `alt=""`
   - Informative images: descriptive alt text
   - Complex images: longer description via aria-describedby

3. **Form Instructions**
   - Clear, upfront instructions
   - Error messages linked to fields
   - Success confirmations announced

4. **Dynamic Content**
   - Use aria-live for updates
   - Announce loading states
   - Confirm actions (form submit, etc.)

### Mobile Accessibility

1. **Touch Targets**
   - Minimum 44x44px (iOS) / 48x48px (Android)
   - Adequate spacing between interactive elements

2. **Viewport Settings**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
   ```

3. **Orientation**
   - Support both portrait and landscape
   - No orientation lock

4. **Motion**
   - Respect prefers-reduced-motion
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

### Testing Strategy

**Automated Testing:**
- Lighthouse accessibility audit
- axe DevTools
- WAVE browser extension
- pa11y CI in build process

**Manual Testing:**
- Keyboard-only navigation
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Zoom to 200%
- Color blindness simulation
- Mobile device testing

**Checklist per component:**
- [ ] Proper semantic HTML
- [ ] ARIA attributes where needed
- [ ] Keyboard accessible
- [ ] Focus visible
- [ ] Color contrast compliant
- [ ] Screen reader tested
- [ ] Mobile tested

---

## 9. Performance Plan

### Goals
- Lighthouse score 90+ (all metrics)
- First Contentful Paint < 1.8s
- Largest Contentful Paint < 2.5s
- Time to Interactive < 3.8s
- Cumulative Layout Shift < 0.1

### Image Optimization

**Strategy:**
1. Use Next.js Image component for all images
2. Serve WebP with JPEG fallback
3. Proper sizing (srcset/sizes)
4. Lazy loading (except above fold)
5. Blur placeholder for hero images

```typescript
// components/OptimizedImage.tsx
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={85}
      placeholder="blur"
      blurDataURL={`/_next/image?url=${src}&w=16&q=1`}
      className={className}
    />
  );
}
```

**Image Guidelines:**
- Hero images: 1920x1080, quality 85
- Thumbnails: 400x300
- Staff photos: 200x200
- Icons: SVG where possible
- Compress with ImageOptim or Squoosh

### Font Optimization

**Strategy:**
1. Use next/font for automatic optimization
2. Preload critical fonts
3. Font subsetting (Latin only)
4. Display swap for fallback

```typescript
// app/layout.tsx
import { Inter, Lexend } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### Code Splitting

**Automatic (Next.js App Router):**
- Each route is automatically split
- Shared components bundled separately
- Dynamic imports for heavy components

**Manual Dynamic Imports:**
```typescript
// Lazy load chat widget
import dynamic from 'next/dynamic';

const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), {
  ssr: false,
  loading: () => <div>Loading chat...</div>,
});

// Lazy load charts/heavy UI
const DataVisualization = dynamic(
  () => import('@/components/DataVisualization'),
  { ssr: false }
);
```

### React Server Components

**Strategy:**
- Default to Server Components
- Client Components only when needed:
  - User interactions (onClick, onChange)
  - Browser APIs (localStorage, window)
  - State (useState, useContext)
  - Effects (useEffect)

```typescript
// Server Component (default)
// app/services/page.tsx
export default function ServicesPage() {
  const services = getServices(); // Can be async

  return (
    <div>
      {services.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}

// Client Component (when needed)
// components/forms/ContactForm.tsx
'use client';

export function ContactForm() {
  const [formData, setFormData] = useState({});
  // ... interactive logic
}
```

### Caching Strategy

**Static Generation (default):**
- All pages except forms, chat
- Regenerate on deploy

**Dynamic Rendering:**
- Chat interface
- Form submission pages
- Search results (if implemented)

**API Route Caching:**
```typescript
// Cache static data
export const revalidate = 3600; // 1 hour

// Or no caching for dynamic data
export const dynamic = 'force-dynamic';
```

### Third-Party Scripts

**Strategy:**
- Minimal third-party scripts
- Load non-critical scripts with next/script
- Defer/async where possible

```typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}

        {/* Analytics (if used) */}
        <Script
          src="https://analytics.example.com/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
```

### Bundle Analysis

**Setup:**
```bash
npm install @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // ... config
});

# Run analysis
ANALYZE=true npm run build
```

**Optimization Targets:**
- Total bundle < 200KB gzipped
- No duplicate dependencies
- Tree-shake unused code
- Code split large libraries

### Performance Monitoring

**Lighthouse CI:**
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: npx lighthouse-ci autorun
```

**Real User Monitoring:**
- Next.js built-in Web Vitals
- Optional: Vercel Analytics or similar

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 10. Deployment Checklist

### Railway Setup

**Prerequisites:**
1. Railway account
2. GitHub repository
3. Environment variables configured

**Steps:**
1. **Create New Project**
   - Connect GitHub repository
   - Select main branch
   - Auto-deploy on push

2. **Configure Build Settings**
   ```
   Build Command: npm run build
   Start Command: npm start
   ```

3. **Environment Variables**
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://eriecountychildrenservices.org

   # Email
   EMAIL_HOST=smtp.example.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-password
   EMAIL_FROM=noreply@eriecountychildrenservices.org
   EMAIL_TO=dustinschwanger@gmail.com

   # OpenAI
   OPENAI_API_KEY=sk-...

   # Pinecone
   PINECONE_API_KEY=...
   PINECONE_ENVIRONMENT=us-west1-gcp
   PINECONE_INDEX=erie-county-children-services

   # Supabase
   SUPABASE_URL=https://....supabase.co
   SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_KEY=...

   # Optional: Analytics
   NEXT_PUBLIC_GA_ID=G-...
   ```

4. **Custom Domain**
   - Add custom domain in Railway
   - Update DNS records (A/CNAME)
   - SSL automatically provisioned

5. **Database (if needed)**
   - Add Postgres plugin in Railway
   - Connection string auto-added to env vars

### Pre-Deployment Checklist

**Code Quality:**
- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Prettier formatting applied
- [ ] No console.logs in production code
- [ ] Error boundaries implemented

**Functionality:**
- [ ] All forms tested and submitting
- [ ] Email delivery confirmed
- [ ] Chat widget functional
- [ ] All links working (no 404s)
- [ ] Mobile responsive on all pages
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)

**Content:**
- [ ] All copy proofread
- [ ] Contact information accurate
- [ ] Staff directory up to date
- [ ] All images optimized
- [ ] Alt text for all images
- [ ] Meta descriptions for all pages

**Performance:**
- [ ] Lighthouse score 90+ on all pages
- [ ] Images optimized and properly sized
- [ ] No render-blocking resources
- [ ] Bundle size under target
- [ ] No memory leaks

**Accessibility:**
- [ ] WCAG AA compliance verified
- [ ] Keyboard navigation tested
- [ ] Screen reader tested
- [ ] Color contrast verified
- [ ] Focus management working
- [ ] Skip links functional

**Security:**
- [ ] No API keys in client-side code
- [ ] Environment variables configured
- [ ] Form validation on server and client
- [ ] CSRF protection (if needed)
- [ ] Rate limiting on API routes (if needed)
- [ ] Security headers configured

**SEO:**
- [ ] Meta tags on all pages
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Open Graph tags
- [ ] Schema.org markup (organization, contact)
- [ ] Google Analytics (if using)

### Post-Deployment Steps

1. **DNS Configuration**
   - Point domain to Railway
   - Wait for propagation (up to 48 hours)
   - Verify SSL certificate

2. **Email Setup**
   - Configure SMTP provider
   - Test email delivery
   - Add SPF/DKIM records for deliverability

3. **RAG System**
   - Upload content to Pinecone
   - Test chat functionality
   - Monitor API usage

4. **Monitoring**
   - Set up error tracking (Sentry)
   - Monitor Railway metrics
   - Check Web Vitals

5. **Google Services**
   - Submit sitemap to Google Search Console
   - Set up Google Analytics (optional)
   - Verify Google Business Profile

6. **Testing**
   - Full UAT on production
   - Test from multiple devices/networks
   - Verify form emails arrive

### Rollback Plan

**If issues arise:**
1. Railway allows instant rollback to previous deployment
2. Revert GitHub commit and push
3. Contact info (phone) always prominently displayed as backup

### Maintenance Plan

**Weekly:**
- Monitor form submissions
- Check error logs
- Review analytics

**Monthly:**
- Update dependencies
- Review and update content
- Check broken links
- Performance audit

**Quarterly:**
- Accessibility audit
- Security review
- Content refresh
- User feedback review

---

## Implementation Timeline

### Phase 1: Foundation (Week 1-2)
1. ✓ Project setup and architecture planning
2. ✓ Design system and component library
3. Repository setup
4. Next.js project initialization
5. Tailwind configuration
6. Base layout components (Header, Footer)

### Phase 2: Core Pages (Week 3-4)
1. Homepage
2. Report Abuse landing
3. Report forms (child and elder)
4. Services overview
5. Contact page

### Phase 3: Foster Care & Resources (Week 5)
1. Foster & Adoption section
2. Resources page
3. About page
4. Staff directory

### Phase 4: RAG Integration (Week 6)
1. Review OMJEC implementation
2. Adapt for children services
3. Set up Pinecone and vectorize content
4. Implement chat UI
5. Test and refine

### Phase 5: Forms & Functionality (Week 7)
1. All forms implementation
2. Email integration
3. Validation testing
4. User flow testing

### Phase 6: Polish & Deploy (Week 8)
1. Accessibility audit
2. Performance optimization
3. Cross-browser testing
4. Railway deployment
5. Final UAT
6. Launch

---

## Success Metrics

**Quantitative:**
- Lighthouse performance score > 90
- WCAG AA compliance 100%
- Page load time < 2 seconds
- Mobile usability score 100%
- Zero critical accessibility issues
- Form completion rate > 60%

**Qualitative:**
- Positive user feedback
- Staff satisfaction with functionality
- Reduced support calls for common questions (via chat)
- Clear navigation and information hierarchy
- Professional, trustworthy appearance

---

## Questions & Decisions Needed

Before starting implementation, confirm:

1. **Content Priorities**: Any specific pages/features to prioritize first?
2. **Branding**: Any existing brand guidelines or logos to incorporate?
3. **Photography**: Will new photography be provided, or use stock images?
4. **Staff Buy-in**: Has the team reviewed and approved this direction?
5. **Analytics**: Do you want Google Analytics or other tracking?
6. **Social Media**: Should we include social media links? Which platforms?
7. **Languages**: English-only or multilingual (Spanish)?
8. **News/Events**: Will this be manually updated or need a CMS later?

---

## Next Steps

Ready to begin? I recommend:

1. **Start with Phase 1**: Set up the project structure and design system
2. **Build incrementally**: One page at a time with your review
3. **Test continuously**: Accessibility and performance from day one
4. **Iterate based on feedback**: Your input throughout the process

Let me know when you're ready to proceed, and we'll start building!
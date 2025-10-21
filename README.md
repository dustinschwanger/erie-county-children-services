# Erie County Children Services Website

Modern, accessible website for Erie County Children Services built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies (already done)
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## ✅ Phase 1: Foundation - COMPLETED

### What's Been Built

1. **Project Setup**
   - ✅ Next.js 14 with App Router
   - ✅ TypeScript configuration
   - ✅ Tailwind CSS with custom design system
   - ✅ ESLint and code formatting

2. **Design System**
   - ✅ Custom color palette (Blue, Green, Orange, Purple, Warm neutrals)
   - ✅ Typography system (Inter + Lexend fonts)
   - ✅ Spacing and layout utilities
   - ✅ Responsive breakpoints
   - ✅ Accessibility-first CSS

3. **UI Component Library**
   - ✅ Button (5 variants: primary, secondary, outline, ghost, danger)
   - ✅ Card (3 variants: default, elevated, outlined)
   - ✅ Input (with labels, errors, help text, icons)
   - ✅ Textarea (with character counter)
   - ✅ Select (with custom styling)
   - ✅ Alert (4 types: success, warning, error, info)

4. **Layout Components**
   - ✅ Emergency Banner (24/7 hotline - always visible)
   - ✅ Header with logo and navigation
   - ✅ Desktop Navigation
   - ✅ Mobile Menu (full-screen overlay)
   - ✅ Footer (contact info, quick links, mission)

5. **Homepage**
   - ✅ Hero section with primary CTAs
   - ✅ Critical Actions cards (Report Abuse, Foster Care)
   - ✅ Services Overview (4 service cards)
   - ✅ Quick Resources (by audience type)
   - ✅ Call-to-Action section

6. **Utilities & Constants**
   - ✅ Design utility functions (cn, formatPhone, etc.)
   - ✅ Site-wide constants (contact info, nav items, services)
   - ✅ Type-safe configuration

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Tailwind + custom styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── layout/              # Header, Footer, Navigation, etc.
│   ├── ui/                  # Reusable UI components
│   ├── forms/               # Form components (to be built)
│   ├── sections/            # Page sections (to be built)
│   └── chat/                # Chat widget (to be built)
├── lib/
│   ├── utils.ts             # Utility functions
│   └── constants.ts         # Site constants
├── types/                   # TypeScript types
├── data/                    # Content data
└── public/                  # Static assets
```

## 🎨 Design System

### Colors

- **Primary Blue** (#2563eb): Main actions, navigation, links
- **Primary Green** (#059669): Success states, positive CTAs
- **Accent Orange** (#ea580c): Report abuse, urgent actions
- **Accent Purple** (#7c3aed): Foster/adoption CTAs
- **Neutral Warm** (#fef3c7): Hero backgrounds, warm sections

### Typography

- **Display Font**: Lexend (headings, brand)
- **Body Font**: Inter (all text)
- **Scale**: 12px to 60px with responsive sizing

### Components

All components are:
- ✅ Fully accessible (WCAG AA)
- ✅ Keyboard navigable
- ✅ Screen reader friendly
- ✅ Mobile responsive
- ✅ TypeScript typed

## 🌐 Current Status

**Site is live at:** http://localhost:3000

### What You Can See Now

1. **Emergency banner** with 24/7 hotline (orange, always visible)
2. **Header** with logo and navigation (desktop + mobile)
3. **Homepage** with:
   - Hero section with main CTAs
   - Report Abuse and Foster Parent cards
   - 4 service overview cards
   - Quick resources by audience
   - Call-to-action section
4. **Footer** with contact info and links
5. **Responsive design** (try resizing your browser)

## 📋 Next Steps (Phase 2)

### Immediate Priorities

1. **Report Abuse Pages**
   - Landing page (/report-abuse)
   - Child abuse report form
   - Elder abuse report form
   - Process explanation page

2. **Foster & Adoption Section**
   - Overview page
   - Requirements page
   - Interest form

3. **Services Pages**
   - Services overview
   - Individual service pages

4. **Resources Page**
   - Organized by audience
   - Downloadable PDFs
   - External links

5. **Contact Page**
   - Contact form
   - Staff directory
   - Office information

## 🔧 Technical Features

- **Server Components** by default (better performance)
- **Client Components** only where needed (forms, interactive UI)
- **Optimized fonts** (next/font with automatic optimization)
- **SEO ready** (metadata, semantic HTML)
- **Accessibility** (skip links, ARIA labels, keyboard nav)
- **Mobile-first** responsive design

## 📝 Key Constants

All site-wide information is centralized in `lib/constants.ts`:

- Emergency hotline: **419-626-KIDS (419-626-5437)**
- Main office: **419-626-6781**
- Address: **221 W Perkins St, Sandusky, OH 44870**
- Office hours: **Monday-Friday, 8:00 AM - 4:30 PM**

## 🎯 Design Goals (Being Met)

✅ Modern, clean, professional
✅ Warm and approachable
✅ Critical actions immediately obvious
✅ Accessibility-first (WCAG AA)
✅ Mobile-first, responsive
✅ Clear visual hierarchy
✅ Fast performance

## 📚 Documentation

- See `IMPLEMENTATION_PLAN.md` for comprehensive 10-phase plan
- All components are documented with TypeScript interfaces
- Code is commented for clarity

## 🚧 Coming Soon

- Report Abuse forms
- Foster Care pages
- Services detail pages
- Resources section
- Contact form
- RAG Chat widget
- Email integration
- Railway deployment

---

**Questions?** Review the IMPLEMENTATION_PLAN.md for detailed specifications.

**Ready to continue?** Let's build the Report Abuse section next!

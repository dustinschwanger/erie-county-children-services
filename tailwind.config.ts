import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: {
            DEFAULT: '#2563eb',
            light: '#3b82f6',
            dark: '#1e40af',
          },
          green: {
            DEFAULT: '#059669',
            light: '#10b981',
            dark: '#047857',
          },
        },
        accent: {
          orange: {
            DEFAULT: '#ea580c',
            light: '#f97316',
            dark: '#c2410c',
          },
          purple: {
            DEFAULT: '#7c3aed',
            light: '#8b5cf6',
            dark: '#6d28d9',
          },
        },
        neutral: {
          warm: {
            DEFAULT: '#fef3c7',
            mid: '#fde68a',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-lexend)', 'var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

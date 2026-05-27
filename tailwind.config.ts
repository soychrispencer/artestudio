import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8325fd',
        'primary-dark': '#6b1dc9',
        'primary-light': '#a855ff',
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        'card-hover': 'var(--card-hover)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        muted: 'var(--muted)',
        'muted-light': 'var(--muted-light)',
        dark: {
          bg: '#0f0f0f',
          'bg-secondary': '#1a1a1a',
          'bg-tertiary': '#2a2a2a',
          text: '#ffffff',
          'text-secondary': '#b0b0b0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8325fd 0%, #a855ff 100%)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        accent: 'var(--border-accent)',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.04)',
        medium: '0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
}
export default config

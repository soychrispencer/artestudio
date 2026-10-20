import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--ink)',
        'primary-dark': '#000000',
        'primary-light': 'var(--muted-light)',
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        'card-hover': 'var(--card-hover)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        muted: 'var(--muted)',
        'muted-light': 'var(--muted-light)',
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        field: 'var(--field)',
        line: 'var(--border)',
        'line-strong': 'var(--line-strong)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--ink) 0%, #404040 100%)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        accent: 'var(--border-accent)',
        line: 'var(--border)',
        'line-strong': 'var(--line-strong)',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(17, 17, 17, 0.04)',
        medium: '0 8px 24px rgba(17, 17, 17, 0.06)',
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
}
export default config

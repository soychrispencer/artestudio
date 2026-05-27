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
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        'card-hover': 'var(--card-hover)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        muted: 'var(--muted)',
        'muted-light': 'var(--muted-light)',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        dm: ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        accent: 'var(--border-accent)',
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
}
export default config

'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'tabler-icons-react'
import { getStoredTheme, setTheme, type Theme } from '@/components/providers/ThemeProvider'

export function ThemeToggle({ className }: { className?: string } = {}) {
  const [mounted, setMounted] = useState(false)
  const [theme, setCurrentTheme] = useState<Theme>('light')

  useEffect(() => {
    setMounted(true)
    setCurrentTheme(getStoredTheme())
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setCurrentTheme(next)
    setTheme(next)
  }

  if (!mounted) {
    return (
      <button
        type="button"
        className={`inline-flex h-10 w-10 items-center justify-center rounded-[10px] opacity-0 pointer-events-none ${
          className || 'border border-[var(--border)] bg-surface text-[var(--text)]'
        }`}
        aria-hidden="true"
        tabIndex={-1}
      >
        <span className="h-4 w-4" />
      </button>
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={
        className ||
        'inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--border)] bg-surface text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]'
      }
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}

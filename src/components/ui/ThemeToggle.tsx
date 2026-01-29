'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'tabler-icons-react'

export function ThemeToggle({ isScrolled = false }: { isScrolled?: boolean }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 flex-shrink-0 ${
        isScrolled
          ? 'bg-gray-100 dark:bg-dark-bg-secondary hover:bg-gray-200 dark:hover:bg-dark-bg-tertiary'
          : 'bg-white/20 hover:bg-white/30 border border-white/30'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className={`w-5 h-5 ${isScrolled ? 'text-gray-600 dark:text-gray-400' : 'text-white'}`} />
      ) : (
        <Moon className={`w-5 h-5 ${isScrolled ? 'text-gray-600 dark:text-gray-400' : 'text-white'}`} />
      )}
    </button>
  )
}

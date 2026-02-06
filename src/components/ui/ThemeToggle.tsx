'use client'

import { useTheme } from 'next-themes'
import { useMemo } from 'react'
import { Sun, Moon } from 'tabler-icons-react'

export function ThemeToggle({ isScrolled = false }: { isScrolled?: boolean }) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const isDark = useMemo(() => {
    const activeTheme = resolvedTheme ?? theme
    return activeTheme === 'dark'
  }, [resolvedTheme, theme])

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 flex-shrink-0 border ${
        isScrolled
          ? 'bg-gray-100 dark:bg-dark-bg-secondary hover:bg-gray-200 dark:hover:bg-dark-bg-tertiary border-gray-200 dark:border-white/10'
          : 'bg-white/80 dark:bg-dark-bg-secondary/80 hover:bg-white dark:hover:bg-dark-bg-tertiary border-gray-200/60 dark:border-white/10'
      }`}
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      {isDark ? (
        <Sun
          key="sun"
          className={`w-5 h-5 animate-rotate-in ${
            isScrolled ? 'text-gray-600 dark:text-gray-400' : 'text-gray-700 dark:text-white'
          }`}
        />
      ) : (
        <Moon
          key="moon"
          className={`w-5 h-5 animate-rotate-in ${
            isScrolled ? 'text-gray-600 dark:text-gray-400' : 'text-gray-700 dark:text-white'
          }`}
        />
      )}
    </button>
  )
}

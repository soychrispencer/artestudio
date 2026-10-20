'use client'

import { useEffect, type ReactNode } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'artestudio-theme-v2'

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#0f0f0f' : '#fafafa')
}

export function getStoredTheme(): Theme {
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return 'dark'
}

export function setTheme(theme: Theme) {
  window.localStorage.setItem(STORAGE_KEY, theme)
  applyTheme(theme)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyTheme(getStoredTheme())
  }, [])

  return <>{children}</>
}

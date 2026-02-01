'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed top-8 right-8 z-50 p-3 rounded-xl backdrop-blur-xl bg-card/60 border border-border/50 shadow-lg">
        <div className="w-5 h-5" />
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-8 right-8 z-50 group p-3 rounded-xl backdrop-blur-xl bg-card/60 border border-border/50 hover:bg-card/80 hover:border-border transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
      )}
    </button>
  )
}

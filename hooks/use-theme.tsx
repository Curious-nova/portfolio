"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useTheme as useNextTheme } from "next-themes"

type ColorTheme = "blue" | "red" | "green" | "purple" | "orange" | "pink"

interface ThemeContextType {
  colorTheme: ColorTheme
  setColorTheme: (theme: ColorTheme) => void
  theme: string | undefined
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useNextTheme()
  const [colorTheme, setColorTheme] = useState<ColorTheme>("blue")

  useEffect(() => {
    const savedColorTheme = localStorage.getItem("color-theme") as ColorTheme
    if (savedColorTheme) {
      setColorTheme(savedColorTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("color-theme", colorTheme)
    document.documentElement.className = document.documentElement.className.replace(/theme-\w+/g, "").trim()
    document.documentElement.classList.add(`theme-${colorTheme}`)
  }, [colorTheme])

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme, theme, setTheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

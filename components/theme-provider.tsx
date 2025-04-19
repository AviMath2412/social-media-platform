"use client"

import { useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Add a class to prevent transition flicker during theme change
  useEffect(() => {
    const html = document.documentElement

    // Add no-transition class to prevent animations on page load
    html.classList.add("no-transition")

    // Remove it after a short delay
    setTimeout(() => {
      html.classList.remove("no-transition")
    }, 100)

    const handleThemeChange = () => {
      html.classList.add("transitioning")
      setTimeout(() => {
        html.classList.remove("transitioning")
      }, 100)
    }

    window.addEventListener("themechange", handleThemeChange)

    return () => {
      window.removeEventListener("themechange", handleThemeChange)
    }
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

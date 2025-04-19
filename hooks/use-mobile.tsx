"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface MobileContextType {
  isMobile: boolean
}

const MobileContext = createContext<MobileContextType>({ isMobile: false })

export function MobileProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return <MobileContext.Provider value={{ isMobile }}>{children}</MobileContext.Provider>
}

export const useMobile = () => useContext(MobileContext)

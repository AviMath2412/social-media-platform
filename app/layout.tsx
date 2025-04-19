import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MobileProvider } from "@/hooks/use-mobile"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "vibe | Modern Social Platform",
  description: "A modern, attractive, and user-centric social platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MobileProvider>{children}</MobileProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

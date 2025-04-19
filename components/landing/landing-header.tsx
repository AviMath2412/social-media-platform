"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { AuthModal } from "@/components/auth/auth-modal"

export default function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSignUp = () => {
    setAuthMode("signup")
    setAuthModalOpen(true)
  }

  const handleLogin = () => {
    setAuthMode("login")
    setAuthModalOpen(true)
  }

  const handleAuthSuccess = () => {
    router.push("/chat")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm" : "py-4 bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="font-bold text-xl gradient-text">vibe</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-zinc-700 dark:text-zinc-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-zinc-700 dark:text-zinc-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-zinc-700 dark:text-zinc-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" onClick={handleLogin}>
            Log in
          </Button>
          <Button className="bg-violet-500 hover:bg-violet-600" onClick={handleSignUp}>
            Sign up free
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 p-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link
              href="#features"
              className="text-zinc-700 dark:text-zinc-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                setMobileMenuOpen(false)
              }}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-zinc-700 dark:text-zinc-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
                setMobileMenuOpen(false)
              }}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-zinc-700 dark:text-zinc-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                setMobileMenuOpen(false)
              }}
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button
                variant="outline"
                onClick={() => {
                  handleLogin()
                  setMobileMenuOpen(false)
                }}
              >
                Log in
              </Button>
              <Button
                className="bg-violet-500 hover:bg-violet-600"
                onClick={() => {
                  handleSignUp()
                  setMobileMenuOpen(false)
                }}
              >
                Sign up free
              </Button>
            </div>
          </nav>
        </div>
      )}

      <AuthModal
        open={authModalOpen}
        onOpenChange={setAuthModalOpen}
        mode={authMode}
        onModeChange={setAuthMode}
        onSuccess={handleAuthSuccess}
      />
    </header>
  )
}

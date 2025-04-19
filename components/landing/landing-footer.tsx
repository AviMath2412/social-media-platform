"use client"

import Link from "next/link"
import { Instagram, Twitter, Youtube, Github } from "lucide-react"

export default function LandingFooter() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-bold text-xl gradient-text">vibe</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              The messaging platform that gets you. Express yourself with reactions, voice messages, and more.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-500 hover:text-violet-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-violet-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-violet-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-violet-500 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-12 pt-8 text-center text-zinc-500 dark:text-zinc-400 text-sm">
          <p>© {new Date().getFullYear()} vibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

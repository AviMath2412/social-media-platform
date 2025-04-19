"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { AuthModal } from "@/components/auth/auth-modal"

export default function LandingHero() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const router = useRouter()

  const handleAuthSuccess = () => {
    router.push("/chat")
  }

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Connect with your <span className="gradient-text">vibe</span> in real-time
              </h1>
              <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl">
                The messaging platform that gets you. Express yourself with reactions, voice messages, and more. No cap,
                just pure communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white font-medium px-8"
                  onClick={() => setAuthModalOpen(true)}
                >
                  Get Started — It's Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const videoElement = document.createElement("div")
                    videoElement.innerHTML = `
                      <div class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                        <div class="relative bg-white dark:bg-zinc-900 rounded-xl p-4 max-w-3xl w-full">
                          <button class="absolute top-2 right-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                          </button>
                          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                            <div class="text-center p-8">
                              <h3 class="text-xl font-semibold mb-2">How vibe Works</h3>
                              <p class="text-zinc-600 dark:text-zinc-400 mb-4">This would be a product demo video in a real application.</p>
                              <div class="inline-flex items-center justify-center gap-2 bg-violet-500 text-white px-4 py-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                <span>Play Demo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    `

                    document.body.appendChild(videoElement)

                    const closeButton = videoElement.querySelector("button")
                    closeButton?.addEventListener("click", () => {
                      document.body.removeChild(videoElement)
                    })

                    // Also close when clicking outside
                    videoElement.addEventListener("click", (e) => {
                      if (e.target === videoElement.querySelector("div")) {
                        document.body.removeChild(videoElement)
                      }
                    })
                  }}
                >
                  See How It Works
                </Button>
              </div>
              <div className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
                Already used by 10k+ Gen Z creators and influencers
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl blur-lg opacity-50"></div>
              <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=600&q=80"
                  alt="vibe app interface"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 h-16 w-32 bg-pink-500/20 dark:bg-pink-500/10 backdrop-blur-md rounded-xl"></div>
              <div className="absolute -bottom-8 -left-8 h-24 w-24 bg-violet-500/20 dark:bg-violet-500/10 backdrop-blur-md rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} mode="signup" onSuccess={handleAuthSuccess} />
    </section>
  )
}

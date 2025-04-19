"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { AuthModal } from "@/components/auth/auth-modal"
import { useRouter } from "next/navigation"

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Unlimited messages",
      "Basic reactions",
      "Voice messages",
      "Group chats (up to 10 people)",
      "File sharing (up to 20MB)",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/month",
    description: "For power users and creators",
    features: [
      "Everything in Free",
      "Custom reactions",
      "HD voice messages",
      "Unlimited group members",
      "File sharing (up to 1GB)",
      "Priority support",
      "Custom themes",
    ],
    cta: "Try Free for 14 Days",
    highlighted: true,
  },
]

export default function LandingCTA() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState("Free")
  const router = useRouter()
  const pricingRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    }

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      })
    }, observerOptions)

    const pricingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    if (titleRef.current) {
      titleObserver.observe(titleRef.current)
    }

    if (pricingRef.current) {
      const pricingElements = pricingRef.current.querySelectorAll(".pricing-card")
      pricingElements.forEach((element) => {
        pricingObserver.observe(element)
      })
    }

    return () => {
      titleObserver.disconnect()
      pricingObserver.disconnect()
    }
  }, [])

  const handleSignUp = (tier: string) => {
    setSelectedTier(tier)
    setAuthModalOpen(true)
  }

  const handleAuthSuccess = () => {
    router.push("/chat")
  }

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-12 opacity-0 transition-opacity duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose your vibe</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Start for free, upgrade when you need more features. No hidden fees, cancel anytime.
          </p>
        </div>

        <div ref={pricingRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`pricing-card bg-white dark:bg-zinc-800 rounded-2xl p-8 border transition-all duration-300 opacity-0 transform translate-y-4 will-change-transform ${
                tier.highlighted
                  ? "border-violet-500 shadow-lg shadow-violet-500/10"
                  : "border-zinc-200 dark:border-zinc-700"
              }`}
            >
              {tier.highlighted && (
                <div className="bg-violet-500 text-white text-xs font-medium px-3 py-1 rounded-full w-fit mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.period && <span className="text-zinc-500 dark:text-zinc-400 ml-1">{tier.period}</span>}
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600"
                    : "bg-zinc-800 dark:bg-zinc-700 hover:bg-zinc-700 dark:hover:bg-zinc-600"
                }`}
                onClick={() => handleSignUp(tier.name)}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} mode="signup" onSuccess={handleAuthSuccess} />
    </section>
  )
}

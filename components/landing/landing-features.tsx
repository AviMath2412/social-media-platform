"use client"

import { useRef, useEffect } from "react"
import { MessageSquare, Shield, Smile, Mic, ImageIcon, Users } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Real-time Messaging",
    description: "Chat with friends instantly with our lightning-fast messaging system. No lag, just vibes.",
    color: "bg-violet-500",
  },
  {
    icon: Smile,
    title: "Expressive Reactions",
    description: "React to messages with emojis that actually show how you feel. More than just a thumbs up.",
    color: "bg-pink-500",
  },
  {
    icon: Mic,
    title: "Voice Messages",
    description: "When typing isn't enough, send voice notes to share your authentic tone and emotion.",
    color: "bg-blue-500",
  },
  {
    icon: ImageIcon,
    title: "Rich Media Sharing",
    description: "Share photos, videos, and files seamlessly without quality loss or compression.",
    color: "bg-emerald-500",
  },
  {
    icon: Users,
    title: "Group Conversations",
    description: "Create group chats with your squad for planning events or just daily hangouts.",
    color: "bg-amber-500",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "End-to-end encryption keeps your conversations private and secure. Your data stays yours.",
    color: "bg-red-500",
  },
]

export default function LandingFeatures() {
  const featuresRef = useRef<HTMLDivElement>(null)
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

    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    if (titleRef.current) {
      titleObserver.observe(titleRef.current)
    }

    if (featuresRef.current) {
      const featureElements = featuresRef.current.querySelectorAll(".feature-card")
      featureElements.forEach((element, index) => {
        // Stagger the animations
        setTimeout(() => {
          featureObserver.observe(element)
        }, index * 100)
      })
    }

    return () => {
      titleObserver.disconnect()
      featureObserver.disconnect()
    }
  }, [])

  return (
    <section id="features" className="py-20 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16 opacity-0 transition-opacity duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features that hit different</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            vibe isn't just another messaging app. It's designed for how Gen Z actually communicates.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm transition-all duration-300 border border-zinc-100 dark:border-zinc-700 opacity-0 transform translate-y-4 will-change-transform"
            >
              <div
                className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-3`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

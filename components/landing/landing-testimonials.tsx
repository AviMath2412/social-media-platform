"use client"

import { useState, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "vibe is literally the only messaging app I use now. The reactions are so much more expressive than anything else out there. It's like they actually understand how we talk.",
    author: "Zoe K.",
    role: "Content Creator",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 2,
    content:
      "No cap, this app is fire. The voice messages are crystal clear and the UI is clean af. My friends and I switched from Discord and haven't looked back.",
    author: "Tyler J.",
    role: "Student & Gamer",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 3,
    content:
      "As someone who runs multiple group projects, vibe makes communication so much easier. The media sharing is seamless and I love how I can react to specific messages.",
    author: "Mia L.",
    role: "Digital Artist",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 4,
    content:
      "I was skeptical at first but vibe actually delivers on its promises. The app is fast, never crashes, and the customization options are next level.",
    author: "Jordan T.",
    role: "Tech Enthusiast",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4,
  },
]

export default function LandingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isManualChange, setIsManualChange] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const prefersReducedMotion = useReducedMotion()

  const nextTestimonial = () => {
    setIsManualChange(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsManualChange(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials, but only if not manually changed recently
  useEffect(() => {
    if (prefersReducedMotion) return // Don't auto-advance if user prefers reduced motion

    const interval = setInterval(() => {
      if (!isManualChange) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      } else {
        setIsManualChange(false) // Reset after one cycle
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isManualChange, prefersReducedMotion])

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-violet-50 to-pink-50 dark:from-violet-950 dark:to-pink-950"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What the community is saying</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real users think about vibe.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex transform-gpu"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <motion.div
                    className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg border border-zinc-100 dark:border-zinc-700 transform-gpu"
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={prefersReducedMotion ? {} : { y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-lg mb-6 text-zinc-700 dark:text-zinc-300 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-zinc-800 rounded-full shadow-md z-10 hidden md:flex"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-zinc-800 rounded-full shadow-md z-10 hidden md:flex"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentIndex === index ? "bg-violet-500" : "bg-zinc-300 dark:bg-zinc-600"
                }`}
                onClick={() => {
                  setIsManualChange(true)
                  setCurrentIndex(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

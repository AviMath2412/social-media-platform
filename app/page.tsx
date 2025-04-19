import { Suspense } from "react"
import { Loader } from "lucide-react"
import LandingHero from "@/components/landing/landing-hero"
import LandingFeatures from "@/components/landing/landing-features"
import LandingTestimonials from "@/components/landing/landing-testimonials"
import LandingCTA from "@/components/landing/landing-cta"
import LandingHeader from "@/components/landing/landing-header"
import LandingFooter from "@/components/landing/landing-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-violet-50 to-pink-50 dark:from-zinc-950 dark:via-violet-950 dark:to-pink-950">
      <LandingHeader />

      <main>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <Loader className="animate-spin" />
            </div>
          }
        >
          <LandingHero />
          <LandingFeatures />
          <LandingTestimonials />
          <LandingCTA />
        </Suspense>
      </main>

      <LandingFooter />
    </div>
  )
}

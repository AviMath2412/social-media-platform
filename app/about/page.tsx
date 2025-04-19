import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-violet-50 to-pink-50 dark:from-zinc-950 dark:via-violet-950 dark:to-pink-950">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">About vibe</h1>
          </div>

          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                vibe was born out of a simple observation: existing messaging platforms weren't built for how Gen Z
                actually communicates. They were either too formal, too cluttered, or too limited in expression.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Founded in 2023 by a team of young developers who were frustrated with the status quo, vibe set out to
                create a messaging experience that feels natural, expressive, and authentic. We believe communication
                should be as rich and nuanced as in-person conversations, with all the emotion, context, and personality
                intact.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                We're on a mission to make digital communication more human. We believe that messaging should be more
                than just text—it should capture the full spectrum of human expression, from subtle reactions to voice
                inflections to visual context.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Authenticity</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    We believe in creating spaces where people can be their true selves.
                  </p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Privacy</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Your conversations are yours. We're committed to keeping them secure and private.
                  </p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Innovation</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    We're constantly pushing the boundaries of how people can connect digitally.
                  </p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Inclusivity</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    We're building for everyone, with accessibility and diversity at the forefront.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                We're a diverse team of designers, engineers, and communication enthusiasts based around the world. What
                unites us is our passion for creating meaningful connections in the digital age.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Alex", "Jordan", "Taylor", "Morgan"].map((name, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 rounded-full bg-zinc-200 dark:bg-zinc-700 mx-auto mb-2 overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=80&width=80&text=${name.charAt(0)}`}
                        alt={name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium">{name}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Co-Founder</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                We're just getting started, and we'd love for you to be part of our story. Whether you're a user, a
                potential team member, or an investor, we're excited to connect.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/careers">
                  <Button className="bg-violet-500 hover:bg-violet-600">Join Our Team</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline">Try vibe</Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

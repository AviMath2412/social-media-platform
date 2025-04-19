import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const openPositions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (US/Europe)",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (Worldwide)",
    type: "Full-time",
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Community Manager",
    department: "Operations",
    location: "Remote (US/Europe)",
    type: "Full-time",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote (Worldwide)",
    type: "Full-time",
  },
  {
    title: "Content Creator",
    department: "Marketing",
    location: "Los Angeles, CA",
    type: "Contract",
  },
]

export default function CareersPage() {
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

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Join the vibe team</h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
              Help us build the future of communication. We're looking for passionate people to join our mission.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why work at vibe?</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-5 rounded-xl">
                <div className="h-12 w-12 rounded-lg bg-violet-100 dark:bg-violet-900/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-violet-500"
                  >
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="m4.93 4.93 2.83 2.83" />
                    <path d="m16.24 16.24 2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="m4.93 19.07 2.83-2.83" />
                    <path d="m16.24 7.76 2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Impactful Work</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Build products that millions of people use to connect and express themselves.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-5 rounded-xl">
                <div className="h-12 w-12 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-500"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Amazing Team</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Work with talented, diverse, and supportive colleagues who care about your growth.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-5 rounded-xl">
                <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Continuous Learning</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Grow your skills with learning stipends, mentorship, and challenging projects.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium mb-3">Benefits & Perks</h3>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Competitive salary & equity
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Flexible remote work
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Health, dental & vision insurance
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Unlimited PTO policy
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Our Culture</h3>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Fast-paced & collaborative
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Transparent & open communication
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Diverse & inclusive environment
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    User-focused & data-driven
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
          <div className="grid gap-4 mb-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle>{position.title}</CardTitle>
                  <CardDescription>{position.department}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">{position.location}</div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">{position.type}</div>
                    </div>
                    <Button className="bg-violet-500 hover:bg-violet-600">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Don't see a position that fits your skills? We're always looking for talented people.
            </p>
            <Button variant="outline" className="mx-auto">
              Send us your resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-zinc-700 dark:text-zinc-300">Last updated: April 14, 2025</p>
          </div>

          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                By accessing or using the vibe platform, you agree to be bound by these Terms of Service and all
                applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                using or accessing this platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                Permission is granted to temporarily use the vibe platform for personal, non-commercial purposes only.
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-3 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the platform</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-zinc-700 dark:text-zinc-300">
                This license shall automatically terminate if you violate any of these restrictions and may be
                terminated by vibe at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                To use certain features of the platform, you must register for an account. You agree to provide
                accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                You are responsible for safeguarding the password that you use to access the platform and for any
                activities or actions under your password. We encourage you to use "strong" passwords (passwords that
                use a combination of upper and lower case letters, numbers, and symbols) with your account.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming
                aware of any breach of security or unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. User Content</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                Our platform allows you to post, link, store, share and otherwise make available certain information,
                text, graphics, videos, or other material. You are responsible for the content that you post on or
                through the platform, including its legality, reliability, and appropriateness.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                By posting content on or through the platform, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mb-3 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>
                  The content is yours (you own it) or you have the right to use it and grant us the rights and license
                  as provided in these Terms.
                </li>
                <li>
                  The posting of your content on or through the platform does not violate the privacy rights, publicity
                  rights, copyrights, contract rights or any other rights of any person.
                </li>
              </ul>
              <p className="text-zinc-700 dark:text-zinc-300">
                We reserve the right to terminate the account of any user found to be infringing on a copyright.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Prohibited Uses</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                You may use the platform only for lawful purposes and in accordance with these Terms. You agree not to
                use the platform:
              </p>
              <ul className="list-disc pl-6 mb-3 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>
                  In any way that violates any applicable federal, state, local, or international law or regulation.
                </li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                <li>
                  To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                  mail," "chain letter," "spam," or any other similar solicitation.
                </li>
                <li>
                  To impersonate or attempt to impersonate vibe, a vibe employee, another user, or any other person or
                  entity.
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the platform.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                In no event shall vibe, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-3 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Your access to or use of or inability to access or use the platform.</li>
                <li>Any conduct or content of any third party on the platform.</li>
                <li>Any content obtained from the platform.</li>
                <li>
                  Unauthorized access, use or alteration of your transmissions or content, whether based on warranty,
                  contract, tort (including negligence) or any other legal theory.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Changes to Terms</h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will try to provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-2">
                <p className="font-medium">vibe, Inc.</p>
                <p>123 Tech Street</p>
                <p>San Francisco, CA 94107</p>
                <p>terms@vibe.example.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

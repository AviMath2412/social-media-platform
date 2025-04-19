import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-zinc-700 dark:text-zinc-300">Last updated: April 14, 2025</p>
          </div>

          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                At vibe, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our messaging platform.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                please do not access the application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>

              <h3 className="text-lg font-medium mt-4 mb-2">2.1 Personal Data</h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                We may collect personally identifiable information, such as your:
              </p>
              <ul className="list-disc pl-6 mb-3 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth</li>
                <li>Profile picture</li>
                <li>Device information</li>
              </ul>

              <h3 className="text-lg font-medium mt-4 mb-2">2.2 Usage Data</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                We may also collect information that your browser sends whenever you visit our Service or when you
                access the Service by or through a mobile device.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc pl-6 mb-3 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Provide, operate, and maintain our application</li>
                <li>Improve, personalize, and expand our application</li>
                <li>Understand and analyze how you use our application</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service, updates, and marketing</li>
                <li>Process transactions</li>
                <li>Find and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Message Privacy</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                Your messages are encrypted end-to-end, which means they can only be read by you and the intended
                recipients. We cannot access the content of your messages.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                However, we do store metadata about your messages, such as when they were sent and to whom, to provide
                and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Sharing Your Information</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                We may share information we have collected about you in certain situations. Your information may be
                disclosed as follows:
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">5.1 By Law or to Protect Rights</h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                If we believe the release of information about you is necessary to respond to legal process, to
                investigate or remedy potential violations of our policies, or to protect the rights, property, and
                safety of others, we may share your information as permitted or required by any applicable law, rule, or
                regulation.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">5.2 Third-Party Service Providers</h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                We may share your information with third parties that perform services for us or on our behalf,
                including payment processing, data analysis, email delivery, hosting services, customer service, and
                marketing assistance.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">5.3 Marketing Communications</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                With your consent, or with an opportunity for you to withdraw consent, we may share your information
                with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                You have the right to access, update, or delete the information we have on you. Whenever made possible,
                you can:
              </p>
              <ul className="list-disc pl-6 mb-3 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Update your account information</li>
                <li>Object to processing of your personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Request access to your personal data</li>
                <li>Request restrictions on processing of your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Withdraw your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Security of Your Information</h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-2">
                <p className="font-medium">vibe, Inc.</p>
                <p>123 Tech Street</p>
                <p>San Francisco, CA 94107</p>
                <p>privacy@vibe.example.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

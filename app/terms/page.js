import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <>
      <Nav />

      <div className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12">Terms of Service</h1>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Agreement</h2>
              <p>
                By using Oasis, you agree to these terms. If you don't agree, don't use the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Your account</h2>
              <p>
                You are responsible for keeping your password confidential. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Share your account with others</li>
                <li>Use fake information</li>
                <li>Harass or abuse other users</li>
                <li>Attempt to hack the system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Content</h2>
              <p>
                Any content you submit (feedback, stories, etc.) can be used by us to improve Oasis. We won't identify you without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Disclaimers</h2>
              <p>
                Oasis is a support tool, not medical advice. If you're experiencing a crisis, call SAMHSA: 1-800-662-4357. We are not liable for relapse or self-harm.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Payments</h2>
              <p>
                Premium is billed monthly. You can cancel anytime. Refunds are 30 days money-back guarantee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Changes to these terms</h2>
              <p>
                We may update these terms. We'll notify you if there are major changes. Continued use means you accept them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Questions?</h2>
              <p>
                Email hello@oasis-recovery.com.
              </p>
            </section>

            <p className="text-sm text-gray-600 mt-12">
              Last updated: September 2026
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

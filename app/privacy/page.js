import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <>
      <Nav />

      <div className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">What we collect</h2>
              <p>
                When you use Oasis, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Email address and password (encrypted)</li>
                <li>Addiction type you're recovering from</li>
                <li>Daily check-ins and streak data</li>
                <li>Payment information (via Stripe)</li>
                <li>Basic device/browser info</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">What we don't do</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>We never sell your data</li>
                <li>We never share with third parties (except Stripe for payments)</li>
                <li>We never use your data for advertising</li>
                <li>We never access your location</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Data security</h2>
              <p>
                Your data is encrypted in transit (TLS 1.3) and at rest. We use Supabase's enterprise-grade security, with regular security audits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Your rights</h2>
              <p>You can:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Request all your data (GDPR/CCPA)</li>
                <li>Delete your account and all data</li>
                <li>Export your streak data</li>
                <li>Opt out of emails</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Questions?</h2>
              <p>
                Email privacy@oasis-recovery.com with any privacy concerns.
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

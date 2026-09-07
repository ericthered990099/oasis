import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Nav />

      <div className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We built Oasis because <span className="italic">recovery matters</span>
          </h1>
          <p className="text-xl text-gray-600">
            Recovery is hard. Tracking it shouldn't be. We're making sobriety real, one day at a time.
          </p>
        </section>

        {/* Story */}
        <section className="max-w-3xl mx-auto px-4 mb-20">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              The idea started simple. Someone we care about was in recovery. They tracked their days on paper. Celebrated milestones with friends. But they wanted something that felt hopeful, not clinical. Something that believed in them.
            </p>
            <p className="text-lg">
              We looked at recovery apps. They felt cold. Judgmental. Built for relapse, not progress.
            </p>
            <p className="text-lg">
              So we built Oasis. For everyone quitting anything. Addiction recovery, smoking, drinking, social media, gambling, sugar — it doesn't matter. What matters is that you showed up today.
            </p>
            <p className="text-lg">
              Oasis is simple because recovery is hard enough. Daily check-in. Streak tracking. AI-powered encouragement. Crisis resources always free.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-gray-50 py-20 px-4 mb-20 border-y border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Why we do this</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-3">Recovery is possible</h3>
                <p className="text-gray-600">
                  Every single day in recovery is a win. We celebrate every streak, every milestone, every moment of strength.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">One day at a time</h3>
                <p className="text-gray-600">
                  You don't need to see the finish line. Just today. Tomorrow, you do it again.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">You're not alone</h3>
                <p className="text-gray-600">
                  1,200+ people are in recovery right now. Thousands more before them. Millions to come. You're part of something real.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Privacy is sacred</h3>
                <p className="text-gray-600">
                  Your recovery is yours. We never sell data. We never judge. Your privacy is protected like we'd want ours to be.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="max-w-3xl mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold mb-12">Built by people who get it</h2>
          <p className="text-lg text-gray-600 mb-12">
            Our team includes people in recovery. People who've lost someone to addiction. People who believe recovery is possible.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Tanishk',
                role: 'Founder, Builder',
                bio: 'Building products that matter. Oasis is the second app bringing hope to addiction recovery.',
              },
              {
                name: 'You?',
                role: 'Help us',
                bio: 'We\'re looking for people who believe in this. Designers, engineers, marketers in recovery or passionate about supporting it.',
              },
            ].map((person) => (
              <div key={person.name} className="p-6 border border-gray-200 rounded-lg">
                <p className="text-3xl mb-3">👤</p>
                <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{person.role}</p>
                <p className="text-gray-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech */}
        <section className="bg-gray-900 text-white py-20 px-4 rounded-lg max-w-3xl mx-auto mb-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Built for scale</h2>
            <p className="text-gray-300 mb-8">
              Oasis is built on modern, secure infrastructure. Your data is encrypted. Your privacy is protected.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <p>✓ End-to-end encrypted</p>
              <p>✓ Regular security audits</p>
              <p>✓ GDPR compliant</p>
              <p>✓ Data never sold</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the recovery</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're just getting started. Help us build the future of recovery.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="https://app.oasis-recovery.com" className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
              Start Free
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 transition">
              Work with us
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

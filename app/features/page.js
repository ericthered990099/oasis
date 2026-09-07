import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Features() {
  const features = [
    {
      title: 'Daily Check-ins',
      description: 'One button. One moment of commitment. Track progress with ease.',
      emoji: '✓',
      details: [
        'Track any addiction type',
        'Never miss a day',
        'Visual streak display',
        'Celebration notifications',
      ],
    },
    {
      title: 'AI Motivation',
      description: 'Personalized encouragement powered by Claude AI.',
      emoji: '✨',
      details: [
        'Daily motivational messages',
        'Context-aware support',
        'Real, human-like encouragement',
        'Premium feature',
      ],
    },
    {
      title: 'Streak Tracking',
      description: 'Watch your days add up. See progress happen.',
      emoji: '📊',
      details: [
        'Automatic streak counter',
        'Milestone badges at 7, 30, 100, 365 days',
        'Never lose your progress',
        'Export your data anytime',
      ],
    },
    {
      title: 'Crisis Support',
      description: 'Always here. Always free. Whenever you need it.',
      emoji: '🆘',
      details: [
        'SAMHSA hotline (1-800-662-4357)',
        'Crisis Text Line (Text HOME to 741741)',
        'No judgment. Instant resources.',
        'Available 24/7/365',
      ],
    },
    {
      title: 'Advanced Analytics',
      description: 'Understand your patterns. Know your wins.',
      emoji: '📈',
      details: [
        'Weekly insights & trends',
        'Time-of-day patterns',
        'Motivation effectiveness',
        'Progress visualization',
      ],
    },
    {
      title: 'Custom Reminders',
      description: 'Stay on track with smart notifications.',
      emoji: '🔔',
      details: [
        'Personalized reminder times',
        'Motivational push notifications',
        'Milestone celebrations',
        'Relapse prevention alerts',
      ],
    },
  ]

  return (
    <>
      <Nav />

      <div className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Built for <span className="italic">real recovery</span>
          </h1>
          <p className="text-xl text-gray-600">
            Features designed to support you. Simplicity to sustain you.
          </p>
        </section>

        {/* Features Grid */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 border border-gray-200 rounded-lg hover:border-black transition">
                <div className="text-5xl mb-4">{feature.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail) => (
                    <li key={detail} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why These Features */}
        <section className="bg-gray-50 py-20 px-4 border-y border-gray-200 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Why we built this way</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Simplicity is strength</h3>
                <p className="text-gray-600">
                  Recovery is hard. Your app shouldn't be. One button per day. That's it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hope matters</h3>
                <p className="text-gray-600">
                  AI motivation isn't cold. It's personalized, human, real. Built to believe in you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Crisis first</h3>
                <p className="text-gray-600">
                  Crisis support is never paywalled. Always free. Always available. That's not negotiable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Your data is yours</h3>
                <p className="text-gray-600">
                  Export anytime. Delete anytime. Your recovery, your data, your choice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Oasis vs. other apps</h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 font-bold">Feature</th>
                  <th className="text-center px-6 py-4 font-bold">Oasis</th>
                  <th className="text-center px-6 py-4 font-bold">Competitor A</th>
                  <th className="text-center px-6 py-4 font-bold">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Simple check-in', oasis: true, a: true, b: true },
                  { feature: 'Streak tracking', oasis: true, a: true, b: true },
                  { feature: 'Free crisis support', oasis: true, a: false, b: false },
                  { feature: 'AI motivation', oasis: true, a: false, b: true },
                  { feature: 'Custom reminders', oasis: true, a: true, b: false },
                  { feature: 'Data export', oasis: true, a: false, b: false },
                  { feature: 'Community stories', oasis: true, a: true, b: true },
                  { feature: 'Analytics', oasis: true, a: false, b: true },
                  { feature: 'Hopeful branding', oasis: true, a: false, b: false },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.oasis ? '✓' : '—'}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400">
                      {row.a ? '✓' : '—'}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400">
                      {row.b ? '✓' : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience it yourself</h2>
          <p className="text-xl text-gray-600 mb-8">
            7 days free. See all features. No credit card needed.
          </p>
          <Link href="https://app.oasis-recovery.com" className="inline-block px-10 py-5 bg-black text-white rounded-lg font-bold text-lg hover:bg-gray-800 transition">
            Start Free
          </Link>
        </section>
      </div>

      <Footer />
    </>
  )
}

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: null,
      period: '7 days',
      description: 'Try Oasis risk-free',
      features: [
        'Daily check-ins',
        'Streak tracking',
        'Basic motivation messages',
        'Crisis resources',
      ],
      cta: 'Start Free',
      ctaHref: 'https://app.oasis-recovery.com',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: 'per month',
      description: 'Full recovery support',
      features: [
        'Everything in Free',
        'AI-powered daily motivation',
        'Advanced analytics & insights',
        'Custom reminders & goals',
        'Milestone rewards',
        'Priority support',
        'Export your data',
        'Cancel anytime',
      ],
      cta: 'Start Free Trial',
      ctaHref: 'https://app.oasis-recovery.com',
      highlighted: true,
    },
  ]

  return (
    <>
      <Nav />

      <div className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Recovery that fits <span className="italic">your budget</span>
          </h1>
          <p className="text-xl text-gray-600">
            Crisis support is always free. Everything else is optional.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg p-8 transition ${
                  plan.highlighted
                    ? 'bg-black text-white border-2 border-black scale-105'
                    : 'bg-gray-50 border-2 border-gray-200 hover:border-black'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  {plan.price ? (
                    <>
                      <p className="text-5xl font-bold">{plan.price}</p>
                      <p className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                        {plan.period}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-5xl font-bold">Free</p>
                      <p className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                        {plan.period}
                      </p>
                    </>
                  )}
                </div>

                <Link
                  href={plan.ctaHref}
                  className={`block text-center w-full py-4 rounded-lg font-semibold mb-8 transition ${
                    plan.highlighted
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={plan.highlighted ? 'text-white' : 'text-gray-900'}
                      />
                      <span className={plan.highlighted ? 'text-gray-100' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">Full comparison</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 font-bold">Feature</th>
                  <th className="text-center px-6 py-4 font-bold">Free</th>
                  <th className="text-center px-6 py-4 font-bold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Daily check-ins', free: true, premium: true },
                  { feature: 'Streak tracking', free: true, premium: true },
                  { feature: 'Basic motivation', free: true, premium: true },
                  { feature: 'Crisis support', free: true, premium: true },
                  { feature: 'AI motivation', free: false, premium: true },
                  { feature: 'Advanced analytics', free: false, premium: true },
                  { feature: 'Custom reminders', free: false, premium: true },
                  { feature: 'Milestone rewards', free: false, premium: true },
                  { feature: 'Priority support', free: false, premium: true },
                  { feature: 'Export data', free: false, premium: true },
                ].map((row, idx) => (
                  <tr key={row.feature} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.free ? <span className="text-2xl">✓</span> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.premium ? <span className="text-2xl">✓</span> : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-2xl mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Questions about pricing?</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. No contracts, no tricks. Cancel instantly from settings.',
              },
              {
                q: 'Do I have to pay for crisis support?',
                a: 'Never. Crisis resources are always free, always available.',
              },
              {
                q: 'What happens after my 7-day trial?',
                a: 'You choose. Premium ($9.99/mo) or stay on Free. Your data stays.',
              },
              {
                q: 'Can I get a refund?',
                a: 'Yep. 30-day money-back guarantee, no questions asked.',
              },
              {
                q: 'Is there a student discount?',
                a: 'Email hello@oasis-recovery.com and we\'ll work something out.',
              },
            ].map((item) => (
              <details key={item.q} className="border-b border-gray-200 pb-6 cursor-pointer group">
                <summary className="text-lg font-semibold flex items-center justify-between hover:text-gray-600 transition">
                  <span>{item.q}</span>
                  <span className="text-2xl group-open:rotate-180 transition">+</span>
                </summary>
                <p className="text-gray-600 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 text-center bg-black text-white py-16 rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Ready?</h2>
          <p className="text-xl text-gray-300 mb-8">
            7 days free. No credit card. Recovery starts now.
          </p>
          <Link href="https://app.oasis-recovery.com" className="inline-block px-10 py-5 bg-white text-black rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Start Free Trial
          </Link>
        </section>
      </div>

      <Footer />
    </>
  )
}

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  const stories = [
    {
      name: 'Alex M.',
      role: 'In recovery',
      image: '👤',
      story: '47 days sober. Never thought I\'d get here.',
      link: '#',
    },
    {
      name: 'Jordan L.',
      role: 'Quit smoking',
      image: '👤',
      story: 'One year smoke-free. Oasis made it real.',
      link: '#',
    },
    {
      name: 'Sam P.',
      role: 'Social media free',
      image: '👤',
      story: '156 days. My anxiety is gone.',
      link: '#',
    },
    {
      name: 'Casey R.',
      role: 'Addiction recovery',
      image: '👤',
      story: '89 days. Finally believe in myself again.',
      link: '#',
    },
  ]

  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 bg-white">
        <div className="max-w-3xl">
          {/* Social Proof */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white"></div>
            </div>
            <p className="text-sm text-gray-600 font-medium">Trusted by 1,200+ in recovery</p>
          </div>

          {/* Hero Headline */}
          <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 leading-tight">
            Your recovery <span className="italic">companion</span>
          </h1>

          <p className="text-xl md:text-2xl text-center text-gray-600 mb-12">
            Track your streak, get personalized support, celebrate progress. One day at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Link href="https://app.oasis-recovery.com" className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition text-lg">
              Start Recovery
            </Link>
            <Link href="#how" className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 transition text-lg">
              How it works
            </Link>
          </div>

          {/* Subtext */}
          <p className="text-center text-gray-500 text-sm">
            Free 7-day trial. No credit card. Recovery starts now.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 px-4 border-y border-gray-200">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">15K+</p>
            <p className="text-gray-600">Check-ins this month</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">4.8★</p>
            <p className="text-gray-600">Average rating</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">47</p>
            <p className="text-gray-600">Average streak (days)</p>
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What are you quitting?</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { emoji: '🍷', label: 'Alcohol', desc: 'Sobriety tracker' },
              { emoji: '🚬', label: 'Smoking', desc: 'Cigarette-free' },
              { emoji: '📱', label: 'Social Media', desc: 'Digital detox' },
              { emoji: '🎰', label: 'Gambling', desc: 'Betting recovery' },
              { emoji: '💊', label: 'Drugs', desc: 'Addiction recovery' },
              { emoji: '🍰', label: 'Sugar', desc: 'Healthy habits' },
            ].map((item) => (
              <button key={item.label} className="p-8 border-2 border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition text-left">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <p className="font-bold text-lg">{item.label}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </button>
            ))}
          </div>

          <div className="text-center">
            <Link href="https://app.oasis-recovery.com" className="inline-block px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
              Explore Oasis
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">How Oasis works</h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            Recovery is built on consistency. We make it simple.
          </p>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  01
                </div>
                <h3 className="text-3xl font-bold mb-4">Start your streak</h3>
                <p className="text-gray-600 text-lg">
                  Choose what you're quitting. Start today. That's it.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-lg text-center">
                <p className="text-6xl mb-4">📊</p>
                <p className="text-gray-600">Your streak begins</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-lg text-center order-last md:order-first">
                <p className="text-6xl mb-4">✓</p>
                <p className="text-gray-600">Check in daily</p>
              </div>
              <div>
                <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  02
                </div>
                <h3 className="text-3xl font-bold mb-4">Check in every day</h3>
                <p className="text-gray-600 text-lg">
                  One button. One moment of commitment. Watch your streak grow.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  03
                </div>
                <h3 className="text-3xl font-bold mb-4">Get personalized support</h3>
                <p className="text-gray-600 text-lg">
                  AI-powered motivation. Crisis resources. Real encouragement.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-lg text-center">
                <p className="text-6xl mb-4">✨</p>
                <p className="text-gray-600">Daily motivation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Real recovery stories</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((person) => (
              <div key={person.name} className="p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                <div className="text-4xl mb-4">{person.image}</div>
                <p className="text-gray-600 italic mb-4">{person.story}</p>
                <p className="font-bold text-gray-900">{person.name}</p>
                <p className="text-sm text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition font-medium">
              See more stories →
            </Link>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Celebrate every milestone</h2>

          <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <p className="text-5xl font-bold mb-2">7</p>
              <p className="text-gray-300">One week</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">30</p>
              <p className="text-gray-300">One month</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100</p>
              <p className="text-gray-300">Three months</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">365</p>
              <p className="text-gray-300">One year</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-300 mb-8">Every day matters. Every streak counts.</p>
            <Link href="https://app.oasis-recovery.com" className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Questions?</h2>

          <div className="space-y-4">
            <details className="border-b border-gray-200 pb-6 cursor-pointer group">
              <summary className="text-lg font-semibold flex items-center justify-between hover:text-gray-600 transition">
                <span>How does Oasis work?</span>
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                You select your addiction, check in daily, and get personalized support. That's it. One day at a time.
              </p>
            </details>

            <details className="border-b border-gray-200 pb-6 cursor-pointer group">
              <summary className="text-lg font-semibold flex items-center justify-between hover:text-gray-600 transition">
                <span>Is my data private?</span>
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Completely. We never sell your data. Your recovery is private. You can delete everything anytime.
              </p>
            </details>

            <details className="border-b border-gray-200 pb-6 cursor-pointer group">
              <summary className="text-lg font-semibold flex items-center justify-between hover:text-gray-600 transition">
                <span>What if I relapse?</span>
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Relapse isn't failure. It's part of recovery. You can reset and start again. We're here to support, not judge.
              </p>
            </details>

            <details className="border-b border-gray-200 pb-6 cursor-pointer group">
              <summary className="text-lg font-semibold flex items-center justify-between hover:text-gray-600 transition">
                <span>Is there crisis support?</span>
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Yes. Crisis resources are always free. SAMHSA: 1-800-662-4357. Text HOME to 741741. Always available.
              </p>
            </details>

            <details className="border-b border-gray-200 pb-6 cursor-pointer group">
              <summary className="text-lg font-semibold flex items-center justify-between hover:text-gray-600 transition">
                <span>Is it really free?</span>
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Free for 7 days. Premium ($9.99/mo) adds AI motivation and advanced analytics. Cancel anytime.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Your recovery starts now</h2>
          <p className="text-xl text-gray-300 mb-12">
            7 days free. No credit card. Just you and your journey.
          </p>
          <Link href="https://app.oasis-recovery.com" className="inline-block px-10 py-5 bg-white text-black rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Start Free Trial
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

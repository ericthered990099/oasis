import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Nav />

      <div className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="italic">talk</span>
          </h1>
          <p className="text-xl text-gray-600">
            Questions, feedback, partnership ideas? We'd love to hear from you.
          </p>
        </section>

        {/* Contact Grid */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Email',
                value: 'hello@oasis-recovery.com',
                link: 'mailto:hello@oasis-recovery.com',
                emoji: '✉️',
                desc: 'General inquiries',
              },
              {
                title: 'Partnerships',
                value: 'partner@oasis-recovery.com',
                link: 'mailto:partner@oasis-recovery.com',
                emoji: '🤝',
                desc: 'Work with us',
              },
              {
                title: 'Crisis Support',
                value: '1-800-662-4357',
                link: 'tel:1-800-662-4357',
                emoji: '🆘',
                desc: 'SAMHSA Hotline',
              },
            ].map((contact) => (
              <a key={contact.title} href={contact.link} className="p-8 border border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition text-center">
                <div className="text-5xl mb-4">{contact.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{contact.desc}</p>
                <p className="text-lg font-semibold text-gray-900">{contact.value}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-2xl mx-auto px-4 mb-20">
          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Name</label>
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition" required />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition" required />
            </div>

            <div>
              <label className="block font-semibold mb-2">Subject</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition">
                <option>General inquiry</option>
                <option>Feature request</option>
                <option>Bug report</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea placeholder="Tell us what's on your mind..." rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition" required></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition">
              Send message
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-8">
            We'll get back to you within 24 hours.
          </p>
        </section>

        {/* FAQ */}
        <section className="max-w-2xl mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Quick answers</h2>

          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to get a response?',
                a: 'Usually within 24 hours. Sometimes faster if it\'s urgent.',
              },
              {
                q: 'Can I propose a partnership?',
                a: 'Absolutely. Email partner@oasis-recovery.com with your idea.',
              },
              {
                q: 'Do you accept feature requests?',
                a: 'Yes! Email us or open an issue. We read everything.',
              },
              {
                q: 'What if I found a security issue?',
                a: 'Please email security@oasis-recovery.com immediately. We\'ll respond within 48 hours.',
              },
              {
                q: 'How do I delete my account?',
                a: 'Go to Settings → Delete Account. Your data is gone in 30 days.',
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

        {/* Social */}
        <section className="max-w-3xl mx-auto px-4 text-center bg-gray-50 p-12 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Follow us</h2>
          <div className="flex gap-6 justify-center flex-wrap">
            {[
              { name: 'Twitter', url: 'https://twitter.com/oasisapp' },
              { name: 'Instagram', url: 'https://instagram.com/oasisapp' },
              { name: 'LinkedIn', url: 'https://linkedin.com/company/oasisapp' },
              { name: 'TikTok', url: 'https://tiktok.com/@oasisapp' },
            ].map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-semibold hover:border-black transition">
                {social.name}
              </a>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

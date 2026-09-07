'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllBlogPosts } from './blogData'

export default function Blog() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 3000)
      } else {
        setError(data.error || 'Failed to subscribe')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Newsletter signup error:', err)
    } finally {
      setLoading(false)
    }
  }

  const posts = getAllBlogPosts()

  return (
    <>
      <Nav />

      <div className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Stories, science, and <span className="italic">hope</span>
          </h1>
          <p className="text-xl text-gray-600">
            Real voices. Real recovery. Real data.
          </p>
        </section>

        {/* Newsletter Signup */}
        <section className="max-w-2xl mx-auto px-4 mb-20 bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-3">Join our recovery community</h3>
          <p className="text-gray-600 mb-6">
            Stories, recovery tips, and updates delivered to your inbox weekly.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
            />
            <button 
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? 'Loading...' : subscribed ? '✓' : 'Subscribe'}
            </button>
          </form>
          {error && <p className="text-red-600 mt-3 text-sm">{error}</p>}
        </section>

        {/* Posts Grid */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="p-8 border border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition h-full flex flex-col">
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-2">
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </p>
                    <h3 className="text-2xl font-bold group-hover:text-gray-900 transition">
                      {post.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-8 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex gap-4">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs">{post.category}</span>
                    </div>
                    <span className="group-hover:translate-x-2 transition">→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 text-center bg-black text-white py-16 rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to join?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Read stories from people like you. Start your own today.
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

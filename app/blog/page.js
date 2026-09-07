import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      title: 'Why Recovery Apps Need to Be Different',
      excerpt: 'Most recovery apps are built for failure. We\'re building for hope. Here\'s how.',
      date: 'Sep 7, 2026',
      author: 'Tanishk',
      readTime: '5 min read',
      slug: 'recovery-apps-different',
    },
    {
      title: 'The Science of Streaks',
      excerpt: 'What does research say about habit formation? Why daily check-ins work. Data from 10,000+ users.',
      date: 'Sep 1, 2026',
      author: 'Tanishk',
      readTime: '7 min read',
      slug: 'science-of-streaks',
    },
    {
      title: 'Stories of Recovery: 6 Months Sober',
      excerpt: 'Real people. Real wins. How Oasis users are changing their lives, one day at a time.',
      date: 'Aug 25, 2026',
      author: 'Community',
      readTime: '8 min read',
      slug: 'recovery-stories-6-months',
    },
    {
      title: 'AI Motivation: How We Built It Right',
      excerpt: 'Behind the scenes: Building AI that encourages without judgment. Why Claude API powers Oasis.',
      date: 'Aug 18, 2026',
      author: 'Tanishk',
      readTime: '6 min read',
      slug: 'ai-motivation-built-right',
    },
    {
      title: 'Crisis Resources: What You Need to Know',
      excerpt: 'A guide to free support. SAMHSA. Crisis Text Line. AA, NA, and more. You\'re never alone.',
      date: 'Aug 10, 2026',
      author: 'Support Team',
      readTime: '9 min read',
      slug: 'crisis-resources-guide',
    },
    {
      title: 'The Day You Feel It: Celebrating Day 30',
      excerpt: 'What happens at day 30? Users report mood changes, clarity, hope. Here\'s what to expect.',
      date: 'Aug 3, 2026',
      author: 'Tanishk',
      readTime: '5 min read',
      slug: 'day-30-milestone',
    },
  ]

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
          <h3 className="text-2xl font-bold mb-3">Join 2,000+ readers</h3>
          <p className="text-gray-600 mb-6">
            Stories, recovery tips, and updates delivered to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
            />
            <button className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="p-8 border border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition h-full flex flex-col">
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-2">{post.date}</p>
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
                      <span>{post.readTime}</span>
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

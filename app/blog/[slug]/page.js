import Link from 'next/link';
import { getBlogPost, getAllBlogPosts } from '../blogData';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) {
    return { title: 'Post not found' };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 max-w-2xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find that blog post.</p>
          <Link href="/blog" className="text-blue-600 hover:underline font-semibold">
            ← Back to blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />
      <main className="flex-1">
        {/* Article Header */}
        <article className="max-w-2xl mx-auto px-4 py-20">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              ← Back to blog
            </Link>
          </div>

          {/* Meta Info */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h1 className="text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>By {post.author}</span>
              <span>•</span>
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-gray-700 font-medium">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((line, idx) => {
              if (line.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-3xl font-bold mt-8 mb-4">
                    {line.replace('## ', '')}
                  </h2>
                );
              }
              if (line.startsWith('- ')) {
                return null; // We'll handle lists separately
              }
              if (line.trim() === '') {
                return <br key={idx} />;
              }
              return (
                <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-2">Ready to start your recovery?</h3>
              <p className="text-gray-700 mb-6">Join thousands of people taking back control of their lives with Oasis.</p>
              <a
                href="https://app.oasis-recovery.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Start Free 7-Day Trial
              </a>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-12">More from our blog</h3>
            <div className="grid gap-8">
              {getAllBlogPosts()
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-xl font-bold mb-2 hover:text-blue-600">{relatedPost.title}</h4>
                    <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{relatedPost.author}</span>
                      <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

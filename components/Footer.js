import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Crisis Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-4 text-center text-sm text-gray-300">
          Crisis support always free: SAMHSA 1-800-662-4357 or Text HOME to 741741
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">✨ Oasis</h3>
            <p className="text-gray-400 text-sm">Recovery starts now.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="https://app.oasis-recovery.com" className="hover:text-white transition">
                  App
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms
                </Link>
              </li>
              <li>
                <a href="mailto:hello@oasis-recovery.com" className="hover:text-white transition">
                  Email us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Oasis. Made with hope.
          </p>
          <div className="flex gap-6">
            <a href="https://twitter.com/oasisapp" className="text-gray-400 hover:text-white transition text-sm">
              Twitter
            </a>
            <a href="https://instagram.com/oasisapp" className="text-gray-400 hover:text-white transition text-sm">
              Instagram
            </a>
            <a href="https://linkedin.com/company/oasisapp" className="text-gray-400 hover:text-white transition text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

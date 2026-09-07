'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl">
          ✨ Oasis
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#how" className="text-gray-600 hover:text-gray-900 transition">
            How it works
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">
            Contact
          </Link>
        </div>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="https://app.oasis-recovery.com"
            className="hidden md:block px-6 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition text-sm"
          >
            Start Free
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-4 space-y-4">
            <Link href="/#how" className="block text-gray-600 hover:text-gray-900 transition py-2">
              How it works
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-900 transition py-2">
              About
            </Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gray-900 transition py-2">
              Contact
            </Link>
            <Link
              href="https://app.oasis-recovery.com"
              className="block w-full text-center px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

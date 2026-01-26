'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'work', 'clients', 'contact']
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            Kyra Sobel Media
          </Link>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className={`transition-colors ${
                  activeSection === 'home'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors ${
                  activeSection === 'about'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('work')}
                className={`transition-colors ${
                  activeSection === 'work'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                My Work
              </button>
            </li>
            <li>
              <Link
                href="/resume"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className={`transition-colors ${
                  activeSection === 'contact'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            <li>
              <button
                onClick={() => {
                  scrollToSection('home')
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left transition-colors ${
                  activeSection === 'home'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('about')
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left transition-colors ${
                  activeSection === 'about'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('work')
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left transition-colors ${
                  activeSection === 'work'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                My Work
              </button>
            </li>
            <li>
              <Link
                href="/resume"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('contact')
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left transition-colors ${
                  activeSection === 'contact'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

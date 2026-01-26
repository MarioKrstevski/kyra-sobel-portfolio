'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Only update active section if on home page
      if (isHomePage) {
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
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Handle scrolling to section on initial load or direct navigation with hash
  useEffect(() => {
    if (isHomePage) {
      const hash = window.location.hash.substring(1)
      if (hash) {
        // Wait for page to fully render, then scroll
        const scrollToHash = () => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          setTimeout(scrollToHash, 200)
        })
      }
    }
  }, [isHomePage])

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Navigate to home with hash - use window.location for proper hash handling
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 w-full">
        <div className="flex items-center justify-between ">
          <Link
            href="/"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                scrollToSection('home')
              }
            }}
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
          >
            Kyra Sobel Media
          </Link>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className={`transition-colors cursor-pointer ${
                  activeSection === 'home'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {isHomePage ? 'Home' : 'Go Home'}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors cursor-pointer ${
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
                className={`transition-colors cursor-pointer ${
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
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Blog
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className={`transition-colors cursor-pointer ${
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
            className="md:hidden text-gray-900 cursor-pointer"
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
                className={`block w-full text-left transition-colors cursor-pointer ${
                  activeSection === 'home'
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {isHomePage ? 'Home' : 'Go Home'}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('about')
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left transition-colors cursor-pointer ${
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
                className={`block w-full text-left transition-colors cursor-pointer ${
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
                className="block text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
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
                className={`block w-full text-left transition-colors cursor-pointer ${
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

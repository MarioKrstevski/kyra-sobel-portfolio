'use client'

import Image from 'next/image'
import { useEffect, useRef, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'

const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

type ImageModalProps = {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageModal ({ src, alt, onClose }: ImageModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveRef = useRef<HTMLElement | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setImageLoaded(false)
  }, [src])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
      return
    }
    if (e.key !== 'Tab' || !modalRef.current) return
    const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }, [onClose])

  useEffect(() => {
    previousActiveRef.current = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    const id = setTimeout(() => closeButtonRef.current?.focus(), 0)
    return () => {
      clearTimeout(id)
      document.body.style.overflow = ''
      previousActiveRef.current?.focus?.()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
      aria-describedby="image-modal-desc"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        className="relative z-10 flex max-h-[90vh] max-w-[90vw] flex-col rounded-sm bg-gray-900 shadow-2xl ring-1 ring-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
          <span id="image-modal-title" className="sr-only">
            Image view
          </span>
          <p id="image-modal-desc" className="text-sm text-gray-400 truncate flex-1 min-w-0" title={alt}>
            {alt}
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div
          className={`relative flex items-center justify-center p-4 ${!imageLoaded ? 'min-h-[50vh]' : ''}`}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50" aria-hidden="true">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
            </div>
          )}
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={1200}
            className="max-h-[75vh] w-auto max-w-full object-contain transition-opacity duration-200"
            style={{ opacity: imageLoaded ? 1 : 0 }}
            sizes="90vw"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  )

  if (typeof document === 'undefined') return null
  return createPortal(modal, document.body)
}

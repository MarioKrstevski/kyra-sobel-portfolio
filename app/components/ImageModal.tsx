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

  const titleText = alt.trim() || 'Image'

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        className="relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-sm bg-gray-900 shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-black/10 bg-primary px-4 py-2.5 text-primary-contrast">
          <p
            id="image-modal-title"
            className="min-w-0 flex-1 truncate text-sm text-primary-contrast/95"
            title={titleText}
          >
            {titleText}
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-primary-contrast transition hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-contrast/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="relative flex items-center justify-center bg-black/45 p-4">
          {!imageLoaded && (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/30"
              aria-hidden="true"
            >
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-600 border-t-white" />
            </div>
          )}
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={1200}
            className="max-h-[min(70vh,720px)] w-auto max-w-full object-contain transition-opacity duration-200"
            style={{ opacity: imageLoaded ? 1 : 0 }}
            sizes="(max-width: 672px) 90vw, 640px"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  )

  if (typeof document === 'undefined') return null
  return createPortal(modal, document.body)
}

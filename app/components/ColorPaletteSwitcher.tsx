'use client'

import { useEffect, useState } from 'react'
import {
  COLOR_PALETTES,
  DEFAULT_COLOR_PALETTE_ID,
} from '../color-palettes'

const STORAGE_KEY = 'kyra-color-palette'
const WIDGET_EXPANDED_KEY = 'kyra-palette-widget-expanded'

export default function ColorPaletteSwitcher () {
  const [paletteId, setPaletteId] = useState(DEFAULT_COLOR_PALETTE_ID)
  const [expanded, setExpanded] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && COLOR_PALETTES.some((p) => p.id === stored)) {
      setPaletteId(stored)
    }
    const expandedStored = localStorage.getItem(WIDGET_EXPANDED_KEY)
    if (expandedStored === '0') setExpanded(false)
    if (expandedStored === '1') setExpanded(true)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.colorPalette = paletteId
    localStorage.setItem(STORAGE_KEY, paletteId)
  }, [paletteId])

  useEffect(() => {
    localStorage.setItem(WIDGET_EXPANDED_KEY, expanded ? '1' : '0')
  }, [expanded])

  const activeLabel =
    COLOR_PALETTES.find((p) => p.id === paletteId)?.label ?? 'Palette'

  return (
    <div
      className="pointer-events-auto fixed bottom-4 left-4 z-[9998] max-w-[min(100vw-2rem,18rem)] rounded-lg border border-stone-300 bg-stone-50 text-xs text-stone-800 shadow-lg"
      role="region"
      aria-label="Color theme"
    >
      <div className="flex items-center justify-between gap-2 border-b border-stone-200 px-2 py-1.5 sm:px-3">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="flex min-w-0 flex-1 items-center gap-2 rounded-md py-1 text-left text-stone-900 transition hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-1"
          aria-expanded={expanded}
          aria-controls={expanded ? 'palette-widget-panel' : undefined}
          id="palette-widget-toggle"
        >
          <span
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center text-stone-600"
            aria-hidden="true"
          >
            {expanded ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            )}
          </span>
          <span className="min-w-0 truncate font-semibold">
            Palettes
            {!expanded ? (
              <span className="font-normal text-stone-600"> · {activeLabel}</span>
            ) : null}
          </span>
        </button>
      </div>

      {expanded ? (
        <div
          id="palette-widget-panel"
          role="region"
          aria-labelledby="palette-widget-toggle"
          className="flex flex-col gap-2 p-3 pt-2"
        >
          <p className="text-[11px] leading-snug text-stone-600">
            Pick a color theme. Your choice is saved on this device.
          </p>
          <div className="flex flex-col gap-1.5" role="group" aria-label="Choose palette">
            {COLOR_PALETTES.map((p) => {
              const isActive = paletteId === p.id
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPaletteId(p.id)}
                  className={`w-full rounded-md border px-2 py-2 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 ${
                    isActive
                      ? 'border-stone-600 bg-stone-200 text-stone-900'
                      : 'border-stone-200 bg-white hover:bg-stone-100'
                  }`}
                >
                  <span className="font-medium">{p.label}</span>
                  <span className="mt-0.5 block text-[10px] leading-snug text-stone-600">
                    {p.hint}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

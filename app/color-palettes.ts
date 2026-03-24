/** Labels for the color preview switcher — CSS lives in globals.css */

export type ColorPaletteMeta = {
  id: string
  label: string
  hint: string
}

export const COLOR_PALETTES: ColorPaletteMeta[] = [
  {
    id: 'paper',
    label: 'Warm paper',
    hint: 'Cream hero, soft tan About — editorial, approachable',
  },
  {
    id: 'atmosphere',
    label: 'Soft atmosphere',
    hint: 'Cool–warm balance; subtle depth for storytelling',
  },
  {
    id: 'stone',
    label: 'Warm stone',
    hint: 'Balanced neutrals, calm and professional',
  },
  {
    id: 'linen',
    label: 'Linen light',
    hint: 'Airy and minimal; color stays in the background',
  },
  {
    id: 'mist',
    label: 'Cool mist',
    hint: 'Very soft blue-gray; calm, newsroom-adjacent',
  },
  {
    id: 'sage',
    label: 'Sage wash',
    hint: 'Muted green-gray; natural, quiet',
  },
  {
    id: 'seafoam',
    label: 'Sea glass',
    hint: 'Blue-green whisper; fresh but still restrained',
  },
  {
    id: 'dusk',
    label: 'Dusk paper',
    hint: 'Barely-there lavender-gray; evening editorial',
  },
  {
    id: 'clay',
    label: 'Warm clay',
    hint: 'Dusty terracotta tint; earthy, still light',
  },
  {
    id: 'ink',
    label: 'Ink (dark)',
    hint: 'Light on dark — same layout tokens as warm paper, inverted',
  },
  {
    id: 'canvas',
    label: 'Canvas (white + gray)',
    hint: 'Mostly white; gray on My Work only; contact stays white — opposite of Ink',
  },
]

export const DEFAULT_COLOR_PALETTE_ID = 'paper'

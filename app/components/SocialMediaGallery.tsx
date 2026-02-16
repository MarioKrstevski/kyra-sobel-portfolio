'use client'

import Image from 'next/image'
import { socialMediaSamples, paulsonInstituteLinks } from '../data/work-samples'
import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

type PaulsonLink = { id: number; url: string; title: string }

export type SocialMediaSample = { id: number; image: string; client: string; description: string }

type SocialMediaGalleryProps = {
  paulsonLinks?: PaulsonLink[]
  /** Custom images to show; when omitted, homepage shows first 4 */
  samples?: SocialMediaSample[]
}

export default function SocialMediaGallery ({ paulsonLinks, samples }: SocialMediaGalleryProps) {
  const links = paulsonLinks ?? paulsonInstituteLinks
  const sampleSet = samples ?? socialMediaSamples
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <ScrollAnimation>
      <h3 className="text-3xl font-bold text-gray-900 mb-6">Social Media Samples</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {sampleSet.map((sample) => (
          <div
            key={sample.id}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg bg-gray-200"
            onClick={() => setSelectedImage(sample.image)}
          >
            <Image
              src={sample.image}
              alt={sample.description}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300 z-[1]"
              sizes="(max-width: 768px) 50vw, 25vw"
              priority={sample.id <= 2}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center z-0 pointer-events-none">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm text-center px-2">
                {sample.client}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h4 className="text-2xl font-semibold text-gray-900 mb-4">
          Featured Client: Paulson Institute
        </h4>
        <p className="text-gray-600 mb-4">
          Social media content creation and strategy for environmental and
          sustainability communications.
        </p>
        <div className="space-y-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
            >
              → {link.title}
            </a>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>
            <div className="relative max-w-full max-h-full w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Social media sample"
                width={1200}
                height={1200}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      )}
    </ScrollAnimation>
  )
}

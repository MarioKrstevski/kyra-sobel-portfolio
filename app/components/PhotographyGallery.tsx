'use client'

import Image from 'next/image'
import { photographySamples } from '../data/work-samples'
import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

type PhotoSample = { id: number; image: string; category: string }

type PhotographyGalleryProps = {
  photos?: PhotoSample[]
}

export default function PhotographyGallery ({ photos }: PhotographyGalleryProps) {
  const list = photos ?? photographySamples
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <ScrollAnimation>
      <h3 className="text-3xl font-bold text-gray-900 mb-6">Photography Portfolio</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {list.map((photo) => (
          <div
            key={photo.id}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg bg-gray-200"
            onClick={() => setSelectedImage(photo.image)}
          >
            <Image
              src={photo.image}
              alt={`${photo.category} photography`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300 z-[1]"
              sizes="(max-width: 768px) 50vw, 25vw"
              priority={photo.id <= 4}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end z-0 pointer-events-none">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm p-2">
                {photo.category}
              </p>
            </div>
          </div>
        ))}
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
                alt="Photography sample"
                width={2000}
                height={2000}
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

'use client'

import Image from 'next/image'
import { photographySamples } from '../data/work-samples'
import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'
import ImageModal from './ImageModal'

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {list.map((photo) => (
          <button
            type="button"
            key={photo.id}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg bg-gray-200 w-full border-0 p-0 text-left"
            onClick={() => setSelectedImage(photo.image)}
            aria-label={`View ${photo.category} photography`}
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
          </button>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt={list.find((p) => p.image === selectedImage)?.category ?? 'Photography sample'}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </ScrollAnimation>
  )
}

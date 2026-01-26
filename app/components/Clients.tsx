'use client'

import Image from 'next/image'
import { clients } from '../data/work-samples'
import ScrollAnimation from './ScrollAnimation'

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-20 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Clients
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I&apos;ve had the privilege of working with amazing organizations and
            publications, creating content that makes a difference.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors w-full cursor-pointer"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={100}
                  className="object-contain max-h-20 w-auto"
                />
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

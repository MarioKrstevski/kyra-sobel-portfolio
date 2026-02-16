'use client'

import Link from 'next/link'
import SocialMediaGallery from './SocialMediaGallery'
import PhotographyGallery from './PhotographyGallery'
import WritingSection from './WritingSection'
import ScrollAnimation from './ScrollAnimation'
import { paulsonInstituteLinksFull } from '../data/work-samples'

export default function WorkSection() {
  return (
    <section
      id="work"
      className="py-20 px-4 bg-gray-50"
    >
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            My Work
          </h2>
        </ScrollAnimation>

        <div className="space-y-16">
          <SocialMediaGallery paulsonLinks={paulsonInstituteLinksFull.slice(0, 2)} />
          <PhotographyGallery />
          <WritingSection />
        </div>

        <ScrollAnimation>
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium cursor-pointer"
            >
              View full work portfolio →
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

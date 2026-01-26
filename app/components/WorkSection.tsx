'use client'

import SocialMediaGallery from './SocialMediaGallery'
import PhotographyGallery from './PhotographyGallery'
import WritingSection from './WritingSection'
import ScrollAnimation from './ScrollAnimation'

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
          <SocialMediaGallery />
          <PhotographyGallery />
          <WritingSection />
        </div>
      </div>
    </section>
  )
}

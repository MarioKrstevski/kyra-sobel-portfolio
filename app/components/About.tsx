'use client'

import ScrollAnimation from './ScrollAnimation'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white"
    >
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              I&apos;m a Chicago-based freelance journalist and photographer,
              editor, social media manager, and creative storyteller. I&apos;m a
              proud graduate of Temple University in Philadelphia, PA and hold a
              Bachelor of Arts in Journalism and a minor in Political Science.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              With a versatile background that includes experience as a podcast
              producer, video editor, on-air broadcast talent, and marketing and
              social media manager, I bring a well-rounded, thoughtful approach
              to any communications project.
            </p>
            <p className="text-lg leading-relaxed">
              My work ethic, curiosity, and commitment to growth allow me to excel
              across all areas of the field. I&apos;m driven by authenticity and
              integrity to highlight stories that affect my community, and I seek
              to make complex issues clear for everyday readers.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Social Media Manager
              </h3>
              <p className="text-gray-600">
                Creating engaging content and building brand presence across
                platforms
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Multimedia Journalist
              </h3>
              <p className="text-gray-600">
                Telling stories through writing, video, and digital media
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Freelance Photographer
              </h3>
              <p className="text-gray-600">
                Capturing authentic moments and visual narratives
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

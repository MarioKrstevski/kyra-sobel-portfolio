import Header from '../components/Header'
import Footer from '../components/Footer'
import SocialMediaGallery from '../components/SocialMediaGallery'
import PhotographyGallery from '../components/PhotographyGallery'
import WritingSection from '../components/WritingSection'
import ScrollAnimation from '../components/ScrollAnimation'
import { paulsonInstituteLinksFull, writingSamplesFull, multimediaProjectsFull, photographySamplesFull, socialMediaSamplesFull } from '../data/work-samples'

export const metadata = {
  title: 'My Work | Kyra Sobel Media',
  description: 'Social media samples, photography portfolio, writing and published articles, and digital multimedia projects.',
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50">
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimation>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
                My Work
              </h1>
            </ScrollAnimation>

            <div className="space-y-16">
              <SocialMediaGallery paulsonLinks={paulsonInstituteLinksFull} samples={socialMediaSamplesFull} />
              <PhotographyGallery photos={photographySamplesFull} />
              <WritingSection writing={writingSamplesFull} multimedia={multimediaProjectsFull} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

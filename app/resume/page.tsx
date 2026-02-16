import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Resume',
  description: 'Kyra Sobel resume: education, journalism, photography, social media management, and content creation experience.',
  openGraph: {
    title: 'Resume | Kyra Sobel Media',
    description: 'Education, journalism, photography, and social media management experience.',
  },
}

export default function ResumePage () {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Resume</h1>
            <div className="mb-8 p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 text-center">
              <p className="text-gray-600 mb-4">
                Resume PDF will be available here soon.
              </p>
              <p className="text-sm text-gray-500">
                For now, please contact{' '}
                <a
                  href="mailto:kyrasobel@outlook.com"
                  className="text-blue-600 hover:underline"
                >
                  kyrasobel@outlook.com
                </a>{' '}
                to request a copy.
              </p>
            </div>
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Education
                </h2>
                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Temple University
                  </h3>
                  <p className="text-gray-600">
                    Bachelor of Arts in Journalism, Minor in Political Science
                  </p>
                  <p className="text-sm text-gray-500">Philadelphia, PA</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Services
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Social Media Management</li>
                  <li>Multimedia Journalism</li>
                  <li>Freelance Photography</li>
                  <li>Content Creation & Strategy</li>
                  <li>Video Editing</li>
                  <li>Podcast Production</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

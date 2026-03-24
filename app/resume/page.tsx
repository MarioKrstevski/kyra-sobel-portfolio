import { redirect } from 'next/navigation'

const RESUME_PDF_PATH = '/resources/KSobel-Resume-2.2.26.pdf'

export const metadata = {
  title: 'Resume',
  description: 'Kyra Sobel resume: education, journalism, photography, social media management, and content creation experience.',
  alternates: { canonical: '/resume' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Resume | Kyra Sobel Media',
    description: 'Education, journalism, photography, and social media management experience.',
  },
}

export default function ResumePage () {
  redirect(RESUME_PDF_PATH)
}

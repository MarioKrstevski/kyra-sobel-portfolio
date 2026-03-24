import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-background">
      <h1 className="text-6xl font-bold text-heading mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-contrast transition hover:bg-primary-hover"
        >
          Go Home
        </Link>
        <Link
          href="/work"
          className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-card"
        >
          View Work
        </Link>
      </div>
    </main>
  )
}

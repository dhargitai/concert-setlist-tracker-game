import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Setlist Tracker',
  description: 'Track your favorite music shows',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

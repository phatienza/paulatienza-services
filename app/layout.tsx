import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Websites for Therapists — Paul Henry Atienza',
  description: 'I build fast, credible websites for therapists and mental health professionals in the US. Domain, hosting, and setup fully handled for you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Nunito:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
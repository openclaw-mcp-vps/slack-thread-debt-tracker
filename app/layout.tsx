import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slack Thread Debt Tracker — Stop Losing Questions in Slack',
  description: 'Scan your Slack workspace to find unanswered threads and questions before they kill team productivity. Real-time debt dashboard with aging alerts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="adcfb6bb-5396-4bba-8f00-544ee20bcc3b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

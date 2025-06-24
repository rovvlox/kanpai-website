import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KanpAI',
  description: 'KanpAIは、AI技術とクラフトマンシップを融合させた新しいクラフトビール体験を提供するスタートアップです。',
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

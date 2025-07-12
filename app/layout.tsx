import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { ToastProvider } from '@/components/providers/ToastProvider'
import { ProgressBarProvider } from '@/components/providers/ProgressBarProvider'
// import { StagewiseToolbar } from '@/components/ui/StagewiseToolbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cursor Rules 完全マスターガイド | A to Z 実践研修',
  description: 'Cursor RulesをマスターしてAIとの会話を10倍効率化。初心者から上級者まで対応した完全ガイド。100+のワンクリックテンプレート付き。',
  keywords: ['Cursor', 'AI', 'プログラミング', 'コーディング', '開発効率', 'ルール', 'テンプレート'],
  authors: [{ name: 'Cursor Rules Guide Team' }],
  creator: 'Cursor Rules Guide',
  publisher: 'Cursor Rules Guide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cursor-rules-guide.com'),
  openGraph: {
    title: 'Cursor Rules 完全マスターガイド',
    description: 'AIとの会話を10倍効率化するCursor Rulesの完全ガイド',
    url: 'https://cursor-rules-guide.com',
    siteName: 'Cursor Rules Guide',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cursor Rules 完全マスターガイド',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cursor Rules 完全マスターガイド',
    description: 'AIとの会話を10倍効率化するCursor Rulesの完全ガイド',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="light" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {/* <StagewiseToolbar
          config={{
            plugins: [], // カスタムプラグインを追加する場合はここに
          }}
        /> */}
        <ThemeProvider defaultTheme="light">
          <ProgressBarProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </ProgressBarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 
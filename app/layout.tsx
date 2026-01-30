import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
})

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: 'Евразийская Начальная Школа | Чита',
  description: 'Частная начальная школа в Чите. Углубленное изучение английского и китайского языков, ФГОС, робототехника, программирование. Набор в 0-3 классы на 2025/26 год.',
  keywords: ['школа', 'начальная школа', 'Чита', 'английский язык', 'китайский язык', 'Helen Doron', 'частная школа'],
  openGraph: {
    title: 'Евразийская Начальная Школа',
    description: 'Частная начальная школа в Чите с углубленным изучением языков',
    locale: 'ru_RU',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#8ACED9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

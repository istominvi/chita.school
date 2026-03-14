import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

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
  description: 'Частная начальная школа в Чите. Углубленное изучение английского и китайского языков, ФГОС, робототехника, программирование. Набор в 0-2 классы на 2026-27 год.',
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

const YA_METRIKA_ID = 107401079

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) {
                    return;
                  }
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YA_METRIKA_ID}', 'ym');

              ym(${YA_METRIKA_ID}, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce:true,
                trackLinks:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${YA_METRIKA_ID}`}
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

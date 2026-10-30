"use client"

import React, { useEffect, useState } from "react"
import Script from "next/script"

import {
  ANALYTICS_CONSENT_EVENT,
  readAnalyticsConsent,
} from "@/lib/analytics-consent"

const YA_METRIKA_ID = 107401079

// Счётчик монтируется только после согласия: в 152-ФЗ нет основания вида
// «законный интерес», поэтому для аналитики остаётся согласие (п. 1 ч. 1 ст. 6).
export function YandexMetrika() {
  const [isAllowed, setIsAllowed] = useState(false)

  useEffect(() => {
    setIsAllowed(readAnalyticsConsent() === "granted")

    const onChange = (event: Event) => {
      const value = (event as CustomEvent<string>).detail

      if (value === "granted") {
        setIsAllowed(true)
        return
      }

      // Отзыв согласия: выгрузить уже работающий счётчик из страницы нельзя,
      // поэтому перезагружаем — после перезагрузки он просто не смонтируется.
      if (isAllowed) {
        window.location.reload()
      }
    }

    window.addEventListener(ANALYTICS_CONSENT_EVENT, onChange)

    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, onChange)
  }, [isAllowed])

  if (!isAllowed) {
    return null
  }

  return (
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
  )
}

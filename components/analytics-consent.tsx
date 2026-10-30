"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  ANALYTICS_SETTINGS_EVENT,
  readAnalyticsConsent,
  writeAnalyticsConsent,
} from "@/lib/analytics-consent"

// Баннер согласия на аналитику. Обе кнопки равнозначны и видимы, отказ ничего
// не блокирует — иначе согласие не считается свободно данным.
export function AnalyticsConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // localStorage читаем только после монтирования: при static export разметка
    // на сервере и на клиенте иначе разойдётся.
    setIsVisible(readAnalyticsConsent() === null)

    const reopen = () => setIsVisible(true)

    window.addEventListener(ANALYTICS_SETTINGS_EVENT, reopen)

    return () => window.removeEventListener(ANALYTICS_SETTINGS_EVENT, reopen)
  }, [])

  const decide = (value: "granted" | "denied") => {
    writeAnalyticsConsent(value)
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div
      role="region"
      aria-label="Согласие на веб-аналитику"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm leading-5 text-muted-foreground">
          Сайт работает без аналитики, пока вы не разрешите её. С вашего согласия мы включим Яндекс
          Метрику, чтобы понимать, как пользуются сайтом. Что именно собирается и как отозвать
          согласие — в{" "}
          <Link href="/privacy" className="text-primary underline underline-offset-2">
            политике обработки персональных данных
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button type="button" size="sm" onClick={() => decide("granted")}>
            Разрешить
          </Button>
          <Button type="button" variant="outline" size="sm" onClick={() => decide("denied")}>
            Отклонить
          </Button>
        </div>
      </div>
    </div>
  )
}

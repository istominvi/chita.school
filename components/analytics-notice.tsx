"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

// Информирование о веб-аналитике (ч. 1 ст. 14 152-ФЗ): просто сообщаем факт,
// без предвыбранных галочек и без блокировки сайта до «согласия».
const STORAGE_KEY = "chita-school:analytics-notice-seen"

export function AnalyticsNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // localStorage читаем только после монтирования — при static export
    // разметка на сервере и на клиенте иначе разойдётся.
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setIsVisible(true)
      }
    } catch {
      // Приватный режим или заблокированное хранилище — показываем уведомление как есть.
      setIsVisible(true)
    }
  }, [])

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1")
    } catch {
      // Не смогли запомнить — ничего страшного, покажем в следующий раз.
    }

    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div
      role="region"
      aria-label="Уведомление о веб-аналитике"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm leading-5 text-muted-foreground">
          Сайт использует Яндекс Метрику, чтобы понимать, как им пользуются. Подробнее — в{" "}
          <Link href="/privacy" className="text-primary underline underline-offset-2">
            политике обработки персональных данных
          </Link>
          .
        </p>
        <Button type="button" variant="outline" size="sm" onClick={dismiss} className="shrink-0">
          Понятно
        </Button>
      </div>
    </div>
  )
}

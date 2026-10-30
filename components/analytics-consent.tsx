"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ANALYTICS_SETTINGS_EVENT,
  type AnalyticsConsent as AnalyticsConsentValue,
  readAnalyticsConsent,
  writeAnalyticsConsent,
} from "@/lib/analytics-consent"

type Mode = "hidden" | "banner" | "settings"

const STATUS_TEXT: Record<"granted" | "denied" | "undecided", string> = {
  granted: "Сейчас аналитика включена.",
  denied: "Сейчас аналитика выключена.",
  undecided: "Сейчас аналитика выключена: вы ещё не приняли решение.",
}

// Два разных состояния. Баннер спрашивает при первом визите: обе кнопки равнозначны и
// видимы, отказ ничего не блокирует — иначе согласие не считается свободно данным.
// Панель открывается по кнопке «Настройки аналитики»: показывает текущий выбор
// и закрывается без решения, чтобы посмотреть настройки можно было ничего не меняя.
export function AnalyticsConsent() {
  const [mode, setMode] = useState<Mode>("hidden")
  const [consent, setConsent] = useState<AnalyticsConsentValue>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // localStorage читаем только после монтирования: при static export разметка
    // на сервере и на клиенте иначе разойдётся.
    setMode(readAnalyticsConsent() === null ? "banner" : "hidden")

    const openSettings = (event: Event) => {
      triggerRef.current = (event as CustomEvent<HTMLElement>).detail
      setConsent(readAnalyticsConsent())
      setMode("settings")
    }

    window.addEventListener(ANALYTICS_SETTINGS_EVENT, openSettings)

    return () => window.removeEventListener(ANALYTICS_SETTINGS_EVENT, openSettings)
  }, [])

  const closeSettings = () => {
    setMode("hidden")
    triggerRef.current?.focus({ preventScroll: true })
  }

  useEffect(() => {
    if (mode !== "settings") {
      return
    }

    // Без переноса focus клавиатура и screen reader не узнают, что панель открылась.
    panelRef.current?.focus({ preventScroll: true })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSettings()
      }
    }

    document.addEventListener("keydown", onKeyDown)

    return () => document.removeEventListener("keydown", onKeyDown)
  }, [mode])

  const decide = (value: "granted" | "denied") => {
    writeAnalyticsConsent(value)

    if (mode === "settings") {
      closeSettings()
    } else {
      setMode("hidden")
    }
  }

  if (mode === "banner") {
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

  if (mode === "settings") {
    return (
      <div
        ref={panelRef}
        role="dialog"
        aria-labelledby="analytics-settings-title"
        tabIndex={-1}
        className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-border bg-card p-5 shadow-lg outline-none sm:left-auto sm:w-96"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="analytics-settings-title" className="font-semibold text-foreground">
            Настройки аналитики
          </h2>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Закрыть"
            className="-mr-2 -mt-1 shrink-0"
            onClick={closeSettings}
          >
            <X />
          </Button>
        </div>
        <p className="mt-2 text-sm font-medium text-foreground">
          {STATUS_TEXT[consent ?? "undecided"]}
        </p>
        <p className="mt-2 text-sm leading-5 text-muted-foreground">
          Яндекс Метрика помогает понять, как пользуются сайтом. На работу сайта и отправку заявок
          ваш выбор не влияет. Подробнее — в{" "}
          <Link href="/privacy" className="text-primary underline underline-offset-2">
            политике обработки персональных данных
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {consent !== "granted" && (
            <Button type="button" size="sm" onClick={() => decide("granted")}>
              Разрешить аналитику
            </Button>
          )}
          {consent !== "denied" && (
            <Button type="button" variant="outline" size="sm" onClick={() => decide("denied")}>
              {consent === "granted" ? "Отключить аналитику" : "Отклонить"}
            </Button>
          )}
        </div>
      </div>
    )
  }

  return null
}

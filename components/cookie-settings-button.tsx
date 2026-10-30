"use client"

import React from "react"

import { openAnalyticsSettings } from "@/lib/analytics-consent"

// Постоянный механизм отзыва: открывает баннер согласия заново с любой страницы.
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openAnalyticsSettings} className={className}>
      Настройки аналитики
    </button>
  )
}

"use client"

import React from "react"

import { openAnalyticsSettings } from "@/lib/analytics-consent"

// Постоянный механизм отзыва: открывает панель настроек аналитики с любой страницы.
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={(event) => openAnalyticsSettings(event.currentTarget)}
      className={className}
    >
      Настройки аналитики
    </button>
  )
}

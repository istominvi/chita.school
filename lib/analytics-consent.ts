// Согласие на веб-аналитику хранится отдельно от согласия в формах: это разные
// цели и разные правовые основания, смешивать их нельзя (ч. 3 ст. 9 152-ФЗ —
// согласие должно быть конкретным и информированным).
export const ANALYTICS_CONSENT_KEY = "chita-school:analytics-consent"
export const ANALYTICS_CONSENT_VERSION = "2026-10-30"

// Решение пользователя меняется в баннере, а читает его компонент Метрики —
// связываем их через событие на window, чтобы не тащить общий стор.
export const ANALYTICS_CONSENT_EVENT = "chita-school:analytics-consent-changed"
// Кнопка «Настройки аналитики» открывает панель настроек (постоянный отзыв).
export const ANALYTICS_SETTINGS_EVENT = "chita-school:analytics-settings"

export type AnalyticsConsent = "granted" | "denied" | null

export function readAnalyticsConsent(): AnalyticsConsent {
  try {
    const raw = window.localStorage.getItem(ANALYTICS_CONSENT_KEY)

    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw) as { value?: unknown; version?: unknown }

    // Текст согласия поменялся — старое решение больше не информированное, спрашиваем снова.
    if (parsed.version !== ANALYTICS_CONSENT_VERSION) {
      return null
    }

    return parsed.value === "granted" ? "granted" : parsed.value === "denied" ? "denied" : null
  } catch {
    // Приватный режим или заблокированное хранилище: считаем, что согласия нет.
    return null
  }
}

export function writeAnalyticsConsent(value: "granted" | "denied") {
  try {
    window.localStorage.setItem(
      ANALYTICS_CONSENT_KEY,
      JSON.stringify({ value, version: ANALYTICS_CONSENT_VERSION, at: new Date().toISOString() }),
    )
  } catch {
    // Не смогли запомнить — решение действует до перезагрузки страницы.
  }

  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_EVENT, { detail: value }))
}

// trigger нужен, чтобы вернуть на него focus при закрытии: Safari не ставит focus
// на кнопку по клику, поэтому document.activeElement здесь ненадёжен.
export function openAnalyticsSettings(trigger: HTMLElement) {
  window.dispatchEvent(new CustomEvent(ANALYTICS_SETTINGS_EVENT, { detail: trigger }))
}

// Убирает следы Метрики из браузера. Вызываем при каждой загрузке без согласия, а не
// только в момент отзыва: работающий счётчик может записать cookie заново до перезагрузки,
// и заодно так исчезают cookie, оставшиеся с тех пор, когда Метрика работала без согласия.
export function clearAnalyticsStorage() {
  const hostParts = window.location.hostname.split(".")
  // Метрика ставит cookie на корневой домен, поэтому перебираем хост и его родителей.
  const domains = ["", ...hostParts.map((_, index) => `; domain=.${hostParts.slice(index).join(".")}`)]

  for (const cookie of document.cookie.split("; ")) {
    const name = cookie.split("=")[0]

    if (name.startsWith("_ym")) {
      for (const domain of domains) {
        document.cookie = `${name}=; path=/; max-age=0${domain}`
      }
    }
  }

  try {
    for (const storage of [window.localStorage, window.sessionStorage]) {
      for (const key of Object.keys(storage)) {
        if (key.startsWith("_ym")) {
          storage.removeItem(key)
        }
      }
    }
  } catch {
    // Хранилище заблокировано: значит, и Метрике там нечего было оставить.
  }
}

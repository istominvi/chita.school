import { CONSENT_VERSION } from "@/lib/consent"

// Заявки уходят напрямую в AlfaCRM: серверы в РФ (Selectel, ЦОД «Дубровка-3»),
// это требование ч. 5 ст. 18 152-ФЗ. Токен — md5 от номера филиала, он виден
// в адресе и не является секретом, поэтому при static export держим его тут же.
//
// Филиал 1 — тот, что AlfaCRM показывает в своей инструкции по интеграции лидов.
// Проверено отправкой: лид из api/1 виден в списке, лид из api/7 не виден нигде.
// Эндпоинт отвечает {"result":true} и для чужого филиала, так что по ответу
// правильность адреса не проверить — только глазами в интерфейсе AlfaCRM.
const ALFACRM_LEAD_URL =
  "https://helendoronchita.s20.online/api/1/lead/create?token=c4ca4238a0b923820dcc509a6f75849b"

// Короткие коды источников — так лиды группируются в AlfaCRM.
export const APPLICATION_SOURCES = {
  intro: "site-intro",
  contact: "site-contact",
} as const

export type ApplicationSource = (typeof APPLICATION_SOURCES)[keyof typeof APPLICATION_SOURCES]

export const APPLICATION_REQUEST_TYPES = {
  intro: "Пользователь хочет записаться на знакомство",
  presentation: "Пользователь хочет получить презентацию",
  materials: "Пользователь хочет получить материалы",
  prep: "Пользователь хочет записаться на подготовку к школе",
  openDay: "Пользователь хочет записаться на день знакомства с группой продлённого дня 3 октября в 10:00",
} as const

export type ApplicationIntent = keyof typeof APPLICATION_REQUEST_TYPES

export interface ApplicationPayload {
  /** ФИО родителя — уходит в поле `name` AlfaCRM. */
  name: string
  phone: string
  email?: string
  /** Отдельного поля для ребёнка в AlfaCRM нет, кладём в `note`. */
  childName?: string
  /** Текст от посетителя, тоже в `note`. */
  message?: string
  /** Короткий код источника для поля `source`. */
  sourceCode: ApplicationSource
  /** Человекочитаемо: с какой кнопки пришла заявка. Уходит в `note`. */
  trigger?: string
  requestType?: string
}

export function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "")

  if (digits.length === 10) {
    return true
  }

  return digits.length === 11 && /^[78]/.test(digits)
}

function buildNote(data: ApplicationPayload) {
  return [
    data.requestType?.trim(),
    data.trigger?.trim() ? `Откуда заявка: ${data.trigger.trim()}` : "",
    data.childName?.trim() ? `Имя ребёнка: ${data.childName.trim()}` : "",
    data.message?.trim(),
    `Согласие на обработку персональных данных: получено на сайте, редакция текста ${CONSENT_VERSION}`,
  ]
    .filter(Boolean)
    .join("\n")
}

export async function submitApplication(data: ApplicationPayload) {
  const body = new URLSearchParams({
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email?.trim() ?? "",
    source: data.sourceCode,
    note: buildNote(data),
  })

  const response = await fetch(ALFACRM_LEAD_URL, {
    method: "POST",
    headers: {
      // Safelisted-тип, поэтому CORS-preflight не нужен.
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: body.toString(),
  })

  if (!response.ok) {
    throw new Error(`AlfaCRM responded with HTTP ${response.status}`)
  }

  // AlfaCRM умеет ответить 200 с `result: false` — успехом считаем только `true`.
  const raw = await response.text()
  let parsed: unknown

  try {
    parsed = JSON.parse(raw)
  } catch {
    throw new Error("AlfaCRM returned a non-JSON response")
  }

  if ((parsed as { result?: unknown } | null)?.result !== true) {
    throw new Error("AlfaCRM did not confirm the lead")
  }
}

const ENDPOINT_URL = "https://script.google.com/macros/s/AKfycbxlacIu_g6vR5KVrTVsemviA9pAFJ4zowxJs0zYPBhCcuXoMoW32DJM_d-vudTMNEnV8Q/exec"

export const APPLICATION_REQUEST_TYPES = {
  intro: "Пользователь хочет записаться на знакомство",
  presentation: "Пользователь хочет получить презентацию",
  materials: "Пользователь хочет получить материалы",
} as const

export type ApplicationIntent = keyof typeof APPLICATION_REQUEST_TYPES

export interface ApplicationPayload {
  name: string
  phone: string
  email?: string
  message?: string
  requestType?: string
  firstName?: string
  lastName?: string
  childName?: string
  source?: string
}

export function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "")

  if (digits.length === 10) {
    return true
  }

  return digits.length === 11 && /^[78]/.test(digits)
}

export async function submitApplication(data: ApplicationPayload) {
  const requestType = data.requestType?.trim()
  const source = data.source?.trim()
  const childName = data.childName?.trim()
  const userMessage = data.message?.trim()

  const message = [
    source ? `Источник: ${source}` : "",
    childName ? `Имя ребенка: ${childName}` : "",
    userMessage,
  ]
    .filter(Boolean)
    .join("\n")

  const payload = {
    ...data,
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email?.trim() ?? "",
    message,
    requestType,
    firstName: data.firstName?.trim(),
    lastName: data.lastName?.trim(),
    childName,
    source,
  }

  const response = await fetch(ENDPOINT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
}

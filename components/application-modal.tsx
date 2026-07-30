"use client"

import React, { useEffect, useId, useLayoutEffect, useRef, useState } from "react"
import { Send } from "lucide-react"

import { APPLICATION_REQUEST_TYPES, type ApplicationIntent, isValidPhone, submitApplication } from "@/lib/application"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"

const MODAL_COPY: Record<ApplicationIntent, { title: string; description: string; source: string }> = {
  intro: {
    title: "Записаться на знакомство",
    description: "Оставьте контакты, и менеджер свяжется с вами, чтобы договориться о знакомстве со школой.",
    source: "Кнопка «Записаться на знакомство»",
  },
  presentation: {
    title: "Получить презентацию",
    description: "Оставьте контакты, и менеджер отправит презентацию и ответит на вопросы по программе.",
    source: "Кнопка «Получить презентацию»",
  },
  materials: {
    title: "Получить материалы",
    description: "Оставьте контакты, и менеджер подскажет, как получить полезные материалы для родителей.",
    source: "Кнопка «Получить материалы»",
  },
  openDay: {
    title: "Записаться на день открытых дверей",
    description: "Оставьте контакты, и менеджер свяжется с вами, чтобы подтвердить запись на 19 августа в 18:00.",
    source: "Кнопка «Записаться» в блоке дня открытых дверей",
  },
}

const PHONE_MASK = "+7 (___) ___-__-__"
const PHONE_PREFIX = "+7 ("
const PHONE_DIGIT_SLOTS = [4, 5, 6, 9, 10, 11, 13, 14, 16, 17]
const PHONE_DIGITS_COUNT = PHONE_DIGIT_SLOTS.length

interface ModalFormData {
  firstName: string
  lastName: string
  childName: string
  phone: string
}

type FieldErrors = Partial<Record<keyof ModalFormData, string>>
type ButtonProps = React.ComponentProps<typeof Button>

const INITIAL_FORM_DATA: ModalFormData = {
  firstName: "",
  lastName: "",
  childName: "",
  phone: PHONE_MASK,
}

interface ApplicationModalProps {
  intent: ApplicationIntent
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface ApplicationModalTriggerProps {
  intent: ApplicationIntent
  children: React.ReactNode
  triggerClassName?: string
  triggerMode?: "button" | "custom"
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
}

export function ApplicationModal({ intent, open, onOpenChange }: ApplicationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <ApplicationModalContent intent={intent} open={open} />
    </Dialog>
  )
}

export function ApplicationModalTrigger({
  intent,
  children,
  triggerClassName,
  triggerMode = "button",
  variant,
  size,
}: ApplicationModalTriggerProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerMode === "custom" ? (
          <button type="button" className={triggerClassName}>
            {children}
          </button>
        ) : (
          <Button type="button" variant={variant} size={size} className={triggerClassName}>
            {children}
          </Button>
        )}
      </DialogTrigger>
      <ApplicationModalContent intent={intent} open={open} />
    </Dialog>
  )
}

function getPhoneDigits(value: string) {
  const digits = value.replace(/\D/g, "")
  const nationalDigits = /^[78]/.test(digits) ? digits.slice(1) : digits

  return nationalDigits.slice(0, PHONE_DIGITS_COUNT)
}

function formatPhoneDigits(digits: string) {
  const cleanDigits = digits.replace(/\D/g, "").slice(0, PHONE_DIGITS_COUNT)
  const maskChars = PHONE_MASK.split("")

  PHONE_DIGIT_SLOTS.forEach((slot, index) => {
    maskChars[slot] = cleanDigits[index] ?? "_"
  })

  return maskChars.join("")
}

function getPhoneCaretPosition(digitsCount: number) {
  return PHONE_DIGIT_SLOTS[digitsCount] ?? PHONE_MASK.length
}

function getPhoneDigitIndex(caretPosition: number) {
  return PHONE_DIGIT_SLOTS.filter((slot) => slot < caretPosition).length
}

function ApplicationModalContent({ intent, open }: { intent: ApplicationIntent; open: boolean }) {
  const formId = useId()
  const { title, description, source } = MODAL_COPY[intent]
  const [formData, setFormData] = useState<ModalFormData>(INITIAL_FORM_DATA)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const submittedTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pendingPhoneCaretDigits = useRef<number | null>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) {
      setFormData(INITIAL_FORM_DATA)
      setFieldErrors({})
      setFormError("")
      setIsSubmitted(false)
      setIsSubmitting(false)
    }
  }, [open])

  useEffect(() => {
    return () => {
      if (submittedTimer.current) {
        clearTimeout(submittedTimer.current)
      }
    }
  }, [])

  useLayoutEffect(() => {
    if (pendingPhoneCaretDigits.current === null) {
      return
    }

    const input = phoneInputRef.current

    if (!input) {
      return
    }

    const caretPosition = getPhoneCaretPosition(pendingPhoneCaretDigits.current)
    input.setSelectionRange(caretPosition, caretPosition)
    pendingPhoneCaretDigits.current = null
  }, [formData.phone])

  const validateForm = () => {
    const nextErrors: FieldErrors = {}
    const firstName = formData.firstName.trim()
    const lastName = formData.lastName.trim()
    const childName = formData.childName.trim()
    const phone = formData.phone.trim()

    if (!firstName) {
      nextErrors.firstName = "Введите имя"
    }

    if (!lastName) {
      nextErrors.lastName = "Введите фамилию"
    }

    if (!childName) {
      nextErrors.childName = "Введите имя ребенка"
    }

    if (!isValidPhone(phone)) {
      nextErrors.phone = "Введите корректный телефон"
    }

    setFieldErrors(nextErrors)

    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError("")

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const firstName = formData.firstName.trim()
      const lastName = formData.lastName.trim()

      await submitApplication({
        name: `${firstName} ${lastName}`,
        firstName,
        lastName,
        childName: formData.childName,
        phone: formData.phone,
        requestType: APPLICATION_REQUEST_TYPES[intent],
        source,
      })

      setFormData(INITIAL_FORM_DATA)
      setFieldErrors({})
      setFormError("")
      setIsSubmitted(true)

      if (submittedTimer.current) {
        clearTimeout(submittedTimer.current)
      }

      submittedTimer.current = setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error("Application submission error:", error)
      setFormError("Не удалось отправить заявку. Попробуйте позже.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateField = (field: keyof Omit<ModalFormData, "phone">, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setFieldErrors((current) => ({ ...current, [field]: undefined }))
    setFormError("")
  }

  const setPhoneCaret = (digitsCount = getPhoneDigits(formData.phone).length) => {
    window.requestAnimationFrame(() => {
      const input = phoneInputRef.current

      if (!input) {
        return
      }

      const caretPosition = getPhoneCaretPosition(digitsCount)
      input.setSelectionRange(caretPosition, caretPosition)
    })
  }

  const updatePhoneDigits = (digits: string, caretDigitsCount = digits.length) => {
    const cleanDigits = digits.slice(0, PHONE_DIGITS_COUNT)
    pendingPhoneCaretDigits.current = Math.min(caretDigitsCount, PHONE_DIGITS_COUNT)

    setFormData((current) => ({ ...current, phone: formatPhoneDigits(cleanDigits) }))
    setFieldErrors((current) => ({ ...current, phone: undefined }))
    setFormError("")
  }

  const getPhoneSelection = () => {
    const input = phoneInputRef.current
    const fallbackPosition = getPhoneCaretPosition(getPhoneDigits(formData.phone).length)
    const selectionStart = input?.selectionStart ?? fallbackPosition
    const selectionEnd = input?.selectionEnd ?? selectionStart

    return {
      startDigitIndex: getPhoneDigitIndex(Math.max(selectionStart, PHONE_PREFIX.length)),
      endDigitIndex: getPhoneDigitIndex(Math.max(selectionEnd, PHONE_PREFIX.length)),
    }
  }

  const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.metaKey || event.ctrlKey || event.altKey) {
      return
    }

    const currentDigits = getPhoneDigits(formData.phone)
    const { startDigitIndex, endDigitIndex } = getPhoneSelection()
    const hasSelection = startDigitIndex !== endDigitIndex

    if (/^\d$/.test(event.key)) {
      event.preventDefault()

      if (currentDigits.length >= PHONE_DIGITS_COUNT && !hasSelection) {
        setPhoneCaret(PHONE_DIGITS_COUNT)
        return
      }

      const nextDigits = `${currentDigits.slice(0, startDigitIndex)}${event.key}${currentDigits.slice(endDigitIndex)}`
      updatePhoneDigits(nextDigits, startDigitIndex + 1)
      return
    }

    if (event.key === "Backspace") {
      event.preventDefault()

      if (hasSelection) {
        const nextDigits = `${currentDigits.slice(0, startDigitIndex)}${currentDigits.slice(endDigitIndex)}`
        updatePhoneDigits(nextDigits, startDigitIndex)
        return
      }

      if (startDigitIndex > 0) {
        const nextDigits = `${currentDigits.slice(0, startDigitIndex - 1)}${currentDigits.slice(startDigitIndex)}`
        updatePhoneDigits(nextDigits, startDigitIndex - 1)
      } else {
        setPhoneCaret(0)
      }

      return
    }

    if (event.key === "Delete") {
      event.preventDefault()

      if (hasSelection) {
        const nextDigits = `${currentDigits.slice(0, startDigitIndex)}${currentDigits.slice(endDigitIndex)}`
        updatePhoneDigits(nextDigits, startDigitIndex)
        return
      }

      if (startDigitIndex < currentDigits.length) {
        const nextDigits = `${currentDigits.slice(0, startDigitIndex)}${currentDigits.slice(startDigitIndex + 1)}`
        updatePhoneDigits(nextDigits, startDigitIndex)
      } else {
        setPhoneCaret(currentDigits.length)
      }

      return
    }

    if (event.key === "Home") {
      event.preventDefault()
      setPhoneCaret(0)
      return
    }

    if (event.key === "End") {
      event.preventDefault()
      setPhoneCaret(currentDigits.length)
      return
    }

    if (event.key.length === 1) {
      event.preventDefault()
    }
  }

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updatePhoneDigits(getPhoneDigits(event.target.value))
  }

  const handlePhonePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    updatePhoneDigits(getPhoneDigits(event.clipboardData.getData("text")))
  }

  return (
    <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto sm:max-w-xl">
      <DialogHeader>
        <DialogTitle className="text-2xl">{title}</DialogTitle>
        <DialogDescription className="text-base leading-6">
          {description}
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${formId}-first-name`} className="mb-2 block text-sm font-medium text-foreground">
              Имя
            </label>
            <Input
              id={`${formId}-first-name`}
              type="text"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={(event) => updateField("firstName", event.target.value)}
              aria-invalid={Boolean(fieldErrors.firstName)}
              aria-describedby={fieldErrors.firstName ? `${formId}-first-name-error` : undefined}
              className="bg-background"
              placeholder="Ваше имя"
            />
            {fieldErrors.firstName && (
              <p id={`${formId}-first-name-error`} className="mt-2 text-sm text-destructive">
                {fieldErrors.firstName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${formId}-last-name`} className="mb-2 block text-sm font-medium text-foreground">
              Фамилия
            </label>
            <Input
              id={`${formId}-last-name`}
              type="text"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={(event) => updateField("lastName", event.target.value)}
              aria-invalid={Boolean(fieldErrors.lastName)}
              aria-describedby={fieldErrors.lastName ? `${formId}-last-name-error` : undefined}
              className="bg-background"
              placeholder="Ваша фамилия"
            />
            {fieldErrors.lastName && (
              <p id={`${formId}-last-name-error`} className="mt-2 text-sm text-destructive">
                {fieldErrors.lastName}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor={`${formId}-child-name`} className="mb-2 block text-sm font-medium text-foreground">
            Имя ребенка
          </label>
          <Input
            id={`${formId}-child-name`}
            type="text"
            value={formData.childName}
            onChange={(event) => updateField("childName", event.target.value)}
            aria-invalid={Boolean(fieldErrors.childName)}
            aria-describedby={fieldErrors.childName ? `${formId}-child-name-error` : undefined}
            className="bg-background"
            placeholder="Имя ребенка"
          />
          {fieldErrors.childName && (
            <p id={`${formId}-child-name-error`} className="mt-2 text-sm text-destructive">
              {fieldErrors.childName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className="mb-2 block text-sm font-medium text-foreground">
            Телефон
          </label>
          <Input
            id={`${formId}-phone`}
            ref={phoneInputRef}
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={formData.phone}
            onChange={handlePhoneChange}
            onFocus={() => setPhoneCaret()}
            onMouseUp={() => {
              const input = phoneInputRef.current

              if (input && (input.selectionStart ?? 0) < PHONE_PREFIX.length) {
                setPhoneCaret(0)
              }
            }}
            onPaste={handlePhonePaste}
            onKeyDown={handlePhoneKeyDown}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? `${formId}-phone-error` : undefined}
            className="bg-background"
          />
          {fieldErrors.phone && (
            <p id={`${formId}-phone-error`} className="mt-2 text-sm text-destructive">
              {fieldErrors.phone}
            </p>
          )}
        </div>

        {formError && (
          <p className="rounded-md border border-destructive/25 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {formError}
          </p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || isSubmitted}>
          {isSubmitting ? (
            <>
              <Spinner className="mr-2 h-4 w-4" />
              Отправка...
            </>
          ) : isSubmitted ? (
            "Заявка отправлена!"
          ) : (
            <>
              <Send className="h-4 w-4" />
              Отправить заявку
            </>
          )}
        </Button>

        {isSubmitted && (
          <p className="text-center text-sm text-primary">
            Спасибо! Мы свяжемся с вами в ближайшее время.
          </p>
        )}
      </form>
    </DialogContent>
  )
}

"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Spinner } from "@/components/ui/spinner"
import { APPLICATION_REQUEST_TYPES, isValidPhone, submitApplication } from "@/lib/application"

interface ContactFormData {
  name: string
  phone: string
  email: string
  message: string
}

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [phoneError, setPhoneError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isValidPhone(formData.phone)) {
      setPhoneError("Введите корректный телефон")
      return
    }

    setIsSubmitting(true)
    
    try {
      await submitApplication({
        ...formData,
        requestType: APPLICATION_REQUEST_TYPES.intro,
        source: "Форма в секции «Записаться на знакомство»",
      })

      toast({
        description: "Заявка успешно отправлена!",
      })

      setIsSubmitted(true)
      setFormData({ name: "", phone: "", email: "", message: "" })
      setPhoneError("")

      // Сбросить состояние через 5 секунд
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        variant: "destructive",
        description: "Ошибка отправки. Попробуйте позже.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Записаться на знакомство
          </h2>
          <p className="text-muted-foreground text-lg">
            Оставьте заявку, и мы свяжемся с вами, чтобы ответить на все вопросы и пригласить на экскурсию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background"
                  placeholder="Как вас зовут?"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Телефон
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value })
                    setPhoneError("")
                  }}
                  aria-invalid={Boolean(phoneError)}
                  aria-describedby={phoneError ? "phone-error" : undefined}
                  className="bg-background"
                  placeholder="+7 (___) ___-__-__"
                />
                {phoneError && (
                  <p id="phone-error" className="mt-2 text-sm text-destructive">
                    {phoneError}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background"
                  placeholder="example@mail.ru"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Сообщение (необязательно)
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background resize-none"
                  placeholder="Расскажите о вашем ребенке или задайте вопрос"
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || isSubmitted}>
                {isSubmitting ? (
                  <>
                    <Spinner className="mr-2 h-4 w-4" />
                    Отправка...
                  </>
                ) : isSubmitted ? "Заявка отправлена!" : "Отправить заявку"}
              </Button>
              {isSubmitted && (
                <p className="text-sm text-primary text-center">
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Телефон</p>
                    <a href="tel:+79148017821" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (914) 801-78-21
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:info@chita.school" className="text-muted-foreground hover:text-primary transition-colors">
                      info@chita.school
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Адрес</p>
                    <p className="text-muted-foreground">г. Чита, Северный микрорайон, 54</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "0 класс",
    price: "24 900",
    period: "/ месяц",
    description: "Подготовка к школе",
    features: [
      "Подготовка к 1 классу",
      "Английский язык",
      "Развивающие занятия",
      "Полный день до 17:00",
    ],
    note: "С дополнительными занятиями до 19:00 — 29 900 ₽",
    highlighted: false,
  },
  {
    name: "1-3 классы",
    price: "29 900",
    period: "/ месяц",
    description: "Начальная школа",
    features: [
      "Полная программа ФГОС",
      "Английский и китайский языки",
      "Все дополнительные занятия",
      "Продлёнка до 19:00",
      "Государственная аттестация",
    ],
    note: "Ежегодный взнос — 30 000 ₽",
    highlighted: false,
  },
]

const steps = [
  {
    number: "1",
    title: "Вы записываетесь на знакомство",
    description: "Оставьте заявку, и мы свяжемся с вами",
  },
  {
    number: "2",
    title: "Экскурсия по школе",
    description: "Вы знакомитесь с пространством, руководителем и будущими педагогами",
  },
  {
    number: "3",
    title: "Диагностика ребенка",
    description: "Создаём план адаптации ребенка к школьному режиму",
  },
  {
    number: "4",
    title: "Заключаем договор",
    description: "Оформляем документы на первый месяц обучения",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Стоимость обучения
          </h2>
          <p className="text-muted-foreground text-lg">
            Прозрачная система оплаты. Возможна оплата материнским капиталом.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 lg:p-10 ${
                plan.highlighted
                  ? "bg-secondary text-secondary-foreground ring-2 ring-secondary"
                  : "bg-card border border-border"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${
                plan.highlighted ? "text-secondary-foreground" : "text-foreground"
              }`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${
                plan.highlighted ? "text-secondary-foreground/80" : "text-muted-foreground"
              }`}>
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl lg:text-5xl font-bold ${
                  plan.highlighted ? "text-secondary-foreground" : "text-foreground"
                }`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${
                  plan.highlighted ? "text-secondary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                      plan.highlighted ? "text-secondary-foreground" : "text-primary"
                    }`} />
                    <span className={plan.highlighted ? "text-secondary-foreground" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`text-sm mb-6 ${
                plan.highlighted ? "text-secondary-foreground/70" : "text-muted-foreground"
              }`}>
                {plan.note}
              </p>
              <Button
                asChild
                variant={plan.highlighted ? "secondary" : "default"}
                className="w-full"
                size="lg"
              >
                <Link href="#contact">Получить консультацию</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Как поступить в школу
          </h3>
          <p className="text-muted-foreground">
            Простой и понятный процесс поступления
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-card rounded-2xl p-6 border border-border h-full">
                <span className="inline-flex w-10 h-10 rounded-full bg-primary/10 items-center justify-center text-primary font-bold mb-4">
                  {step.number}
                </span>
                <h4 className="font-medium text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

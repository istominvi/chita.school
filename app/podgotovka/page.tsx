import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { ApplicationModalTrigger } from "@/components/application-modal"
import { Button } from "@/components/ui/button"
import { Brain, CalendarDays, CheckCircle2, ClipboardList, Clock, GraduationCap, Languages, MonitorSmartphone, PencilLine, Sparkles, Ticket, UsersRound, Wallet } from "lucide-react"

export const metadata: Metadata = {
  title: "Подготовка к школе в Чите | Евразийская Начальная Школа",
  description:
    "Подготовка к школе для детей 4–7 лет в Северном микрорайоне Читы: программы за 3, 2 и 1 год до школы, английский язык, группы до 8 человек.",
}

const heroHighlights = [
  { icon: CalendarDays, title: "Программы", text: "3, 2 и 1 год до школы" },
  { icon: Languages, title: "Английский язык", text: "на каждом занятии" },
  { icon: UsersRound, title: "До 8 человек", text: "в группе" },
]

const directions = [
  "речь, словарный запас и умение формулировать мысли;",
  "математические представления, логику и мышление;",
  "внимание, память и умение работать по инструкции;",
  "подготовку руки к письму и графические навыки;",
  "самостоятельность, усидчивость и привычку к формату занятий.",
]

const programFeatures = [
  {
    icon: ClipboardList,
    text: "Определяем текущий уровень ребёнка на диагностике и подбираем подходящую возрастную группу.",
  },
  {
    icon: UsersRound,
    text: "Педагог на связи. Срезы знаний, промежуточные диагностики, обратная связь.",
  },
  {
    icon: GraduationCap,
    text: "Отдельные программы за 3, 2 и 1 год до школы с постепенным усложнением материала.",
  },
  {
    icon: Brain,
    text: "Программы составлены для современных детей — учтены особенности внимания и мотивации.",
  },
  {
    icon: Languages,
    text: "Два занятия в одном: английский и подготовка к школе.",
  },
  {
    icon: MonitorSmartphone,
    text: "Учимся в помещении настоящей школы, используем интерактивные доски, наглядные материалы, сенсорные игры.",
  },
]

const programs = [
  {
    age: "4–5 лет",
    subtitle: "3 года до школы",
    schedule: ["1 раз в неделю", "Основное занятие — 30 минут", "Английский язык — 45 минут"],
    items: [
      "развитие речи и словарного запаса",
      "знакомство с буквами и звуками",
      "первые математические представления",
      "развитие внимания, памяти и мышления",
      "подготовка руки к письму",
      "английский язык",
    ],
  },
  {
    age: "5–6 лет",
    subtitle: "2 года до школы",
    schedule: ["1 раз в неделю", "Основное занятие — 45 минут", "Английский язык — 45 минут"],
    items: [
      "подготовка к чтению",
      "развитие речи",
      "математика и логика",
      "подготовка руки к письму",
      "внимание, память и работа по инструкции",
      "английский язык",
    ],
  },
  {
    age: "6–7 лет",
    subtitle: "1 год до школы",
    schedule: ["1 раз в неделю", "Основное занятие — 60 минут", "Перерыв — 10 минут", "Английский язык — 45 минут"],
    items: [
      "чтение и развитие речи",
      "подготовка к письму",
      "математика и логика",
      "внимание и умение работать по инструкции",
      "подготовка к формату школьных занятий",
      "английский язык",
    ],
  },
]

const payments = [
  {
    icon: Wallet,
    name: "Абонемент",
    note: "1 раз в неделю, суббота",
    price: "5600",
    terms: [
      "действует один календарный месяц;",
      "оплата до первого занятия в месяце;",
      "место в группе закреплено;",
      "возможен перерасчёт по болезни от 1 недели;",
      "действуют скидки и льготы.",
    ],
    highlighted: true,
  },
  {
    icon: Ticket,
    name: "Разовый тариф",
    note: "одно занятие",
    price: "2000",
    terms: [
      "оплата до начала конкретного занятия;",
      "оплата не переносится на следующий месяц;",
      "место в группе не закреплено;",
      "нет перерасчёта и возврата.",
    ],
    highlighted: false,
  },
]

const galleryPhotos = [
  {
    src: "/photos/prodlenka_3.jpg",
    alt: "Дети показывают творческие работы в Евразийской начальной школе",
    frameClassName: "aspect-[4/5]",
    imageClassName: "object-[50%_42%]",
  },
  {
    src: "/photos/prodlenka_4.jpg",
    alt: "Девочка пишет за партой в Евразийской начальной школе",
    frameClassName: "aspect-square",
    imageClassName: "object-[54%_48%]",
  },
  {
    src: "/photos/prodlenka_6.jpg",
    alt: "Группа детей занимается творчеством в Евразийской начальной школе",
    frameClassName: "aspect-[4/5]",
    imageClassName: "object-[52%_52%]",
  },
  {
    src: "/photos/prodlenka_8.jpg",
    alt: "Кабинет для занятий в Евразийской начальной школе",
    frameClassName: "aspect-[4/5]",
    imageClassName: "object-[48%_48%]",
  },
  {
    src: "/photos/prodlenka_9.jpg",
    alt: "Дети делают поделки из бумаги в Евразийской начальной школе",
    frameClassName: "aspect-square",
    imageClassName: "object-[58%_50%]",
  },
  {
    src: "/photos/chita_school_4.jpg",
    alt: "Занятие в Евразийской начальной школе",
    frameClassName: "aspect-[4/5]",
    imageClassName: "object-[50%_50%]",
  },
]

export default function PodgotovkaPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <section className="relative isolate pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(138,206,217,0.35),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,184,107,0.36),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(250,252,252,1))]" />
          <div className="absolute -right-16 top-28 -z-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                <Sparkles className="h-4 w-4" />
                Северный мкр. Чита
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Подготовка к школе в Евразийской школе
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Программы для детей от 4 до 7 лет. Готовим к первому классу по возрасту: развиваем речь, мышление, математические навыки, готовим руку к письму и занимаемся английским языком.
              </p>
              <div className="mt-8">
                <ApplicationModalTrigger
                  intent="prep"
                  sourceDetail="первый экран страницы подготовки"
                  size="lg"
                  triggerClassName="bg-secondary px-8 text-base text-secondary-foreground hover:bg-secondary/90"
                >
                  Записаться на диагностику
                </ApplicationModalTrigger>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-200 text-amber-900">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-bold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[4/3] lg:aspect-[4/5]">
                  <Image
                    src="/photos/chita_school_1.jpg"
                    alt="Девочка выполняет задание на подготовке к школе в Евразийской начальной школе"
                    fill
                    sizes="(min-width: 1024px) 520px, calc(100vw - 48px)"
                    className="object-cover object-[50%_45%]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Как подготовить ребёнка к школе?</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              К первому классу ребёнку важно уметь не только читать, считать и держать ручку. Большую роль играет то, как он слышит педагога, понимает инструкцию, удерживает внимание и справляется с учебной нагрузкой.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              На занятиях в Евразийской начальной школе в Чите мы развиваем сразу несколько направлений:
            </p>
            <ul className="mt-6 space-y-3">
              {directions.map((direction) => (
                <li key={direction} className="flex gap-3 text-base leading-7 text-foreground">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  {direction}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Наша задача — дать ребёнку необходимую базу к школе и сохранить интерес к учёбе. Чтобы он шёл в первый класс с любопытством, уверенностью и желанием узнавать новое.
            </p>
            <div className="mt-8">
              <ApplicationModalTrigger
                intent="prep"
                sourceDetail="блок «Как подготовить ребёнка к школе»"
                size="lg"
                triggerClassName="bg-secondary px-8 text-base text-secondary-foreground hover:bg-secondary/90"
              >
                Записаться на диагностику
              </ApplicationModalTrigger>
            </div>
          </div>
        </section>

        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">как устроена программа</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                Программа помогает ребёнку постепенно подготовиться к выбранной школе по всем ключевым направлениям
              </h2>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-background p-3 shadow-xl lg:col-start-2 lg:row-start-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/photos/chita_school_3.JPG"
                    alt="Ученица за партой в Евразийской начальной школе"
                    fill
                    sizes="(min-width: 1024px) 360px, calc(100vw - 48px)"
                    className="object-cover object-[50%_40%]"
                  />
                </div>
              </div>
              <div className="grid gap-4 lg:col-start-1 lg:row-start-1">
                {programFeatures.slice(0, 3).map((feature, index) => (
                  <article key={feature.text} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">{index + 1}</span>
                      <feature.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                    </div>
                    <p className="text-sm leading-6 text-foreground">{feature.text}</p>
                  </article>
                ))}
              </div>
              <div className="grid gap-4 lg:col-start-3 lg:row-start-1">
                {programFeatures.slice(3).map((feature, index) => (
                  <article key={feature.text} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">{index + 4}</span>
                      <feature.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                    </div>
                    <p className="text-sm leading-6 text-foreground">{feature.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="px-8 text-base">
                <Link href="#price">Узнать расписание и цены</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="programs" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Выберите программу подготовки по возрасту ребёнка</h2>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {programs.map((program) => (
                <article key={program.age} className="flex h-full flex-col rounded-[2rem] border border-border bg-card p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-foreground">{program.age}</h3>
                  <p className="mt-2 inline-flex w-fit rounded-full bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">{program.subtitle}</p>
                  <ul className="mt-6 space-y-2">
                    {program.schedule.map((line) => (
                      <li key={line} className="flex gap-3 text-sm font-medium text-foreground">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-bold uppercase tracking-wide text-muted-foreground">В программе:</p>
                  <ul className="mt-3 space-y-2">
                    {program.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-foreground">
                        <PencilLine className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <ApplicationModalTrigger
                      intent="prep"
                      sourceDetail={`группа ${program.age}`}
                      size="lg"
                      triggerClassName="w-full bg-secondary text-base text-secondary-foreground hover:bg-secondary/90"
                    >
                      Записаться
                    </ApplicationModalTrigger>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="price" className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">стоимость</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Варианты оплаты</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Прозрачные условия: абонемент или разовое занятие — выберите, что удобнее.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {payments.map((payment) => (
                <div
                  key={payment.name}
                  className={`flex h-full flex-col rounded-[2rem] border p-8 shadow-sm ${
                    payment.highlighted ? "border-primary/40 bg-primary/10" : "border-border bg-card"
                  }`}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                    <payment.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{payment.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{payment.note}</p>
                  <ul className="mt-6 space-y-3">
                    {payment.terms.map((term) => (
                      <li key={term} className="flex gap-3 text-sm leading-6 text-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        {term}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto flex flex-wrap items-baseline gap-x-2 pt-8">
                    <span className="text-4xl font-bold text-foreground lg:text-5xl">{payment.price}</span>
                    <span className="text-muted-foreground">руб.</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="columns-2 gap-3 sm:columns-3 sm:gap-4">
              {galleryPhotos.map((photo) => (
                <div key={photo.src} className="mb-3 break-inside-avoid overflow-hidden rounded-2xl bg-background shadow-lg ring-1 ring-border/70 sm:mb-4">
                  <div className={`relative ${photo.frameClassName}`}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 30vw, 45vw"
                      className={`object-cover ${photo.imageClassName}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-secondary text-secondary-foreground shadow-xl">
              <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-foreground/70">с чего начать</p>
                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Начните с диагностики — подберём группу по возрасту и уровню</h2>
                  <p className="mt-4 max-w-2xl text-secondary-foreground/85">
                    Педагог посмотрит, что у ребёнка уже получается, и расскажет, какая программа подойдёт.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <ApplicationModalTrigger
                    intent="prep"
                    sourceDetail="блок в конце страницы подготовки"
                    size="lg"
                    triggerClassName="bg-white text-base text-foreground hover:bg-white/90"
                  >
                    Записаться на диагностику
                  </ApplicationModalTrigger>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}

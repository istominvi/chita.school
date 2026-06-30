import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { ApplicationModalTrigger } from "@/components/application-modal"
import { Button } from "@/components/ui/button"
import { BookOpenCheck, Bus, CheckCircle2, Clock, Download, Gamepad2, GraduationCap, HeartHandshake, Languages, MessageCircle, Palette, Presentation, Puzzle, Sparkles, Utensils, UsersRound } from "lucide-react"

export const metadata: Metadata = {
  title: "Продлёнка в Чите | Евразийская Начальная Школа",
  description:
    "Группа продлённого дня для 1–2 классов в Северном микрорайоне Читы: домашние задания, прогулки, питание, творчество и спокойный вечер до 19:00.",
}

const benefits = [
  {
    icon: BookOpenCheck,
    title: "Домашние задания под присмотром педагога",
    text: "Педагог помогает разобрать школьную программу, выполнить сложные задания. Учит ответственности и самоорганизации.",
  },
  {
    icon: Utensils,
    title: "Питание и режим",
    text: "Качественное питание организовано в отдельной столовой школы комбинатом детского питания. Обед и полдник или завтрак и обед в зависимости от графика посещения.",
  },
  {
    icon: Gamepad2,
    title: "Дополнительные занятия в том же здании",
    text: "Эмоциональный интеллект, «Читайка», английский, творчество включены в обязательную программу. Дети, которые остаются до 19:00, посещают ещё два кружка на выбор.",
  },
  {
    icon: HeartHandshake,
    title: "Атмосфера развития и дружбы",
    text: "После школы детям необходима эмоциональная разгрузка и возможность выдохнуть. Мы работаем над дружным коллективом детей, проводим занятия с психологом и организуем пространство, где хочется дружить и общаться.",
  },
]

const schedule = [
  ["После уроков", "забираем детей из 27-й и 22-й школ, сообщаем родителям, обедаем и мягко переключаемся после учебного дня"],
  ["Днём", "прогулки и игры на свежем воздухе. Обязательные занятия: домашние задания, английский, эмоциональный интеллект, «Читайка», творчество и проекты. Полдник"],
  ["С 17:00 или 19:00", "кружки по выбору, спокойное свободное время и обратная связь по прошедшему дню для родителей"],
]

const formats = [
  "для учеников начальной школы",
  "детей забираем из 27-й и 22-й школ",
  "два графика: до 17:00 и до 19:00",
  "каждый шаг с обратной связью для родителей",
]

const heroHighlights = [
  { icon: BookOpenCheck, text: "Домашние задания без слёз" },
  { icon: Bus, text: "Забираем детей сами из 27-й и 22-й школ" },
  { icon: Clock, text: "Два графика — для первой и второй смен" },
  { icon: MessageCircle, text: "Обратная связь — присылаем сообщения о том, где сейчас ребёнок" },
]

const requiredActivities = [
  "Выполнение домашних заданий и помощь в освоении школьной программы",
  "Английский язык",
  "Эмоциональный интеллект",
  "«Читайка»",
  "Творчество",
  "Проектная деятельность",
]

const optionalActivities = [
  "Китайский язык",
  "Робототехника",
  "Программирование",
  "Современные танцы",
  "Театральная студия",
  "Школа живописи",
]

const dayGalleryPhotos = [
  {
    src: "/photos/prodlenka_2.jpg",
    alt: "Дети выполняют задания на продлёнке",
    frameClassName: "aspect-[4/5]",
    imageClassName: "object-[52%_54%]",
  },
  {
    src: "/photos/prodlenka_3.jpg",
    alt: "Дети показывают творческие работы на продлёнке",
    frameClassName: "aspect-square",
    imageClassName: "object-[50%_42%]",
  },
  {
    src: "/photos/prodlenka_4.jpg",
    alt: "Ученица пишет за партой на продлёнке",
    frameClassName: "aspect-[4/5]",
    imageClassName: "object-[54%_48%]",
  },
  {
    src: "/photos/prodlenka_5.jpg",
    alt: "Дети делают творческое задание на продлёнке",
    frameClassName: "aspect-[4/5]",
    imageClassName: "object-[48%_48%]",
  },
  {
    src: "/photos/prodlenka_6.jpg",
    alt: "Группа детей занимается творчеством",
    frameClassName: "aspect-[4/5]",
    imageClassName: "object-[52%_52%]",
  },
  {
    src: "/photos/prodlenka_7.jpg",
    alt: "Дети общаются за столом на продлёнке",
    frameClassName: "aspect-square",
    imageClassName: "object-[55%_52%]",
  },
  {
    src: "/photos/prodlenka_8.jpg",
    alt: "Кабинет для занятий продлёнки",
    frameClassName: "aspect-[4/5]",
    imageClassName: "object-[48%_48%]",
  },
  {
    src: "/photos/prodlenka_9.jpg",
    alt: "Дети делают поделки из бумаги",
    frameClassName: "aspect-[4/5]",
    imageClassName: "object-[58%_50%]",
  },
  {
    src: "/photos/prodlenka_10.jpg",
    alt: "Ребёнок показывает поделку на продлёнке",
    frameClassName: "aspect-square",
    imageClassName: "object-[52%_48%]",
  },
]

export default function ProdlenkaPage() {
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
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Группа продлённого дня для 1–2 классов
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Сочетаем тёплую атмосферу, поддержку взрослых, развивающую среду и системную работу — чтобы ребёнку было комфортно учиться, отдыхать и развиваться после школы.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ApplicationModalTrigger
                  intent="presentation"
                  size="lg"
                  triggerClassName="bg-secondary px-8 text-base text-secondary-foreground hover:bg-secondary/90"
                >
                  Получить презентацию
                </ApplicationModalTrigger>
                <Button asChild variant="outline" size="lg" className="bg-white/60 px-8 text-base">
                  <Link href="/prodlenka.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Открыть PDF
                  </Link>
                </Button>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {heroHighlights.map((item) => (
                  <div key={item.text} className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-200 text-amber-900">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image src="/photos/chita_school_4.jpg" alt="Продлёнка в Евразийской начальной школе" fill className="object-cover" priority />
                </div>
                <div className="grid gap-3 p-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-primary/15 p-4">
                    <Clock className="mb-2 h-5 w-5 text-primary" />
                    <p className="font-bold text-foreground">до 19:00</p>
                    <p className="text-xs text-muted-foreground">удобно после работы</p>
                  </div>
                  <div className="rounded-2xl bg-secondary/15 p-4">
                    <UsersRound className="mb-2 h-5 w-5 text-secondary" />
                    <p className="font-bold text-foreground">младшие классы</p>
                    <p className="text-xs text-muted-foreground">бережная адаптация</p>
                  </div>
                  <div className="rounded-2xl bg-amber-100 p-4">
                    <BookOpenCheck className="mb-2 h-5 w-5 text-amber-700" />
                    <p className="font-bold text-foreground">домашка</p>
                    <p className="text-xs text-muted-foreground">с педагогом</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-8 pb-10 lg:-mt-12 lg:pb-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[16/9] lg:aspect-[16/7]">
                <Image
                  src="/photos/prodlenka_1.jpg"
                  alt="Дети занимаются на продлёнке в Евразийской начальной школе"
                  fill
                  sizes="(min-width: 1280px) 1216px, calc(100vw - 48px)"
                  className="object-cover object-[54%_54%]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-20 lg:pt-14 lg:pb-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="rounded-[2rem] bg-primary/15 p-8 lg:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Почему нам доверяют</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Школа выросла из сети международных школ английского языка, которая давно работает в Чите. Мы уделяем английскому особое внимание: дети изучают язык как второй родной и к 4 классу готовятся к международным экзаменам.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <Languages className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">Дополнительные занятия встроены в продлёнку</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Английский, эмоциональный интеллект, «Читайка» и творчество проходят в том же здании и входят в обязательную программу.</p>
              </article>
              <article className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <MessageCircle className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">Обратная связь для вашего спокойствия</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Отправляем сообщения, когда ребёнок пришёл или его забрали из школы, сообщаем о том, как проходит день и как он справился с домашкой. Присылаем фотоотчёты.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Что внутри программы</h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <article key={item.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>



        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15">
                  <Presentation className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Обязательные занятия в программе продлёнки</h3>
                <ul className="mt-6 space-y-3">
                  {requiredActivities.map((activity) => (
                    <li key={activity} className="flex gap-3 text-sm leading-6 text-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] border border-border bg-secondary p-8 text-secondary-foreground shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <Palette className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Дополнительные занятия по выбору ребёнка</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {optionalActivities.map((activity) => (
                    <div key={activity} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 text-sm font-medium">
                      <Puzzle className="h-4 w-4 shrink-0" />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">День организован с учётом потребностей ребёнка и семьи</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">После уроков детям нужно переключиться, не бояться оценок и строгих учителей. Мы создаём уютное принимающее пространство, где есть место отдыху, развитию и увлечениям.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {formats.map((format) => (
                  <span key={format} className="rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border">{format}</span>
                ))}
              </div>
              <div className="mt-12 columns-2 gap-3 sm:columns-3 sm:gap-4">
                {dayGalleryPhotos.map((photo) => (
                  <div key={photo.src} className="mb-3 break-inside-avoid overflow-hidden rounded-2xl bg-background shadow-lg ring-1 ring-border/70 sm:mb-4">
                    <div className={`relative ${photo.frameClassName}`}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 180px, (min-width: 640px) 30vw, 45vw"
                        className={`object-cover ${photo.imageClassName}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {schedule.map(([time, text], index) => (
                <div key={time} className="flex gap-4 rounded-3xl border border-border bg-background p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">{index + 1}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{time}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 rounded-[2rem] border border-border bg-card p-8 shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">кто рядом с детьми</p>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Занятия ведут два постоянных педагога</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-background p-6">
                  <UsersRound className="mb-4 h-7 w-7 text-primary" />
                  <h3 className="font-bold text-foreground">Основной педагог</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Помогает с домашними заданиями, ведёт образовательный ритм и поддерживает ребёнка в учебных задачах.</p>
                </div>
                <div className="rounded-3xl bg-background p-6">
                  <HeartHandshake className="mb-4 h-7 w-7 text-primary" />
                  <h3 className="font-bold text-foreground">Воспитатель</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Отвечает за стабильность, режим, тёплую атмосферу и спокойное течение дня на продлёнке.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-secondary text-secondary-foreground shadow-xl">
              <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-foreground/70">хотите посмотреть детали?</p>
                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Оставьте заявку — расскажем по местам, расписанию и условиям</h2>
                  <p className="mt-4 max-w-2xl text-secondary-foreground/85">Можно сразу открыть исходный PDF из репозитория или написать нам, и мы поможем понять, подходит ли продлёнка вашему ребёнку.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90">
                    <Link href="#contact">Хочу на продлёнку</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-secondary-foreground hover:bg-white/10 hover:text-secondary-foreground">
                    <Link href="/prodlenka.pdf" target="_blank">Скачать PDF</Link>
                  </Button>
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

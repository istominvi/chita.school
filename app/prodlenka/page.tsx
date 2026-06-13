import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"
import { BookOpenCheck, Clock, Download, Gamepad2, HeartHandshake, Sparkles, Utensils, UsersRound } from "lucide-react"

export const metadata: Metadata = {
  title: "Продлёнка в Чите | Евразийская Начальная Школа",
  description:
    "Продлёнка для младших школьников в Евразийской Начальной Школе: домашние задания, прогулки, питание, творчество и спокойный вечер до 19:00.",
}

const benefits = [
  {
    icon: BookOpenCheck,
    title: "Домашка без семейных батлов",
    text: "Педагог помогает разобрать задания, довести их до результата и оставить вечер дома для отдыха.",
  },
  {
    icon: Utensils,
    title: "Питание и режим",
    text: "Обед, полдник, питьевой режим и понятное расписание, чтобы ребёнок не выгорал после уроков.",
  },
  {
    icon: Gamepad2,
    title: "Игры, творчество, движение",
    text: "Настолки, мастер-классы, прогулки и активные паузы вместо бесконечного ожидания родителей.",
  },
  {
    icon: HeartHandshake,
    title: "Безопасно и по-доброму",
    text: "Ребёнок остаётся в школьном пространстве под присмотром взрослых, которые знают детей по именам.",
  },
]

const schedule = [
  ["После уроков", "обед, отдых, переключение после учебного дня"],
  ["Днём", "прогулка, кружки, творческие и игровые активности"],
  ["Вторая половина", "спокойная работа над домашними заданиями с педагогом"],
  ["До 19:00", "свободное время, чтение, настольные игры и встреча родителей"],
]

const formats = [
  "для учеников начальной школы",
  "можно оставаться после основных занятий",
  "подходит семьям, где родителям важно спокойно закрыть рабочий день",
  "всё проходит в знакомой школьной среде",
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
                Новая отдельная программа
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Продлёнка, где ребёнок не просто «досиживает»
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Берём на себя самое нервное после школы: режим, питание, домашние задания, прогулки и тёплую атмосферу. Родители спокойно работают, дети проводят день с пользой.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-secondary px-8 text-base text-secondary-foreground hover:bg-secondary/90">
                  <Link href="#contact">Записаться на продлёнку</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/60 px-8 text-base">
                  <Link href="/prodlenka.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Открыть PDF
                  </Link>
                </Button>
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

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Что внутри программы</h2>
              <p className="mt-4 text-lg text-muted-foreground">Лэндинг-версия по материалам PDF: собрали ключевые смыслы в понятные блоки для родителей.</p>
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

        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">День собран так, чтобы всем было легче</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">После уроков детям нужно не ещё больше гонки, а понятный ритм: поесть, выдохнуть, подвигаться, сделать важное и спокойно дождаться родителей.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {formats.map((format) => (
                  <span key={format} className="rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border">{format}</span>
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

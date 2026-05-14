import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const DETAILS_URL = "#contact"
const MAX_URL = "https://max.ru/chita.school"
const TELEGRAM_URL = "https://t.me/chita_school"

export function OpenDayBanner() {
  return (
    <section
      className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-[radial-gradient(circle_at_88%_12%,rgba(138,206,217,0.42),transparent_28%),linear-gradient(115deg,#fffdf8_0%,#f8fcff_48%,#eef9fb_100%)] p-6 shadow-xl shadow-primary/10 sm:p-8 lg:min-h-[260px] lg:p-10"
      aria-labelledby="open-day-title"
    >
      <div className="absolute -left-10 bottom-4 h-24 w-24 rounded-full bg-secondary/25 blur-2xl" aria-hidden="true" />
      <div className="absolute left-[45%] top-6 hidden h-20 w-20 rounded-full border border-dashed border-primary/50 md:block" aria-hidden="true" />
      <div className="absolute right-[38%] top-10 hidden grid-cols-4 gap-2 opacity-50 lg:grid" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-primary" />
        ))}
      </div>

      <div className="relative z-10 grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(260px,38%)] lg:grid-cols-[minmax(0,1fr)_minmax(360px,42%)]">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-foreground shadow-sm ring-1 ring-primary/20">
            Приглашаем родителей и детей
          </p>
          <h2
            id="open-day-title"
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            День открытых дверей
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            19 мая в 18:30
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Покажем школу, познакомим с командой и ответим на вопросы о поступлении в 0–2 классы.
          </p>

          <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
            <Link
              href={DETAILS_URL}
              className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/30"
            >
              Узнать подробнее
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href={MAX_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Открыть сообщество школы в MAX"
              className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-white/90 px-5 py-3 text-base font-semibold text-foreground shadow-md ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
            >
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl shadow-sm" aria-hidden="true">
                <img src="/MAX.svg" alt="" className="h-full w-full object-contain" />
              </span>
              MAX
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Открыть Telegram школы"
              className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-white/90 px-5 py-3 text-base font-semibold text-foreground shadow-md ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/30"
            >
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full shadow-sm" aria-hidden="true">
                <img src="/Telegram.svg" alt="" className="h-full w-full object-contain" />
              </span>
              Telegram
            </a>
          </div>
        </div>

        <div className="relative min-h-[210px] md:min-h-[235px] lg:min-h-[260px]">
          <div className="absolute inset-0 translate-x-4 rounded-[2rem] bg-primary/15 blur-2xl" aria-hidden="true" />
          <div className="relative h-full min-h-[210px] overflow-hidden rounded-[1.75rem] border-8 border-white bg-muted shadow-2xl md:min-h-[235px] lg:min-h-[260px] lg:[clip-path:ellipse(76%_68%_at_54%_50%)]">
            <Image
              src="/photos/dayofopendoors.png"
              alt="День открытых дверей в Евразийской начальной школе"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 38vw, 520px"
              className="object-cover object-[56%_52%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

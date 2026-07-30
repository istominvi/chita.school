import Image from "next/image"
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react"
import { ApplicationModalTrigger } from "@/components/application-modal"

export function OpenDayBanner() {
  return (
    <section
      className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-[radial-gradient(circle_at_88%_12%,rgba(138,206,217,0.42),transparent_28%),linear-gradient(115deg,#fffdf8_0%,#f8fcff_48%,#eef9fb_100%)] p-6 shadow-xl shadow-primary/10 sm:p-8 lg:p-10"
      aria-labelledby="open-day-title"
    >
      <div className="absolute -left-10 bottom-4 h-24 w-24 rounded-full bg-secondary/25 blur-2xl" aria-hidden="true" />
      <div className="absolute left-[45%] top-6 hidden h-20 w-20 rounded-full border border-dashed border-primary/50 md:block" aria-hidden="true" />
      <div className="absolute right-[38%] top-10 hidden grid-cols-4 gap-2 opacity-50 lg:grid" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-primary" />
        ))}
      </div>

      <div className="relative z-10 grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(260px,38%)] lg:grid-cols-[minmax(0,1fr)_minmax(380px,43%)] lg:gap-12">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-foreground shadow-sm ring-1 ring-primary/20">
            <CalendarDays className="h-4 w-4 text-secondary" aria-hidden="true" />
            19 августа · 18:00
          </p>
          <h2
            id="open-day-title"
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            День открытых дверей
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Приглашаем детей от 6 до 9 лет и родителей.
          </p>

          <p className="mt-5 text-base font-semibold text-foreground sm:text-lg">Вас ждут:</p>
          <ul className="mt-3 grid gap-3 text-base font-medium text-foreground sm:text-lg">
            <li className="flex gap-3">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <span>Знакомство со школой и экскурсия.</span>
            </li>
            <li className="flex gap-3">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <span>Интерактивные уроки и мастер-классы.</span>
            </li>
            <li className="flex gap-3">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
              <span>Розыгрыш подарков для участников.</span>
            </li>
          </ul>

          <div className="mt-6">
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Узнайте подробности и забронируйте место на встрече.
            </p>
            <ApplicationModalTrigger
              intent="openDay"
              triggerMode="custom"
              triggerClassName="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/30 sm:w-auto"
            >
              Записаться
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ApplicationModalTrigger>
          </div>
        </div>

        <div className="relative min-h-[230px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[390px]">
          <div className="absolute inset-0 translate-x-4 rounded-[2rem] bg-primary/15 blur-2xl" aria-hidden="true" />
          <div className="relative h-full min-h-[230px] overflow-hidden rounded-[1.75rem] border-8 border-white bg-muted shadow-2xl sm:min-h-[300px] md:min-h-[340px] lg:min-h-[390px] lg:[clip-path:ellipse(76%_68%_at_54%_50%)]">
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

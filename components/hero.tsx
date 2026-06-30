import Image from "next/image"
import { ApplicationModalTrigger } from "@/components/application-modal"
import { OpenDayBanner } from "@/components/open-day-banner"
import { BookOpen, Users, Clock, Award } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Английский (с 0 класса) и китайский\n(с 1 класса)",
    description: "",
    highlighted: true,
  },
  {
    icon: Users,
    title: "До 20 детей в классе",
    description: "Индивидуальный подход",
  },
  {
    icon: Clock,
    title: "Полный день 8:30-17:00",
    description: "Продлёнка до 19:00",
  },
  {
    icon: Award,
    title: "Гос. аттестация",
    description: "И полноценные школьные документы",
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20">
      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Набор на 2026-27 год в 0-2 классы
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance mb-2">
              Евразийская<br />Начальная Школа
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl text-pretty">
              Достигаем высоких академических результатов, сочетаем классические и инновационные методики преподавания в дружелюбной к ребенку атмосфере
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <ApplicationModalTrigger
                intent="intro"
                size="lg"
                triggerClassName="text-base px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Записаться на знакомство
              </ApplicationModalTrigger>
              <ApplicationModalTrigger
                intent="presentation"
                variant="outline"
                size="lg"
                triggerClassName="text-base px-8 bg-transparent border-foreground/20 hover:bg-foreground/5"
              >
                Получить презентацию
              </ApplicationModalTrigger>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/photos/chita_school_1.jpg"
                    alt="Евразийская начальная школа в Чите"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/photos/chita_school_2.jpg"
                    alt="Занятия в Евразийской начальной школе"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/photos/chita_school_3.JPG"
                    alt="Учебная атмосфера Евразийской начальной школы"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="mt-16">
          <OpenDayBanner />
        </div>

        {/* Features */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-5 lg:p-6 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3
                className={`text-foreground text-sm lg:text-base whitespace-pre-line ${feature.highlighted ? "font-bold" : "font-semibold mb-1"}`}
              >
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-xs lg:text-sm text-muted-foreground">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"

const programs = [
  {
    number: "01",
    title: "0 класс",
    subtitle: "Подготовка к школе",
    age: "5–7 лет",
    cardClass: "bg-primary/18 border-primary/25",
    titleClass: "text-primary-foreground",
    accentClass: "bg-primary text-primary-foreground",
    iconClass: "text-primary-foreground",
    details: [
      "Учимся как настоящие школьники с сентября по май.",
      "Даём дошкольнику все необходимые знания, умения и навыки.",
      "В июне — школьный городской клуб.",
      "В классе не более 20 детей, возраст 5–7 лет.",
      "Полный день с 08:30 до 19:00.",
      "5 дней в неделю с понедельника по пятницу.",
    ],
    lessons: [
      "Подготовка к школе: чтение, развитие речи, математика, окружающий мир. Цель 0 класса — подготовить детей к поступлению в любую школу: научить осознанно читать, подготовить к письму, развить память, внимание, собранность и желание учиться.",
      "Дополнительные занятия: английский язык 3 раза в неделю, изобразительное искусство, музыка, физкультура, эмоциональный интеллект.",
      "2 занятия по выбору: робототехника, программирование, курс инженера, современные танцы, театральная студия.",
    ],
  },
  {
    number: "02",
    title: "1 класс",
    subtitle: "Начальная школа",
    age: "1 класс",
    cardClass: "bg-secondary/18 border-secondary/25",
    titleClass: "text-secondary",
    accentClass: "bg-secondary text-secondary-foreground",
    iconClass: "text-secondary",
    details: [
      "Учимся как настоящие школьники с сентября по май.",
      "В июне — школьный городской клуб.",
      "В классе не более 20 детей.",
      "Полный день с 08:30 до 17:00.",
      "Возможно посещение продлёнки до 19:00.",
      "5 дней в неделю с понедельника по пятницу.",
      "Делаем уроки в школе.",
    ],
    lessons: [
      "Все предметы в соответствии с федеральным стандартом: математика, литературное чтение, чистописание, окружающий мир, физкультура, музыка, изобразительное искусство, технология.",
      "Дополнительные занятия: английский язык 3 раза в неделю, эмоциональный интеллект, подготовка к олимпиадам, подготовка проектов.",
      "2 занятия по выбору во второй половине дня: робототехника, программирование, биотехнологии, курс инженера, искусственный интеллект, вокал, 3D-моделирование, современные танцы, школа живописи, театральная студия.",
    ],
  },
  {
    number: "03",
    title: "Группа продлённого дня",
    subtitle: "Продлёнка",
    age: "1–2 класс",
    cardClass: "bg-[#8ACED9]/16 border-[#8ACED9]/30",
    titleClass: "text-[#0f6f78]",
    accentClass: "bg-[#0f6f78] text-white",
    iconClass: "text-[#0f6f78]",
    details: [
      "Продлёнка работает с сентября по май.",
      "Во время школьных каникул — каникулярные программы полного дня.",
      "Для учеников 1–2 классов.",
      "В группе не более 20 детей.",
      "Основное время работы с 12:00 до 17:00, а для ребят второй смены есть первая половина дня с 08:30 до 12:00.",
      "Возможно посещение продлёнки до 19:00.",
      "5 дней в неделю с понедельника по пятницу.",
      "Забираем и отводим детей из школ №27 и №55.",
      "Выполняем домашние задания с педагогом.",
    ],
    lessons: [
      "Выполнение домашних заданий и помощь в освоении школьной программы.",
      "Обязательные занятия: эмоциональный интеллект, «Читайка», творчество, проектная деятельность.",
      "Прогулки, игры и подготовка к совместным мероприятиям.",
      "Дополнительные занятия, 2 по выбору: английский язык, китайский язык, робототехника, программирование, курс инженера, современные танцы, театральная студия, школа живописи.",
      "Три диагностики в течение года: входящая, промежуточная и итоговая. Диагностику проводят педагог, психолог и логопед — так мы отслеживаем адаптацию, развитие и комфорт ребёнка в обучении.",
    ],
  },
]

export function Program() {
  return (
    <section id="program" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary mb-3">
            Программы
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Как всё устроено
          </h2>
          <p className="text-muted-foreground text-lg">
            Собрали основные форматы обучения и продлёнки в понятные карточки с расписанием, занятиями и условиями.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className={`relative flex min-h-[720px] flex-col overflow-hidden rounded-[2rem] border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 lg:p-8 ${program.cardClass}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-sm font-medium text-muted-foreground">
                    {program.subtitle}
                  </p>
                  <h3 className={`text-4xl font-bold leading-tight tracking-tight sm:text-5xl ${program.titleClass}`}>
                    {program.title}
                  </h3>
                </div>
                <Link
                  href="#contact"
                  aria-label={`Получить подробное расписание: ${program.title}`}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/90 shadow-sm transition-colors hover:bg-white"
                >
                  <ArrowUpRight className={`h-7 w-7 ${program.iconClass}`} />
                </Link>
              </div>

              <div className="mt-8 space-y-7 pb-24">
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-foreground">Как всё устроено</h4>
                  <ul className="space-y-3">
                    {program.details.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground">
                        <Check className={`mt-1 h-4 w-4 shrink-0 ${program.iconClass}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 text-lg font-semibold text-foreground">Какие занятия входят</h4>
                  <ul className="space-y-3">
                    {program.lessons.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground">
                        <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${program.accentClass}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto flex items-end justify-between gap-4">
                <span className={`rounded-full px-5 py-3 text-sm font-medium ${program.accentClass}`}>
                  {program.age}
                </span>
                <span className="select-none text-7xl font-bold leading-none text-white/90 lg:text-8xl">
                  {program.number}
                </span>
              </div>

              <Link
                href="#contact"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${program.accentClass}`}
              >
                Получить подробное расписание
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

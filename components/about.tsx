import ExportedImage from "next-image-export-optimizer"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Высокие образовательные стандарты — усиленная программа ФГОС",
  "Углубленный английский и китайский включены в программу",
  "Робототехника, программирование, биотехнологии",
  "Образовательная лицензия, оплата материнским капиталом",
]

const foundations = [
  {
    icon: "/images/icon-helen-doron.png",
    title: "Helen Doron English",
    description:
      "Школа основана на базе сети школ английского языка Helen Doron. Филиал в Чите работает уже 10 лет. Методика преподавания предполагает углубленное изучение английского языка как второго родного. Дети сдают к 4 классу международные экзамены на уровень B1.",
  },
  {
    icon: "/images/icon-fgos.png",
    title: "Программа ФГОС",
    description:
      "Занятия полностью соответствуют программе ФГОС и включают углубленное изучение предметов, защиту исследовательских проектов, опыты и эксперименты. 2 раза в год ученики Евразийской начальной школы проходят государственную аттестацию.",
  },
  {
    icon: "/images/icon-injinirium.png",
    title: "Инжинириум МГТУ им. Баумана",
    description:
      "Школа основана на базе центра молодежного инновационного творчества «Инжинириум МГТУ им.Баумана» и предлагает посещение курсов: робототехника, биотехнологии, программирование, инженерное дело, искусственный интеллект.",
  },
  {
    icon: "/images/icon-olympiad.png",
    title: "Индивидуальная траектория",
    description:
      "За счет вариативной части дополнительных занятий составляем индивидуальную траекторию каждому ребенку. Выстраиваем олимпиадное движение вокруг конкретного ученика — в соответствии с его сильными сторонами, планами и желаниями. Успех учащегося — наш приоритет, мы ориентируемся на академические успехи и на развитие природных талантов учеников.",
  },
  {
    icon: "/images/icon-candle.png",
    title: "Дружелюбная атмосфера",
    description:
      "Работаем над созданием дружного коллектива и дружелюбной атмосферы. Раз в неделю у учеников занятия по эмоциональному интеллекту с психологом, развитию критического мышления. Ежедневно в классах проводятся вечерние свечки для рефлексии о пройденном дне. В конце учебной недели ребята собираются на «детсовет», чтобы обсудить планы и накопившиеся вопросы.",
  },
  {
    icon: "/images/icon-asia.png",
    title: "Китайский язык",
    description:
      "Евразийская начальная школа находится территориально между Азией и Европой. Владение китайским языком открывает карьерные возможности в бизнесе и международных отношениях. Поэтому китайский язык является обязательным предметом со 2 класса. Кроме того, изучение китайского языка развивает когнитивные навыки и расширяет кругозор.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            О нашей школе
          </h2>
          <p className="text-muted-foreground text-lg">
            Создаём условия для всестороннего развития каждого ребёнка
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Что делает нас особенными
            </h3>
            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
              <h4 className="font-semibold text-foreground mb-2">Набор на 2025/26 учебный год</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Открыт набор в 0, 1, 2 и 3 классы. Присоединяйтесь к нашей школьной семье!
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ExportedImage
                src="/images/photo-18.jpg"
                alt="Современный класс Helen Doron English"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundations.map((foundation) => (
            <div
              key={foundation.title}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-16 mb-6 flex items-center">
                <ExportedImage
                  src={foundation.icon || "/placeholder.svg"}
                  alt={foundation.title}
                  width={160}
                  height={64}
                  className="h-12 w-auto object-contain object-left"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {foundation.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

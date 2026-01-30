import { 
  Cpu, 
  Code, 
  Microscope, 
  Wrench, 
  Bot, 
  Box, 
  Music, 
  Palette, 
  Theater, 
  Mic 
} from "lucide-react"

const activities = [
  { name: "Робототехника", icon: Cpu },
  { name: "Программирование", icon: Code },
  { name: "Биотехнологии", icon: Microscope },
  { name: "Курс инженера", icon: Wrench },
  { name: "Искусственный интеллект", icon: Bot },
  { name: "3D моделирование", icon: Box },
  { name: "Современные танцы", icon: Music },
  { name: "Школа живописи", icon: Palette },
  { name: "Театральная студия", icon: Theater },
  { name: "Вокал", icon: Mic },
]

const olympiads = [
  "Робототехника",
  "Программирование",
  "Инженерные курсы",
  "Английский",
  "Математика",
]

export function Activities() {
  return (
    <section id="activities" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Дополнительные занятия
          </h2>
          <p className="text-muted-foreground text-lg">
            Дети каждый новый учебный модуль самостоятельно выбирают минимум 2 дополнительных занятия.
            Вам не потребуется после школы возить ребенка по кружкам.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {activities.map((activity) => (
            <div
              key={activity.name}
              className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <activity.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground text-sm">{activity.name}</h3>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-3xl p-8 lg:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Олимпиадное движение
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Каждый ученик имеет возможность принимать участие в олимпиадах и посещать дополнительные занятия для подготовки к олимпиадам.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Участие в олимпиадах даёт возможность пополнить портфолио, получить опыт соревнования, расширить свои знания в интересующей области и стать более уверенными в своих силах в старших классах.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                Направления олимпиад
              </p>
              <div className="flex flex-wrap gap-3">
                {olympiads.map((olympiad) => (
                  <span
                    key={olympiad}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {olympiad}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const afterSchool = [
  "Занимаются с тьютором для реализации индивидуального образовательного маршрута",
  "Выполняют домашнюю работу самостоятельно",
  "Посещают дополнительные занятия по выбору",
  "Гуляют, играют и готовятся к совместным школьным мероприятиям",
]

export function Program() {
  return (
    <section id="program" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Во второй половине дня
            </h2>
            <p className="text-muted-foreground">
              Продлённый день с 17:00 до 19:00 позволяет детям развиваться всесторонне
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {afterSchool.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border"
              >
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold shrink-0 text-sm">
                  {index + 1}
                </span>
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export function Director() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-background rounded-3xl p-8 lg:p-12 border border-border">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
              <Image
                src="/images/director.jpg"
                alt="Евгения Истомина — директор школы"
                width={160}
                height={160}
                className="w-28 h-28 lg:w-40 lg:h-40 rounded-2xl object-cover shrink-0"
              />
              <div>
                <blockquote className="text-base lg:text-lg text-foreground leading-relaxed mb-6">
                  <p className="mb-3 font-semibold">Дорогие родители!</p>
                  <p className="mb-3">
                    Вкладывать силы в детей, их развитие и образование — самое благородное и важное дело. 
                    Наша миссия — обеспечить образование мирового класса в безопасной и уважительной среде, 
                    где каждый ребенок сможет раскрыть свой интеллектуальный и творческий потенциал.
                  </p>
                  <p className="mb-3">
                    Мы хотим, чтобы ученики Евразийской начальной школы не просто учились, а исследовали, 
                    стремились узнавать больше и глубже, открывали для себя новое и делали мир вокруг лучше. 
                    Но самое главное — чтобы они всегда чувствовали поддержку нашей команды и вашу, родительскую.
                  </p>
                  <p>
                    Я уверена, что в нашей школе будут расти, учиться и творить счастливые дети. 
                    Давайте вместе создавать для них эту возможность!
                  </p>
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-foreground">Евгения Истомина</p>
                  <p className="text-sm text-muted-foreground">Директор школы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

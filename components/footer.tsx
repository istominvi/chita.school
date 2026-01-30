import Link from "next/link"
import Image from "next/image"

const navigation = {
  main: [
    { name: "О школе", href: "#about" },
    { name: "Программа", href: "#program" },
    { name: "Занятия", href: "#activities" },
    { name: "Стоимость", href: "#pricing" },
    { name: "Вопросы", href: "#faq" },
    { name: "Контакты", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Логотип Евразийской Школы"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-lg font-semibold text-foreground">
              Евразийская Школа
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Евразийская Начальная Школа. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground">
            г. Чита, Забайкальский край
          </p>
        </div>
      </div>
    </footer>
  )
}

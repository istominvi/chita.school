import Link from "next/link"

import { CookieSettingsButton } from "@/components/cookie-settings-button"

const navigation = {
  main: [
    { name: "О школе", href: "#about" },
    { name: "Программа", href: "#program" },
    { name: "Занятия", href: "#activities" },
    { name: "Стоимость", href: "#pricing" },
    { name: "Вопросы", href: "#faq" },
    { name: "Контакты", href: "#contact" },
    { name: "Политика обработки данных", href: "/privacy" },
    { name: "Согласие на обработку данных", href: "/consent" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Евразийская Начальная Школа. Все права защищены.
          </p>
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
            <CookieSettingsButton className="text-sm text-muted-foreground transition-colors hover:text-foreground" />
          </nav>
        </div>
      </div>
    </footer>
  )
}

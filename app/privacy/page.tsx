import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Политика обработки персональных данных | Евразийская Начальная Школа",
  description: "Политика обработки персональных данных АНО «Евразийская школа», г. Чита.",
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold text-foreground">
        Политика обработки персональных данных
      </h1>
      {/* ЗАГЛУШКА: текст политики готовится отдельно, страница нужна, чтобы ссылки из форм не вели в 404. */}
      <p className="mb-4 text-muted-foreground">
        Текст политики обработки персональных данных АНО «Евразийская школа» готовится к публикации.
      </p>
      <p className="mb-4 text-muted-foreground">
        Пока он не опубликован, по вопросам обработки персональных данных пишите на{" "}
        <a href="mailto:info@chita.school" className="text-primary underline underline-offset-2">
          info@chita.school
        </a>
        .
      </p>
      <p className="mb-4 text-muted-foreground">
        Сайт использует сервис веб-аналитики Яндекс Метрика: он собирает обезличенные данные о
        посещениях (страницы, устройство, источник перехода), чтобы мы понимали, как пользуются сайтом.
      </p>
      <Link href="/" className="text-primary underline underline-offset-2">
        Вернуться на главную
      </Link>
    </main>
  )
}

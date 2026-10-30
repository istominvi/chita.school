import type { Metadata } from "next"
import Link from "next/link"

import { CONSENT_VERSION } from "@/lib/consent"

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных | Евразийская Начальная Школа",
  description:
    "Текст согласия на обработку персональных данных, которое даётся при отправке заявки на сайте АНО «Евразийская школа».",
}

export default function ConsentPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        Согласие на обработку персональных данных
      </h1>
      <p className="mb-10 text-sm text-muted-foreground">Редакция {CONSENT_VERSION}</p>

      <div className="space-y-6 leading-7 text-muted-foreground">
        <p>
          Отмечая галочку в форме на сайте chita.school, я свободно, своей волей и в своём интересе
          даю Автономной некоммерческой организации «Евразийская школа» (АНО «Евразийская школа»,
          ИНН 7500036008, адрес: 672038, Забайкальский край, г. Чита, мкр. Кольцевой, д. 41) согласие
          на обработку персональных данных на условиях, изложенных ниже.
        </p>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Чьи данные</h2>
          <p>
            Мои собственные персональные данные, а также персональные данные моего ребёнка, если я
            указываю их в заявке. Действуя как родитель или иной законный представитель ребёнка, я даю
            согласие и от его имени.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Состав данных</h2>
          <p>
            Имя и фамилия, номер телефона, адрес электронной почты (если я его указываю), имя ребёнка
            (если я его указываю), текст моего обращения, а также служебные сведения об отправке
            заявки: страница и кнопка, с которых отправлена заявка, дата и время отправки, редакция
            текста этого согласия.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Цели обработки</h2>
          <p>
            Приём и рассмотрение моей заявки, согласование и организация ознакомительной встречи или
            записи на занятия, ответ на моё обращение и связь со мной по заявке.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Действия с данными и способы</h2>
          <p>
            Сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение),
            извлечение, использование, передача лицам, которым обработка поручена оператором на
            основании договора, блокирование, удаление и уничтожение. Обработка ведётся как с
            использованием средств автоматизации, так и без них. Решения, затрагивающие мои права,
            исключительно автоматизированной обработкой не принимаются.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Срок действия и отзыв</h2>
          <p>
            Согласие действует до достижения цели обработки либо до его отзыва. Отозвать согласие можно
            в любой момент, направив письмо на{" "}
            <a href="mailto:info@chita.school" className="text-primary underline underline-offset-2">
              info@chita.school
            </a>{" "}
            или почтой по адресу оператора. После отзыва обработка прекращается, если у оператора нет
            другого законного основания её продолжать.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Ознакомление с политикой</h2>
          <p>
            Я подтверждаю, что ознакомлен(-а) с{" "}
            <Link href="/privacy" className="text-primary underline underline-offset-2">
              политикой в отношении обработки персональных данных
            </Link>{" "}
            и что указанные мной данные достоверны.
          </p>
        </div>

        <p>
          Это согласие не распространяется на рекламные рассылки и на веб-аналитику: согласие на
          аналитику запрашивается отдельно и отзывается независимо.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-6 border-t border-border pt-6 text-sm">
        <Link href="/privacy" className="text-primary underline underline-offset-2">
          Политика обработки персональных данных
        </Link>
        <Link href="/" className="text-primary underline underline-offset-2">
          Вернуться на главную
        </Link>
      </div>
    </main>
  )
}

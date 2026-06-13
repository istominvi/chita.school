"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Продлёнка", href: "/prodlenka", highlighted: true },
  { name: "О школе", href: "/#about" },
  { name: "Программа", href: "/#program" },
  { name: "Занятия", href: "/#activities" },
  { name: "Стоимость", href: "/#pricing" },
  { name: "Вопросы", href: "/#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Логотип Евразийской Школы"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="block min-w-0 max-w-[calc(100vw-9rem)] sm:max-w-none">
              <span className="block text-xs sm:text-lg font-semibold text-foreground leading-tight">
                Евразийская Начальная Школа
              </span>
              <span className="block text-[10px] sm:text-xs text-muted-foreground leading-tight mt-0.5">
                г. Чита, мкр. Северный, 54
              </span>
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Открыть меню</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={item.highlighted
                ? "rounded-full bg-amber-300 px-4 py-2 text-sm font-extrabold text-amber-950 shadow-sm ring-1 ring-amber-400/60 transition hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-md"
                : "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="/#contact">Записаться</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMounted && mobileMenuOpen && createPortal(
        <div className="lg:hidden fixed inset-0 z-[100]">
          <div 
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="fixed inset-y-0 right-0 z-[101] w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="Логотип Евразийской Школы"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <span>
                  <span className="block text-lg font-semibold leading-tight">
                    Евразийская Начальная Школа
                  </span>
                  <span className="block text-xs text-muted-foreground leading-tight mt-0.5">
                    г. Чита, мкр. Северный, 54
                  </span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Закрыть меню</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={item.highlighted
                        ? "-mx-3 block rounded-lg bg-amber-300 px-3 py-2 text-base font-extrabold text-amber-950 shadow-sm"
                        : "-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full">
                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                      Записаться на знакомство
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  )
}

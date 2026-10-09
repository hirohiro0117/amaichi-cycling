'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { label: 'イベント', href: '#events' },
  { label: 'ルート', href: '#routes' },
  { label: 'クラブ紹介', href: '#about' },
  { label: '観光情報', href: '#tourism' },
  { label: 'お問い合わせ', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ・サイト名 */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://assets.st-note.com/production/uploads/images/319910730/profile_8aa1ec131263959f0830ee34a5319cc5.jpg"
              alt="あまいちサイクリングルート"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-bold leading-tight text-ocean-900 sm:text-base">
                あまいちサイクリングルート
              </div>
              <div className="text-xs text-ocean-500">Amaichi Cycling Club</div>
            </div>
          </Link>

          {/* PCナビゲーション */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-ocean-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#events"
              className="rounded-full bg-ocean-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ocean-700"
            >
              参加申込
            </Link>
          </nav>

          {/* ハンバーガーメニュー */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isOpen && (
          <div className="border-t border-slate-100 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-ocean-50 hover:text-ocean-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#events"
                className="mx-4 mt-2 rounded-full bg-ocean-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-ocean-700"
                onClick={() => setIsOpen(false)}
              >
                イベント参加申込
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

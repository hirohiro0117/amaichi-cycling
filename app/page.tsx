import Header from "@/components/Header";
import Link from "next/link";

/* ============================================================
   イベント・ルートデータ（将来 Supabase から取得に差し替え予定）
   参考: amaichi.jpn.org / visitamakusa.com / sports.kumamoto.guide
   ============================================================ */

const events = [
  {
    id: 1,
    title: "天草一周！あまいちグランフォンド2026",
    date: "2026年12月12日（土）・13日（日）",
    time: "Day1: 苓北町富岡城スタート / Day2: 上天草市姫戸統括支所スタート",
    location: "苓北町富岡城（Day1）・上天草市姫戸（Day2）",
    fee: "80km 9,000円（1日）／18,000円（2日）｜140km 12,000円",
    level: "全レベル対応",
    distance: "140km・80km",
    color: "from-sky-500 to-blue-700",
    emoji: "🏆",
    badge: "公式イベント",
    link: "https://amakusa-cycle-granfondo.jp",
  },
  {
    id: 2,
    title: "あまくさ島旅サイクリング",
    date: "2026年11月（開催日調整中）",
    time: "詳細はお知らせにて告知",
    location: "天草各地（ガイド付き）",
    fee: "参加費別途",
    level: "初心者歓迎",
    distance: "ガイド付き",
    color: "from-orange-400 to-sky-500",
    emoji: "🏝️",
    badge: "島旅体験",
    link: "https://amaichi.jpn.org/",
  },
  {
    id: 3,
    title: "行ってみゅ～会（気軽なポタリング）",
    date: "毎月開催（日程はSNS・LINEで告知）",
    time: "朝集合・現地解散",
    location: "天草各地（毎回テーマスポットへ）",
    fee: "無料",
    level: "初心者歓迎",
    distance: "20〜50km程度",
    color: "from-teal-400 to-emerald-600",
    emoji: "🚲",
    badge: "気軽に参加",
    link: "https://amaichi.jpn.org/",
  },
];

const routes = [
  {
    id: 1,
    name: "天草五橋・松島コース",
    distance: "50km",
    time: "2〜3時間",
    difficulty: "★☆☆ 初心者向け",
    difficultyColor: "text-emerald-600",
    description: "天草の玄関口・五橋を渡り、松島の絶景を巡る入門ルート。天草四郎サイクリングフェスタでも人気の定番コースです。",
    color: "from-sky-300 to-blue-500",
    emoji: "🌉",
    tag: "定番コース",
  },
  {
    id: 2,
    name: "崎津世界遺産コース",
    distance: "80km",
    time: "4〜5時間",
    difficulty: "★★☆ 中級者向け",
    difficultyColor: "text-amber-600",
    description: "グランフォンドDay1・Day2の80kmコース。ユネスコ世界文化遺産の崎津集落を訪ねる。天草キリシタンの歴史と海の絶景が広がります。",
    color: "from-teal-400 to-cyan-600",
    emoji: "⛪",
    tag: "グランフォンド80km",
  },
  {
    id: 3,
    name: "天草一周フルコース",
    distance: "140km",
    time: "7〜9時間",
    difficulty: "★★★ 上級者向け",
    difficultyColor: "text-red-600",
    description: "グランフォンドDay1・Day2のメインコース。天草下島を一周し、東シナ海の大パノラマと牛深ハイヤ大橋など天草の全てを体感できます。",
    color: "from-violet-400 to-indigo-600",
    emoji: "🌊",
    tag: "グランフォンド140km",
  },
];

const tourismSpots = [
  {
    category: "観光スポット",
    items: [
      "崎津集落（ユネスコ世界文化遺産）",
      "天草五橋（日本の道100選）",
      "イルカウォッチング（通年）",
      "牛深ハイヤ大橋",
    ],
    emoji: "🏛️",
    color: "bg-sky-50 border-sky-200",
  },
  {
    category: "飲食店・グルメ",
    items: [
      "天草大王（地鶏料理）",
      "海鮮丼・活き造り",
      "天草ちゃんぽん",
      "タコ・伊勢えび料理",
    ],
    emoji: "🍜",
    color: "bg-orange-50 border-orange-200",
  },
  {
    category: "宿泊施設",
    items: [
      "天草グランドホテル",
      "民宿・ペンション多数",
      "ライダーズハウス",
      "キャンプ場（天草各地）",
    ],
    emoji: "🛏️",
    color: "bg-teal-50 border-teal-200",
  },
  {
    category: "アクセス・交通",
    items: [
      "熊本港↔天草 フェリー約60分",
      "三角駅↔天草 バス約40分",
      "熊本IC→松島 車約60分",
      "阿蘇くまもと空港から約90分",
    ],
    emoji: "⛴️",
    color: "bg-violet-50 border-violet-200",
  },
];

/* ============================================================
   ページコンポーネント
   ============================================================ */

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">

      {/* ① ヘッダー */}
      <Header />

      <main className="flex-1">

        {/* ② メインビジュアル */}
        <section id="hero" className="relative overflow-hidden">
          <div className="relative h-[75vh] min-h-[520px] bg-gradient-to-br from-ocean-900 via-ocean-700 to-cyan-500 flex items-center justify-center">
            {/* 装飾 */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
            </div>
            <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
              <path d="M0,50 C360,90 720,10 1080,50 C1260,70 1380,60 1440,50 L1440,100 L0,100 Z" fill="white" opacity="0.15" />
              <path d="M0,70 C240,40 480,90 720,70 C960,50 1200,80 1440,70 L1440,100 L0,100 Z" fill="white" opacity="0.3" />
            </svg>

            <div className="relative z-10 px-4 text-center text-white max-w-3xl mx-auto">
              <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-cyan-200 sm:text-sm">
                VISITあまくさプロジェクト 連携
              </p>
              <p className="mb-4 text-sm font-medium tracking-widest text-ocean-100 sm:text-base">
                熊本県 天草からはじまる
              </p>
              <h1 className="mb-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                天草を、<br className="sm:hidden" />
                自転車で楽しもう。
              </h1>
              <p className="mb-2 text-base font-medium text-cyan-100 sm:text-lg italic">
                ペダルを回した数だけ、みえる景色がある。
              </p>
              <p className="mb-2 text-lg font-bold text-cyan-200 sm:text-xl">
                天草一周！あまいちグランフォンド2026
              </p>
              <p className="mb-8 text-sm text-ocean-100 sm:text-base">
                2026年12月12日（土）・13日（日）開催
                <span className="mx-2 text-ocean-300">|</span>
                140km・80km・40km・30kmコース
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="#events"
                  className="rounded-full bg-white px-8 py-4 text-base font-bold text-ocean-700 shadow-lg transition hover:bg-ocean-50 hover:-translate-y-0.5"
                >
                  🎉 イベントに参加する
                </Link>
                <Link
                  href="#routes"
                  className="rounded-full border-2 border-white px-8 py-4 text-base font-bold text-white transition hover:bg-white/20"
                >
                  🗺 コースを確認する
                </Link>
              </div>
            </div>
          </div>
          <div className="h-8 bg-white" />
        </section>

        {/* グランフォンド告知バナー */}
        <section className="bg-ocean-900 py-4 px-4">
          <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-ocean-900">NEW</span>
              <span className="text-sm font-semibold">
                天草一周！あまいちグランフォンド2026 — エントリー受付中
              </span>
            </div>
            <a
              href="https://amakusa-cycle-granfondo.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-white px-5 py-2 text-sm font-bold text-ocean-700 transition hover:bg-ocean-50"
            >
              公式サイトを見る →
            </a>
          </div>
        </section>

        {/* ③ 開催予定イベント */}
        <section id="events" className="py-16 px-4 sm:px-6 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <span className="inline-block rounded-full bg-ocean-100 px-4 py-1 text-sm font-semibold text-ocean-700 mb-3">
                Events
              </span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                開催予定イベント
              </h2>
              <p className="mt-3 text-slate-600">
                初心者から上級者まで、天草の風を感じるイベントを開催しています。
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <article
                  key={event.id}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className={`h-40 bg-gradient-to-br ${event.color} flex items-center justify-center relative`}>
                    <span className="text-6xl">{event.emoji}</span>
                    <span className="absolute top-3 right-3 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white border border-white/30">
                      {event.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2 flex-wrap">
                      <span className="rounded-full bg-ocean-100 px-2 py-0.5 text-xs font-medium text-ocean-700">
                        {event.level}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        {event.distance}
                      </span>
                    </div>
                    <h3 className="mb-3 text-base font-bold text-slate-900 leading-snug">
                      {event.title}
                    </h3>
                    <dl className="space-y-1.5 text-sm text-slate-600">
                      <div className="flex items-start gap-2">
                        <dt>📅</dt>
                        <dd>{event.date}</dd>
                      </div>
                      <div className="flex items-start gap-2">
                        <dt>🕐</dt>
                        <dd>{event.time}</dd>
                      </div>
                      <div className="flex items-start gap-2">
                        <dt>📍</dt>
                        <dd>{event.location}</dd>
                      </div>
                      <div className="flex items-start gap-2">
                        <dt>💴</dt>
                        <dd className="font-semibold text-ocean-700">{event.fee}</dd>
                      </div>
                    </dl>
                    <div className="mt-4">
                      {event.link ? (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full rounded-xl bg-ocean-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-ocean-700"
                        >
                          公式サイトでエントリー →
                        </a>
                      ) : (
                        <>
                          <span className="block w-full rounded-xl border-2 border-ocean-200 px-4 py-2.5 text-center text-sm font-semibold text-ocean-400 cursor-default">
                            参加申込（準備中）
                          </span>
                          <p className="mt-1.5 text-center text-xs text-slate-400">
                            LINEで先行受付中 ↓
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-600 transition hover:text-ocean-700"
              >
                イベント一覧を見る
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ④ グランフォンドコース紹介 */}
        <section id="routes" className="py-16 px-4 sm:px-6 bg-ocean-50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <span className="inline-block rounded-full bg-ocean-100 px-4 py-1 text-sm font-semibold text-ocean-700 mb-3">
                Courses
              </span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                グランフォンド コース紹介
              </h2>
              <p className="mt-3 text-slate-600">
                あまいちグランフォンド2026の公式コース。初心者から上級者まで選べる4距離。
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map((route) => (
                <article
                  key={route.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className={`h-44 bg-gradient-to-br ${route.color} flex flex-col items-center justify-center gap-2`}>
                    <span className="text-6xl">{route.emoji}</span>
                    <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold text-white border border-white/30">
                      {route.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-xl font-bold text-slate-900">
                      {route.name}
                    </h3>
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
                      <span className="flex items-center gap-1 font-semibold text-ocean-700">
                        📏 {route.distance}
                      </span>
                      <span className="text-slate-400">|</span>
                      <span className="flex items-center gap-1 text-slate-600">
                        ⏱ {route.time}
                      </span>
                    </div>
                    <p className={`mb-3 text-sm font-medium ${route.difficultyColor}`}>
                      {route.difficulty}
                    </p>
                    <p className="mb-4 text-sm leading-relaxed text-slate-600">
                      {route.description}
                    </p>
                    <a
                      href="https://amakusa-cycle-granfondo.jp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl border-2 border-ocean-300 px-4 py-2.5 text-center text-sm font-semibold text-ocean-600 transition hover:bg-ocean-50"
                    >
                      コース詳細を見る →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Day2コース補足 */}
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm border border-ocean-100">
              <p className="text-sm font-semibold text-ocean-700 mb-2">📋 Day2（12月13日）コース</p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full bg-ocean-50 px-3 py-1">🏆 140km（上級）</span>
                <span className="rounded-full bg-teal-50 px-3 py-1">🚴 80km（中級）</span>
                <span className="rounded-full bg-emerald-50 px-3 py-1">🌱 30km（初心者）</span>
              </div>
            </div>
          </div>
        </section>

        {/* ⑤ あまいちサイクリングクラブ紹介 */}
        <section id="about" className="py-16 px-4 sm:px-6 bg-white">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <span className="inline-block rounded-full bg-ocean-100 px-4 py-1 text-sm font-semibold text-ocean-700 mb-3">
                About
              </span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                あまいちサイクリングクラブとは
              </h2>
              <p className="mt-3 text-slate-600">
                「天草一周（あまいち）」を合言葉に、2013年から活動するサイクリングクラブです。
              </p>
            </div>

            {/* 活動実績バナー */}
            <div className="mb-8 grid grid-cols-3 gap-4 sm:grid-cols-3">
              {[
                { num: "10", unit: "回", label: "天草四郎サイクリングフェスタ開催" },
                { num: "300", unit: "名+", label: "最大参加者数" },
                { num: "140", unit: "km", label: "グランフォンド最長コース" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-ocean-50 p-4 text-center">
                  <div className="text-2xl font-black text-ocean-700 sm:text-3xl">
                    {stat.num}<span className="text-lg">{stat.unit}</span>
                  </div>
                  <div className="mt-1 text-xs text-slate-600 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-ocean-50 to-cyan-50 p-8 sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-ocean-800">
                    <span className="text-2xl">🎯</span> クラブの目的
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    天草の隠れたスポットを自転車のスピードで巡り、サイクリングを通じて天草を全国へ発信すること。
                    VISITあまくさプロジェクトと連携し、天草の魅力を国内外に届けます。
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-ocean-800">
                    <span className="text-2xl">🚵</span> 活動内容
                  </h3>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-start gap-2"><span>•</span>天草四郎サイクリングフェスタの企画・運営（第1〜10回）</li>
                    <li className="flex items-start gap-2"><span>•</span>あまいちグランフォンドのサポート</li>
                    <li className="flex items-start gap-2"><span>•</span>あまくさ島旅サイクリング（ガイド付き）</li>
                    <li className="flex items-start gap-2"><span>•</span>行ってみゅ～会（気軽なポタリング）</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-ocean-800">
                    <span className="text-2xl">👥</span> 参加対象
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    小学生以上（未成年は保護者同伴）、天草在住・在勤・天草が好きな方ならどなたでも歓迎！
                    年齢・レベル・性別不問。ロードバイクがなくてもOKです。
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-ocean-800">
                    <span className="text-2xl">📝</span> 参加方法
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    まずはLINE公式アカウントを友だち追加してください。
                    グランフォンドはSportEntryでオンライン申込。
                    その他イベントのお問い合わせは下記へどうぞ。
                  </p>
                </div>
              </div>

              {/* 過去大会実績 */}
              <div className="mt-8 border-t border-ocean-200 pt-6">
                <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-ocean-800">
                  <span className="text-xl">📅</span> 過去の大会実績（天草四郎サイクリングフェスタ）
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 text-xs text-slate-600">
                  {[
                    "第10回 2024年11月",
                    "第9回 2023年12月",
                    "第8回 2022年12月",
                    "第7回 2019年12月",
                    "第6回 2018年11月",
                    "第5回 2017年12月",
                    "第4回 開催",
                    "第3回 開催",
                  ].map((record) => (
                    <div key={record} className="rounded-lg bg-white px-3 py-2 text-center shadow-sm">
                      {record}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ⑥ 天草観光情報 */}
        <section id="tourism" className="py-16 px-4 sm:px-6 bg-slate-50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <span className="inline-block rounded-full bg-ocean-100 px-4 py-1 text-sm font-semibold text-ocean-700 mb-3">
                Tourism
              </span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                天草観光情報
              </h2>
              <p className="mt-3 text-slate-600">
                ライドの前後に楽しめる天草の見どころをご紹介します。
                <a
                  href="https://visitamakusa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-ocean-600 underline text-sm"
                >
                  VISITあまくさプロジェクト ↗
                </a>
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tourismSpots.map((spot) => (
                <div
                  key={spot.category}
                  className={`rounded-2xl border p-6 ${spot.color}`}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-2xl">{spot.emoji}</span>
                    <h3 className="font-bold text-slate-800">{spot.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {spot.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-sm text-slate-700">
                        <span className="mt-0.5 shrink-0 text-ocean-400">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 観光情報リンク */}
            <div className="mt-6 rounded-2xl bg-white border border-ocean-100 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-800">天草の詳しい観光情報</p>
                <p className="text-sm text-slate-500">VISITあまくさプロジェクト公式サイトをご覧ください</p>
              </div>
              <a
                href="https://visitamakusa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-ocean-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-ocean-700"
              >
                VISITあまくさ →
              </a>
            </div>
          </div>
        </section>

        {/* ⑦ LINE公式アカウント */}
        <section id="line" className="py-16 px-4 sm:px-6 bg-white">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-3xl bg-gradient-to-br from-[#00B900] to-[#00A000] p-10 text-white shadow-xl">
              <div className="mb-4 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white">
                  <svg viewBox="0 0 40 40" className="h-14 w-14" fill="none">
                    <rect width="40" height="40" rx="8" fill="#00B900"/>
                    <path d="M20 8C12.27 8 6 13.48 6 20.2c0 6.02 5.34 11.06 12.56 12.02.49.1 1.15.32 1.32.73.15.38.1.97.05 1.35l-.21 1.28c-.07.38-.3 1.48 1.29.81 1.59-.67 8.58-5.06 11.7-8.67C34.64 25.51 34 22.96 34 20.2 34 13.48 27.73 8 20 8z" fill="white"/>
                  </svg>
                </div>
              </div>
              <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
                LINE公式アカウント
              </h2>
              <p className="mb-6 text-green-100">
                友だち追加でグランフォンド最新情報をいち早くお届け！
                <br />
                練習会・ライド情報・エントリー案内もLINEで。
              </p>
              <ul className="mb-8 space-y-2 text-sm text-left text-green-100">
                <li className="flex items-center gap-2">
                  <span className="text-white">✓</span> あまいちグランフォンド情報をリアルタイム配信
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">✓</span> 練習会・ルートマップを共有
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">✓</span> 参加申込・問い合わせもLINEでOK
                </li>
              </ul>
              <div
                className="inline-flex cursor-default items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-[#00B900] opacity-80"
                title="運用開始時にLINE公式アカウントURLを設定予定"
              >
                <span>友だち追加（準備中）</span>
              </div>
              <p className="mt-3 text-xs text-green-200">
                ※ LINE公式アカウントは順次開設予定です
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* ⑧ フッター */}
      <footer id="contact" className="border-t border-slate-200 bg-ocean-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-600 text-xl">
                  🚴
                </div>
                <div>
                  <div className="font-bold text-white">あまいちサイクリングクラブ</div>
                  <div className="text-xs text-ocean-300">天草一周 × サイクリング</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ocean-300">
                熊本県天草地域を拠点に活動するサイクリングクラブ。
                「天草一周（あまいち）」を合言葉に、VISITあまくさプロジェクトと連携して天草の魅力を発信します。
              </p>
              <div className="mt-4 flex gap-3">
                <a href="https://amaichi.jpn.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-ocean-400 underline hover:text-ocean-300">クラブ公式サイト</a>
                <span className="text-ocean-700">|</span>
                <a href="https://visitamakusa.com" target="_blank" rel="noopener noreferrer" className="text-xs text-ocean-400 underline hover:text-ocean-300">VISITあまくさ</a>
                <span className="text-ocean-700">|</span>
                <a href="https://amakusa-cycle-granfondo.jp" target="_blank" rel="noopener noreferrer" className="text-xs text-ocean-400 underline hover:text-ocean-300">グランフォンド公式</a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ocean-300">
                コンテンツ
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'イベント情報', href: '#events' },
                  { label: 'グランフォンドコース', href: '#routes' },
                  { label: 'クラブ紹介', href: '#about' },
                  { label: '天草観光情報', href: '#tourism' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ocean-300 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ocean-300">
                お問い合わせ
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://amaichi.jpn.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-ocean-300 transition hover:text-white">
                    公式サイト（amaichi.jpn.org）
                  </a>
                </li>
                {[
                  '利用規約（準備中）',
                  'プライバシーポリシー（準備中）',
                ].map((label) => (
                  <li key={label}>
                    <span className="text-sm text-ocean-400 cursor-default">{label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-1">
                <p className="text-xs text-ocean-400">運営：あまいちサイクリングクラブ</p>
                <p className="text-xs text-ocean-400">熊本県天草市</p>
                <p className="text-xs text-ocean-400">📞 090-3323-1198（植田）</p>
                <p className="text-xs text-ocean-400">📞 090-4516-4890（長友）</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-ocean-800 pt-6 text-center text-xs text-ocean-500">
            © 2026 あまいちサイクリングクラブ. All rights reserved.
            <span className="mx-2">|</span>
            Supported by
            <a href="https://visitamakusa.com" target="_blank" rel="noopener noreferrer" className="ml-1 underline hover:text-ocean-300">VISITあまくさプロジェクト</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

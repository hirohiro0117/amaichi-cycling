import Header from "@/components/Header";
import Link from "next/link";

/* ============================================================
   仮データ（将来 Supabase から取得に差し替え予定）
   ============================================================ */

const events = [
  {
    id: 1,
    title: "天草五橋サンライズライド",
    date: "2026年10月19日（日）",
    time: "5:30集合 / 6:00スタート",
    location: "松島総合センター前 駐車場",
    fee: "無料",
    level: "初心者歓迎",
    distance: "約30km",
    color: "from-sky-400 to-cyan-600",
    emoji: "🌅",
  },
  {
    id: 2,
    title: "牛深ハーフセンチュリー",
    date: "2026年11月3日（月・祝）",
    time: "8:00集合 / 8:30スタート",
    location: "牛深海中公園 駐車場",
    fee: "1,000円（保険料込み）",
    level: "中級者向け",
    distance: "約80km",
    color: "from-teal-400 to-emerald-600",
    emoji: "🚴",
  },
  {
    id: 3,
    title: "天草下島一周チャレンジ",
    date: "2026年11月23日（日）",
    time: "7:00集合 / 7:30スタート",
    location: "本渡港 フェリーターミナル前",
    fee: "2,000円（昼食・保険料込み）",
    level: "上級者向け",
    distance: "約160km",
    color: "from-violet-400 to-blue-600",
    emoji: "🏆",
  },
];

const routes = [
  {
    id: 1,
    name: "天草五橋コース",
    distance: "25km",
    time: "1〜2時間",
    difficulty: "★☆☆ 初心者向け",
    difficultyColor: "text-emerald-600",
    description: "天草の玄関口、五橋を渡る定番コース。海の絶景を楽しめる平坦なルートです。",
    color: "from-sky-300 to-blue-500",
    emoji: "🌉",
  },
  {
    id: 2,
    name: "崎津・羊角湾コース",
    distance: "60km",
    time: "3〜4時間",
    difficulty: "★★☆ 中級者向け",
    difficultyColor: "text-amber-600",
    description: "世界遺産の崎津集落を訪ねる文化的なルート。天草キリシタンの歴史に触れながら走ります。",
    color: "from-teal-400 to-cyan-600",
    emoji: "⛪",
  },
  {
    id: 3,
    name: "牛深ウォーターフロントコース",
    distance: "100km",
    time: "5〜7時間",
    difficulty: "★★★ 上級者向け",
    difficultyColor: "text-red-600",
    description: "天草最南端・牛深まで走る本格コース。東シナ海の大パノラマが広がります。",
    color: "from-violet-400 to-indigo-600",
    emoji: "🌊",
  },
];

const tourismSpots = [
  { category: "観光スポット", items: ["崎津天主堂（世界遺産）", "天草五橋", "イルカウォッチング", "天草四郎ミュージアム"], emoji: "🏛️", color: "bg-sky-50 border-sky-200" },
  { category: "飲食店", items: ["天草大王（地鶏料理）", "海鮮丼・刺身盛り合わせ", "ちゃんぽん・天草うどん", "カフェ＆スイーツ"], emoji: "🍜", color: "bg-orange-50 border-orange-200" },
  { category: "宿泊施設", items: ["天草グランドホテル", "民宿・ペンション多数", "ライダーズハウス", "キャンプ場"], emoji: "🛏️", color: "bg-teal-50 border-teal-200" },
  { category: "アクセス・交通", items: ["熊本港→天草 フェリー約60分", "三角駅→天草 バス約40分", "熊本IC→松島 車約60分", "自転車レンタル情報"], emoji: "⛴️", color: "bg-violet-50 border-violet-200" },
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
          {/* 背景グラデーション（仮ビジュアル。実際の天草海岸写真に差し替え予定） */}
          <div className="relative h-[70vh] min-h-[480px] bg-gradient-to-br from-ocean-800 via-ocean-600 to-cyan-400 flex items-center justify-center">
            {/* 装飾的な波 */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/30 to-transparent" />
              <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
                <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" fill="white" opacity="0.3" />
                <path d="M0,80 C360,40 720,100 1080,60 C1260,40 1380,80 1440,80 L1440,120 L0,120 Z" fill="white" opacity="0.5" />
              </svg>
            </div>

            {/* テキストコンテンツ */}
            <div className="relative z-10 px-4 text-center text-white">
              <p className="mb-3 text-sm font-medium tracking-widest text-ocean-100 sm:text-base">
                熊本県 天草からはじまる
              </p>
              <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                天草を、<br className="sm:hidden" />
                自転車で楽しもう。
              </h1>
              <p className="mb-8 text-base text-ocean-100 sm:text-lg max-w-lg mx-auto">
                美しい海と島々を駆け抜ける、特別なサイクリング体験。
                <br className="hidden sm:block" />
                一緒に天草の風を感じましょう。
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
                  🗺 ルートを探す
                </Link>
              </div>
            </div>
          </div>

          {/* 波形の区切り */}
          <div className="relative h-12 overflow-hidden bg-white">
            <div className="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-br from-ocean-800 via-ocean-600 to-cyan-400" style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }} />
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
                初心者から上級者まで、さまざまなレベルのイベントを開催しています。
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <article
                  key={event.id}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                >
                  {/* イベント仮ビジュアル */}
                  <div className={`h-40 bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                    <span className="text-6xl">{event.emoji}</span>
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-ocean-100 px-2 py-0.5 text-xs font-medium text-ocean-700">
                        {event.level}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        {event.distance}
                      </span>
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-slate-900">
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
                    {/* 申込機能は今後実装予定 */}
                    <div className="mt-4">
                      <span className="block w-full rounded-xl border-2 border-ocean-200 px-4 py-2.5 text-center text-sm font-semibold text-ocean-400 cursor-default">
                        参加申込（準備中）
                      </span>
                      <p className="mt-1.5 text-center text-xs text-slate-400">
                        LINEで先行受付中 ↓
                      </p>
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

        {/* ④ おすすめサイクリングルート */}
        <section id="routes" className="py-16 px-4 sm:px-6 bg-ocean-50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <span className="inline-block rounded-full bg-ocean-100 px-4 py-1 text-sm font-semibold text-ocean-700 mb-3">
                Routes
              </span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                おすすめサイクリングルート
              </h2>
              <p className="mt-3 text-slate-600">
                天草の絶景を堪能できる、選りすぐりのルートをご紹介します。
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map((route) => (
                <article
                  key={route.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                >
                  {/* ルート仮ビジュアル */}
                  <div className={`h-44 bg-gradient-to-br ${route.color} flex items-center justify-center`}>
                    <span className="text-7xl">{route.emoji}</span>
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
                    {/* ルート詳細は今後実装予定 */}
                    <span className="block w-full rounded-xl border-2 border-ocean-200 px-4 py-2.5 text-center text-sm font-semibold text-ocean-400 cursor-default">
                      ルート詳細（準備中）
                    </span>
                  </div>
                </article>
              ))}
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
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-ocean-50 to-cyan-50 p-8 sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-ocean-800">
                    <span className="text-2xl">🎯</span> クラブの目的
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    天草の豊かな自然と文化を、サイクリングという体験を通じて多くの方に知ってもらうこと。
                    地域に愛される活動を通じて、天草の魅力を国内外に発信します。
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-ocean-800">
                    <span className="text-2xl">🚵</span> 活動内容
                  </h3>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-start gap-2"><span>•</span>月1〜2回の定例サイクリング</li>
                    <li className="flex items-start gap-2"><span>•</span>季節イベントの企画・運営</li>
                    <li className="flex items-start gap-2"><span>•</span>初心者向けサイクリング教室</li>
                    <li className="flex items-start gap-2"><span>•</span>ルートマップの整備・情報発信</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-ocean-800">
                    <span className="text-2xl">👥</span> 参加対象
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    天草在住・在勤の方、天草が好きな方、サイクリングに興味のある方ならどなたでも歓迎！
                    年齢・レベル・性別不問。初めての方も安心です。
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-ocean-800">
                    <span className="text-2xl">📝</span> 参加方法
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    まずはLINE公式アカウントを友だち追加してください。
                    イベント情報やルート情報を随時配信しています。
                    参加費は各イベントの案内をご確認ください。
                  </p>
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
                サイクリングの前後に楽しめる天草の見どころをご紹介します。
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
                    <path d="M16.5 22.5h-3a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v4.5h2.5a.5.5 0 0 1 0 1zm2 0a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5zm6 0h-3a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v4.5H24v-2h-1.5a.5.5 0 0 1 0-1H24v-1.5h-2a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5z" fill="#00B900"/>
                  </svg>
                </div>
              </div>
              <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
                LINE公式アカウント
              </h2>
              <p className="mb-6 text-green-100">
                友だち追加で最新イベント情報をいち早くお届け！
                <br />
                サイクリングルート情報・天気予報・グループ参加もLINEで。
              </p>
              <ul className="mb-8 space-y-2 text-sm text-left text-green-100">
                <li className="flex items-center gap-2">
                  <span className="text-white">✓</span> イベント開催情報をリアルタイム配信
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">✓</span> ルートマップ・高度図を共有
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">✓</span> 参加申込・問い合わせもLINEでOK
                </li>
              </ul>
              {/* LINE友だち追加ボタン（URLは運用開始時に設定） */}
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
            {/* ブランド */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-600 text-xl">
                  🚴
                </div>
                <div>
                  <div className="font-bold text-white">あまいちサイクリングクラブ</div>
                  <div className="text-xs text-ocean-300">Amaichi Cycling Club</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ocean-300">
                熊本県天草地域を拠点に活動するサイクリングクラブ。
                天草の美しい自然の中でサイクリングの楽しさをお伝えします。
              </p>
            </div>

            {/* リンク */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ocean-300">
                コンテンツ
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'イベント情報', href: '#events' },
                  { label: 'サイクリングルート', href: '#routes' },
                  { label: 'クラブ紹介', href: '#about' },
                  { label: '天草観光情報', href: '#tourism' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ocean-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* お問い合わせ・法的 */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ocean-300">
                お問い合わせ
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'お問い合わせ（準備中）', href: '#' },
                  { label: '利用規約（準備中）', href: '#' },
                  { label: 'プライバシーポリシー（準備中）', href: '#' },
                ].map((link) => (
                  <li key={link.label}>
                    <span className="text-sm text-ocean-400 cursor-default">
                      {link.label}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="text-xs text-ocean-400">
                  運営：あまいちサイクリングクラブ
                </p>
                <p className="text-xs text-ocean-400">
                  熊本県天草市
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-ocean-800 pt-6 text-center text-xs text-ocean-500">
            © 2026 あまいちサイクリングクラブ. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

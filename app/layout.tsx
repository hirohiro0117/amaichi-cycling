import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "あまいちサイクリングルート | 天草をサイクリングで楽しもう",
  description:
    "熊本県天草地域のサイクリングルート情報。美しい海と自然を走るサイクリングルートの紹介やイベント参加申込。天草の魅力を自転車で体感しよう。",
  keywords: "天草, サイクリング, 自転車, 熊本, あまいちサイクリングルート, ルート, イベント",
  openGraph: {
    title: "あまいちサイクリングルート",
    description: "天草を、自転車で楽しもう。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

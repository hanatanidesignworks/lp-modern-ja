import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "@/styles/globals.css";

// 見出し用：Noto Serif JP（和モダン×高級感を体現する明朝体）
const notoSerifJP = Noto_Serif_JP({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// 本文・UI用：Noto Sans JP（読みやすく洗練されたゴシック体）
const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "庭の剪定・伐採・除草・年間管理｜庭のコンシェルジュ｜八尾市・大阪",
  description:
    "八尾市・大阪エリアの個人宅庭を、年間を通して適期に管理するプライベートガーデンサービスです。剪定・伐採・除草・清掃を定期的にお任せいただけます。LINEで写真を送るだけで無料相談受付中。初回作業は全額返金保証付き。",
  robots: "index, follow",
  openGraph: {
    title: "庭の剪定・伐採・除草・年間管理｜庭のコンシェルジュ｜八尾市・大阪",
    description:
      "八尾市・大阪エリアの個人宅庭を年間を通して適期に管理する庭のコンシェルジュサービス。剪定・伐採・除草・清掃を定期的にお任せいただけます。ハナタニガーデンワークス。初回作業は全額返金保証付き。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}

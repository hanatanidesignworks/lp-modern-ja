import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import LineClickTracker from "@/components/analytics/LineClickTracker";

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
    <html lang="ja">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QE0PPVVGMD"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QE0PPVVGMD');
          gtag('config', 'AW-18097356348');
        `}</Script>
        {children}
        <LineClickTracker />
      </body>
    </html>
  );
}

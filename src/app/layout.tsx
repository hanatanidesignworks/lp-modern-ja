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
  title: "庭師 | 整った庭のある暮らしを、日常に。",
  description:
    "整った庭のある暮らしを、日常に。庭の剪定・管理・デザインを通じて、上質な暮らしを支えます。",
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

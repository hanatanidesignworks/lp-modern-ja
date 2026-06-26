import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "送信完了｜ハナタニガーデンワークス",
  robots: "noindex",
};

export default function ThanksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

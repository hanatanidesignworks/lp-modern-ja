import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
};

/**
 * セクション共通ラッパー。
 * 上下の余白を統一し、今後セクション追加時の一貫性を保つ。
 */
export default function Section({ children, id, className = "" }: Props) {
  return (
    <section id={id} className={`py-24 md:py-36 ${className}`}>
      {children}
    </section>
  );
}

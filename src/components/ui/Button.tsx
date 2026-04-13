import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "outline-white" | "outline-dark";

type Props = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
  "data-line-label"?: string;
};

const variantStyles: Record<Variant, string> = {
  // 暗い背景の上で使う白枠ボタン（Hero等）
  // hover: 枠線を強め + 極薄の白フィルで存在感を上品に引き上げる
  "outline-white":
    "border border-white/60 text-white/85 hover:border-white/90 hover:text-white hover:bg-white/[0.08]",
  // 明るい背景の上で使うダーク枠ボタン
  "outline-dark":
    "border border-primary text-primary hover:border-accent hover:text-accent",
};

/**
 * LPで使う控えめなボタン。
 * ベタ塗りを避け、枠線ベースで上品さを維持する。
 */
export default function Button({
  children,
  href,
  variant = "outline-dark",
  className = "",
  target,
  rel,
  "data-line-label": dataLineLabel,
}: Props) {
  // px-8→px-10、py-3→py-3.5 でほんの少し存在感を上げる
  const base =
    "inline-block px-10 py-3.5 text-sm tracking-[0.2em] font-sans transition-colors duration-300";

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      data-line-label={dataLineLabel}
      className={`${base} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

"use client";

import { useEffect } from "react";
import { trackLineClick } from "@/lib/analytics";

/**
 * LINEクリック計測トラッカー
 *
 * document 全体に単一のクリックリスナーを設置し、
 * LINE リンク（href に "lin.ee" を含む <a> タグ）への
 * クリックを検知して GA4 に line_click イベントを送信する。
 *
 * 実装方針：
 *   - 既存コンポーネントを "use client" に変更する必要がない
 *   - 各リンクに data-line-label 属性を付与するだけで計測対象に追加できる
 *   - layout.tsx に1回だけ置けば全ページ・全セクションをカバーできる
 *
 * data-line-label が未設定の LINE リンクは 'unknown' として記録される。
 */
export default function LineClickTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // クリック対象またはその祖先に LINE リンクがあるか確認
      const anchor = target.closest('a[href*="lin.ee"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const label = anchor.getAttribute("data-line-label") ?? "unknown";
      trackLineClick(label);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // DOM には何も描画しない
  return null;
}

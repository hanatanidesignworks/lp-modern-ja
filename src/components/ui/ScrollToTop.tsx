"use client";

import { useState, useEffect } from "react";

/**
 * スクロールトップボタン
 *
 * ヒーローセクションを過ぎた時点（300px以上スクロール）で出現し、
 * クリックするとページ先頭に滑らかにスクロールする。
 * フェードイン・フェードアウト＋上方向スライドでアニメーション。
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="ページ先頭へ戻る"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 50,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
      className="flex h-11 w-11 items-center justify-center border border-[var(--color-border)] bg-white/90 backdrop-blur-sm transition-colors duration-300 hover:border-[var(--color-primary)] hover:bg-white"
    >
      {/* 上向き矢印 */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7 12V2M2 7l5-5 5 5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--color-primary)]"
        />
      </svg>
    </button>
  );
}

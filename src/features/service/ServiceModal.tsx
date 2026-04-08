"use client";

import { useEffect } from "react";
import type { ServiceItem } from "@/lib/constants";

type Props = {
  item: ServiceItem | null;
  isVisible: boolean;
  onClose: () => void;
};

/**
 * ServiceModal
 *
 * Serviceカードのクリックで開く「静かな詳細パネル」。
 * 情報量は最小限に抑え、余白と行間でラグジュアリー感を維持する。
 *
 * 演出：フェード（300ms）＋パネルの微かな浮き上がり（10px→0）
 * 閉じ方：✕ボタン / 背景クリック / ESCキー
 */
export default function ServiceModal({ item, isVisible, onClose }: Props) {
  // ESCキーで閉じる
  useEffect(() => {
    if (!item) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [item, onClose]);

  // モーダル表示中はbodyのスクロールを止める
  useEffect(() => {
    document.body.style.overflow = item ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [item]);

  // アニメーション完了後に DOM から外す（null で条件レンダリング）
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.ja}
      className="fixed inset-0 z-50 flex items-center justify-center p-5 md:p-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      {/* 背景オーバーレイ：クリックで閉じる */}
      <div
        className="absolute inset-0 bg-black/35"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* パネル本体 */}
      <div
        className="relative w-full max-w-[520px] max-h-[82vh] overflow-y-auto bg-white px-10 py-10 md:px-12 md:py-12"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(10px)",
          transition: "transform 0.35s ease, opacity 0.3s ease",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* 閉じるボタン：記号として馴染む程度に小さく・薄く */}
        <button
          type="button"
          onClick={onClose}
          aria-label="閉じる"
          className="absolute right-5 top-5 font-sans text-xs leading-none tracking-widest text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
        >
          ✕
        </button>

        {/* 英字ラベル */}
        <p className="mb-2 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
          {item.en}
        </p>

        {/* 日本語見出し */}
        <h3
          className="mb-7 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
          style={{ lineHeight: 1.85 }}
        >
          {item.ja}
        </h3>

        {/* 説明文：段落感を弱め、補足コピーとして静かに読める調整 */}
        <div className="mb-8 space-y-0">
          {item.detail.description.map((line, i) => (
            <p
              key={i}
              className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)]"
              style={{ lineHeight: 1.95 }}
            >
              {line}
            </p>
          ))}
        </div>

        {/*
         * 管理内容リスト
         * #eae7e1（--color-border より薄い）でhairlineを控えめに
         * py-3 でコンパクトに、静かな要点整理として見せる
         */}
        <ul className="list-none">
          {item.detail.items.map((detailItem, i) => (
            <li
              key={i}
              className="border-b border-[#eae7e1] py-3 font-sans text-sm font-light tracking-[0.08em] text-[var(--color-primary)] first:border-t last:border-b-0"
              style={{ lineHeight: 1.8 }}
            >
              {detailItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

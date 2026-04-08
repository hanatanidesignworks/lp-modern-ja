"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  before: string;
  after: string;
  alt?: string;
};

/**
 * BeforeAfterSlider
 *
 * 2枚の画像を重ね、clip-path でAFTER（右側）の表示範囲を制御する。
 *
 * z-index レイヤー構造：
 *   0: BEFORE 画像（ベース）
 *   1: BEFORE 暗くするオーバーレイ（左エリアのみ）
 *   2: AFTER 画像（右エリアのみ・clip-path で制御）
 *   3: 中央ライン + ラベル
 *   4: ハンドル（pointer-events-none）
 *   5: range input（opacity-0 / 全面 → ドラッグ操作を受け取る）
 *
 * clipPath の計算：
 *   AFTER は右側に表示するため inset(0 0 0 ${value}%) を使う。
 *   value=50 → inset(0 0 0 50%) → 右半分を表示 ✓
 *   提供コードの inset(0 ${100-value}% 0 0) は左側表示になるため修正済み。
 */
export default function BeforeAfterSlider({ before, after, alt }: Props) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl select-none">

      {/* ── BEFORE（ベース・全面） ── */}
      <Image
        src={before}
        alt={alt ? `${alt}（before）` : "before"}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />

      {/*
       * BEFORE 暗くするオーバーレイ
       * inset(0 ${100 - value}% 0 0) → 左 value% のエリアを覆う
       * value=50 → inset(0 50% 0 0) → 左半分を暗くする ✓
       */}
      <div
        className="absolute inset-0 z-[1] bg-black/[0.18]"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        aria-hidden="true"
      />

      {/*
       * AFTER（右側のみ表示）
       * inset(0 0 0 ${value}%) → value% より右のエリアを表示
       * value=50 → inset(0 0 0 50%) → 右半分を表示 ✓
       */}
      <div
        className="absolute inset-0 z-[2]"
        style={{ clipPath: `inset(0 0 0 ${value}%)` }}
      >
        <Image
          src={after}
          alt={alt ? `${alt}（after）` : "after"}
          fill
          className="object-cover brightness-[1.04]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      {/* ── 中央ライン ── */}
      <div
        className="absolute bottom-0 top-0 z-[3] w-px bg-white/70"
        style={{ left: `${value}%` }}
        aria-hidden="true"
      />

      {/* ── ハンドル ── */}
      <div
        className="absolute top-1/2 z-[4] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: `${value}%` }}
        aria-hidden="true"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md">
          {/* 左右矢印アイコン */}
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 4h12M1 4l2.5-2.5M1 4l2.5 2.5M13 4l-2.5-2.5M13 4l-2.5 2.5"
              stroke="#5a5a5a"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* ── BEFORE / AFTER ラベル ── */}
      <p
        className="pointer-events-none absolute left-4 top-4 z-[3] font-sans text-xs font-medium tracking-[0.18em] text-white/80"
        aria-hidden="true"
      >
        BEFORE
      </p>
      <p
        className="pointer-events-none absolute right-4 top-4 z-[3] font-sans text-xs font-medium tracking-[0.18em] text-white"
        aria-hidden="true"
      >
        AFTER
      </p>

      {/*
       * ── range input（透明・全面・最前面） ──
       * opacity-0 で非表示にしつつ全面に配置し、
       * ドラッグ・クリック操作を受け取る。
       * cursor-ew-resize で横スライドの意図を明示する。
       */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="absolute inset-0 z-[5] h-full w-full cursor-ew-resize opacity-0"
        aria-label="before/after スライダー"
      />
    </div>
  );
}

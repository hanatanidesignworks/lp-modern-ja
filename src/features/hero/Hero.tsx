"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { HERO_IMAGES, HERO_COPY, LINE_URL } from "@/lib/constants";

// 各画像の表示時間（ms）
const SLIDE_INTERVAL = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
      {/* ── 背景画像（クロスフェード） ── */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image.src}
          className="absolute inset-0"
          style={{
            opacity: index === current ? 1 : 0,
            transition: "opacity 1.8s ease-in-out",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── オーバーレイ：bg-black/45 → /38 に軽減。写真の力を少し取り戻す ── */}
      <div className="absolute inset-0 bg-black/38" />

      {/* ── テキストコンテンツ ── */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-8 md:px-16 lg:px-24">

          {/* アイブロー：日本語メイン + 英語サブ */}
          <div className="mb-6">
            <p className="font-serif text-sm font-light leading-[1.1] tracking-[0.18em] text-white/88 md:text-base">
              {HERO_COPY.eyebrow.main}
            </p>
            <p className="mt-0.5 font-sans text-[9px] tracking-[0.42em] text-white/42 md:text-[10px]">
              {HERO_COPY.eyebrow.sub}
            </p>
          </div>

          {/* メインコピー */}
          <h1
            className="mb-6 font-serif text-3xl font-light leading-[1.52] text-white sm:text-4xl sm:leading-[1.48] md:text-5xl lg:text-6xl"
          >
            {HERO_COPY.heading.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* サブコピー */}
          <p className="mb-9 font-sans text-sm font-light tracking-wider text-white/72 md:text-base">
            {HERO_COPY.subheading}
          </p>

          {/* CTAグループ */}
          <div className="flex flex-col items-start gap-3">

            {/* メインCTA：filled ではなく outline-white で高級感を維持しつつ最強 */}
            <Button href={LINE_URL} variant="outline-white">
              {HERO_COPY.cta}
            </Button>

            {/*
             * サブCTA：メインより明らかに控えめなトーンで添える
             * border-white/28・text-white/48 でメインの約半分の存在感
             * 文字サイズも text-xs（メインは text-sm）で差をつける
             */}
            <Link
              href="#trial-offer"
              className="inline-block border border-white/28 px-8 py-2.5 font-sans text-xs tracking-[0.18em] text-white/48 transition-colors duration-300 hover:border-white/44 hover:text-white/68"
            >
              {HERO_COPY.subCta}
            </Link>

          </div>

          {/* 補足テキスト */}
          <p className="mt-5 font-sans text-[10px] tracking-[0.18em] text-white/26">
            {HERO_COPY.note}
          </p>
        </div>
      </div>

      {/* ── インジケーター ── */}
      <div className="absolute bottom-8 left-8 flex gap-2 md:left-16 lg:left-24">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`画像 ${index + 1} に切り替え`}
            className="h-px w-8 cursor-pointer transition-all duration-500 md:w-10"
            style={{
              background:
                index === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

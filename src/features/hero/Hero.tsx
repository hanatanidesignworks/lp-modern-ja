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

      {/* ── オーバーレイ ── */}
      <div className="absolute inset-0 bg-black/38" />

      {/* ── ゾーン1：ブランドブロック（左上固定・独立） ── */}
      {/*
       * position: absolute で他ゾーンと完全に独立させる。
       * top: 32px / left: 40px はデザイン仕様の固定値。
       */}
      <div className="absolute" style={{ top: "32px", left: "40px" }}>
        {/* 屋号 */}
        <p className="font-sans text-[13px] font-light tracking-[0.2em] text-white">
          {HERO_COPY.brand.name}
        </p>
        {/* 罫線：height 1px / rgba(255,255,255,0.4) / margin 6px 0 */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.4)", margin: "6px 0" }} />
        {/* サービス名 + 英語表記 */}
        <div className="flex items-baseline gap-3">
          <p className="font-sans text-[11px] tracking-[0.15em] text-white">
            {HERO_COPY.brand.service}
          </p>
          <p className="font-sans text-[9px] tracking-[0.2em] text-white/70">
            {HERO_COPY.brand.en}
          </p>
        </div>
      </div>

      {/* ── ゾーン2〜5：メインコンテンツ（縦中央・左寄り） ── */}
      {/* padding-left: 40px でブランドブロックと左揃え */}
      {/* padding-top: 160px でブランドブロック（高さ約80px）＋余白を確保 */}
      <div className="absolute inset-0 flex items-center" style={{ paddingLeft: "40px", paddingTop: "130px" }}>
        <div>

          {/* ゾーン2：メインコピー（大・2行） */}
          <p
            className="font-serif text-white"
            style={{
              fontSize: "clamp(36px, 5.5vw, 66px)",
              fontWeight: 200,
              letterSpacing: "0.15em",
              lineHeight: 1.6,
              marginBottom: "32px",
            }}
          >
            {HERO_COPY.preheading.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </p>

          {/* ゾーン3：サブコピー（小・2行） */}
          <div style={{ marginBottom: "48px" }}>
            {HERO_COPY.heading.map((line, i) => (
              <p
                key={i}
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(14px, 2vw, 20px)",
                  letterSpacing: "0.2em",
                  lineHeight: 2.2,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* ゾーン4：キャッチ（CTAボタン直上） */}
          <p
            className="font-sans font-light text-white"
            style={{ fontSize: "11px", letterSpacing: "0.15em", opacity: 0.6, marginBottom: "16px" }}
          >
            {HERO_COPY.subheading}
          </p>

          {/* ゾーン5：CTAボタン */}
          <div className="flex flex-col items-start gap-3">
            <Button href={LINE_URL} variant="outline-white" target="_blank" rel="noopener noreferrer" data-line-label="fv_line_button">
              {HERO_COPY.cta}
            </Button>
            <Link
              href="#trial-offer"
              className="inline-block border border-white/28 px-8 py-2.5 font-sans text-xs tracking-[0.18em] text-white/48 transition-colors duration-300 hover:border-white/44 hover:text-white/68"
            >
              {HERO_COPY.subCta}
            </Link>
          </div>

          {/* ボタン下の余白 */}
          <div className="mt-20" />

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

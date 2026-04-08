import Image from "next/image";
import Container from "@/components/ui/Container";
import { CONCEPT_COPY } from "@/lib/constants";

/**
 * Conceptセクション
 *
 * 背景画像の左側は写真の空気感を活かし、
 * 右側（テキスト側）に向かって濃くなるグラデーションで
 * 文字の可読性を確保する。
 *
 * "文字を見せるために背景を整える"方向で調整する。
 */
export default function Concept() {
  return (
    <section
      id="concept"
      className="relative overflow-hidden py-32 md:py-44"
    >
      {/* 背景画像：[object-position:35%_50%] で左〜中央を優先表示 */}
      <Image
        src="/images/concept/concept-bg.jpg"
        alt=""
        fill
        className="object-cover [object-position:35%_50%]"
        sizes="100vw"
        aria-hidden="true"
      />

      {/*
       * グラデーションオーバーレイ（右方向に濃くなる）
       * 0%（左端） rgba(0,0,0,0.04) → 写真の空気感を残す
       * 48%        rgba(0,0,0,0.44) → 自然な移行
       * 100%（右端）rgba(0,0,0,0.74) → 白文字を確実に支える
       */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.44) 48%, rgba(0,0,0,0.74) 100%)",
        }}
      />
      {/* モバイル用ベースレイヤー */}
      <div className="absolute inset-0 bg-black/[0.12] md:hidden" />

      <Container>
        <div className="relative z-10 md:flex md:justify-end">
          <div className="max-w-[400px]">

            <div className="mb-10 h-px w-6 bg-white/30" />

            {/* 見出し：text-white で視認性を最大化 */}
            <h2
              className="mb-14 font-serif text-xl font-light tracking-[0.1em] text-white md:text-2xl"
              style={{ lineHeight: 1.85 }}
            >
              {CONCEPT_COPY.heading}
            </h2>

            {/*
             * 本文：text-white/72
             * 見出しとの間に静かな階層を作る
             * lineHeight: 2.6 で読みやすく、上質な余白感を出す
             */}
            <div className="space-y-9">
              {CONCEPT_COPY.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="font-sans text-sm font-light tracking-wide text-white/72 md:text-base"
                  style={{ lineHeight: 2.6 }}
                >
                  {text}
                </p>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

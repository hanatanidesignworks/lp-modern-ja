import React from "react";
import Container from "@/components/ui/Container";
import { CTA_COPY, LINE_URL } from "@/lib/constants";

/**
 * CTAセクション
 *
 * Flow → Assurance で不安を解消した後の最終導線。
 * 「今すぐ申し込ませる」ではなく、「相談してみてもいいかもしれない」
 * と思わせる静かな行動促進を目的とする。
 *
 * id="contact" を付与して、Hero の CTA ボタンからのスクロールに対応する。
 */
export default function CTA() {
  return (
    <section id="contact" className="bg-white py-32 md:py-44">
      <Container>
        <div className="mx-auto max-w-[480px] text-center">

          {/* 英字ラベル */}
          <p className="mb-8 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
            {CTA_COPY.eyebrow}
          </p>

          {/* 見出し */}
          <h2
            className="mb-10 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
            style={{ lineHeight: 1.9 }}
          >
            {CTA_COPY.heading}
          </h2>

          {/* 説明文 */}
          <div className="mb-11">
            {CTA_COPY.description.map((line, i) => (
              <p
                key={i}
                className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)] md:text-base"
                style={{ lineHeight: 2.3 }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* 行動を後押しする callout（description の直後） */}
          <div className="mb-12 border-t border-[#ece8e2] pt-10">
            {CTA_COPY.callout.map((line, i) => (
              <p
                key={i}
                className="font-serif text-sm font-light tracking-[0.1em] text-[var(--color-primary)] md:text-base"
                style={{ lineHeight: 2.1 }}
              >
                {line}
              </p>
            ))}
          </div>

          {/*
           * メインボタン
           *
           * hover:bg-neutral-800：控えめに少し明るくなる変化
           * transition-colors duration-300 で静かに反応させる
           */}
          <a
            href={LINE_URL}
            className="inline-block rounded bg-[var(--color-primary)] px-10 py-4 font-sans text-sm tracking-[0.2em] text-white transition-colors duration-300 hover:bg-neutral-800"
          >
            {CTA_COPY.button.label}
          </a>
          {/*
           * 補足テキスト（3項目）
           *
           * 常に縦並び・中央寄せ。中点区切りなし。
           * whitespace-nowrap で各項目の途中折り返しを防ぐ。
           * gap-2 で静かな余白を保つ。
           */}
          <div className="mt-10 flex flex-col items-center gap-2">
            {CTA_COPY.notes.map((note, i) => (
              <span
                key={`${note}-${i}`}
                className="whitespace-nowrap font-sans text-xs tracking-wide text-[var(--color-muted)]"
              >
                {note}
              </span>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

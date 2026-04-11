import Container from "@/components/ui/Container";
import { FAQ_COPY } from "@/lib/constants";

/**
 * FAQセクション（AIO対策）
 *
 * 役割：AI検索・要約エンジンに拾われやすい明確なQ&A構造を提供する。
 * デザイン：Assurance と同じ hairline + serif/sans の縦リスト構成を踏襲しつつ、
 *   背景を --color-surface（ごく薄いベージュ）にして視覚的に区別する。
 *
 * 構造化データ：JSON-LD（schema.org/FAQPage）をセクション末尾に埋め込み、
 *   Google等の検索エンジン・AI要約に対してFAQ構造を明示する。
 */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_COPY.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="bg-[var(--color-surface)] py-28 md:py-40">
      <Container>
        <div className="max-w-[520px]">

          {/* ── セクションヘッダー ── */}
          <p className="mb-8 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
            {FAQ_COPY.eyebrow}
          </p>
          <h2
            className="mb-16 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:mb-20 md:text-2xl"
            style={{ lineHeight: 1.85 }}
          >
            {FAQ_COPY.heading}
          </h2>

          {/*
           * Q&Aリスト
           *
           * question：h3（serif・やや強め）→ AI/検索エンジンが質問として認識しやすい
           * answer  ：p（sans・読みやすく）→ 回答本文として構造化
           * Assurance と同じ hairline パターン（first:border-t / border-b）
           */}
          <ul className="list-none">
            {FAQ_COPY.items.map((item, i) => (
              <li
                key={i}
                className="border-b border-[#ece8e2] py-10 first:border-t last:border-b-0 md:py-12"
              >
                {/* 質問：serif で静かに、かつ明確に */}
                <h3
                  className="mb-5 font-serif text-base font-light tracking-[0.08em] text-[var(--color-primary)] md:text-[1.0625rem]"
                  style={{ lineHeight: 1.7 }}
                >
                  {item.question}
                </h3>

                {/* 回答：sans で読みやすく */}
                <p
                  className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)] md:text-base"
                  style={{ lineHeight: 2.2 }}
                >
                  {item.answer}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </Container>

      {/* ── JSON-LD 構造化データ（FAQPage schema） ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}

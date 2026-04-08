import Container from "@/components/ui/Container";
import { INLINE_CTA_COPY, LINE_URL } from "@/lib/constants";

/**
 * 中間CTA（静かな行動促進）
 *
 * Comparison・TrialOffer・Transparency の直後に配置する。
 * 大きな訴求ではなく、「相談してみようかな」と思えるタイミングで
 * 静かに背中を押すことを目的とする。
 *
 * bg-[var(--color-surface)]：前後のセクションと柔らかく区別。
 * 余白・フォントサイズ・ボタンのスケールはすべて既存LPのトーンに揃える。
 */
export default function InlineCTA() {
  return (
    <section className="bg-[var(--color-surface)] py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-center">

          <p
            className="mb-7 font-serif text-sm font-light tracking-[0.1em] text-[var(--color-primary)] md:text-base"
            style={{ lineHeight: 2.0 }}
          >
            {INLINE_CTA_COPY.text}
          </p>

          <a
            href={LINE_URL}
            className="inline-block rounded border border-[var(--color-primary)] px-8 py-3 font-sans text-xs tracking-[0.2em] text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-white"
          >
            {INLINE_CTA_COPY.button}
          </a>

          <p className="mt-5 font-sans text-[11px] tracking-wide text-[var(--color-muted)]">
            {INLINE_CTA_COPY.note}
          </p>

        </div>
      </Container>
    </section>
  );
}

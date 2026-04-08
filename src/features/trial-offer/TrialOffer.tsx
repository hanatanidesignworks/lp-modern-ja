import Container from "@/components/ui/Container";
import { TRIAL_OFFER_COPY, LINE_URL } from "@/lib/constants";

/**
 * TrialOfferセクション
 *
 * 役割：「売り込み」ではなく「最初の一歩」として見せる入口。
 * 年間管理への導線を急がず、まず今の状態を知ることに価値を置く。
 *
 * 構成：
 *   eyebrow → 見出し → 本文2段落
 *   → 実施内容リスト（左ボーダー）
 *   → 条件表示（ラベル/値の定義リスト）
 *   → 限定条件の注記
 *   → 安心感の補足一文
 *   → CTAボタン（filled・主CTAと同仕様）
 */
export default function TrialOffer() {
  return (
    <section id="trial-offer" className="bg-white py-28 md:py-40">
      <Container>
        <div className="max-w-[520px]">

          {/* ── eyebrow ── */}
          <p className="mb-8 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
            {TRIAL_OFFER_COPY.eyebrow}
          </p>

          {/* ── 見出し ── */}
          <h2
            className="mb-12 font-serif text-xl font-light tracking-[0.08em] text-[var(--color-primary)] md:text-2xl"
            style={{ lineHeight: 1.85 }}
          >
            {TRIAL_OFFER_COPY.heading}
          </h2>

          {/* ── 本文 ── */}
          <div className="mb-14 space-y-5">
            {TRIAL_OFFER_COPY.body.map((line, i) => (
              <p
                key={i}
                className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)] md:text-base"
                style={{ lineHeight: 2.2 }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* ── 実施内容リスト ── */}
          {/*
           * 左ボーダー＋space-y-4 でリスト感を抑え、上質な箇条書きに。
           * 番号やアイコンを付けず、ボーダーだけで静かな区切りを作る。
           */}
          <ul className="mb-12 list-none space-y-4 border-l border-[#d8d4cc] pl-5">
            {TRIAL_OFFER_COPY.includes.map((item, i) => (
              <li
                key={i}
                className="font-sans text-sm font-light tracking-[0.08em] text-[var(--color-secondary)]"
                style={{ lineHeight: 1.9 }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* ── 条件表示 ── */}
          {/*
           * ラベル／値を横並びにした定義リスト。
           * ラベルを固定幅（w-20）にして値の開始位置を揃える。
           * 文字色はラベル→muted、値→secondary で静かな階層を作る。
           */}
          <dl className="mb-0 space-y-3">
            {TRIAL_OFFER_COPY.conditions.map((cond, i) => (
              <div key={i} className="flex items-baseline gap-5">
                <dt className="w-20 shrink-0 font-sans text-[10px] tracking-[0.2em] text-[var(--color-muted)]">
                  {cond.label}
                </dt>
                <dd className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)]">
                  {cond.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* ── 価格表示 ── */}
          {/*
           * 条件表示の延長線上に、hairline で静かに区切って配置。
           * ラベル幅（w-20）を conditions と揃えることで、
           * 同じ情報ブロックとして自然に読める。
           * 価格値は color-primary（conditions より一段濃い）で
           * 存在感を小さく上げるが、大きく見せない。
           */}
          <div className="mt-5 border-t border-[#ece8e2] pt-5">
            <div className="flex items-baseline gap-5">
              <span className="w-20 shrink-0 font-sans text-[10px] tracking-[0.2em] text-[var(--color-muted)]">
                {TRIAL_OFFER_COPY.price.label}
              </span>
              <span className="font-sans text-sm font-light tracking-wide text-[var(--color-primary)]">
                {TRIAL_OFFER_COPY.price.value}
              </span>
            </div>
          </div>

          {/* ── ※ 注記（充当 + 件数限定） ── */}
          {/*
           * 充当説明と件数限定を同格の注釈として縦積み。
           * space-y-2 で詰まりすぎず、text-[11px]・muted で主張を抑える。
           */}
          <div className="mb-12 mt-5 space-y-2">
            <p className="font-sans text-[11px] font-light tracking-wide text-[var(--color-muted)]">
              {TRIAL_OFFER_COPY.allocation}
            </p>
            <p className="font-sans text-[11px] font-light tracking-wide text-[var(--color-muted)]">
              {TRIAL_OFFER_COPY.limit}
            </p>
          </div>

          {/* ── 安心感の補足一文 ── */}
          {/*
           * 押し売りしない姿勢を静かに添える。
           * セリフ体・font-light・color-secondary で本文より一段弱く。
           * CTAとの間に十分な余白（mb-14）を確保。
           */}
          <p
            className="mb-14 border-t border-[#ece8e2] pt-10 font-serif text-sm font-light tracking-[0.1em] text-[var(--color-secondary)] md:text-base"
            style={{ lineHeight: 2.1 }}
          >
            {TRIAL_OFFER_COPY.assurance}
          </p>

          {/* ── CTAボタン ── */}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-[var(--color-primary)] px-10 py-4 font-sans text-sm tracking-[0.2em] text-white transition-colors duration-300 hover:bg-neutral-800"
          >
            {TRIAL_OFFER_COPY.cta.label}
          </a>

          {/* ── CTA補足文 ── */}
          {/*
           * 「申込確定ではなく、まず相談で良い」という安心感を静かに添える。
           * ボタン直下に置くことで主張せず、背中を押す役割に留める。
           * font-sans・text-xs・color-muted でnoteと同格の控えめな扱いに。
           */}
          <p
            className="mt-5 font-sans text-xs font-light tracking-wide text-[var(--color-muted)]"
            style={{ lineHeight: 1.9 }}
          >
            {TRIAL_OFFER_COPY.cta.note}
          </p>

        </div>
      </Container>
    </section>
  );
}

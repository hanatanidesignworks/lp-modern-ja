import Container from "@/components/ui/Container";
import { ASSURANCE_COPY } from "@/lib/constants";

/**
 * Assuranceセクション（不安解消）
 *
 * CTA直前に、よくある不安を静かに取り除く。
 * FAQではなく、「安心して相談できる」という信頼の補強として見せる。
 *
 * Flowと同じトーン：白背景・左揃え・hairlineボーダーの縦リスト。
 * セクション末尾の closing 文でCTAへ自然につなぐ。
 */
export default function Assurance() {
  return (
    <section id="assurance" className="bg-white py-28 md:py-40">
      <Container>
        <div className="max-w-[520px]">

          {/* ── セクションヘッダー ── */}
          <p className="mb-8 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
            {ASSURANCE_COPY.eyebrow}
          </p>
          <h2
            className="mb-16 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:mb-20 md:text-2xl"
            style={{ lineHeight: 1.85 }}
          >
            {ASSURANCE_COPY.heading}
          </h2>

          {/*
           * 質問リスト
           *
           * 各項目：question（h3・serif）+ answer（p・sans）の縦積み
           * hairline パターン：first:border-t / border-b / last:border-b-0
           * py-10 md:py-12 で余白をしっかり確保し、落ち着いたリズムを作る
           */}
          <ul className="list-none">
            {ASSURANCE_COPY.items.map((item, i) => (
              <li
                key={i}
                className="border-b border-[#ece8e2] py-10 first:border-t last:border-b-0 md:py-12"
              >
                {/* 質問：serif で静かな印象に */}
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

          {/*
           * CTAへの接続文
           *
           * リスト直後に hairline を引いて静かな区切りを作り、
           * 余白（pt-12 md:pt-14）でリストとの間に十分な"間"を確保。
           * serif・font-light で圧をかけず、CTAへの橋渡しとして添える。
           */}
          <div className="mt-14 border-t border-[#ece8e2] pt-12 md:mt-16 md:pt-14">
            <p
              className="font-serif text-sm font-light tracking-[0.1em] text-[var(--color-secondary)] md:text-base"
              style={{ lineHeight: 2.0 }}
            >
              {ASSURANCE_COPY.closing}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

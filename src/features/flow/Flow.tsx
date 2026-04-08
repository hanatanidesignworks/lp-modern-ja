import Container from "@/components/ui/Container";
import { FLOW_COPY } from "@/lib/constants";

/**
 * Flowセクション
 *
 * 問い合わせハードルを下げるための設計に変更。
 * 「むずかしい手続きはない」「写真だけで相談できる」
 * 「無理な営業はしない」が自然に伝わる5ステップ構成。
 *
 * レイアウト：ステップ番号（左）＋ 縦ライン ＋ 内容（右）。
 * 縦ラインが全ステップを貫く"芯"として機能する。
 */
export default function Flow() {
  return (
    <section id="flow" className="bg-[var(--color-surface)] py-28 md:py-40">
      <Container>
        <div className="max-w-[520px]">

          {/* ── セクションヘッダー ── */}
          <p className="mb-8 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
            {FLOW_COPY.eyebrow}
          </p>
          <h2
            className="mb-10 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
            style={{ lineHeight: 1.85 }}
          >
            {FLOW_COPY.heading}
          </h2>

          {/*
           * intro：2行それぞれを <p> で描画。
           * space-y-0 で隣接させ、一つの段落のように見せる。
           */}
          <div>
            {FLOW_COPY.intro.map((line, i) => (
              <p
                key={i}
                className="font-sans text-sm font-light tracking-wider text-[var(--color-secondary)] md:text-base"
                style={{ lineHeight: 2.1 }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* ── ステップリスト ── */}
          <div className="relative mt-16 md:mt-20">
            <div className="absolute bottom-0 left-8 top-0 w-px bg-[#e5e1db]" />
            <ul className="list-none">
              {FLOW_COPY.steps.map((step) => (
                <li
                  key={step.number}
                  className="flex py-11 md:py-14"
                >
                  <div className="w-8 shrink-0 pt-0.5">
                    <span className="font-sans text-[11px] tracking-[0.28em] text-[var(--color-muted)]">
                      {step.number}
                    </span>
                  </div>
                  <div className="pl-8 md:pl-10">
                    <h3
                      className="mb-4 font-serif text-base font-light tracking-[0.1em] text-[var(--color-primary)] md:text-[1.0625rem]"
                      style={{ lineHeight: 1.7 }}
                    >
                      {step.title}
                    </h3>
                    <div className="space-y-4">
                      {step.body.map((paragraph, j) => (
                        <p
                          key={j}
                          className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)]"
                          style={{ lineHeight: 2.1 }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── クロージング ── */}
          {/*
           * closing：2行。
           * 1行目：「相談だけでも大丈夫」という安心の言葉
           * 2行目：依頼を決める必要はないという補強
           * space-y-2 で2行を近づけて一塊として読ませる
           */}
          <div className="mt-14 border-t border-[#ece8e2] pt-12 md:mt-16 md:pt-14">
            <div className="space-y-2">
              {FLOW_COPY.closing.map((line, i) => (
                <p
                  key={i}
                  className="font-serif text-sm font-light tracking-[0.12em] text-[var(--color-primary)] md:text-base"
                  style={{ lineHeight: 2.0 }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

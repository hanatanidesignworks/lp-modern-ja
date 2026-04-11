import Container from "@/components/ui/Container";
import { AWARENESS_COPY } from "@/lib/constants";

/**
 * Awarenessセクション
 *
 * 「まとめて整える」やり方の問題を説明し、
 * 庭のコンシェルジュの考え方（都度・少しずつ）へ誘導する。
 */
export default function Awareness() {
  return (
    <section
      className="bg-[var(--color-surface)]"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <Container>
        {/*
         * max-w-[640px]：見出しを1行に収めつつ、本文の可読性も維持
         */}
        <div className="max-w-[640px]">

          {/* ── セクションラベル ── */}
          <p
            className="font-sans font-light"
            style={{
              fontSize: "clamp(11px, 1.5vw, 13px)",
              letterSpacing: "0.3em",
              color: "rgba(0,0,0,0.4)",
              marginBottom: "48px",
            }}
          >
            {AWARENESS_COPY.eyebrow}
          </p>

          {/* ── 見出し（句読点直後で2行） ── */}
          <h2
            className="font-serif font-light"
            style={{
              fontSize: "clamp(18px, 2.5vw, 28px)",
              letterSpacing: "0.15em",
              color: "var(--color-primary)",
              lineHeight: 1.8,
              marginBottom: "64px",
            }}
          >
            {AWARENESS_COPY.heading.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>

          {/* ── 本文4ブロック ── */}
          <div>
            {AWARENESS_COPY.body.map((block, i) => (
              <p
                key={i}
                className="font-serif"
                style={{
                  fontSize: "clamp(14px, 1.8vw, 17px)",
                  fontWeight: block.highlight ? 400 : 300,
                  letterSpacing: "0.12em",
                  lineHeight: 1.7,
                  color: block.highlight ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.75)",
                  marginBottom: i < AWARENESS_COPY.body.length - 1 ? "48px" : 0,
                  whiteSpace: "pre-line",
                }}
              >
                {block.text}
              </p>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

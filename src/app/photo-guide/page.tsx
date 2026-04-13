import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LINE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "庭の写真の撮り方｜ハナタニガーデンワークス",
  description:
    "LINEでの見積もりは、写真を送っていただくだけでOKです。庭全体・別角度・気になる箇所・高さ・ボリュームの4パターンで撮影いただくと、より正確なご提案が可能です。",
  robots: "index, follow",
};

const sections = [
  {
    number: "01",
    heading: "庭全体がわかる写真",
    body: "庭全体がわかるように、少し離れて撮影してください。\n家や塀も一緒に写ると、全体の状況が分かりやすくなります。",
    src: "/images/photo-guide/IMG_0490.jpg",
    alt: "庭全体がわかる写真の例",
  },
  {
    number: "02",
    heading: "別の角度から撮影",
    body: "1方向だけでなく、角度を変えて数枚撮影してください。\n見えない部分が減ることで、より正確なご提案が可能になります。",
    src: "/images/photo-guide/IMG_0491.jpg",
    alt: "別の角度から撮影した写真の例",
  },
  {
    number: "03",
    heading: "気になる部分をアップで",
    body: "伸びすぎた枝や気になる箇所をアップで撮影してください。\n細かい状態がわかると、作業内容がより明確になります。",
    src: "/images/photo-guide/IMG_0492.jpg",
    alt: "気になる部分をアップで撮影した写真の例",
  },
  {
    number: "04",
    heading: "高さやボリュームがわかる写真",
    body: "木の高さや広がりがわかるように撮影してください。\n作業の規模や時間の目安になります。",
    src: "/images/photo-guide/IMG_0493.jpg",
    alt: "高さやボリュームがわかる写真の例",
  },
] as const;

export default function PhotoGuidePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-surface, #f8f7f5)",
      }}
    >
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "clamp(40px, 8vw, 80px) clamp(24px, 6vw, 48px) 120px",
        }}
      >

        {/* ── LP へ戻るリンク ── */}
        <Link
          href="/"
          className="pg-back-link"
          style={{
            display: "inline-block",
            marginBottom: "clamp(48px, 8vw, 80px)",
            fontFamily: "var(--font-body, 'Noto Sans JP', sans-serif)",
            fontSize: "12px",
            fontWeight: 300,
            letterSpacing: "0.2em",
            textDecoration: "none",
          }}
        >
          ← トップへ戻る
        </Link>

        {/* ── eyebrow ── */}
        <p
          style={{
            marginBottom: "24px",
            fontFamily: "var(--font-body, 'Noto Sans JP', sans-serif)",
            fontSize: "10px",
            fontWeight: 300,
            letterSpacing: "0.4em",
            color: "var(--color-muted, #999)",
            lineHeight: 1,
          }}
        >
          PHOTO GUIDE
        </p>

        {/* ── ページタイトル ── */}
        <h1
          style={{
            marginBottom: "clamp(24px, 4vw, 40px)",
            fontFamily: "var(--font-heading, 'Noto Serif JP', serif)",
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "var(--color-primary, #1a1a1a)",
            lineHeight: 1.85,
          }}
        >
          庭の写真の撮り方
        </h1>

        {/* ── 導入文 ── */}
        <p
          style={{
            marginBottom: "clamp(56px, 10vw, 96px)",
            fontFamily: "var(--font-body, 'Noto Sans JP', sans-serif)",
            fontSize: "clamp(13px, 1.8vw, 15px)",
            fontWeight: 300,
            letterSpacing: "0.1em",
            color: "var(--color-secondary, #555)",
            lineHeight: 2.2,
            borderLeft: "2px solid var(--color-border, #d8d4cc)",
            paddingLeft: "20px",
          }}
        >
          LINEでの見積もりは、写真を送っていただくだけでOKです。
          <br />
          以下のように撮影いただくと、より正確なご提案が可能になります。
        </p>

        {/* ── セクション一覧 ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(64px, 12vw, 104px)",
          }}
        >
          {sections.map((section) => (
            <div key={section.number}>

              {/* 番号 + 見出し */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body, 'Noto Sans JP', sans-serif)",
                    fontSize: "11px",
                    fontWeight: 300,
                    letterSpacing: "0.3em",
                    color: "var(--color-muted, #999)",
                    flexShrink: 0,
                  }}
                >
                  {section.number}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-heading, 'Noto Serif JP', serif)",
                    fontSize: "clamp(16px, 2.2vw, 20px)",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    color: "var(--color-primary, #1a1a1a)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {section.heading}
                </h2>
              </div>

              {/* 説明文 */}
              <p
                style={{
                  marginBottom: "28px",
                  fontFamily: "var(--font-body, 'Noto Sans JP', sans-serif)",
                  fontSize: "clamp(13px, 1.7vw, 14px)",
                  fontWeight: 300,
                  letterSpacing: "0.1em",
                  color: "var(--color-secondary, #555)",
                  lineHeight: 2.1,
                  whiteSpace: "pre-line",
                }}
              >
                {section.body}
              </p>

              {/* 画像 */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  background: "#f0ede8",
                }}
              >
                <Image
                  src={section.src}
                  alt={section.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 680px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  quality={85}
                />
              </div>

            </div>
          ))}
        </div>

        {/* ── 仕切り線 ── */}
        <div
          style={{
            height: "1px",
            background: "var(--color-border, #d8d4cc)",
            margin: "clamp(64px, 12vw, 104px) 0 clamp(48px, 8vw, 80px)",
          }}
        />

        {/* ── 最後のCTA ── */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              marginBottom: "32px",
              fontFamily: "var(--font-heading, 'Noto Serif JP', serif)",
              fontSize: "clamp(16px, 2.2vw, 20px)",
              fontWeight: 300,
              letterSpacing: "0.1em",
              color: "var(--color-primary, #1a1a1a)",
              lineHeight: 2.0,
            }}
          >
            うまく撮れなくて大丈夫。
            <br />
            まず送ってみてください。
          </p>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-line-label="photo_guide_line_button"
            className="pg-cta-link"
            style={{
              display: "inline-block",
              color: "#fff",
              fontFamily: "var(--font-body, 'Noto Sans JP', sans-serif)",
              fontSize: "14px",
              fontWeight: 300,
              letterSpacing: "0.2em",
              padding: "16px 40px",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            LINEで写真を送る
          </a>

          <p
            style={{
              marginTop: "20px",
              fontFamily: "var(--font-body, 'Noto Sans JP', sans-serif)",
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.15em",
              color: "var(--color-muted, #999)",
              lineHeight: 1,
            }}
          >
            ご相談は無料です
          </p>
        </div>

      </div>
    </div>
  );
}

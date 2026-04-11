import Image from "next/image";
import { EMPATHY_COPY } from "@/lib/constants";

/**
 * Empathyセクション
 *
 * 自宅の庭・実家の庭（空き家）の2ブロック構成で共感を広げる。
 * 転換の一行で視点を切り替え、締めで「ひとりで抱えなくていい」に着地。
 */

// 各ブロックの項目リストを描画するヘルパー
function ItemList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-none">
      {items.map((item, i) => (
        <li
          key={i}
          className="font-serif font-light"
          style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.85)",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            padding: "24px 0",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Empathy() {
  return (
    <section
      id="empathy"
      className="relative overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      {/* ── 背景画像 ── */}
      <Image
        src="/images/empathy/empathy-bg.jpg"
        alt=""
        fill
        className="object-cover [object-position:65%_50%]"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* ── グラデーションオーバーレイ ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.56) 42%, rgba(0,0,0,0.84) 100%)",
        }}
      />

      {/* ── コンテンツ ── */}
      <div
        className="relative z-10"
        style={{ paddingLeft: "6vw", maxWidth: "640px" }}
      >

        {/* タイトル */}
        <h2
          className="font-serif font-light text-white"
          style={{
            fontSize: "clamp(20px, 3vw, 32px)",
            letterSpacing: "0.2em",
            marginBottom: "48px",
          }}
        >
          {EMPATHY_COPY.heading}
        </h2>

        {/* 自宅ブロック */}
        <ItemList items={EMPATHY_COPY.homeItems} />

        {/* 転換の一行 */}
        <p
          className="font-serif font-light"
          style={{
            fontSize: "clamp(13px, 1.8vw, 16px)",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.5)",
            margin: "48px 0",
          }}
        >
          {EMPATHY_COPY.transition}
        </p>

        {/* 空き家ブロック */}
        <ItemList items={EMPATHY_COPY.vacantItems} />

        {/* 締めの一行 */}
        <p
          className="font-serif font-light text-white"
          style={{
            fontSize: "clamp(16px, 2.5vw, 24px)",
            letterSpacing: "0.2em",
            marginTop: "64px",
            paddingTop: "48px",
            borderTop: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          {EMPATHY_COPY.closing}
        </p>

      </div>
    </section>
  );
}

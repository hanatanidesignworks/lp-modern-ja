import Image from "next/image";
import Container from "@/components/ui/Container";
import { EMPATHY_COPY } from "@/lib/constants";

/**
 * Empathyセクション
 *
 * "かっこよさ"よりも"静かな共感"を優先する。
 * 左側テキストの可読性を最優先に、
 * 背景の存在感は少し引いて余白の中で読ませる構成にする。
 *
 * Concept（右寄せ・印象的）に対して
 * Empathy（左寄せ・静かな共感）でバランスを取る。
 */

const ITEM_WEIGHTS = [
  "font-semibold", // 1行目：観察の入口
  "font-medium",   // 2行目：日常の忙しさ
  "font-medium",   // 3行目：繰り返しの共感
  "font-semibold", // 4行目：行動の手前の躊躇
] as const;

export default function Empathy() {
  return (
    <section
      id="empathy"
      className="relative overflow-hidden py-32 md:py-44"
    >
      {/*
       * 背景画像
       * [object-position:65%_50%] で右側を優先表示
       * テキストが左にくるため、写真の主役は右半分で見せる
       */}
      <Image
        src="/images/empathy/empathy-bg.jpg"
        alt=""
        fill
        className="object-cover [object-position:65%_50%]"
        sizes="100vw"
        aria-hidden="true"
      />

      {/*
       * グラデーションオーバーレイ（左方向に濃くなる）
       *
       * 0%（右端）  rgba(0,0,0,0.10) → 写真の雰囲気を残す（わずかにベースを持たせる）
       * 42%（中間）  rgba(0,0,0,0.56) → Conceptより早めに暗さを立ち上げる
       * 100%（左端） rgba(0,0,0,0.84) → テキスト後ろをしっかり沈める
       *
       * Concept の右端（0.74）より強め（0.84）にして
       * テキスト側の可読性をより確実に確保する
       */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.56) 42%, rgba(0,0,0,0.84) 100%)",
        }}
      />

      <Container>
        <div className="relative z-10">
          <div className="max-w-[400px]">

            <div className="mb-8 h-px w-6 bg-white/25" />

            {/* 見出し：text-white */}
            <h2
              className="mb-12 font-sans text-xl font-medium tracking-[0.1em] text-white md:mb-14 md:text-2xl"
              style={{ lineHeight: 1.85 }}
            >
              {EMPATHY_COPY.heading}
            </h2>

            {/*
             * 項目リスト
             *
             * テキスト：text-white/82（見出しより一段階落として階層を作る）
             * ボーダー：border-white/18（暗背景に溶け込む薄さ）
             * py-6 md:py-8：Conceptより余白を増やして静かに読ませる
             * lineHeight: 2.1：行間を広げて呼吸を確保する
             */}
            <ul className="list-none">
              {EMPATHY_COPY.items.map((item, i) => (
                <li
                  key={i}
                  className={`border-b border-white/18 py-6 font-sans text-base tracking-[0.08em] text-white/82 first:border-t last:border-b-0 last:pt-10 md:py-8 md:text-[1.0625rem] md:last:pt-11 ${ITEM_WEIGHTS[i]}`}
                  style={{ lineHeight: 2.1 }}
                >
                  {item}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </Container>
    </section>
  );
}

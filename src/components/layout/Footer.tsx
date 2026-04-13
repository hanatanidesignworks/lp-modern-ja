import Container from "@/components/ui/Container";
import { FOOTER_COPY } from "@/lib/constants";

/**
 * フッター
 *
 * 役割：信頼性の補強 + 補助的な連絡手段の案内 + 静かな安心感
 * 主CTAを邪魔しないよう、存在感を意図的に低く設計する。
 *
 * 背景 bg-[#1c1c1c]（--color-primary と同色）で
 * LP全体の白/surfaceとコントラストをつけ、静かな「終わり」を演出する。
 * すべてのテキストを白/低透明度にすることで、
 * 情報はあるが主張しない、ホテルライクな佇まいにする。
 */
export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] py-16 md:py-20">
      <Container>

        {/* ── 案内メッセージ ── */}
        <p
          className="text-center font-sans text-[11px] font-light tracking-[0.25em] text-white/38"
          style={{ lineHeight: 2.0 }}
        >
          {FOOTER_COPY.message}
        </p>

        {/* ── 連絡手段リンク ── */}
        {/*
         * モバイル：縦積み中央揃え
         * PC：横並び中央揃え（gap-16 で適切な間隔）
         * リンクはテキストのみ。アンダーラインは hover 時だけ表示。
         */}
        <div className="mt-10 flex flex-col items-center gap-7 md:flex-row md:justify-center md:gap-16">
          {FOOTER_COPY.contacts.map((contact, i) => (
            <div key={i} className="text-center">
              <a
                href={contact.href}
                {...(contact.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(contact.href.includes("lin.ee") ? { "data-line-label": "footer_line_button" } : {})}
                className="font-sans text-sm font-light tracking-[0.12em] text-white/55 underline-offset-4 transition-colors duration-300 hover:text-white/75 hover:underline"
              >
                {contact.label}
              </a>
              {contact.note && (
                <p className="mt-1.5 font-sans text-[10px] font-light tracking-wide text-white/28">
                  {contact.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ── セパレーター ── */}
        <div className="mt-14 border-t border-white/[0.07]" />

        {/* ── 事業情報 ── */}
        {/*
         * モバイル：縦積み
         * PC：横並び（gap-8 で静かに区切る）
         * 文字色をさらに落として、コピーライトに向けて序列を下げる
         */}
        <div className="mt-8 flex flex-col items-center gap-2.5 md:flex-row md:justify-center md:gap-8">
          <p className="font-sans text-xs font-light tracking-wide text-white/38">
            {FOOTER_COPY.business.name}
          </p>
          <p className="font-sans text-[11px] font-light tracking-wide text-white/25">
            対応エリア：{FOOTER_COPY.business.area}
          </p>
          <p className="font-sans text-[11px] font-light tracking-wide text-white/25">
            営業時間：{FOOTER_COPY.business.hours}　定休日：{FOOTER_COPY.business.holiday}
          </p>
        </div>

        {/* ── コピーライト ── */}
        <p className="mt-7 text-center font-sans text-[10px] font-light tracking-[0.25em] text-white/18">
          {FOOTER_COPY.copyright}
        </p>

      </Container>
    </footer>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThanksPage() {
  useEffect(() => {
    window.gtag?.("event", "contact_form_submit");
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[480px] px-6 py-20 md:py-28">

        {/* ← トップへ戻る */}
        <Link
          href="/"
          className="mb-16 inline-block font-sans text-xs tracking-[0.2em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-secondary)]"
        >
          ← トップへ戻る
        </Link>

        <p className="mb-4 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
          CONTACT
        </p>

        <h1
          className="mb-10 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
          style={{ lineHeight: 1.85 }}
        >
          送信が完了しました。
        </h1>

        <p
          className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)]"
          style={{ lineHeight: 2.2 }}
        >
          お問い合わせありがとうございます。
          <br />
          近日中にご連絡いたします。
        </p>

      </div>
    </div>
  );
}

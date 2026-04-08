"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "送信に失敗しました。");
      }

      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "送信に失敗しました。");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[480px] px-6 py-20 md:py-28">

        {/* ← LPへ戻る */}
        <Link
          href="/"
          className="mb-16 inline-block font-sans text-xs tracking-[0.2em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-secondary)]"
        >
          ← トップへ戻る
        </Link>

        {status === "success" ? (
          /* ── 送信完了 ── */
          <div>
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
        ) : (
          /* ── フォーム ── */
          <div>
            {/* ヘッダー */}
            <p className="mb-4 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
              CONTACT
            </p>
            <h1
              className="mb-8 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
              style={{ lineHeight: 1.85 }}
            >
              お問い合わせフォーム
            </h1>
            <p
              className="mb-4 font-sans text-sm font-light tracking-wide text-[var(--color-secondary)]"
              style={{ lineHeight: 2.2 }}
            >
              LINEでのご相談が難しい方は、こちらからご連絡ください。
            </p>
            <p
              className="mb-14 font-sans text-xs font-light tracking-wide text-[var(--color-muted)]"
              style={{ lineHeight: 2.0 }}
            >
              お庭の状態がわかる場合は、写真の内容も記載いただけるとスムーズです。
            </p>

            {/* フォーム */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-10">

                {/* 名前 */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block font-sans text-[10px] tracking-[0.3em] text-[var(--color-muted)]"
                  >
                    お名前 <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                    className="w-full border-b border-[var(--color-border)] bg-transparent pb-3 font-sans text-sm font-light tracking-wide text-[var(--color-primary)] outline-none transition-colors focus:border-[var(--color-primary)] placeholder:text-[var(--color-muted)]"
                    placeholder="例：田中 太郎"
                  />
                </div>

                {/* 連絡先 */}
                <div>
                  <label
                    htmlFor="contact"
                    className="mb-3 block font-sans text-[10px] tracking-[0.3em] text-[var(--color-muted)]"
                  >
                    連絡先（メールまたはお電話） <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input
                    id="contact"
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    autoComplete="email"
                    className="w-full border-b border-[var(--color-border)] bg-transparent pb-3 font-sans text-sm font-light tracking-wide text-[var(--color-primary)] outline-none transition-colors focus:border-[var(--color-primary)] placeholder:text-[var(--color-muted)]"
                    placeholder="例：tanaka@email.com または 090-0000-0000"
                  />
                </div>

                {/* 内容 */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block font-sans text-[10px] tracking-[0.3em] text-[var(--color-muted)]"
                  >
                    お問い合わせ内容 <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full resize-none border-b border-[var(--color-border)] bg-transparent pb-3 font-sans text-sm font-light leading-relaxed tracking-wide text-[var(--color-primary)] outline-none transition-colors focus:border-[var(--color-primary)] placeholder:text-[var(--color-muted)]"
                    placeholder="お庭の状態、ご要望など、お気軽にお書きください。"
                  />
                </div>

              </div>

              {/* エラー */}
              {status === "error" && (
                <p className="mt-8 font-sans text-xs text-red-400">
                  {errorMessage}
                </p>
              )}

              {/* 送信ボタン */}
              <div className="mt-12">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-block rounded bg-[var(--color-primary)] px-10 py-4 font-sans text-sm tracking-[0.2em] text-white transition-colors duration-300 hover:bg-neutral-800 disabled:opacity-50"
                >
                  {status === "submitting" ? "送信中..." : "送信する"}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";

const SESSION_KEY = "trial_banner_closed";
const SCROLL_THRESHOLD = 150; // px — この値を超えたらバナーを表示

/**
 * TrialBanner（初回限定オーバーレイバナー）
 *
 * 役割：
 *   初回限定のお試しプランを「セール感ゼロ」で静かに訴求する。
 *   LP 上部に薄く固定し、本文の邪魔をしない高さ（48px）で存在する。
 *
 * 挙動：
 *   - スクロール 150px を超えた段階でフェード＋スライドインで出現
 *   - × ボタン or Esc キーで閉じる
 *   - 閉じると sessionStorage に記録し、同一セッション中は再表示しない
 *   - ブラウザを閉じて再訪問するとリセットされ再表示する
 *
 * アクセシビリティ：
 *   - 閉じるボタンに aria-label="閉じる"
 *   - Esc キー対応
 *   - クリック領域は最低 44×44px を確保
 */
export default function TrialBanner() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  // セッションフラグの初期チェック（SSR 安全のため useEffect 内）
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setClosed(true);
    }
  }, []);

  // スクロール検知
  useEffect(() => {
    if (closed) return;

    const onScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // 既にスクロール済みの場合の初期チェック
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [closed]);

  // 閉じる処理
  const handleClose = useCallback(() => {
    setVisible(false);
    setClosed(true);
    sessionStorage.setItem(SESSION_KEY, "1");
  }, []);

  // Esc キー対応
  useEffect(() => {
    if (!visible) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, handleClose]);

  // 閉じた後は DOM から取り除く（スペースを無駄にしない）
  if (closed) return null;

  const show = visible && !closed;

  return (
    <div
      role="banner"
      aria-hidden={!show}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "48px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "clamp(16px, 4vw, 40px)",
        paddingRight: "8px",
        background: "rgba(15, 14, 13, 0.88)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        // フェード＋上からスライドイン
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(-100%)",
        transition: "opacity 0.45s ease, transform 0.45s ease",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      {/* ── テキスト部分 ── */}
      <p
        style={{
          flex: 1,
          fontFamily: "var(--font-heading), 'Noto Serif JP', serif",
          fontSize: "clamp(10px, 1.4vw, 13px)",
          fontWeight: 300,
          letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.85)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1,
        }}
      >
        初回限定｜まずは、庭の状態を知ることから。
      </p>

      {/* ── 右側：リンク＋閉じるボタン ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          flexShrink: 0,
          marginLeft: "clamp(12px, 2vw, 24px)",
        }}
      >
        {/* 詳しくはこちら */}
        <a
          href="#trial-offer"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("trial-offer");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            fontFamily: "var(--font-body), 'Noto Sans JP', sans-serif",
            fontSize: "clamp(9px, 1.2vw, 11px)",
            fontWeight: 300,
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.65)",
            textDecoration: "none",
            transition: "color 0.25s ease, opacity 0.25s ease",
            whiteSpace: "nowrap",
            padding: "0 4px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
        >
          詳しくはこちら
        </a>

        {/* 閉じるボタン */}
        <button
          onClick={handleClose}
          aria-label="閉じる"
          style={{
            // 最低 44×44px のクリック領域を確保（a11y）
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            flexShrink: 0,
          }}
        >
          {/* × アイコン（SVG） */}
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{
              opacity: 0.5,
              transition: "opacity 0.25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
          >
            <path
              d="M1 1L9 9M9 1L1 9"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

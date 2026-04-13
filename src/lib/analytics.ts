/**
 * Google Analytics イベント送信ユーティリティ
 *
 * window.gtag が存在しない環境（SSR・gtag 未読み込み）でも
 * エラーにならないよう安全ガードを設けている。
 */

/**
 * LINEボタンのクリックイベントを GA4 に送信する。
 *
 * @param label - どこで押されたかを示すラベル（例: 'fv_line_button'）
 *
 * 使用例：
 *   trackLineClick('cta_line_button');
 *   // → gtag('event', 'line_click', { event_category: 'CTA', event_label: 'cta_line_button' })
 */
export function trackLineClick(label: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "line_click", {
    event_category: "CTA",
    event_label: label,
  });
}

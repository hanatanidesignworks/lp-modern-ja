// Google Analytics gtag 型定義
// window.gtag が存在しない環境でも安全に呼び出せるようにするための型。

type GtagCommand = "config" | "event" | "js" | "set";

interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

interface Window {
  gtag?: (
    command: GtagCommand,
    targetOrAction: string,
    params?: GtagEventParams | Date | Record<string, unknown>
  ) => void;
}

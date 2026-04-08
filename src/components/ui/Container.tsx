import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * ページ幅を制限する汎用ラッパー。
 * LP全体で一貫した横幅・余白を維持する。
 */
export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
}

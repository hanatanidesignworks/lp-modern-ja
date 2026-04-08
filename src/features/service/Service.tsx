"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ServiceModal from "./ServiceModal";
import { SERVICE_COPY, type ServiceItem } from "@/lib/constants";

/**
 * Serviceセクション
 *
 * 「年間管理」という考え方を、4つの視点で静かに可視化する。
 * 各カードをクリックすると ServiceModal で詳細を表示する。
 *
 * state管理：
 *   selectedItem — 開いているカードのデータ（null = 閉じている）
 *   isVisible    — CSS transition 用のフラグ（10ms遅延でtrueにしてフェード開始）
 */
export default function Service() {
  const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // カードクリック → データをセット → 10ms後にフェードイン開始
  const openModal = useCallback((item: ServiceItem) => {
    setSelectedItem(item);
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  // 閉じる → フェードアウト → 320ms後にDOMから除去
  const closeModal = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setSelectedItem(null), 320);
  }, []);

  return (
    <>
      <section id="service" className="bg-white py-28 md:py-40">
        <Container>

          {/* ── セクションヘッダー：グリッド左端に揃える ── */}
          <div className="max-w-[400px]">
            {/* 英字ラベル */}
            <p className="mb-7 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
              {SERVICE_COPY.eyebrow}
            </p>

            {/* 見出し */}
            <h2
              className="mb-12 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
              style={{ lineHeight: 1.85 }}
            >
              {SERVICE_COPY.heading}
            </h2>

            {/* 導入文：説明ではなくコピーとして余白を持たせて見せる */}
            <div className="space-y-1">
              {SERVICE_COPY.intro.map((line, i) => (
                <p
                  key={i}
                  className="font-sans text-sm font-light tracking-wider text-[var(--color-secondary)] md:text-base"
                  style={{ lineHeight: 2.6 }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* ── サービスグリッド ── */}
          {/*
           * PC: 4列 / スマホ: 2列×2行
           * 画像タイルは <button> にしてクリック可能にしつつ
           * hover演出（scale-[1.04]）は従来通り維持する
           */}
          <div className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4 md:gap-6">
            {SERVICE_COPY.items.map((item) => (
              <div key={item.en}>

                {/* 画像タイル：button でクリック可能に */}
                <button
                  type="button"
                  onClick={() => openModal(item)}
                  className="group relative aspect-[3/4] w-full overflow-hidden rounded-md cursor-pointer"
                  aria-label={`${item.ja}の詳細を見る`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* ベースオーバーレイ：全面に薄い黒でテキスト視認性を底上げ */}
                  <div className="absolute inset-0 bg-black/30" />
                  {/* グラデーションオーバーレイ：下部テキストエリアをさらに沈める */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/10 to-transparent" />

                  {/* テキストオーバーレイ：左下
                      max-w-[82%] でブロック幅を制限し、長い見出しでも
                      左下の塊として明確に見えるようにする */}
                  <div className="absolute bottom-4 left-0 max-w-[82%] p-5 text-left md:bottom-5 md:p-6">
                    <p className="mb-2.5 font-sans text-xs tracking-[0.28em] text-white/58">
                      {item.en}
                    </p>
                    <h3
                      className="font-serif text-base font-light tracking-[0.12em] text-white md:text-[1.0625rem]"
                      style={{ lineHeight: 1.6 }}
                    >
                      {item.ja}
                    </h3>
                  </div>
                </button>

                {/* 説明文：画像下 */}
                <p
                  className="mt-4 font-sans text-xs font-light tracking-wide text-[var(--color-secondary)] md:mt-5"
                  style={{ lineHeight: 1.95 }}
                >
                  {item.description}
                </p>

              </div>
            ))}
          </div>

          {/* ── 締めコピー ── */}
          <div className="mt-16 max-w-[520px] md:mt-20">
            <div className="space-y-2">
              {SERVICE_COPY.closing.map((line, i) => (
                <p
                  key={i}
                  className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)] md:text-base"
                  style={{ lineHeight: 2.1 }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

        </Container>
      </section>

      {/* モーダル：セクション外に置くことで z-index が正しく機能する */}
      <ServiceModal item={selectedItem} isVisible={isVisible} onClose={closeModal} />
    </>
  );
}

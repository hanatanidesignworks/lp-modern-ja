import Image from "next/image";
import { WORKS_COPY } from "@/lib/constants";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Works() {
  return (
    <section className="bg-white py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">

        {/* heading */}
        <div className="mb-16">
          <p className="mb-4 text-xs tracking-[0.3em] text-[var(--color-muted)]">
            {WORKS_COPY.eyebrow}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl leading-relaxed">
            {WORKS_COPY.title}
          </h2>
          <p className="mt-6 text-[var(--color-muted)] leading-relaxed">
            {WORKS_COPY.description}
          </p>
        </div>

        {/* grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS_COPY.items.map((item, i) => (
            <div key={i} className="group">

              {/*
               * 1件目（i === 0）のみ BeforeAfterSlider を使用。
               * それ以外は通常の Image カード。
               * aspect 比が [4/3]（スライダー）vs [4/5]（通常）で異なる点に注意。
               */}
              {i === 0 ? (
                <BeforeAfterSlider
                  before="/images/works/before-01.jpg"
                  after="/images/works/after-01.jpg"
                  alt={item.area}
                />
              ) : (
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
                </div>
              )}

              {/* sliderNote：1件目のみ表示 */}
              {i === 0 && (
                <p className="mt-3 font-sans text-xs font-light tracking-wide text-[var(--color-muted)]" style={{ lineHeight: 1.9 }}>
                  {WORKS_COPY.sliderNote}
                </p>
              )}

              {/* text */}
              <div className="mt-4 space-y-2">
                <p className="text-xs tracking-wide text-[var(--color-muted)]">
                  {item.area} / {item.type}
                </p>
                <p className="font-serif">
                  {item.plan}
                </p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.description}
                </p>

                {/* note：相談内容・希望・管理の考え方 */}
                <ul className="mt-4 space-y-1.5 border-l border-[#d8d4cc] pl-3">
                  {item.note.map((line, j) => (
                    <li
                      key={j}
                      className="font-sans text-[11px] font-light tracking-wide text-[var(--color-muted)]"
                      style={{ lineHeight: 1.8 }}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* closing */}
        <div className="mt-20 border-t border-[#ece8e2] pt-12 md:pt-14">
          <p className="text-center text-[var(--color-muted)] leading-relaxed">
            {WORKS_COPY.closing}
          </p>
        </div>

      </div>
    </section>
  );
}

import Container from "@/components/ui/Container";
import { COMPARISON_COPY } from "@/lib/constants";

export default function Comparison() {
  return (
    <section className="bg-[var(--color-surface)] py-28 md:py-40">
      <Container>
        <div className="max-w-[620px]">

          <p className="mb-8 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
            {COMPARISON_COPY.eyebrow}
          </p>
          <h2
            className="mb-8 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
            style={{ lineHeight: 1.85 }}
          >
            {COMPARISON_COPY.heading}
          </h2>
          <p
            className="mb-14 font-sans text-sm font-light tracking-wide text-[var(--color-secondary)] md:text-base"
            style={{ lineHeight: 2.2 }}
          >
            {COMPARISON_COPY.intro}
          </p>

          {/* 比較テーブル */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#ece8e2]">
                  <th className="pb-4 text-left font-sans text-[10px] font-normal tracking-[0.3em] text-[var(--color-muted)]">
                    比較項目
                  </th>
                  <th className="pb-4 text-center font-sans text-[10px] font-normal tracking-[0.3em] text-[var(--color-muted)]">
                    単発管理
                  </th>
                  <th className="pb-4 text-center font-sans text-[10px] font-normal tracking-[0.3em] text-[var(--color-accent)]">
                    年間管理
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_COPY.rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#ece8e2] last:border-b-0">
                    <td className="py-5 font-sans text-xs tracking-wide text-[var(--color-muted)]">
                      {row.label}
                    </td>
                    <td className="py-5 text-center font-sans text-sm font-light text-[var(--color-secondary)]">
                      {row.single}
                    </td>
                    <td className="py-5 text-center font-sans text-sm font-light text-[var(--color-accent)]">
                      {row.annual}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 border-t border-[#ece8e2] pt-10">
            <p
              className="font-serif text-sm font-light tracking-[0.1em] text-[var(--color-secondary)] md:text-base"
              style={{ lineHeight: 2.0 }}
            >
              {COMPARISON_COPY.closing}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

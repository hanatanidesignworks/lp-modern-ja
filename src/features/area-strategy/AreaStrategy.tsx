import Container from "@/components/ui/Container";
import { AREA_STRATEGY_COPY } from "@/lib/constants";

export default function AreaStrategy() {
  return (
    <section className="bg-[var(--color-surface)] py-28 md:py-40">
      <Container>
        <div className="max-w-[520px]">

          <p className="mb-8 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
            {AREA_STRATEGY_COPY.eyebrow}
          </p>
          <h2
            className="mb-12 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
            style={{ lineHeight: 1.85 }}
          >
            {AREA_STRATEGY_COPY.heading}
          </h2>

          <div className="mb-10 space-y-5">
            {AREA_STRATEGY_COPY.body.map((line, i) => (
              <p
                key={i}
                className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)] md:text-base"
                style={{ lineHeight: 2.2 }}
              >
                {line}
              </p>
            ))}
          </div>

          <p
            className="font-sans text-xs font-light tracking-wide text-[var(--color-muted)]"
            style={{ lineHeight: 2.0 }}
          >
            {AREA_STRATEGY_COPY.note}
          </p>

          <div className="mt-14 border-t border-[#ece8e2] pt-12 md:mt-16 md:pt-14">
            <p
              className="font-serif text-sm font-light tracking-[0.1em] text-[var(--color-muted)] md:text-base"
              style={{ lineHeight: 2.0 }}
            >
              {AREA_STRATEGY_COPY.transition}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

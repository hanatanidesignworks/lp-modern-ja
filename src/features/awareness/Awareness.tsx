import Container from "@/components/ui/Container";
import { AWARENESS_COPY } from "@/lib/constants";

export default function Awareness() {
  return (
    <section className="bg-[var(--color-surface)] py-28 md:py-40">
      <Container>
        <div className="max-w-[520px]">

          <p className="mb-8 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
            {AWARENESS_COPY.eyebrow}
          </p>
          <h2
            className="mb-12 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
            style={{ lineHeight: 1.85 }}
          >
            {AWARENESS_COPY.heading}
          </h2>

          <div className="space-y-5">
            {AWARENESS_COPY.body.map((line, i) => (
              <p
                key={i}
                className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)] md:text-base"
                style={{ lineHeight: 2.2 }}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-14 border-t border-[#ece8e2] pt-12 md:mt-16 md:pt-14">
            <p
              className="font-serif text-sm font-light tracking-[0.1em] text-[var(--color-muted)] md:text-base"
              style={{ lineHeight: 2.0 }}
            >
              {AWARENESS_COPY.transition}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

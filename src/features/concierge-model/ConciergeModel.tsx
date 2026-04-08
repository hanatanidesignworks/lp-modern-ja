import Container from "@/components/ui/Container";
import { CONCIERGE_MODEL_COPY } from "@/lib/constants";

export default function ConciergeModel() {
  return (
    <section className="bg-white py-28 md:py-40">
      <Container>
        <div className="max-w-[560px]">

          <p className="mb-8 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
            {CONCIERGE_MODEL_COPY.eyebrow}
          </p>
          <h2
            className="mb-12 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
            style={{ lineHeight: 1.85 }}
          >
            {CONCIERGE_MODEL_COPY.heading}
          </h2>

          <div className="mb-14 space-y-5">
            {CONCIERGE_MODEL_COPY.body.map((line, i) => (
              <p
                key={i}
                className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)] md:text-base"
                style={{ lineHeight: 2.2 }}
              >
                {line}
              </p>
            ))}
          </div>

          <ul className="list-none space-y-6">
            {CONCIERGE_MODEL_COPY.points.map((point, i) => (
              <li key={i} className="border-l border-[#d8d4cc] pl-4">
                <p className="mb-1 font-serif text-sm text-[var(--color-primary)]">
                  {point.label}
                </p>
                <p
                  className="font-sans text-sm font-light text-[var(--color-secondary)]"
                  style={{ lineHeight: 2.0 }}
                >
                  {point.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-14 border-t border-[#ece8e2] pt-12 md:mt-16 md:pt-14">
            <p
              className="font-serif text-sm font-light tracking-[0.1em] text-[var(--color-muted)] md:text-base"
              style={{ lineHeight: 2.0 }}
            >
              {CONCIERGE_MODEL_COPY.transition}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

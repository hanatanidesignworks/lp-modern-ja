import Container from "@/components/ui/Container";
import { PARTNERSHIP_COPY } from "@/lib/constants";

export default function Partnership() {
  return (
    <section className="bg-white py-28 md:py-40">
      <Container>
        <div className="max-w-[520px]">

          <p className="mb-8 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
            {PARTNERSHIP_COPY.eyebrow}
          </p>
          <h2
            className="mb-12 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
            style={{ lineHeight: 1.85 }}
          >
            {PARTNERSHIP_COPY.heading}
          </h2>

          <div className="mb-12 space-y-5">
            {PARTNERSHIP_COPY.body.map((line, i) => (
              <p
                key={i}
                className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)] md:text-base"
                style={{ lineHeight: 2.2 }}
              >
                {line}
              </p>
            ))}
          </div>

          <ul className="list-none space-y-4">
            {PARTNERSHIP_COPY.items.map((item, i) => (
              <li
                key={i}
                className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)]"
                style={{ lineHeight: 2.0 }}
              >
                — {item}
              </li>
            ))}
          </ul>

        </div>
      </Container>
    </section>
  );
}

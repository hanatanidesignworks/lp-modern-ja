import Container from "@/components/ui/Container";
import { TRANSPARENCY_COPY } from "@/lib/constants";

export default function Transparency() {
  return (
    <section className="bg-[var(--color-surface)] py-28 md:py-40">
      <Container>
        <div className="max-w-[520px]">

          <p className="mb-8 font-sans text-[10px] tracking-[0.4em] text-[var(--color-muted)]">
            {TRANSPARENCY_COPY.eyebrow}
          </p>
          <h2
            className="mb-8 font-serif text-xl font-light tracking-[0.1em] text-[var(--color-primary)] md:text-2xl"
            style={{ lineHeight: 1.85 }}
          >
            {TRANSPARENCY_COPY.heading}
          </h2>
          <p
            className="mb-14 font-sans text-sm font-light tracking-wide text-[var(--color-secondary)] md:text-base"
            style={{ lineHeight: 2.2 }}
          >
            {TRANSPARENCY_COPY.body}
          </p>

          <ul className="list-none">
            {TRANSPARENCY_COPY.items.map((item, i) => (
              <li
                key={i}
                className="border-b border-[#ece8e2] py-10 first:border-t last:border-b-0 md:py-12"
              >
                <h3
                  className="mb-4 font-serif text-base font-light tracking-[0.08em] text-[var(--color-primary)]"
                  style={{ lineHeight: 1.7 }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans text-sm font-light tracking-wide text-[var(--color-secondary)] md:text-base"
                  style={{ lineHeight: 2.2 }}
                >
                  {item.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-14 border-t border-[#ece8e2] pt-12 md:mt-16 md:pt-14">
            <p
              className="font-serif text-sm font-light tracking-[0.1em] text-[var(--color-secondary)] md:text-base"
              style={{ lineHeight: 2.0 }}
            >
              {TRANSPARENCY_COPY.closing}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { INTRO_COPY } from "@/lib/constants";

export default function Intro() {
  return (
    <Section id="intro" className="bg-white">
      <Container>
        <div className="mx-auto max-w-xl">
          {/* 細い装飾ライン */}
          <div className="mb-10 h-px w-8 bg-[var(--color-accent)]" />

          {/* 見出し */}
          <h2 className="mb-12 font-serif text-2xl font-light text-[var(--color-primary)] md:text-3xl">
            {INTRO_COPY.heading}
          </h2>

          {/* 本文 */}
          <div className="space-y-0 font-sans text-sm font-light leading-[2.4] tracking-wider text-[var(--color-secondary)] md:text-base">
            {INTRO_COPY.body.map((line, i) =>
              line === "" ? (
                <br key={i} />
              ) : (
                <p key={i}>{line}</p>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

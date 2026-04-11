import Hero from "@/features/hero/Hero";
import Concept from "@/features/concept/Concept";
import Empathy from "@/features/empathy/Empathy";
import Awareness from "@/features/awareness/Awareness";
import ConciergeModel from "@/features/concierge-model/ConciergeModel";
import Service from "@/features/service/Service";
import Comparison from "@/features/comparison/Comparison";
import Works from "@/features/works/Works";
import TrialOffer from "@/features/trial-offer/TrialOffer";
import Flow from "@/features/flow/Flow";
import Transparency from "@/features/transparency/Transparency";
import Partnership from "@/features/partnership/Partnership";
import AreaStrategy from "@/features/area-strategy/AreaStrategy";
import Assurance from "@/features/assurance/Assurance";
import FAQ from "@/features/faq/FAQ";
import CTA from "@/features/cta/CTA";
import InlineCTA from "@/components/ui/InlineCTA";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

/**
 * トップページ。
 *
 * Hero → Concept → Empathy → Awareness → ConciergeModel
 * → Service → Comparison → [InlineCTA] → Works → TrialOffer
 * → [InlineCTA] → Flow → Transparency → [InlineCTA]
 * → Partnership → AreaStrategy → Assurance → CTA
 *
 * InlineCTA の配置意図：
 *   1. Comparison直後：比較で納得 → 行動したくなるタイミング
 *   2. TrialOffer直後：「試してみたい」と思うタイミング
 *   3. Transparency直後：不安が消えた直後の行動ポイント
 */
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Concept />
        <Empathy />
        <Awareness />
        <ConciergeModel />
        <Service />
        <Comparison />
        <InlineCTA />
        <Works />
        <TrialOffer />
        <InlineCTA />
        <Flow />
        <Transparency />
        <InlineCTA />
        <Partnership />
        <AreaStrategy />
        <Assurance />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

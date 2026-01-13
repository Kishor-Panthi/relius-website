import { Hero } from "@/components/sections/hero";
import { InteractiveDemo } from "@/components/demo";
import { WhyRelius } from "@/components/sections/why-relius";
import { KpiStripe } from "@/components/sections/kpi-stripe";
import { ProductPillars } from "@/components/sections/product-pillars";
import { MigrationCallout } from "@/components/sections/migration-callout";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <InteractiveDemo />
      <WhyRelius />
      <KpiStripe />
      <ProductPillars />
      <MigrationCallout />
      <SocialProof />
      <FinalCta />
    </>
  );
}

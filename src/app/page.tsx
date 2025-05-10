'use client';

import { HeroSection } from '@/components/marketing/hero-section';
import { ProblemSolutionSection } from '@/components/marketing/problem-solution-section';
import { HowItWorksSection } from '@/components/marketing/how-it-works-section';
import { BenefitsSection } from '@/components/marketing/benefits-section';
import { FeatureShowcaseSection } from '@/components/marketing/feature-showcase-section';
import { TrustSecuritySection } from '@/components/marketing/trust-security-section';
import { CtaSection } from '@/components/marketing/cta-section';
import { Separator } from '@/components/ui/separator';

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <Separator className="my-0 md:my-4" />
      <BenefitsSection />
      <FeatureShowcaseSection />
      <TrustSecuritySection />
      <CtaSection />
    </div>
  );
}

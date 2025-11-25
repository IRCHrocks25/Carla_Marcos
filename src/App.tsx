import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExhaustionSection } from './components/ExhaustionSection';
import { BreakthroughSection } from './components/BreakthroughSection';
import { WhyItWorksSection } from './components/WhyItWorksSection';
import { HypnotherapySection } from './components/HypnotherapySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { UniqueEdgeSection } from './components/UniqueEdgeSection';
import { RippleEffectSection } from './components/RippleEffectSection';
import { TransformationProgramSection } from './components/TransformationProgramSection';
import { PathwaysSection } from './components/PathwaysSection';
import { PathwaysToFreedomSection } from './components/PathwaysToFreedomSection';
import { WhatHappensSection } from './components/WhatHappensSection';
import { PersonBecomingSection } from './components/PersonBecomingSection';
import { RevolutionSection } from './components/RevolutionSection';
import { ResultsSection } from './components/ResultsSection';
import { FinalCTASection } from './components/FinalCTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ExhaustionSection />
      <BreakthroughSection />
      <WhyItWorksSection />
      <HypnotherapySection />
      <TestimonialsSection />
      <UniqueEdgeSection />
      <RippleEffectSection />
      <TransformationProgramSection />
      <PathwaysSection />
      <PathwaysToFreedomSection />
      <WhatHappensSection />
      <PersonBecomingSection />
      <RevolutionSection />
      <ResultsSection />
      <FinalCTASection />
    </div>
  );
}
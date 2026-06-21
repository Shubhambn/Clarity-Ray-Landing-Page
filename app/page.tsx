"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ValueSection } from "@/components/sections/value";
import { WhoIsThisFor } from "@/components/sections/who-is-this-for";
import { Architecture } from "@/components/sections/architecture";
import { DocsSection } from "@/components/sections/docs";
import { FeedbackSection } from "@/components/sections/feedback";
import { FAQSection } from "@/components/sections/faq";
import { TrustSection } from "@/components/sections/trust";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/navbar";
import { WaitlistModal } from "@/components/waitlist-modal";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      <div className="fixed inset-0 scanlines pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorks />
          <ValueSection />
          <WhoIsThisFor />
          <Architecture />
          <DocsSection />
          <TrustSection />
          <FeedbackSection />
          <FAQSection />
          <FinalCTA onJoinClick={openWaitlist} />
        </main>
        <Footer />
      </div>

      {/* Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}

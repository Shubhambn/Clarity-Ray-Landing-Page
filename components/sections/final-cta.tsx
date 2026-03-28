"use client";

import { ArrowRight, Github } from "lucide-react";

interface FinalCTAProps {
  onJoinClick: () => void;
}

export function FinalCTA({ onJoinClick }: FinalCTAProps) {
  return (
    <section className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-balance">
          Be among the first to try
          <br />
          <span className="font-serif italic text-primary">ClarityRay</span>
        </h2>

        {/* Subtext */}
        <p className="text-muted-foreground mt-6 mb-10 leading-relaxed max-w-lg mx-auto">
          Download ClarityRay and run your first analysis in under five minutes. No account. No cloud. No cost. Built for every doctor, clinic, and patient.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onJoinClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all text-base"
          >
            Join early access
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-border text-muted-foreground rounded-xl hover:border-muted-foreground hover:text-foreground transition-all"
          >
            <Github className="w-4 h-4" />
            Contribute on GitHub
          </a>
        </div>

        {/* Bottom meta */}
        <p className="mt-10 text-xs font-mono text-muted-foreground tracking-wide">
          OPEN SOURCE · MIT LICENCE · BUILT FOR INDIA AND BEYOND
        </p>
      </div>
    </section>
  );
}

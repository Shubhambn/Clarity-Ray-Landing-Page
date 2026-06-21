"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { SITE } from "@/lib/constants";

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
          Run your first analysis
          <br />
          in your <span className="font-serif italic text-primary">browser.</span>
        </h2>

        {/* Subtext */}
        <p className="text-muted-foreground mt-6 mb-10 leading-relaxed max-w-lg mx-auto">
          Open the app, pick a model, and screen a scan in seconds. No account, no
          upload, no cost — and your scan never leaves the page.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={SITE.analysisUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all text-base"
          >
            Launch the app
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-border text-muted-foreground rounded-xl hover:border-muted-foreground hover:text-foreground transition-all"
          >
            <Github className="w-4 h-4" />
            Contribute on GitHub
          </a>
        </div>

        {/* Secondary action */}
        <button
          onClick={onJoinClick}
          className="mt-6 text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          Or get notified about new models &amp; releases →
        </button>

        {/* Bottom meta */}
        <p className="mt-10 text-xs font-mono text-muted-foreground tracking-wide">
          OPEN SOURCE · MIT LICENCE · BROWSER-NATIVE
        </p>
      </div>
    </section>
  );
}

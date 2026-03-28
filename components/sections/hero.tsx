"use client";

import { Github, Download, Shield, Cpu, Lock, Zap } from "lucide-react";
import { XRayScanner } from "@/components/xray-scanner";

interface HeroSectionProps {
  onJoinClick: () => void;
}

export function HeroSection({ onJoinClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col">
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />

      {/* Main content */}
      <div className="relative flex-1 grid lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-7xl mx-auto items-center">
        {/* Left side - Copy */}
        <div className="flex flex-col">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-[fadeIn_0.6s_ease_forwards]">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-blink" />
            <span className="text-xs font-mono text-primary tracking-wide">
              CURRENTLY IN DEVELOPMENT — EARLY ACCESS SOON
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-foreground mb-6">
            Medical AI that
            <br />
            runs on{" "}
            <span className="font-serif italic text-primary">your machine.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
            Upload a scan, run AI locally, and get structured results.{" "}
            <span className="text-foreground font-medium">No cloud. No data sharing.</span>{" "}
            Anyone can use it. Anyone can audit it.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={onJoinClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all"
            >
              <Download className="w-4 h-4" />
              Join early access
            </button>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground rounded-xl hover:border-muted-foreground hover:text-foreground transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub (Coming Soon)
            </a>
          </div>

          {/* Trust line */}
          <p className="text-sm text-muted-foreground">
            Windows · macOS · Linux &nbsp;·&nbsp; No account required &nbsp;·&nbsp; MIT licence
          </p>
        </div>

        {/* Right side - Scanner visualization */}
        <div className="lg:pl-8">
          <XRayScanner />
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative border-t border-border bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-primary" />
              <span>Zero data leaves device</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span>NIH ChestX-ray14 validated</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-primary" />
              <span>CPU & GPU supported</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span>Open source · MIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

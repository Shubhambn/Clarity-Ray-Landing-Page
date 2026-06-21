"use client";

import { Github, ArrowUpRight, Shield, Cpu, Lock, Zap } from "lucide-react";
import { XRayScanner } from "@/components/xray-scanner";
import { SITE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-[90vh] flex flex-col">
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
              LIVE NOW — RUNS 100% IN YOUR BROWSER
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-foreground mb-6">
            Medical AI that
            <br />
            runs in{" "}
            <span className="font-serif italic text-primary">your browser.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
            Pick a model, upload a scan, get a screening result — inference runs
            on-device in WebAssembly.{" "}
            <span className="text-foreground font-medium">
              No uploads. No servers.
            </span>{" "}
            Your scan never leaves the page.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href={SITE.analysisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all"
            >
              Launch the app
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground rounded-xl hover:border-muted-foreground hover:text-foreground transition-all"
            >
              <Github className="w-4 h-4" />
              View source
            </a>
          </div>

          {/* Trust line */}
          <p className="text-sm text-muted-foreground">
            No install &nbsp;·&nbsp; No account &nbsp;·&nbsp; Works offline after first load &nbsp;·&nbsp; MIT licence
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
              <span>Zero scan data leaves the browser</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-primary" />
              <span>ONNX Runtime Web · WASM</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span>SHA-256 model integrity</span>
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

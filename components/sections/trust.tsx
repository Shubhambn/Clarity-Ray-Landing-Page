"use client";

import { Shield, AlertTriangle, Beaker } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Runs locally — no data leaves your device",
    description: "Every scan you analyze stays on your machine. Zero cloud processing. Zero data transmission. Your patient data belongs to you.",
  },
  {
    icon: AlertTriangle,
    title: "Not a medical diagnosis tool",
    description: "ClarityRay is a screening assistant. It provides signals to help prioritize clinical decisions, not replace professional medical judgment.",
  },
  {
    icon: Beaker,
    title: "Built for safe experimentation",
    description: "Open source, auditable, and transparent. Every model shows its training data, accuracy metrics, and known limitations before you run anything.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border bg-card/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-widest">// TRUST</span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-4">
            Built on{" "}
            <span className="font-serif italic text-primary">transparency</span>
          </h2>
        </div>

        {/* Trust points */}
        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-medium text-foreground mb-3">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 text-center border-t border-border pt-16">
          <div>
            <div className="text-4xl sm:text-5xl font-serif italic text-primary">100%</div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              of processing happens locally — no scan ever touches an external server
            </p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-serif italic text-primary">0</div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              hidden commercial incentives — trust the code, not our word
            </p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-serif italic text-primary">MIT</div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              licence — open for inspection, contribution, and deployment anywhere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Shield, Zap, Eye, Lock, FileCheck, Layers } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Fully local execution",
    description: "Every analysis runs on your machine. No data ever leaves the device. Fully offline after installation.",
  },
  {
    icon: Eye,
    title: "GradCAM attention maps",
    description: "See exactly which regions of the scan influenced the result. Visual explainability built in.",
  },
  {
    icon: FileCheck,
    title: "Plain-language results",
    description: "No raw probabilities. Every finding is translated into safe, clear, context-appropriate language.",
  },
  {
    icon: Layers,
    title: "DICOM native support",
    description: "Upload real clinical DICOM files directly. Silent conversion and normalisation — no extra tools needed.",
  },
  {
    icon: Zap,
    title: "No setup required",
    description: "One installer. Everything is bundled and ready. No Python, no terminal, no configuration needed.",
  },
  {
    icon: Shield,
    title: "Safe & explainable",
    description: "Every result shows what the model was trained on, its known limitations, and mandatory disclaimers.",
  },
];

export function ValueSection() {
  return (
    <section id="features" className="py-20 lg:py-28 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-primary tracking-widest">// FEATURES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-4 text-balance">
            Built for{" "}
            <span className="font-serif italic text-primary">real clinical</span>
            <br />
            environments. Not demos.
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-card hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-[10px] font-mono text-primary/40 mb-4 block">
                {String(index + 1).padStart(2, "0")} ·
              </span>

              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-base font-medium text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

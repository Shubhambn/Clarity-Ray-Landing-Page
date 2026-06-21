"use client";

import { Shield, Eye, Lock, FileCheck, Boxes, Users, FileJson, Database } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Browser-native inference",
    description:
      "Inference runs in ONNX Runtime Web (WebAssembly) on-device. Scan pixels stay in browser memory — privacy as a hard architectural constraint, not a marketing claim.",
  },
  {
    icon: FileJson,
    title: "Spec-driven model contract",
    description:
      "Every model is described by a clarity.json file. The runtime reads the spec and runs any conforming model — adding a model needs zero code changes.",
  },
  {
    icon: Users,
    title: "Three-persona result view",
    description:
      "Results adapt to who's reading: researchers see thresholds and logs, clinicians see structured interpretation, patients see plain-language, non-diagnostic output.",
  },
  {
    icon: Eye,
    title: "Attention heatmaps",
    description:
      "Every finding ships with a visual attention overlay so you can see which regions of the scan influenced the screening result.",
  },
  {
    icon: Shield,
    title: "SHA-256 integrity checks",
    description:
      "Model binaries are verified against the hash declared in clarity.json before they ever run, so you know exactly what executed.",
  },
  {
    icon: Database,
    title: "Cached & offline-capable",
    description:
      "Model files are cached via the Cache API and IndexedDB after first download. Later runs skip the fetch and work with no network.",
  },
  {
    icon: FileCheck,
    title: "Safety-tiered messaging",
    description:
      "Raw logits are softmaxed and mapped to screening-safe language using model-declared thresholds — screening, research, or investigational tier.",
  },
  {
    icon: Boxes,
    title: "Open model platform",
    description:
      "A FastAPI + Supabase registry lists published models served from Hugging Face. Researchers publish with the clarity CLI; the runtime stays generic.",
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

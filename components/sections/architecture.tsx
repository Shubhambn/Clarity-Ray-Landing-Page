"use client";

import { Monitor, Server, Cloud, Laptop, Lock } from "lucide-react";

const layers = [
  {
    icon: Monitor,
    tag: "BROWSER",
    title: "Patient data stays here — always",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    points: [
      "Next.js App Router — /analysis, /models, /onboarding",
      "useClarityRay() hook: preprocess → runInference → postprocess",
      "ONNX Runtime Web (WASM) executes the model on-device",
      "Cache API + IndexedDB cache model.onnx after first load",
    ],
    note: "Scan pixels live in browser memory during inference and result generation.",
  },
  {
    icon: Server,
    tag: "PLATFORM",
    title: "Metadata + model registry (no scan data)",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
    points: [
      "FastAPI service backed by Supabase Postgres",
      "GET /models — list published models",
      "GET /models/:slug — model detail + artifact URLs",
      "POST /models/register — called by the converter CLI",
    ],
    note: "Only metadata crosses this boundary. The app runs fine in degraded mode with no database.",
  },
  {
    icon: Cloud,
    tag: "HUGGING FACE",
    title: "Model file storage + CDN",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/30",
    points: [
      "clarityray-{slug}/model.onnx — fetched and cached by the browser",
      "clarityray-{slug}/clarity.json — the model specification contract",
      "Served from CDN-accessible URLs",
    ],
    note: "Model artifacts are public and content-addressed via SHA-256.",
  },
  {
    icon: Laptop,
    tag: "RESEARCHER MACHINE",
    title: "Spec-driven model publishing",
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "border-rose-400/30",
    points: [
      "clarity CLI validates the folder (model.onnx + clarity.json)",
      "Uploads artifacts to a Hugging Face repo",
      "Registers model metadata with the platform API",
    ],
    note: "New compliant models are onboarded without runtime code edits.",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono text-primary tracking-widest">// ARCHITECTURE</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-4 text-balance">
            Three systems,{" "}
            <span className="font-serif italic text-primary">one invariant.</span>
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Privacy is enforced at infrastructure boundaries, not promised in UI copy.
            Patient scan data never reaches a server — only model metadata and public
            artifacts ever cross the network.
          </p>
        </div>

        {/* Invariant banner */}
        <div className="flex items-center gap-3 mb-10 p-4 rounded-xl border border-primary/30 bg-primary/5">
          <Lock className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-sm text-foreground font-mono">
            INVARIANT — scan image bytes are never sent to any server during inference.
          </p>
        </div>

        {/* Layers */}
        <div className="grid md:grid-cols-2 gap-5">
          {layers.map((layer, index) => (
            <div
              key={index}
              className={`group relative p-6 lg:p-8 rounded-2xl border ${layer.borderColor} bg-card hover:bg-secondary/50 transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl ${layer.bgColor} border ${layer.borderColor} flex items-center justify-center`}
                >
                  <layer.icon className={`w-5 h-5 ${layer.color}`} />
                </div>
                <div>
                  <span className={`text-[10px] font-mono ${layer.color} tracking-widest block`}>
                    {layer.tag}
                  </span>
                  <h3 className="text-base font-medium text-foreground">{layer.title}</h3>
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {layer.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className={`${layer.color} mt-0.5`}>›</span>
                    <span className="font-mono text-[13px]">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-muted-foreground/70 leading-relaxed border-t border-border pt-4">
                {layer.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

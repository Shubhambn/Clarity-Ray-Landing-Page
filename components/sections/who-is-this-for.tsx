"use client";

import { Stethoscope, Code, FlaskConical, HeartPulse } from "lucide-react";

const personas = [
  {
    role: "CLINICIAN",
    icon: Stethoscope,
    title: "Clinicians & Healthcare Providers",
    description:
      "Get an early screening signal before specialist referral, with structured interpretation language and confidence context. No enterprise contract, no cloud dependency, no patient data leaving the room.",
    quote:
      "I needed something I could actually use in clinic — not a research tool that requires a server room.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    role: "PATIENT",
    icon: HeartPulse,
    title: "Patients & Individuals",
    description:
      "See plain-language output with a mandatory non-diagnostic notice and no confusing probability math. Because everything runs in your browser, your scan is never uploaded anywhere.",
    quote:
      "It explained what the result might mean in words I understood — and nothing left my laptop.",
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "border-rose-400/30",
  },
  {
    role: "RESEARCHER",
    icon: FlaskConical,
    title: "Researchers & Academics",
    description:
      "Publish models that actually get used. Package a validated ONNX model with a clarity.json spec using the clarity CLI and reach practitioners — no runtime code changes required.",
    quote:
      "My model went from a GitHub repo nobody read to a tool people actually run.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/30",
  },
  {
    role: "DEVELOPER",
    icon: Code,
    title: "Developers & Contributors",
    description:
      "A typed, open-source Next.js + ONNX runtime with a clean model contract and documented architecture invariants. Inspect it, extend it, or onboard a new model with only a spec and a model file.",
    quote:
      "Finally, a medical AI tool I can read top to bottom and build on.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
  },
];

export function WhoIsThisFor() {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-primary tracking-widest">// WHO IS THIS FOR</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-4 text-balance">
            Real people.
            <br />
            <span className="font-serif italic text-primary">Real situations.</span>
          </h2>
        </div>

        {/* Personas grid */}
        <div className="flex flex-col gap-4">
          {personas.map((persona, index) => (
            <div
              key={index}
              className={`group p-6 lg:p-8 rounded-2xl border ${persona.borderColor} bg-card hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left - Role badge and icon */}
                <div className="flex items-center gap-4 lg:w-48 flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-xl ${persona.bgColor} border ${persona.borderColor} flex items-center justify-center`}
                  >
                    <persona.icon className={`w-5 h-5 ${persona.color}`} />
                  </div>
                  <span className={`text-[10px] font-mono ${persona.color} tracking-widest`}>
                    {persona.role}
                  </span>
                </div>

                {/* Right - Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-foreground mb-2">{persona.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {persona.description}
                  </p>
                  {persona.quote && (
                    <blockquote className={`text-sm italic text-muted-foreground/70 border-l-2 ${persona.borderColor} pl-4`}>
                      &ldquo;{persona.quote}&rdquo;
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

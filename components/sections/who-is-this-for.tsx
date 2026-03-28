"use client";

import { Stethoscope, Code, FlaskConical } from "lucide-react";

const personas = [
  {
    role: "DOCTOR",
    icon: Stethoscope,
    title: "Clinicians & Healthcare Providers",
    description:
      "Get an early signal before specialist referral. Run AI screening in your clinic without enterprise contracts or cloud dependencies.",
    quote: "I needed something I could actually use in my clinic — not a research tool that requires a server room.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    role: "DEVELOPER",
    icon: Code,
    title: "Developers & Engineers",
    description:
      "Integrate validated medical AI models into your applications. Open source, well-documented, and easy to extend.",
    quote: "Finally, a medical AI tool I can actually inspect, understand, and build upon.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
  },
  {
    role: "RESEARCHER",
    icon: FlaskConical,
    title: "Researchers & Academics",
    description:
      "Publish models that actually get used. Package your validated models for ClarityRay and reach practitioners the same day.",
    quote: "My model went from a GitHub repo nobody read to a tool doctors use daily.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/30",
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

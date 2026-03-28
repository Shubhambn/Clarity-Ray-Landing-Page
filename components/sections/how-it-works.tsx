"use client";

import { Upload, Cpu, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload scan",
    description: "Drag and drop your medical image — JPEG, PNG, or DICOM. Format validation happens automatically.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Run AI locally",
    description: "The model runs entirely on your device. No internet required. No data leaves your machine.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
  },
  {
    number: "03",
    icon: FileText,
    title: "Get structured result",
    description: "Receive a safe, explainable output with confidence levels, attention maps, and clear disclaimers.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-primary tracking-widest">// HOW IT WORKS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-4 text-balance">
            From zero to result
            <br />
            in{" "}
            <span className="font-serif italic text-primary">five minutes.</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative p-6 lg:p-8 rounded-2xl border ${step.borderColor} bg-card hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Step number */}
              <span className="text-xs font-mono text-primary/40 mb-6 block">{step.number}</span>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${step.bgColor} ${step.borderColor} border flex items-center justify-center mb-5`}
              >
                <step.icon className={`w-5 h-5 ${step.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-4 w-8 border-t border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

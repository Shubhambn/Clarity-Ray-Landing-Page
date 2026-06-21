"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this a medical diagnosis tool?",
    answer:
      "No. ClarityRay is a screening assistant only. It provides AI-generated signals that may help prioritize clinical decisions, but it is NOT a substitute for professional medical diagnosis. Every result includes a mandatory non-diagnostic disclaimer and should always be reviewed by a qualified healthcare professional.",
  },
  {
    question: "Does my scan leave my device?",
    answer:
      "Never. Inference runs entirely in your browser using ONNX Runtime Web (WebAssembly). Zero network requests happen during analysis — your scan stays in browser memory and is never uploaded. Privacy is a hard architectural constraint, not a setting you can toggle.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. ClarityRay runs in a normal web browser at clarityrun.vercel.app — no install, no account, no terminal. The model file downloads once and is cached via the Cache API and IndexedDB, so repeat analyses work even offline.",
  },
  {
    question: "How does it run a model without a server?",
    answer:
      "Each model ships with a clarity.json contract describing its input shape, normalization, output classes, thresholds, and safety tier. The runtime reads that spec, preprocesses your image into an NCHW Float32Array, runs ONNX inference in WebAssembly, and maps the output to screening-safe language. Adding a new model needs no runtime code changes.",
  },
  {
    question: "Can I publish my own model?",
    answer:
      "Yes. Package a trained ONNX model with the clarity converter CLI (clarityray upload), which validates the graph, generates the spec, and can push artifacts to Hugging Face and register them with the platform. Once published, the model appears in the browser and runs through the same generic pipeline.",
  },
  {
    question: "Is it free and open source?",
    answer:
      "Yes — completely free under the MIT license. No subscriptions, no premium tiers, no hidden commercial incentives. The full source, architecture docs, and model contract live on GitHub for inspection and contribution.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-primary tracking-widest">// FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-4">
            Common{" "}
            <span className="font-serif italic text-primary">questions</span>
          </h2>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="text-base font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

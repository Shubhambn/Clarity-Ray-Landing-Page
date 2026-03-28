"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this a medical diagnosis tool?",
    answer:
      "No. ClarityRay is a screening assistant only. It provides AI-generated signals that may help prioritize clinical decisions, but it is NOT a substitute for professional medical diagnosis. All results include mandatory disclaimers and should always be reviewed by qualified healthcare professionals.",
  },
  {
    question: "Does my data leave my device?",
    answer:
      "Never. ClarityRay runs 100% locally on your machine. Your scans are never uploaded, transmitted, or stored anywhere except your own device. We have no servers, no cloud processing, and no way to access your data — by design.",
  },
  {
    question: "Do I need a GPU?",
    answer:
      "No. ClarityRay works on CPU, though a GPU will make processing faster. Most modern laptops can run analyses in 30-60 seconds on CPU. If you have a discrete GPU, processing drops to under 10 seconds.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes, completely free and open source under the MIT license. No subscriptions, no hidden costs, no premium tiers. ClarityRay is built for accessibility — every doctor, clinic, and patient should have access regardless of budget.",
  },
  {
    question: "When will it launch?",
    answer:
      "We're currently in active development. Join the early access waitlist to be notified when the first version is ready for testing. We're prioritizing chest X-ray screening for the initial release.",
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

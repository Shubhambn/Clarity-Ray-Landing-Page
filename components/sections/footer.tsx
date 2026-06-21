"use client";

import { Github } from "lucide-react";
import { SITE } from "@/lib/constants";

const columns = [
  {
    title: "PRODUCT",
    links: [
      { label: "Launch app", href: SITE.appUrl, external: true },
      { label: "Browse models", href: SITE.modelsUrl, external: true },
      { label: "How it works", href: "#how-it-works", external: false },
      { label: "Features", href: "#features", external: false },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Documentation", href: "#docs", external: false },
      { label: "Architecture", href: "#architecture", external: false },
      { label: "FAQ", href: "#faq", external: false },
      { label: "README", href: SITE.docsUrl, external: true },
    ],
  },
  {
    title: "OPEN SOURCE",
    links: [
      { label: "GitHub", href: SITE.githubUrl, external: true },
      { label: "Contributing", href: SITE.contributingUrl, external: true },
      { label: "Issues", href: SITE.issuesUrl, external: true },
      { label: "MIT Licence", href: SITE.licenseUrl, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <div className="text-base font-medium text-foreground">
              Clarity<span className="text-primary">Ray</span>
            </div>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
              Browser-native medical AI screening. No uploads, no servers — inference runs
              on-device in WebAssembly.
            </p>
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              github.com/Shubhambn/ClarityRay
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-[10px] font-mono text-muted-foreground/60 tracking-widest mb-4">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            © 2026 ClarityRay · Open source · MIT
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Built for researchers, clinicians &amp; patients
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground/70 text-center max-w-2xl mx-auto leading-relaxed">
            ClarityRay is a screening assistant and is NOT a medical diagnosis tool. All
            AI-generated results are for informational purposes only and must be reviewed by a
            qualified healthcare professional before any clinical decision.
          </p>
        </div>
      </div>
    </footer>
  );
}

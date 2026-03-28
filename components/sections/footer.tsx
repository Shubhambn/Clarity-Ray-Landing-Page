"use client";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-base font-medium text-foreground">
            Clarity<span className="text-primary">Ray</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contributing
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              MIT Licence
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs font-mono text-muted-foreground">
            © 2025 ClarityRay · Open source medical AI runtime
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground/70 text-center max-w-2xl mx-auto leading-relaxed">
            ClarityRay is a screening assistant and is NOT a medical diagnosis tool. All AI-generated results are for informational purposes only and should always be reviewed by qualified healthcare professionals before any clinical decision.
          </p>
        </div>
      </div>
    </footer>
  );
}

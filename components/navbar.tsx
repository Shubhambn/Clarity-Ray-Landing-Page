"use client";

import { Github } from "lucide-react";

interface NavbarProps {
  onJoinClick: () => void;
}

export function Navbar({ onJoinClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium tracking-tight text-foreground">
              Clarity<span className="text-primary">Ray</span>
            </span>
          </div>

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Status pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-blink" />
              <span className="text-xs font-mono text-primary">IN DEVELOPMENT</span>
            </div>

            {/* GitHub button */}
            <a
              href="#"
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {/* CTA Button */}
            <button
              onClick={onJoinClick}
              className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Join early access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

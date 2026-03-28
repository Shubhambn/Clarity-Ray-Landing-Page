"use client";

import { useState } from "react";
import { X, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { submitWaitlist } from "@/lib/api";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const roles = [
  { value: "doctor", label: "Doctor / Clinician" },
  { value: "developer", label: "Developer" },
  { value: "researcher", label: "Researcher" },
  { value: "curious", label: "Just curious" },
];

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    const result = await submitWaitlist({ email, role, message });

    setIsLoading(false);
    setStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    });

    if (result.success) {
      setEmail("");
      setRole("");
      setMessage("");
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-medium text-foreground">
              Join Early Access
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Be among the first to try ClarityRay
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email address <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>

          {/* Role */}
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-foreground mb-2"
            >
              What describes you best?
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
            >
              <option value="" className="text-muted-foreground">
                Select a role...
              </option>
              {roles.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Anything you&apos;d like us to know? (optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="What would you use ClarityRay for?"
              className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
            />
          </div>

          {/* Status message */}
          {status.type && (
            <div
              className={`flex items-center gap-3 p-4 rounded-xl ${
                status.type === "success"
                  ? "bg-primary/10 border border-primary/30 text-primary"
                  : "bg-destructive/10 border border-destructive/30 text-destructive"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <span className="text-sm">{status.message}</span>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading || status.type === "success"}
            className="w-full py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : status.type === "success" ? (
              <>
                <CheckCircle className="w-4 h-4" />
                You&apos;re on the list!
              </>
            ) : (
              "Join the waitlist"
            )}
          </button>

          <p className="text-xs text-center text-muted-foreground">
            No spam, ever. We&apos;ll only email you about ClarityRay.
          </p>
        </form>
      </div>
    </div>
  );
}

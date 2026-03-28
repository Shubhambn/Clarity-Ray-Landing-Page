"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import { submitFeedback } from "@/lib/api";

const roleChips = [
  { value: "doctor", label: "Doctor" },
  { value: "developer", label: "Developer" },
  { value: "researcher", label: "Researcher" },
  { value: "curious", label: "Just curious" },
];

export function FeedbackSection() {
  const [selectedRole, setSelectedRole] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole || !feedback.trim()) {
      setStatus({ type: "error", message: "Please select a role and enter your feedback." });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    const result = await submitFeedback({ role: selectedRole, feedback });

    setIsLoading(false);
    setStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    });

    if (result.success) {
      setSelectedRole("");
      setFeedback("");
    }
  };

  return (
    <section className="py-20 lg:py-28 border-t border-border bg-card/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-primary">SHAPE THE FUTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-balance">
            Help shape{" "}
            <span className="font-serif italic text-primary">ClarityRay</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            We&apos;re building this for you. Tell us what you&apos;d expect from a local medical AI tool.
          </p>
        </div>

        {/* Feedback form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role chips */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              What best describes you?
            </label>
            <div className="flex flex-wrap gap-2">
              {roleChips.map((role) => (
                <button
                  key={role.value}
                  type="button"
                  onClick={() => setSelectedRole(role.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedRole === role.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-foreground mb-3"
            >
              What would you expect from this product?
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={5}
              placeholder="Share your thoughts, use cases, or feature requests..."
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

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading || status.type === "success"}
            className="w-full py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending feedback...
              </>
            ) : status.type === "success" ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Thank you!
              </>
            ) : (
              "Send feedback"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

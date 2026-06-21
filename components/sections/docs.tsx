"use client";

import { useState } from "react";
import {
  Rocket,
  FileJson,
  Workflow,
  UploadCloud,
  Network,
  ShieldCheck,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import { SITE } from "@/lib/constants";

type TabId = "quickstart" | "contract" | "pipeline" | "publishing" | "api" | "invariants";

const tabs: { id: TabId; label: string; icon: typeof Rocket }[] = [
  { id: "quickstart", label: "Quick start", icon: Rocket },
  { id: "contract", label: "Model contract", icon: FileJson },
  { id: "pipeline", label: "Inference pipeline", icon: Workflow },
  { id: "publishing", label: "Publishing models", icon: UploadCloud },
  { id: "api", label: "API reference", icon: Network },
  { id: "invariants", label: "Safety invariants", icon: ShieldCheck },
];

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-border bg-black p-4 font-mono text-[12.5px] leading-relaxed text-primary/80">
      <code>{children}</code>
    </pre>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground leading-relaxed mb-5">{children}</p>;
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="text-sm font-medium text-foreground mt-6 mb-3">{children}</h4>;
}

export function DocsSection() {
  const [active, setActive] = useState<TabId>("quickstart");

  return (
    <section id="docs" className="py-20 lg:py-28 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-mono text-primary tracking-widest">// DOCUMENTATION</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mt-4 text-balance">
            Everything you need to{" "}
            <span className="font-serif italic text-primary">run & extend it.</span>
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            From a first analysis in the browser to publishing your own model. The full
            reference lives in the repository — here are the essentials.
          </p>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-6 lg:gap-10">
          {/* Tab rail */}
          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                    isActive
                      ? "bg-primary/10 border border-primary/30 text-foreground"
                      : "border border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <tab.icon
                    className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-primary" : ""}`}
                  />
                  {tab.label}
                </button>
              );
            })}

            <a
              href={SITE.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-4 py-3 mt-4 rounded-xl text-xs font-mono text-primary border border-primary/20 hover:bg-primary/5 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Full docs on GitHub
              <ArrowUpRight className="w-3 h-3 ml-auto" />
            </a>
          </nav>

          {/* Panel */}
          <div className="min-w-0 rounded-2xl border border-border bg-card p-6 lg:p-8">
            {active === "quickstart" && <QuickStart />}
            {active === "contract" && <ModelContract />}
            {active === "pipeline" && <Pipeline />}
            {active === "publishing" && <Publishing />}
            {active === "api" && <ApiReference />}
            {active === "invariants" && <Invariants />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- panels */

function QuickStart() {
  return (
    <div>
      <h3 className="text-xl font-medium text-foreground mb-2">Quick start</h3>
      <Lead>
        ClarityRay is browser-native — there is nothing to install to use it. Inference
        runs on-device and zero network requests happen while a scan is being analyzed.
      </Lead>

      <StepTitle>Option A — Use the live app (no install)</StepTitle>
      <Code>{`1. Open ${SITE.modelsUrl}  → browse published models
2. Select a model → click "Use for Analysis"
3. Open /analysis → model downloads to your browser (cached after first time)
4. Upload a chest X-ray (PNG or JPEG)
5. Click Analyze → inference runs locally in ~3–8 seconds
6. View findings: confidence, heatmap, and safety disclaimer
7. Result adapts to your role: researcher / clinician / patient`}</Code>
      <p className="text-xs text-muted-foreground/70 mt-3">
        Steps 4–7 make zero network requests. Your scan never leaves the page.
      </p>

      <StepTitle>Option B — Run it locally</StepTitle>
      <Lead>The app works without a database — Supabase fields can be left blank.</Lead>
      <Code>{`git clone ${SITE.githubUrl}
cd ClarityRay

# Windows (PowerShell)
.\\setup.ps1

# Linux / macOS
chmod +x setup.sh && ./setup.sh`}</Code>

      <StepTitle>Then start the two services</StepTitle>
      <Code>{`# Terminal 1 — backend API (optional, runs degraded without Supabase)
cd api && uvicorn main:app --reload   # http://localhost:8000

# Terminal 2 — frontend
npm run dev                            # http://localhost:3000`}</Code>

      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        <Prereq label="Node.js" value="≥ 18" />
        <Prereq label="Python" value="≥ 3.10" />
        <Prereq label="Git" value="any" />
      </div>
    </div>
  );
}

function Prereq({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-4">
      <div className="text-[10px] font-mono text-primary/60 tracking-widest">{label}</div>
      <div className="text-lg font-light text-foreground mt-1">{value}</div>
    </div>
  );
}

function ModelContract() {
  return (
    <div>
      <h3 className="text-xl font-medium text-foreground mb-2">The model contract</h3>
      <Lead>
        Every model is described by a <span className="font-mono text-primary">clarity.json</span>{" "}
        file. This is what makes inference generic — the runtime reads the spec and runs any
        conforming model without code changes. Adding a model needs only a spec and a
        model.onnx.
      </Lead>

      <Code>{`{
  "id": "densenet121-chest",
  "name": "DenseNet121 Chest X-ray Binary Classifier",
  "version": "1.0.0",
  "certified": false,
  "bodypart": "chest",
  "modality": "xray",
  "model": { "file": "/models/densenet121-chest/model.onnx", "format": "onnx" },
  "integrity": { "sha256": "64934b00028b55e1..." },
  "input": {
    "shape": [1, 3, 224, 224],
    "layout": "NCHW",
    "normalize": {
      "mean": [0.485, 0.456, 0.406],
      "std":  [0.229, 0.224, 0.225]
    }
  },
  "output": {
    "shape": [1, 2],
    "classes": ["Normal", "Lung Cancer"],
    "activation": "softmax"
  },
  "thresholds": {
    "possible_finding": 0.5,
    "low_confidence": 0.25,
    "validation_status": "unvalidated"
  },
  "safety": {
    "tier": "screening",
    "disclaimer": "Screening support only. Requires clinician review."
  }
}`}</Code>

      <StepTitle>Key fields</StepTitle>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-muted-foreground border-b border-border">
              <th className="py-2 pr-4 font-medium font-mono text-xs">field</th>
              <th className="py-2 font-medium font-mono text-xs">meaning</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <ContractRow field="output.classes" desc="Exactly 2 entries for binary classifiers" />
            <ContractRow field="safety.tier" desc="screening / research / investigational" />
            <ContractRow field="certified" desc="Always false — schema const constraint + platform policy" />
            <ContractRow field="thresholds.possible_finding" desc="Probability threshold for a possible finding" />
            <ContractRow field="integrity.sha256" desc="Hash verified before the model runs" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ContractRow({ field, desc }: { field: string; desc: string }) {
  return (
    <tr className="border-b border-border/50">
      <td className="py-2.5 pr-4 font-mono text-[12.5px] text-primary align-top whitespace-nowrap">
        {field}
      </td>
      <td className="py-2.5 align-top">{desc}</td>
    </tr>
  );
}

function Pipeline() {
  const steps = [
    {
      n: "1",
      title: "Model loading",
      body: "model.onnx is fetched once from the model URL, verified with SHA-256, and cached in the Cache API + IndexedDB. Later loads skip the download.",
    },
    {
      n: "2",
      title: "Preprocessing",
      body: "The image is decoded and sampled through a canvas, resized to the model's input size, normalized with the spec's mean/std, and written into a Float32Array in NCHW layout.",
    },
    {
      n: "3",
      title: "Inference",
      body: "An ONNX InferenceSession is created from the model bytes (cached by key) and session.run() returns raw logits aligned to the class list in clarity.json.",
    },
    {
      n: "4",
      title: "Postprocessing",
      body: "Logits are softmaxed to probabilities, then mapped against spec thresholds: ≥0.5 → Possible Finding, ≥0.25 → Low Confidence, otherwise No Finding. Thresholds come from the spec, never hardcoded.",
    },
    {
      n: "5",
      title: "Result translation",
      body: "The probability is wrapped into a SafeResult — primary finding, confidence, safety tier, plain summary, and mandatory disclaimer — then rendered per persona.",
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-medium text-foreground mb-2">How inference works</h3>
      <Lead>
        Five stages, all running inside the browser tab. The same generic pipeline runs every
        conforming model.
      </Lead>

      <div className="space-y-3">
        {steps.map((s) => (
          <div key={s.n} className="flex gap-4 rounded-xl border border-border bg-background/40 p-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center font-mono text-sm text-primary">
              {s.n}
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-1">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <StepTitle>The softmax step, concretely</StepTitle>
      <Code>{`softmax(logits) = exp(logit_i - max) / Σ exp(logit_j - max)
→ [0.13, 0.87]   means 87% probability of class[1]`}</Code>

      <StepTitle>SafeResult shape</StepTitle>
      <Code>{`interface SafeResult {
  primaryFinding: string
  confidencePercent: number
  safetyTier: 'possible_finding' | 'low_confidence' | 'no_finding'
  plainSummary: string
  disclaimer: string
}`}</Code>
    </div>
  );
}

function Publishing() {
  return (
    <div>
      <h3 className="text-xl font-medium text-foreground mb-2">Publishing a model</h3>
      <Lead>
        The clarity converter (<span className="font-mono text-primary">converter/clarityray</span>)
        turns a trained model into a validated ONNX package with a generated spec. The implemented
        entrypoint today is <span className="font-mono text-primary">clarityray upload</span>.
      </Lead>

      <StepTitle>1 — Set credentials</StepTitle>
      <Code>{`export HF_USERNAME=your-huggingface-username
export HF_TOKEN=hf_your_write_token
export CORE_API_BASE_URL=http://localhost:8000`}</Code>

      <StepTitle>2 — Convert, validate, package &amp; (optionally) register</StepTitle>
      <Code>{`python -m clarityray.cli upload ./model.onnx \\
  --classes "No suspicious chest finding,Possible suspicious chest finding" \\
  --bodypart chest --modality xray --no-upload`}</Code>
      <p className="text-xs text-muted-foreground/70 mt-3">
        Drop <span className="font-mono">--no-upload</span> to push artifacts to a Hugging Face repo
        (<span className="font-mono">clarityray-&#123;slug&#125;</span>) and register metadata with the
        platform. Set the model to <span className="font-mono">published</span> in Supabase and it
        appears immediately in the model browser.
      </p>

      <StepTitle>What gets validated</StepTitle>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {[
          "Folder contains model.onnx + clarity.json",
          "ONNX graph loads and input/output shapes match the spec",
          "Exactly 2 output classes for binary classifiers",
          "certified is false (enforced at schema level)",
        ].map((t) => (
          <li key={t} className="flex gap-2">
            <span className="text-primary mt-0.5">›</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <p className="text-xs text-muted-foreground/70 mt-6 border-t border-border pt-4">
        A higher-level <span className="font-mono">clarity push / init / convert</span> CLI is planned;
        see the repository roadmap for status.
      </p>
    </div>
  );
}

function ApiReference() {
  const rows = [
    { m: "GET", e: "/health", d: "Service status + model count / degraded mode" },
    { m: "GET", e: "/models", d: "List published models" },
    { m: "GET", e: "/models/:slug", d: "Single model detail + artifact URLs" },
    { m: "GET", e: "/models/:slug/status", d: "Validation and publication status" },
    { m: "POST", e: "/models/register", d: "Register a model from the converter flow" },
  ];

  return (
    <div>
      <h3 className="text-xl font-medium text-foreground mb-2">Platform API</h3>
      <Lead>
        A FastAPI service that handles model metadata only — no inference ever happens server-side.
        If Supabase is not configured, listing endpoints return database-unavailable responses and
        the browser falls back to on-disk static models.
      </Lead>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-muted-foreground border-b border-border">
              <th className="py-2 pr-4 font-medium font-mono text-xs">method</th>
              <th className="py-2 pr-4 font-medium font-mono text-xs">endpoint</th>
              <th className="py-2 font-medium font-mono text-xs">description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.e} className="border-b border-border/50">
                <td className="py-2.5 pr-4 align-top">
                  <span
                    className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                      r.m === "GET"
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-amber-400 bg-amber-400/10 border border-amber-400/20"
                    }`}
                  >
                    {r.m}
                  </span>
                </td>
                <td className="py-2.5 pr-4 font-mono text-[12.5px] text-foreground align-top whitespace-nowrap">
                  {r.e}
                </td>
                <td className="py-2.5 text-muted-foreground align-top">{r.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <StepTitle>Example /models response</StepTitle>
      <Code>{`{
  "models": [
    {
      "id": "uuid",
      "slug": "densenet121-chest",
      "name": "DenseNet121 Chest X-Ray",
      "bodypart": "chest",
      "modality": "xray",
      "status": "published",
      "current_version": {
        "version": "1.0.0",
        "onnx_url": "https://huggingface.co/.../model.onnx",
        "clarity_url": "https://huggingface.co/.../clarity.json"
      }
    }
  ],
  "total": 1, "page": 1, "limit": 20
}`}</Code>
    </div>
  );
}

function Invariants() {
  const invariants = [
    "Never send scan image bytes to any server.",
    "Never import the API client into the analysis page.",
    "Never hardcode model labels outside clarity.json.",
    "Never set certified: true in any clarity.json.",
    "Always run npx tsc --noEmit after TypeScript changes.",
    "Never remove COOP/COEP headers from the Next.js config.",
  ];

  return (
    <div>
      <h3 className="text-xl font-medium text-foreground mb-2">Safety &amp; architecture invariants</h3>
      <Lead>
        ClarityRay is a screening tool — not a diagnostic device. These rules are non-negotiable and
        documented in <span className="font-mono text-primary">AGENTS.md</span>. Any change that breaks
        the privacy invariant is declined regardless of other improvements.
      </Lead>

      <ol className="space-y-3">
        {invariants.map((rule, i) => (
          <li
            key={i}
            className="flex gap-4 rounded-xl border border-border bg-background/40 p-4"
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center font-mono text-xs text-primary">
              {i + 1}
            </span>
            <span className="text-sm text-foreground leading-relaxed">{rule}</span>
          </li>
        ))}
      </ol>

      <StepTitle>What it does — and does not do</StepTitle>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
          <div className="text-[10px] font-mono text-primary tracking-widest mb-3">DOES</div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>Runs AI inference locally in the browser</li>
            <li>Shows confidence with uncertainty</li>
            <li>Generates attention heatmaps</li>
            <li>Applies model-declared thresholds</li>
          </ul>
        </div>
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
          <div className="text-[10px] font-mono text-destructive tracking-widest mb-3">DOES NOT</div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>Diagnose disease</li>
            <li>Replace physician review</li>
            <li>Localize disease precisely</li>
            <li>Provide medical advice</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

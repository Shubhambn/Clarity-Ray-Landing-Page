"use client";

import { useEffect, useState, useRef } from "react";

const logs = [
  { delay: 700, type: "ok", text: "> clarityray v1.0.0 initialized" },
  { delay: 1200, type: "", text: "> loading model weights... lung_model.pth" },
  { delay: 1900, type: "ok", text: "> DenseNet121 loaded on CPU [2.1s]" },
  { delay: 2400, type: "", text: "> preprocessing: resize 224x224, normalize" },
  { delay: 3000, type: "", text: "> running forward pass..." },
  { delay: 3700, type: "warn", text: "> attention: high gradient zone (R-upper)" },
  { delay: 4200, type: "err", text: "> nodule confidence: 87.3% — FLAGGED" },
  { delay: 4700, type: "ok", text: "> gradcam overlay generated successfully" },
  { delay: 5200, type: "ok", text: "> disclaimer enforced · result wrapped" },
  { delay: 5700, type: "ok", text: "> data never left this machine" },
];

export function XRayScanner() {
  const [progress, setProgress] = useState({ nodule: 0, effusion: 0, normal: 0 });
  const [status, setStatus] = useState("INITIALIZING");
  const [runLabel, setRunLabel] = useState("RUNNING");
  const [procTime, setProcTime] = useState("0.0s");
  const [visibleLogs, setVisibleLogs] = useState<typeof logs>([]);
  const [showPins, setShowPins] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const runAnimation = () => {
    // Reset state
    setProgress({ nodule: 0, effusion: 0, normal: 0 });
    setStatus("INITIALIZING");
    setRunLabel("RUNNING");
    setProcTime("0.0s");
    setVisibleLogs([]);
    setShowPins(false);
    setShowBadge(false);

    const startTime = Date.now();

    // Progress timer
    const procInterval = setInterval(() => {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      setProcTime(`${elapsed}s`);
      if (parseFloat(elapsed) > 6.5) {
        clearInterval(procInterval);
        setProcTime("done · 6.2s");
      }
    }, 100);

    // Animate progress bars after 2 seconds
    setTimeout(() => {
      setProgress({ nodule: 87, effusion: 23, normal: 55 });
    }, 2000);

    // Status updates
    const statuses = [
      { delay: 700, text: "INITIALIZING" },
      { delay: 1400, text: "LOADING MODEL" },
      { delay: 2100, text: "PREPROCESSING" },
      { delay: 3100, text: "RUNNING INFERENCE" },
      { delay: 4000, text: "GENERATING HEATMAP" },
      { delay: 5100, text: "ANALYSIS COMPLETE" },
    ];

    statuses.forEach(({ delay, text }) => {
      setTimeout(() => setStatus(text), delay);
    });

    // Logs
    logs.forEach((log, index) => {
      setTimeout(() => {
        setVisibleLogs((prev) => [...prev, log]);
      }, log.delay);
    });

    // Show pins and badge
    setTimeout(() => setShowPins(true), 3800);
    setTimeout(() => setShowBadge(true), 4500);
    setTimeout(() => setRunLabel("COMPLETE"), 5500);

    // Restart animation
    animationRef.current = setTimeout(runAnimation, 8500);
  };

  useEffect(() => {
    runAnimation();
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {/* X-Ray Frame */}
      <div className="relative border border-primary/30 rounded-2xl overflow-hidden bg-[#020d05] h-[280px] sm:h-[320px]">
        {/* Corner brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/50 rounded-tl" />
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/50 rounded-tr" />
        <div className="absolute bottom-10 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/50 rounded-bl" />
        <div className="absolute bottom-10 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/50 rounded-br" />

        {/* Scan line */}
        <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_14px_rgba(34,197,94,0.7)] animate-scan" />

        {/* X-Ray art */}
        <div className="absolute inset-0 flex items-center justify-center opacity-80">
          <svg
            width="240"
            height="220"
            viewBox="0 0 290 262"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse-glow"
          >
            {/* Chest outline */}
            <ellipse
              cx="145"
              cy="131"
              rx="112"
              ry="120"
              fill="none"
              stroke="rgba(180,220,180,0.1)"
              strokeWidth="1.5"
            />
            {/* Left ribs */}
            <path d="M58 66 Q28 83 26 112 Q28 130 56 132" fill="none" stroke="rgba(160,200,160,0.32)" strokeWidth="1.2" />
            <path d="M64 82 Q30 98 28 120 Q30 135 58 137" fill="none" stroke="rgba(160,200,160,0.24)" strokeWidth="1" />
            <path d="M72 98 Q34 112 32 128 Q34 141 62 143" fill="none" stroke="rgba(160,200,160,0.18)" strokeWidth="0.9" />
            {/* Right ribs */}
            <path d="M232 66 Q262 83 264 112 Q262 130 234 132" fill="none" stroke="rgba(160,200,160,0.32)" strokeWidth="1.2" />
            <path d="M226 82 Q260 98 262 120 Q260 135 232 137" fill="none" stroke="rgba(160,200,160,0.24)" strokeWidth="1" />
            <path d="M218 98 Q256 112 258 128 Q256 141 228 143" fill="none" stroke="rgba(160,200,160,0.18)" strokeWidth="0.9" />
            {/* Spine */}
            <path d="M145 18 L143 205" stroke="rgba(200,220,200,0.2)" strokeWidth="2.5" strokeLinecap="round" />
            {/* Lungs */}
            <path d="M72 56 Q55 78 52 112 Q50 145 60 170 Q72 192 90 197 Q110 200 122 182 Q128 164 126 134 Q124 102 117 78 Q108 56 92 52 Z" fill="rgba(0,180,80,0.05)" stroke="rgba(0,200,100,0.18)" strokeWidth="1" />
            <path d="M218 56 Q235 78 238 112 Q240 145 230 170 Q218 192 200 197 Q180 200 168 182 Q162 164 164 134 Q166 102 173 78 Q182 56 198 52 Z" fill="rgba(0,180,80,0.05)" stroke="rgba(0,200,100,0.18)" strokeWidth="1" />
            {/* Heart */}
            <path d="M128 118 Q125 110 132 108 Q140 106 145 114 Q150 106 158 108 Q165 110 162 118 Q158 130 145 142 Q132 130 128 118Z" fill="rgba(200,80,80,0.1)" stroke="rgba(200,100,100,0.22)" strokeWidth="1" />
          </svg>
        </div>

        {/* Hazard zones */}
        <div
          className={`absolute w-14 h-16 top-[72px] right-[70px] rounded-full bg-[radial-gradient(ellipse,rgba(239,68,68,0.8)_0%,rgba(239,68,68,0.3)_45%,transparent_72%)] animate-pulse-glow transition-opacity duration-500 ${
            showPins ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute w-8 h-10 top-[108px] left-[86px] rounded-full bg-[radial-gradient(ellipse,rgba(251,191,36,0.55)_0%,rgba(251,191,36,0.2)_50%,transparent_75%)] animate-pulse-glow transition-opacity duration-500 ${
            showPins ? "opacity-100" : "opacity-0"
          }`}
          style={{ animationDelay: "0.9s" }}
        />

        {/* AI pins */}
        <div
          className={`absolute top-[74px] right-[130px] px-2 py-1 text-[9px] font-mono text-red-500 border border-red-500/45 bg-black/80 rounded transition-opacity duration-300 ${
            showPins ? "opacity-100" : "opacity-0"
          }`}
        >
          NODULE · 87%
        </div>
        <div
          className={`absolute top-[110px] left-[114px] px-2 py-1 text-[9px] font-mono text-amber-400 border border-amber-400/40 bg-black/80 rounded transition-opacity duration-300 ${
            showPins ? "opacity-100" : "opacity-0"
          }`}
        >
          OPACITY · 43%
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 px-3 py-2 border-t border-border flex justify-between items-center">
          <span className="text-[9px] font-mono text-primary/70">
            CHEST-PA · DenseNet121 · GradCAM v1
          </span>
          <span className="text-[9px] font-mono text-muted-foreground">{procTime}</span>
        </div>
      </div>

      {/* Analysis Panel */}
      <div className="border border-border rounded-xl bg-[rgba(0,12,4,0.95)] p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-mono text-primary/80 tracking-widest">AI ANALYSIS</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-blink" />
            <span
              className={`text-[9px] font-mono ${
                runLabel === "COMPLETE" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {runLabel}
            </span>
          </div>
        </div>

        {/* Progress bars */}
        <div className="space-y-3">
          <ProgressBar label="Pulmonary nodule" value={progress.nodule} color="red" />
          <ProgressBar label="Pleural effusion" value={progress.effusion} color="amber" />
          <ProgressBar label="Normal parenchyma" value={progress.normal} color="green" />
        </div>

        {/* Finding row */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/50">
          <span className="text-[11px] text-muted-foreground">Primary finding</span>
          <div
            className={`text-[9px] font-mono text-red-500 border border-red-500/35 bg-red-500/10 px-3 py-1 rounded-full transition-opacity duration-300 ${
              showBadge ? "opacity-100" : "opacity-0"
            }`}
          >
            ABNORMALITY DETECTED
          </div>
        </div>
      </div>

      {/* Log box */}
      <div className="border border-border rounded-lg bg-black p-3 font-mono text-[9px] text-primary/60 leading-relaxed min-h-[68px] overflow-hidden">
        {visibleLogs.map((log, index) => (
          <div
            key={index}
            className={`${
              log.type === "ok"
                ? "text-primary"
                : log.type === "warn"
                ? "text-amber-500"
                : log.type === "err"
                ? "text-red-500"
                : "text-primary/60"
            } animate-[fadeIn_0.3s_ease_forwards]`}
          >
            {log.text}
          </div>
        ))}
        <span className="inline-block w-1.5 h-2.5 bg-primary animate-blink" />
      </div>
    </div>
  );
}

function ProgressBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: "red" | "amber" | "green";
}) {
  const colorClasses = {
    red: "bg-red-500",
    amber: "bg-amber-500",
    green: "bg-primary",
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-[11px] text-muted-foreground">{label}</span>
        <span className="text-[11px] font-mono text-primary">{value}%</span>
      </div>
      <div className="h-[3px] bg-white/5 rounded overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} rounded transition-all duration-[2s] ease-out`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

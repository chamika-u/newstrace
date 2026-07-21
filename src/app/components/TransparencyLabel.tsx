import { useState } from "react";
import { ShieldCheck, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const infoChips = [
  { label: "AI Tools", value: "GPT-4 (summarisation)" },
  { label: "Editorial Review", value: "Senior Editor Approved" },
  { label: "Provenance Log", value: "View Audit Trail ↗", link: true },
  { label: "Log Integrity", value: "SHA-256 Verified" },
];

interface TransparencyLabelProps {
  defaultExpanded?: boolean;
}

export function TransparencyLabel({ defaultExpanded = false }: TransparencyLabelProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div
      style={{
        width: 600,
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, sans-serif",
        borderRadius: expanded ? 12 : 8,
        backgroundColor: "#FFFFFF",
        boxShadow: expanded
          ? "0 4px 24px rgba(13,33,55,0.12), 0 1px 6px rgba(13,33,55,0.07)"
          : "0 1px 4px rgba(13,33,55,0.08)",
        border: "1px solid #E5E7EB",
        borderLeft: "3px solid #2979D4",
        overflow: "hidden",
        transition: "border-radius 0.2s, box-shadow 0.2s",
      }}
    >
      {/* Header row — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: "100%",
          height: 56,
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          gap: 0,
          backgroundColor: "#F8FAFC",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
          textAlign: "left",
        }}
      >
        {/* Left side */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 6,
              backgroundColor: "#DCFCE7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ShieldCheck size={15} color="#1D9E75" />
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#0D2137" }}>NewsTrace Verified</span>
          <span style={{ color: "#D1D5DB", fontSize: 14, margin: "0 2px" }}>·</span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "#374151" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1D9E75", display: "inline-block" }} />
              72% Human
            </span>
            <span style={{ color: "#D1D5DB" }}>·</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "#374151" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#F59E0B", display: "inline-block" }} />
              28% AI-Assisted
            </span>
          </div>
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
          <span style={{ fontSize: 12, fontWeight: 500, color: "#2979D4" }}>Details</span>
          {expanded ? (
            <ChevronUp size={14} color="#2979D4" />
          ) : (
            <ChevronDown size={14} color="#2979D4" />
          )}
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div style={{ padding: "16px 16px 18px", backgroundColor: "#FFFFFF" }}>
          {/* Stacked bar */}
          <div style={{ marginBottom: 10 }}>
            <div style={{ height: 10, borderRadius: 6, overflow: "hidden", display: "flex" }}>
              <div style={{ width: "72%", backgroundColor: "#1D9E75" }} />
              <div style={{ width: "20%", backgroundColor: "#F59E0B" }} />
              <div style={{ width: "8%", backgroundColor: "#D1D5DB" }} />
            </div>
            {/* Bar legend */}
            <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
              {[
                { color: "#1D9E75", label: "Human", pct: "72%" },
                { color: "#F59E0B", label: "AI-Assisted", pct: "20%" },
                { color: "#D1D5DB", label: "AI-Generated", pct: "8%" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: item.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: "#6B7280" }}>
                    <span style={{ fontWeight: 600, color: "#374151" }}>{item.pct}</span> {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: 1, backgroundColor: "#F3F4F6", margin: "14px 0" }} />

          {/* 2x2 Info chips */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
            {infoChips.map((chip) => (
              <div
                key={chip.label}
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div style={{ fontSize: 10, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                  {chip.label}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: chip.link ? "#2979D4" : "#111827",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    cursor: chip.link ? "pointer" : "default",
                  }}
                >
                  {chip.value}
                  {chip.link && <ExternalLink size={10} color="#2979D4" />}
                </div>
              </div>
            ))}
          </div>

          {/* Info box */}
          <div
            style={{
              padding: "12px 14px",
              borderRadius: 8,
              backgroundColor: "#EFF6FF",
              border: "1px solid #BFDBFE",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 600, color: "#1E40AF", marginBottom: 4 }}>
              What does AI-Assisted mean?
            </div>
            <p style={{ margin: 0, fontSize: 12, color: "#3B82F6", lineHeight: 1.55 }}>
              AI-Assisted content was drafted or suggested by an AI tool, then reviewed, edited, and approved by a human journalist. All facts have been independently verified. The final editorial judgement and accountability rest with the named author.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

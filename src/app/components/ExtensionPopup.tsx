import { Pause, ExternalLink } from "lucide-react";

const activityLog = [
  { time: "2:34 PM", type: "Human", color: "#1D9E75", detail: "typed 142 words" },
  { time: "2:31 PM", type: "AI", color: "#F59E0B", detail: "GPT-4 suggested paragraph accepted" },
  { time: "2:28 PM", type: "Human", color: "#1D9E75", detail: "edited headline, 3 revisions" },
  { time: "2:19 PM", type: "AI", color: "#9CA3AF", detail: "GPT-4 generated intro draft" },
];

export function ExtensionPopup() {
  return (
    <div
      style={{
        width: 375,
        height: 600,
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, sans-serif",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        boxShadow: "0 8px 32px rgba(13,33,55,0.18), 0 2px 8px rgba(13,33,55,0.10)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#0D2137",
          padding: "14px 16px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "#FFFFFF", fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}>
          NewsTrace Recorder
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#1D9E75",
              display: "inline-block",
              boxShadow: "0 0 0 0 rgba(29,158,117,0.6)",
              animation: "pulse-green 1.8s ease-in-out infinite",
            }}
          />
          <span style={{ color: "#1D9E75", fontSize: 12, fontWeight: 500 }}>Recording active</span>
        </div>
      </div>

      {/* Content Breakdown */}
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Content Breakdown
          </span>
          <span style={{ fontSize: 11, color: "#9CA3AF" }}>Live</span>
        </div>

        {/* Stacked bar */}
        <div style={{ height: 10, borderRadius: 6, overflow: "hidden", display: "flex", marginBottom: 8 }}>
          <div style={{ width: "68%", backgroundColor: "#1D9E75" }} />
          <div style={{ width: "24%", backgroundColor: "#F59E0B" }} />
          <div style={{ width: "8%", backgroundColor: "#D1D5DB" }} />
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          {[
            { color: "#1D9E75", label: "Human", pct: "68%" },
            { color: "#F59E0B", label: "AI-Assisted", pct: "24%" },
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

        <div style={{ height: 1, backgroundColor: "#F3F4F6", marginBottom: 14 }} />

        <span style={{ fontSize: 11, fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Activity Log
        </span>
      </div>

      {/* Activity Log */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px 16px", display: "flex", flexDirection: "column", gap: 2 }}>
        {activityLog.map((entry, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 8,
              backgroundColor: i === 0 ? "#F0FDF8" : "#FAFAFA",
              border: `1px solid ${i === 0 ? "#BBF7E0" : "#F3F4F6"}`,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: entry.color,
                flexShrink: 0,
                marginTop: 4,
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: entry.type === "Human" ? "#1D9E75" : entry.color === "#9CA3AF" ? "#6B7280" : "#B45309",
                  }}
                >
                  {entry.type}
                </span>
                <span style={{ fontSize: 11, color: "#9CA3AF" }}>{entry.time}</span>
              </div>
              <p style={{ fontSize: 12, color: "#4B5563", margin: 0, lineHeight: 1.4 }}>{entry.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div style={{ padding: "12px 16px 16px", display: "flex", gap: 8, borderTop: "1px solid #F3F4F6" }}>
        <button
          style={{
            flex: 1,
            height: 38,
            borderRadius: 8,
            border: "1.5px solid #2979D4",
            backgroundColor: "transparent",
            color: "#2979D4",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            fontFamily: "inherit",
          }}
        >
          <Pause size={14} />
          Pause Recording
        </button>
        <button
          style={{
            flex: 1,
            height: 38,
            borderRadius: 8,
            border: "none",
            backgroundColor: "#2979D4",
            color: "#FFFFFF",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            fontFamily: "inherit",
          }}
        >
          <ExternalLink size={14} />
          View Full Log
        </button>
      </div>

      <style>{`
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(29,158,117,0.6); }
          70% { box-shadow: 0 0 0 7px rgba(29,158,117,0); }
          100% { box-shadow: 0 0 0 0 rgba(29,158,117,0); }
        }
      `}</style>
    </div>
  );
}

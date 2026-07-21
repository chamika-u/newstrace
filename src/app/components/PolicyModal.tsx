import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Check, X, AlertTriangle, ShieldCheck } from "lucide-react";

const policyItems = [
  { label: "AI sections reviewed by editor", pass: true },
  { label: "Factual claims verified", pass: true },
  { label: "Sources cited for AI-drafted content", pass: true },
  { label: "AI tools disclosed", pass: true },
  { label: "Editor approval obtained", pass: false, action: "Action required" },
];

const donutData = [
  { name: "Human", value: 54, color: "#1D9E75" },
  { name: "AI-Assisted", value: 38, color: "#F59E0B" },
  { name: "AI-Generated", value: 8, color: "#D1D5DB" },
];

export function PolicyModal() {
  return (
    <div
      style={{
        width: 800,
        minHeight: 600,
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, sans-serif",
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(13,33,55,0.22), 0 4px 16px rgba(13,33,55,0.10)",
      }}
    >
      {/* Dimmed overlay background (simulated) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(13,33,55,0.45)",
          zIndex: 0,
        }}
      />

      {/* Modal card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          margin: "40px 56px",
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          boxShadow: "0 8px 32px rgba(13,33,55,0.18)",
          overflow: "hidden",
        }}
      >
        {/* Modal header */}
        <div
          style={{
            padding: "20px 24px 16px",
            borderBottom: "1px solid #F3F4F6",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              backgroundColor: "#EFF6FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShieldCheck size={18} color="#2979D4" />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#0D2137", letterSpacing: "-0.02em" }}>
              Pre-Publish Policy Check
            </h2>
            <p style={{ margin: 0, fontSize: 12, color: "#6B7280", marginTop: 2 }}>
              Tech Layoffs Continue as AI Adoption Reshapes Workforce
            </p>
          </div>
        </div>

        {/* Body */}
        <div style={{ display: "flex", gap: 0 }}>
          {/* Left — Checklist */}
          <div style={{ flex: 1.1, padding: "20px 24px" }}>
            <p style={{ margin: "0 0 14px", fontSize: 12, fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Policy Requirements
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {policyItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "12px 14px",
                    borderRadius: 8,
                    backgroundColor: item.pass ? "#F0FDF8" : "#FFF5F5",
                    border: `1px solid ${item.pass ? "#BBF7E0" : "#FECACA"}`,
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      backgroundColor: item.pass ? "#1D9E75" : "#EF4444",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {item.pass ? (
                      <Check size={13} color="#FFFFFF" strokeWidth={2.5} />
                    ) : (
                      <X size={13} color="#FFFFFF" strokeWidth={2.5} />
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: item.pass ? "#065F46" : "#7F1D1D" }}>
                      {item.label}
                    </div>
                    {item.action && (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          marginTop: 4,
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#EF4444",
                        }}
                      >
                        <AlertTriangle size={11} />
                        {item.action}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Donut Chart */}
          <div
            style={{
              width: 220,
              padding: "20px 20px 20px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ margin: "0 0 12px", fontSize: 12, fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em", alignSelf: "flex-start" }}>
              AI Exposure
            </p>

            <div style={{ width: 180, height: 180, position: "relative" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={52}
                    outerRadius={80}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {donutData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [`${value}%`, ""]}
                    contentStyle={{ fontSize: 12, fontFamily: "inherit", borderRadius: 6, border: "1px solid #E5E7EB" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Center label */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700, color: "#0D2137", lineHeight: 1 }}>46%</div>
                <div style={{ fontSize: 10, color: "#6B7280", marginTop: 2 }}>AI Content</div>
              </div>
            </div>

            {/* Legend */}
            <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 14, alignSelf: "stretch", paddingLeft: 8 }}>
              {donutData.map((item) => (
                <div key={item.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: item.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: "#4B5563" }}>
                    <span style={{ fontWeight: 600 }}>{item.value}%</span> {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Warning */}
            <div
              style={{
                marginTop: 16,
                padding: "10px 12px",
                backgroundColor: "#FEF3C7",
                borderRadius: 8,
                border: "1px solid #FDE68A",
                alignSelf: "stretch",
              }}
            >
              <div style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
                <AlertTriangle size={13} color="#B45309" style={{ flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontSize: 11, color: "#92400E", lineHeight: 1.4 }}>
                  AI exposure exceeds the 40% editorial guideline threshold.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "14px 24px",
            borderTop: "1px solid #F3F4F6",
            display: "flex",
            justifyContent: "flex-end",
            gap: 10,
            backgroundColor: "#FAFAFA",
          }}
        >
          <button
            style={{
              padding: "9px 18px",
              borderRadius: 8,
              border: "1.5px solid #E5E7EB",
              backgroundColor: "#FFFFFF",
              color: "#374151",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              padding: "9px 18px",
              borderRadius: 8,
              border: "none",
              backgroundColor: "#2979D4",
              color: "#FFFFFF",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <ShieldCheck size={14} />
            Send for Approval
          </button>
        </div>
      </div>
    </div>
  );
}

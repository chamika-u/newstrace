import { ExtensionPopup } from "./components/ExtensionPopup";
import { Dashboard } from "./components/Dashboard";
import { PolicyModal } from "./components/PolicyModal";
import { TransparencyLabel } from "./components/TransparencyLabel";
import { ShieldCheck } from "lucide-react";

const screens = [
  {
    id: 1,
    label: "Screen 1",
    title: "Browser Extension Popup",
    size: "375 × 600px",
    bg: "#1E293B",
  },
  {
    id: 2,
    label: "Screen 2",
    title: "Editorial Gatekeeper Dashboard",
    size: "1440 × 900px",
    bg: "#F1F5F9",
  },
  {
    id: 3,
    label: "Screen 3",
    title: "Article Policy Check Modal",
    size: "800 × 600px",
    bg: "#334155",
  },
  {
    id: 4,
    label: "Screen 4",
    title: "Reader Transparency Label — Collapsed",
    size: "600 × 56px",
    bg: "#F8FAFC",
  },
  {
    id: 5,
    label: "Screen 5",
    title: "Reader Transparency Label — Expanded",
    size: "600 × ~320px",
    bg: "#F8FAFC",
  },
];

function ScreenLabel({ id, title, size }: { id: number; title: string; size: string }) {
  return (
    <div style={{ marginBottom: 20, display: "flex", alignItems: "baseline", gap: 12 }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 26,
          height: 26,
          borderRadius: "50%",
          backgroundColor: "#2979D4",
          color: "#FFFFFF",
          fontSize: 11,
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {id}
      </span>
      <div>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em" }}>{title}</span>
        <span
          style={{
            marginLeft: 10,
            fontSize: 11,
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'SF Mono', 'Fira Code', monospace",
          }}
        >
          {size}
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0B1929",
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, sans-serif",
      }}
    >
      {/* Site header */}
      <div
        style={{
          backgroundColor: "#0D2137",
          borderBottom: "1px solid rgba(41,121,212,0.25)",
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              backgroundColor: "#2979D4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShieldCheck size={18} color="#FFFFFF" />
          </div>
          <div>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
              NewsTrace
            </span>
            <span
              style={{
                marginLeft: 8,
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
                fontWeight: 400,
              }}
            >
              UI Prototype
            </span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {screens.map((s) => (
            <a
              key={s.id}
              href={`#screen-${s.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 28,
                height: 28,
                borderRadius: 6,
                backgroundColor: "rgba(41,121,212,0.18)",
                color: "rgba(255,255,255,0.65)",
                fontSize: 12,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              {s.id}
            </a>
          ))}
        </div>
      </div>

      {/* Hero intro */}
      <div style={{ padding: "48px 40px 32px", maxWidth: 900 }}>
        <p style={{ margin: "0 0 6px", fontSize: 11, fontWeight: 600, color: "#2979D4", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          AI Transparency · Journalism
        </p>
        <h1
          style={{
            margin: "0 0 12px",
            fontSize: 32,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
          }}
        >
          NewsTrace UI Prototype
        </h1>
        <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 560, lineHeight: 1.6 }}>
          Five production-ready screens covering the full AI transparency workflow — from browser recording and editorial review to reader-facing disclosure labels.
        </p>
      </div>

      {/* Screens */}
      <div style={{ padding: "0 40px 80px", display: "flex", flexDirection: "column", gap: 64 }}>

        {/* Screen 1 */}
        <section id="screen-1">
          <ScreenLabel id={1} title="Browser Extension Popup" size="375 × 600px" />
          <div
            style={{
              backgroundColor: "#1E293B",
              borderRadius: 16,
              padding: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 700,
            }}
          >
            <ExtensionPopup />
          </div>
        </section>

        {/* Screen 2 */}
        <section id="screen-2">
          <ScreenLabel id={2} title="Editorial Gatekeeper Dashboard" size="1440 × 900px" />
          <div
            style={{
              backgroundColor: "#F1F5F9",
              borderRadius: 16,
              padding: "32px 24px",
              overflowX: "auto",
            }}
          >
            <div style={{ minWidth: 1440 }}>
              <Dashboard />
            </div>
          </div>
        </section>

        {/* Screen 3 */}
        <section id="screen-3">
          <ScreenLabel id={3} title="Article Policy Check Modal" size="800 × 600px" />
          <div
            style={{
              backgroundColor: "#334155",
              borderRadius: 16,
              padding: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 680,
            }}
          >
            <PolicyModal />
          </div>
        </section>

        {/* Screen 4 */}
        <section id="screen-4">
          <ScreenLabel id={4} title="Reader Transparency Label — Collapsed" size="600 × 56px" />
          <div
            style={{
              backgroundColor: "#F8FAFC",
              borderRadius: 16,
              padding: "32px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <p style={{ margin: "0 0 8px", fontSize: 12, color: "#94A3B8" }}>
              As it appears below an article headline — click "Details" to expand
            </p>
            <div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#0D2137",
                  fontFamily: "Georgia, serif",
                  marginBottom: 12,
                  lineHeight: 1.3,
                  maxWidth: 600,
                }}
              >
                Tech Layoffs Continue as AI Adoption Reshapes the Global Workforce
              </div>
              <TransparencyLabel defaultExpanded={false} />
            </div>
          </div>
        </section>

        {/* Screen 5 */}
        <section id="screen-5">
          <ScreenLabel id={5} title="Reader Transparency Label — Expanded" size="600 × ~320px" />
          <div
            style={{
              backgroundColor: "#F8FAFC",
              borderRadius: 16,
              padding: "32px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <p style={{ margin: "0 0 8px", fontSize: 12, color: "#94A3B8" }}>
              Expanded state — showing full breakdown, tool info, and plain-language explanation
            </p>
            <div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#0D2137",
                  fontFamily: "Georgia, serif",
                  marginBottom: 12,
                  lineHeight: 1.3,
                  maxWidth: 600,
                }}
              >
                Tech Layoffs Continue as AI Adoption Reshapes the Global Workforce
              </div>
              <TransparencyLabel defaultExpanded={true} />
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ShieldCheck size={14} color="#2979D4" />
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
            NewsTrace · AI Transparency for Journalism
          </span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {["Navy #0D2137", "Blue #2979D4", "Green #1D9E75", "Amber #F59E0B"].map((token) => {
            const hex = token.split(" ")[1];
            return (
              <div key={token} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: hex }} />
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>{token}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

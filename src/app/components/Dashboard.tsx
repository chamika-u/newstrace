import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  ShieldCheck,
  ClipboardList,
  Settings,
  Search,
  ChevronDown,
  Eye,
  CheckCircle,
  Bell,
  User,
} from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Climate Summit: World Leaders Agree on Carbon Targets",
    author: "Sarah Chen",
    aiPct: 18,
    status: "Approved",
    submitted: "Today, 9:14 AM",
  },
  {
    id: 2,
    title: "Tech Layoffs Continue as AI Adoption Reshapes Workforce",
    author: "Marcus Reid",
    aiPct: 47,
    status: "Pending Review",
    submitted: "Today, 10:02 AM",
  },
  {
    id: 3,
    title: "Federal Reserve Signals Rate Pause Amid Mixed Signals",
    author: "Priya Nair",
    aiPct: 72,
    status: "Flagged",
    submitted: "Today, 11:30 AM",
  },
  {
    id: 4,
    title: "Local Elections: Turnout Hits 20-Year High in Midwest",
    author: "James Okafor",
    aiPct: 22,
    status: "Pending Review",
    submitted: "Today, 12:45 PM",
  },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FileText, label: "Articles", active: false },
  { icon: ShieldCheck, label: "Policies", active: false },
  { icon: ClipboardList, label: "Audit Logs", active: false },
  { icon: Settings, label: "Settings", active: false },
];

function AiBadge({ pct }: { pct: number }) {
  let bg: string, color: string;
  if (pct < 30) {
    bg = "#DCFCE7"; color = "#166534";
  } else if (pct <= 60) {
    bg = "#FEF3C7"; color = "#92400E";
  } else {
    bg = "#FEE2E2"; color = "#991B1B";
  }
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 9px",
        borderRadius: 20,
        backgroundColor: bg,
        color,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {pct}% AI
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string; dot: string }> = {
    Approved: { bg: "#DCFCE7", color: "#166534", dot: "#16A34A" },
    "Pending Review": { bg: "#EFF6FF", color: "#1E40AF", dot: "#2979D4" },
    Flagged: { bg: "#FEE2E2", color: "#991B1B", dot: "#EF4444" },
  };
  const s = map[status] ?? map["Pending Review"];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 9px",
        borderRadius: 20,
        backgroundColor: s.bg,
        color: s.color,
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: s.dot }} />
      {status}
    </span>
  );
}

export function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div
      style={{
        width: 1440,
        height: 900,
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, sans-serif",
        display: "flex",
        backgroundColor: "#F8FAFC",
        overflow: "hidden",
        borderRadius: 12,
        boxShadow: "0 8px 40px rgba(13,33,55,0.15)",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 220,
          backgroundColor: "#0D2137",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <div style={{ padding: "24px 20px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                backgroundColor: "#2979D4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShieldCheck size={17} color="#FFFFFF" />
            </div>
            <span style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em" }}>
              NewsTrace
            </span>
          </div>
        </div>

        <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.08)", margin: "0 16px 16px" }} />

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0 10px", display: "flex", flexDirection: "column", gap: 2 }}>
          {navItems.map(({ icon: Icon, label }) => {
            const isActive = activeNav === label;
            return (
              <button
                key={label}
                onClick={() => setActiveNav(label)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 8,
                  backgroundColor: isActive ? "rgba(41,121,212,0.25)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  width: "100%",
                  textAlign: "left",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                }}
              >
                <Icon size={16} />
                {label}
              </button>
            );
          })}
        </nav>

        {/* User */}
        <div style={{ padding: "16px 16px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "#2979D4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <User size={16} color="#FFFFFF" />
            </div>
            <div>
              <div style={{ color: "#FFFFFF", fontSize: 12, fontWeight: 500 }}>Alex Thornton</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>Editor-in-Chief</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top bar */}
        <div
          style={{
            height: 60,
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            flexShrink: 0,
          }}
        >
          <div>
            <span style={{ fontSize: 18, fontWeight: 700, color: "#0D2137", letterSpacing: "-0.02em" }}>
              Editorial Review Queue
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Bell size={18} color="#9CA3AF" />
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "#EFF6FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <User size={16} color="#2979D4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: 28 }}>
          {/* Stat Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
            {[
              { label: "Articles Today", value: "12", sub: "+3 from yesterday", color: "#2979D4" },
              { label: "Avg AI Exposure", value: "34%", sub: "Across all articles", color: "#F59E0B" },
              { label: "Pending Review", value: "4", sub: "Requires attention", color: "#EF4444" },
            ].map((card) => (
              <div
                key={card.label}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 10,
                  padding: "18px 20px",
                  boxShadow: "0 1px 4px rgba(13,33,55,0.07)",
                  border: "1px solid #E5E7EB",
                  borderTop: `3px solid ${card.color}`,
                }}
              >
                <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 500, marginBottom: 8 }}>{card.label}</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#0D2137", letterSpacing: "-0.03em", lineHeight: 1 }}>
                  {card.value}
                </div>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 6 }}>{card.sub}</div>
              </div>
            ))}
          </div>

          {/* Table Card */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 10,
              boxShadow: "0 1px 4px rgba(13,33,55,0.07)",
              border: "1px solid #E5E7EB",
              overflow: "hidden",
            }}
          >
            {/* Table toolbar */}
            <div
              style={{
                padding: "16px 20px",
                borderBottom: "1px solid #F3F4F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flex: 1,
                  maxWidth: 320,
                  backgroundColor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  borderRadius: 8,
                  padding: "8px 12px",
                }}
              >
                <Search size={14} color="#9CA3AF" />
                <input
                  placeholder="Search articles..."
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    fontSize: 13,
                    color: "#374151",
                    width: "100%",
                    fontFamily: "inherit",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 14px",
                  backgroundColor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: 13, color: "#374151" }}>Filter: All</span>
                <ChevronDown size={14} color="#6B7280" />
              </div>
            </div>

            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2.5fr 1fr 110px 130px 160px",
                padding: "10px 20px",
                backgroundColor: "#F9FAFB",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              {["Article", "Author", "AI Exposure", "Status", "Actions"].map((h) => (
                <span key={h} style={{ fontSize: 11, fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {h}
                </span>
              ))}
            </div>

            {/* Table rows */}
            {articles.map((a, i) => (
              <div
                key={a.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2.5fr 1fr 110px 130px 160px",
                  padding: "16px 20px",
                  alignItems: "center",
                  borderBottom: i < articles.length - 1 ? "1px solid #F3F4F6" : "none",
                  backgroundColor: "#FFFFFF",
                  transition: "background 0.1s",
                }}
              >
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111827", marginBottom: 3, lineHeight: 1.4 }}>
                    {a.title}
                  </div>
                  <div style={{ fontSize: 11, color: "#9CA3AF" }}>{a.submitted}</div>
                </div>
                <div style={{ fontSize: 13, color: "#374151" }}>{a.author}</div>
                <div>
                  <AiBadge pct={a.aiPct} />
                </div>
                <div>
                  <StatusBadge status={a.status} />
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "6px 12px",
                      borderRadius: 6,
                      border: "1.5px solid #E5E7EB",
                      backgroundColor: "#FFFFFF",
                      color: "#374151",
                      fontSize: 12,
                      fontWeight: 500,
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    <Eye size={12} />
                    Review
                  </button>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "6px 12px",
                      borderRadius: 6,
                      border: "none",
                      backgroundColor: a.status === "Approved" ? "#DCFCE7" : "#2979D4",
                      color: a.status === "Approved" ? "#166534" : "#FFFFFF",
                      fontSize: 12,
                      fontWeight: 500,
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    <CheckCircle size={12} />
                    {a.status === "Approved" ? "Approved" : "Approve"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

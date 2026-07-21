# NewsTrace UI Prototype — Implementation Plan

## Context
Build a complete 5-screen UI prototype for NewsTrace, an AI transparency system for journalism. The app is currently an empty React shell (`src/app/App.tsx`). We need to implement all 5 screens as a polished prototype showcase, using the project's existing component library (Radix UI / Shadcn-style components in `src/app/components/ui/`) and Recharts for data visualization.

## Color & Design Tokens

| Token | Value | Meaning |
|---|---|---|
| Navy | `#0D2137` | Brand dark, sidebar bg |
| Blue | `#2979D4` | Primary CTA, links |
| Green | `#1D9E75` | Human content |
| Amber | `#F59E0B` | AI-Assisted |
| Gray | `#9CA3AF` | AI-Generated |
| Red | `#EF4444` | Flagged / error |
| White | `#FFFFFF` | Surfaces |

Font: **Inter** — import via Google Fonts in `src/styles/fonts.css`.

## Screens to Build

### Screen 1 — Browser Extension Popup (375×600px)
Component: `src/app/components/ExtensionPopup.tsx`
- Top status bar: green pulsing dot + "Recording active"
- Horizontal stacked bar: 68% green / 24% amber / 8% gray with labels
- Scrollable activity log: 4 timestamped entries with colored dots
- Bottom: "Pause Recording" (outlined) + "View Full Log" (filled blue) buttons

### Screen 2 — Editorial Dashboard (1440×900px)
Component: `src/app/components/Dashboard.tsx`
- Navy left sidebar: NewsTrace logo + nav items (Dashboard, Articles, Policies, Audit Logs, Settings)
- Main area: "Editorial Review Queue" header + search bar + filter dropdown
- 3 stat cards at top: Articles Today / Avg AI Exposure / Pending Review
- Table: 4 article rows with title, author, AI% badge (color-coded), status badge, action buttons
- Use `src/app/components/ui/table.tsx`, `badge.tsx`, `input.tsx`

### Screen 3 — Policy Check Modal (800×600px)
Component: `src/app/components/PolicyModal.tsx`
- Modal overlay with "Pre-Publish Policy Check" title
- Left: checklist of 5 policy items with ✓ (green) or ✗ (red) icons
- Right: Donut chart (Recharts PieChart) showing AI exposure breakdown
- Bottom: "Send for Approval" (blue filled) + "Cancel" (outlined) buttons

### Screen 4 — Transparency Label Collapsed (600×80px)
Component: `src/app/components/TransparencyLabel.tsx`  
(handles both collapsed and expanded via state)
- Slim bar: light gray bg + blue left border accent
- Left: green shield icon + "NewsTrace Verified" bold + separator + "72% Human · 28% AI-Assisted"
- Right: "Details" text in blue + chevron-down icon
- Click toggles to Screen 5

### Screen 5 — Transparency Label Expanded (600×320px)
- Same header row as Screen 4
- Horizontal stacked bar: 72% green / 20% amber / 8% gray + legend
- 2×2 grid of info chips (AI Tools, Editorial Review, Provenance Log, Log Integrity)
- Blue info box: "What does AI-Assisted mean?" explanation
- White card, drop shadow, 8px border radius

## App.tsx Showcase Layout
`src/app/App.tsx` — a scrollable prototype showcase page:
- Navy header: "NewsTrace UI Prototype"
- Each screen presented in a labeled section with a device-frame or neutral background
- Screens displayed at their actual dimensions, centered in their section
- Vertical scroll through all 5 screens

## File Changes

| File | Action |
|---|---|
| `src/styles/fonts.css` | Add Inter Google Fonts import |
| `src/app/App.tsx` | Showcase layout with screen navigator |
| `src/app/components/ExtensionPopup.tsx` | Screen 1 |
| `src/app/components/Dashboard.tsx` | Screen 2 |
| `src/app/components/PolicyModal.tsx` | Screen 3 (includes Recharts donut) |
| `src/app/components/TransparencyLabel.tsx` | Screens 4 & 5 (togglable) |

## Reused Utilities
- `src/app/components/ui/badge.tsx` — AI% and status badges in Dashboard
- `src/app/components/ui/table.tsx` — Article review table in Dashboard
- `src/app/components/ui/input.tsx` — Search bar in Dashboard
- `recharts` (already installed) — PieChart/donut in PolicyModal
- `lucide-react` (already installed) — Shield, ChevronDown, Check, X, Menu icons

## Verification
1. All 5 screens render without errors
2. Dashboard table shows color-coded badges correctly
3. Donut chart renders in the policy modal
4. Transparency label toggles between collapsed/expanded on click
5. Pulsing animation visible on the recording dot in Screen 1
6. Design matches the specified color system throughout

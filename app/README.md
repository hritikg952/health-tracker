# Warm Care Health Tracker ("Teal Care")

A family health management app built with React 19, TypeScript, Vite, and Tailwind CSS 4.

## Current Status

**Phase: Initial scaffold — routing and page shells in place, UI implementation in progress.**

The four core screens have been designed and approved as HTML prototypes (see `AppDesign/`). The React app skeleton is now scaffolded with routing wired up; page components currently render static/dummy data matching the design prototypes. No data layer has been connected yet.

### What's done
- Vite + React 19 + TypeScript project initialized
- Tailwind CSS 4 configured with the custom "Digital Sanctuary" design tokens
- React Router v7 set up with all four routes
- Shared layout components: `Header`, `BottomNav`, `PageShell`
- All four page components scaffolded with static UI:
  - **Family Hub** (`/`) — member carousel, alert card, vitals grid, log vital CTA
  - **Member Dashboard** (`/member/:memberId`) — individual member view
  - **Medical Timeline** (`/member/:memberId/timeline`) — chronological health history
  - **Add Record** (`/member/:memberId/add-record`) — health record entry form
- State management library (Zustand) installed, stores not yet defined

### What's next
- Wire up Zustand stores with real data models
- Implement navigation between pages
- Connect Add Record form to state
- Replace all dummy data with reactive state

## Design System

All UI follows the **"Digital Sanctuary"** aesthetic defined in [`AppDesign/stitch_warm_care_health_tracker_prd/teal_care/DESIGN.md`](../AppDesign/stitch_warm_care_health_tracker_prd/teal_care/DESIGN.md).

Key constraints:
- **Colors**: Primary `#006a63` (Teal), Background `#f4fbf9`, all neutrals tinted with teal
- **Typography**: Fraunces (headlines), Outfit (UI/body), Newsreader (data display)
- **No borders** — use tonal color shifts; **no 90° corners** — min `12px` radius
- **No hard shadows** — ambient only; **gradient CTAs** (teal → mint, 135°)

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 8 | Build tool |
| Tailwind CSS | 4 | Styling |
| React Router | 7 | Client-side routing |
| Zustand | 5 | State management |
| Vitest | 4 | Testing |

## Getting Started

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
AppDesign/                    # Design artefacts (reference only)
├── product_requirements_document.md
└── stitch_warm_care_health_tracker_prd/
    ├── teal_care/DESIGN.md               # Design system spec
    ├── family_hub_teal_care/code.html    # Screen 1 prototype
    ├── member_dashboard_teal_care/code.html
    ├── medical_timeline_teal_care/code.html
    └── add_record_sheet_teal_care/code.html

app/                          # React application
├── src/
│   ├── app/Router.tsx        # Route definitions
│   ├── pages/
│   │   ├── family-hub/
│   │   ├── member-dashboard/
│   │   ├── medical-timeline/
│   │   └── add-record/
│   └── shared/components/layout/
│       ├── Header.tsx
│       ├── BottomNav.tsx
│       └── PageShell.tsx
└── package.json
```

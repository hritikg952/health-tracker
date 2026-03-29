# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Warm Care Health Tracker** ("Teal Care") is a family health management mobile application built with **React Native + Expo**. The project has an active mobile codebase (`mobile/`) targeting iOS and Android. Design references exist as HTML prototypes in `AppDesign/`.

## Repository Structure

```
AppDesign/
├── product_requirements_document.md      # Full PRD with feature scope
└── stitch_warm_care_health_tracker_prd/
    ├── teal_care/DESIGN.md               # Design system specification (authoritative)
    ├── family_hub_teal_care/code.html    # Screen 1: Family dashboard
    ├── member_dashboard_teal_care/code.html  # Screen 2: Individual member view
    ├── medical_timeline_teal_care/code.html  # Screen 3: Medical history timeline
    └── add_record_sheet_teal_care/code.html  # Screen 4: Add record form
mobile/                                   # React Native + Expo app (primary codebase)
├── App.tsx                               # Root component
├── index.ts                              # Entry point
├── app.json                              # Expo config (bundle ID: com.tealcare.healthtracker)
├── src/                                  # Source code
├── navigation/                           # React Navigation setup
├── pages/                                # Screen components
├── shared/                               # Shared components/utilities
└── theme/                                # Design tokens and theme config
```

The HTML prototypes can be opened directly in a browser — no build step required. They serve as the visual and structural reference for implementation.

## Design System (Critical Constraints)

All implementation must follow the "Digital Sanctuary" aesthetic defined in [AppDesign/stitch_warm_care_health_tracker_prd/teal_care/DESIGN.md](AppDesign/stitch_warm_care_health_tracker_prd/teal_care/DESIGN.md). Key rules:

### Colors (Material Design 3 tokens)
- Primary: `#006a63` (Teal) / Container: `#4db6ac`
- Secondary: `#286b33` (Green) / Tertiary: `#94492d` (Warm Orange)
- Background: `#f4fbf9` / On-surface text: `#161d1c` (never pure `#000000`)
- All neutrals must be tinted with a hint of teal

### Typography
- Headlines/Display: **Fraunces** (serif, 600–700 weight) — editorial voice
- Body/Labels/UI: **Outfit** (sans-serif, 400–700 weight) — functional clarity
- Data display: **Newsreader**
- Icons: Material Symbols Outlined (Google Fonts)

### Hard Design Rules
1. **No-Line Rule** — no `1px solid` borders; use tonal color shifts instead
2. **No 90-degree corners** — minimum `12px` (0.5rem) radius everywhere; buttons use `3rem`
3. **No hard drop shadows** — use ambient shadows only (40–60px blur, 4–6% opacity)
4. **Filled inputs only** — no outlined input variants; active state uses a 2px primary "glow" bar
5. **No horizontal dividers** in lists/cards — use spacing or alternating backgrounds
6. **Glass-morphism** limited to floating nav bars (15% opacity, 20px backdrop blur)
7. **Gradient CTAs**: teal → mint at 135° angle
8. Signature component: **"Vitals Overlap"** — metric values positioned partially outside their cards

### Tailwind Configuration (prototypes only)
The HTML prototypes use a custom Tailwind config with:
- `darkMode: 'class'`
- Custom color tokens matching the MD3 palette above
- Custom border-radius: `DEFAULT: 1rem`, `lg: 2rem`, `xl: 3rem`
- Plugins: `@tailwindcss/container-queries`, `@tailwindcss/forms`

In the React Native app, use StyleSheet / inline styles with the same token values. Do not use Tailwind in the mobile codebase.

## Four Core Screens

| Screen | File | Purpose |
|--------|------|---------|
| Family Hub | `family_hub_teal_care/code.html` | Entry point; all family members' health overviews |
| Member Dashboard | `member_dashboard_teal_care/code.html` | Personalized metrics for one member |
| Medical Timeline | `medical_timeline_teal_care/code.html` | Chronological health event history |
| Add Record Sheet | `add_record_sheet_teal_care/code.html` | Data entry form for new health records |

## Implementation Notes

The application is **React Native + Expo only** — there is no web app. All new work goes in `mobile/`.

- Run with `expo start` from the `mobile/` directory
- Fonts are loaded via `@expo-google-fonts` (Fraunces, Outfit, Newsreader already installed)
- Icons via `@expo/vector-icons`
- Navigation via React Navigation (bottom tabs + native stack)
- State management via Zustand
- Refer to the HTML prototypes in `AppDesign/` for visual reference when building screens
- Follow the PRD at [AppDesign/product_requirements_document.md](AppDesign/product_requirements_document.md) for feature requirements

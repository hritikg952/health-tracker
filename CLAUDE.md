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
server/                                   # FastAPI + PostgreSQL backend
├── main.py                               # App entry point, lifespan, router registration
├── pyproject.toml                        # Project metadata and dependencies (managed by uv)
├── .env                                  # Local secrets — git-ignored
├── .env.example                          # Template for environment variables
├── alembic.ini                           # Alembic configuration
├── alembic/
│   └── versions/                         # One migration file per schema change
└── app/
    ├── config.py                         # Pydantic Settings — reads DATABASE_URL from .env
    ├── database.py                       # Async engine, session factory, DB type alias
    ├── models/                           # SQLAlchemy ORM models — one file per domain
    │   └── users.py                      # User model
    ├── schemas/                          # Pydantic request/response schemas — one file per domain
    │   └── users.py                      # UserCreate, UserUpdate, UserResponse
    └── routers/                          # FastAPI route handlers — one file per domain
        └── users.py                      # CRUD endpoints for /users
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

## Server (FastAPI + PostgreSQL)

**Stack:** FastAPI 0.135+, Python 3.14, SQLAlchemy 2.x (async), asyncpg, Alembic, Pydantic Settings, uv

### Running the server
```bash
cd server
uv run uvicorn main:app --reload
# Interactive API docs → http://localhost:8000/docs
```

### Environment variables
Create `server/.env` (see `.env.example`):
```
DATABASE_URL=postgresql+asyncpg://postgres:<password>@localhost:5432/healthtracker
```
> The URL **must** use the `postgresql+asyncpg://` scheme — the plain `postgresql://` scheme only works with the sync driver.

### Database (Alembic migrations)
- Always run `alembic upgrade head` after pulling to apply pending migrations
- After editing a model, run `alembic revision --autogenerate -m "description"` to generate a new migration — verify the generated file before applying
- All `alembic` commands must be run from the `server/` directory

### Code conventions
- **One file per domain** in `models/`, `schemas/`, `routers/` — e.g. `users.py`; future domains follow the same pattern (`family_group.py`, `health_records.py`)
- `models/__init__.py` **must re-export all models** — Alembic scans `Base.metadata` at autogenerate time; models not imported here will be invisible to migrations
- **DB session** — inject via `db: DB` type alias (defined in `database.py`); never write `db: AsyncSession = Depends(get_db)` directly in route signatures
- **Soft deletes** — `DELETE` routes set `is_active = False`; rows are never hard-deleted
- **After inserts** — always call `db.flush()` then `db.refresh(obj)` before returning, so server-generated values (`created_at`, UUID) are populated on the object

### Implementation status

| Domain | Table(s) | Endpoints | Status |
|--------|----------|-----------|--------|
| Users | `users` | `POST /users` `GET /users` `GET /users/{id}` `PATCH /users/{id}` `DELETE /users/{id}` | ✅ Done |
| Auth (OTP + JWT) | `otp_verifications` `refresh_tokens` | `/auth/send-otp` `/auth/verify-otp` `/auth/refresh` `/auth/logout` | 🔜 Next |
| Family Groups | `family_groups` `family_members` | TBD | 🔜 Planned |
| Health Records | `health_records` | TBD | 🔜 Planned |

### Mobile ↔ Server URLs (development)
| Client | Base URL |
|--------|----------|
| iOS Simulator | `http://localhost:8000` |
| Android Emulator | `http://10.0.2.2:8000` |
| Physical device | `http://<LAN-IP>:8000` — set via `EXPO_PUBLIC_API_URL` in mobile `.env` |

---

## Implementation Notes

The application is **React Native + Expo only** — there is no web app. All new work goes in `mobile/`.

- Run with `expo start` from the `mobile/` directory
- Fonts are loaded via `@expo-google-fonts` (Fraunces, Outfit, Newsreader already installed)
- Icons via `@expo/vector-icons`
- Navigation via React Navigation (bottom tabs + native stack)
- State management via Zustand
- Refer to the HTML prototypes in `AppDesign/` for visual reference when building screens
- Follow the PRD at [AppDesign/product_requirements_document.md](AppDesign/product_requirements_document.md) for feature requirements

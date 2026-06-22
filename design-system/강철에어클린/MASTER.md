# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** 강철에어클린
**Generated:** 2026-06-23 08:18:35
**Category:** Home Services (Plumber/Electrician)

---

## Global Rules

### Color Palette

> **APPROVED DIRECTION (overrides the generator's default navy+gold):**
> Brand = 강철 (steel). Deep steel/graphite primary + ONE clean-air cyan/teal accent.
> Approved by client 2026-06-23. Tokens defined once in `client/src/index.css` —
> never hardcode raw hex in components.

| Role | Hex | CSS Variable | Use |
|------|-----|--------------|-----|
| Foreground (ink) | `#0B1620` | `--foreground` / `--ink` | Body + heading text (17:1) |
| Primary (steel) | `#14293A` | `--primary` | Primary CTA, dark bands (14.9:1 w/ white) |
| Primary-600 | `#1D3A4F` | `--primary-600` | Hovers, gradients |
| Primary-700 | `#0F1E2B` | `--primary-700` | CTA hover |
| Accent (cyan) | `#06B6D4` | `--accent` | Highlights, slider handle, focus ring — NOT a text button (2.4:1) |
| Accent-2 (teal) | `#0D9488` | `--accent-2` | Icons / gradients / borders only (graphical, 3:1) |
| Accent-ink (teal) | `#0A7268` | `--accent-ink` | AA-safe teal for **small text** on light (5.5:1) |
| Kakao | `#FEE500` | `--kakao` | 카카오톡 button ONLY (brand-correct, `#1A1A00` text) |
| Background | `#F6F9FB` | `--background` | Cool off-white |
| Surface | `#FFFFFF` | `--card` | Cards |
| Secondary | `#EAF1F6` | `--secondary` | Light steel tint sections |
| Muted text | `#566472` | `--muted-foreground` | Sub copy (5.7:1 on bg) |
| Border | `#DCE5EC` | `--border` | Hairlines |
| Destructive | `#DC2626` | `--destructive` | Form errors |
| Ring | `#06B6D4` | `--ring` | Focus outline |

**Color Notes:** Steel (trust/authority) + clean-air cyan (energy). Cyan stays a
highlight; the primary action stays steel for contrast + confidence. All
foreground/background text pairs verified ≥4.5:1 (AA); graphical accents ≥3:1.

### Typography

- **Family:** Pretendard Variable (Korean + Latin, single cohesive family)
- **Why:** de-facto premium Korean UI face (Toss/당근 tier); never reads as translated. Tabular figures (`.tnum`) for stats/prices.
- **Scale (mobile→desktop):** Hero 32→56 (800, -0.02em) · H2 24→40 (700) · Lead 16→18 (500) · Body 16/1.65 (400) · Eyebrow 13 (600, +0.08em) · Stat 40→64 (800, tabular)

**CSS Import (in `client/index.html` `<head>`):**
```html
<link rel="stylesheet" as="style" crossorigin
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #A16207;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #0F172A;
  border: 2px solid #0F172A;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #F8FAFC;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #0F172A;
  outline: none;
  box-shadow: 0 0 0 3px #0F172A20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Trust & Authority

**Keywords:** Certificates/badges displayed, expert credentials, case studies with metrics, before/after comparisons, industry recognition, security badges

**Best For:** Healthcare/medical landing pages, financial services, enterprise software, premium/luxury products, legal services

**Key Effects:** Badge hover effects, metric pulse animations, certificate carousel, smooth stat reveal

### Page Pattern

**Pattern Name:** Trust & Authority + Conversion

- **Conversion Strategy:** Security badges. Case studies. Transparent pricing. Low-friction form.
- **CTA Placement:** Contact Sales / Get Quote (primary) + Nav
- **Section Order:** 1. Hero (mission/credibility), 2. Proof (logos, certs, stats), 3. Solution overview, 4. Clear CTA path

---

## Anti-Patterns (Do NOT Use)

- ❌ Hidden contact info
- ❌ No certifications

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile

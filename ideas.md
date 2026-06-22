# 강철에어클린 Design System

## Design Philosophy: Heavy Professional Black with Mint Accent

**Chosen Approach:** Premium, minimalist service landing with a strong black-based foundation and strategic mint accents. The design reflects the brand's core values of **Trust · Expertise · Cleanliness** through precise typography, generous whitespace, and smooth micro-interactions.

### Design Movement
Bauhaus-inspired minimalism meets contemporary Korean premium service design—clean geometry, functional hierarchy, and purposeful use of negative space. Think: high-end architectural firms, luxury appliance brands, and professional service providers.

### Core Principles
1. **Black as Authority:** ~85% black (#0F0F10) establishes trust, professionalism, and visual weight—echoing the work uniform and technical expertise.
2. **Mint as Action:** ~5% mint (#3CB9A6) appears exclusively on CTAs and micro-accents, creating visual tension and guiding user attention without overwhelming.
3. **Whitespace as Clarity:** ~10% white (#F6F7F8) provides breathing room and ensures readability; generous margins between sections signal premium quality.
4. **Sharp Precision:** Minimal rounded corners (0-2px max) reinforce technical expertise and modern minimalism; no soft, friendly curves.

### Color Philosophy
- **Primary: Black (#0F0F10):** Conveys expertise, cleanliness, and professionalism. Used for text, backgrounds, and structural elements.
- **Accent: Mint (#3CB9A6):** Fresh, clean, and trustworthy. Reserved for call-to-action buttons, hover states, and small visual highlights. Symbolizes the "clean air" outcome.
- **Background: Off-White (#F6F7F8):** Neutral canvas that prevents eye strain and emphasizes content. Subtle warmth (not pure white) adds refinement.
- **Emotional Intent:** Black = competence and reliability; Mint = freshness and cleanliness; White = clarity and purity.

### Layout Paradigm
- **Hero:** Full-screen, dark background, centered slogan with two prominent CTAs. Strong visual anchor.
- **Sections:** Alternating dark/light backgrounds to create visual rhythm and prevent monotony.
- **Before & After:** Side-by-side comparison slider—the visual centerpiece that proves effectiveness.
- **Process Steps:** Horizontal card layout with icons, emphasizing the 4-step methodology.
- **Asymmetric Spacing:** Sections use varied padding and margin ratios (not uniform grids) to feel intentional and crafted.

### Signature Elements
1. **Mint CTA Buttons:** Bold, rectangular, no shadow—clean and direct. Hover state: slightly darker mint with subtle scale.
2. **Process Step Cards:** Dark background with mint left border accent (2-3px). Icon + title + description in clean hierarchy.
3. **Before & After Comparison:** High-contrast imagery with subtle divider line; smooth slider interaction.

### Interaction Philosophy
- **Scroll Animations:** Sections fade in and slide up gently (200-300ms) as they enter viewport. No jarring or excessive motion.
- **Button Interactions:** Buttons respond immediately to clicks with a subtle scale (0.97) and color shift. Hover states are understated but clear.
- **Sticky Mobile Bar:** Always-visible CTA bar at bottom on mobile (height: 60px) with two buttons side-by-side, ensuring accessibility without intrusion.
- **Smooth Transitions:** All state changes use cubic-bezier(0.23, 1, 0.32, 1) for snappy, professional feel.

### Animation Guidelines
- **Entrance Animations:** Sections fade in + slide up 20px over 300ms on scroll (staggered by 50ms for grouped elements).
- **Button Hover:** Scale to 1.02 with color shift, 150ms ease-out.
- **Button Press:** Scale to 0.97, 100ms ease-out.
- **Mobile Sticky Bar:** Slides up from bottom when scrolling down, slides down when scrolling up (optional, for polish).
- **Respect prefers-reduced-motion:** All animations gated behind media query; static fallback for accessibility.

### Typography System
- **Font Stack:** Pretendard for Korean text (modern, clean, widely available in Korea); Inter or system sans-serif for English.
- **Hierarchy:**
  - **Hero Slogan (H1):** 48-56px, bold (700), black, line-height 1.2. Commanding presence.
  - **Section Titles (H2):** 32-40px, bold (700), black, line-height 1.3.
  - **Subheadings (H3):** 20-24px, semibold (600), black.
  - **Body Text:** 14-16px, regular (400), dark gray (#2A2A2A), line-height 1.6.
  - **CTA Text:** 14-16px, semibold (600), white on mint background.
  - **Captions:** 12-13px, regular (400), medium gray (#666666).
- **Letter Spacing:** Tight on headings (-0.5px), normal on body (0px).

### Brand Essence
**One-liner:** "Steel-grade expertise meets pristine cleanliness—full-disassembly aircon deep cleaning for Korean homes and businesses."

**Personality Adjectives:** 
1. Trustworthy (professional, reliable, expert)
2. Precise (technical, methodical, detail-oriented)
3. Clean (fresh, pure, thorough)

### Brand Voice
- **Headlines:** Direct, benefit-focused, confident. Example: "완전분해 청소로 에어컨을 새것처럼" (Full disassembly cleaning restores your aircon like new).
- **CTAs:** Action-oriented, urgent but not pushy. Example: "지금 상담받기" (Get consultation now) or "전화로 견적받기" (Get quote by phone).
- **Microcopy:** Conversational, reassuring. Example: "저희 기술진이 현장에서 모든 작업을 완료합니다" (Our technicians complete all work on-site).
- **Ban:** No generic filler like "환영합니다" (Welcome) or "저희 서비스를 선택해주세요" (Choose our service). Every word earns its place.

### Wordmark & Logo
**Logo Concept:** A bold, geometric symbol combining:
- A stylized **aircon unit outline** (sharp, angular, no curves)
- A **mint accent line** cutting through it diagonally, symbolizing the cleaning/sterilization process
- Transparent background, scalable to favicon size
- Never use the brand name in default font; the symbol stands alone

### Signature Brand Color
**Mint (#3CB9A6):** Unmistakably 강철에어클린. Fresh, clean, trustworthy. Used sparingly to maximize impact.

---

## Style Decisions (Post-Review Amendments)
*(To be updated after visual review if needed)*


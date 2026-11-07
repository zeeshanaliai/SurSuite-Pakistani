---
name: Clinical Precision System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#42474f'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#727780'
  outline-variant: '#c1c7d0'
  surface-tint: '#296195'
  primary: '#003358'
  on-primary: '#ffffff'
  primary-container: '#004a7c'
  on-primary-container: '#87baf3'
  inverse-primary: '#9ccaff'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#8cf3f3'
  on-secondary-container: '#007070'
  tertiary: '#1f3347'
  on-tertiary: '#ffffff'
  tertiary-container: '#36495f'
  on-tertiary-container: '#a4b8d2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e4ff'
  primary-fixed-dim: '#9ccaff'
  on-primary-fixed: '#001d35'
  on-primary-fixed-variant: '#00497b'
  secondary-fixed: '#8cf3f3'
  secondary-fixed-dim: '#6fd7d6'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#b4c8e2'
  on-tertiary-fixed: '#071d30'
  on-tertiary-fixed-variant: '#35485e'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  technical-data:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 80px
---

## Brand & Style

The design system is engineered for the high-stakes environment of medical procurement, specifically tailored for a premier surgical instrument brand. The brand personality is **authoritative, sterile, and uncompromisingly precise**. It bridges the heritage of Sialkot’s craftsmanship with modern surgical standards.

The visual style is **Systematic Minimalism**. Every pixel serves a functional purpose, mirroring the utility of the instruments themselves. By utilizing a "Safe" visual identity, the system eliminates decorative friction, ensuring that surgeons and procurement officers can navigate complex technical specifications without distraction. The emotional response is one of absolute reliability—evoking the cleanliness of an operating theater and the confidence of professional-grade steel.

## Colors

The color palette is rooted in the "Deep Medical Blue" (#004A7C), a shade that commands trust and professional authority. This is complemented by "Clinical Teal" (#008B8B), used strategically for primary actions to maintain a high-contrast, recognizable interactive layer.

"Surgical Steel Silver" (#B0C4DE) acts as a structural accent, used for dividers, borders, and disabled states to reinforce the physical materiality of the product line. The background utilizes a "Sterile White" and a very faint off-white (#F8FAFC) to create a multi-layered, organized environment that feels hygienic and expansive. Success states utilize "Mint Green" (#3CB371), signaling safety and certification.

## Typography

This design system exclusively employs **Inter** for its exceptional legibility in technical contexts. The typographic hierarchy is strictly functional, emphasizing clarity over expression. 

- **Headlines:** Use semi-bold weights with slight negative letter-spacing to create a "dense" and authoritative feel for product categories.
- **Body Text:** Optimized for reading long-form surgical specifications and sterilization instructions.
- **Labels:** Uppercase labels with increased tracking are used for "Made in Sialkot" markers and ISO certifications to denote official status.
- **Mobile Scaling:** Headline sizes scale down by a factor of 0.8 on mobile devices to prevent excessive wrapping while maintaining the rigid grid structure.

## Layout & Spacing

The layout philosophy follows a **Fixed-Width Systematic Grid** on desktop (1280px max-width) and a fluid 4-column grid on mobile. 

The rhythm is based on a **4px baseline**, ensuring that even small technical data tables remain perfectly aligned. Large "Sterile" whitespace (40px+) is used between major sections to prevent cognitive overload. Product grids utilize 24px gutters to allow each instrument's silhouette to be viewed without visual interference. On mobile, margins are reduced to 16px to maximize the real estate for detailed product photography.

## Elevation & Depth

To maintain the "Clinical" feel, depth is communicated through **Low-Contrast Outlines** and **Tonal Layering** rather than heavy shadows.

- **Level 0 (Base):** Sterile White (#FFFFFF).
- **Level 1 (Cards/Inputs):** Defined by a 1px border in Surgical Steel (#B0C4DE).
- **Level 2 (Hover/Active):** A subtle, neutral-tinted ambient shadow (0px 4px 12px rgba(0, 74, 124, 0.05)).
- **Level 3 (Modals/Overlays):** High-diffusion shadows with a Deep Blue tint to maintain brand continuity even in elevation.

Avoid glassmorphism or vibrant blurs, as they compromise the perception of clinical precision and clarity.

## Shapes

The shape language is **"Soft-Technical."** A roundedness level of `1` (0.25rem) is applied to buttons, input fields, and cards. This provides just enough approachable softness to prevent the UI from feeling sharp or aggressive, while maintaining the structured, rectangular discipline required for a professional medical tool. 

Iconography should follow a consistent 2px stroke weight with the same 4px corner radius to match the component architecture.

## Components

### Buttons
- **Primary:** Solid Clinical Teal (#008B8B) with white text. High-contrast and clear.
- **Secondary:** Outlined 1px Surgical Steel (#B0C4DE) with Deep Medical Blue text for administrative tasks.
- **State Change:** Subtle background darkening on hover; 2px focus ring in Primary Blue for accessibility.

### Inputs & Selects
- Fields use a white background with a 1px #B0C4DE border.
- On focus, the border transitions to Deep Medical Blue.
- Labels sit strictly above the input field in `label-md` for maximum legibility in technical forms.

### Cards & Lists
- Product cards feature a clean 1px border.
- Backgrounds for product shots must be a consistent, neutral light gray or clinical white.
- Lists for technical specifications (e.g., "Blade Length," "Material Grade") use Zebra-striping in #F8FAFC for better horizontal tracking.

### Trust Markers
- **Sialkot Quality Seal:** A circular badge with a #004A7C border and centered "Made in Sialkot" text.
- **Certifications:** Icons for ISO 13485 and CE Marking should be presented in monochrome neutral to avoid competing with primary CTAs.
- **Payment Icons:** Localized icons (Easypaisa, JazzCash) should be displayed in a consistent grayscale format in the footer to maintain the professional aesthetic.
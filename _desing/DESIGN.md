---
name: S&S Core
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
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
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system focuses on precision, reliability, and clarity for high-utility inventory and sales management. The brand personality is authoritative yet accessible, designed to evoke a sense of organized efficiency. 

The aesthetic follows a **Modern Corporate** approach with a heavy emphasis on **Minimalism**. It utilizes generous whitespace to reduce cognitive load during complex data entry tasks. The interface is structured to feel "light" and airy while maintaining the structural integrity required for professional enterprise software. Visual hierarchy is established through meticulous typography and subtle tonal shifts rather than decorative elements.

## Colors
The palette is anchored by a high-contrast relationship between deep navy and bright sky blue.

- **Primary (#0f172a):** Used for core branding, navigation sidebars, and primary headings to establish authority and grounding.
- **Secondary (#3b82f6):** Reserved for action-oriented elements like primary buttons, active states, and progress indicators.
- **Background (#f8fafc):** A very light cool gray is used for the application canvas to reduce eye strain compared to pure white, while keeping the interface feeling fresh.
- **Surface (White):** Pure white is used exclusively for cards and input fields to make them "pop" against the light gray background.

## Typography
The design system utilizes **Inter** across all levels to ensure maximum legibility and a systematic, utilitarian feel. 

Headlines use a tighter letter-spacing and heavier weights to provide a strong visual anchor for page sections. Body text maintains a generous line-height to ensure readability when viewing dense tables or inventory lists. Labels and small utility text use medium-to-bold weights to remain legible even at reduced scales.

## Layout & Spacing
The system employs a **Fluid Grid** model with a 12-column structure for desktop. 

- **Desktop (1440px+):** 32px outer margins, 24px gutters. Content is typically organized in cards spanning 3, 4, 6, or 12 columns.
- **Tablet (768px - 1439px):** 24px margins, 16px gutters. Sidebars collapse into icons or a hamburger menu.
- **Mobile (<767px):** 16px margins. Layout stacks vertically into a single column.

Spacing follows a strict 4px/8px baseline rhythm to maintain vertical alignment throughout the UI.

## Elevation & Depth
The design system uses **Tonal Layers** combined with **Ambient Shadows** to create a sense of depth without clutter.

1.  **Level 0 (Base):** The background color (#f8fafc).
2.  **Level 1 (Surface):** White cards with a very soft, diffused shadow (0px 1px 3px rgba(15, 23, 42, 0.05)).
3.  **Level 2 (Hover/Interaction):** Slightly more pronounced shadow (0px 10px 15px -3px rgba(15, 23, 42, 0.1)) to indicate interactivity.
4.  **Level 3 (Overlay/Modals):** High-diffusion shadow (0px 20px 25px -5px rgba(15, 23, 42, 0.15)) to separate critical actions from the main canvas.

Avoid using borders for separation; rely on these subtle shadows and the contrast between the white surface and gray background.

## Shapes
The shape language is consistently **Rounded**, communicating a modern and approachable professional environment. 

- **Standard Elements:** Buttons, input fields, and tags use 0.5rem (8px) corners.
- **Large Containers:** Dashboard cards and modals use 1rem (16px) corners.
- **Special Elements:** Search bars and status badges may use a pill-shape (full rounding) to differentiate them from functional inputs.

## Components
- **Buttons:** Primary buttons use the Sky Blue (#3b82f6) with white text. Secondary buttons use a light gray ghost style or a Navy Blue outline. Transitions should be a fast 150ms ease-in-out.
- **Cards:** The primary container for information. Always pure white with 1rem rounded corners and Level 1 elevation. Include a 24px internal padding (spacing-md).
- **Navigation:** A persistent sidebar in Deep Navy (#0f172a) for desktop, providing high contrast against the light content area. Active states should be indicated by a Sky Blue left-border highlight.
- **Inputs:** Clean, white backgrounds with a 1px border in #e2e8f0. On focus, the border changes to Sky Blue (#3b82f6) with a soft outer glow.
- **Data Tables:** Use alternating row highlights (Zebra striping) using #f8fafc for every second row. Headers should be sticky with a small bottom border in #e2e8f0.
- **Chips/Badges:** Use low-saturation background tints for status (e.g., light green for "In Stock") with high-saturation text for readability.
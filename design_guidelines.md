# Design Guidelines: Premium Portfolio Website

## Design Approach
**Reference-Based**: Mozilla Firefox Welcome Page (https://www.mozilla.org/en-US/firefox/welcome/26/) - modern, bold, premium aesthetic with glassmorphism and gradient treatments.

## Core Design Principles
- **Premium & Modern**: Sophisticated visual language with depth through glassmorphism and subtle glows
- **Bold & Confident**: Large typography, strong visual hierarchy, high-contrast elements
- **Smooth & Delightful**: Subtle animations that enhance without distracting
- **Accessible First**: Semantic structure, keyboard navigation, focus indicators, ARIA labels

---

## Color System

### Base Palette
- **Background**: Midnight navy (#0b1220) - deep, premium base
- **Accent Primary**: Indigo gradient - vibrant, modern energy
- **Accent Secondary**: Cyan highlights - tech-forward, crisp
- **CTA/Action**: Warm peach tones - inviting, high-conversion
- **Text**: High-contrast whites/grays for readability against dark backgrounds

### Theme Support
- Dark mode (default): Use base palette as specified
- Light mode: Invert to light backgrounds with adjusted accent saturation
- System preference detection with manual toggle override

---

## Typography

### Hierarchy
- **Hero Headlines**: Extra large (4xl-6xl mobile, 6xl-8xl desktop), bold weight (700-800), tight line-height
- **Section Headers**: Large (3xl-4xl), semi-bold (600-700)
- **Body Text**: Base to lg sizes, regular weight (400), comfortable line-height (1.6-1.8)
- **UI Elements**: Small to base, medium weight (500)

### Style
- Modern sans-serif with geometric proportions
- High contrast between header and body weights
- Generous letter-spacing on headlines for impact

---

## Layout System

### Spacing Scale
Primary units: **4, 8, 12, 16, 24** (Tailwind: p-4, gap-8, mb-12, py-16, mt-24)
- Micro spacing: 4-8 (component internals)
- Component spacing: 12-16 (cards, sections)
- Section spacing: 24-32 (major page divisions)

### Grid Approach
- **Bento Grid for Projects**: Asymmetric, masonry-style layout with varied card sizes
- **Standard Grid**: 12-column base for consistent alignment
- **Breakpoints**: Mobile-first responsive (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Max-width containers**: 1280px for optimal readability

---

## Component Library

### Cards (Glassmorphism Treatment)
- Semi-transparent backgrounds with backdrop blur
- Subtle border glow (1px gradient border)
- Soft drop shadow with colored glow
- Padding: 6-8 on mobile, 8-12 on desktop
- Border radius: rounded-xl to rounded-2xl

### Buttons
- **Primary CTA**: Peach gradient background, white text, medium padding (px-6 py-3), rounded-lg
- **Secondary**: Transparent with border glow, accent text, same padding
- **Ghost**: Text only with subtle hover glow
- Hover states: Subtle scale (1.02) + increased glow intensity

### Navigation
- Fixed header with glassmorphism backdrop blur
- Horizontal menu (desktop), hamburger (mobile)
- Theme toggle icon (sun/moon) with smooth transition
- Active state: Underline or glow accent

### Forms
- Input fields: Dark backgrounds with subtle border, focus glow in accent color
- Validation: Inline error states with red accent, success with cyan/green
- Labels: Above inputs, small caps or medium weight
- Buttons: Primary CTA style for submit

### Project Cards (Bento Grid)
- Featured projects: Larger cards (2x2 grid units)
- Standard projects: Single grid units
- Image preview with subtle scale on hover
- Tech stack chips: Small, rounded-full, gradient backgrounds
- GitHub/Preview links: Icon buttons with glass effect

### Resume Embed
- Full-width iframe or styled viewer component
- Download button: Prominent with icon
- Fallback for PDF rendering issues

---

## Visual Effects

### Glassmorphism
- Background: rgba values with 10-20% opacity
- Backdrop filter: blur(12px) to blur(16px)
- Border: 1px solid with gradient or low-opacity white

### Glows & Shadows
- Soft box shadows with colored tint matching accent
- CSS: `box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15)`
- Hover enhancement: Increase shadow spread and opacity

### Animations (Framer Motion)
- **Hero entrance**: Fade in + slide up (y: 20 → 0), stagger children
- **Scroll reveals**: Fade in as elements enter viewport (once, not repeated)
- **Project cards**: Subtle scale + glow on hover (scale: 1.02, duration: 0.2s)
- **Theme toggle**: Smooth rotation (180deg) + color transition
- **Parallax**: Very subtle background shift on scroll (optional, 0.3-0.5 factor)

**Animation Budget**: Keep minimal - hero, cards, and scroll reveals only. Avoid excessive motion.

---

## Page-Specific Layouts

### Home (/)
- **Hero**: Full viewport height, centered content, name + subtitle + dual CTAs ("View Resume" + "Contact Me")
- **Featured Projects Preview**: 3-4 cards in bento grid below hero
- Large hero image or gradient background with animated particles/gradients (optional)

### About (/about)
- **Bio Section**: Two-column (desktop) - portrait/visual left, text right
- **Skills**: Chip grid with gradient backgrounds
- **Experience Timeline**: Vertical timeline with company logos, roles, dates, bullet achievements
- **Resume Embed**: Full-width viewer at bottom

### Projects (/projects)
- **Bento Grid**: Masonry layout with varied card sizes
- **Filters/Tabs** (optional): Sort by stack or category
- **Modal/Detail View**: Click "Learn More" for expanded project info with full screenshot, description, tech stack, links

### Contact (/contact)
- **Form**: Centered, max-width 600px, glassmorphism card
- **Fields**: Name (optional), Email (required + validated), Message (textarea, min 20 chars)
- **Validation**: Real-time inline feedback
- **Toast Notifications**: Success/error states post-submission

---

## Images

### Hero Image
**Yes - Large hero image or animated gradient background**
- Position: Full-width behind hero content
- Treatment: Subtle overlay gradient for text readability
- Alternative: Animated gradient mesh or particle system

### Project Screenshots
- Position: Top of each project card
- Aspect ratio: 16:9 or 4:3
- Fallback: Gradient placeholder with project icon if no screenshot

### About Page
- Optional portrait/headshot in bio section
- Company logos in experience timeline (small, grayscale with accent on hover)

---

## Accessibility Checklist
- Semantic HTML5 elements (header, nav, main, footer, article)
- ARIA labels on form inputs and icon buttons
- Keyboard focus styles: 2px outline with accent color, offset
- Skip-to-content link for keyboard users
- Color contrast: WCAG AA minimum (4.5:1 for body text, 3:1 for UI)
- Form validation: Screen reader announcements for errors/success

---

## Responsive Behavior
- **Mobile (<768px)**: Single column, stacked nav, full-width cards
- **Tablet (768-1024px)**: Two-column grids, horizontal nav
- **Desktop (>1024px)**: Full bento grid, multi-column layouts, parallax effects
- Touch targets: Minimum 44x44px on mobile
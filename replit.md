# Portfolio Website - Mohammed Faseeullah

## Overview
A premium, production-ready portfolio website featuring a Mozilla Firefox-inspired design with glassmorphism effects, dark/light theme toggle, contact form with email integration, and dynamic project showcase.

## Tech Stack
- **Frontend**: React 18 with TypeScript, Wouter (routing), TanStack Query
- **Backend**: Express.js with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Email**: Nodemailer for contact form submissions
- **Build Tool**: Vite

## Project Structure
```
client/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ContactForm.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectsPreview.tsx
│   │   ├── ResumeEmbed.tsx
│   │   ├── SkillChip.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── constants.ts # Portfolio content data
│   └── App.tsx          # Main app with routing
server/
├── routes.ts            # API endpoints
├── email.ts             # Email service
└── index.ts             # Server entry point
shared/
└── schema.ts            # Shared types and validation
```

## Design System
- **Color Palette**: Midnight navy background, indigo gradients, cyan highlights, warm peach CTAs
- **Typography**: Inter for body, Space Grotesk for headings
- **Theme**: Supports dark/light/system modes with localStorage persistence

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "string (optional)",
  "email": "string (required)",
  "message": "string (min 20 chars, required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

## Environment Variables (Optional)
For email functionality to work in production, configure:
- `SMTP_HOST` - SMTP server hostname
- `SMTP_PORT` - SMTP port (default: 587)
- `SMTP_USER` - SMTP username
- `SMTP_PASS` - SMTP password
- `CONTACT_EMAIL` - Email address to receive contact form submissions

Without SMTP configuration, the contact form operates in simulation mode (logs to console).

## Running the Project
The application runs on port 5000 with:
```bash
npm run dev
```

## Key Features
1. **Responsive Design**: Mobile-first with breakpoints for tablet and desktop
2. **Theme Toggle**: Dark/light/system theme support
3. **Contact Form**: Validated form with email integration
4. **Project Showcase**: Filterable project grid with tech stack badges
5. **Experience Timeline**: Alternating timeline for work history
6. **Resume Viewer**: PDF embed with download option
7. **Glassmorphism Effects**: Frosted glass UI elements
8. **Smooth Animations**: Fade-in, slide, and glow effects

## Customization
Edit `client/src/data/constants.ts` to update:
- Personal information
- Project list
- Skills
- Work experience

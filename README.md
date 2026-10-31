# BUCKEYE – DESIGN & CONSULTING

> **Creative Thinking. Strategic Execution. Measurable Growth.**  
> An internationally art-directed, authentic agency web platform for BUCKEYE – DESIGN & CONSULTING.

---

## 🏛️ Overview

BUCKEYE is a premier branding, commercial advertising, and strategic consulting atelier based in Indiranagar, Bengaluru. This platform embodies the **Editorial Atelier** aesthetic—drawing inspiration from Swiss modernist design rigor and global creative agencies (*Pentagram, Collins, Wieden+Kennedy*).

### Core Highlights:
- **Warm Porcelain Canvas (`#FBF9F6`)**: Subtle, tactile gallery environment.
- **Typographic System**: High-fashion serif `Bodoni Moda` juxtaposed with crisp Swiss grotesk `Manrope`.
- **Asymmetric Editorial Layouts**: Broadsheet spreads with varied aspect ratios (16:9 cinematic widescreen, 4:5 portraits, 1:1 tactile packaging).
- **Flagship Campus Initiative**: **Tech Career Launchpad** (₹499/student) tailored for Bengaluru colleges.
- **Practical Apprenticeship**: Final-year student internship programme with transparent disclosures.
- **Six Distinct Practice Disciplines**: Full-spectrum coverage from brand strategy to high-velocity performance marketing.

---

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Bundler & Tooling**: Vite 6
- **Styling**: Tailwind CSS + Custom Vanilla CSS tokens
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Design Paradigm**: Sharp 0px architectural geometry, high-contrast typography, restrained crimson accents

---

## 📂 Project Architecture

```
buckeye/
├── public/
│   └── assets/                     # Photographic artworks, logos, and badges
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Fixed high-contrast porcelain navigation bar
│   │   ├── Footer.tsx              # Architectural Swiss directory footer
│   │   ├── Logo.tsx                # Cropped logo badge with vector SVG fallbacks
│   │   ├── MobileBottomNav.tsx     # Mobile floating navigation bar
│   │   └── ConsultationModal.tsx   # Interactive consultation booking modal
│   ├── data/
│   │   └── siteData.ts             # Centralized agency data, workshops & coordinates
│   ├── pages/
│   │   ├── HomePage.tsx            # Editorial magazine cover broadsheet
│   │   ├── AboutPage.tsx           # Studio provenance & Four-Phase Precision Engine
│   │   ├── ServicesPage.tsx        # Practice directory with 6 core disciplines
│   │   ├── ClientsPage.tsx         # Asymmetric portfolio archive & brief inspector
│   │   ├── WorkshopsPage.tsx       # Tech Career Launchpad & Executive Masterclasses
│   │   └── ContactPage.tsx         # Strategic brief submission desk & WhatsApp hotline
│   ├── App.tsx                     # Main layout & route provider
│   ├── main.tsx                    # React DOM entry point
│   └── index.css                   # Global typography, tokens, animations
├── index.html                      # HTML5 entry with Bodoni Moda & Manrope Google Fonts
├── tailwind.config.js              # Theme tokens & custom color definitions
├── vite.config.ts                  # Vite configuration
└── package.json                    # Project dependencies and build scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/magonica40-cloud/buckeye.git
cd buckeye

# Install dependencies
npm install
```

### Development
```bash
# Start local development server
npm run dev
```
The application will be live at `http://localhost:3000/`.

### Production Build
```bash
# Run TypeScript validation and build production bundle
npm run build
```
Compiled production files will be output to the `dist/` directory.

---

## 📍 Studio Coordinates (Bengaluru Atelier)

- **Location**: Indiranagar 100ft Road, Bengaluru, Karnataka, India
- **Coordinates**: `12.9784° N, 77.6408° E`
- **Phone**: `+91 (80) 4122-8900`
- **Client Brief Desk**: `partnerships@buckeyestudio.in`

---

## 📄 License
© 2024–2026 BUCKEYE – DESIGN & CONSULTING. All rights reserved.

# Hitesh Rao M — Growth Portfolio

> Tech Marketer & Data Builder · BCA (Class of 2028), NCET Bengaluru

Official portfolio repository for **Hitesh Rao M**, showcasing audited case studies, campus programs (Google Student Ambassador, Paytm Hackathon, Presto & Namma MUG Summit, CareerGroww at VibeXathon), interactive story highlights, credentials ledger, and working principles.

---

## Content Structure

Portfolio content is cleanly maintained in structured JSON files under `content/` and static assets under `assets/`:

- **Site, hero and contact** (`content/site.json`): Availability status, hero headline, lead narrative, proof metrics, statement, and verified contact links.
- **Work / projects** (`content/projects.json`): Deep case study cards, statistics, tags, external proof links, and cover visuals.
- **Story highlights** (`content/highlights.json`): Instagram-style story highlight circles and slides with photographs, tags, and dates.
- **Experience and skills** (`content/experience.json`): Chronological experience ledger and focus discipline columns.

### Media Assets:
Images are stored in `assets/uploads/` and `/images/`.

---

## Visitor Protections & Deterrents

To deter casual copying and saving of portfolio assets and intellectual property:
- **Portfolio Images**: Context menu (right-click) is disabled, drag-and-drop is blocked (`-webkit-user-drag: none; draggable="false"`), and image overlays prevent direct extraction. A non-blocking toast displays: `"Image protection is enabled."`
- **Long-Form Written Content**: Text selection, copy, and cut are disabled on long-form written copy (About narrative, project case breakdowns, story highlights). A non-blocking toast displays: `"Content protection is enabled."`
- **Interactive Channels Kept Accessible**: Navigation menus, action buttons, form inputs, and contact channels (email, social links) remain completely selectable and interactive.
- **Accessible `<noscript>` Fallback**: If JavaScript is disabled, full semantic content (headlines, bio, projects, credentials, and email contact) is presented cleanly without breaking accessibility, keyboard navigation, or screen readers.
- **No Dialog Disruptions**: No disruptive native `alert()`, `confirm()`, or `prompt()` dialogs are used anywhere.

### What protection means:
> [!NOTE]
> These measures only discourage casual copying. A determined visitor can still screenshot, save the page or read the JSON files the page loads. If something must never be public, do not put it on the site.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server (runs on port 3000)
npm run dev

# Build for production
npm run build
```

---

## Tech Stack & Architecture

- **Core**: React 19, Vite 8, Vanilla CSS & Tailwind CSS tokens
- **Typography**: `Inter Tight`, `JetBrains Mono`, `Instrument Serif` (italic)
- **Deployment**: GitHub Pages / Static Hosting

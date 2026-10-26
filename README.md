# Hitesh Rao M — Growth Portfolio

> Tech Marketer & Data Builder · BCA (Class of 2028), NCET Bengaluru

Official portfolio repository for **Hitesh Rao M**, showcasing audited case studies, campus programs (Google Student Ambassador, Paytm Hackathon, Presto & Namma MUG Summit, CareerGroww at VibeXathon), interactive story highlights, credentials ledger, and working principles.

---

## Editing content (CMS)

This portfolio includes a Git-based headless CMS powered by **[Sveltia CMS](https://github.com/sveltia/sveltia-cms)**. You can update site copy, project cards, story highlights, timeline entries, and skills directly in your browser without touching code.

### How to access the CMS:
1. Navigate to `/admin/` on your deployed site (or `http://127.0.0.1:3000/admin/` when testing locally).
2. Sign in with your **GitHub Personal Access Token (Fine-grained token)**:
   - Go to GitHub **Settings** → **Developer Settings** → **Personal Access Tokens** → **Fine-grained tokens**.
   - Create a new token with Repository access to `hitesh-rao-portfolio` (or your portfolio repository).
   - Under Repository permissions, grant **Contents: Read and write**.
   - Paste the token into the Sveltia CMS login screen.

### Content Collections:
- **Site, hero and contact** (`content/site.json`): Update the availability status banner, hero headline, lead paragraph, proof metrics, statement, and verified contact links.
- **Work / projects** (`content/projects.json`): Add or edit case study cards, statistics, tags, external proof links, and cover visuals.
- **Story highlights** (`content/highlights.json`): Manage Instagram-style story highlight circles and slides with photographs, tags, and dates.
- **Experience and skills** (`content/experience.json`): Update the chronological experience ledger and focus discipline columns.

### Media Uploads:
Uploaded images are automatically saved to `assets/uploads/` and committed to the `main` branch.

### Fallback Guarantee:
All content loaders feature automatic fallback: if a JSON file or endpoint is unavailable, the site seamlessly displays the high-fidelity static HTML content.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## Tech Stack & Architecture

- **Core**: React 19, Vite 8, Vanilla CSS & Tailwind CSS tokens
- **Typography System**: `Inter Tight`, `JetBrains Mono`, `Instrument Serif` (italic)
- **CMS**: Sveltia CMS (Git-based, no database, no backend server needed)
- **Deployment**: GitHub Pages / Static Hosting

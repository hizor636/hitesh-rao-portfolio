# Hitesh Rao M — Growth Portfolio

> Tech Marketer & Data Builder · BCA (Class of 2028), NCET Bengaluru

Official portfolio repository for **Hitesh Rao M**, showcasing audited case studies, campus programs (Google Student Ambassador, Paytm Hackathon, Presto & Namma MUG Summit, CareerGroww at VibeXathon), interactive story highlights, credentials ledger, and working principles.

---

## Two-Role System Architecture

The site operates with a clean two-role separation without frameworks or server-side databases:

1. **ADMIN (sole editor)**: Edits site copy, adds images, creates items, deletes items, edits items, and reorders lists (projects, highlights, timeline, skills, hero facts, about statement, contact, availability) through the headless CMS located at `/studio-portal/`.
2. **VISITOR (everyone else)**: View-only public site. Contains zero edit buttons, zero login links, and zero admin hints anywhere in the user interface, navigation, footer, sitemap, or robots metadata.

---

## Content Management (Admin Studio)

Content is managed using **[Sveltia CMS](https://github.com/sveltia/sveltia-cms)** located at `/studio-portal/`.

### Accessing the Studio:
1. Navigate to `/studio-portal/` on your deployed site (or `http://127.0.0.1:3000/studio-portal/` when running locally).
2. Authenticate using your **GitHub Fine-Grained Personal Access Token**:
   - Go to GitHub **Settings** → **Developer Settings** → **Personal Access Tokens** → **Fine-grained tokens**.
   - Create a new token with repository access limited to this portfolio repository (`hitesh-rao-portfolio` / `hitesh-rao-m-portfolio`).
   - Under **Repository permissions**, grant **Contents: Read and write**.
   - Copy the token and paste it into the Sveltia CMS sign-in screen.
   - *Security Note: No tokens or secrets are ever stored in code or repository files.*

### Anonymous Git Identity Configuration:
To ensure your personal email address is never exposed in git commit logs made from your local machine or through the CMS:
1. In your GitHub account, go to **Settings** → **Emails** and check **"Keep my email addresses private"**.
2. Note your GitHub noreply email address formatted as:
   `ID+USERNAME@users.noreply.github.com`
3. Configure your local repository with that identity:
   ```bash
   git config user.email "ID+USERNAME@users.noreply.github.com"
   ```
   *(Or globally across your system using `git config --global user.email "ID+USERNAME@users.noreply.github.com"`)*.
4. When commits are created by Sveltia CMS via the GitHub API, GitHub will attribute commits using your account's privacy preferences without exposing your real personal email.

### Content Collections & Capabilities:
- **Site, hero and contact** (`content/site.json`): Update availability status banner, kicker, headline (using `*stars*` for italic serif accent), lead narrative, key facts metrics (add, delete, reorder), about statement, bio paragraph, and verified contact links.
- **Work / projects** (`content/projects.json`): Manage deep case studies and project cards. Full support to add new projects, remove items, drag to reorder, add domain tags, upload cover images with accessibility alt text, and attach verified proof links.
- **Story highlights** (`content/highlights.json`): Instagram-style stories with circle covers, initials fallback, theme hue, and multi-slide stories with photograph uploads, alt descriptions, metrics, and verification links.
- **Experience and skills** (`content/experience.json`): Chronological timeline entries and skill focus columns with full add, delete, and reordering support.

### Media Uploads:
Uploaded assets are committed directly to `assets/uploads/` on the `main` branch with descriptive alt text fields for accessibility compliance.

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

# Build for production (optional check)
npm run build
```

---

## Tech Stack & Architecture

- **Core**: React 19, Vite 8, Vanilla CSS & Tailwind CSS tokens
- **Typography**: `Inter Tight`, `JetBrains Mono`, `Instrument Serif` (italic)
- **CMS**: Sveltia CMS (Git-based, no database, no backend server needed)
- **Deployment**: GitHub Pages / Static Hosting

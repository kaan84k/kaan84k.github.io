# Kalana Hewapathirana - Portfolio

A responsive, accessible portfolio presenting Kalana's work across AI/ML, full-stack development, and computing education, with a dedicated AI Lab for educational experiments.

## Highlights

- Selected GitHub projects with focused case-study copy
- Direct links to GitHub, LinkedIn, Medium, and Hugging Face
- Responsive dark/light design
- Project filters for AI/ML, engineering, and education
- Interactive AND-gate demo inspired by LogicLab
- AI Lab at `/lab/`, a responsive two-column showcase of Digital Village 3D, LogicLab, and Protocol Explorer
- Self-hosted Poppins body text and Space Grotesk headings, responsive mobile navigation, and light/dark themes
- Content remains visible without JavaScript; preference storage is optional
- No build step or runtime dependency
- Semantic HTML, keyboard-friendly controls, and reduced-motion support
- SEO metadata and structured person data

## Run locally

Open `index.html` directly, or serve the directory:

```bash
python3 -m http.server 8000
```

Alternatively, use `npx serve .` if Node.js is available.

Fonts are included in `assets/fonts/` under their accompanying SIL Open Font
Licenses (Fontsource packages, version 5.3.0). No external font request or build
step is required. The GitHub profile image has a styled monogram fallback.

Visit `/lab/` on the same server to browse the AI Lab. Shared theme, navigation,
and footer behavior lives in `site.js`; portfolio filters and the AND-gate demo
live in `script.js`. The lab's screenshots are served locally, and application/source links open
Digital Village, LogicLab, and Protocol Explorer separately without embedding the apps.

## Deploy with GitHub Pages

1. Create a repository named `kaan84k.github.io`.
2. Add these files to the repository's `main` branch.
3. In **Settings → Pages**, select **Deploy from a branch**, then choose `main` and `/ (root)`.
4. The site will be available at `https://kaan84k.github.io/`.

## Featured projects

- B&B CashDesk - café cashbook, cash flow, cheque tracking, and financial reports
- Sri Lanka Anti-Corruption Dashboard
- VarRegistry
- AWS Practice Exam Console
- Kaan Kapruka Agent
- LogicLab
- Mini RAG System (Movie Plots)
- Career AI
- Spectrum of Theravāda Buddhism
- Sinhala Speech-to-Text
- SLT Bug Analytics Dashboard

Update the project selections and copy as the portfolio evolves. A résumé PDF
can also be connected from the hero when required.

## License

Personal portfolio source. Content and identity remain the property of Kalana Hewapathirana.

# Bijon Saha | Software QA Engineer

Personal portfolio website for Bijon Saha, a Software QA Engineer experienced in functional, regression, API, cross-platform, automation, and AI-assisted testing.

The portfolio presents professional experience, selected QA projects, technical skills, education, courses, and contact information in a responsive single-page experience.

## Technology

- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React

## Getting started

### Requirements

- Node.js 22 or later
- npm

### Install and run locally

```bash
npm install
npm run dev
```

The development server is available at the local URL shown in the terminal.

### Available commands

| Command           | Purpose                              |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Check the source with Oxlint         |

## Project structure

```text
src/
├── data/portfolio.js   Portfolio content and professional information
├── App.jsx             Page structure and reusable section rendering
├── App.css             Visual design and responsive styles
└── main.jsx            React application entry point
public/                 Static assets used by the site
```

Portfolio content is kept in `src/data/portfolio.js` so professional information can be updated without searching through the presentation markup.

## GitHub Pages deployment

The project is configured for deployment to GitHub Pages using Vite and GitHub Actions. The workflow is located at `.github/workflows/deploy.yml` and runs when changes are pushed to the `main` or `master` branch.

To enable deployment:

1. Push the repository to GitHub.
2. Open **Settings > Pages** in the repository.
3. Select **GitHub Actions** as the build and deployment source.
4. Push to the configured branch or run the workflow manually from the **Actions** tab.

The Vite configuration uses a relative base path, so the site does not require React Router or a backend server.

## CV privacy

The CV PDF is intentionally excluded from Git with `.gitignore` and is not published to GitHub. The local CV download buttons require a private `public/Bijon_Saha.pdf` file during local development, but the PDF is not included in the public deployment artifact.

If a public CV download is needed, add an explicitly approved public copy to `public/` and update the ignore rules before deploying.

## License

This repository contains personal portfolio content and is intended for personal use.

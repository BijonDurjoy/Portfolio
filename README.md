# Bijon Saha Portfolio

Personal portfolio for Bijon Saha, Software QA Engineer. Built with React, Vite, JavaScript, Tailwind CSS, and Lucide React.

## Local development

```bash
npm install
npm run dev
```

Create a production bundle with `npm run build`, or preview it locally with `npm run preview`.

## GitHub Pages deployment

The Vite config uses a relative base path, so the build works from a GitHub Pages project URL without needing React Router. The included GitHub Actions workflow builds and publishes the `dist` directory whenever changes land on the default branch.

To enable it, push this repository to GitHub and open **Settings > Pages**. Choose **GitHub Actions** as the source. The workflow is in `.github/workflows/deploy.yml`.

The CV is kept in `public/Bijon_Saha.pdf` and is linked through the site's Download CV buttons.

## Updating content

Portfolio content lives in `src/data/portfolio.js`. Presentation is in `src/App.jsx` and `src/App.css`.

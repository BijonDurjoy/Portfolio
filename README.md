# Bijon Saha | Software QA Engineer

The personal portfolio of Bijon Saha, a Software QA Engineer focused on functional, regression, API, cross-platform, automation, and AI-assisted testing.

The site is a responsive single-page portfolio featuring professional experience, selected QA projects, technical skills, education, courses, and contact information.

## Live deployment

Visit the live portfolio: [https://bijon-saha.netlify.app/](https://bijon-saha.netlify.app/)

The portfolio is hosted on [Netlify](https://www.netlify.com/).

Netlify deploys the Vite production build using these settings:

| Setting           | Value           |
| ----------------- | --------------- |
| Build command     | `npm run build` |
| Publish directory | `dist`          |
| Node version      | 22 or later     |

When the repository is connected to Netlify, new commits can be deployed automatically after a successful build.

## Technology

- React 19
- Vite
- JavaScript
- Tailwind CSS
- Lucide React
- React Icons
- Oxlint

## Local development

### Requirements

- Node.js 22 or later
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal.

### Available commands

| Command           | Purpose                              |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Check the source with Oxlint         |

## Project structure

```text
src/
├── data/portfolio.js   Portfolio content and professional information
├── App.jsx             Page structure and section rendering
├── App.css             Visual design, animation, and responsive styles
└── main.jsx            React application entry point
public/                 Static assets used by the site
```

Portfolio content is kept in `src/data/portfolio.js`, allowing professional information to be updated without searching through the presentation markup.

## CV privacy

The CV PDF is intentionally excluded from Git with `.gitignore`. The CV download links require `public/Bijon_Saha.pdf` during local development, but the private file is not included in the public Netlify deployment.

To offer a public CV download, add an approved public copy to `public/` and update the ignore rules before deploying.

## License

This repository contains personal portfolio content and is intended for personal use.

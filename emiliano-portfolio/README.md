# Emiliano Hansen Engineering Portfolio

## What is included

- `index.html` — homepage with hero, research intro, project gallery, and about section.
- `projects/` — individual project pages for deeper case studies.
- `assets/styles.css` — responsive visual design.
- `assets/main.js` — mobile navigation behavior and current-year footer.
- `assets/*.svg` — placeholder abstract project illustrations.

## Quick start

1. Create a new GitHub repository named either:
   - `yourusername.github.io` for a personal GitHub Pages site, or
   - any repo name, such as `portfolio`, for a project site.
2. Upload all files in this folder to the repository.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save. GitHub will publish the site after the first Pages build.

## Things to customize immediately

Search for `your.email@example.com`, `yourusername`, and replace them.

Add your resume PDF as:

```text
assets/Emiliano_Hansen_Resume.pdf
```

Or update the resume links in `index.html` and each project page.

## Project page editing

Each project file in `projects/` has three editable sections:

- Overview
- Design approach
- What to add next

Replace the placeholder text with final descriptions, images, plots, videos, and publication links.

## Local preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

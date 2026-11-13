# Rugwed Tambekar – portfolio

Plain HTML, CSS and JavaScript. No build step, nothing to install.

## Files
- `index.html` – page shell, meta tags, navigation
- `styles.css` – all styling, including the mobile layout
- `data.js` – **your content**: links, projects, features, screens
- `main.js` – pages, animations, teental and keyboard
- `assets/images/` – screenshots (.webp) and `og.jpg` for link previews
- `assets/Rugwed_Tambekar_Resume.pdf` – the file behind every "Download resume" button
- `404.html` – not-found page

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Update the resume
Replace `assets/Rugwed_Tambekar_Resume.pdf`, keeping the same file name.

## Deploy free (Cloudflare Pages)
1. Create a public GitHub repo (for example `rugwed`) and upload everything in this folder.
2. In Cloudflare: Workers & Pages → Create → Pages → connect the repo.
3. Project name `rugwed` (gives `rugwed.pages.dev`). Leave the build command empty and set the output directory to `/`.
4. Every push to GitHub redeploys the site.

Quicker alternative: drag this folder onto Netlify Drop.

## When you buy the domain
1. Add it in the host (Cloudflare Pages → Custom domains, or Netlify → Domain management) and follow the DNS instructions.
2. In `index.html`, change the `og:image` line to the full address, e.g. `https://yourdomain/assets/images/og.jpg`.
3. In your resume PDF, update the "Portfolio" link.

## Before you publish
- Confirm the Play Store, App Store, GitHub and live-site links in `data.js`.
- The resume PDF contains your phone number and will be public.
- The Maikisaan home screenshot shows a farmer's name from the app; blur it if it is real user data.

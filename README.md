# AIM Partners Limited - Coming Soon Page

A premium "Coming Soon" landing page for AIM Partners Limited, a Hong Kong-based wine industry consulting company.

**Live Site:** https://mentle.github.io/AIM-Partners/

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## How to Update Content

### Update Text/Copy

All page content is in `src/App.jsx`. Edit the text directly in the JSX.

### Update Colors

Colors are defined in `tailwind.config.js`:

```js
colors: {
  text: '#090a0c',       // Main text color
  background: '#f7f7f8', // Page background
  primary: '#1F2A44',    // Navy blue - headings, buttons, footer
  secondary: '#c7ae75',  // Gold - accent highlights
  accent: '#7A2E3A',     // Deep red - links, hover states
}
```

### Update Logo

1. Replace `public/favicon.svg` with your logo
2. For a full logo in the navbar, edit the `<nav>` section in `src/App.jsx`

### Update Contact Email

Search for `info@aimpartners.hk` in `src/App.jsx` and replace with your email.

## Deployment

The site auto-deploys to GitHub Pages when you push to `main` branch via GitHub Actions.

To deploy manually:
```bash
npm run build
# Then push the dist folder to gh-pages branch
```

## Project Structure

```
├── public/
│   └── favicon.svg      # Site favicon
├── src/
│   ├── App.jsx          # Main page component (all content here)
│   ├── index.css        # Global styles + Tailwind
│   └── main.jsx         # React entry point
├── index.html           # HTML template + SEO meta tags
├── tailwind.config.js   # Tailwind configuration + colors
├── vite.config.js       # Vite configuration
└── package.json
```

## License

© 2026 AIM Partners Limited. All rights reserved.

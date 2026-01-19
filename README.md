# Shreshti Web

A modern React TypeScript application built with Vite, Tailwind CSS, and Motion.

## Development

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment to Railway

This project is configured for deployment on Railway. Follow these steps:

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Railway**:
   - Go to [Railway](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will automatically detect the `railway.json` configuration
   - The build will run automatically using `npm run build`
   - The app will be served using `serve` on the `$PORT` environment variable

3. **Environment Variables** (if needed):
   - Railway will automatically set the `PORT` variable
   - Add any other environment variables in the Railway dashboard if needed

The `railway.json` file configures:
- **Build command**: `npm ci && npm run build` (installs dependencies and builds the app)
- **Start command**: `npx serve -s dist -l $PORT` (serves the built static files)

## Project Structure

- `/src` - Main application source files
  - `App.tsx` - Main application component
  - `main.tsx` - Entry point
  - `index.css` - Global styles with Tailwind
- `/components` - Reusable React components
- `/pages` - Page components (Home, Software, Profile)
- `/dist` - Built files (generated on build, not in git)

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Motion** - Animation library
- **Lucide React** - Icon library

# Language Learning Codex

Language Learning Codex is a single-page React application that helps you collect vocabulary from day-to-day conversations and turns it into a personalised learning plan. The dashboard highlights recent captures, suggested lessons, and weekly progress at a glance.

## Getting started

```bash
npm install
npm start
```

The development server runs on port `5173` by default.

Run the production build and utility tests with:

```bash
npm run build
npm test
```

## Project structure

```
.
├── public/               # Static assets and manifest
├── src/
│   ├── components/       # Reusable UI building blocks
│   ├── context/          # Global learning state provider
│   ├── hooks/            # Custom hooks for vocabulary workflows
│   ├── pages/            # Dashboard, lesson library, and settings views
│   ├── services/         # Mock data and lesson generation utilities
│   └── utils/            # Formatting helpers and accompanying tests
└── vite.config.js        # Vite configuration for the React app
```

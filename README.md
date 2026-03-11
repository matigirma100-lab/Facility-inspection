# Facility Inspection Management System

This is a production-ready Web Application for managing and executing facility inspections.

## Repository Structure

The project has been organized following modern React and Next.js Best Practices for full-stack applications:

*   **`src/app/` (Pages)**: Contains all the application routes, pages, and API endpoints (app router). Maps to the traditional "pages" directory.
*   **`src/components/` (Components)**: Contains all reusable React components, logically grouped into subdirectories (e.g., `/settings`, `/inspections`, `/issues`).
*   **`src/app/globals.css` (Styles)**: Contains the global utility styles and Tailwind configurations.
*   **`src/lib/` (Config Files & Utilities)**: Contains database configuration (`supabase.ts`), global state contexts, and helper functions mapping to standard "config files".
*   **`package.json`, `next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`**: Root-level project configuration and script definitions.

(Note: The entire root directory acts as the "frontend" repository for this Next.js project.)

## Deployment Guide

This project is built using **Next.js** and uses **Supabase** for the backend database, authentication, and storage.

### Prerequisites

1.  A linked Supabase Project with all tables (`users`, `facilities`, `inspection_templates`, `inspections`, `inspection_results`, `issues`) and Row-Level Security (RLS) policies configured.
2.  Environment variables set up in your hosting provider:
    *   `NEXT_PUBLIC_SUPABASE_URL`
    *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Production Build

Before deploying, ensure the project builds without errors:

```bash
npm install
npm run build
```

The build command optimizes the project and outputs the compiled production artifacts into the `.next` directory.

### Hosting Options

**Vercel (Recommended)**
Since this is a Next.js application, Vercel provides the most seamless hosting experience:
1. Push this repository to GitHub.
2. Import the project in your Vercel dashboard.
3. Configure the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` as Environment Variables.
4. Click Deploy.

**Other Providers (Netlify, Render, AWS Amplify)**
1. Connect the GitHub repository.
2. Set the build command to `npm run build`.
3. Set the publish directory to `.next`.
4. Configure the Supabase environment variables.

### Offline Support Note
This application utilizes IndexedDB (`idb-keyval`) for local storage, allowing inspectors to complete checklists while offline and sync when an internet connection is re-established.

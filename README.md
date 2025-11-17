# Anime Search App
A React + TypeScript single-page application that allows users to search for anime using the Jikan API.
Includes instant debounced search, server-side pagination, request cancellation, and an anime detail page.

## Run locally
1. npm install
2. npm run dev
Open http://localhost:4000

## Deploy
This project is deployed at: https://search-anime00.netlify.app/

## Features
- React 18 + TypeScript
- Redux Toolkit for state management
- Instant search with 250ms debounce and request cancellation
- Server-side pagination using Jikan API
- Detail page per anime

## Core Features

✔ Instant search with 250ms debouncing
✔ Cancels in-flight API requests to avoid race conditions
✔ Server-side pagination
✔ Anime detail page
✔ Redux for global state
✔ Fully SPA (Single Page App)
✔ No environment variables needed
✔ Dev server runs on port 4000

## Bonus Implementation

### User Experience Improvements
- **Skeleton Loaders** for the search page to provide a smoother loading experience and prevent layout shifts.
- **Empty State Message** with helpful guidance when no results are found.
- **Centered Pagination Controls** with intuitive left/right arrow buttons for a clean UI.
- **Mobile-Responsive Layout** with optimized grid and detail-page responsiveness.

### UI / Styling Enhancements
- **Netflix-Inspired Detail Page** with two-column layout for metadata and synopsis.
- **Red Netflix-Style Button Components** for primary/secondary actions.



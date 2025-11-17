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

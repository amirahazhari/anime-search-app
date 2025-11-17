This document summarizes how AI tools were used throughout the development of this project.
Instead of listing every raw prompt, this file outlines the key assistance areas, the intent behind each query, and how AI contributed to the final solution.

1. Project Scaffolding & Architecture

Context:
I consulted AI to design a clean architecture for a React + TypeScript + Redux application that meets the assessment’s requirements.

AI Contribution:

Recommended folder structure (src/api, src/features, src/hooks, etc.)

Provided TypeScript-first setup guidance

Ensured Vite was configured correctly on port 4000

Suggested best practices (debouncing, request cancellation, Redux Toolkit structure)

Outcome:
A well-organized, scalable project layout aligned with modern React standards.

2. Instant Search, Debouncing & Cancellation

Context:
I used AI to better understand how to implement instant search with debouncing and cancel in-flight API requests efficiently.

AI Contribution:

Provided an approach using a custom useDebouncedValue hook

Suggested using createAsyncThunk's built-in AbortSignal to cancel previous requests

Clarified how to avoid race conditions between rapid API calls

Outcome:
A responsive search experience that avoids excessive API calls.

3. Redux State Management Strategy

Context:
I asked for guidance on setting up Redux in a minimal, type-safe way without over-engineering.

AI Contribution:

Helped define a clean Redux slice for search (query, pagination, loading, errors)

Suggested using RTK Thunks for async Jikan API calls

Ensured proper typing for state and dispatch

Outcome:
A predictable, well-typed global state that handles all major app data.

4. Deployment Planning (Netlify)

Context:
I requested help on ensuring the project deploys smoothly without environment variables, following the given constraints.

AI Contribution:

Provided build command and publish directory configuration

Clarified the deployment flow for Vite-based apps

Highlighted common pitfalls (Node version, env vars, build errors)

Outcome:
A fully deployed working application accessible online.

5. Documentation & Presentation

Context:
I requested help generating developer-friendly documentation.

AI Contribution:

Helped produce a professional README.md

Ensured documentation matched evaluation criteria

Suggested a concise project summary and bonus feature sections

Outcome:
Clear documentation suitable for technical reviewers and hiring teams.
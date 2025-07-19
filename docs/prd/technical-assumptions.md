# 4. Technical Assumptions

This section documents the core technical decisions that will guide the architecture.

## Repository Structure

For a modern full-stack Next.js application, a **Monorepo** (a single repository for both frontend and backend code) is highly recommended. It simplifies development, dependency management, and sharing code (like data types) between the client and server.

A Monorepo managed with npm/yarn/pnpm workspaces.

## Service Architecture

Given the choice of Next.js and Supabase, a **Serverless** architecture is the natural and most efficient fit. The frontend will be a Next.js application, and any backend logic will be handled by Next.js API Routes (which are serverless functions) and Supabase's backend-as-a-service features.

## Testing Requirements

To balance speed for the MVP with quality, a pragmatic approach to testing is best. A full end-to-end (E2E) testing suite is likely overkill for the initial prototype.

Focus on **Unit Tests** (for individual components/functions) and **Integration Tests** (to ensure the app communicates with Supabase correctly).

## Additional Technical Assumptions and Requests

- **Authentication:** Supabase Auth will be used to handle any future user authentication needs.
- **Database:** The Supabase Postgres database will be the single source of truth for all application data (songs, shows, user guesses, etc.).
- **Deployment:** The application will be architected for easy deployment on Vercel, which has first-class support for Next.js and integrates seamlessly with Supabase.
# Dead & Co Setlist Game Fullstack Architecture Document

## 1. Introduction

This document outlines the complete fullstack architecture for the Dead & Co Setlist Game, including the backend systems, frontend implementation, and their integration. It serves as the single source of truth for AI-driven development.

- **Starter Template:** N/A - Greenfield project. The architecture and structure will be defined from scratch based on best practices for the selected technology stack.

## 2. High-Level Architecture

### Technical Summary

This project will be a **serverless, full-stack application** built using a **monorepo** structure. The frontend will be a responsive **Next.js** application styled with **Tailwind CSS** and **shadcn/ui**. Backend functionality, including the database, authentication, and storage, will be provided by **Supabase**. API logic will be handled via Next.js API routes, creating a tightly integrated and efficient development experience.

### Platform and Infrastructure Choice

- **Platform:** **Vercel** is the ideal hosting and deployment platform due to its seamless integration with Next.js, providing optimal performance, automatic scaling, and CI/CD.
- **Backend as a Service (BaaS):** **Supabase** will provide the PostgreSQL database, authentication, and object storage, abstracting away server management.

### Architectural Patterns

- **Serverless Architecture:** Leverages Vercel for hosting the Next.js app and API routes, and Supabase for the backend, eliminating the need to manage traditional servers.
- **Component-Based UI:** The frontend will be built using reusable React components, promoting maintainability and consistency.
- **Repository Pattern:** Data access will be abstracted into a dedicated layer to decouple business logic from Supabase-specific queries, making the code cleaner and easier to test.

### High-Level Architecture Diagram

```
graph TD
    subgraph User Device
        A[Browser - Mobile/Desktop]
    end

    subgraph Vercel Platform
        B(Next.js Frontend App)
        C(Next.js API Routes)
    end

    subgraph Supabase
        D[Auth]
        E[Postgres DB]
        F[Storage]
    end

    A --> B
    B --> C
    C --> E
    C --> D
```

## 3. Data Models & Database Schema

The following tables will be created in the Supabase Postgres database.

### `shows` Table

- **Purpose:** Stores information about the concert events.
- **Schema:**

```
CREATE TABLE shows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  band_name TEXT NOT NULL,
  show_date DATE NOT NULL,
  venue TEXT
);
```

### `songs` Table

- **Purpose:** Stores the master list of all potential songs.
- **Schema:**

```
CREATE TABLE songs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL UNIQUE
);
```


### `guesses` Table

- **Purpose:** Stores all user submissions for every game type.
- **Schema:**

```
CREATE TABLE guesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  show_id UUID REFERENCES shows(id) ON DELETE CASCADE,
  game_type TEXT NOT NULL, -- e.g., 'opener1', 'bingo', 'encore'
  user_session_id TEXT, -- For anonymous tracking
  guessed_songs JSONB -- Stores an array of song UUIDs
);
```
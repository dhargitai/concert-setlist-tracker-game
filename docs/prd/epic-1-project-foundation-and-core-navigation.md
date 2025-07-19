# 6. Epic 1: Project Foundation & Core Navigation

**Epic Goal:** To establish the foundational project structure, set up the Next.js/Supabase/Tailwind stack, and implement the core user navigation, allowing a user to select a show and land on the game menu screen.

## **Story 1.1: Initial Project Setup & Scaffolding**

- **As a** Developer,
- **I want** a new Next.js project initialized with Tailwind, shadcn, and Supabase configured,
- **so that** I have a clean, working foundation to start building features on.

**Acceptance Criteria:**

1. A new Next.js application is created using the latest stable version.
2. Tailwind CSS is successfully integrated into the project for styling.
3. The `shadcn/ui` component library is initialized and configured.
4. The Supabase client is installed, and environment variables for the Supabase URL and anon key are set up in a `.env.local` file.
5. The application runs locally without errors (`npm run dev`).
6. The initial project structure is committed to a new Git repository.

## **Story 1.2: Display Upcoming Shows for Selection**

- **As a** User,
- **I want** to see the list of three upcoming Dead and Company shows on the homepage,
- **so that** I can select the one I want to play.

**Acceptance Criteria:**

1. A Supabase table named `shows` is created with columns for `id`, `band_name`, `show_date`, and `venue`.
2. The table is populated with the three upcoming Dead and Company shows.
3. The homepage fetches and displays the list of shows from the Supabase `shows` table.
4. Each show is presented as a distinct, clickable element (e.g., a card) showing the band name and date.
5. The layout is responsive and adapts cleanly to both mobile and desktop screens.
6. Clicking on a show navigates the user to a game selection page, passing the unique ID of the selected show in the URL (e.g., `/show/[id]/play`).

## **Story 1.3: Display Game Modes for Selected Show**

- **As a** User,
- **I want** to see the four available game modes after selecting a show,
- **so that** I can choose which one to play.

**Acceptance Criteria:**

1. The Game Selection page dynamically displays the date of the show selected in the previous step.
2. Four distinct, clickable elements are displayed, representing the game modes: "Setlist Bingo," "Guess the Openers," "Guess the Encore," and "Fill in the Setlist."
3. The layout is responsive.
4. Clicking on a game mode navigates the user to the corresponding game page (e.g., `/show/[id]/play/bingo`). The game pages can be simple placeholders for now.
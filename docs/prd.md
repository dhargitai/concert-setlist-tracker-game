# Dead & Co Setlist Game Product Requirements Document (PRD)

## 1. Goals and Background Context

### Goals

- Build a functional and professional-looking MVP to gauge user interest and demonstrate potential to sponsors and community forums.

## 2. Requirements

### Functional

1. **FR1:** The user must be able to land on a homepage, select "Dead and Company" as the band, and then select one of the three upcoming shows (8/1, 8/2, 8/3).
2. **FR2:** After selecting a show, the user must be presented with a screen to choose one of the available game modes.
3. **FR3:** The application must implement the four specified "Play for Fun" game modes:
    - Setlist Bingo
    - Guess the Opener (Set 1 & 2)
    - Guess the Encore
    - Fill in the Setlist
4. **FR4:** The "Setlist Bingo" and "Fill in the Setlist" games must feature a drag-and-drop interface for song selection, similar to a Duolingo experience.
5. **FR5:** The application must have a responsive layout that is usable on both desktop and mobile web browsers.

### Non-Functional

1. **NFR1:** The technology stack is strictly defined as Next.js for the frontend, Tailwind CSS with shadcn for styling, and Supabase for any backend/database needs.
2. **NFR2:** The application's visual design must emulate the aesthetic of the official `deadandcompany.com` website (e.g., pastels, hippie/cartoon aesthetic) but must not use any copyrighted assets directly.
3. **NFR3:** The user experience must feel smooth and professional, with fast load times and responsive interactions, especially the drag-and-drop functionality.
4. **NFR4:** The scope of the MVP is strictly limited to the "Play for Fun" mode to meet the rapid development timeline.

## 3. User Interface Design Goals

### Overall UX Vision

The application should feel fun, professional, and highly intuitive. The primary goal is to create an engaging experience that encourages fans to participate and return for future shows. The interface will be clean, responsive, and easy to navigate, allowing a first-time user to understand and play a game within moments.

### Key Interaction Paradigms

The core interaction model for the games ("Setlist Bingo" and "Fill in the Setlist") will be a **Duolingo-style drag-and-drop system**. Users will be able to fluidly drag song titles from a list into designated slots on a bingo board or setlist template.

### Core Screens and Views

From a product perspective, the MVP will require the following conceptual screens:

- **Show Selection Screen:** A simple page to select the band and the specific show date.
- **Game Selection Screen:** A menu to choose which of the four game types to play for the selected show.
- **Game Interface Screen:** The main view where the user plays the selected game (e.g., the bingo board, the setlist template).
- **Post-Game Summary Screen:** A view to show the user their completed guesses after they submit. *(Note: This is an assumption based on a typical game flow).*

### Accessibility

- **Accessibility Level:** WCAG AA
- *(Note: To ensure a professional and inclusive product, I've made an assumption that we should aim for WCAG AA compliance. This means the app will be designed to be usable by people with a wide range of abilities.)*

### Branding

- The aesthetic will emulate the feel of `deadandcompany.com` without violating copyright. The design should incorporate a "hippie aesthetic" with pastels, cartoons, and rainbow motifs.

### Target Platforms

- **Platform:** Web Responsive
- The application will be a responsive website, optimized for a seamless experience on both mobile and desktop browsers.

## 4. Technical Assumptions

This section documents the core technical decisions that will guide the architecture.

### Repository Structure

For a modern full-stack Next.js application, a **Monorepo** (a single repository for both frontend and backend code) is highly recommended. It simplifies development, dependency management, and sharing code (like data types) between the client and server.

A Monorepo managed with npm/yarn/pnpm workspaces.

### Service Architecture

Given the choice of Next.js and Supabase, a **Serverless** architecture is the natural and most efficient fit. The frontend will be a Next.js application, and any backend logic will be handled by Next.js API Routes (which are serverless functions) and Supabase's backend-as-a-service features.

### Testing Requirements

To balance speed for the MVP with quality, a pragmatic approach to testing is best. A full end-to-end (E2E) testing suite is likely overkill for the initial prototype.

Focus on **Unit Tests** (for individual components/functions) and **Integration Tests** (to ensure the app communicates with Supabase correctly).

### Additional Technical Assumptions and Requests

- **Authentication:** Supabase Auth will be used to handle any future user authentication needs.
- **Database:** The Supabase Postgres database will be the single source of truth for all application data (songs, shows, user guesses, etc.).
- **Deployment:** The application will be architected for easy deployment on Vercel, which has first-class support for Next.js and integrates seamlessly with Supabase.

## 5. Epic List

Here is the proposed high-level structure for building the application. I've broken the work into two distinct, sequential epics.

1. **Epic 1: Project Foundation & Core Navigation**
    - **Goal:** Establish the foundational project structure, set up the Next.js/Supabase/Tailwind stack, and implement the core user navigation, allowing a user to select a show and land on the game menu screen. This epic delivers a navigable shell of the application.
2. **Epic 2: Game Implementation & Gameplay Experience**
    - **Goal:** Implement all four of the core "Play for Fun" game modes (Bingo, Openers, Encore, Fill-in). This includes the main drag-and-drop interactions and the post-game summary screen. This epic delivers the core value and fun of the application.

## 6. Epic 1: Project Foundation & Core Navigation

**Epic Goal:** To establish the foundational project structure, set up the Next.js/Supabase/Tailwind stack, and implement the core user navigation, allowing a user to select a show and land on the game menu screen.

### **Story 1.1: Initial Project Setup & Scaffolding**

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

### **Story 1.2: Display Upcoming Shows for Selection**

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

### **Story 1.3: Display Game Modes for Selected Show**

- **As a** User,
- **I want** to see the four available game modes after selecting a show,
- **so that** I can choose which one to play.

**Acceptance Criteria:**

1. The Game Selection page dynamically displays the date of the show selected in the previous step.
2. Four distinct, clickable elements are displayed, representing the game modes: "Setlist Bingo," "Guess the Openers," "Guess the Encore," and "Fill in the Setlist."
3. The layout is responsive.
4. Clicking on a game mode navigates the user to the corresponding game page (e.g., `/show/[id]/play/bingo`). The game pages can be simple placeholders for now.

## 7. Epic 2: Game Implementation & Gameplay Experience

**Epic Goal:** To implement all four of the core "Play for Fun" game modes (Bingo, Openers, Encore, Fill-in). This includes the main drag-and-drop interactions and the post-game summary screen, delivering the core value and fun of the application.

### **Story 2.1: Create and Seed Song Catalog**

- **As a** Developer,
- **I want** a master list of all possible songs available in the database,
- **so that** the game interfaces can display them for users to select.

**Acceptance Criteria:**

1. A Supabase table named `songs` is created with columns for `id` (unique identifier) and `title`.
2. The `songs` table is seeded with the master list of potential Dead and Company songs. (You will need to provide this list).
3. A serverless API endpoint (e.g., `/api/songs`) is created that fetches and returns the full list of songs from the database.

### **Story 2.2: Implement Openers and Encore Guessing Games**

- **As a** User,
- **I want** to be able to select a song from a list to make my guess for the Set 1 opener, Set 2 opener, and the Encore,
- **so that** I can play the simplest guessing games.

**Acceptance Criteria:**

1. A `guesses` table is created in Supabase to store submissions, with columns like `show_id`, `game_type`, and `guessed_songs` (which can store the ID of the single song guessed).
2. The game pages for "Guess the Openers" and "Guess the Encore" fetch the full song list via the API.
3. The interface provides a simple way to select a single song (e.g., a searchable dropdown).
4. A "Submit Guess" button saves the selection to the `guesses` table.
5. After submitting, the user is shown a summary of their guess.

### **Story 2.3: Implement Setlist Bingo Game**

- **As a** User,
- **I want** to drag and drop songs onto a bingo board,
- **so that** I can play the Setlist Bingo game.

**Acceptance Criteria:**

1. The game interface displays a 5x5 bingo board.
2. A searchable/scrollable list of all songs is available on the screen.
3. The user can drag a song from the list and drop it into an empty slot on the board.
4. The user can remove or replace songs on the board.
5. A "Submit Board" button saves the 25 chosen songs to the `guesses` table.
6. After submitting, the user is shown a summary of their completed board.

### **Story 2.4: Implement "Fill in the Setlist" Game**

- **As a** User,
- **I want** to drag and drop songs into a setlist template,
- **so that** I can guess the entire show's setlist in order.

**Acceptance Criteria:**

1. The game interface displays a template with labeled slots for the setlist (e.g., "Set 1 Opener," "Set 1 Song 2," etc.).
2. Users can drag songs from the master list into the setlist slots.
3. The interface allows for re-ordering songs within the setlist.
4. A "Submit Setlist" button saves the final, ordered list to the `guesses` table.
5. After submitting, the user is shown a summary of their final setlist guess.

---

## 8. Next Steps

This completes the Product Requirements Document. The next step in our workflow is to engage our specialists to create the detailed design and architecture.

### UX Expert Prompt

- "Sally, please use this PRD to create a **UI/UX Specification**. Focus on the 'Duolingo-like' drag-and-drop interactions and the overall 'hippie aesthetic' defined in the UI Goals. Please also create a prompt for an AI UI generator like v0 to accelerate frontend development."

### Architect Prompt

- "Winston, please use this PRD and the confirmed technical assumptions (Next.js, Supabase, Tailwind, Monorepo, Serverless) to create a **Fullstack Architecture Document**. Define the Supabase database schema, the API endpoints, and the frontend project structure."
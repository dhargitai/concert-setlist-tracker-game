# 7. Epic 2: Game Implementation & Gameplay Experience

**Epic Goal:** To implement all four of the core "Play for Fun" game modes (Bingo, Openers, Encore, Fill-in). This includes the main drag-and-drop interactions and the post-game summary screen, delivering the core value and fun of the application.

## **Story 2.1: Create and Seed Song Catalog**

- **As a** Developer,
- **I want** a master list of all possible songs available in the database,
- **so that** the game interfaces can display them for users to select.

**Acceptance Criteria:**

1. A Supabase table named `songs` is created with columns for `id` (unique identifier) and `title`.
2. The `songs` table is seeded with the master list of potential Dead and Company songs. (You will need to provide this list).
3. A serverless API endpoint (e.g., `/api/songs`) is created that fetches and returns the full list of songs from the database.

## **Story 2.2: Implement Openers and Encore Guessing Games**

- **As a** User,
- **I want** to be able to select a song from a list to make my guess for the Set 1 opener, Set 2 opener, and the Encore,
- **so that** I can play the simplest guessing games.

**Acceptance Criteria:**

1. A `guesses` table is created in Supabase to store submissions, with columns like `show_id`, `game_type`, and `guessed_songs` (which can store the ID of the single song guessed).
2. The game pages for "Guess the Openers" and "Guess the Encore" fetch the full song list via the API.
3. The interface provides a simple way to select a single song (e.g., a searchable dropdown).
4. A "Submit Guess" button saves the selection to the `guesses` table.
5. After submitting, the user is shown a summary of their guess.

## **Story 2.3: Implement Setlist Bingo Game**

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

## **Story 2.4: Implement "Fill in the Setlist" Game**

- **As a** User,
- **I want** to drag and drop songs into a setlist template,
- **so that** I can guess the entire show's setlist in order.

**Acceptance Criteria:**

1. The game interface displays a template with labeled slots for the setlist (e.g., "Set 1 Opener," "Set 1 Song 2," etc.).
2. Users can drag songs from the master list into the setlist slots.
3. The interface allows for re-ordering songs within the setlist.
4. A "Submit Setlist" button saves the final, ordered list to the `guesses` table.
5. After submitting, the user is shown a summary of their final setlist guess.
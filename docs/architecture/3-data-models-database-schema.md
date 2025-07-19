# 3. Data Models & Database Schema

The following tables will be created in the Supabase Postgres database.

## `shows` Table

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

## `songs` Table

- **Purpose:** Stores the master list of all potential songs.
- **Schema:**

```
CREATE TABLE songs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL UNIQUE
);
```


## `guesses` Table

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
CREATE TABLE IF NOT EXISTS profiles (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  note TEXT
);
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY,
  title TEXT,
  day_of_week TEXT NOT NULL, -- { MON, TUE, WED, THU, FRI }
  start_time TEXT NOT NULL, -- e.g.: 15:05:00
  end_time TEXT,
  note TEXT,
  colour TEXT NOT NULL, -- hex string
  is_exit INTEGER NOT NULL DEFAULT 0 -- 1 -> true | 0 -> false
);
CREATE TABLE IF NOT EXISTS event_profile ( -- many to many relationship between profiles and events
  event_id INTEGER NOT NULL,
  profile_id INTEGER NOT NULL,
  PRIMARY KEY (event_id, profile_id),
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS reminders (
  id INTEGER PRIMARY KEY,
  event_id INTEGER NOT NULL,
  no_minutes INTEGER NOT NULL, -- if negative -> before start | if 0 -> at the start | if positive -> after end
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS notifications (
  id INTEGER PRIMARY KEY,
  event_id INTEGER NOT NULL,
  date TEXT NOT NULL, -- e.g.: 2025-09-08
  time TEXT NOT NULL,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY,
  exit_event_colour TEXT NOT NULL, -- hex string
  exit_reminder_no_minutes INTEGER NOT NULL,
  is_vibrate INTEGER NOT NULL DEFAULT 1, -- whether the notifications should vibrate
  is_app_enabled INTEGER NOT NULL DEFAULT 1, -- whether the app should be sending notificaitons
  is_active INTEGER NOT NULL DEFAULT 1 -- whether these are the current active global settings
);
CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY,
  title TEXT,
  text TEXT,
  date_created TEXT NOT NULL,
  date_last_modified TEXT NOT NULL
);

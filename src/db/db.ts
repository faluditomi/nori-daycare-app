import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite'
import sql from 'sql-template-tag'

let sqlite: SQLiteConnection
let db: SQLiteDBConnection | null = null

export async function initDb() {
  if (!sqlite) {
    sqlite = new SQLiteConnection(CapacitorSQLite)
  }

  if (!db) {
    db = await sqlite.createConnection('nori-daycare-app', false, 'no-encryption', 1, false)
    await db.open()
  }

  //TODO: add the 'default' non-deletable profile after the tables are created
  await db.execute(
    sql`
    CREATE TABLE IF NOT EXISTS profiles (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      note TEXT
    );
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      day_of_week TEXT NOT NULL, -- { MON, TUE, WED, THU, FRI }
      start_time TEXT NOT NULL, -- e.g.: 15:05:00
      end_time TEXT,
      note TEXT,
      colour TEXT NOT NULL, -- hex string
      is_vibrate INTEGER NOT NULL DEFAULT 1 -- 1 -> true | 0 -> false
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
      no_minutes INTEGER NOT NULL, -- if negative -> before start | if positive -> after end
      FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
    );
    CREATE TABLE IF NOT EXISTS notifications (
      id INTEGER PRIMARY KEY,
      event_id INTEGER NOT NULL,
      date TEXT NOT NULL, -- e.g.: 2025-09-08
      time TEXT NOT NULL,
      FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
    );
    CREATE TABLE IF NOT EXISTS global_parameters (
      id INTEGER PRIMARY KEY,
      exit_event_colour TEXT NOT NULL, -- hex string
      exit_reminder_no_minutes INTEGER NOT NULL,
      is_active INTEGER NOT NULL DEFAULT 1
    );
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY,
      text TEXT,
      date_created TEXT NOT NULL,
      date_last_modified TEXT
    );
  `.sql,
  )

  return db
}

//TODO: define helper functions based on these examples
// export async function addProfile(name: string, birthday?: string, notes?: string) {
//   const database = await initDb()
//   await database.run(`INSERT INTO profiles (name, birthday, notes) VALUES (?, ?, ?)`, [
//     name,
//     birthday ?? null,
//     notes ?? null,
//   ])
// }

// export async function getProfiles() {
//   const database = await initDb()
//   const res = await database.query(`SELECT * FROM profiles`)
//   return res.values ?? []
// }

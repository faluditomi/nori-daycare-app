import { getDB } from '@/db/db.ts'
import type { SQLiteDBConnection } from '@capacitor-community/sqlite'

//Profiles
export async function getAllProfiles() {
  const db: SQLiteDBConnection = await getDB()
  const res = await db.query('SELECT * FROM profiles ORDER BY name ASC')
  return res.values ?? []
}

export async function getProfileById(id: number) {
  const db: SQLiteDBConnection = await getDB()
  const res = await db.query('SELECT * FROM profiles WHERE id = ?', [id])
  return res.values?.[0] ?? null
}

//Events
export async function getAllEvents() {
  const db: SQLiteDBConnection = await getDB()
  const res = await db.query('SELECT * FROM events ORDER BY date DESC')
  return res.values ?? []
}

export async function getEventById(id: number) {
  const db: SQLiteDBConnection = await getDB()
  const res = await db.query('SELECT * FROM events WHERE id = ?', [id])
  return res.values?.[0] ?? null
}

//Reminders
export async function getAllReminders() {
  const db: SQLiteDBConnection = await getDB()
  const res = await db.query('SELECT * FROM reminders ORDER BY date DESC')
  return res.values ?? []
}

export async function getReminderById(id: number) {
  const db: SQLiteDBConnection = await getDB()
  const res = await db.query('SELECT * FROM reminders WHERE id = ?', [id])
  return res.values?.[0] ?? null
}

//Notification
export async function getAllNotifications() {
  const db: SQLiteDBConnection = await getDB()
  const res = await db.query('SELECT * FROM notifications ORDER BY date DESC')
  return res.values ?? []
}

export async function getNotificationById(id: number) {
  const db: SQLiteDBConnection = await getDB()
  const res = await db.query('SELECT * FROM notifications WHERE id = ?', [id])
  return res.values?.[0] ?? null
}

//Global Parameters
export async function getActiveSettings() {
  const db: SQLiteDBConnection = await getDB()
  const res = await db.query('SELECT * FROM settings WHERE is_active = 1')
  return res.values?.[0] ?? null
}

//Notes
export async function getAllNotes() {
  const db: SQLiteDBConnection = await getDB()
  const res = await db.query('SELECT * FROM notes ORDER BY date_last_modified DESC')
  return res.values ?? []
}

export async function getNoteById(id: number) {
  const db: SQLiteDBConnection = await getDB()
  const res = await db.query('SELECT * FROM notes WHERE id = ?', [id])
  return res.values?.[0] ?? null
}

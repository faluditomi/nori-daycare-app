import { getDB } from '@/db/db.ts'

export async function getProfiles() {
  const db = await getDB()
  const res = await db.query('SELECT * FROM profiles ORDER BY name')
  return res.values ?? []
}

export async function getProfileById(id: number) {
  const db = await getDB()
  const res = await db.query('SELECT * FROM profiles WHERE id = ?', [id])
  return res.values?.[0] ?? null
}

import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite'

import initSQL from './migrations/1__init.sql?raw'
import seedProfilesSQL from './migrations/2__seed_db.sql?raw'

const migrations: string[] = [initSQL, seedProfilesSQL]

let sqlite: SQLiteConnection
let db: SQLiteDBConnection | null = null

export async function getDB(): Promise<SQLiteDBConnection> {
  if (!sqlite) {
    sqlite = new SQLiteConnection(CapacitorSQLite)
  }

  if (!db) {
    const version = migrations.length

    // register upgrade path once
    await sqlite.addUpgradeStatement('nori-daycare-app', [
      {
        toVersion: 1,
        statements: [migrations[0]], // 1__init
      },
      {
        toVersion: 2,
        statements: [migrations[1]], // 2__seed_db
      },
    ])

    db = await sqlite.createConnection('nori-daycare-app', false, 'no-encryption', version, false)

    await db.open()
  }

  return db
}

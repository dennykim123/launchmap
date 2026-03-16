import { sql } from "@vercel/postgres";

export async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS plans (
      id TEXT PRIMARY KEY,
      session_id TEXT NOT NULL,
      form JSONB NOT NULL,
      plan JSONB NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS idx_plans_session ON plans(session_id)
  `;
}

export { sql };

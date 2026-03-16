import { ensureTable, sql } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

type Params = Promise<{ id: string }>;

// GET /api/plans/:id — get a single plan (shareable)
export async function GET(
  _req: NextRequest,
  { params }: { params: Params }
) {
  await ensureTable();
  const { id } = await params;

  const { rows } = await sql`
    SELECT id, form, plan, created_at FROM plans WHERE id = ${id}
  `;

  if (rows.length === 0) {
    return NextResponse.json({ error: "Plan not found" }, { status: 404 });
  }

  const r = rows[0];
  return NextResponse.json({
    id: r.id,
    createdAt: r.created_at,
    form: r.form,
    plan: r.plan,
  });
}

// DELETE /api/plans/:id — delete a plan
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Params }
) {
  await ensureTable();
  const { id } = await params;
  const jar = await cookies();
  const sid = jar.get("lm_sid")?.value;

  if (!sid) {
    return NextResponse.json({ error: "No session" }, { status: 401 });
  }

  await sql`DELETE FROM plans WHERE id = ${id} AND session_id = ${sid}`;
  return NextResponse.json({ ok: true });
}

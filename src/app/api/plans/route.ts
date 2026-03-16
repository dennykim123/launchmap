import { ensureTable, sql } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

async function getSessionId() {
  const jar = await cookies();
  return jar.get("lm_sid")?.value || generateId();
}

// GET /api/plans — list plans for current session
export async function GET() {
  await ensureTable();
  const sid = await getSessionId();

  const { rows } = await sql`
    SELECT id, form, plan, created_at
    FROM plans
    WHERE session_id = ${sid}
    ORDER BY created_at DESC
  `;

  const plans = rows.map((r) => ({
    id: r.id,
    createdAt: r.created_at,
    form: r.form,
    plan: r.plan,
  }));

  return NextResponse.json(plans);
}

// POST /api/plans — save a new plan
export async function POST(req: NextRequest) {
  await ensureTable();
  const sid = await getSessionId();
  const body = await req.json();
  const { form, plan } = body;

  if (!form || !plan) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const id = generateId();

  await sql`
    INSERT INTO plans (id, session_id, form, plan)
    VALUES (${id}, ${sid}, ${JSON.stringify(form)}, ${JSON.stringify(plan)})
  `;

  const saved = {
    id,
    createdAt: new Date().toISOString(),
    form,
    plan,
  };

  const res = NextResponse.json(saved);
  res.cookies.set("lm_sid", sid, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 90 * 24 * 60 * 60,
    path: "/",
  });
  return res;
}

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const required = [
      "first_name",
      "last_name",
      "email",
      "phone",
      "room_id",
      "room_type",
      "room_type_id",
      "check_in_date",
      "check_out_date",
      "nights",
      "price",
    ];

    for (const key of required) {
      if (body[key] === undefined || body[key] === null || String(body[key]).trim() === "") {
        return NextResponse.json({ error: `Missing field: ${key}` }, { status: 400 });
      }
    }

    const DIRECTUS_URL = process.env.DIRECTUS_URL;
    const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;
    const COLLECTION = process.env.DIRECTUS_BOOKING_COLLECTION || "booking";

    if (!DIRECTUS_URL || !DIRECTUS_TOKEN) {
      return NextResponse.json(
        { error: "Directus env not set (DIRECTUS_URL / DIRECTUS_TOKEN)" },
        { status: 500 }
      );
    }

    const upstream = await fetch(`${DIRECTUS_URL}/items/${COLLECTION}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DIRECTUS_TOKEN}`,
      },
      body: JSON.stringify({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        phone: body.phone,
        room_id: body.room_id,
        room_type: body.room_type,
        room_type_id: body.room_type_id,
        check_in_date: body.check_in_date,
        check_out_date: body.check_out_date,
        nights: Number(body.nights),
        price: Number(body.price),
      }),
      cache: "no-store",
    });

    const text = await upstream.text();

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Directus error", details: text },
        { status: 502 }
      );
    }

    // Directus вернёт JSON строкой
    let json = {};
    try { json = JSON.parse(text); } catch {}

    return NextResponse.json({ ok: true, directus: json }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: String(err?.message || err) },
      { status: 500 }
    );
  }
}
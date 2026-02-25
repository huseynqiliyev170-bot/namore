import { NextResponse } from "next/server";
import { makeReservation } from "@library/rooms-apis";

export async function POST(req) {
  const {
    price,
    room_id,
    nights,
    check_in_date,
    check_out_date,
    first_name,
    last_name,
    phone_number,
    email,
  } = await req.json();

  const result = await makeReservation({
    first_name,
    last_name,
    email,
    phone_number,
    check_in_date,
    check_out_date,
    room_id,
    nights,
    total_price: price,
    payment_id: 'cash',
  });

  if (result.error) {
    return new NextResponse(JSON.stringify({ error: result.error }), {
        status: 500,
    });
  }

  return NextResponse.json({ url: `${process.env.APP_URL}/booking-success` }, {
    status: 200,
    statusText: "Booking Successful",
  });
}
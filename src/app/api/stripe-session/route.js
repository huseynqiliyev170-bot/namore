import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe( process.env.STRIPE_SECRET_KEY );

export async function POST(req) {
  const {
    price,
    roomType,
    roomTypeId,
    room_id,
    nights,
    check_in_date,
    check_out_date,
    first_name,
    last_name,
    phone_number,
    email,
  } = await req.json();
  const totalPrice = price * 100;
  try {
    // Create Checkout Session
    const stripeSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: roomType,
              description: `Payment for ${nights} Night(s)`
            },
            unit_amount: totalPrice,
          },
        },
      ],
      mode: "payment",
      success_url: `${process.env.APP_URL}/booking-success`,
      cancel_url: `${process.env.APP_URL}/booking-confirmation?checkInDate=${check_in_date}&checkOutDate=${check_out_date}&roomId=${room_id}&roomTypeId=${roomTypeId}`,
      metadata: {
        nights,
        total_price: totalPrice,
        room_id,
        check_in_date,
        check_out_date,
        first_name,
        last_name,
        phone_number,
        email,
      },
    });
    console.log(stripeSession);
    return NextResponse.json({ url: stripeSession.url });
  } catch (err) {
    console.log({ err });
    return NextResponse.json(
      { message: "An expected error occurred, please try again" },
      { status: 500 }
    );
  }
}
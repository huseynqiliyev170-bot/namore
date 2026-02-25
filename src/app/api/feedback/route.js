import { sendFeedback } from "@library/pages-apis";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();

    const result = await sendFeedback(body);

    if (result.error) {
        return new NextResponse(JSON.stringify({ error: result.error }), {
            status: 500,
        });
    }

	return new NextResponse(JSON.stringify({ success: true }), {
	    status: 200,
	});
}
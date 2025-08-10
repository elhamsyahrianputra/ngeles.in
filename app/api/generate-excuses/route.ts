// file app/api/generate-excuses/route.ts

import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  try {
    const { situation } = await req.json();
    const model = "ibm-granite/granite-3.3-8b-instruct";
    const prompt = `User's Reason: ${situation}

      Generate a concise, logical, and creative reason (in Indonesian) from the first-person perspective (saya) to decline or avoid the given situation, without lying but allowing for a touch of humor if appropriate. Ensure the response is no more than 3 sentences long and does not exceed 50 words.

      Example:
      User's Reason: I want to decline my office friend's invitation to watch a movie because I already have plans to go on vacation with my family.

      Response: "Maaf, saya sudah membuat agenda dengan keluarga saya, mungkin lain waktu saya akan ikut."
      just give response in indonesia, dont give any translation or any language
      `;

    if (!situation) {
      return NextResponse.json(
        { error: "Situation is required" },
        { status: 400 }
      );
    }

    const excuses = await replicate.run(model, {
      input: {
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 100,
      },
    });

    return NextResponse.json({ excuses });
  } catch (error) {
    console.error("Error generating excuses:", error);
    return NextResponse.json(
      { error: "Failed to generate excuses" },
      { status: 500 }
    );
  }
}

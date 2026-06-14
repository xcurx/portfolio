import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");

  try {
    const baseUrl = process.env.COUNTER_API_URL;
    if (!baseUrl) {
      throw new Error("COUNTER_API_URL is missing in environment variables.");
    }

    const url = action === "up" ? `${baseUrl}/up` : `${baseUrl}/`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("View counter API error:", error);
    // Fallback to avoid breaking the UI
    return NextResponse.json({ count: 1 }, { status: 500 });
  }
}

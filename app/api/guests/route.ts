import { NextResponse } from "next/server";
import guests from "@/data/guests.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search")?.trim().toLowerCase() || "";

  if (search.length < 3) {
    return NextResponse.json([]);
  }

  const matches = guests
    .filter((guest) =>
      guest.name.toLowerCase().includes(search)
    )
    .slice(0, 10);

  return NextResponse.json(matches);
}
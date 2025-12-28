import dbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await dbConnect();
    const hero = await db.collection("heroes").findOne({}, { sort: { _id: -1 } });
    return NextResponse.json(hero);
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json({ error: "Cannot fetch hero data" }, { status: 500 });
  }
}

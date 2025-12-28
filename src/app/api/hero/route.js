import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1️⃣ heroes collection connect
    const heroCollection = await dbConnect(
      collectionNamesobj.heroesCollection
    );

    // 2️⃣ সর্বশেষ hero ডাটা ফেচ
    const hero = await heroCollection.findOne(
      {},
      { sort: { _id: -1 } }
    );

    // 3️⃣ ডাটা না থাকলে
    if (!hero) {
      return NextResponse.json(
        { message: "No hero data found" },
        { status: 404 }
      );
    }

    // 4️⃣ সফল response
    return NextResponse.json(hero, { status: 200 });

  } catch (error) {
    console.error("MongoDB Error (Hero):", error);

    return NextResponse.json(
      { error: "Failed to fetch hero data" },
      { status: 500 }
    );
  }
}

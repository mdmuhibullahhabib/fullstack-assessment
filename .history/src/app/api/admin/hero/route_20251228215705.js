import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const heroCollection = await dbConnect(
      collectionNamesobj.heroesCollection
    );

    const data = await req.json();

    const result = await heroCollection.insertOne({
      ...data,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Hero POST Error:", error);
    return NextResponse.json(
      { message: "Failed to add hero" },
      { status: 500 }
    );
  }
}

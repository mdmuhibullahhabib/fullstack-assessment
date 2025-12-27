import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const cart = await req.json();
    const cartCollection = await dbConnect(
      collectionNamesobj.cartCollection
    );

    const result = await cartCollection.insertOne({
      ...cart,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, result },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

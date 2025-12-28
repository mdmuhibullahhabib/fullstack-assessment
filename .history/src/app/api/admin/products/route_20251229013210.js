import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const productCollection = await dbConnect(collectionNamesobj.productsCollection);

    const result = await productCollection.insertOne(data);

    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}

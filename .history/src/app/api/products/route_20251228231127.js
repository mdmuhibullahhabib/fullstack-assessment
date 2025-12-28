import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to MongoDB
    const productCollection = await dbConnect(collectionNamesobj.productsCollection);

    // Find last 4 added products (sorted by _id descending)
    const products = await productCollection
      .find({})
      .sort({ _id: -1 })
      .limit(4)
      .toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

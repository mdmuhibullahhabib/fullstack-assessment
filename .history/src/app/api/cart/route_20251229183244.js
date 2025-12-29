import { NextResponse } from "next/server";
import { auth } from "@/lib/auth"; // NextAuth v5
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

// ================= POST: Add to Cart =================
export async function POST(req) {
  try {
    // 🔐 Session check
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { name, image, price, quantity } = body;

    // ✅ Validation
    if (!name || !image || !price || !quantity) {
      return NextResponse.json(
        { message: "Invalid data" },
        { status: 400 }
      );
    }

    const cartCollection = await dbConnect(
      collectionNamesobj.cartCollection
    );

    const cartItem = {
      userEmail: session.user.email,
      name,
      image,
      price,
      quantity,
      createdAt: new Date(),
    };

    await cartCollection.insertOne(cartItem);

    return NextResponse.json(
      { message: "Added to cart successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Cart POST error:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

// ================= GET: Get Cart =================
export async function GET() {
  try {
    // 🔐 Session check
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const cartCollection = await dbConnect(
      collectionNamesobj.cartCollection
    );

    // 🔎 Email based validation
    const cartItems = await cartCollection
      .find({ userEmail: session.user.email })
      .toArray();

    return NextResponse.json(cartItems);
  } catch (error) {
    console.error("Cart GET error:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

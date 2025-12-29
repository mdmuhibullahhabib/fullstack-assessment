import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

// Add to Cart 
export async function POST(req) {
  try {

    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { name, image, price, quantity } = body;

    // Validation
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

// Get Cart 
export async function GET() {
  try {

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

    // Email based validation
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

"delete "
export async function DELETE(req) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "Cart ID missing" }, { status: 400 });
    }

    const cartCollection = await dbConnect(
      collectionNamesobj.cartCollection
    );

    await cartCollection.deleteOne({
      _id: new ObjectId(id),
      userEmail: session.user.email,
    });

    return NextResponse.json({ message: "Item removed" });
  } catch (error) {
    console.error("Cart DELETE error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

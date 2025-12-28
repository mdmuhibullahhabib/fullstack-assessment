export async function POST(req) {
  try {
    const db = await dbConnect();
    const data = await req.json();
    const result = await db.collection("heroes").insertOne(data);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Cannot add hero" }, { status: 500 });
  }
}

"use server";

import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  const userCollection = await dbConnect(
    collectionNamesobj.usersCollection
  );

  const user = await userCollection.findOne({ email });
  if (!user) return null;

  const isPasswordOk = await bcrypt.compare(password, user.password);
  if (!isPasswordOk) return null;

  // ✅ Return NextAuth-safe user object
  return {
    id: user._id.toString(),
    name: user.name || "",
    email: user.email,
    image: user.image || null,
  };
};

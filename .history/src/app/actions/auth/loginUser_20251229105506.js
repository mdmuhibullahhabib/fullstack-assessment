"use server";

import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import bcrypt from "bcrypt";

export const loginUser = async ({ email, password }) => {
  const usersCollection = await dbConnect(
    collectionNamesobj.usersCollection
  );

  const user = await usersCollection.findOne({ email });
  if (!user) return null;

  const isPasswordOk = await bcrypt.compare(password, user.password);
  if (!isPasswordOk) return null;

  delete user.password;
  return user;
};

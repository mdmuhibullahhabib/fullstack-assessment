// import dbConnect, { collectionNamesobj } from "../dbconnect";
import dbConnect from "@/lib/dbconnect";
import bcrypt from "bcrypt";

export async function verifyCredentials({ email, password }) {
  const usersCollection = await dbConnect(collectionNamesobj.usersCollection);

  const user = await usersCollection.findOne({ email });
  if (!user) return null;

  const isPasswordOk = await bcrypt.compare(password, user.password);
  if (!isPasswordOk) return null;

  delete user.password;

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    image: user.image || null,
  };
}

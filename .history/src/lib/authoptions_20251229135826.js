import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect, { collectionNamesobj } from "./dbconnect";
import { loginUser } from "@/app/actions/auth/loginUser";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await loginUser(credentials);
          return user || null;
        } catch (err) {
          console.error("Authorize error:", err);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (!account || account.provider !== "google") return true;

      try {
        const usersCollection = await dbConnect(collectionNamesobj.usersCollection);
        const existingUser = await usersCollection.findOne({ email: user.email });

        if (!existingUser) {
          await usersCollection.insertOne({
            name: user.name || "",
            email: user.email,
            image: user.image || "",
            provider: "google",
            providerAccountId: account.providerAccountId,
            createdAt: new Date(),
          });
        }

        return true;
      } catch (err) {
        console.error("Google signIn DB error:", err);
        return false;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

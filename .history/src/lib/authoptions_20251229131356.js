import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect, { collectionNamesobj } from "./dbconnect";
import { verifyCredentials } from "@/app/actions/auth/verifyCredentials";
// import { signIn } from "next-auth/react";
// import { verifyCredentials } from "./auth/verifyCredentials";

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
          const user = await verifyCredentials(credentials);
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
      // Only for Google login
      if (!account || account.provider !== "google") return true;

      const usersCollection = await dbConnect(
        collectionNamesobj.usersCollection
      );

      const existingUser = await usersCollection.findOne({
        email: user.email,
      });

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
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

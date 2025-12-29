import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: { strategy: "jwt" },

  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials) return null;

        const users = await dbConnect(collectionNamesobj.usersCollection);
        const user = await users.findOne({ email: credentials.email });

        if (!user) return null;

        const ok = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!ok) return null;

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name ?? "",
        };
      },
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },
});

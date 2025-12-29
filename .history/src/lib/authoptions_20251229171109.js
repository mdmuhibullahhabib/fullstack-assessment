import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    // 🔐 Credentials Login
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const usersCollection = await dbConnect(
          collectionNamesobj.usersCollection
        );

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) return null;

        const isPasswordOk = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordOk) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image || null,
        };
      },
    }),

    // 🌐 Google Login
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    // Google login হলে DB তে save
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const usersCollection = await dbConnect(
          collectionNamesobj.usersCollection
        );

        const exists = await usersCollection.findOne({
          email: user.email,
        });

        if (!exists) {
          await usersCollection.insertOne({
            name: user.name,
            email: user.email,
            image: user.image,
            provider: "google",
            providerAccountId: account.providerAccountId,
            createdAt: new Date(),
          });
        }
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

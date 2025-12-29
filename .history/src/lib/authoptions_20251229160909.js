import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect, { collectionNamesobj } from "./dbconnect";
import { loginUser } from "@/app/actions/auth/loginUser";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return await loginUser(credentials);
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  pages: {
    signIn: "/auth",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },

    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        const userCollection = await dbConnect(
          collectionNamesobj.usersCollection
        );

        const isExisted = await userCollection.findOne({
          email: user.email,
        });

        if (!isExisted) {
          await userCollection.insertOne({
            name: user.name,
            email: user.email,
            image: user.image,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            createdAt: new Date(),
          });
        }
      }
      return true;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

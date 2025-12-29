import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect, { collectionNamesobj } from "./dbconnect";
import bcrypt from "bcrypt";

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
          const { email, password } = credentials;

          const usersCollection = await dbConnect(
            collectionNamesobj.usersCollection
          );

          const user = await usersCollection.findOne({ email });
          if (!user) return null;

          const isPasswordOk = await bcrypt.compare(
            password,
            user.password
          );
          if (!isPasswordOk) return null;

          delete user.password;

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            image: user.image || null,
          };
        } catch {
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

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect, { collectionNamesobj } from "./dbconnect";
import { loginUser } from "@/app/actions/auth/loginUser";


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                // ✅ DB connect
                const userCollection = await dbConnect(
                    collectionNamesobj.usersCollection
                );

                // ✅ Find user
                const user = await userCollection.findOne({
                    email: credentials.email,
                });

                if (!user) return null;

                // ⚠️ এখানে password check করো (bcrypt হলে compare)
                const isPasswordCorrect =
                    credentials.password === user.password; // example

                if (!isPasswordCorrect) return null;

                // ✅ Must return plain object
                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    image: user.image || null,
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account) {
                const { providerAccountId, provider } = account
                const { email: user_email, image, name } = user

                //  Await dbConnect & correct collection name
                const userCollection = await dbConnect(collectionNamesobj.usersCollection)

                const isExisted = await userCollection.findOne({ providerAccountId })
                if (!isExisted) {
                    const payload = { providerAccountId, provider, email: user_email, image, name }
                    await userCollection.insertOne(payload)
                }
            }
            return true
        }
    },
}
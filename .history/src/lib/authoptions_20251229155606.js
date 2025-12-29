import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect, { collectionNamesobj } from "./dbconnect";
import { loginUser } from "@/app/actions/auth/loginUser";

export const authOptions = {
    // ১. অত্যন্ত গুরুত্বপূর্ণ: Credentials ব্যবহার করলে সেশন স্ট্র্যাটেজি JWT দিতে হবে
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;
                
                const user = await loginUser(credentials);
                // ডাটাবেস থেকে পাওয়া ইউজার অবজেক্ট সরাসরি রিটার্ন করুন
                if (user) {
                    return {
                        id: user._id.toString(), // MongoDB ID কে স্ট্রিং এ কনভার্ট করুন
                        name: user.name,
                        email: user.email,
                        image: user.image
                    };
                }
                return null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    pages: {
        signIn: '/auth',
        error: '/auth', // এরর হলে যেন আপনার কাস্টম পেজেই থাকে
    },
    callbacks: {
        async signIn({ user, account }) {
            // শুধুমাত্র সোশ্যাল লগইনের (Google/GitHub) জন্য ডাটাবেসে সেভ করার লজিক
            if (account?.provider !== "credentials") {
                try {
                    const { providerAccountId, provider } = account;
                    const { email, image, name } = user;
                    const userCollection = await dbConnect(collectionNamesobj.usersCollection);
                    
                    const isExisted = await userCollection.findOne({ providerAccountId });
                    if (!isExisted) {
                        await userCollection.insertOne({ 
                            providerAccountId, 
                            provider, 
                            email, 
                            image, 
                            name,
                            createdAt: new Date()
                        });
                    }
                } catch (error) {
                    console.error("Database error during sign in:", error);
                    return false; // ডাটাবেস এরর হলে লগইন আটকে দিবে
                }
            }
            return true;
        },
        // JWT এ ইউজারের ডাটা পাস করার জন্য
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        // সেশনে ইউজারের ডাটা দেখানোর জন্য
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET, // আপনার .env ফাইলে এটি থাকতে হবে
};
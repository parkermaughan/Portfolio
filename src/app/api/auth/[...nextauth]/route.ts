import { db } from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth"
import type { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";

const handler = NextAuth({
    adapter:DrizzleAdapter(db) as Adapter,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
});

export { handler as GET, handler as POST }
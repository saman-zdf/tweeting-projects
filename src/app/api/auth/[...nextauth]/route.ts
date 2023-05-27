import prisma from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "test@email.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        console.log("Attempting to login for", credentials?.email);

        /*
         * NOTE: We have two ways to get the user,
         * 1. Make API request to login route
         * 2. Make a query to the db, which is more preferable.
         */
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        const comparePassword =
          user &&
          credentials?.password &&
          (await bcrypt.compare(credentials?.password, user?.password));

        // If no error and we have user data, return it
        if (user && user?.id && comparePassword) {
          return Promise.resolve(user);
        } else {
          console.log("Authorize method return null");
          // Return null if user data could not be retrieved
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    // Set strategy to jwt for creating a token
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;

      return session;
    },
  },
});

export { handler as GET, handler as POST };

import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { GithubProfile } from "next-auth/providers/github"

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      profile(profile: GithubProfile){
        return {
          ...profile,
          role: profile.role ?? "user",
          id: profile.id.toString(),
          image: profile.avatar_url,
        }
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        //Need to retrieve user data to verify
        const user = { id: "42", name: "Cameron", password: "cheesewheel", role: "admin" };

        return credentials?.username === user.name &&
          credentials?.password === user.password
          ? user
          : null;
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}){
      if(user) token.role = user.role
      return token
    },
    async session({session, token}){
      if(session?.user) session.user.role = token.role
      return session
    }
  }
};

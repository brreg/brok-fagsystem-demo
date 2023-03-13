import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb/client";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: JSON.parse(process.env.SMTP_SERVER_CONFIG!),
      from: process.env.SMTP_SERVER_EMAIL_FROM,
    }),
  ],
});

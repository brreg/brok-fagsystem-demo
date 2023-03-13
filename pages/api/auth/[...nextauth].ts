import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  providers: [
    EmailProvider({
      server: JSON.parse(process.env.SMTP_SERVER_CONFIG!),
      from: process.env.EMAIL_FROM,
    }),
  ],
})
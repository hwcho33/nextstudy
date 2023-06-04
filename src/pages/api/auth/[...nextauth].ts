import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '0750cb1e4b67d9b90c65',
      clientSecret: '35cb9dc697efccf5c4ec3944ae9cf324a49708fe',
    }),
  ],
  secret: 'qwer1234',
}
export default NextAuth(authOptions)

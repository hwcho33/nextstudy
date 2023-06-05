import './globals.css'
import Link from 'next/link'
import LoginBtn from './loginButton'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { use } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  // console.log(session)

  return (
    <html lang="en">
      <body className={inter.className}>
        {session?.user ? <p>ID : {session?.user.name}</p> : ''}
        <div className="navbar">
          <div className="linkWrapper">
            <Link href="/">홈</Link>
          </div>
          <LoginBtn userInfo={session?.user} />
          <div className="linkWrapper">
            <Link href="/list">List</Link>
          </div>
          <div className="linkWrapper">
            <Link href="/join">회원가입</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}

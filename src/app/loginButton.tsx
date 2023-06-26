'use client'

import { signIn, signOut } from 'next-auth/react'
const LoginBtn = ({ userInfo }) => {
  return (
    <button
      onClick={() => {
        if (userInfo) {
          signOut()
        } else {
          signIn()
        }
      }}
    >
      {userInfo ? '로그아웃' : '로그인'}
    </button>
  )
}

export default LoginBtn

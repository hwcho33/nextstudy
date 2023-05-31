'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const DetailLink = () => {
  const router = useRouter()
  useEffect(() => {}, [])

  return (
    <button
      onClick={() => {
        router.push('/')
      }}
    >
      버튼
    </button>
  )
}

export default DetailLink

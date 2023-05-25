'use client'

import { useRouter } from 'next/navigation'

const DetailLink = () => {
  const router = useRouter()

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

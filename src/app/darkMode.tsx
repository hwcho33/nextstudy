'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const DarkMode = () => {
  const router = useRouter()
  const [isDark, setIsDark] = useState(false)
  const cookie = ''

  useEffect(() => {
    console.log('pus1htes33333')
    if (cookie === '') {
      document.cookie = 'mode=light; max-age=' + 3600 * 24 * 400
    }
  }, [])
  return (
    <span
      onClick={() => {
        const cookie = ('; ' + document.cookie)
          .split('; mode=')
          .pop()
          ?.split(';')[0]
        if (cookie === 'light') {
          document.cookie = 'mode=dark; max-age=' + 3600 * 24 * 400
          setIsDark(true)
          router.refresh()
        } else {
          document.cookie = 'mode=light; max-age=' + 3600 * 24 * 400
          setIsDark(false)
          router.refresh()
        }
      }}
    >
      {isDark ? '🌙' : '☀️'}
    </span>
  )
}

export default DarkMode

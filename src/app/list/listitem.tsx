'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import DetailLink from './DetailLink'
import { Router } from 'next/router'

const ListItem = ({ result, isAdmin }) => {
  return (
    <div>
      {result.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <Link prefetch={false} href={`detail/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            <DetailLink />
            <Link prefetch={false} href={`edit/${item._id}`}>
              수정
            </Link>
            {isAdmin ? (
              <span
                onClick={e => {
                  console.log(typeof item._id)
                  fetch('/api/post/delete', {
                    method: 'POST',
                    body: item._id,
                  })
                    .then(res => {
                      return res.json()
                    })
                    .then(res => {
                      e.target.parentElement.style.opacity = 0
                      setTimeout(() => {
                        e.target.parentElement.style.display = 'none'
                      }, 1000)
                    })
                  // fetch('/api/test/eoke')
                }}
              >
                삭제
              </span>
            ) : (
              <></>
            )}

            <p>{item.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ListItem

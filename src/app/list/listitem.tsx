'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import DetailLink from './DetailLink'

const ListItem = ({ result }) => {
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
            <span
              onClick={() => {
                console.log(item._id)
                fetch('/api/post/delete', {
                  method: 'DELETE',
                  body: item._id,
                })
              }}
            >
              삭제
            </span>
            <p>{item.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ListItem

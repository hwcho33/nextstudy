'use client'

import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'

import { useEffect, useState } from 'react'

const Comment = ({ id }) => {
  const [comment, setComment] = useState('')
  const [list, setList] = useState([])
  const getComment = async parentId => {
    fetch('/api/comment/getComment?id=' + parentId)
      .then(res => {
        return res.json()
      })
      .then(response => {
        console.log(response)
        setList(response.body)
      })
  }

  useEffect(() => {
    getComment(id)
  }, [])

  return (
    <div>
      <hr></hr>
      <div>
        {list.length > 0
          ? list.map((item, index) => {
              return <p key={index}>{item.comment}</p>
            })
          : '로딩중'}
      </div>
      <input
        onChange={e => {
          setComment(e.target.value)
        }}
      />
      <button
        onClick={() => {
          fetch('/api/comment/addComment', {
            method: 'POST',
            body: JSON.stringify({ parent: id, comment: comment }),
          })
            .then(r => r.json())
            .then(result => {
              setList(result)
            })
        }}
      >
        댓글쓰기
      </button>
    </div>
  )
}

export default Comment

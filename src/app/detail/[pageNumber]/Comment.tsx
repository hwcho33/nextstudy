'use client'

import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'
import { useEffect, useState } from 'react'

const Comment = ({ id }) => {
  const [comment, setComment] = useState('')
  const [list, setList] = useState([])
  const getComment = async parentId => {
    // const db = (await connectDB).db('next')
    // const result = await db
    //   .collection('comment')
    //   .find({ _id: new ObjectId(parentId) })
    //   .toArray()
    fetch('/api/comment/getComment', {
      method: 'POST',
      body: JSON.stringify({ id }),
    })
      .then(res => {
        return res.json()
      })
      .then(response => {
        setList(response.body)
      })
  }
  useEffect(() => {
    getComment(id)
  }, [])
  return (
    <div>
      <div>
        {list.map((item, index) => {
          return <p key={index}>{item.comment}</p>
        })}
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
        }}
      >
        댓글쓰기
      </button>
    </div>
  )
}

export default Comment

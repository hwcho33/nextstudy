import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'
import Comment from './Comment'
const Detail = async (props: any) => {
  const client = await connectDB
  const db = client.db('next')

  const comment = await db
    .collection('comment')
    .find({ _id: new ObjectId(props.params.pageNumber) })
    .toArray()

  const result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.pageNumber) })

  return (
    <div>
      <h4>상세 페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment id={props.params.pageNumber} />
    </div>
  )
}

export default Detail

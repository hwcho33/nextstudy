import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'
const Detail = async (props: any) => {
  const client = await connectDB
  const db = client.db('next')

  const result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.pageNumber) })

  return (
    <div>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  )
}

export default Detail

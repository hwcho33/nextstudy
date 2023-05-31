import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'

const Edit = async (props: any) => {
  const db = (await connectDB).db('next')
  const result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) })

  return (
    <div>
      <h4>글 수정</h4>
      <form action="/api/edit/update" method="POST">
        <input type="hidden" name="id" defaultValue={props.params.id} />
        <input name="title" defaultValue={result.title} />
        <input name="contents" defaultValue={result.content} />
        <button type="submit">수정</button>
      </form>
    </div>
  )
}

export default Edit

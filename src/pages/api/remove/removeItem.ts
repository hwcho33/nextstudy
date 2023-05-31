import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'

const handler = async (request, response) => {
  console.log(request.body)
  const db = (await connectDB).db('next')

  const result = await db
    .collection('post')
    .deleteOne({ _id: new ObjectId(request.body.id) })
  console.log(result)
  return response.status(200).json(result)
}

export default handler

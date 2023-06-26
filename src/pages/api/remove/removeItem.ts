import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'

const handler = async (request, response) => {
  const db = (await connectDB).db('next')

  const result = await db
    .collection('post')
    .deleteOne({ _id: new ObjectId(request.body.id) })

  return response.status(200).json(result)
}

export default handler

import { connectDB } from '@/utils/database'

const handler = async (request, response) => {
  const db = (await connectDB).db('next')
  const result = await db.collection('post').find().toArray()
  return response.status(200).json(result)
}

export default handler

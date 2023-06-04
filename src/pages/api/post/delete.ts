import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const db = (await connectDB).db('next')

    const result = await db
      .collection('post')
      .deleteOne({ _id: new ObjectId(request.body) })
    console.log(result)
    return response.status(200).json(result)
  }
}

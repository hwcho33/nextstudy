import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const db = (await connectDB).db('next')

    const result = await db
      .collection('post')
      .deleteOne({ _id: new ObjectId(request.body) })

    return response.status(200).json(result)
  }
}

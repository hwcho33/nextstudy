import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
export default async function handler(request, response) {
  const requestData = JSON.parse(request.body)
  const session = await getServerSession(request, response, authOptions)
  try {
    const db = (await connectDB).db('next')
    await db.collection('comment').insertOne({
      parent: new ObjectId(requestData.parent),
      comment: requestData.comment,
      author: session?.user?.email,
    })

    const result = await db.collection('comment').find().toArray()
    return response.status(200).json(result)
  } catch (error) {
    console.error(error)
  }
}

import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'

export default async function handler(request, response) {
  const requestData = JSON.parse(request.body)
  try {
    const db = (await connectDB).db('next')
    await db.collection('comment').insertOne({
      parent: new ObjectId(requestData.parent),
      comment: requestData.comment,
    })
    return response.status(200).json('success')
  } catch (error) {
    console.error(error)
  }
}

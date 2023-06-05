import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'

export default async function handler(request, response) {
  const data = JSON.parse(request.body)
  console.log('data : ', data.id)

  const db = (await connectDB).db('next')
  const result = await db
    .collection('comment')
    .find({ parent: new ObjectId(data.id) })
    .toArray()
  console.log(result)
  response.status(200).json({ body: result })
}

import { connectDB } from '@/utils/database'

export default async function handler(request: any, response: any) {
  if (request.method === 'POST') {
    if (request.body.title === '') {
      return response.status(500).json('no title')
    }
    try {
      const db = (await connectDB).db('next')
      const result = await db.collection('post').insertOne(request.body)
      return response.status(200).json('success')
    } catch (error) {
      throw new Error(error)
    }
  }
}

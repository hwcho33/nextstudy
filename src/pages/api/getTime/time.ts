import { connectDB } from '@/utils/database'

export default async function handler(request, response) {
  const db = (await connectDB).db('next')
  const time = new Date()
  console.log(time)
  return response.status(200).json(time)
}

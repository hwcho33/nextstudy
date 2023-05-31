import { connectDB } from '@/utils/database'

export default async function handler(request, response) {
  const db = (await connectDB).db('next')
  const result = await db.collection('post').find().toArray()
  let isExist = false
  result.forEach((item, index) => {
    if (item.title === request.body.title) {
      isExist = true
    }
  })

  if (!isExist) {
    // 중복없음
    await db.collection('post').insertOne(request.body)
    return response.status(200).json('JoinMemember Success')
  } else {
    return response.status(400).json('Duplicate MemberId')
  }
}

import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'
import { redirect } from 'next/navigation'
const handler = async (request, response) => {
  try {
    const db = (await connectDB).db('next')

    await db.collection('post').updateOne(
      { _id: new ObjectId(request.body.id) },
      {
        $set: { title: request.body.title, content: request.body.contents },
      },
    )

    return response.status(200).json('success')
  } catch (e) {
    console.error(e)
  }
}

export default handler

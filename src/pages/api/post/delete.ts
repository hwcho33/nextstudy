import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'

export default async function handler(request, response) {
  if (request.method === 'DELETE') {
    console.log('hh : ', request.body)
    // const db = (await connectDB).db('next')

    // const result = await db
    //   .collection('post')
    //   .deleteOne({ _id: new ObjectId(request.body.id) })
    // console.log(result)
    // return response.status(200).json(result)
  }
}

import { connectDB } from '@/utils/database'
import bcrypt from 'bcrypt'
import { Db } from 'mongodb'

const validationCheck = value => {
  if (value.name === '' || value.email === '' || value.password === '') {
    return false
  }
  return true
}

const isDuplicatedId = async (value, db: Db) => {
  const result = await db.collection('user_cred').findOne({ name: value })
  return result ? true : false
}

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const db = (await connectDB).db('forum')
    const isDuplicated = await isDuplicatedId(request.body.name, db)
    const valid = validationCheck(request.body)

    if (isDuplicated) {
      return response.status(400).json('Duplicated')
    }

    if (!valid) {
      return response.status(400).json('Parameter Issue')
    }

    const hash = await bcrypt.hash(request.body.password, 10)
    request.body.password = hash

    await db.collection('user_cred').insertOne(request.body)

    response.status(200).json('Success')
  }
}

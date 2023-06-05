import { connectDB } from '@/utils/database'
import ListItem from './listitem'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function List() {
  const session = await getServerSession(authOptions)
  const isAdmin = session?.user.name === 'hwcho33' ? true : false
  const client = await connectDB
  const db = client.db('next')
  const result = await db.collection('post').find().toArray()

  return (
    <div className="list-bg">
      <ListItem result={result} isAdmin={isAdmin} />
    </div>
  )
}

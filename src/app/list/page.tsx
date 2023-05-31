import { connectDB } from '@/utils/database'
import ListItem from './listitem'

export default async function List() {
  const client = await connectDB
  const db = client.db('next')
  const result = await db.collection('post').find().toArray()

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  )
}

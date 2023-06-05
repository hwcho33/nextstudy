import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

const Write = async () => {
  const session = await getServerSession(authOptions)
  const isAdmin = session?.user.name === 'hwcho33' ? true : false

  return (
    <div>
      <h4>글작성</h4>

      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="contents title" />
        <input name="contents" placeholder="contetns" />
        {isAdmin ? <button type="submit">버튼</button> : <></>}
      </form>
    </div>
  )
}

export default Write

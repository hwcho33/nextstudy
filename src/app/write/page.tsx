const Write = () => {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="contents title" />
        <input name="contents" placeholder="contetns" />
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}

export default Write

const Join = () => {
  return (
    <div className="join-container">
      <h4>회원가입</h4>
      <form action="/api/join/joinMember" method="POST">
        <input name="title" placeholder="contents title" />
        <input name="contents" placeholder="contetns" />
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}

export default Join

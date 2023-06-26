'use client'

const Error = ({ error, reset }) => {
  console.log(error)
  return (
    <div>
      <button
        onClick={() => {
          reset()
        }}
      >
        버튼
      </button>
    </div>
  )
}

export default Error

import React, { useState } from "react"

interface IProps {
  url: string
}

export default function UserLogin(props: IProps) {
  const [state, setstate] = useState(0)
  function add() {
    setTimeout(() => {
      setstate(state + 1)
    }, 1100)
  }

  return (
    <div>
      <h1 onClick={add}>请先登录{state}</h1>
      <h2>{props.url}</h2>
    </div>
  )
}

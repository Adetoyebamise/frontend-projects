import React from "react"

export default function Main() {
  const [count, setCount] = React.useState(0)
  function rightCount() {
    setCount(number => number + 1)
  }
  function leftCount() {
    setCount(number => number - 1)
  }
  return (
    <div className="Counter">
      <button className="minus__counter" onClick={leftCount}>
        -
      </button>
      <div className="counter__count">
        <h1>{count}</h1>
      </div>
      <button className="plus__counter" onClick={rightCount}>
        +
      </button>
    </div>
  )
}

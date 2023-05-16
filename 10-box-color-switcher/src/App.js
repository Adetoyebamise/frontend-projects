import "./App.css"
import Boxes from "./components/boxes.js"
import Data from "../src/BoxData.js"
import React from "react"

function App() {
  const [state, setState] = React.useState(Data)
  function toggle(id) {
    setState(prevState => {
      return prevState.map(stateData => {
        return stateData.id === id ? { ...stateData, bool: !stateData.bool } : stateData
      })
    })
  }
  const squareElements = state.map(square => {
    return <Boxes key={square.key} id={square.id} status={square.bool} toggle={() => toggle(square.id)} />
  })
  return <div className="box__app__container">{squareElements}</div>
}

export default App

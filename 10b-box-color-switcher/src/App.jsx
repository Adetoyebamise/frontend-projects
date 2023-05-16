import { useState } from "react"
import "./App.css"
import BoxData from "../src/BoxData.js"
import Box from "./Box"

function App() {
  const [state, setState] = useState(BoxData)

  function toggle(id) {
    setState(prevState => {
      return prevState.map(stateData => {
        return stateData.id === id ? { ...stateData, bool: !stateData } : stateData
      })
    })
  }
  const boxitem = state.map(boxdata => {
    return <Box key={boxdata.key} id={boxdata.id} bool={boxdata.bool} toggle={() => toggle(boxdata.id)} />
  })
  return <div className="app__container">{boxitem}</div>
}

export default App

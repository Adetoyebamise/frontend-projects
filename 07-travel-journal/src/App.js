import "./App.css"
import World from "../src/assets/world.png"
import LocationIcon from "../src/assets/placeholder.png"
import Navbar from "../src/components/Navbar"
import Place from "../src/components/Place"
import Data from "./Data"

function App() {
  const dataSet = Data.map(itemDetails => {
    return <Place locationpoint={LocationIcon} detail={itemDetails} />
  })
  return (
    <div className="travel__journey__app">
      <Navbar img={World} />
      {dataSet}
    </div>
  )
}

export default App

import { useState, useEffect } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import "./App.css"
import { nanoid } from "nanoid"
import Dice from "./Dice"

function App() {
  const [tenzies, setTenzies] = useState(0)
  const [dice, setDice] = useState(generateDice())

  useEffect(() => {
    const taptruthValue = dice.every(dice => dice.tapon)
    console.log("taptruthValue", taptruthValue)
    if (taptruthValue) {
      setTenzies(true)
      console.log("you've won the game")
    }
  }, [dice])

  function createDieObjectData() {
    return {
      diceNum: Math.floor(Math.random() * 10),
      tapon: false,
      id: nanoid(),
    }
  }

  function generateDice() {
    const newDice = []
    for (let index = 0; index < 10; index++) {
      newDice.push(createDieObjectData())
    }
    return newDice
  }

  function generateNewDice() {
    setDice(oldDice => {
      oldDice.map(oleDice => {
        return oldDice.tapon ? oleDice : createDieObjectData()
      })
    })
  }

  function holdDiceValue(id) {
    setDice(previousDiceValue => {
      previousDiceValue.map(dice => {
        return (dice.id = id ? { ...dice, tapon: !dice.tapon } : dice)
      })
    })
  }

  const showDice = dice.map(diceData => {
    return (
      <Dice
        value={diceData.diceNum}
        key={diceData.id}
        tapon={diceData.tapon}
        holdDiceValue={() => {
          holdDiceValue(diceData.id)
        }}
      />
    )
  })
  console.log("showDice", showDice)

  const refreshPage = async () => {
    window.location.reload
  }
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
      <div className="tenzies__app__container">
        <div className="tenzies__text__container">
          <h3 className="app__header__title">Tenzies</h3>
          <p className="app__intro__text">Roll until all dice are same. Click each dice to freeze it at its current value between rolls.</p>
        </div>
        {showDice}
        <div className="btn">
          {tenzies ? (
            <button className="button__roll" onClick={refreshPage}>
              Refresh
            </button>
          ) : (
            <button className="button__roll" onClick={generateNewDice}>
              Roll
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default App

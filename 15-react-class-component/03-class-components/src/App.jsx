import React from "react"
import "./App.css"

class App extends React.Component {
  //  set the state
  state = {
    character: {},
  }
  componentDidNotMount() {
    console.log("hello mount")
    fetch("https://swapi.dev/api/people/1/")
      .then(response => {
        console.log("response", response)
        response.json()
      })
      .then(movieData => {
        console.log("movieData", movieData)
        this.state({ character: movieData })
      })
  }
  render() {
    // const { name } = Object.values(this.state.character)
    console.log("this.state.character", this.state.character)
    return <h1>{this.state.character}</h1>
  }
}

export default App

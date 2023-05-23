import React from "react"
import "./App.css"

// This is React function based component

// function App() {
//   return(
//     <div className="container">
//       <h2>Function based Component</h2>
//     </div>
//   )
// }

// Class component transform
// class AppClass extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <h2>Class based Component</h2>
//       </div>
//     )
//   }
// }

//is react important? yer or no

// function App() {
//   const [answer, setAnswer] = React.useState(true)
//   function changeAnswer() {
//     setAnswer(prevanswer => !prevanswer)
//   }
//   return (
//     <div className="app-container">
//       <h2>Is React important?</h2>
//       <div onClick={changeAnswer} className="answer">
//         {answer ? "YES" : "NO"}
//       </div>
//     </div>
//   )
// }

// class App extends React.Component {
//   state = {
//     answer: true,
//   }
//   changeAnswer = () => {
//     this.setState(prevAnswer => {
//       return {
//         answer: !prevAnswer.answer,
//       }
//     })
//   }
//   render() {
//     return (
//       <div className="app-container">
//         <h2>Is React important?</h2>
//         <div onClick={this.changeAnswer} className="answer">
//           {this.answer ? "YES" : "NO"}
//         </div>
//       </div>
//     )
//   }
// }

// Constructor method in class component

class App extends React.Component {
  constructor(props) {
    super(props);
     this.state = { 
      goOut: "Yes"
    };
    this.toggleGoOut  = this.toggleGoOut.bind(this)
  }
  toggleGoOut() {
    this.setState(prevState => {
      return {
        goOut: prevState.goOut === "Yes"? "No" : "Yes"
      }
    })
  }
    render() {
      return (
        <div className="app-container">
        <h2>Should I ask the lady Out ?</h2>
        <div onClick={this.toggleGoOut} className="answer">
          <h1>
          {this.state.goOut} </h1>
        </div>
      </div>
      )
    }
  }

export default App

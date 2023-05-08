import React from "react"
import ReactDOM from 'react-dom';

const page = (
  <div>
    <h1>My awesome Website in React</h1>
    <h3>Reasons I love react</h3>
    <ol>
      <li>It's Composable</li>
      <li>It's Declarative</li>
      <li>It's a hirable Skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
)

ReactDOM.render(page, document.getElementById("root").append(page))

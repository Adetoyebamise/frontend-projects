import React from "react";
import ReactDOM from "react-dom"

const page = (
  <div>
    <img src="./coallit.jpeg "/>
    <h1>Fun fact about React</h1> 
    <ol>
      <li> was first established in 2013</li>
      <li> was originally creayed by Jordan Walke</li>
      <li> has well over 100k stars on GitHub</li>
      <li> is maintained by facebook</li>
      <li> powewered thousands of enterprise apps, incliding mobile apps</li>
     
    </ol>
  </div> 
)

ReactDOM.render(page, document.getElementById("root"))
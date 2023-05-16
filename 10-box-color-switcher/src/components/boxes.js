import React from "react"

export default function Boxes(props) {
  const backgroundcolor = { backgroundColor: props.status ? "rgb(145, 255, 182)" : "white" }
  return <div style={backgroundcolor} className="box" onClick={props.toggle}></div>
}

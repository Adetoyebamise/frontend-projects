import React from "react";

export default function Box(props) {
  const bgcolor = {backgroundColor: props.status ? "rgb(145, 255, 182)": "white"}
    return (
      <div style={bgcolor} className="box__container" onClick={props.toggle}></div>
    )
  
}
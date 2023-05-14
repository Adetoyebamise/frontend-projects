import React from "react"
function Navbar(props) {
  return (
    <div className="navbar__container">
      {" "}
      <div className="center__placing__container">
        {" "}
        <img src={props.img} alt="" className="nav__image" />
      <h4 className="nav__paragraph"> My Travel Journal</h4>
      </div>
    </div>
  )
}

export default Navbar

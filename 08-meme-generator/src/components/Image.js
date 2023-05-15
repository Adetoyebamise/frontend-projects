import React from "react"
// import Memeimage from "../assets/memeimg.png"
import memeData from "../memeData"
import Memeface from "../assets/Vector.png"

export default function Image(props) {
  const [memeImages, setMemeImages] = React.useState("")

  function getMemeImage() {
    const memeArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    setMemeImages(memeArray[randomNumber].url)
  }

  return (
    <div className="header__section">
      <div className="meme__header">
        <img src={Memeface} alt="meme face" className="header__image" />
        <h2 className="header__title">Meme Generator</h2>
      </div>
      <h4 className="header__project">React Course - Project 3</h4>
      <div className="entire__form__section">
        <div className="input__form__section">
          <input type="text" placeholder="shut up"></input>
          <input type="text" placeholder="take the money"></input>
        </div>
      </div>
        {/* <div className="form__b"></div> */}
        <div className="button__column__container">
          <button onClick={getMemeImage}> Get a new meme image 🖼</button>
        </div>
      <div className="image__section">
        <img src={memeImages} alt="meme" />
      </div>
    </div>
  )
}

import "./App.css"
import cardImage from "./assets/rectangle-90.png"
import twitterImage from "./assets/twitter-icon.png"
import igImage from "./assets/instagram-icon.png"
import githubImage from "./assets/github-icon.png"
import facebookImage from "./assets/facebook-icon.png"
import mailImage from "./assets/mail-icon.png"
import linkedinImage from "./assets/linkedin-icon.png"

function App() {
  return (
    <div class="container">
      <div class="card__body">
        <div class="card__header">
          {" "}
          <img src={cardImage} alt="card header" class="card__header__img" />
          {""}
        </div>
        <h3 class="card__name"> Laura Smith</h3>
        <span class="card__profession">Frontend Developer</span>
        <span class="card__website">laurasmith.website</span>
        <span class="card__social__email">
          <img src={mailImage} alt="email" class="" />
        </span>
        <span class="card__social__linkedin">
          
          <img src={linkedinImage} alt="linkedin" class="" />
        </span>
        <div class="card__body">
          <h3 class="card__body__about">About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <h3 class="card__body__interests"> Interests</h3>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic..</p>
      </div>
      <ul class="card__footer">
        <span class="card__footer__twitter">
          {" "}
          <img src={twitterImage} alt="twitter" class="" />
        </span>
        <span class="card__footer__facebook">
          <img src={igImage} alt="instagram" class="" />
        </span>
        <span class="card__footer__ig">
          <img src={githubImage} alt="github" class="" />
        </span>
        <span class="card__footer__github">
          <img src={facebookImage} alt="facebook" class="" />
        </span>
      </ul>
    </div>
  )
}

export default App

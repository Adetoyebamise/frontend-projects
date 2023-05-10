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
    // <div className="container">
    //   <div className="card__body">
    //     <div className="card__header">
    //       {" "}
    //       <img src={cardImage} alt="card header" className="card__header__img" />
    //       {""}
    //     </div>
    //     <h3 className="card__name"> Laura Smith</h3>
    //     <div className="card__profession">Frontend Developer</div>
    //     <div className="card__website">laurasmith.website</div>
    //     <div className="card__socials">
    //     <span className="card__social__email">
    //       <img src={mailImage} alt="email" className="" /> Email
    //     </span>
    //     <span className="card__social__linkedin">
    //       <img src={linkedinImage} alt="linkedin" className="" /> linkedin
    //     </span>
    //     </div>
    //     <div className="card__body__content">
    //       <h3 className="card__body__about">About</h3>
    //       <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    //     <h3 className="card__body__interests"> Interests</h3>
    //     <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic..</p>
    //     </div>
    //   </div>
    //   <div className="card__socials__footer">
    //     <ul className="card__footer">
    //       <span className="card__footer__twitter">
    //         {" "}
    //         <img src={twitterImage} alt="twitter" className="" />
    //       </span>
    //       <span className="card__footer__facebook">
    //         <img src={igImage} alt="instagram" className="" />
    //       </span>
    //       <span className="card__footer__ig">
    //         <img src={githubImage} alt="github" className="" />
    //       </span>
    //       <span className="card__footer__github">
    //         <img src={facebookImage} alt="facebook" className="" />
    //       </span>
    //     </ul>
    //   </div>
    // </div>
    <div className="container">
      <div className="card__body">
        <div className="card__header">
          {" "}
          <img src={cardImage} alt="card header" className="card__header__img" />
          {""}
        </div>
        <h3 className="card__name"> Laura Smith</h3>
        <div className="card__profession">Frontend Developer</div>
        <div className="card__website">laurasmith.website</div>
        <div className="card__socials">
        <span className="card__social__email">
          <img src={mailImage} alt="email" className="" /> Email
        </span>
        
        </div>
        <div className="card__body__content">
          <h3 className="card__body__about">About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h3 className="card__body__interests"> Interests</h3>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic..</p>
        </div>
      </div>
      <div className="card__socials__footer">
        <ul className="card__footer">
          <span className="card__footer__twitter">
            {" "}
            <img src={twitterImage} alt="twitter" className="" />
          </span>
          <span className="card__footer__facebook">
            <img src={igImage} alt="instagram" className="" />
          </span>
          <span className="card__footer__ig">
            <img src={githubImage} alt="github" className="" />
          </span>
          <span className="card__social__linkedin">
          <img src={linkedinImage} alt="linkedin" className="" /> 
        </span>
          <span className="card__footer__github">
            <img src={facebookImage} alt="facebook" className="" />
          </span>
        </ul>
      </div>
    </div>
  )
}

export default App

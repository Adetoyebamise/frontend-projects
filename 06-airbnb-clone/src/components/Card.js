import React from "react"
import SwimmerImage from "../assets/swimmer-image.png"
import StarOne from "../assets/star-1-1.png"
import Mountainbike from "../assets/mountain-bike.png"
import Weddingphotography from "../assets/wedding-photography-1.png"

export default function Card() {
  return (
    <section className="card__info">
      <div className="card__info__swimmer">
        <img src={SwimmerImage} alt="swimmer__image" />
        <div className="card__stats">
          <span>
            {" "}
            <img src={StarOne} alt="star__one" />
          </span>
          <span>5.0</span>
          <span>(6)</span>
          <span>USA</span>
          <div> Life lessons with Katie Zaferes</div>
          <div>From $136 / person</div>
        </div>
      </div>
      <div className="card__info__bride">
        <img src={Weddingphotography} alt="Wedding__photography" className="card__info__bride__pic"/>
        <div className="card__stats">
          <span>
            {" "}
            <img src={StarOne} alt="star__one" />
          </span>
          <span>5.0</span>
          <span>(3)</span>
          <span>USA</span>
          <div>Learn wedding photography</div>
          <div>From $125 / person</div>
        </div>
      </div>
      <div className="card__info__hike">
        <img src={Mountainbike} alt="Mountain__bike" className="card__info__hike__pic"/>
        <div className="card__stats">
          <span>
            {" "}
            <img src={StarOne} alt="star__one" />
          </span>
          <span>4.8</span>
          <span>(2)</span>
          <span>USA</span>
          <div>Group Mountain Biking</div>
          <div>From $50 / person</div>
        </div>
      </div>
    </section>
  )
}

import React from "react"

export default function place(props) {
  return (
    <div className="place__container">
      <div className="left__container">
        <img src="https://source.unsplash.com/WLxQvbMyfas" alt="error loading" className="left__image" />
      </div>
      <div className="right__container">
        <div className="travel__location">
          <div className="travel__location__icon">
            <img src={props.img} alt="location icon" className="travel__location__image" /> <span className="city__name"> JAPAN </span>
          </div>
          <div className="google__map">
            <a href="/" className="travel__location__maplink">
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="travel__destination__title">
          <h1 className="destination__name"> Mount Fuji</h1>
        </div>
        <div className="travel__destination__content">
          <h4> 12 Jan, 2021 - 24 Jan, 2021</h4>
          <p> Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
      </div>
    </div>
  )
}

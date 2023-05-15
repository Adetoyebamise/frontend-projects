import React from "react"

export default function place(props) {
  return (
    <div className="place__container">
      <div className="left__container">
        <img src={props.detail.imageUrl} alt="error loading" className="left__image" />
      </div>
      <div className="right__container">
        <div className="travel__location">
          <div className="travel__location__icon">
            <img src={props.locationpoint} alt="location icon" className="travel__location__image" /> <span className="city__name"> {props.detail.location} </span>
          </div>
          <div className="google__map">
            <a href={props.detail.googleMapsUrl} className="travel__location__maplink">
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="travel__destination__title">
          <h1 className="destination__name">{props.detail.title}</h1>
        </div>
        <div className="travel__destination__content">
          <h4>{props.detail.startDate} - {props.detail.endDate}</h4>
          <p> {props.detail.description}</p>
        </div>
      </div>
    </div>
  )
}

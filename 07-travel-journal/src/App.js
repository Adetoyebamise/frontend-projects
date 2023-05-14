import "./App.css"
import World from "../src/assets/world.png"
import LocationIcon from "../src/assets/placeholder.png"
import Navbar from "../src/components/Navbar"
import Place from "../src/components/Place"

function App() {
  return (
    <div className="travel__journey__app">
      <Navbar img={World} />
      <Place img={LocationIcon} />
      {/* <div className="travel__japan"> */}
      {/* <img src={LocationIcon} alt="location__icon" /> */}
      {/* <div className="destination__description__japan">
          <span>
            {" "}
            <span> </span>
            JAPAN
          </span>
          <span>View on Google Maps</span>
        </div> */}
      {/* <div>Mount Fuji</div>
        <div>12 Jan, 2021 - 24 Jan, 2021</div>
        <div>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</div>
      </div> */}
      {/* <div className="travel__australia"> */}
      {/* <img src={LocationIcon} alt="location__icon" /> */}
      {/* <div className="destination__description__australia"> */}
      {/* <span> */}
      {/* <span> </span> AUSTRALIA */}
      {/* </span> */}
      {/* <span>View on Google Maps</span> */}
      {/* </div> */}
      {/* <div>Sydney Opera House</div> */}
      {/* <div>27 May, 2021 - 8 Jun, 2021</div> */}
      {/* <div>The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings</div> */}
      {/* </div> */}
      {/* <div className="travel__oslo"> */}
      {/* <img src={LocationIcon} alt="location__icon" /> */}
      {/* <div className="destination__description__oslo">
          <span>
            <span> </span> NORWAY
          </span>
          <span>View on Google Maps</span>
        </div> */}
      {/* <div>Geirangerfjord</div> */}
      {/* <div>01 Oct, 2021 - 18 Nov, 2021</div> */}
      {/* <div>The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</div> */}
      {/* </div> */}
    </div>
  )
}

export default App

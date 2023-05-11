import "./App.css"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Airbnbtext from "./components/Airbnbtext.js"
import Card from "./components/Card.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Airbnbtext/>
      <Card />
    </div>
  )
}

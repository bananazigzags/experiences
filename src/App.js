import './App.css';
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data.js"

function App() {
  const cards = data.map(event => 
  <Card 
      img={event.coverImg}
      title={event.title}
      rating={event.stats.rating}
      reviewCount={event.stats.reviewCount}
      price={event.price}
      location={event.location}
      status={event.openSpots > 0 ? `SPOTS LEFT: ${event.openSpots}` : "SOLD OUT"}
  />)
  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;

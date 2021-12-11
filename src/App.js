import './App.css';
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data.js"

function App() {
  const cards = data.map(event => 
  <Card 
      key={event.id}
      img={event.coverImg}
      title={event.title}
      rating={event.stats.rating}
      reviewCount={event.stats.reviewCount}
      price={event.price}
      location={event.location}
      status={event.openSpots === 0 ? "SOLD OUT" : event.location === "Online" ? "ONLINE" : null}
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

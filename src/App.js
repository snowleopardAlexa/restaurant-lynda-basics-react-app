import React, {useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Error404,
  Services,
  CompanyHistory,
  Location
} from "./pages";
import restaurant from "./restaurant.jpg";
import Secret from "./components/Secret";
import Reducer from "./components/Reducer";
import GithubApi from "./components/GithubApi";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around</p>
      <img src={restaurant} alt="restaurant" />
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => 
        <li key={dish.i}>{dish.title}</li>)}
      </ul>
    </section>
  )
}

function Footer(props) {

  // hooks state
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] =useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here`);
  }, [secondary]);

  return (
    <div>
     <footer>
      <h3>Current emotion is {emotion} and {secondary}</h3>
      <button onClick={() => setEmotion("HAPPY")}>Make Happy</button>
      <button onClick={() => setEmotion("CRABBY")}>Make Crabby</button>
      <button onClick={() => setEmotion("FRUSTRATED")}>Frustrate</button>
      <button onClick={() => setEmotion("EXCITED")}>Excite</button>
      <h3>Copyright {props.year}</h3>
    </footer>
    </div>
  )
}

// array
const dishes = [
  "Salmon",
  "Tofu with Veggies",
  "Chicken Cutlet and Carrots",
  "Chicken Noddle Soup"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))

function App() {
  return (
    <div className="app">
     <Header name="Cindy" />
     <Main adjective="amazing" dishes={dishObjects} />
     <Footer year={new Date().getFullYear()} />
     <Secret />
     <Reducer />
     <GithubApi />
     <div className="routes">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
              <Route path="services" element={<Services />} />
              <Route path="history" element={<CompanyHistory />} />
              <Route path="location" element={<Location />} />
          </Route>
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
       </Routes>  
     </div>
    </div>
  );
}

export default App;

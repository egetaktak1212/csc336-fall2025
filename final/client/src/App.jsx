import { useEffect, useState } from "react";
import './App.css'
import Reviews from './Reviews.jsx';
import Home from './Home.jsx';
import Consoles from './Consoles.jsx';
import About from './About.jsx';
import Gazebo from './Gazebo.jsx';
import Hullabaloo from "./Hullabaloo.jsx";
import Game from "./Game.jsx"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    title: "GAH",
    items: "12345"
  })



  return (
    <>      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/thegazebo" element={<Gazebo />} />
        <Route path="/hullabaloo" element={<Hullabaloo />} />

        <Route path="/emergent" element={<Game gameName="emergence" />} />
        <Route path="/newyawcity" element={<Game gameName="flight" />} />
        <Route path="/units" element={<Game gameName="units" />} />
        <Route path="/tafonk" element={<Game gameName="tafonk" />} />
        <Route path="/castellum" element={<Game gameName="castellum" />} />

        <Route path="/braakerout" element={<Game gameName="braakeout" />} />
        <Route path="/jimmylagoon" element={<Game gameName="dialogue-1" />} />
        <Route path="/atomicinquiry" element={<Game gameName="dialogue-2" />} />
        <Route path="/yummytreebark" element={<Game gameName="simulation" />} />
        <Route path="/tryfallingsometime" element={<Game gameName="tryfalling" />} />


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import { useEffect, useState } from "react";
import './App.css'
import Reviews from './Reviews.jsx';
import Home from './Home.jsx';
import Consoles from './Consoles.jsx';
import About from './About.jsx';
import Gazebo from './Gazebo.jsx';
import Hullabaloo from "./Hullabaloo.jsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    title: "GAH",
    items: "12345"
  })

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => setData(json))
  }, []);


  return (
    <>      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consoles" element={<Consoles />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/thegazebo" element={<Gazebo />}/>
          <Route path="/hullabaloo" element={<Hullabaloo />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

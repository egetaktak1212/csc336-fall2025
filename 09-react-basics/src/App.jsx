import { useState } from "react";
import ListItem from "./ListItem"
import "./App.css"
import ApiThing from './ApiThing.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {

    const [items, setItems] = useState([
    {
      name: "The Wonders of the Universe",
      image: "https://static.scientificamerican.com/dam/m/6ab948766f3b54d1/original/sa0925Adva04.jpg?m=1754937178.062&w=600",
      quantity: 1,
    },
    {
      name: "Parmesan",
      image: "https://i5.walmartimages.com/seo/Kraft-Parmesan-Grated-Cheese-8-oz-Shaker_a8ba50ae-75cc-4dbc-b516-9fa9a5ea6468.472203b8e9b560e4f7f798b430d8f6e9.jpeg",
      quantity: 3,
    }
  ]);

  function addItemToListFromAppFileYeah(item) {
    setItems([...items, item])
  }

  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/" className={"navlinks"}>Home</NavLink>
          <NavLink to="/about" className={"navlinks"}>About</NavLink>
          <NavLink to="/apithing" className={"navlinks"}>Recipes</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home items={items} setItems={setItems}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/apithing" element={<ApiThing itemfunction={addItemToListFromAppFileYeah}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
import { useState } from "react";
import ListItem from "./ListItem"
import "./App.css"
import ApiThing from './ApiThing.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/apithing">API Page</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/apithing" element={<ApiThing/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
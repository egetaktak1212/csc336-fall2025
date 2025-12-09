import './Consoles.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";



function Consoles() {


  return (
    <div>
      <div className="consoles-full-page">
        <div className="consoles-nav-buttons">
          <NavLink to="/" className="nav-link" style={{ color: 'white' }}>Home</NavLink>
        </div>

        <div className="consoles-title">
          PICK A CONSOLE
        </div>
        <div className="console-images">
          <NavLink to="/thegazebo">
            <img src="./assets/pickgazebo.png" className="console-img" />
          </NavLink>
          <NavLink to="/hullabaloo">
            <img src="./assets/pickhullabaloo.png" className="console-img" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}


export default Consoles;
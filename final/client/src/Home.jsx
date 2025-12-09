import './Home.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Home() {


  return (

    <>

      <div className="home-cont">
        <div id="maintitle">
          <span className="gazebo alagard">THE GAZEBO</span>
          <br />
          <span className="emulator ari">EMULATOR</span>
        </div>

        <div className="nav-buttons">
          <NavLink to="/about" className="about-btn ari">About</NavLink>
          <NavLink to="/consoles" className="consoles-btn alagard">Consoles</NavLink>
          <NavLink to="/reviews" className="reviews-btn ari">Reviews</NavLink>
        </div>

      </div>
    </>
  );
}


export default Home;
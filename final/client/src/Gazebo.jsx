import './Gazebo.css';
import { NavLink } from "react-router-dom";

function Gazebo() {
  return (
    <div className="gazebo-full-page">
      <div className="gazebo-nav-buttons">
        <NavLink to="/consoles" className="nav-link" style={{ color: 'white' }}>
          Consoles
        </NavLink>
      </div>
    <img src="/assets/gazebologo.png" width={600}/>
      <div className="gazebo-title">GAMES</div>

      <div className="gazebo-images">
        <NavLink to="/emergent"><img src="/assets/games/emergentgame.png" className="gazebo-img" /></NavLink>
        <NavLink to="/newyawcity"><img src="/assets/games/newyawcity.png" className="gazebo-img" /></NavLink>
        <NavLink to="/units"><img src="/assets/games/units.png" className="gazebo-img" /></NavLink>
        <NavLink to="/tafonk"><img src="/assets/games/tafonk.png" className="gazebo-img" /></NavLink>
        <NavLink to="/castellum"><img src="/assets/games/castellumignoramus.png" className="gazebo-img" /></NavLink>
      </div>
    </div>
  );
}

export default Gazebo;
